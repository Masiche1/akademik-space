import type { Lesson } from "../../../types.ts";

export const lesson93: Lesson = {
  id: "cilm-u9-lesson-9-3",
  code: "9-3",
  title: "Sequences and patterns",
  goal: "I CAN identify and extend number patterns, find the nth term, and solve sequence problems.",
  standards: ["0862 Algebra: sequences"],
  vocabulary: [
    { term: "Sequence", definition: "An ordered list of numbers following a rule." },
    { term: "Term", definition: "Each number in a sequence — $n$th term is the position." },
    { term: "Arithmetic sequence", definition: "Constant difference between terms — $a, a+d, a+2d, \\ldots$" },
    { term: "Geometric sequence", definition: "Constant ratio between terms — $a, ar, ar^2, \\ldots$" },
    { term: "Common difference", definition: "The fixed amount added in an arithmetic sequence." },
    { term: "nth term", definition: "Formula for any term position — $a + (n-1)d$ for arithmetic." },
  ],
  concepts: [
    {
      id: "cilm-u9-sequences",
      title: "Number sequences",
      skill: "Identify sequence types, find common difference/ratio, derive nth term formula.",
      lesson: {
        sections: [
          {
            heading: "Arithmetic sequences",
            body: "Constant difference $d$: $5, 8, 11, 14, \\ldots$ ($d=3$).\n\nnth term: $a_n = a_1 + (n-1)d$.\n\nFor $5,8,11,\\ldots$: $a_n = 5 + (n-1)3 = 3n+2$.",
          },
          {
            heading: "Geometric sequences",
            body: "Constant ratio $r$: $3, 6, 12, 24, \\ldots$ ($r=2$).\n\nnth term: $a_n = a_1 \\times r^{n-1}$.",
          },
          {
            heading: "Finding the rule",
            body: "Check differences first (arithmetic), then ratios (geometric). For $2,5,10,17,\\ldots$: differences $3,5,7$ — second differences constant $2$ → quadratic (preview).",
          },
        ],
        keyFormulas: [
          { name: "Arithmetic nth", statement: "$a_n = a + (n-1)d$" },
          { name: "Geometric nth", statement: "$a_n = ar^{n-1}$" },
        ],
        workedExample: {
          problem: "Find the 10th term of $4, 7, 10, 13, \\ldots$",
          solution: "$d=3$, $a_1=4$: $a_{10} = 4 + 9 \\times 3 = 31$.",
        },
      },
      questions: [
        {
          id: "cilm-u9-seq-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the common difference of $2, 5, 8, 11$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$2$" },
              { id: "b", text: "$5$" },
              { id: "c", text: "$3$" },
              { id: "d", text: "$11$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Common difference", statement: "$5-2=3$ — constant gap." },
            ],
            steps: [
              { reasoning: "Each term increases by $3$.", working: "d=3", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $3$",
            commonErrors: ["Choosing (c) — that's a term, not the difference."],
          },
        },
        {
          id: "cilm-u9-seq-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the nth term of $7, 10, 13, 16, \\ldots$",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "nth term", statement: "$d=3$, $a_1=7$: $a_n = 7 + (n-1)3 = 3n+4$." },
            ],
            steps: [
              { reasoning: "$d=3$; $a_n = 7 + (n-1)3 = 3n+4$.", working: "3n+4", marks: 1, markCode: "M" },
              { reasoning: "$a_n = 3n+4$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$a_n = 3n + 4$",
            commonErrors: ["$a_n = 3n+7$ — forgot $(n-1)$ adjustment."],
          },
        },
        {
          id: "cilm-u9-seq-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "The nth term of a sequence is $a_n = 5n - 2$. Find the 1st, 4th and 20th terms.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Substituting n", statement: "Substitute $n=1,4,20$ into formula." },
            ],
            steps: [
              { reasoning: "$n=1$: $5(1)-2=3$; $n=4$: $18$; $n=20$: $98$.", working: "3, 18, 98", marks: 1, markCode: "M" },
              { reasoning: "All three correct.", marks: 1, markCode: "M" },
              { reasoning: "Accurate.", marks: 1, markCode: "M" },
              { reasoning: "Correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$3, 18, 98$",
            commonErrors: ["Using $n$ as the term value directly — must substitute."],
          },
        },
        {
          id: "cilm-u9-seq-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A pattern of dots: row 1 has 3 dots, row 2 has 5, row 3 has 7, continuing.",
          parts: [
            { label: "a", prompt: "Find the common difference and nth term.", marks: 3 },
            { label: "b", prompt: "How many dots in row 10?", marks: 2 },
            { label: "c", prompt: "Which row has 45 dots?", marks: 2 },
            { label: "d", prompt: "Find total dots in first 10 rows.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Sequence application", statement: "$d=2$, $a_n=2n+1$; solve $2n+1=45$; sum arithmetic series." },
            ],
            steps: [
              { part: "a", reasoning: "$d=2$; $a_n = 3 + (n-1)2 = 2n+1$.", working: "2n+1", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Both correct.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Accurate.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$a_{10} = 2(10)+1 = 21$ dots.", working: "21", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$2n+1=45$ → $2n=44$ → $n=22$.", working: "n=22", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Sum $= \\frac{n}{2}(a_1+a_n) = \\frac{10}{2}(3+21) = 5 \\times 24 = 120$ dots.", working: "120", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Formula applied.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $d=2$, $a_n=2n+1$ (b) $21$ (c) row $22$ (d) $120$ dots",
            levels: [
              { level: "Level 3", marks: "2-3", descriptor: "Rule correct.", part: "a" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Sum correct.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "d" },
            ],
            commonErrors: ["In (d) adding manually and making errors — use $S_n=\\frac{n}{2}(a_1+a_n)$."],
          },
        },
        {
          id: "cilm-u9-seq-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the common difference of $11, 17, 23, 29$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$12$" },
              { id: "b", text: "$29$" },
              { id: "c", text: "$6$" },
              { id: "d", text: "$18$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Common difference", statement: "Subtract consecutive terms." },
            ],
            steps: [
              { reasoning: "$17-11=6$.", working: "d=6", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $6$",
          },
        },
        {
          id: "cilm-u9-seq-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the 10th term of $9, 14, 19, 24, \\ldots$",
          response: { type: "numeric", parts: [{ label: "Term", answer: 54 }] },
          markscheme: {
            principles: [
              { kind: "technique", name: "Arithmetic nth term", statement: "$d=5$, so $a_{10}=9+9(5)=54$." },
            ],
            steps: [
              { reasoning: "$a_{10}=9+9\\times5=54$.", working: "54", marks: 1, markCode: "M" },
              { reasoning: "The 10th term is $54$.", working: "54", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$54$",
          },
        },
        {
          id: "cilm-u9-seq-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the common ratio of $4, 12, 36, 108$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$8$" },
              { id: "b", text: "$3$" },
              { id: "c", text: "$36$" },
              { id: "d", text: "$12$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Common ratio", statement: "Divide consecutive terms." },
            ],
            steps: [
              { reasoning: "$12\\div4=3$.", working: "r=3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $3$",
          },
        },
        {
          id: "cilm-u9-seq-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the 12th term of $6, 10, 14, 18, \\ldots$",
          response: { type: "numeric", parts: [{ label: "Term", answer: 50 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "nth term", statement: "$a_n=6+(n-1)4$; substitute $n=12$." },
            ],
            steps: [
              { reasoning: "$a_{12}=6+11\\times4=50$.", working: "50", marks: 1, markCode: "M" },
              { reasoning: "The 12th term is $50$.", working: "50", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$50$",
          },
        },
        {
          id: "cilm-u9-seq-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which sequence is geometric?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$4,8,16,32$" },
              { id: "b", text: "$3,5,7,9$" },
              { id: "c", text: "$5,10,15,20$" },
              { id: "d", text: "$2,4,6,8$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Geometric sequence", statement: "Constant ratio between terms." },
            ],
            steps: [
              { reasoning: "$4,8,16,32$ has ratio $2$.", working: "r=2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** $4,8,16,32$",
          },
        },
        {
          id: "cilm-u9-seq-q10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Find the 5th term of the geometric sequence $3,6,12,24,\\ldots$",
          response: { type: "numeric", parts: [{ label: "Term", answer: 48 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Geometric nth", statement: "$a_n=ar^{n-1}$." },
            ],
            steps: [
              { reasoning: "$r=2$ and $a_1=3$.", working: "r=2", marks: 1, markCode: "M" },
              { reasoning: "$a_5=3\\times2^4=48$.", working: "48", marks: 1, markCode: "M" },
              { reasoning: "The 5th term is $48$.", working: "48", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$48$",
          },
        },
        {
          id: "cilm-u9-seq-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "The nth term of a sequence is $a_n=7n-4$. What is the first term?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$-4$" },
              { id: "b", text: "$11$" },
              { id: "c", text: "$3$" },
              { id: "d", text: "$7$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Substitute n", statement: "First term uses $n=1$." },
            ],
            steps: [
              { reasoning: "$a_1=7(1)-4=3$.", working: "3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $3$",
          },
        },
        {
          id: "cilm-u9-seq-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Find the nth term of $-2,1,4,7,\\ldots$ and hence find the 20th term.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "nth term", statement: "$d=3$, $a_1=-2$: $a_n=-2+(n-1)3=3n-5$." },
            ],
            steps: [
              { reasoning: "$d=3$ and $a_n=3n-5$.", working: "3n-5", marks: 1, markCode: "M" },
              { reasoning: "$a_{20}=3(20)-5=55$.", working: "55", marks: 1, markCode: "M" },
              { reasoning: "nth term $3n-5$; 20th term $55$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$a_n=3n-5$; $a_{20}=55$",
          },
        },
        {
          id: "cilm-u9-seq-q13",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "In the sequence with nth term $a_n=5n-10$, which term equals $100$?",
          response: { type: "numeric", parts: [{ label: "n", answer: 22 }] },
          markscheme: {
            principles: [
              { kind: "technique", name: "Solve for n", statement: "Set $5n-10=100$." },
            ],
            steps: [
              { reasoning: "$5n=110$ gives $n=22$.", working: "n=22", marks: 1, markCode: "M" },
              { reasoning: "Check: $5(22)-10=100$.", working: "100", marks: 1, markCode: "M" },
              { reasoning: "The 22nd term is $100$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$n=22$",
          },
        },
        {
          id: "cilm-u9-seq-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The first three terms of an arithmetic sequence are $8,13,18$. What is the 10th term?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$63$" },
              { id: "b", text: "$48$" },
              { id: "c", text: "$53$" },
              { id: "d", text: "$58$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "nth term", statement: "$a_{10}=8+9(5)=53$." },
            ],
            steps: [
              { reasoning: "$d=5$, so the 10th term is $53$.", working: "53", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $53$",
          },
        },
        {
          id: "cilm-u9-seq-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A savings plan deposits $\\pounds10$ in week 1, $\\pounds15$ in week 2, $\\pounds20$ in week 3, and continues with the same increase each week. Find the deposit in week 12 and the total deposited in the first 12 weeks.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Sequence application", statement: "Arithmetic sequence with $a_1=10$, $d=5$; use nth term and series sum." },
            ],
            steps: [
              { reasoning: "Week 12 deposit is $10+11(5)=65$.", working: "65", marks: 1, markCode: "M" },
              { reasoning: "Sum is $\\frac{12}{2}(10+65)=6(75)=450$.", working: "450", marks: 1, markCode: "M" },
              { reasoning: "Both values are correct.", marks: 1, markCode: "M" },
              { reasoning: "Week 12: $\\pounds65$; total $\\pounds450$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\pounds65$; $\\pounds450$",
            commonErrors: ["Using $12$ as the number of intervals instead of $11$."],
          },
        },
        {
          id: "cilm-u9-seq-q16",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which nth term formula gives the sequence $2,5,8,11,\\ldots$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$3n-1$" },
              { id: "b", text: "$2n+1$" },
              { id: "c", text: "$n+3$" },
              { id: "d", text: "$3n+2$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "nth term", statement: "$d=3$, $a_1=2$ gives $3n-1$." },
            ],
            steps: [
              { reasoning: "$a_n=2+(n-1)3=3n-1$.", working: "3n-1", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $3n-1$",
          },
        },
      ],
    },
    {
      id: "cilm-u9-geometry",
      title: "Geometry problem solving",
      skill: "Combine angle rules, area formulas and Pythagoras in multi-step problems.",
      lesson: {
        sections: [
          {
            heading: "Right-angled triangles",
            body: "Pythagoras: $a^2 + b^2 = c^2$ ($c$ = hypotenuse).\n\n$3,4,5$ triangle: $9+16=25$ ✓. Scale up: $6,8,10$ also works.",
          },
          {
            heading: "Combining skills",
            body: "Find missing angle → use angle rules → find side → use Pythagoras → calculate area. Each step feeds the next.",
          },
          {
            heading: "Common patterns",
            body: "- Ladder against wall: Pythagoras\n- Diagonal of rectangle: $\\sqrt{l^2+w^2}$\n- Height of triangle: $\\frac{2A}{b}$ rearranged",
          },
        ],
        keyFormulas: [
          { name: "Pythagoras", statement: "$a^2 + b^2 = c^2$ for right-angled triangles." },
        ],
        workedExample: {
          problem: "A right triangle has legs $6$ and $8$. Find hypotenuse and area.",
          solution: "$c = \\sqrt{36+64} = \\sqrt{100} = 10$; $A = \\frac{1}{2} \\times 6 \\times 8 = 24$.",
        },
      },
      questions: [
        {
          id: "cilm-u9-geo-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In Pythagoras' theorem $a^2+b^2=c^2$, which side is $c$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The base" },
              { id: "b", text: "The longest leg" },
              { id: "c", text: "The hypotenuse" },
              { id: "d", text: "Any side" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Pythagoras", statement: "$c$ is always the hypotenuse (opposite right angle)." },
            ],
            steps: [
              { reasoning: "$c$ = hypotenuse by convention.", working: "hypotenuse", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** The hypotenuse",
            commonErrors: ["Choosing (d) — $c$ specifically is hypotenuse."],
          },
        },
        {
          id: "cilm-u9-geo-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A right triangle has legs $5$ and $12$. Find the hypotenuse.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Pythagoras", statement: "$c = \\sqrt{25+144} = \\sqrt{169} = 13$." },
            ],
            steps: [
              { reasoning: "$c^2 = 25+144=169$; $c=13$.", working: "c=13", marks: 1, markCode: "M" },
              { reasoning: "$13$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$13$",
            commonErrors: ["$5+12=17$ — must square, add, then square root."],
          },
        },
        {
          id: "cilm-u9-geo-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A rectangle is $9$ cm by $12$ cm. Find the diagonal.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Diagonal", statement: "Diagonal splits rectangle into two right triangles: $d=\\sqrt{81+144}=\\sqrt{225}=15$." },
            ],
            steps: [
              { reasoning: "Diagonal $= \\sqrt{9^2+12^2} = \\sqrt{81+144} = \\sqrt{225}$.", working: "\\sqrt{225}", marks: 1, markCode: "M" },
              { reasoning: "$d = 15$ cm.", working: "d=15", marks: 1, markCode: "M" },
              { reasoning: "$15$ cm.", marks: 1, markCode: "M" },
              { reasoning: "Correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$15$ cm",
            commonErrors: ["$9+12=21$ — diagonal needs Pythagoras."],
          },
        },
        {
          id: "cilm-u9-geo-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A right-angled triangular sail has legs $4$ m and $7$ m.",
          parts: [
            { label: "a", prompt: "Find the hypotenuse (the sail's long edge).", marks: 2 },
            { label: "b", prompt: "Find the area of the sail.", marks: 2 },
            { label: "c", prompt: "Find the perimeter of the sail.", marks: 2 },
            { label: "d", prompt: "If material costs $\\pounds15$ per m², find the cost.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Combined geometry", statement: "Pythagoras + area + perimeter + cost." },
            ],
            steps: [
              { part: "a", reasoning: "$c = \\sqrt{16+49} = \\sqrt{65} \\approx 8.06$ m.", working: "\\sqrt{65}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$A = \\frac{1}{2} \\times 4 \\times 7 = 14$ m².", working: "14\\text{ m}^2", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$P = 4+7+8.06 = 19.06$ m (or $15+\\sqrt{65}$ exact).", working: "19.06", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Cost $= 14 \\times 15 = \\pounds210$.", working: "210", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Area used correctly.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $\\sqrt{65} \\approx 8.06$ m (b) $14$ m² (c) $\\approx19.06$ m (d) $\\pounds210$",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Cost correct.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "d" },
            ],
            commonErrors: ["In (c) forgetting hypotenuse — perimeter needs all three sides."],
          },
        },
        {
          id: "cilm-u9-geo-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which set of lengths forms a right-angled triangle?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$4,5,6$" },
              { id: "b", text: "$7,8,9$" },
              { id: "c", text: "$6,8,10$" },
              { id: "d", text: "$5,6,7$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Pythagoras", statement: "$6^2+8^2=10^2$." },
            ],
            steps: [
              { reasoning: "$36+64=100$.", working: "100", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $6,8,10$",
          },
        },
        {
          id: "cilm-u9-geo-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "A right triangle has legs $9$ cm and $12$ cm. Find the hypotenuse.",
          response: { type: "numeric", parts: [{ label: "Hypotenuse", answer: 15, unit: "cm" }] },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Pythagoras", statement: "$c=\\sqrt{9^2+12^2}$." },
            ],
            steps: [
              { reasoning: "$c=\\sqrt{81+144}=\\sqrt{225}=15$.", working: "15", marks: 1, markCode: "M" },
              { reasoning: "Hypotenuse is $15$ cm.", working: "15", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$15$ cm",
          },
        },
        {
          id: "cilm-u9-geo-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Two angles in a triangle are $38^{\\circ}$ and $67^{\\circ}$. What is the third angle?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$75^{\\circ}$" },
              { id: "b", text: "$95^{\\circ}$" },
              { id: "c", text: "$85^{\\circ}$" },
              { id: "d", text: "$105^{\\circ}$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Triangle angles", statement: "Angles sum to $180^{\\circ}$." },
            ],
            steps: [
              { reasoning: "$180-38-67=75$.", working: "75", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $75^{\\circ}$",
          },
        },
        {
          id: "cilm-u9-geo-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the area of a triangle with base $14$ cm and perpendicular height $9$ cm.",
          response: { type: "numeric", parts: [{ label: "Area", answer: 63, unit: "cm^2" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Triangle area", statement: "$A=\\frac12bh$." },
            ],
            steps: [
              { reasoning: "$A=\\frac12\\times14\\times9=63$.", working: "63", marks: 1, markCode: "M" },
              { reasoning: "Area is $63$ cm².", working: "63", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$63$ cm²",
          },
        },
        {
          id: "cilm-u9-geo-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The diagonal of a rectangle is found using:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$l+w$" },
              { id: "b", text: "$lw$" },
              { id: "c", text: "$\\sqrt{l^2+w^2}$" },
              { id: "d", text: "$2(l+w)$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Pythagoras", statement: "The diagonal is the hypotenuse of a right triangle." },
            ],
            steps: [
              { reasoning: "$d^2=l^2+w^2$.", working: "\\sqrt{l^2+w^2}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $\\sqrt{l^2+w^2}$",
          },
        },
        {
          id: "cilm-u9-geo-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the diagonal of a rectangle measuring $8$ cm by $15$ cm.",
          response: { type: "numeric", parts: [{ label: "Diagonal", answer: 17, unit: "cm" }] },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Pythagoras", statement: "$d=\\sqrt{8^2+15^2}$." },
            ],
            steps: [
              { reasoning: "$d=\\sqrt{64+225}=\\sqrt{289}=17$.", working: "17", marks: 1, markCode: "M" },
              { reasoning: "Diagonal is $17$ cm.", working: "17", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$17$ cm",
          },
        },
        {
          id: "cilm-u9-geo-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The area of a triangle is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac12(b+h)$" },
              { id: "b", text: "$\\frac12bh$" },
              { id: "c", text: "$bh$" },
              { id: "d", text: "$b+h$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Triangle area", statement: "Half base times perpendicular height." },
            ],
            steps: [
              { reasoning: "The triangle is half the corresponding rectangle.", working: "\\frac12bh", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $\\frac12bh$",
          },
        },
        {
          id: "cilm-u9-geo-q12",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A $13$ m ladder leans against a vertical wall with its base $5$ m from the wall. Find the height reached and the distance the base must move so the height is $12$ m.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Pythagoras", statement: "Ladder, wall and ground form a right triangle." },
            ],
            steps: [
              { reasoning: "Height is $\\sqrt{13^2-5^2}=\\sqrt{144}=12$ m.", working: "12", marks: 1, markCode: "M" },
              { reasoning: "If height is $12$ m, base distance is $\\sqrt{13^2-12^2}=5$ m.", working: "5", marks: 1, markCode: "M" },
              { reasoning: "Height reached is already $12$ m, so the base stays $5$ m from the wall.", working: "5", marks: 1, markCode: "M" },
              { reasoning: "$12$ m high; no movement needed.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$12$ m; base remains $5$ m from wall",
            commonErrors: ["Subtracting side lengths instead of using squares."],
          },
        },
        {
          id: "cilm-u9-geo-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the perimeter of a right triangle with legs $6$ cm and $8$ cm.",
          response: { type: "numeric", parts: [{ label: "Perimeter", answer: 24, unit: "cm" }] },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Pythagoras", statement: "Hypotenuse is $10$ cm, then sum all sides." },
            ],
            steps: [
              { reasoning: "$c=\\sqrt{36+64}=10$; perimeter $=6+8+10=24$.", working: "24", marks: 1, markCode: "M" },
              { reasoning: "Perimeter is $24$ cm.", working: "24", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$24$ cm",
          },
        },
        {
          id: "cilm-u9-geo-q14",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A right triangle has hypotenuse $13$ and one leg $5$. What is the other leg?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$18$" },
              { id: "b", text: "$\\sqrt{194}$" },
              { id: "c", text: "$8$" },
              { id: "d", text: "$12$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Pythagoras", statement: "$b=\\sqrt{13^2-5^2}=12$." },
            ],
            steps: [
              { reasoning: "$b=\\sqrt{169-25}=\\sqrt{144}=12$.", working: "12", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $12$",
          },
        },
        {
          id: "cilm-u9-geo-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A right-angled triangular flag has perpendicular legs $9$ cm and $12$ cm. Find its area and hypotenuse.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Combined geometry", statement: "Use area formula and Pythagoras on the same triangle." },
            ],
            steps: [
              { reasoning: "Area is $\\frac12\\times9\\times12=54$ cm².", working: "54", marks: 1, markCode: "M" },
              { reasoning: "Hypotenuse is $\\sqrt{9^2+12^2}=\\sqrt{225}=15$ cm.", working: "15", marks: 1, markCode: "M" },
              { reasoning: "Both answers are correct.", marks: 1, markCode: "M" },
              { reasoning: "Area $54$ cm²; hypotenuse $15$ cm.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$54$ cm²; $15$ cm",
          },
        },
        {
          id: "cilm-u9-geo-q16",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which calculation finds the hypotenuse when the legs are $7$ and $24$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\sqrt{7^2+24^2}$" },
              { id: "b", text: "$7\\times24$" },
              { id: "c", text: "$\\sqrt{24-7}$" },
              { id: "d", text: "$7+24$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Pythagoras", statement: "Square both legs, add, then square root." },
            ],
            steps: [
              { reasoning: "$c=\\sqrt{49+576}=25$.", working: "25", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $\\sqrt{7^2+24^2}$",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cilm-u9-sequences-geometry-notes",
      title: "Sequences and geometry — revision notes",
      summary: "nth term formulas, Pythagoras, combined problems.",
      sections: [
        {
          heading: "Sequences",
          body: "Arithmetic: $a_n = a+(n-1)d$. Geometric: $a_n = ar^{n-1}$. Check differences then ratios. Sum: $S_n=\\frac{n}{2}(a_1+a_n)$.",
        },
        {
          heading: "Geometry",
          body: "$a^2+b^2=c^2$ for right triangles. Diagonal of rectangle $=\\sqrt{l^2+w^2}$. Combine with area/perimeter formulas.",
        },
      ],
    },
  ],
};
