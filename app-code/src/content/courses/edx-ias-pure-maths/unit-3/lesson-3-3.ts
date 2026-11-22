import type { Lesson } from "../../../types.ts";

export const lesson33: Lesson = {
  id: "ediaspm-u3-lesson-3-3",
  code: "1-3",
  title: "Proof by Mathematical Induction",
  goal: "I CAN construct proofs by mathematical induction for series, divisibility and recurrence statements.",
  standards: ["WFM01 FP1", "Proof by induction"],
  vocabulary: [
    { term: "Mathematical induction", definition: "A proof technique: verify a base case, assume the statement for $n=k$, then prove it for $n=k+1$." },
    { term: "Base case", definition: "The smallest value of $n$ (usually $n=1$) for which the statement is verified directly." },
    { term: "Inductive hypothesis", definition: "The assumption that the statement is true for $n=k$, used to prove the $n=k+1$ case." },
    { term: "Inductive step", definition: "The algebraic manipulation showing truth for $k$ implies truth for $k+1$." },
  ],
  concepts: [
    {
      id: "ediaspm-u3-induction-method",
      title: "The method of induction",
      skill: "Structure a complete induction proof: base case, inductive hypothesis and inductive step, for summation formulae.",
      lesson: {
        sections: [
          {
            heading: "Structure of a proof",
            body: "State the proposition $P(n)$. **Base case:** verify $P(1)$ directly. **Inductive hypothesis:** assume $P(k)$ true. **Inductive step:** use $P(k)$ to prove $P(k+1)$ — typically by adding the $(k+1)$th term to both sides of the assumed sum. Conclude by induction.",
          },
          {
            heading: "Summation proofs",
            body: "For $\\sum$ formulae, write $S_k=\\sum_{r=1}^k f(r)$, assume $S_k=$ formula, then show $S_{k+1}=S_k+f(k+1)$ equals the formula with $k+1$. Factorise and simplify to reach the target.",
          },
          {
            heading: "Common pitfalls",
            body: "Always check the base case — induction proves nothing without it. The hypothesis must be used explicitly. Do not assume what you are proving.",
          },
        ],
        keyFormulas: [
          { name: "Induction principle", statement: "Base case + $P(k)\\Rightarrow P(k+1)$ proves $P(n)$ for all $n\\ge1$." },
        ],
        workedExample: {
          problem: "Prove $\\sum_{r=1}^n r=\\frac{n(n+1)}{2}$ by induction.",
          solution: "Base: $n=1$: $1=\\frac{1\\cdot2}{2}=1$ ✓. Hypothesis: assume $\\sum_{r=1}^k r=\\frac{k(k+1)}{2}$. Step: $\\sum_{r=1}^{k+1}r=\\frac{k(k+1)}{2}+(k+1)=\\frac{(k+1)(k+2)}{2}$ ✓. Hence true for all $n$.",
        },
      },
      questions: [
        {
          id: "ediaspm-ind-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In a proof by induction, what must be shown in the inductive step?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "That $P(1)$ is true" },
              { id: "b", text: "That the formula converges" },
              { id: "c", text: "That $P(n)$ is true for all $n$" },
              { id: "d", text: "That $P(k)$ true implies $P(k+1)$ true" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Inductive step", statement: "Prove $P(k)\\Rightarrow P(k+1)$." }],
            steps: [{ reasoning: "The step shows truth propagates from $k$ to $k+1$.", marks: 1, markCode: "B" }],
            finalAnswer: "**(d)** $P(k)\\Rightarrow P(k+1)$",
          },
        },
        {
          id: "ediaspm-ind-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Prove by induction that $\\sum_{r=1}^n r^2=\\frac{n(n+1)(2n+1)}{6}$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Induction", statement: "Base case, hypothesis, step." }],
            steps: [
              { reasoning: "Base $n=1$: $1=\\frac{1\\cdot2\\cdot3}{6}=1$ ✓.", marks: 1, markCode: "M" },
              { reasoning: "Assume true for $k$: $S_k=\\frac{k(k+1)(2k+1)}{6}$; then $S_{k+1}=S_k+(k+1)^2$.", working: "S_{k+1}", marks: 1, markCode: "M" },
              { reasoning: "$S_{k+1}=\\frac{k(k+1)(2k+1)}{6}+(k+1)^2=\\frac{(k+1)(k+2)(2k+3)}{6}$ after factorising ✓. Hence true for all $n$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Proved by induction",
            commonErrors: ["Missing base case; algebra slips in factorising."],
          },
        },
        {
          id: "ediaspm-ind-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Prove by induction that $n^3-n$ is divisible by $6$ for all positive integers $n$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Induction", statement: "Divisibility proofs: show $(k+1)$ expression minus $k$ expression is divisible." }],
            steps: [
              { reasoning: "Base $n=1$: $1-1=0$, divisible by $6$ ✓.", marks: 1, markCode: "M" },
              { reasoning: "Assume $k^3-k=6m$; consider $(k+1)^3-(k+1)=k^3+3k^2+3k+1-k-1=k^3-k+3k^2+3k=k^3-k+3k(k+1)$.", working: "diff", marks: 1, markCode: "M" },
              { reasoning: "$3k(k+1)$ is divisible by $6$ since $k(k+1)$ is even; and $k^3-k$ divisible by $6$ by hypothesis. Sum divisible by $6$.", marks: 1, markCode: "M" },
              { reasoning: "Conclude by induction.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Proved: $6\\mid n^3-n$ for all $n\\ge1$",
            commonErrors: ["Not recognising $k(k+1)$ is always even."],
          },
        },
        {
          id: "ediaspm-ind-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Prove by induction that $\\sum_{r=1}^n \\frac{1}{r(r+1)}=\\frac{n}{n+1}$.",
          parts: [
            { label: "a", prompt: "Verify the base case $n=1$.", marks: 2 },
            { label: "b", prompt: "State the inductive hypothesis.", marks: 2 },
            { label: "c", prompt: "Complete the inductive step to prove the result.", marks: 6 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Induction", statement: "Standard three-part structure." }],
            steps: [
              { part: "a", reasoning: "$n=1$: LHS $=\\frac{1}{1\\cdot2}=\\frac12$; RHS $=\\frac{1}{2}$ ✓.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State base case verified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Hypothesis: assume $\\sum_{r=1}^k\\frac{1}{r(r+1)}=\\frac{k}{k+1}$.", working: "S_k=k/(k+1)", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State hypothesis clearly.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$S_{k+1}=S_k+\\frac{1}{(k+1)(k+2)}=\\frac{k}{k+1}+\\frac{1}{(k+1)(k+2)}$.", working: "S_{k+1}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Common denominator $(k+1)(k+2)$: $=\\frac{k(k+2)+1}{(k+1)(k+2)}=\\frac{k^2+2k+1}{(k+1)(k+2)}=\\frac{(k+1)^2}{(k+1)(k+2)}=\\frac{k+1}{k+2}$.", working: "=(k+1)/(k+2)", marks: 1, markCode: "M" },
              { part: "c", reasoning: "This equals the formula with $k+1$: $\\frac{k+1}{(k+1)+1}$ ✓.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State step complete.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Conclude: true for $n=1$ and $P(k)\\Rightarrow P(k+1)$, so true for all $n\\ge1$.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Final statement.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Proved by induction: $\\sum_{r=1}^n\\frac{1}{r(r+1)}=\\frac{n}{n+1}$",
            commonErrors: ["Algebra slips in the fraction addition."],
            examinerNote: "Method marks for correct structure; accuracy for algebra.",
          },
        },
      ],
    },
    {
      id: "ediaspm-u3-induction-apps",
      title: "Induction for inequalities and recurrences",
      skill: "Apply induction to prove inequalities and results about recursively defined sequences.",
      lesson: {
        sections: [
          {
            heading: "Inequality proofs",
            body: "For $P(n): f(n)>g(n)$, assume $f(k)>g(k)$ and show $f(k+1)>g(k+1)$ — often by bounding $f(k+1)$ below using the hypothesis. Classic example: $2^n>n$ for $n\\ge1$ or $n!>2^n$ for $n\\ge4$.",
          },
          {
            heading: "Recurrence relations",
            body: "For sequences defined by $u_{n+1}=f(u_n)$, induction proves properties like $u_n\\le M$ or closed forms. Show the property holds for $u_k$ then deduce it for $u_{k+1}=f(u_k)$ using monotonicity of $f$.",
          },
          {
            heading: "Choosing the base case",
            body: "For inequalities the base case may be $n=2$ or $n=4$ rather than $n=1$ — check where the statement first holds and start there.",
          },
        ],
        keyFormulas: [
          { name: "Inequality induction", statement: "Assume $P(k)$; bound $P(k+1)$ using the hypothesis." },
        ],
        workedExample: {
          problem: "Prove $2^n>n^2$ for $n\\ge5$ by induction.",
          solution: "Base $n=5$: $32>25$ ✓. Assume $2^k>k^2$ ($k\\ge5$). Then $2^{k+1}=2\\cdot2^k>2k^2$. Need $2k^2>(k+1)^2=k^2+2k+1$, i.e. $k^2-2k-1>0$, true for $k\\ge3$ hence $k\\ge5$ ✓.",
        },
      },
      questions: [
        {
          id: "ediaspm-ind2-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "To prove $n!>2^n$ by induction, the smallest suitable base case is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$n=2$" },
              { id: "b", text: "$n=4$" },
              { id: "c", text: "$n=1$" },
              { id: "d", text: "$n=3$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Base case", statement: "Start where the statement first holds." }],
            steps: [{ reasoning: "$4!=24>16=2^4$; fails for $n=3$ ($6>8$ false).", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** $n=4$",
          },
        },
        {
          id: "ediaspm-ind2-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Prove by induction that $3^n>n\\cdot2^n$ for $n\\ge4$? First check whether the statement holds for $n=4$ and $n=5$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Base case check", statement: "Verify before attempting proof." }],
            steps: [
              { reasoning: "$n=4$: $81$ vs $4\\cdot16=64$; $81>64$ ✓.", working: "81>64", marks: 1, markCode: "M" },
              { reasoning: "$n=5$: $243$ vs $5\\cdot32=160$; $243>160$ ✓.", working: "243>160", marks: 1, markCode: "M" },
              { reasoning: "Statement holds for both; a proof could start at $n=4$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Holds for $n=4$ and $n=5$",
            commonErrors: ["Assuming without checking."],
          },
        },
        {
          id: "ediaspm-ind2-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A sequence is defined by $u_1=1$, $u_{n+1}=2u_n+1$. Prove by induction that $u_n=2^n-1$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Induction on recurrence", statement: "Verify base, assume $u_k=2^k-1$, compute $u_{k+1}$." }],
            steps: [
              { reasoning: "Base: $u_1=1=2^1-1$ ✓.", marks: 1, markCode: "M" },
              { reasoning: "Assume $u_k=2^k-1$; then $u_{k+1}=2(2^k-1)+1=2^{k+1}-2+1=2^{k+1}-1$.", working: "u_{k+1}=2^{k+1}-1", marks: 1, markCode: "M" },
              { reasoning: "This matches the formula for $k+1$.", marks: 1, markCode: "M" },
              { reasoning: "Conclude by induction.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$u_n=2^n-1$",
            commonErrors: ["Forgetting the $+1$ in recurrence."],
          },
        },
        {
          id: "ediaspm-ind2-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Prove by induction that $\\sum_{r=1}^n r(r+1)=\\frac{n(n+1)(n+2)}{3}$.",
          parts: [
            { label: "a", prompt: "Verify the base case $n=1$.", marks: 2 },
            { label: "b", prompt: "Assume the result for $n=k$ and write $S_{k+1}=S_k+(k+1)(k+2)$.", marks: 3 },
            { label: "c", prompt: "Simplify to show the formula holds for $n=k+1$ and conclude.", marks: 5 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Induction", statement: "Standard structure." }],
            steps: [
              { part: "a", reasoning: "$n=1$: LHS $=1\\cdot2=2$; RHS $=\\frac{1\\cdot2\\cdot3}{3}=2$ ✓.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State verified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Hypothesis: $S_k=\\frac{k(k+1)(k+2)}{3}$.", working: "S_k", marks: 1, markCode: "M" },
              { part: "b", reasoning: "$S_{k+1}=\\frac{k(k+1)(k+2)}{3}+(k+1)(k+2)=\\frac{(k+1)(k+2)(k+3)}{3}$ after factorising $(k+1)(k+2)\\left(\\frac{k}{3}+1\\right)=(k+1)(k+2)\\frac{k+3}{3}$.", working: "factorised", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the expression.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Recognise this is the formula with $k+1$: $\\frac{(k+1)(k+2)(k+3)}{3}$ ✓.", working: "matches", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Conclude induction.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Final statement.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Box the result.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Summarise proof structure used.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Proved: $\\sum r(r+1)=\\frac{n(n+1)(n+2)}{3}$",
            commonErrors: ["Forgetting to add the $(k+1)$th term."],
          },
        },
      ],
    },
  ],
};
