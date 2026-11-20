import type { Lesson } from "../../../types.ts";

export const lesson24: Lesson = {
  id: "cialfm-u2-lesson-2-4",
  code: "2-4",
  title: "Larger Matrices and Transformations",
  goal: "I CAN work with n×n matrices, inverses and matrix transformations.",
  standards: ["Cambridge A Level Further Mathematics 9231: matrices"],
  vocabulary: [
    { term: "n×n matrix", definition: "Square matrix with n rows and n columns." },
    { term: "Singular matrix", definition: "Matrix with determinant 0; no inverse." },
    { term: "Matrix transformation", definition: "Matrix mapping points/vectors to new positions." },
    { term: "Adjugate", definition: "Transpose of cofactor matrix used in inversion." },
    { term: "Cofactor", definition: "Signed minor used in determinant and inverse formulas." },
  ],
  concepts: [
    {
      id: "cialfm-u2-s4-larger",
      title: "n×n matrices and transformations",
      skill: "Extend matrix methods to larger matrices and geometric transformations.",
      lesson: {
        sections: [
          {
            heading: "Beyond 2×2",
            body: "For an n×n matrix A, the inverse (when it exists) is $A^{-1} = \\frac{1}{\\det A}\\,\\text{adj}(A)$ where adj(A) is the transpose of the cofactor matrix. A matrix is singular (no inverse) iff $\\det A = 0$. For 3×3, evaluate the determinant by expanding along a row or column.",
          },
          {
            heading: "Matrix transformations",
            body: "A 2×2 matrix $\\begin{pmatrix}a&b\\\\c&d\\end{pmatrix}$ transforms column vectors: $\\begin{pmatrix}x'\\\\y'\\end{pmatrix} = A\\begin{pmatrix}x\\\\y\\end{pmatrix}$. Special cases: rotation by θ uses $\\begin{pmatrix}\\cos\\theta&-\\sin\\theta\\\\\\sin\\theta&\\cos\\theta\\end{pmatrix}$; reflection in y-axis uses $\\begin{pmatrix}-1&0\\\\0&1\\end{pmatrix}$; scaling uses diagonal matrices.",
          },
        ],
        keyFormulas: [
          { name: "Inverse", statement: "$A^{-1} = \\frac{1}{\\det A}\\text{adj}(A)$" },
          { name: "Rotation", statement: "$\\begin{pmatrix}\\cos\\theta&-\\sin\\theta\\\\\\sin\\theta&\\cos\\theta\\end{pmatrix}$" },
        ],
        workedExample: {
          problem: "Find the image of point (1, 0) under rotation by 90° anticlockwise.",
          solution: "$\\begin{pmatrix}0&-1\\\\1&0\\end{pmatrix}\\begin{pmatrix}1\\\\0\\end{pmatrix} = \\begin{pmatrix}0\\\\1\\end{pmatrix}$ — maps to (0, 1).",
        },
      },
      questions: [
        {
          id: "cialfm-u2-lm-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "When does a square matrix have no inverse?",
          response: { type: "mcq", choices: [
            { id: "a", text: "When its determinant is 0" }, { id: "b", text: "When it has negative entries" }, { id: "c", text: "When it is not diagonal" }, { id: "d", text: "Never" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "theorem", name: "Singularity", statement: "$\\det A = 0$ ⇒ no inverse." }],
            steps: [{ reasoning: "Singular iff determinant is zero.", marks: 1, markCode: "A" }],
            finalAnswer: "When det = 0",
          },
        },
        {
          id: "cialfm-u2-lm-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the image of (2, 3) under the transformation $\\begin{pmatrix}1&0\\\\0&-1\\end{pmatrix}$?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Matrix transform", statement: "Multiply matrix by column vector." }],
            steps: [
              { reasoning: "$\\begin{pmatrix}1&0\\\\0&-1\\end{pmatrix}\\begin{pmatrix}2\\\\3\\end{pmatrix} = \\begin{pmatrix}2\\\\-3\\end{pmatrix}$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: (2, −3).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(2, −3)",
          },
        },
        {
          id: "cialfm-u2-lm-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Identify the transformation given by $\\begin{pmatrix}0&-1\\\\1&0\\end{pmatrix}$ and find the image of (1, 2).",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Recognise transform", statement: "Compare to standard forms." }],
            steps: [
              { reasoning: "Matches rotation by 90° anticlockwise.", marks: 1, markCode: "M" },
              { reasoning: "$\\begin{pmatrix}0&-1\\\\1&0\\end{pmatrix}\\begin{pmatrix}1\\\\2\\end{pmatrix} = \\begin{pmatrix}-2\\\\1\\end{pmatrix}$.", marks: 1, markCode: "M" },
              { reasoning: "Image: (−2, 1).", marks: 1, markCode: "M" },
              { reasoning: "Answer stated.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Rotation 90° ACW; image (−2, 1)",
          },
        },
        {
          id: "cialfm-u2-lm-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "For a 3×3 matrix, explain how to find its inverse using cofactors and why it fails when det = 0.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "theorem", name: "Inverse formula", statement: "$A^{-1}=\\frac{1}{\\det A}\\text{adj}(A)$." }],
            steps: [
              { reasoning: "Compute cofactors $C_{ij} = (-1)^{i+j}M_{ij}$ for each minor.", marks: 1, markCode: "M" },
              { reasoning: "Transpose the cofactor matrix to get adj(A).", marks: 1, markCode: "M" },
              { reasoning: "Divide by det A.", marks: 1, markCode: "M" },
              { reasoning: "det = 0 makes division impossible ⇒ singular.", marks: 1, markCode: "M" },
              { reasoning: "Explanation complete.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "adj(A)/det A; det=0 ⇒ no inverse",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cialfm-u2-larger-notes",
      title: "Larger matrices — revision notes",
      summary: "n×n inverse via adjugate; standard transformation matrices.",
      sections: [
        { heading: "Inverse", body: "$A^{-1} = \\text{adj}(A)/\\det A$; singular iff det = 0." },
        { heading: "Transformations", body: "Rotation θ: $\\begin{pmatrix}\\cos\\theta&-\\sin\\theta\\\\\\sin\\theta&\\cos\\theta\\end{pmatrix}$; reflection y-axis: $\\begin{pmatrix}-1&0\\\\0&1\\end{pmatrix}$." },
      ],
    },
  ],
};
