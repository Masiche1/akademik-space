import type { Lesson } from "../../../types.ts";

export const lesson46: Lesson = {
  id: "ciam-u4-lesson-4-6",
  code: "4-6",
  title: "Sequences and Recurrence Relations",
  goal: "I CAN work with sequences defined by recurrence relations and iteration.",
  standards: ["0606: sequences"],
  vocabulary: [
    { term: "Sequence", definition: "Ordered list of numbers $u_1,u_2,u_3,\\ldots$" },
    { term: "Recurrence relation", definition: "Rule giving $u_{n+1}$ in terms of $u_n$ (and possibly $n$)." },
    { term: "Iteration", definition: "Repeatedly applying a rule to generate terms." },
    { term: "Convergent sequence", definition: "Terms approach a fixed limit $L$." },
  ],
  concepts: [
    {
      id: "ciam-u4-s6-recurrence",
      title: "Recurrence relations",
      skill: "Generate and analyse sequences defined recursively at IGCSE level.",
      lesson: {
        sections: [
          { heading: "Reading the notation", body: "$u_{n+1}=2u_n+1$ with $u_1=3$ means: each term is twice the previous plus 1. Compute terms in order — you cannot jump ahead without computing intermediates. Iteration is just repeated substitution: $u_2=2(3)+1=7$, $u_3=15$, $u_4=31$, and so on. Always state the first term you use clearly." },
          { heading: "Recognising patterns", body: "After computing several terms, look for structure: constant difference suggests arithmetic, constant ratio suggests geometric, and the recurrence itself may hint at the closed form. For $u_{n+1}=u_n+4$ the sequence is arithmetic with $d=4$; for $u_{n+1}=3u_n$ it is geometric with $r=3$. Matching a recurrence to its closed form lets you find $u_{50}$ without iterating 49 times." },
        ],
        keyFormulas: [
          { name: "Recurrence", statement: "$u_{n+1}=f(u_n)$, given $u_1$" },
        ],
        workedExample: { problem: "Given $u_1=2$ and $u_{n+1}=u_n^2-1$, find $u_4$.", solution: "$u_2=2^2-1=3$; $u_3=3^2-1=8$; $u_4=8^2-1=63$. Note terms grow very fast — squaring makes sequences explode quickly." },
      },
      questions: [
        {
          id: "ciam-u4-s6-re-q1", difficulty: "foundation", totalMarks: 1,
          stem: "Given $u_1=5$ and $u_{n+1}=u_n-3$, the first four terms are…",
          response: { type: "mcq", choices: [
            { id: "a", text: "5, 2, -1, -4" }, { id: "b", text: "5, 8, 11, 14" }, { id: "c", text: "5, 2, 1, -2" }, { id: "d", text: "5, 15, 45, 135" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "technique", name: "Iteration", statement: "Apply rule repeatedly." }], steps: [{ reasoning: "$u_2=2$, $u_3=-1$, $u_4=-4$.", marks: 1, markCode: "A" }], finalAnswer: "5, 2, -1, -4" },
        },
        {
          id: "ciam-u4-s6-re-q2", difficulty: "foundation", totalMarks: 2,
          stem: "Given $u_{n+1}=2u_n+1$, $u_1=1$, find $u_3$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 7 }] },
          markscheme: { principles: [{ kind: "technique", name: "Iteration", statement: "Step by step." }], steps: [
            { reasoning: "$u_2=2(1)+1=3$; $u_3=2(3)+1=7$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 7.", marks: 1, markCode: "A" },
          ], finalAnswer: "7" },
        },
        {
          id: "ciam-u4-s6-re-q3", difficulty: "core", totalMarks: 3,
          stem: "The sequence defined by $u_1=1$, $u_{n+1}=u_n+5$ is arithmetic. Find $u_{10}$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Match to arithmetic", statement: "Use closed form." }], steps: [
            { reasoning: "Constant difference 5 → $a=1$, $d=5$. $u_{10}=1+9\\times5=46$.", marks: 1, markCode: "M" },
            { reasoning: "Verify: $u_2=6$, $u_3=11$, ..., $u_{10}=1+45=46$ ✓.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "46" },
        },
        {
          id: "ciam-u4-s6-re-q4", difficulty: "core", totalMarks: 4,
          stem: "A sequence is defined by $u_{n+1}=\\frac{u_n}{2}+3$ with $u_1=8$. Find $u_4$ and describe what happens to the terms.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Iteration + behaviour", statement: "Compute and observe." }], steps: [
            { reasoning: "$u_2=4+3=7$; $u_3=3.5+3=6.5$; $u_4=3.25+3=6.25$.", marks: 1, markCode: "M" },
            { reasoning: "Terms: 8, 7, 6.5, 6.25 — decreasing but the decrease is shrinking.", marks: 1, markCode: "M" },
            { reasoning: "Suggests convergence to a limit $L$ where $L=\\frac{L}{2}+3$ → $L=6$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $u_4=6.25$, converging towards 6.", marks: 1, markCode: "A" },
          ], finalAnswer: "$u_4=6.25$, converges to 6" },
        },
      ],
    },
    {
      id: "ciam-u4-s6-converge",
      title: "Convergence and limits",
      skill: "Identify convergent sequences and fixed points at IGCSE level.",
      lesson: {
        sections: [
          { heading: "Fixed points", body: "A convergent sequence settles on a limit $L$ satisfying $L=f(L)$ — the fixed point of the recurrence. For $u_{n+1}=\\frac{u_n}{2}+3$, solve $L=\\frac{L}{2}+3$ to get $L=6$. Computing terms shows whether the sequence actually approaches it: if terms get closer each step, it converges; if they oscillate or diverge, the fixed point is unstable." },
          { heading: "Convergence test", body: "Compute $u_2,u_3,u_4,\\ldots$ numerically. If the differences $|u_{n+1}-u_n|$ shrink towards zero and terms approach a value, the sequence converges. For $|r|<1$ geometric sequences converge to 0; for recurrences like $u_{n+1}=au_n+b$, convergence requires $|a|<1$ and the limit is $L=\\frac{b}{1-a}$." },
        ],
        keyFormulas: [
          { name: "Fixed point", statement: "$L=f(L)$" },
          { name: "Linear recurrence limit", statement: "$L=\\frac{b}{1-a}$ for $u_{n+1}=au_n+b$, $|a|<1$" },
        ],
        workedExample: { problem: "Find the limit of $u_{n+1}=0.5u_n+4$, $u_1=10$.", solution: "$L=0.5L+4$ → $0.5L=4$ → $L=8$. Check: $u_2=9$, $u_3=8.5$, $u_4=8.25$ — approaching 8 ✓." },
      },
      questions: [
        {
          id: "ciam-u4-s6-co-q1", difficulty: "foundation", totalMarks: 1,
          stem: "A sequence converges when its terms…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Approach a fixed limit" }, { id: "b", text: "Become negative" }, { id: "c", text: "Repeat exactly" }, { id: "d", text: "Grow without bound" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Convergence", statement: "Approaches limit." }], steps: [{ reasoning: "Definition.", marks: 1, markCode: "A" }], finalAnswer: "Approach a fixed limit" },
        },
        {
          id: "ciam-u4-s6-co-q2", difficulty: "foundation", totalMarks: 2,
          stem: "Find the limit of $u_{n+1}=\\frac{u_n}{3}+2$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Fixed point", statement: "Solve $L=f(L)$." }], steps: [
            { reasoning: "$L=\\frac{L}{3}+2$ → $\\frac{2L}{3}=2$ → $L=3$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 3.", marks: 1, markCode: "A" },
          ], finalAnswer: "3" },
        },
        {
          id: "ciam-u4-s6-co-q3", difficulty: "core", totalMarks: 3,
          stem: "Does $u_{n+1}=1.2u_n-1$ converge? Explain.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Convergence condition", statement: "$|a|<1$ required." }], steps: [
            { reasoning: "Here $a=1.2$, and $|1.2|>1$ → diverges (unless $u_1$ exactly at fixed point).", marks: 1, markCode: "M" },
            { reasoning: "Fixed point: $L=1.2L-1$ → $0.2L=1$ → $L=5$; only $u_1=5$ stays, anything else diverges.", marks: 1, markCode: "M" },
            { reasoning: "Answer: no, diverges for almost all starting values.", marks: 1, markCode: "A" },
          ], finalAnswer: "No — $|a|>1$" },
        },
        {
          id: "ciam-u4-s6-co-q4", difficulty: "core", totalMarks: 4,
          stem: "Given $u_1=20$, $u_{n+1}=0.8u_n+4$, find $u_3$ and the limiting value.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Iterate + limit", statement: "Both parts." }], steps: [
            { reasoning: "$u_2=0.8(20)+4=20$; $u_3=0.8(20)+4=20$ — stays at 20? Check: $u_2=16+4=20$ ✓ so all terms are 20.", marks: 1, markCode: "M" },
            { reasoning: "Limit: $L=0.8L+4$ → $0.2L=4$ → $L=20$ — consistent since $u_1=20=L$ already.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $u_3=20$, limit 20.", marks: 1, markCode: "M" },
            { reasoning: "Note: starting at the fixed point means constant sequence. ✓", marks: 1, markCode: "A" },
          ], finalAnswer: "$u_3=20$, limit 20" },
        },
      ],
    },
  ],
  notes: [
    { id: "ciam-u4-s6-seq-notes", title: "Sequences and convergence — notes", summary: "Recurrence relations and limits.",
      sections: [
        { heading: "Recurrence", body: "$u_{n+1}=f(u_n)$ — iterate to generate terms; match to arithmetic/geometric for closed forms." },
        { heading: "Convergence", body: "Limit $L$ satisfies $L=f(L)$; linear recurrence $au_n+b$ converges iff $|a|<1$, limit $\\frac{b}{1-a}$." },
      ] },
  ],
};
