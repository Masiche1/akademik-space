import type { Lesson } from "../../../types.ts";

export const lesson46: Lesson = {
  id: "olam-u4-lesson-4-6",
  code: "4-6",
  title: "Sequences and Recurrence Relations",
  goal: "I CAN work with sequences defined by recurrence relations and iteration.",
  standards: ["4037: sequences"],
  vocabulary: [
    { term: "Sequence", definition: "Ordered list of numbers $u_1,u_2,u_3,\\ldots$" },
    { term: "Recurrence relation", definition: "Rule giving $u_{n+1}$ in terms of $u_n$ (and possibly $n$)." },
    { term: "Iteration", definition: "Repeatedly applying a rule to generate terms." },
    { term: "Convergent sequence", definition: "Terms approach a fixed limit $L$." },
  ],
  concepts: [
    {
      id: "olam-u4-s6-recurrence",
      title: "Recurrence relations",
      skill: "Generate and analyse sequences defined recursively at O Level.",
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
          id: "olam-u4-s6-re-q1", difficulty: "foundation", totalMarks: 1,
          stem: "Given $u_1=5$ and $u_{n+1}=u_n-3$, the first four terms are…",
          response: { type: "mcq", choices: [
            { id: "a", text: "5, 2, -1, -4" },
            { id: "b", text: "5, 2, 1, -2" },
            { id: "c", text: "5, 15, 45, 135" },
            { id: "d", text: "5, 8, 11, 14" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "technique", name: "Iteration", statement: "Apply rule repeatedly." }], steps: [{ reasoning: "$u_2=2$, $u_3=-1$, $u_4=-4$.", marks: 1, markCode: "A" }], finalAnswer: "5, 2, -1, -4" },
        },
        {
          id: "olam-u4-s6-re-q2", difficulty: "foundation", totalMarks: 2,
          stem: "Given $u_{n+1}=2u_n+1$, $u_1=1$, find $u_3$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 7 }] },
          markscheme: { principles: [{ kind: "technique", name: "Iteration", statement: "Step by step." }], steps: [
            { reasoning: "$u_2=2(1)+1=3$; $u_3=2(3)+1=7$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 7.", marks: 1, markCode: "A" },
          ], finalAnswer: "7" },
        },
        {
          id: "olam-u4-s6-re-q3", difficulty: "core", totalMarks: 3,
          stem: "The sequence defined by $u_1=1$, $u_{n+1}=u_n+5$ is arithmetic. Find $u_{10}$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Match to arithmetic", statement: "Use closed form." }], steps: [
            { reasoning: "Constant difference 5 → $a=1$, $d=5$. $u_{10}=1+9\\times5=46$.", marks: 1, markCode: "M" },
            { reasoning: "Verify: $u_2=6$, $u_3=11$, ..., $u_{10}=1+45=46$ ✓.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "46" },
        },
        {
          id: "olam-u4-s6-re-q4", difficulty: "core", totalMarks: 4,
          stem: "A sequence is defined by $u_{n+1}=\\frac{u_n}{2}+3$ with $u_1=8$. Find $u_4$ and describe what happens to the terms.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Iteration + behaviour", statement: "Compute and observe." }], steps: [
            { reasoning: "$u_2=4+3=7$; $u_3=3.5+3=6.5$; $u_4=3.25+3=6.25$.", marks: 1, markCode: "M" },
            { reasoning: "Terms: 8, 7, 6.5, 6.25 — decreasing but the decrease is shrinking.", marks: 1, markCode: "M" },
            { reasoning: "Suggests convergence to a limit $L$ where $L=\\frac{L}{2}+3$ → $L=6$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $u_4=6.25$, converging towards 6.", marks: 1, markCode: "A" },
          ], finalAnswer: "$u_4=6.25$, converges to 6" },
        },
        {
          id: "olam-u4-s6-re-q5", difficulty: "foundation", totalMarks: 1,
          stem: "Given $u_1=3$ and $u_{n+1}=u_n+2$, the first four terms are…",
          response: { type: "mcq", choices: [
            { id: "a", text: "3, 6, 12, 24" },
            { id: "b", text: "2, 4, 6, 8" },
            { id: "c", text: "3, 5, 7, 9" },
            { id: "d", text: "3, 5, 6, 7" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "technique", name: "Iteration", statement: "Apply rule repeatedly." }], steps: [{ reasoning: "$u_2=5$, $u_3=7$, $u_4=9$.", marks: 1, markCode: "A" }], finalAnswer: "3, 5, 7, 9" },
        },
        {
          id: "olam-u4-s6-re-q6", difficulty: "foundation", totalMarks: 1,
          stem: "Given $u_1=2$ and $u_{n+1}=3u_n$, the first three terms are…",
          response: { type: "mcq", choices: [
            { id: "a", text: "2, 5, 8" },
            { id: "b", text: "2, 6, 12" },
            { id: "c", text: "2, 6, 18" },
            { id: "d", text: "3, 9, 27" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "technique", name: "Iteration", statement: "Multiply by 3." }], steps: [{ reasoning: "$u_2=6$, $u_3=18$.", marks: 1, markCode: "A" }], finalAnswer: "2, 6, 18" },
        },
        {
          id: "olam-u4-s6-re-q7", difficulty: "core", totalMarks: 1,
          stem: "Given $u_1=1$ and $u_{n+1}=u_n^2$, the sequence is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "1, 0, 0, 0, …" },
            { id: "b", text: "1, 2, 4, 8, …" },
            { id: "c", text: "Divergent" },
            { id: "d", text: "1, 1, 1, 1, …" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "technique", name: "Iteration", statement: "Fixed point." }], steps: [{ reasoning: "$u_2=1^2=1$, so every term is 1.", marks: 1, markCode: "A" }], finalAnswer: "1, 1, 1, 1, …" },
        },
        {
          id: "olam-u4-s6-re-q8", difficulty: "foundation", totalMarks: 1,
          stem: "Given $u_1=4$ and $u_{n+1}=u_n-1$, the sequence…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Stays constant" },
            { id: "b", text: "Decreases by 1 each term" },
            { id: "c", text: "Multiplies by $-1$" },
            { id: "d", text: "Increases by 1 each term" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "property", name: "Recurrence", statement: "Constant difference." }], steps: [{ reasoning: "Each term is previous minus 1 → decreasing arithmetic.", marks: 1, markCode: "A" }], finalAnswer: "Decreases by 1 each term" },
        },
        {
          id: "olam-u4-s6-re-q9", difficulty: "core", totalMarks: 1,
          stem: "Which recurrence relation defines a geometric sequence?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$u_{n+1}=2u_n$" },
            { id: "b", text: "$u_{n+1}=u_n-2$" },
            { id: "c", text: "$u_{n+1}=u_n+2$" },
            { id: "d", text: "$u_{n+1}=u_n^2$" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "property", name: "Geometric", statement: "Constant ratio." }], steps: [{ reasoning: "Constant multiplier 2 → geometric with $r=2$.", marks: 1, markCode: "A" }], finalAnswer: "Option a" },
        },
        {
          id: "olam-u4-s6-re-q10", difficulty: "foundation", totalMarks: 2,
          stem: "Given $u_1=2$ and $u_{n+1}=u_n+4$, find $u_5$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 18 }] },
          markscheme: { principles: [{ kind: "technique", name: "Iteration", statement: "Arithmetic sequence." }], steps: [
            { reasoning: "Constant difference 4: $u_5=2+4\\times4=18$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 18.", marks: 1, markCode: "A" },
          ], finalAnswer: "18" },
        },
        {
          id: "olam-u4-s6-re-q11", difficulty: "core", totalMarks: 3,
          stem: "Given $u_1=3$ and $u_{n+1}=2u_n-1$, find $u_4$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 17 }] },
          markscheme: { principles: [{ kind: "technique", name: "Iteration", statement: "Step by step." }], steps: [
            { reasoning: "$u_2=2(3)-1=5$; $u_3=2(5)-1=9$; $u_4=2(9)-1=17$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 17.", marks: 1, markCode: "M" },
            { reasoning: "Check: 3, 5, 9, 17 ✓.", marks: 1, markCode: "A" },
          ], finalAnswer: "17" },
        },
        {
          id: "olam-u4-s6-re-q12", difficulty: "core", totalMarks: 3,
          stem: "Given $u_1=2$ and $u_{n+1}=u_n+5$, find $u_{10}$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 47 }] },
          markscheme: { principles: [{ kind: "technique", name: "Arithmetic formula", statement: "Use closed form." }], steps: [
            { reasoning: "$d=5$, $a=2$ → $u_{10}=2+9\\times5=47$.", marks: 1, markCode: "M" },
            { reasoning: "Verify: $u_2=7$, $u_3=12$, pattern holds ✓.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 47.", marks: 1, markCode: "A" },
          ], finalAnswer: "47" },
        },
        {
          id: "olam-u4-s6-re-q13", difficulty: "challenge", totalMarks: 3,
          stem: "Given $u_1=5$ and $u_{n+1}=\\frac{u_n}{2}$, find $u_4$ as a fraction.",
          response: { type: "numeric", parts: [{ label: "a", answer: 0.625 }] },
          markscheme: { principles: [{ kind: "technique", name: "Iteration", statement: "Geometric, $r=\\frac12$." }], steps: [
            { reasoning: "$u_2=\\frac52$, $u_3=\\frac54$, $u_4=\\frac58$.", marks: 1, markCode: "M" },
            { reasoning: "$\\frac58=0.625$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $0.625$ (or $\\frac58$).", marks: 1, markCode: "A" },
          ], finalAnswer: "$\\frac58$" },
        },
        {
          id: "olam-u4-s6-re-q14", difficulty: "core", totalMarks: 3,
          stem: "Given $u_1=1$ and $u_{n+1}=2u_n+3$, find $u_4$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Iteration", statement: "Step by step." }], steps: [
            { reasoning: "$u_2=2(1)+3=5$; $u_3=2(5)+3=13$; $u_4=2(13)+3=29$.", marks: 1, markCode: "M" },
            { reasoning: "Sequence: 1, 5, 13, 29.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $u_4=29$.", marks: 1, markCode: "A" },
          ], finalAnswer: "29" },
        },
        {
          id: "olam-u4-s6-re-q15", difficulty: "core", totalMarks: 3,
          stem: "The sequence defined by $u_1=3$, $u_{n+1}=u_n+6$ is arithmetic. Find $u_{20}$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Arithmetic formula", statement: "Use closed form." }], steps: [
            { reasoning: "$d=6$, $a=3$ → $u_{20}=3+19\\times6=117$.", marks: 1, markCode: "M" },
            { reasoning: "Verify: $u_2=9$, difference constant ✓.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 117.", marks: 1, markCode: "A" },
          ], finalAnswer: "117" },
        },
        {
          id: "olam-u4-s6-re-q16", difficulty: "challenge", totalMarks: 4,
          stem: "A sequence is defined by $u_1=1$, $u_2=1$, $u_{n+1}=u_n+u_{n-1}$ for $n\\geq2$. Find $u_6$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Iteration", statement: "Fibonacci-type." }], steps: [
            { reasoning: "$u_3=u_2+u_1=2$; $u_4=u_3+u_2=3$; $u_5=u_4+u_3=5$; $u_6=u_5+u_4=8$.", marks: 1, markCode: "M" },
            { reasoning: "Sequence: 1, 1, 2, 3, 5, 8.", marks: 1, markCode: "M" },
            { reasoning: "Check each term is sum of previous two ✓.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $u_6=8$.", marks: 1, markCode: "A" },
          ], finalAnswer: "8" },
        },
      ],
    },
    {
      id: "olam-u4-s6-converge",
      title: "Convergence and limits",
      skill: "Identify convergent sequences and fixed points at O Level.",
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
          id: "olam-u4-s6-co-q1", difficulty: "foundation", totalMarks: 1,
          stem: "A sequence converges when its terms…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Approach a fixed limit" },
            { id: "b", text: "Grow without bound" },
            { id: "c", text: "Repeat exactly" },
            { id: "d", text: "Become negative" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Convergence", statement: "Approaches limit." }], steps: [{ reasoning: "Definition.", marks: 1, markCode: "A" }], finalAnswer: "Approach a fixed limit" },
        },
        {
          id: "olam-u4-s6-co-q2", difficulty: "foundation", totalMarks: 2,
          stem: "Find the limit of $u_{n+1}=\\frac{u_n}{3}+2$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Fixed point", statement: "Solve $L=f(L)$." }], steps: [
            { reasoning: "$L=\\frac{L}{3}+2$ → $\\frac{2L}{3}=2$ → $L=3$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 3.", marks: 1, markCode: "A" },
          ], finalAnswer: "3" },
        },
        {
          id: "olam-u4-s6-co-q3", difficulty: "core", totalMarks: 3,
          stem: "Does $u_{n+1}=1.2u_n-1$ converge? Explain.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Convergence condition", statement: "$|a|<1$ required." }], steps: [
            { reasoning: "Here $a=1.2$, and $|1.2|>1$ → diverges (unless $u_1$ exactly at fixed point).", marks: 1, markCode: "M" },
            { reasoning: "Fixed point: $L=1.2L-1$ → $0.2L=1$ → $L=5$; only $u_1=5$ stays, anything else diverges.", marks: 1, markCode: "M" },
            { reasoning: "Answer: no, diverges for almost all starting values.", marks: 1, markCode: "A" },
          ], finalAnswer: "No — $|a|>1$" },
        },
        {
          id: "olam-u4-s6-co-q4", difficulty: "core", totalMarks: 4,
          stem: "Given $u_1=20$, $u_{n+1}=0.8u_n+4$, find $u_3$ and the limiting value.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Iterate + limit", statement: "Both parts." }], steps: [
            { reasoning: "$u_2=0.8(20)+4=20$; $u_3=0.8(20)+4=20$ — stays at 20? Check: $u_2=16+4=20$ ✓ so all terms are 20.", marks: 1, markCode: "M" },
            { reasoning: "Limit: $L=0.8L+4$ → $0.2L=4$ → $L=20$ — consistent since $u_1=20=L$ already.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $u_3=20$, limit 20.", marks: 1, markCode: "M" },
            { reasoning: "Note: starting at the fixed point means constant sequence. ✓", marks: 1, markCode: "A" },
          ], finalAnswer: "$u_3=20$, limit 20" },
        },
        {
          id: "olam-u4-s6-co-q5", difficulty: "foundation", totalMarks: 1,
          stem: "A geometric sequence with common ratio $r$ converges to 0 when…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$|r|>1$" },
            { id: "b", text: "$|r|<1$" },
            { id: "c", text: "$r=1$" },
            { id: "d", text: "Always" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "property", name: "Geometric convergence", statement: "$|r|<1$." }], steps: [{ reasoning: "Terms shrink only when $|r|<1$.", marks: 1, markCode: "A" }], finalAnswer: "$|r|<1$" },
        },
        {
          id: "olam-u4-s6-co-q6", difficulty: "foundation", totalMarks: 1,
          stem: "If a sequence $u_{n+1}=f(u_n)$ converges to a limit $L$, then $L$ satisfies…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$L=0$ always" },
            { id: "b", text: "$L=f'(L)$" },
            { id: "c", text: "$L=f(L)+1$" },
            { id: "d", text: "$L=f(L)$" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "property", name: "Fixed point", statement: "Limit equation." }], steps: [{ reasoning: "At the limit, $u_{n+1}=u_n=L$ → $L=f(L)$.", marks: 1, markCode: "A" }], finalAnswer: "$L=f(L)$" },
        },
        {
          id: "olam-u4-s6-co-q7", difficulty: "core", totalMarks: 1,
          stem: "The limit of $u_{n+1}=\\frac{u_n}{2}+1$ is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "1" },
            { id: "b", text: "0" },
            { id: "c", text: "It does not converge" },
            { id: "d", text: "2" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "technique", name: "Fixed point", statement: "Solve $L=f(L)$." }], steps: [{ reasoning: "$L=\\frac{L}{2}+1$ → $\\frac{L}{2}=1$ → $L=2$.", marks: 1, markCode: "A" }], finalAnswer: "2" },
        },
        {
          id: "olam-u4-s6-co-q8", difficulty: "core", totalMarks: 1,
          stem: "The sequence $u_{n+1}=1.5u_n$ (with $u_1\\neq0$)…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Diverges" },
            { id: "b", text: "Is constant" },
            { id: "c", text: "Converges to 0" },
            { id: "d", text: "Converges to 1" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "property", name: "Convergence", statement: "$|a|>1$ diverges." }], steps: [{ reasoning: "$|1.5|>1$ → terms grow without bound.", marks: 1, markCode: "A" }], finalAnswer: "Diverges" },
        },
        {
          id: "olam-u4-s6-co-q9", difficulty: "core", totalMarks: 1,
          stem: "The sequence $u_{n+1}=-0.5u_n+3$…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Is constant" },
            { id: "b", text: "Alternates sign only" },
            { id: "c", text: "Diverges" },
            { id: "d", text: "Converges (oscillating)" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "property", name: "Convergence", statement: "$|a|<1$ converges." }], steps: [{ reasoning: "$|-0.5|=0.5<1$ → converges, terms alternate around limit.", marks: 1, markCode: "A" }], finalAnswer: "Converges" },
        },
        {
          id: "olam-u4-s6-co-q10", difficulty: "foundation", totalMarks: 2,
          stem: "Find the limit of $u_{n+1}=\\frac{u_n}{4}+3$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 4 }] },
          markscheme: { principles: [{ kind: "technique", name: "Fixed point", statement: "Solve $L=f(L)$." }], steps: [
            { reasoning: "$L=\\frac{L}{4}+3$ → $\\frac{3L}{4}=3$ → $L=4$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 4.", marks: 1, markCode: "A" },
          ], finalAnswer: "4" },
        },
        {
          id: "olam-u4-s6-co-q11", difficulty: "core", totalMarks: 3,
          stem: "Find the limit of $u_{n+1}=0.6u_n+8$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 20 }] },
          markscheme: { principles: [{ kind: "technique", name: "Fixed point", statement: "Solve $L=f(L)$." }], steps: [
            { reasoning: "$L=0.6L+8$ → $0.4L=8$ → $L=20$.", marks: 1, markCode: "M" },
            { reasoning: "Check $|0.6|<1$ so it converges ✓.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 20.", marks: 1, markCode: "A" },
          ], finalAnswer: "20" },
        },
        {
          id: "olam-u4-s6-co-q12", difficulty: "core", totalMarks: 3,
          stem: "Given $u_1=10$ and $u_{n+1}=0.5u_n+2$, find $u_2$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 7 }] },
          markscheme: { principles: [{ kind: "technique", name: "Iteration", statement: "Apply once." }], steps: [
            { reasoning: "$u_2=0.5(10)+2=7$.", marks: 1, markCode: "M" },
            { reasoning: "($u_3=5.5$, approaching limit 4 ✓.)", marks: 1, markCode: "M" },
            { reasoning: "Answer: 7.", marks: 1, markCode: "A" },
          ], finalAnswer: "7" },
        },
        {
          id: "olam-u4-s6-co-q13", difficulty: "challenge", totalMarks: 3,
          stem: "Find the limit of $u_{n+1}=\\frac{u_n}{3}+6$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 9 }] },
          markscheme: { principles: [{ kind: "technique", name: "Fixed point", statement: "Solve $L=f(L)$." }], steps: [
            { reasoning: "$L=\\frac{L}{3}+6$ → $\\frac{2L}{3}=6$ → $L=9$.", marks: 1, markCode: "M" },
            { reasoning: "Check: $\\frac13<1$ → converges ✓.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 9.", marks: 1, markCode: "A" },
          ], finalAnswer: "9" },
        },
        {
          id: "olam-u4-s6-co-q14", difficulty: "core", totalMarks: 3,
          stem: "Find the limit of the sequence defined by $u_{n+1}=0.4u_n+6$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Fixed point", statement: "Solve $L=f(L)$." }], steps: [
            { reasoning: "$L=0.4L+6$ → $0.6L=6$ → $L=10$.", marks: 1, markCode: "M" },
            { reasoning: "$|0.4|<1$ → converges to 10.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 10.", marks: 1, markCode: "A" },
          ], finalAnswer: "10" },
        },
        {
          id: "olam-u4-s6-co-q15", difficulty: "core", totalMarks: 3,
          stem: "Does $u_{n+1}=\\frac{u_n}{2}-5$ converge? If so, find the limit.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Convergence test", statement: "$|a|<1$." }], steps: [
            { reasoning: "$|a|=\\frac12<1$ → converges.", marks: 1, markCode: "M" },
            { reasoning: "$L=\\frac{L}{2}-5$ → $\\frac{L}{2}=-5$ → $L=-10$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: yes, limit $-10$.", marks: 1, markCode: "A" },
          ], finalAnswer: "Yes, limit $-10$" },
        },
        {
          id: "olam-u4-s6-co-q16", difficulty: "challenge", totalMarks: 4,
          stem: "Given $u_1=4$ and $u_{n+1}=0.5u_n+3$, find $u_2$, $u_3$ and the limiting value.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Iterate + limit", statement: "Both parts." }], steps: [
            { reasoning: "$u_2=0.5(4)+3=5$; $u_3=0.5(5)+3=5.5$.", marks: 1, markCode: "M" },
            { reasoning: "Limit: $L=0.5L+3$ → $0.5L=3$ → $L=6$.", marks: 1, markCode: "M" },
            { reasoning: "Terms 4, 5, 5.5, … approaching 6 ✓.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $u_2=5$, $u_3=5.5$, limit 6.", marks: 1, markCode: "A" },
          ], finalAnswer: "$u_2=5$, $u_3=5.5$, limit 6" },
        },
      ],
    },
  ],
  notes: [
    { id: "olam-u4-s6-seq-notes", title: "Sequences and convergence — notes", summary: "Recurrence relations and limits.",
      sections: [
        { heading: "Recurrence", body: "$u_{n+1}=f(u_n)$ — iterate to generate terms; match to arithmetic/geometric for closed forms." },
        { heading: "Convergence", body: "Limit $L$ satisfies $L=f(L)$; linear recurrence $au_n+b$ converges iff $|a|<1$, limit $\\frac{b}{1-a}$." },
      ] },
  ],
};
