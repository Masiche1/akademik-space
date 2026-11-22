import type { Lesson } from "../../../types.ts";

export const lesson102: Lesson = {
  id: "ciam-u10-lesson-10-2",
  code: "10-2",
  title: "Position Vectors and Collinearity",
  goal: "I CAN use position vectors to prove collinearity and find ratios.",
  standards: ["Cambridge IGCSE Additional Mathematics 0606: vectors"],
  vocabulary: [
    { term: "Position vector", definition: "Vector from origin O to point P." },
    { term: "Collinear", definition: "Points lying on the same straight line." },
    { term: "Section formula", definition: "Position vector dividing AB in ratio m:n." },
    { term: "Scalar multiple", definition: "Vectors parallel iff one is a scalar multiple of the other." },
  ],
  concepts: [
    {
      id: "ciam-u10-s2-position",
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
          id: "ciam-u10-pv-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the position vector of the midpoint of A and B?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\frac{\\mathbf{a}+\\mathbf{b}}{2}$" },
            { id: "b", text: "$\\mathbf{a}+\\mathbf{b}$" },
            { id: "c", text: "$\\mathbf{b}-\\mathbf{a}$" },
            { id: "d", text: "$\\frac{\\mathbf{b}-\\mathbf{a}}{2}$" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "formula", name: "Midpoint", statement: "Average of position vectors." }],
            steps: [{ reasoning: "Midpoint $= \\frac{\\mathbf{a}+\\mathbf{b}}{2}$.", marks: 1, markCode: "A" }],
            finalAnswer: "$\\frac{\\mathbf{a}+\\mathbf{b}}{2}$",
          },
        },
        {
          id: "ciam-u10-pv-q2",
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
          id: "ciam-u10-pv-q3",
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
          id: "ciam-u10-pv-q4",
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
          id: "ciam-u10-pv-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The position vector of the midpoint of AB is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$2(\\mathbf{a}+\\mathbf{b})$" },
            { id: "b", text: "$\\frac{\\mathbf{a}+\\mathbf{b}}{2}$" },
            { id: "c", text: "$\\mathbf{a}+\\mathbf{b}$" },
            { id: "d", text: "$\\frac{\\mathbf{b}-\\mathbf{a}}{2}$" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "formula", name: "Midpoint", statement: "Average of position vectors." }],
            steps: [{ reasoning: "Midpoint divides AB in ratio 1:1.", marks: 1, markCode: "A" }],
            finalAnswer: "$\\frac{\\mathbf{a}+\\mathbf{b}}{2}$",
          },
        },
        {
          id: "ciam-u10-pv-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Find the position vector of the midpoint of A(2,2) and B(8,8).",
          response: { type: "numeric", parts: [{ label: "x", answer: 5 }, { label: "y", answer: 5 }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Midpoint", statement: "$\\frac{\\mathbf{a}+\\mathbf{b}}{2}$." }],
            steps: [
              { reasoning: "$\\frac{\\begin{pmatrix}2\\\\2\\end{pmatrix}+\\begin{pmatrix}8\\\\8\\end{pmatrix}}{2}=\\frac{1}{2}\\begin{pmatrix}10\\\\10\\end{pmatrix}=\\begin{pmatrix}5\\\\5\\end{pmatrix}$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $(5,5)$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\begin{pmatrix}5\\\\5\\end{pmatrix}$",
          },
        },
        {
          id: "ciam-u10-pv-q7",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Find the position vector of the point dividing AB in ratio 1:2, where $\\mathbf{a}=\\begin{pmatrix}1\\\\0\\end{pmatrix}$ and $\\mathbf{b}=\\begin{pmatrix}4\\\\3\\end{pmatrix}$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "Section formula", statement: "$\\frac{n\\mathbf{a}+m\\mathbf{b}}{m+n}$, m:n = 1:2." }],
            steps: [
              { reasoning: "$\\frac{2\\begin{pmatrix}1\\\\0\\end{pmatrix}+1\\begin{pmatrix}4\\\\3\\end{pmatrix}}{3}$.", marks: 1, markCode: "M" },
              { reasoning: "$=\\frac{1}{3}\\begin{pmatrix}2+4\\\\0+3\\end{pmatrix}=\\frac{1}{3}\\begin{pmatrix}6\\\\3\\end{pmatrix}=\\begin{pmatrix}2\\\\1\\end{pmatrix}$.", marks: 1, markCode: "M" },
              { reasoning: "Answer stated.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\begin{pmatrix}2\\\\1\\end{pmatrix}$",
          },
        },
        {
          id: "ciam-u10-pv-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Points A, B, C are collinear when…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\overrightarrow{AB}$ and $\\overrightarrow{AC}$ are equal" },
            { id: "b", text: "$|AB|=|AC|$" },
            { id: "c", text: "A is the midpoint" },
            { id: "d", text: "$\\overrightarrow{AB}$ and $\\overrightarrow{AC}$ are scalar multiples" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "property", name: "Collinearity", statement: "Scalar multiples." }],
            steps: [{ reasoning: "Parallel vectors from a common point lie on one line.", marks: 1, markCode: "A" }],
            finalAnswer: "Scalar multiples",
          },
        },
        {
          id: "ciam-u10-pv-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Find the magnitude of $\\overrightarrow{AB}$ for A(1,1) and B(5,3).",
          response: { type: "numeric", parts: [{ label: "a", answer: 4.47, tolerance: 0.01 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Vector + magnitude", statement: "$\\mathbf{b}-\\mathbf{a}$ then length." }],
            steps: [
              { reasoning: "$\\overrightarrow{AB}=\\begin{pmatrix}4\\\\2\\end{pmatrix}$.", marks: 1, markCode: "M" },
              { reasoning: "$|\\overrightarrow{AB}|=\\sqrt{16+4}=\\sqrt{20}=2\\sqrt5\\approx4.47$.", marks: 1, markCode: "M" },
              { reasoning: "Answer shown.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2\\sqrt5$",
          },
        },
        {
          id: "ciam-u10-pv-q10",
          difficulty: "core",
          totalMarks: 4,
          stem: "Show that A(0,0), B(2,4) and C(3,6) are collinear.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "property", name: "Collinearity", statement: "Scalar multiples." }],
            steps: [
              { reasoning: "$\\overrightarrow{AB}=\\begin{pmatrix}2\\\\4\\end{pmatrix}$; $\\overrightarrow{BC}=\\begin{pmatrix}1\\\\2\\end{pmatrix}$.", marks: 1, markCode: "M" },
              { reasoning: "$\\overrightarrow{AB}=2\\overrightarrow{BC}$ — scalar multiple ⇒ collinear.", marks: 1, markCode: "M" },
              { reasoning: "Also $\\overrightarrow{AC}=\\begin{pmatrix}3\\\\6\\end{pmatrix}=3\\overrightarrow{BC}$.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion stated.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Collinear",
          },
        },
        {
          id: "ciam-u10-pv-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "The point (3,3) divides the segment joining A(1,1) and B(5,5) in the ratio…",
          response: { type: "mcq", choices: [
            { id: "a", text: "2:1" },
            { id: "b", text: "1:3" },
            { id: "c", text: "1:2" },
            { id: "d", text: "1:1" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "formula", name: "Section formula", statement: "Check against formula." }],
            steps: [{ reasoning: "$\\frac{\\begin{pmatrix}1\\\\1\\end{pmatrix}+\\begin{pmatrix}5\\\\5\\end{pmatrix}}{2}=\\begin{pmatrix}3\\\\3\\end{pmatrix}$ — midpoint, ratio 1:1.", marks: 1, markCode: "A" }],
            finalAnswer: "1:1",
          },
        },
        {
          id: "ciam-u10-pv-q12",
          difficulty: "core",
          totalMarks: 4,
          stem: "Find the position vector of the point dividing AB in ratio 2:1, where $\\mathbf{a}=\\begin{pmatrix}0\\\\0\\end{pmatrix}$ and $\\mathbf{b}=\\begin{pmatrix}6\\\\3\\end{pmatrix}$.",
          response: { type: "numeric", parts: [{ label: "x", answer: 4 }, { label: "y", answer: 2 }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Section formula", statement: "$\\frac{n\\mathbf{a}+m\\mathbf{b}}{m+n}$, m:n = 2:1." }],
            steps: [
              { reasoning: "$\\frac{1\\begin{pmatrix}0\\\\0\\end{pmatrix}+2\\begin{pmatrix}6\\\\3\\end{pmatrix}}{3}$.", marks: 1, markCode: "M" },
              { reasoning: "$=\\frac{1}{3}\\begin{pmatrix}12\\\\6\\end{pmatrix}=\\begin{pmatrix}4\\\\2\\end{pmatrix}$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $(4,2)$.", marks: 1, markCode: "M" },
              { reasoning: "Answer shown.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\begin{pmatrix}4\\\\2\\end{pmatrix}$",
          },
        },
        {
          id: "ciam-u10-pv-q13",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Prove that A(1,2), B(3,4) and C(5,6) are collinear, and find the ratio AB:BC.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "property", name: "Collinearity", statement: "Scalar multiples." }],
            steps: [
              { reasoning: "$\\overrightarrow{AB}=\\begin{pmatrix}2\\\\2\\end{pmatrix}$; $\\overrightarrow{BC}=\\begin{pmatrix}2\\\\2\\end{pmatrix}$.", marks: 1, markCode: "M" },
              { reasoning: "$\\overrightarrow{AB}=\\overrightarrow{BC}$ — equal vectors ⇒ collinear with B between.", marks: 1, markCode: "M" },
              { reasoning: "Also $\\overrightarrow{AC}=\\begin{pmatrix}4\\\\4\\end{pmatrix}=2\\overrightarrow{AB}$.", marks: 1, markCode: "M" },
              { reasoning: "$AB:BC=1:1$.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion stated.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Collinear; AB:BC = 1:1",
          },
        },
        {
          id: "ciam-u10-pv-q14",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Find the magnitude of $\\overrightarrow{AB}$ for A(2,1) and B(7,4).",
          response: { type: "numeric", parts: [{ label: "a", answer: 5.83, tolerance: 0.01 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Vector + magnitude", statement: "$\\mathbf{b}-\\mathbf{a}$ then length." }],
            steps: [
              { reasoning: "$\\overrightarrow{AB}=\\begin{pmatrix}5\\\\3\\end{pmatrix}$.", marks: 1, markCode: "M" },
              { reasoning: "$|\\overrightarrow{AB}|=\\sqrt{25+9}=\\sqrt{34}\\approx5.83$.", marks: 1, markCode: "M" },
              { reasoning: "Answer shown.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\sqrt{34}$",
          },
        },
        {
          id: "ciam-u10-pv-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Find the position vector of the point P dividing AB in ratio 2:3, where $\\mathbf{a}=\\begin{pmatrix}1\\\\1\\end{pmatrix}$ and $\\mathbf{b}=\\begin{pmatrix}6\\\\6\\end{pmatrix}$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "Section formula", statement: "$\\frac{n\\mathbf{a}+m\\mathbf{b}}{m+n}$, m:n = 2:3." }],
            steps: [
              { reasoning: "$\\frac{3\\begin{pmatrix}1\\\\1\\end{pmatrix}+2\\begin{pmatrix}6\\\\6\\end{pmatrix}}{5}$.", marks: 1, markCode: "M" },
              { reasoning: "$=\\frac{1}{5}\\begin{pmatrix}3+12\\\\3+12\\end{pmatrix}=\\frac{1}{5}\\begin{pmatrix}15\\\\15\\end{pmatrix}=\\begin{pmatrix}3\\\\3\\end{pmatrix}$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $(3,3)$.", marks: 1, markCode: "M" },
              { reasoning: "Answer stated.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\begin{pmatrix}3\\\\3\\end{pmatrix}$",
          },
        },
        {
          id: "ciam-u10-pv-q16",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "If $\\overrightarrow{AB} = 2\\overrightarrow{BC}$, then A, B and C are…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Collinear" },
            { id: "b", text: "Not necessarily related" },
            { id: "c", text: "The same point" },
            { id: "d", text: "Perpendicular" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "property", name: "Collinearity", statement: "Scalar multiples." }],
            steps: [{ reasoning: "$\\overrightarrow{AB}$ is a scalar multiple of $\\overrightarrow{BC}$ ⇒ same line.", marks: 1, markCode: "A" }],
            finalAnswer: "Collinear",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciam-u10-pv-notes",
      title: "Position vectors — revision notes",
      summary: "Section formula; collinear ⇔ scalar multiples.",
      sections: [
        { heading: "Section formula", body: "$\\frac{n\\mathbf{a}+m\\mathbf{b}}{m+n}$ divides AB in ratio m:n." },
        { heading: "Collinearity", body: "$\\overrightarrow{AB} = k\\overrightarrow{AC}$ ⇒ collinear; check 0<k<1 for 'between'." },
      ],
    },
  ],
};
