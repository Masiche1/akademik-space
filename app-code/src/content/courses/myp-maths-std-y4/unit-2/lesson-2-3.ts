import type { Lesson } from "../../../types.ts";

export const lesson23: Lesson = {
  id: "mypms4-u2-lesson-2-3",
  code: "2-3",
  title: "Completing the Square and Sequences",
  goal: "I CAN complete the square to solve quadratics, find the nth term of linear and quadratic sequences, and use sequence formulae.",
  standards: [
    "MYP Maths: Algebra",
    "Criterion A: Knowing and understanding",
    "Criterion B: Investigating patterns",
  ],
  vocabulary: [
    { term: "Completing the square", definition: "Rewriting $ax^2+bx+c$ as $a(x+h)^2+k$ to reveal the vertex or solve equations." },
    { term: "Vertex", definition: "The maximum or minimum point of a parabola." },
    { term: "Quadratic sequence", definition: "A sequence whose terms follow a quadratic rule, e.g. 3, 6, 11, 18, ..." },
    { term: "Second difference", definition: "The difference between consecutive differences in a quadratic sequence; constant for quadratic sequences." },
    { term: "Geometric sequence", definition: "A sequence where each term is multiplied by a constant ratio, e.g. 2, 6, 18, 54, ..." },
  ],
  concepts: [
    {
      id: "mypms4-u2-completing",
      title: "Completing the square",
      skill: "Complete the square for monic quadratics and use it to find the vertex and solve equations.",
      lesson: {
        sections: [
          {
            heading: "The method",
            body: "For $x^2+bx$, add and subtract $\\left(\\frac{b}{2}\\right)^2$: $x^2+bx=\\left(x+\\frac{b}{2}\\right)^2-\\left(\\frac{b}{2}\\right)^2$. For example, $x^2+6x=(x+3)^2-9$.",
          },
          {
            heading: "Full form",
            body: "For $x^2+bx+c$: complete the square on the first two terms, then combine constants. $x^2+6x+5=(x+3)^2-9+5=(x+3)^2-4$. The vertex of $y=(x+3)^2-4$ is $(-3,-4)$ — the minimum since the coefficient of $x^2$ is positive.",
          },
          {
            heading: "Solving with completing the square",
            body: "Set the completed form equal to zero and solve: $(x+3)^2-4=0 \\Rightarrow (x+3)^2=4 \\Rightarrow x+3=\\pm2 \\Rightarrow x=1$ or $x=-5$. This works even when the quadratic doesn't factorise.",
          },
        ],
        keyFormulas: [
          { name: "Completing the square", statement: "$x^2+bx+c=\\left(x+\\frac{b}{2}\\right)^2+c-\\frac{b^2}{4}$" },
          { name: "Vertex", statement: "$\\left(-\\frac{b}{2},\\ c-\\frac{b^2}{4}\\right)$" },
        ],
        workedExample: {
          problem: "Write $x^2-8x+3$ in the form $(x+h)^2+k$.",
          solution: "$x^2-8x=(x-4)^2-16$, so $x^2-8x+3=(x-4)^2-13$. Thus $h=-4$, $k=-13$.",
        },
      },
      questions: [
        {
          id: "mypms4-u2-cs-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Complete the square: $x^2+4x$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$(x+2)^2+4$" },
              { id: "b", text: "$(x+4)^2-16$" },
              { id: "c", text: "$(x+2)^2-4$" },
              { id: "d", text: "$(x-2)^2-4$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Completing the square", statement: "$x^2+bx=(x+\\frac{b}{2})^2-(\\frac{b}{2})^2$." },
            ],
            steps: [
              { reasoning: "$\\frac{b}{2}=2$; $(x+2)^2-4$.", working: "(x+2)^2-4", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $(x+2)^2-4$",
            commonErrors: ["Using $b$ instead of $\\frac{b}{2}$."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypms4-u2-cs-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Write $x^2-10x+21$ in the form $(x+h)^2+k$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$(x-5)^2+4$" },
              { id: "b", text: "$(x-5)^2-4$" },
              { id: "c", text: "$(x+5)^2-4$" },
              { id: "d", text: "$(x-10)^2+21$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Completing the square", statement: "$x^2+bx+c=(x+\\frac{b}{2})^2+c-\\frac{b^2}{4}$." },
            ],
            steps: [
              { reasoning: "$x^2-10x=(x-5)^2-25$; add 21: $(x-5)^2-4$.", working: "(x-5)^2-4", marks: 1, markCode: "M" },
              { reasoning: "Verify by expanding: $x^2-10x+25-4=x^2-10x+21$. ✓", working: "x^2-10x+21", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$(x-5)^2-4$",
            commonErrors: ["Sign error in $h$ — should be $-5$, not $+5$."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypms4-u2-cs-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Use completing the square to solve $x^2+6x-7=0$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x=2$ or $x=-8$" },
              { id: "b", text: "$x=1$ or $x=-7$" },
              { id: "c", text: "$x=-1$ or $x=7$" },
              { id: "d", text: "$x=-3$ or $x=3$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Completing the square", statement: "$(x+3)^2-16=0 \\Rightarrow (x+3)^2=16 \\Rightarrow x+3=\\pm4$." },
            ],
            steps: [
              { reasoning: "$x^2+6x-7=(x+3)^2-16=0$.", working: "(x+3)^2=16", marks: 1, markCode: "M" },
              { reasoning: "$x+3=4$ or $x+3=-4$.", working: "x=1\\text{ or }x=-7", marks: 1, markCode: "M" },
              { reasoning: "State both solutions.", working: "x=1,\\ x=-7", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x=1$ or $x=-7$",
            commonErrors: ["Forgetting the $\\pm$ — missing the negative root."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypms4-u2-cs-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A sequence has terms 3, 7, 13, 21, 31, ...",
          parts: [
            { label: "a", prompt: "Find the first and second differences.", marks: 2 },
            { label: "b", prompt: "State whether the sequence is linear or quadratic and justify.", marks: 2 },
            { label: "c", prompt: "Find a formula for the $n$th term.", marks: 3 },
            { label: "d", prompt: "Use your formula to find the 10th term.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Sequence differences", statement: "Constant first difference → linear; constant second difference → quadratic." },
            ],
            steps: [
              { part: "a", reasoning: "First differences: 4, 6, 8, 10; second differences: 2, 2, 2.", working: "4,6,8,10\\text{ and }2,2,2", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Both difference sets correct.", working: "\\text{first: }4,6,8,10;\\text{ second: }2,2,2", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Second differences are constant (2), first are not.", working: "\\text{constant second difference}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Therefore quadratic.", working: "\\text{quadratic}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Second difference 2 means coefficient of $n^2$ is $\\frac{2}{2}=1$.", working: "n^2", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Try $n^2+an+b$: $n=1$ gives $1+a+b=3$, $n=2$ gives $4+2a+b=7$; subtract: $3+a=4$, $a=1$; then $b=1$. So $n^2+n+1$.", working: "n^2+n+1", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Verify: $n=3$: $9+3+1=13$. ✓", working: "n^2+n+1", marks: 1, markCode: "A" },
              { part: "d", reasoning: "$10^2+10+1=111$.", working: "111", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) first: 4,6,8,10; second: 2,2,2 (b) quadratic — constant second difference (c) $n^2+n+1$ (d) 111",
            commonErrors: ["Forgetting that the second difference 2 means coefficient $\\frac{2}{2}=1$, not 2."],
            examinerNote: "M1 A1 for (a), M1 A1 for (b), M1 M1 A1 for (c), A1 for (d).",
          },
        },
        {
          id: "mypms4-u2-cs-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Complete the square: $x^2+8x$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$(x+4)^2+16$" },
              { id: "b", text: "$(x+8)^2-64$" },
              { id: "c", text: "$(x+4)^2-16$" },
              { id: "d", text: "$(x-4)^2-16$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Completing the square", statement: "$x^2+bx=(x+\\frac{b}{2})^2-(\\frac{b}{2})^2$." },
            ],
            steps: [
              { reasoning: "$\\frac{b}{2}=4$; $(x+4)^2-16$.", working: "(x+4)^2-16", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $(x+4)^2-16$",
            commonErrors: ["Using $b$ instead of $\\frac{b}{2}$: $(x+8)^2-64$."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypms4-u2-cs-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Write $x^2-6x$ in the form $(x+h)^2+k$. State the value of $k$.",
          response: {
            type: "numeric",
            parts: [{ label: "$k$", answer: -9 }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Completing the square", statement: "$x^2+bx=(x+\\frac{b}{2})^2-(\\frac{b}{2})^2$." },
            ],
            steps: [
              { reasoning: "$x^2-6x=(x-3)^2-9$, so $k=-9$.", working: "(x-3)^2-9", marks: 1, markCode: "B" },
            ],
            finalAnswer: "$k=-9$",
            commonErrors: ["Writing $k=9$ — the subtracted term is negative."],
            examinerNote: "B1 for $-9$.",
          },
        },
        {
          id: "mypms4-u2-cs-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Write $x^2+10x+24$ in the form $(x+h)^2+k$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$(x+5)^2-1$" },
              { id: "b", text: "$(x+10)^2+24$" },
              { id: "c", text: "$(x-5)^2-1$" },
              { id: "d", text: "$(x+5)^2+1$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Completing the square", statement: "$x^2+bx+c=(x+\\frac{b}{2})^2+c-\\frac{b^2}{4}$." },
            ],
            steps: [
              { reasoning: "$x^2+10x=(x+5)^2-25$; add 24: $(x+5)^2-1$.", working: "(x+5)^2-1", marks: 1, markCode: "M" },
              { reasoning: "Verify: $x^2+10x+25-1=x^2+10x+24$. ✓", working: "x^2+10x+24", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$(x+5)^2-1$",
            commonErrors: ["Sign error: writing $(x-5)^2$ instead of $(x+5)^2$."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypms4-u2-cs-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Write $x^2-4x+7$ in the form $(x+h)^2+k$. State the value of $k$.",
          response: {
            type: "numeric",
            parts: [{ label: "$k$", answer: 3 }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Completing the square", statement: "$x^2+bx+c=(x+\\frac{b}{2})^2+c-\\frac{b^2}{4}$." },
            ],
            steps: [
              { reasoning: "$x^2-4x=(x-2)^2-4$; add 7: $(x-2)^2+3$, so $k=3$.", working: "(x-2)^2+3", marks: 1, markCode: "M" },
              { reasoning: "Verify: $x^2-4x+4+3=x^2-4x+7$. ✓", working: "k=3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$k=3$",
            commonErrors: ["Computing $7-4=3$ but writing $k=-3$."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypms4-u2-cs-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Use completing the square to solve $x^2-2x-8=0$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x=1$ or $x=-8$" },
              { id: "b", text: "$x=8$ or $x=-1$" },
              { id: "c", text: "$x=-4$ or $x=2$" },
              { id: "d", text: "$x=4$ or $x=-2$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Completing the square", statement: "$x^2-2x=(x-1)^2-1$, so $(x-1)^2=9$." },
            ],
            steps: [
              { reasoning: "$x^2-2x-8=(x-1)^2-9=0$, so $(x-1)^2=9$ and $x-1=\\pm3$.", working: "(x-1)^2=9", marks: 1, markCode: "M" },
              { reasoning: "$x=4$ or $x=-2$.", working: "x=4,\\ x=-2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x=4$ or $x=-2$",
            commonErrors: ["Forgetting the $\\pm$ — missing $x=-2$."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypms4-u2-cs-q10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "What are the coordinates of the vertex of $y=x^2-6x+5$? State the $x$ and $y$ coordinates.",
          response: {
            type: "numeric",
            parts: [{ label: "$x$-coordinate", answer: 3 }, { label: "$y$-coordinate", answer: -4 }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Vertex", statement: "Write as $(x+h)^2+k$; vertex is $(-h,k)$." },
            ],
            steps: [
              { reasoning: "$x^2-6x+5=(x-3)^2-9+5=(x-3)^2-4$.", working: "(x-3)^2-4", marks: 1, markCode: "M" },
              { reasoning: "Vertex is $(3,-4)$ — the minimum since $x^2$ coefficient is positive.", working: "(3,-4)", marks: 1, markCode: "M" },
              { reasoning: "State the vertex.", working: "(3,-4)", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$(3,-4)$",
            commonErrors: ["Giving $(-3,-4)$ — wrong sign on the $x$-coordinate."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypms4-u2-cs-q11",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Use completing the square to solve $x^2+4x=5$.",
          response: {
            type: "numeric",
            parts: [{ label: "$x$", answer: 1 }, { label: "$x$", answer: -5 }],
            unordered: true,
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Completing the square", statement: "$x^2+4x=(x+2)^2-4$, so $(x+2)^2=9$." },
            ],
            steps: [
              { reasoning: "$x^2+4x-5=0$ becomes $(x+2)^2-9=0$, so $(x+2)^2=9$ and $x+2=\\pm3$.", working: "(x+2)^2=9", marks: 1, markCode: "M" },
              { reasoning: "$x+2=3$ gives $x=1$; $x+2=-3$ gives $x=-5$.", working: "x=1,\\ x=-5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x=1$ or $x=-5$",
            commonErrors: ["Forgetting the $\\pm$ — missing $x=-5$."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypms4-u2-cs-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write $x^2+6x+11$ in the form $(x+h)^2+k$. Find $h+k$.",
          response: {
            type: "numeric",
            parts: [{ label: "$h+k$", answer: 5 }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Completing the square", statement: "$x^2+bx+c=(x+\\frac{b}{2})^2+c-\\frac{b^2}{4}$." },
            ],
            steps: [
              { reasoning: "$x^2+6x=(x+3)^2-9$; add 11: $(x+3)^2+2$.", working: "(x+3)^2+2", marks: 1, markCode: "M" },
              { reasoning: "$h=3$, $k=2$.", working: "h=3,\\ k=2", marks: 1, markCode: "M" },
              { reasoning: "$h+k=5$.", working: "h+k=5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$h+k=5$",
            commonErrors: ["Sign error on $h$ — $h=3$, not $-3$."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypms4-u2-cs-q13",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A sequence has terms 2, 5, 10, 17, 26, 37, ...",
          parts: [
            { label: "a", prompt: "Find the first and second differences.", marks: 2 },
            { label: "b", prompt: "State whether the sequence is linear or quadratic.", marks: 1 },
            { label: "c", prompt: "Find a formula for the $n$th term.", marks: 2 },
            { label: "d", prompt: "Use your formula to find the 8th term.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Sequence differences", statement: "Constant first difference → linear; constant second difference → quadratic." },
            ],
            steps: [
              { part: "a", reasoning: "First differences: 3, 5, 7, 9, 11; second differences: 2, 2, 2, 2.", working: "3,5,7,9,11\\text{ and }2,2,2,2", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Both difference sets correct.", working: "\\text{first and second diffs}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Second differences are constant (2), so the sequence is quadratic.", working: "\\text{quadratic}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Second difference 2 means coefficient of $n^2$ is 1; try $n^2+an+b$: $n=1$ gives $1+a+b=2$, $n=2$ gives $4+2a+b=5$; subtract: $3+a=3$, $a=0$; then $b=1$. So $n^2+1$.", working: "n^2+1", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Verify: $n=3$: $9+1=10$. ✓", working: "n^2+1", marks: 1, markCode: "A" },
              { part: "d", reasoning: "$8^2+1=65$.", working: "65", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) first: 3,5,7,9,11; second: 2,2,2,2 (b) quadratic (c) $n^2+1$ (d) 65",
            commonErrors: ["Using second difference 2 directly as the $n^2$ coefficient."],
            examinerNote: "M1 A1 for (a), A1 for (b), M1 A1 for (c), A1 for (d).",
          },
        },
        {
          id: "mypms4-u2-cs-q14",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Find the minimum value of $y=x^2-12x+20$.",
          response: {
            type: "numeric",
            parts: [{ label: "Minimum value of $y$", answer: -16 }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Vertex", statement: "$(x+h)^2+k$ has minimum $k$ when the coefficient of $x^2$ is positive." },
            ],
            steps: [
              { reasoning: "$x^2-12x=(x-6)^2-36$; add 20: $(x-6)^2-16$.", working: "(x-6)^2-16", marks: 1, markCode: "M" },
              { reasoning: "Minimum occurs at $k=-16$ (since $(x-6)^2\\ge0$).", working: "k=-16", marks: 1, markCode: "M" },
              { reasoning: "State the minimum value.", working: "-16", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$-16$",
            commonErrors: ["Reporting the vertex $x$-coordinate instead of the minimum $y$-value."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypms4-u2-cs-q15",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why completing the square works, using $x^2+6x$ as an example.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Completing the square", statement: "Add and subtract $(\\frac{b}{2})^2$ to form a perfect square." },
            ],
            steps: [
              { reasoning: "Halve the coefficient of $x$: $\\frac{6}{2}=3$.", working: "3", marks: 1, markCode: "M" },
              { reasoning: "$(x+3)^2=x^2+6x+9$, so $x^2+6x=(x+3)^2-9$ — add 9 then subtract 9 to keep the value unchanged.", working: "(x+3)^2-9", marks: 1, markCode: "M" },
              { reasoning: "The result is a perfect square plus a constant.", working: "\\text{perfect square}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x^2+6x=(x+3)^2-9$ because $(x+3)^2=x^2+6x+9$.",
            commonErrors: ["Not explaining the add-and-subtract step."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypms4-u2-cs-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "What are the coordinates of the vertex of $y=(x-2)^2+5$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$(2,5)$" },
              { id: "b", text: "$(5,2)$" },
              { id: "c", text: "$(2,-5)$" },
              { id: "d", text: "$(-2,5)$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Vertex", statement: "In $(x-h)^2+k$, the vertex is $(h,k)$; the squared term is always $\\ge0$." },
            ],
            steps: [
              { reasoning: "$(x-2)^2\\ge0$ with equality at $x=2$.", working: "x=2", marks: 1, markCode: "M" },
              { reasoning: "At $x=2$, $y=0+5=5$.", working: "y=5", marks: 1, markCode: "M" },
              { reasoning: "Vertex is $(2,5)$ — a minimum.", working: "(2,5)", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$(2,5)$",
            commonErrors: ["Reading $(x-2)$ as $h=-2$ instead of $h=2$."],
            examinerNote: "M1 M1 A1.",
          },
        },
      ],
    },
    {
      id: "mypms4-u2-sequences",
      title: "Sequence formulae",
      skill: "Derive and use formulae for arithmetic, geometric and quadratic sequences, including recursive thinking.",
      lesson: {
        sections: [
          {
            heading: "Arithmetic sequences",
            body: "An **arithmetic sequence** has a constant difference $d$. The $n$th term is $a+(n-1)d$. The sum of the first $n$ terms is $S_n=\\frac{n}{2}[2a+(n-1)d]$ or $\\frac{n}{2}(\\text{first}+\\text{last})$.",
          },
          {
            heading: "Geometric sequences",
            body: "A **geometric sequence** has a constant ratio $r$: each term is multiplied by $r$. The $n$th term is $ar^{n-1}$. Example: 3, 6, 12, 24, ... has $r=2$ and nth term $3\\times2^{n-1}$.",
          },
          {
            heading: "Recognising sequence types",
            body: "Check first differences: constant → arithmetic. Check ratios: constant → geometric. Check second differences: constant → quadratic. Knowing the type tells you which formula to use.",
          },
        ],
        keyFormulas: [
          { name: "Arithmetic nth term", statement: "$a+(n-1)d$" },
          { name: "Geometric nth term", statement: "$ar^{n-1}$" },
          { name: "Arithmetic sum", statement: "$S_n=\\frac{n}{2}[2a+(n-1)d]$" },
        ],
        workedExample: {
          problem: "Find the 8th term of the geometric sequence 5, 15, 45, 135, ...",
          solution: "$r=3$, so nth term $=5\\times3^{n-1}$. 8th term $=5\\times3^7=5\\times2187=10935$.",
        },
      },
      questions: [
        {
          id: "mypms4-u2-seq-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the common ratio of 4, 12, 36, 108, ...?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "3" },
              { id: "b", text: "$\\frac{1}{3}$" },
              { id: "c", text: "8" },
              { id: "d", text: "4" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Geometric sequence", statement: "Each term = previous × constant ratio." },
            ],
            steps: [
              { reasoning: "$12\\div4=3$; $36\\div12=3$. Ratio = 3.", working: "r=3", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** 3",
            commonErrors: ["Computing difference instead of ratio."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypms4-u2-seq-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the 6th term of the arithmetic sequence 2, 7, 12, 17, ...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "32" },
              { id: "b", text: "27" },
              { id: "c", text: "22" },
              { id: "d", text: "37" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "nth term", statement: "$a+(n-1)d$ with $a=2$, $d=5$." },
            ],
            steps: [
              { reasoning: "$2+5\\times5=2+25=27$.", working: "2+5\\times5=27", marks: 1, markCode: "M" },
              { reasoning: "State the 6th term.", working: "27", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$27$",
            commonErrors: ["Using $n$ instead of $n-1$ when multiplying by $d$."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypms4-u2-seq-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A geometric sequence has first term 4 and common ratio 3. Find the 5th term.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "108" },
              { id: "b", text: "256" },
              { id: "c", text: "324" },
              { id: "d", text: "972" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Geometric nth term", statement: "$ar^{n-1}=4\\times3^{n-1}$." },
            ],
            steps: [
              { reasoning: "5th term $=4\\times3^4=4\\times81$.", working: "4\\times3^4=4\\times81", marks: 1, markCode: "M" },
              { reasoning: "$=324$.", working: "324", marks: 1, markCode: "M" },
              { reasoning: "State the answer.", working: "324", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$324$",
            commonErrors: ["Using $3^5$ instead of $3^4$ (i.e. $n$ instead of $n-1$)."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypms4-u2-seq-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A savings account pays 5% compound interest per year. £2000 is deposited.",
          parts: [
            { label: "a", prompt: "Write down the multiplier for each year.", marks: 1 },
            { label: "b", prompt: "Calculate the balance after 1 year.", marks: 2 },
            { label: "c", prompt: "Calculate the balance after 3 years.", marks: 2 },
            { label: "d", prompt: "Find the smallest whole number of years for the balance to exceed £3000, showing your method.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Compound growth", statement: "Each year multiply by $1.05$ — a geometric sequence." },
            ],
            steps: [
              { part: "a", reasoning: "Multiplier = $1+\\frac{5}{100}=1.05$.", working: "1.05", marks: 1, markCode: "M" },
              { part: "b", reasoning: "$2000\\times1.05=2100$.", working: "2100", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the balance.", working: "2100", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$2000\\times1.05^3=2000\\times1.157625=2315.25$.", working: "2315.25", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State the balance.", working: "2315.25", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Need $2000\\times1.05^n>3000$, i.e. $1.05^n>1.5$.", working: "1.05^n>1.5", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Try $n=8$: $1.05^8\\approx1.477<1.5$; $n=9$: $\\approx1.551>1.5$.", working: "n=9", marks: 1, markCode: "M" },
              { part: "d", reasoning: "State the smallest $n$.", working: "n=9", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 1.05 (b) £2100 (c) £2315.25 (d) 9 years",
            commonErrors: ["Using simple interest instead of compound."],
            examinerNote: "M1 for (a), M1 A1 for (b), M1 A1 for (c), M1 M1 A1 for (d).",
          },
        },
        {
          id: "mypms4-u2-seq-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the common difference of the sequence 3, 7, 11, 15, ...?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "4" },
              { id: "b", text: "$\\frac{7}{3}$" },
              { id: "c", text: "7" },
              { id: "d", text: "3" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Arithmetic sequence", statement: "Constant difference between consecutive terms." },
            ],
            steps: [
              { reasoning: "$7-3=4$; $11-7=4$ — common difference is 4.", working: "d=4", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** 4",
            commonErrors: ["Computing the ratio instead of the difference."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mypms4-u2-seq-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Find the 5th term of the sequence 2, 5, 8, 11, ...",
          response: {
            type: "numeric",
            parts: [{ label: "$a_5$", answer: 14 }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "nth term", statement: "$a+(n-1)d$ with $a=2$, $d=3$." },
            ],
            steps: [
              { reasoning: "$2+4\\times3=14$.", working: "2+12=14", marks: 1, markCode: "B" },
            ],
            finalAnswer: "$14$",
            commonErrors: ["Counting the first term as term 0."],
            examinerNote: "B1 for 14.",
          },
        },
        {
          id: "mypms4-u2-seq-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "For the sequence 4, 10, 16, 22, ..., find the 7th term.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "36" },
              { id: "b", text: "34" },
              { id: "c", text: "40" },
              { id: "d", text: "28" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "nth term", statement: "$a+(n-1)d$ with $a=4$, $d=6$." },
            ],
            steps: [
              { reasoning: "$4+6\\times6=4+36=40$.", working: "4+36=40", marks: 1, markCode: "M" },
              { reasoning: "State the 7th term.", working: "40", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$40$",
            commonErrors: ["Using $n=7$ instead of $n-1=6$ multiplications of $d$."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypms4-u2-seq-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the 6th term of the geometric sequence 3, 6, 12, 24, ...",
          response: {
            type: "numeric",
            parts: [{ label: "$a_6$", answer: 96 }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Geometric nth term", statement: "$ar^{n-1}$ with $a=3$, $r=2$." },
            ],
            steps: [
              { reasoning: "Common ratio $r=2$; $a_6=3\\times2^5=3\\times32$.", working: "3\\times2^5", marks: 1, markCode: "M" },
              { reasoning: "$a_6=96$.", working: "96", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$96$",
            commonErrors: ["Using $2^6$ instead of $2^5$."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypms4-u2-seq-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which of these sequences is arithmetic?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "3, 6, 12, 24, ..." },
              { id: "b", text: "2, 4, 8, 16, ..." },
              { id: "c", text: "1, 2, 4, 7, ..." },
              { id: "d", text: "5, 9, 13, 17, ..." },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Arithmetic sequence", statement: "Constant first difference." },
            ],
            steps: [
              { reasoning: "Check differences in (b): $9-5=4$, $13-9=4$, $17-13=4$ — constant.", working: "d=4", marks: 1, markCode: "M" },
              { reasoning: "The others have no constant difference.", working: "\\text{not constant}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** 5, 9, 13, 17, ...",
            commonErrors: ["Choosing a geometric sequence by mistake."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypms4-u2-seq-q10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Find the sum of the first 10 terms of the arithmetic sequence 2, 5, 8, 11, ...",
          response: {
            type: "numeric",
            parts: [{ label: "$S_{10}$", answer: 155 }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Arithmetic sum", statement: "$S_n=\\frac{n}{2}[2a+(n-1)d]$." },
            ],
            steps: [
              { reasoning: "$a=2$, $d=3$, $n=10$: $S_{10}=\\frac{10}{2}[4+9\\times3]$.", working: "S_{10}=5[4+27]", marks: 1, markCode: "M" },
              { reasoning: "$=5\\times31=155$.", working: "5\\times31=155", marks: 1, markCode: "M" },
              { reasoning: "State the sum.", working: "155", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$155$",
            commonErrors: ["Using $n=10$ instead of $n-1=9$ inside the bracket."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypms4-u2-seq-q11",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A geometric sequence has first term 2 and common ratio 3. Find the 6th term.",
          response: {
            type: "numeric",
            parts: [{ label: "$a_6$", answer: 486 }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Geometric nth term", statement: "$ar^{n-1}=2\\times3^{n-1}$." },
            ],
            steps: [
              { reasoning: "$a_6=2\\times3^5=2\\times243$.", working: "2\\times3^5", marks: 1, markCode: "M" },
              { reasoning: "$a_6=486$.", working: "486", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$486$",
            commonErrors: ["Using $3^6$ instead of $3^5$."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypms4-u2-seq-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "An arithmetic sequence has first term 7 and common difference $-3$. Find the smallest $n$ for which the $n$th term is negative.",
          response: {
            type: "numeric",
            parts: [{ label: "$n$", answer: 4 }],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "nth term", statement: "Term $=7-3(n-1)=10-3n$; solve $10-3n<0$." },
            ],
            steps: [
              { reasoning: "Set up: $10-3n<0$, so $3n>10$, $n>3.33$.", working: "n>3.33", marks: 1, markCode: "M" },
              { reasoning: "Smallest integer $n=4$; check: $10-12=-2<0$. ✓", working: "n=4", marks: 1, markCode: "M" },
              { reasoning: "State the answer.", working: "n=4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$n=4$",
            commonErrors: ["Rounding $3.33$ down to 3 — the term must be strictly negative."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypms4-u2-seq-q13",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A savings account pays 4% compound interest per year. £1000 is deposited.",
          parts: [
            { label: "a", prompt: "Write down the multiplier for each year.", marks: 1 },
            { label: "b", prompt: "Calculate the balance after 2 years.", marks: 2 },
            { label: "c", prompt: "Find the smallest whole number of years for the balance to exceed £1200, showing your method.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Compound growth", statement: "Each year multiply by $1.04$ — a geometric sequence." },
            ],
            steps: [
              { part: "a", reasoning: "Multiplier $=1+\\frac{4}{100}=1.04$.", working: "1.04", marks: 1, markCode: "M" },
              { part: "b", reasoning: "$1000\\times1.04^2=1000\\times1.0816$.", working: "1.0816", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Balance after 2 years $=£1081.60$.", working: "1081.60", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Need $1000\\times1.04^n>1200$, i.e. $1.04^n>1.2$.", working: "1.04^n>1.2", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Try $n=4$: $1.04^4\\approx1.170<1.2$; $n=5$: $\\approx1.217>1.2$.", working: "n=5", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State the smallest $n$.", working: "n=5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 1.04 (b) £1081.60 (c) 5 years",
            commonErrors: ["Using simple interest instead of compound."],
            examinerNote: "M1 for (a), M1 A1 for (b), M1 M1 A1 for (c).",
          },
        },
        {
          id: "mypms4-u2-seq-q14",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Find the 5th term of the geometric sequence 4, 12, 36, 108, ...",
          response: {
            type: "numeric",
            parts: [{ label: "$a_5$", answer: 324 }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Geometric nth term", statement: "$ar^{n-1}=4\\times3^{n-1}$." },
            ],
            steps: [
              { reasoning: "Common ratio $r=3$; $a_5=4\\times3^4=4\\times81$.", working: "4\\times3^4", marks: 1, markCode: "M" },
              { reasoning: "$a_5=324$.", working: "324", marks: 1, markCode: "M" },
              { reasoning: "State the answer.", working: "324", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$324$",
            commonErrors: ["Using $3^5$ instead of $3^4$."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypms4-u2-seq-q15",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how you would distinguish between an arithmetic and a geometric sequence, giving one example of each.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Arithmetic vs geometric", statement: "Arithmetic: constant difference; geometric: constant ratio." },
            ],
            steps: [
              { reasoning: "Compute first differences: if constant, the sequence is arithmetic, e.g. 5, 8, 11, 14 (difference 3).", working: "\\text{constant difference}", marks: 1, markCode: "M" },
              { reasoning: "Compute ratios of consecutive terms: if constant, the sequence is geometric, e.g. 3, 6, 12, 24 (ratio 2).", working: "\\text{constant ratio}", marks: 1, markCode: "M" },
              { reasoning: "Examples correctly identified.", working: "\\text{examples}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Arithmetic: constant difference (e.g. 5, 8, 11, 14); geometric: constant ratio (e.g. 3, 6, 12, 24).",
            commonErrors: ["Computing differences for both instead of ratios for geometric."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypms4-u2-seq-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Which formula gives the sum of the first $n$ terms of an arithmetic sequence with first term $a$ and common difference $d$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$S_n=na+d$" },
              { id: "b", text: "$S_n=\\frac{n}{2}[2a+(n-1)d]$" },
              { id: "c", text: "$S_n=a+(n-1)d$" },
              { id: "d", text: "$S_n=ar^{n-1}$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Arithmetic sum", statement: "$S_n=\\frac{n}{2}[2a+(n-1)d]$ or $\\frac{n}{2}(\\text{first}+\\text{last})$." },
            ],
            steps: [
              { reasoning: "Option (c) is the nth term formula, not the sum.", working: "a+(n-1)d", marks: 1, markCode: "M" },
              { reasoning: "Option (a) is the geometric nth term formula.", working: "ar^{n-1}", marks: 1, markCode: "M" },
              { reasoning: "The correct sum formula is (b).", working: "S_n=\\frac{n}{2}[2a+(n-1)d]", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** $S_n=\\frac{n}{2}[2a+(n-1)d]$",
            commonErrors: ["Confusing the nth term formula with the sum formula."],
            examinerNote: "M1 M1 A1.",
          },
        },
      ],
    },
  ],
};
