import type { Lesson } from "../../../types.ts";

export const lesson23: Lesson = {
  id: "cialfm-u2-lesson-2-3",
  code: "2-3",
  title: "Eigenvalues and eigenvectors",
  goal: "I CAN find eigenvalues and eigenvectors of 2×2 matrices.",
  standards: ["9231 P1: matrices — eigenvalues"],
  vocabulary: [
    { term: "Eigenvalue", definition: "Scalar $\\lambda$ with $Av = \\lambda v$ for nonzero vector $v$." },
    { term: "Eigenvector", definition: "Nonzero vector $v$ satisfying $Av = \\lambda v$." },
    { term: "Characteristic equation", definition: "$\\det(A - \\lambda I) = 0$." },
    { term: "Eigenspace", definition: "Set of eigenvectors for a given eigenvalue." },
  ],
  concepts: [
    {
      id: "cialfm-u2-s3-eigen",
      title: "Finding eigenvalues",
      skill: "Solve the characteristic equation at A Level.",
      lesson: {
        sections: [
          {
            heading: "Characteristic equation",
            body: "$\\det(A - \\lambda I) = 0$ gives a polynomial in $\\lambda$. For 2×2: $(a-\\lambda)(d-\\lambda) - bc = 0$.",
          },
          {
            heading: "Example",
            body: "$A=\\begin{pmatrix}2&1\\\\1&2\\end{pmatrix}$: $(2-\\lambda)^2 - 1 = 0$ → $\\lambda = 1, 3$.",
          },
        ],
        keyFormulas: [
          { name: "Char eq", statement: "$\\det(A - \\lambda I) = 0$" },
        ],
        workedExample: {
          problem: "Find eigenvalues of $\\begin{pmatrix}3&0\\\\0&5\\end{pmatrix}$.",
          solution: "Diagonal: $\\lambda = 3, 5$.",
        },
      },
      questions: [
        {
          id: "cialfm-u2-s3-ev-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "For a diagonal matrix, the eigenvalues are…",
          response: { type: "mcq", choices: [
            { id: "a", text: "The diagonal entries" }, { id: "b", text: "The determinant" }, { id: "c", text: "Zero" }, { id: "d", text: "The trace only" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "property", name: "Diagonal eigenvalues", statement: "Diagonal entries." }],
            steps: [{ reasoning: "Eigenvalues of diagonal matrix = diagonal entries.", marks: 1, markCode: "A" }],
            finalAnswer: "Diagonal entries",
          },
        },
        {
          id: "cialfm-u2-s3-ev-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Find the eigenvalues of $\\begin{pmatrix}4&0\\\\0&2\\end{pmatrix}$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Diagonal eigenvalues", statement: "Read diagonal." }],
            steps: [
              { reasoning: "$\\lambda = 4$ and $\\lambda = 2$.", marks: 1, markCode: "M" },
              { reasoning: "Answer shown.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\lambda=4, 2$",
          },
        },
        {
          id: "cialfm-u2-s3-ev-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Find the characteristic equation of $A=\\begin{pmatrix}2&1\\\\1&2\\end{pmatrix}$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Char eq", statement: "$\\det(A-\\lambda I)=0$." }],
            steps: [
              { reasoning: "$\\det\\begin{pmatrix}2-\\lambda&1\\\\1&2-\\lambda\\end{pmatrix} = (2-\\lambda)^2 - 1 = 0$.", marks: 1, markCode: "M" },
              { reasoning: "$\\lambda^2 - 4\\lambda + 3 = 0$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $\\lambda^2 - 4\\lambda + 3 = 0$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\lambda^2 - 4\\lambda + 3 = 0$",
          },
        },
        {
          id: "cialfm-u2-s3-ev-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Find the eigenvalues of $\\begin{pmatrix}1&2\\\\3&2\\end{pmatrix}$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Char eq solve", statement: "Expand and solve." }],
            steps: [
              { reasoning: "$\\det\\begin{pmatrix}1-\\lambda&2\\\\3&2-\\lambda\\end{pmatrix} = (1-\\lambda)(2-\\lambda) - 6 = 0$.", marks: 1, markCode: "M" },
              { reasoning: "$\\lambda^2 - 3\\lambda - 4 = 0$.", marks: 1, markCode: "M" },
              { reasoning: "$(\\lambda-4)(\\lambda+1)=0$ → $\\lambda = 4, -1$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $\\lambda = 4, -1$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\lambda = 4, -1$",
          },
        },
      ],
    },
    {
      id: "cialfm-u2-s3-eigenvec",
      title: "Finding eigenvectors",
      skill: "Find eigenvectors corresponding to eigenvalues.",
      lesson: {
        sections: [
          {
            heading: "Method",
            body: "For each eigenvalue $\\lambda$, solve $(A - \\lambda I)v = 0$ for nonzero $v$. Set one component freely, solve for the other.",
          },
          {
            heading: "Example",
            body: "$A=\\begin{pmatrix}2&1\\\\1&2\\end{pmatrix}$, $\\lambda=3$: $(A-3I)v=\\begin{pmatrix}-1&1\\\\1&-1\\end{pmatrix}v=0$ → $v=\\begin{pmatrix}1\\\\1\\end{pmatrix}$.",
          },
        ],
        keyFormulas: [
          { name: "Eigenvector", statement: "$(A-\\lambda I)v=0$" },
        ],
        workedExample: {
          problem: "Find eigenvector for $\\lambda=3$ of $\\begin{pmatrix}2&1\\\\1&2\\end{pmatrix}$.",
          solution: "$v=\\begin{pmatrix}1\\\\1\\end{pmatrix}$ (or any multiple).",
        },
      },
      questions: [
        {
          id: "cialfm-u2-s3-evv-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "To find eigenvectors you solve…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$(A-\\lambda I)v=0$" }, { id: "b", text: "$Av=0$" }, { id: "c", text: "$A^{-1}v=0$" }, { id: "d", text: "$v=\\lambda$" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "law", name: "Eigenvector eq", statement: "$(A-\\lambda I)v=0$." }],
            steps: [{ reasoning: "Correct homogeneous system.", marks: 1, markCode: "A" }],
            finalAnswer: "$(A-\\lambda I)v=0$",
          },
        },
        {
          id: "cialfm-u2-s3-evv-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "For $\\lambda=5$ of $\\begin{pmatrix}4&0\\\\0&5\\end{pmatrix}$, one eigenvector is…",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Eigenvector", statement: "Standard basis vector." }],
            steps: [
              { reasoning: "$v=\\begin{pmatrix}0\\\\1\\end{pmatrix}$.", marks: 1, markCode: "M" },
              { reasoning: "Answer shown.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\begin{pmatrix}0\\\\1\\end{pmatrix}$",
          },
        },
        {
          id: "cialfm-u2-s3-evv-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Find an eigenvector for $\\lambda=3$ of $\\begin{pmatrix}2&1\\\\1&2\\end{pmatrix}$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Solve system", statement: "Set $v_2=1$ and solve." }],
            steps: [
              { reasoning: "$\\begin{pmatrix}-1&1\\\\1&-1\\end{pmatrix}\\begin{pmatrix}x\\\\y\\end{pmatrix}=0$ → $-x+y=0$.", marks: 1, markCode: "M" },
              { reasoning: "$x=y$; take $v=\\begin{pmatrix}1\\\\1\\end{pmatrix}$.", marks: 1, markCode: "M" },
              { reasoning: "Answer shown.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\begin{pmatrix}1\\\\1\\end{pmatrix}$",
          },
        },
        {
          id: "cialfm-u2-s3-evv-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "For $A=\\begin{pmatrix}1&2\\\\3&2\\end{pmatrix}$ with $\\lambda=4$, find the eigenvector.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Eigenvector solve", statement: "Full method." }],
            steps: [
              { reasoning: "$A-4I=\\begin{pmatrix}-3&2\\\\3&-2\\end{pmatrix}$; equation $-3x+2y=0$.", marks: 1, markCode: "M" },
              { reasoning: "$y=\\frac{3}{2}x$; take $x=2, y=3$.", marks: 1, markCode: "M" },
              { reasoning: "$v=\\begin{pmatrix}2\\\\3\\end{pmatrix}$.", marks: 1, markCode: "M" },
              { reasoning: "Check: $A\\begin{pmatrix}2\\\\3\\end{pmatrix}=\\begin{pmatrix}8\\\\12\\end{pmatrix}=4\\begin{pmatrix}2\\\\3\\end{pmatrix}$. ✓", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\begin{pmatrix}2\\\\3\\end{pmatrix}$",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cialfm-u2-s3-eigen-notes",
      title: "Eigenvalues and eigenvectors — revision notes",
      summary: "Characteristic equation, eigenspaces.",
      sections: [
        { heading: "Eigenvalues", body: "$\\det(A-\\lambda I)=0$ → polynomial in $\\lambda$." },
        { heading: "Eigenvectors", body: "Solve $(A-\\lambda I)v=0$; any nonzero scalar multiple works." },
      ],
    },
  ],
};
