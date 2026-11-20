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
            { id: "a", text: "$\\frac{\\mathbf{a}+\\mathbf{b}}{2}$" }, { id: "b", text: "$\\mathbf{a}+\\mathbf{b}$" }, { id: "c", text: "$\\frac{\\mathbf{b}-\\mathbf{a}}{2}$" }, { id: "d", text: "$\\mathbf{b}-\\mathbf{a}$" },
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
