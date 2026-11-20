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
              { id: "a", text: "$3$" },
              { id: "b", text: "$2$" },
              { id: "c", text: "$5$" },
              { id: "d", text: "$11$" },
            ],
            correctChoiceId: "a",
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
              { id: "a", text: "The hypotenuse" },
              { id: "b", text: "The longest leg" },
              { id: "c", text: "The base" },
              { id: "d", text: "Any side" },
            ],
            correctChoiceId: "a",
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
