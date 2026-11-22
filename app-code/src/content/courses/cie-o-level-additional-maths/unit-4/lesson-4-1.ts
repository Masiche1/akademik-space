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
            { id: "a", text: "30" },
            { id: "b", text: "26" },
            { id: "c", text: "32" },
            { id: "d", text: "29" },
          ], correctChoiceId: "d" },
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
        {
          id: "olam-u4-s1-ar-q5", difficulty: "foundation", totalMarks: 1,
          stem: "The common difference of 7, 11, 15, … is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "4" },
            { id: "b", text: "-4" },
            { id: "c", text: "5" },
            { id: "d", text: "3" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "property", name: "Common difference", statement: "Constant gap between terms." }], steps: [{ reasoning: "$d=11-7=4$.", marks: 1, markCode: "A" }], finalAnswer: "4" },
        },
        {
          id: "olam-u4-s1-ar-q6", difficulty: "foundation", totalMarks: 1,
          stem: "The 10th term of 1, 4, 7, … is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "31" },
            { id: "b", text: "25" },
            { id: "c", text: "30" },
            { id: "d", text: "28" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "formula", name: "nth term", statement: "$a+(n-1)d$." }], steps: [{ reasoning: "$u_{10}=1+9\\times3=28$.", marks: 1, markCode: "A" }], finalAnswer: "28" },
        },
        {
          id: "olam-u4-s1-ar-q7", difficulty: "foundation", totalMarks: 2,
          stem: "Find the sum of the first 10 terms of 3, 7, 11, …",
          response: { type: "numeric", parts: [{ label: "a", answer: 210 }] },
          markscheme: { principles: [{ kind: "formula", name: "Sum", statement: "$S_n$ formula." }], steps: [
            { reasoning: "$a=3$, $d=4$; $S_{10}=\\frac{10}{2}[2(3)+9\\times4]=5\\times42=210$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 210.", marks: 1, markCode: "A" },
          ], finalAnswer: "210" },
        },
        {
          id: "olam-u4-s1-ar-q8", difficulty: "core", totalMarks: 3,
          stem: "For the arithmetic series with $a=5$ and $d=4$: (a) find the 25th term; (b) find the sum of the first 25 terms.",
          response: { type: "numeric", parts: [{ label: "a", answer: 101 }, { label: "b", answer: 1325 }] },
          markscheme: { principles: [{ kind: "formula", name: "nth term and sum", statement: "$a+(n-1)d$; $\\frac{n}{2}[2a+(n-1)d]$." }], steps: [
            { reasoning: "(a) $u_{25}=5+24\\times4=101$.", marks: 1, markCode: "M" },
            { reasoning: "(b) $S_{25}=\\frac{25}{2}[10+24\\times4]=\\frac{25}{2}\\times106=1325$.", marks: 1, markCode: "M" },
            { reasoning: "Answers: 101 and 1325.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) 101, (b) 1325" },
        },
        {
          id: "olam-u4-s1-ar-q9", difficulty: "core", totalMarks: 2,
          stem: "In an arithmetic series, $u_3=8$ and $u_7=20$. Find $a$ and $d$.",
          response: { type: "mcq", choices: [
            { id: "a", text: "$a=11$, $d=3$" },
            { id: "b", text: "$a=5$, $d=3$" },
            { id: "c", text: "$a=2$, $d=4$" },
            { id: "d", text: "$a=2$, $d=3$" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "technique", name: "Simultaneous", statement: "Two equations." }], steps: [
            { reasoning: "$d=\\frac{20-8}{7-3}=3$; $a=8-2\\times3=2$.", marks: 1, markCode: "M" },
            { reasoning: "Check: $u_3=2+6=8$ ✓, $u_7=2+18=20$ ✓.", marks: 1, markCode: "A" },
          ], finalAnswer: "$a=2$, $d=3$" },
        },
        {
          id: "olam-u4-s1-ar-q10", difficulty: "core", totalMarks: 2,
          stem: "If $a=3$ and $d=4$ in an arithmetic series, then $S_n=$",
          response: { type: "mcq", choices: [
            { id: "a", text: "$n(2n-1)$" },
            { id: "b", text: "$4n^2$" },
            { id: "c", text: "$2n^2$" },
            { id: "d", text: "$n(2n+1)$" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "formula", name: "Sum", statement: "$S_n$ in terms of $n$." }], steps: [
            { reasoning: "$S_n=\\frac{n}{2}[6+4(n-1)]=\\frac{n}{2}(4n+2)=n(2n+1)$.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$n(2n+1)$" },
        },
        {
          id: "olam-u4-s1-ar-q11", difficulty: "core", totalMarks: 3,
          stem: "An arithmetic series has $a=3$, $d=2$ and $S_n=48$. Find $n$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 6 }] },
          markscheme: { principles: [{ kind: "technique", name: "Solve for n", statement: "Quadratic in n." }], steps: [
            { reasoning: "$48=\\frac{n}{2}[6+2(n-1)]=n(n+2)$ → $n^2+2n-48=0$.", marks: 1, markCode: "M" },
            { reasoning: "$(n+8)(n-6)=0$ → $n=6$ (reject $n=-8$).", marks: 1, markCode: "M" },
            { reasoning: "Check: $S_6=3[6+10]=48$ ✓.", marks: 1, markCode: "A" },
          ], finalAnswer: "$n=6$" },
        },
        {
          id: "olam-u4-s1-ar-q12", difficulty: "challenge", totalMarks: 3,
          stem: "The first three terms of an arithmetic series are $p$, $2p+1$ and $4p$. Find $p$.",
          response: { type: "mcq", choices: [
            { id: "a", text: "1" },
            { id: "b", text: "2" },
            { id: "c", text: "3" },
            { id: "d", text: "4" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "technique", name: "AP condition", statement: "Middle term is mean of neighbours." }], steps: [
            { reasoning: "$2(2p+1)=p+4p$ → $4p+2=5p$ → $p=2$.", marks: 1, markCode: "M" },
            { reasoning: "Terms become 2, 5, 8 with $d=3$ — valid AP ✓.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $p=2$.", marks: 1, markCode: "A" },
          ], finalAnswer: "2" },
        },
        {
          id: "olam-u4-s1-ar-q13", difficulty: "challenge", totalMarks: 4,
          stem: "The sum of the first $n$ terms of an arithmetic series is $S_n=n^2+3n$. Find the first term and the common difference.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Compare coefficients", statement: "$S_n=\\frac{d}{2}n^2+(a-\\frac{d}{2})n$." }], steps: [
            { reasoning: "Compare $n^2$ coefficient: $\\frac{d}{2}=1$ → $d=2$.", marks: 1, markCode: "M" },
            { reasoning: "Compare $n$ coefficient: $a-\\frac{d}{2}=3$ → $a-1=3$ → $a=4$.", marks: 1, markCode: "M" },
            { reasoning: "Verify: $S_1=1+3=4=a$ ✓; $u_2=S_2-S_1=10-4=6$, $d=6-4=2$ ✓.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $a=4$, $d=2$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$a=4$, $d=2$" },
        },
        {
          id: "olam-u4-s1-ar-q14", difficulty: "challenge", totalMarks: 3,
          stem: "The sum of the first $n$ terms of an arithmetic series is $S_n=2n^2+n$. Find the 10th term.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Term from sum", statement: "$u_n=S_n-S_{n-1}$." }], steps: [
            { reasoning: "$u_n=S_n-S_{n-1}=(2n^2+n)-(2(n-1)^2+(n-1))=4n-1$.", marks: 1, markCode: "M" },
            { reasoning: "$u_{10}=40-1=39$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 39.", marks: 1, markCode: "A" },
          ], finalAnswer: "39" },
        },
        {
          id: "olam-u4-s1-ar-q15", difficulty: "foundation", totalMarks: 1,
          stem: "The 8th term of 4, 9, 14, … is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "44" },
            { id: "b", text: "39" },
            { id: "c", text: "34" },
            { id: "d", text: "29" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "formula", name: "nth term", statement: "$a+(n-1)d$." }], steps: [{ reasoning: "$u_8=4+7\\times5=39$.", marks: 1, markCode: "A" }], finalAnswer: "39" },
        },
        {
          id: "olam-u4-s1-ar-q16", difficulty: "core", totalMarks: 2,
          stem: "In an arithmetic series, $u_5=19$ and $u_9=35$. Find $d$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 4 }] },
          markscheme: { principles: [{ kind: "technique", name: "Difference of terms", statement: "$d=\\frac{u_9-u_5}{4}$." }], steps: [
            { reasoning: "$d=\\frac{35-19}{9-5}=\\frac{16}{4}=4$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 4.", marks: 1, markCode: "A" },
          ], finalAnswer: "4" },
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
            { id: "a", text: "3" },
            { id: "b", text: "$\\frac13$" },
            { id: "c", text: "10" },
            { id: "d", text: "5" },
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
        {
          id: "olam-u4-s1-ge-q5", difficulty: "foundation", totalMarks: 1,
          stem: "The common ratio of 12, 18, 27, … is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\frac{2}{3}$" },
            { id: "b", text: "6" },
            { id: "c", text: "9" },
            { id: "d", text: "$\\frac{3}{2}$" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "property", name: "Ratio", statement: "Term-to-term." }], steps: [{ reasoning: "$r=\\frac{18}{12}=\\frac32$.", marks: 1, markCode: "A" }], finalAnswer: "$\\frac{3}{2}$" },
        },
        {
          id: "olam-u4-s1-ge-q6", difficulty: "foundation", totalMarks: 1,
          stem: "The 4th term of 3, 12, 48, … is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "96" },
            { id: "b", text: "48" },
            { id: "c", text: "192" },
            { id: "d", text: "768" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "formula", name: "nth term", statement: "$ar^{n-1}$." }], steps: [{ reasoning: "$r=4$; $u_4=3\\times4^3=3\\times64=192$.", marks: 1, markCode: "A" }], finalAnswer: "192" },
        },
        {
          id: "olam-u4-s1-ge-q7", difficulty: "foundation", totalMarks: 2,
          stem: "Find the sum of the first 5 terms of 1, 2, 4, 8, …",
          response: { type: "numeric", parts: [{ label: "a", answer: 31 }] },
          markscheme: { principles: [{ kind: "formula", name: "Sum", statement: "$S_n$ formula." }], steps: [
            { reasoning: "$a=1$, $r=2$; $S_5=\\frac{1(2^5-1)}{2-1}=31$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 31.", marks: 1, markCode: "A" },
          ], finalAnswer: "31" },
        },
        {
          id: "olam-u4-s1-ge-q8", difficulty: "core", totalMarks: 3,
          stem: "Find the sum of the first 6 terms of 5, 10, 20, …",
          response: { type: "numeric", parts: [{ label: "a", answer: 315 }] },
          markscheme: { principles: [{ kind: "formula", name: "Sum", statement: "$S_n$ formula." }], steps: [
            { reasoning: "$a=5$, $r=2$; $S_6=\\frac{5(2^6-1)}{2-1}=5\\times63=315$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 315.", marks: 1, markCode: "M" },
            { reasoning: "Check: 5+10+20+40+80+160=315 ✓.", marks: 1, markCode: "A" },
          ], finalAnswer: "315" },
        },
        {
          id: "olam-u4-s1-ge-q9", difficulty: "core", totalMarks: 2,
          stem: "In a geometric series, $u_3=12$ and $u_6=96$. The common ratio is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "8" },
            { id: "b", text: "2" },
            { id: "c", text: "3" },
            { id: "d", text: "4" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "technique", name: "Ratio of terms", statement: "$r^3=\\frac{u_6}{u_3}$." }], steps: [
            { reasoning: "$r^3=\\frac{96}{12}=8$ → $r=2$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 2.", marks: 1, markCode: "A" },
          ], finalAnswer: "2" },
        },
        {
          id: "olam-u4-s1-ge-q10", difficulty: "core", totalMarks: 2,
          stem: "For a geometric series with $a=4$ and $r=3$, $S_n=$",
          response: { type: "mcq", choices: [
            { id: "a", text: "$2(3^{n-1}-1)$" },
            { id: "b", text: "$2(3^n-1)$" },
            { id: "c", text: "$4(3^n-1)$" },
            { id: "d", text: "$\\frac{4}{3}(3^n-1)$" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "formula", name: "Sum", statement: "$\\frac{a(r^n-1)}{r-1}$." }], steps: [
            { reasoning: "$S_n=\\frac{4(3^n-1)}{3-1}=2(3^n-1)$.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$2(3^n-1)$" },
        },
        {
          id: "olam-u4-s1-ge-q11", difficulty: "core", totalMarks: 2,
          stem: "In a geometric series, $r=2$ and $u_3=20$. Find $a$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 5 }] },
          markscheme: { principles: [{ kind: "formula", name: "nth term", statement: "$u_n=ar^{n-1}$." }], steps: [
            { reasoning: "$u_3=ar^2=4a=20$ → $a=5$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 5.", marks: 1, markCode: "A" },
          ], finalAnswer: "5" },
        },
        {
          id: "olam-u4-s1-ge-q12", difficulty: "challenge", totalMarks: 3,
          stem: "For the geometric series with $a=8$ and $r=\\frac14$, the sum to infinity is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "24" },
            { id: "b", text: "10" },
            { id: "c", text: "32" },
            { id: "d", text: "$\\frac{32}{3}$" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "formula", name: "Sum to infinity", statement: "$|r|<1$ required." }], steps: [
            { reasoning: "$|r|=\\frac14<1$ so converges; $S_\\infty=\\frac{8}{1-\\frac14}=\\frac{8}{\\frac34}=\\frac{32}{3}$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $\\frac{32}{3}$.", marks: 1, markCode: "M" },
            { reasoning: "Check: $\\frac{32}{3}\\approx10.67$ — plausible since terms shrink. ✓", marks: 1, markCode: "A" },
          ], finalAnswer: "$\\frac{32}{3}$" },
        },
        {
          id: "olam-u4-s1-ge-q13", difficulty: "challenge", totalMarks: 4,
          stem: "A geometric series has $a=3$ and $r=2$. Find the smallest value of $n$ for which $S_n>1000$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Inequality in n", statement: "Solve $S_n>1000$." }], steps: [
            { reasoning: "$S_n=\\frac{3(2^n-1)}{2-1}=3(2^n-1)$.", marks: 1, markCode: "M" },
            { reasoning: "$3(2^n-1)>1000$ → $2^n>\\frac{1003}{3}\\approx334.3$ → $2^n>334.3$.", marks: 1, markCode: "M" },
            { reasoning: "Try powers of 2: $2^8=256$ (too small), $2^9=512$ (big enough).", marks: 1, markCode: "M" },
            { reasoning: "Answer: $n=9$ (check $S_9=3\\times511=1533>1000$, $S_8=3\\times255=765$).", marks: 1, markCode: "A" },
          ], finalAnswer: "$n=9$" },
        },
        {
          id: "olam-u4-s1-ge-q14", difficulty: "challenge", totalMarks: 4,
          stem: "In a geometric series, $S_2=8$ and $S_4=80$. Find the possible values of $a$ and $r$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Two sum equations", statement: "Factor $S_4$ via $S_2$." }], steps: [
            { reasoning: "$S_2=a(1+r)=8$; $S_4=a(1+r)(1+r^2)=8(1+r^2)=80$ → $r^2=9$ → $r=\\pm3$.", marks: 1, markCode: "M" },
            { reasoning: "Case $r=3$: $a(1+3)=8$ → $a=2$.", marks: 1, markCode: "M" },
            { reasoning: "Case $r=-3$: $a(1-3)=8$ → $a=-4$.", marks: 1, markCode: "M" },
            { reasoning: "Check $r=-3,a=-4$: $S_2=-4(-2)=8$ ✓, $S_4=-4(1-9)/(-4)=80$? $S_4=\\frac{-4((-3)^4-1)}{-3-1}=\\frac{-4\\times80}{-4}=80$ ✓.", marks: 1, markCode: "A" },
          ], finalAnswer: "$a=2$, $r=3$ or $a=-4$, $r=-3$" },
        },
        {
          id: "olam-u4-s1-ge-q15", difficulty: "foundation", totalMarks: 1,
          stem: "The 6th term of 7, 14, 28, … is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "448" },
            { id: "b", text: "224" },
            { id: "c", text: "112" },
            { id: "d", text: "196" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "formula", name: "nth term", statement: "$ar^{n-1}$." }], steps: [{ reasoning: "$u_6=7\\times2^5=7\\times32=224$.", marks: 1, markCode: "A" }], finalAnswer: "224" },
        },
        {
          id: "olam-u4-s1-ge-q16", difficulty: "core", totalMarks: 2,
          stem: "Find the sum to infinity of the geometric series 9, 3, 1, …",
          response: { type: "numeric", parts: [{ label: "a", answer: 13.5 }] },
          markscheme: { principles: [{ kind: "formula", name: "Sum to infinity", statement: "$|r|<1$." }], steps: [
            { reasoning: "$r=\\frac13$; $S_\\infty=\\frac{9}{1-\\frac13}=\\frac{9}{\\frac23}=\\frac{27}{2}=13.5$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 13.5.", marks: 1, markCode: "A" },
          ], finalAnswer: "13.5" },
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
