import type { Lesson } from "../../../types.ts";

export const lesson41: Lesson = {
  id: "olam-u4-lesson-4-1",
  code: "4-1",
  title: "Arithmetic and Geometric Series",
  goal: "I CAN find terms and sums of arithmetic and geometric series.",
  standards: ["4037: series"],
  vocabulary: [
    { term: "Arithmetic series", definition: "Constant difference $d$ between terms." },
    { term: "Geometric series", definition: "Constant ratio $r$ between terms." },
    { term: "nth term", definition: "$u_n=u_1+(n-1)d$ or $u_n=u_1 r^{n-1}$." },
    { term: "Sum to n terms", definition: "$S_n=\\frac{n}{2}(2a+(n-1)d)$ or $S_n=\\frac{a(1-r^n)}{1-r}$." },
  ],
  concepts: [
    {
      id: "olam-u4-s1-arithmetic",
      title: "Arithmetic series",
      skill: "Use arithmetic series formulae at O Level.",
      lesson: {
        sections: [
          { heading: "Recognising the pattern", body: "An arithmetic series has a constant difference $d$ between consecutive terms — like 3, 7, 11, 15 where each term is 4 more than the last. Real-world examples: monthly savings of fixed amount, seats in rows increasing by a fixed number. The nth term is $u_n=a+(n-1)d$ where $a$ is the first term; notice the $(n-1)$ because the first term itself has no difference added. The sum of the first $n$ terms is $S_n=\\frac{n}{2}(a+l)=\\frac{n}{2}[2a+(n-1)d]$ — the 'average of first and last times number of terms' idea makes it intuitive." },
          { heading: "Working backwards", body: "Given any two pieces of information you can usually find $a$, $d$ and $n$. Two terms give two equations in $a$ and $d$; a term and a sum give equations linking $n$ as well. When solving for $n$ you often get a quadratic — reject negative or non-integer solutions since $n$ counts terms. Always check your answer by computing a couple of terms or the sum directly." },
        ],
        keyFormulas: [
          { name: "nth term", statement: "$u_n=a+(n-1)d$" },
          { name: "Sum", statement: "$S_n=\\frac{n}{2}[2a+(n-1)d]=\\frac{n}{2}(a+l)$" },
        ],
        workedExample: { problem: "Find the 20th term of 5,9,13,…", solution: "Here $a=5$, $d=4$. $u_{20}=5+(20-1)\\times4=5+76=81$. Alternatively, $u_{20}=a+19d$ — the 20th term has 19 gaps from the first. Check: $u_1=5$, $u_2=9$, ..., $u_{20}=5+19(4)=81$ ✓." },
      },
      questions: [
        {
          id: "olam-u4-s1-ar-q1", difficulty: "foundation", totalMarks: 1,
          stem: "The 10th term of 2,5,8,… is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "29" }, { id: "b", text: "26" }, { id: "c", text: "32" }, { id: "d", text: "30" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "formula", name: "nth term", statement: "$a+(n-1)d$." }], steps: [{ reasoning: "$u_{10}=2+9\\times3=29$.", marks: 1, markCode: "A" }], finalAnswer: "29" },
        },
        {
          id: "olam-u4-s1-ar-q2", difficulty: "foundation", totalMarks: 2,
          stem: "Find the sum of the first 15 terms of 4,7,10,…",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "formula", name: "Sum", statement: "$S_n$ formula." }], steps: [
            { reasoning: "$a=4$, $d=3$; $S_{15}=\\frac{15}{2}[8+14\\times3]=\\frac{15}{2}\\times50=375$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 375.", marks: 1, markCode: "A" },
          ], finalAnswer: "375" },
        },
        {
          id: "olam-u4-s1-ar-q3", difficulty: "core", totalMarks: 3,
          stem: "In an arithmetic series, $a=2$, $d=3$, $S_n=77$. Find $n$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Solve for n", statement: "Quadratic in n." }], steps: [
            { reasoning: "$77=\\frac{n}{2}[4+3(n-1)]=\\frac{n}{2}(3n+1)$ → $3n^2+n-154=0$.", marks: 1, markCode: "M" },
            { reasoning: "$(3n+? )$: try $n=7$: $147+7-154=0$ ✓ → $n=7$.", marks: 1, markCode: "M" },
            { reasoning: "Check: $S_7=\\frac72[4+18]=\\frac72\\times22=77$. ✓", marks: 1, markCode: "A" },
          ], finalAnswer: "$n=7$" },
        },
        {
          id: "olam-u4-s1-ar-q4", difficulty: "core", totalMarks: 4,
          stem: "The 5th term of an arithmetic series is 17 and the 12th term is 38. Find the first term and common difference.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Simultaneous", statement: "Two equations." }], steps: [
            { reasoning: "$a+4d=17$; $a+11d=38$.", marks: 1, markCode: "M" },
            { reasoning: "Subtract: $7d=21$ → $d=3$; then $a=17-12=5$.", marks: 1, markCode: "M" },
            { reasoning: "Verify: $u_5=5+12=17$ ✓, $u_{12}=5+33=38$ ✓.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $a=5$, $d=3$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$a=5$, $d=3$" },
        },
      ],
    },
    {
      id: "olam-u4-s1-geometric",
      title: "Geometric series",
      skill: "Use geometric series formulae at O Level.",
      lesson: {
        sections: [
          { heading: "Constant ratio", body: "A geometric series multiplies by a constant ratio $r$ each term — like 2, 6, 18, 54 where each term is 3 times the last. Compound interest, population growth and radioactive decay are all geometric. The nth term is $u_n=ar^{n-1}$ (exponent $n-1$ for the same reason as arithmetic). The sum formula $S_n=\\frac{a(r^n-1)}{r-1}$ works for $r\\neq1$; it is derived by multiplying $S_n$ by $r$ and subtracting, which collapses everything except the end terms." },
          { heading: "Sum to infinity", body: "When $|r|<1$ the terms shrink towards zero and the sum approaches a finite limit: $S_\\infty=\\frac{a}{1-r}$. This only converges for $|r|<1$ — for $|r|\\geq1$ the series diverges. To find a term given the sum to infinity, use $u_n=S_\\infty-S_{n-1}$ or set up $S_n$ expressions directly." },
        ],
        keyFormulas: [
          { name: "nth term", statement: "$u_n=ar^{n-1}$" },
          { name: "Sum", statement: "$S_n=\\frac{a(r^n-1)}{r-1}$; $S_\\infty=\\frac{a}{1-r}$ for $|r|<1$" },
        ],
        workedExample: { problem: "Find sum of first 6 terms of 3,6,12,…", solution: "$a=3$, $r=2$. $S_6=\\frac{3(2^6-1)}{2-1}=3\\times63=189$. Check by listing: 3+6+12+24+48+96=189 ✓." },
      },
      questions: [
        {
          id: "olam-u4-s1-ge-q1", difficulty: "foundation", totalMarks: 1,
          stem: "The common ratio of 5,15,45,… is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "3" }, { id: "b", text: "5" }, { id: "c", text: "10" }, { id: "d", text: "$\\frac13$" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "property", name: "Ratio", statement: "Term-to-term." }], steps: [{ reasoning: "$r=15/5=3$.", marks: 1, markCode: "A" }], finalAnswer: "3" },
        },
        {
          id: "olam-u4-s1-ge-q2", difficulty: "foundation", totalMarks: 2,
          stem: "Find the 6th term of 4,12,36,…",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "formula", name: "nth term", statement: "$ar^{n-1}$." }], steps: [
            { reasoning: "$a=4$, $r=3$; $u_6=4\\times3^5=4\\times243=972$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 972.", marks: 1, markCode: "A" },
          ], finalAnswer: "972" },
        },
        {
          id: "olam-u4-s1-ge-q3", difficulty: "core", totalMarks: 3,
          stem: "Find the sum of the first 8 terms of 2,6,18,…",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "formula", name: "Sum", statement: "$S_n$ formula." }], steps: [
            { reasoning: "$a=2$, $r=3$; $S_8=\\frac{2(1-3^8)}{1-3}=\\frac{2(1-6561)}{-2}=6560$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 6560.", marks: 1, markCode: "M" },
            { reasoning: "Alternative form: $\\frac{a(r^n-1)}{r-1}$. ✓", marks: 1, markCode: "A" },
          ], finalAnswer: "6560" },
        },
        {
          id: "olam-u4-s1-ge-q4", difficulty: "core", totalMarks: 4,
          stem: "In a geometric series, $u_3=12$ and $u_6=96$. Find $a$ and $r$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Simultaneous", statement: "Ratio of terms." }], steps: [
            { reasoning: "$\\frac{u_6}{u_3}=r^3=\\frac{96}{12}=8$ → $r=2$.", marks: 1, markCode: "M" },
            { reasoning: "$u_3=ar^2=4a=12$ → $a=3$.", marks: 1, markCode: "M" },
            { reasoning: "Verify: $u_6=3\\times32=96$ ✓.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $a=3$, $r=2$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$a=3$, $r=2$" },
        },
      ],
    },
  ],
  notes: [
    { id: "olam-u4-s1-series-notes", title: "Series — notes", summary: "Arithmetic and geometric formulae.",
      sections: [
        { heading: "Arithmetic", body: "$u_n=a+(n-1)d$; $S_n=\\frac{n}{2}[2a+(n-1)d]$." },
        { heading: "Geometric", body: "$u_n=ar^{n-1}$; $S_n=\\frac{a(r^n-1)}{r-1}$ ($r\\neq1$)." },
      ] },
  ],
};
