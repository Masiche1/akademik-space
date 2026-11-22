import type { Lesson } from "../../../types.ts";

export const lesson102: Lesson = {
  id: "olam-u10-lesson-10-2",
  code: "10-2",
  title: "Position Vectors and Collinearity",
  goal: "I CAN use position vectors to prove collinearity and find ratios.",
  standards: ["Cambridge O Level Additional Mathematics 4037: vectors"],
  vocabulary: [
    { term: "Position vector", definition: "Vector from origin O to point P." },
    { term: "Collinear", definition: "Points lying on the same straight line." },
    { term: "Section formula", definition: "Position vector dividing AB in ratio m:n." },
    { term: "Scalar multiple", definition: "Vectors parallel iff one is a scalar multiple of the other." },
  ],
  concepts: [
    {
      id: "olam-u10-s2-position",
      title: "Position vectors and collinearity",
      skill: "Prove collinearity and find division ratios with vectors.",
      lesson: {
        sections: [
          {
            heading: "Position vectors",
            body: "Point P has position vector $\\mathbf{p}$. $\\overrightarrow{AB} = \\mathbf{b} - \\mathbf{a}$. Point dividing AB in ratio m:n has position vector $\\frac{n\\mathbf{a} + m\\mathbf{b}}{m+n}$ (section formula).",
          },
          {
            heading: "Proving collinearity",
            body: "Points A, B, C are collinear if $\\overrightarrow{AB}$ and $\\overrightarrow{AC}$ (or $\\overrightarrow{BC}$) are scalar multiples — same direction. For C to lie ON segment AB, the scalar must also be between 0 and 1; otherwise C is collinear but outside the segment.",
          },
        ],
        keyFormulas: [
          { name: "Section formula", statement: "$\\frac{n\\mathbf{a}+m\\mathbf{b}}{m+n}$" },
          { name: "Collinear", statement: "$\\overrightarrow{AB} = k\\overrightarrow{AC}$ for some scalar k" },
        ],
        workedExample: {
          problem: "A(1,1), B(3,5), C(5,9). Show A, B, C are collinear.",
          solution: "$\\overrightarrow{AB} = \\begin{pmatrix}2\\\\4\\end{pmatrix}$, $\\overrightarrow{AC} = \\begin{pmatrix}4\\\\8\\end{pmatrix} = 2\\overrightarrow{AB}$ ⇒ collinear.",
        },
      },
      questions: [
        {
          id: "olam-u10-pv-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the position vector of the midpoint of A and B?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\frac{\\mathbf{a}+\\mathbf{b}}{2}$" },
            { id: "b", text: "$\\frac{\\mathbf{b}-\\mathbf{a}}{2}$" },
            { id: "c", text: "$\\mathbf{a}+\\mathbf{b}$" },
            { id: "d", text: "$\\mathbf{b}-\\mathbf{a}$" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "formula", name: "Midpoint", statement: "Average of position vectors." }],
            steps: [{ reasoning: "Midpoint $= \\frac{\\mathbf{a}+\\mathbf{b}}{2}$.", marks: 1, markCode: "A" }],
            finalAnswer: "$\\frac{\\mathbf{a}+\\mathbf{b}}{2}$",
          },
        },
        {
          id: "olam-u10-pv-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Find the position vector of the point dividing AB in ratio 1:1 (A and B have position vectors a and b).",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "Section formula", statement: "$\\frac{n\\mathbf{a}+m\\mathbf{b}}{m+n}$ with m=n=1." }],
            steps: [
              { reasoning: "$\\frac{1\\cdot\\mathbf{a} + 1\\cdot\\mathbf{b}}{2} = \\frac{\\mathbf{a}+\\mathbf{b}}{2}$.", marks: 1, markCode: "M" },
              { reasoning: "Answer stated.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\frac{\\mathbf{a}+\\mathbf{b}}{2}$",
          },
        },
        {
          id: "olam-u10-pv-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "A has position vector $\\begin{pmatrix}1\\\\2\\end{pmatrix}$, B has $\\begin{pmatrix}5\\\\6\\end{pmatrix}$. Find the position vector of the point dividing AB in ratio 1:3.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "Section formula", statement: "$\\frac{n\\mathbf{a}+m\\mathbf{b}}{m+n}$, m:n = 1:3." }],
            steps: [
              { reasoning: "$\\frac{3\\begin{pmatrix}1\\\\2\\end{pmatrix} + 1\\begin{pmatrix}5\\\\6\\end{pmatrix}}{4}$.", marks: 1, markCode: "M" },
              { reasoning: "$= \\frac{1}{4}\\begin{pmatrix}3+5\\\\6+6\\end{pmatrix} = \\frac{1}{4}\\begin{pmatrix}8\\\\12\\end{pmatrix}$.", marks: 1, markCode: "M" },
              { reasoning: "$= \\begin{pmatrix}2\\\\3\\end{pmatrix}$.", marks: 1, markCode: "M" },
              { reasoning: "Answer stated.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\begin{pmatrix}2\\\\3\\end{pmatrix}$",
          },
        },
        {
          id: "olam-u10-pv-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A(0,0), B(4,2), C(6,3). Prove A, B, C are collinear and find the ratio AB:BC.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "property", name: "Collinearity", statement: "Vectors are scalar multiples." }],
            steps: [
              { reasoning: "$\\overrightarrow{AB} = \\begin{pmatrix}4\\\\2\\end{pmatrix}$; $\\overrightarrow{BC} = \\begin{pmatrix}2\\\\1\\end{pmatrix}$.", marks: 1, markCode: "M" },
              { reasoning: "$\\overrightarrow{AB} = 2\\overrightarrow{BC}$ — scalar multiple ⇒ collinear.", marks: 1, markCode: "M" },
              { reasoning: "Also $\\overrightarrow{AC} = \\begin{pmatrix}6\\\\3\\end{pmatrix} = 3\\overrightarrow{BC}$.", marks: 1, markCode: "M" },
              { reasoning: "$|AB| = 2|BC|$ ⇒ AB:BC = 2:1.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion stated.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Collinear; AB:BC = 2:1",
          },
        },
        {
          id: "olam-u10-pv-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The midpoint of A(1,3) and B(5,7) has coordinates…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$(6,10)$" },
            { id: "b", text: "$(4,5)$" },
            { id: "c", text: "$(3,5)$" },
            { id: "d", text: "$(2,2)$" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "formula", name: "Midpoint", statement: "Average of coordinates." }],
            steps: [{ reasoning: "$\\left(\\frac{1+5}{2},\\frac{3+7}{2}\\right)=(3,5)$.", marks: 1, markCode: "A" }],
            finalAnswer: "$(3,5)$",
          },
        },
        {
          id: "olam-u10-pv-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Find the coordinates of the midpoint of A(2,-1) and B(8,5).",
          response: { type: "numeric", parts: [
            { label: "a", answer: 5 }, { label: "b", answer: 2 },
          ] },
          markscheme: {
            principles: [{ kind: "formula", name: "Midpoint", statement: "Average of coordinates." }],
            steps: [
              { reasoning: "$\\left(\\frac{2+8}{2},\\frac{-1+5}{2}\\right)=(5,2)$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $(5,2)$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$(5,2)$",
          },
        },
        {
          id: "olam-u10-pv-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "The point dividing AB in ratio 1:2 has position vector…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\frac{\\mathbf{b}-\\mathbf{a}}{3}$" },
            { id: "b", text: "$\\frac{2\\mathbf{a}+\\mathbf{b}}{3}$" },
            { id: "c", text: "$\\frac{\\mathbf{a}+\\mathbf{b}}{2}$" },
            { id: "d", text: "$\\frac{\\mathbf{a}+2\\mathbf{b}}{3}$" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "formula", name: "Section formula", statement: "$\\frac{n\\mathbf{a}+m\\mathbf{b}}{m+n}$ with $m:n=1:2$." }],
            steps: [{ reasoning: "$m=1$, $n=2$ → $\\frac{2\\mathbf{a}+\\mathbf{b}}{3}$.", marks: 1, markCode: "A" }],
            finalAnswer: "$\\frac{2\\mathbf{a}+\\mathbf{b}}{3}$",
          },
        },
        {
          id: "olam-u10-pv-q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "A has position vector $\\begin{pmatrix}1\\\\0\\end{pmatrix}$ and B has $\\begin{pmatrix}4\\\\6\\end{pmatrix}$. Find the position vector of the point dividing AB in ratio 2:1.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "Section formula", statement: "$\\frac{n\\mathbf{a}+m\\mathbf{b}}{m+n}$, $m:n=2:1$." }],
            steps: [
              { reasoning: "$\\frac{1\\begin{pmatrix}1\\\\0\\end{pmatrix}+2\\begin{pmatrix}4\\\\6\\end{pmatrix}}{3}$.", marks: 1, markCode: "M" },
              { reasoning: "$=\\frac{1}{3}\\begin{pmatrix}1+8\\\\0+12\\end{pmatrix}=\\frac{1}{3}\\begin{pmatrix}9\\\\12\\end{pmatrix}$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $\\begin{pmatrix}3\\\\4\\end{pmatrix}$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\begin{pmatrix}3\\\\4\\end{pmatrix}$",
          },
        },
        {
          id: "olam-u10-pv-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "A(0,0), B(2,4), C(3,6) are collinear. Find the ratio AB:BC.",
          response: { type: "numeric", parts: [
            { label: "a", answer: 2 }, { label: "b", answer: 1 },
          ] },
          markscheme: {
            principles: [{ kind: "property", name: "Collinearity", statement: "Compare vector lengths along the line." }],
            steps: [
              { reasoning: "$\\overrightarrow{AB}=\\begin{pmatrix}2\\\\4\\end{pmatrix}$, $\\overrightarrow{BC}=\\begin{pmatrix}1\\\\2\\end{pmatrix}=\\frac12\\overrightarrow{AB}$ → AB:BC $=2:1$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 2:1.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2:1",
          },
        },
        {
          id: "olam-u10-pv-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Are the points $(1,2)$, $(2,4)$ and $(3,6)$ collinear?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Yes — the vectors are scalar multiples" },
            { id: "b", text: "Only if the origin is included" },
            { id: "c", text: "No" },
            { id: "d", text: "Cannot be determined" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "property", name: "Collinearity", statement: "$\\overrightarrow{AB}=k\\overrightarrow{AC}$." }],
            steps: [{ reasoning: "$\\overrightarrow{AB}=\\begin{pmatrix}1\\\\2\\end{pmatrix}$, $\\overrightarrow{AC}=\\begin{pmatrix}2\\\\4\\end{pmatrix}=2\\overrightarrow{AB}$ ⇒ collinear.", marks: 1, markCode: "A" }],
            finalAnswer: "Yes",
          },
        },
        {
          id: "olam-u10-pv-q11",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Prove that A(1,1), B(2,3) and C(4,7) are collinear.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "property", name: "Collinearity", statement: "Vectors are scalar multiples." }],
            steps: [
              { reasoning: "$\\overrightarrow{AB}=\\begin{pmatrix}1\\\\2\\end{pmatrix}$; $\\overrightarrow{AC}=\\begin{pmatrix}3\\\\6\\end{pmatrix}$.", marks: 1, markCode: "M" },
              { reasoning: "$\\overrightarrow{AC}=3\\overrightarrow{AB}$ — scalar multiple ⇒ same line.", marks: 1, markCode: "M" },
              { reasoning: "Also $\\overrightarrow{BC}=\\begin{pmatrix}2\\\\4\\end{pmatrix}=2\\overrightarrow{AB}$, consistent.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion: A, B, C are collinear.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Collinear",
          },
        },
        {
          id: "olam-u10-pv-q12",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Find the coordinates of the point dividing the segment from O(0,0) to P(6,9) in ratio 1:2.",
          response: { type: "numeric", parts: [
            { label: "a", answer: 2 }, { label: "b", answer: 3 },
          ] },
          markscheme: {
            principles: [{ kind: "formula", name: "Section formula", statement: "$\\frac{2\\mathbf{0}+1\\mathbf{p}}{3}$." }],
            steps: [
              { reasoning: "$\\frac{1}{3}\\begin{pmatrix}6\\\\9\\end{pmatrix}=\\begin{pmatrix}2\\\\3\\end{pmatrix}$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $(2,3)$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$(2,3)$",
          },
        },
        {
          id: "olam-u10-pv-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "The point dividing AB in ratio $m:n$ has position vector…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\frac{\\mathbf{a}+\\mathbf{b}}{m+n}$" },
            { id: "b", text: "$\\frac{n\\mathbf{a}+m\\mathbf{b}}{m+n}$" },
            { id: "c", text: "$\\frac{m\\mathbf{a}+n\\mathbf{b}}{m+n}$" },
            { id: "d", text: "$\\mathbf{a}+\\frac{m}{n}\\mathbf{b}$" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "formula", name: "Section formula", statement: "Closer to A ⇒ more weight on a." }],
            steps: [{ reasoning: "$\\frac{n\\mathbf{a}+m\\mathbf{b}}{m+n}$: larger $m$ pulls towards B.", marks: 1, markCode: "A" }],
            finalAnswer: "$\\frac{n\\mathbf{a}+m\\mathbf{b}}{m+n}$",
          },
        },
        {
          id: "olam-u10-pv-q14",
          difficulty: "core",
          totalMarks: 3,
          stem: "A(2,1), B(8,4). Find the position vector of P on AB with AP:PB = 1:2.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "Section formula", statement: "$m:n=1:2$." }],
            steps: [
              { reasoning: "$\\mathbf{p}=\\frac{2\\begin{pmatrix}2\\\\1\\end{pmatrix}+1\\begin{pmatrix}8\\\\4\\end{pmatrix}}{3}=\\frac{1}{3}\\begin{pmatrix}12\\\\6\\end{pmatrix}$.", marks: 1, markCode: "M" },
              { reasoning: "$=\\begin{pmatrix}4\\\\2\\end{pmatrix}$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $(4,2)$; check AP:PB $=(2,1):(4,2)=1:2$ ✓.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\begin{pmatrix}4\\\\2\\end{pmatrix}$",
          },
        },
        {
          id: "olam-u10-pv-q15",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the length of $\\overrightarrow{AB}$ for A(-1,2) and B(3,-4).",
          response: { type: "numeric", parts: [{ label: "a", answer: 7.21, tolerance: 0.01 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Distance", statement: "$|\\overrightarrow{AB}|=\\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}$." }],
            steps: [
              { reasoning: "$\\overrightarrow{AB}=\\begin{pmatrix}4\\\\-6\\end{pmatrix}$ → $|AB|=\\sqrt{16+36}=\\sqrt{52}=2\\sqrt{13}\\approx7.21$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $2\\sqrt{13}\\approx7.21$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2\\sqrt{13}$",
          },
        },
        {
          id: "olam-u10-pv-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A(0,0), B(4,2), C(2,1), D(6,3). Show that A, B, C, D are collinear and find the ratio AC:CB:BD:DC.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "property", name: "Collinearity", statement: "All displacement vectors are scalar multiples of $\\begin{pmatrix}2\\\\1\\end{pmatrix}$." }],
            steps: [
              { reasoning: "$\\overrightarrow{AB}=\\begin{pmatrix}4\\\\2\\end{pmatrix}=2\\begin{pmatrix}2\\\\1\\end{pmatrix}$; $\\overrightarrow{AC}=\\begin{pmatrix}2\\\\1\\end{pmatrix}$; $\\overrightarrow{AD}=\\begin{pmatrix}6\\\\3\\end{pmatrix}=3\\begin{pmatrix}2\\\\1\\end{pmatrix}$.", marks: 1, markCode: "M" },
              { reasoning: "$\\overrightarrow{BC}=\\begin{pmatrix}2\\\\1\\end{pmatrix}$, $\\overrightarrow{BD}=\\begin{pmatrix}2\\\\1\\end{pmatrix}$, $\\overrightarrow{CD}=\\begin{pmatrix}4\\\\2\\end{pmatrix}=2\\begin{pmatrix}2\\\\1\\end{pmatrix}$ — all parallel ⇒ collinear.", marks: 1, markCode: "M" },
              { reasoning: "Lengths: AC $=\\sqrt5$, CB $=\\sqrt5$, BD $=\\sqrt5$, DC $=2\\sqrt5$ → AC:CB:BD:DC $=1:1:1:2$.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion: collinear with ratio 1:1:1:2.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Collinear; AC:CB:BD:DC = 1:1:1:2",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "olam-u10-pv-notes",
      title: "Position vectors — revision notes",
      summary: "Section formula; collinear ⇔ scalar multiples.",
      sections: [
        { heading: "Section formula", body: "$\\frac{n\\mathbf{a}+m\\mathbf{b}}{m+n}$ divides AB in ratio m:n." },
        { heading: "Collinearity", body: "$\\overrightarrow{AB} = k\\overrightarrow{AC}$ ⇒ collinear; check 0<k<1 for 'between'." },
      ],
    },
  ],
};
