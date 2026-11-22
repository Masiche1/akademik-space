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
            { id: "a", text: "Never" },
            { id: "b", text: "When it is not diagonal" },
            { id: "c", text: "When it has negative entries" },
            { id: "d", text: "When its determinant is 0" },
          ], correctChoiceId: "d" },
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
        {
          id: "cialfm-u2-lm-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The matrix $\\begin{pmatrix}\\cos\\theta&-\\sin\\theta\\\\\\sin\\theta&\\cos\\theta\\end{pmatrix}$ represents…",
          response: { type: "mcq", choices: [
            { id: "a", text: "A shear" },
            { id: "b", text: "A reflection" },
            { id: "c", text: "A scaling" },
            { id: "d", text: "A rotation by $\\theta$ anticlockwise" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "convention", name: "Rotation matrix", statement: "Standard rotation form." }],
            steps: [{ reasoning: "This is the standard anticlockwise rotation matrix.", marks: 1, markCode: "A" }],
            finalAnswer: "Rotation by $\\theta$ ACW",
          },
        },
        {
          id: "cialfm-u2-lm-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Find the image of the point $(1,2)$ under the transformation $\\begin{pmatrix}2&0\\\\0&3\\end{pmatrix}$.",
          response: { type: "numeric", parts: [
            { label: "a", answer: 2 }, { label: "b", answer: 6 },
          ] },
          markscheme: {
            principles: [{ kind: "technique", name: "Matrix transform", statement: "Multiply matrix by column vector." }],
            steps: [
              { reasoning: "$\\begin{pmatrix}2&0\\\\0&3\\end{pmatrix}\\begin{pmatrix}1\\\\2\\end{pmatrix}=\\begin{pmatrix}2\\\\6\\end{pmatrix}$.", marks: 1, markCode: "M" },
              { reasoning: "Image: $(2,6)$.", marks: 1, markCode: "A" }],
            finalAnswer: "(2, 6)",
          },
        },
        {
          id: "cialfm-u2-lm-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find $\\det\\begin{pmatrix}1&2&3\\\\0&4&5\\\\0&0&6\\end{pmatrix}$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 24 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Triangular det", statement: "Product of diagonal." }],
            steps: [
              { reasoning: "Upper triangular: $1\\times4\\times6 = 24$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 24.", marks: 1, markCode: "A" }],
            finalAnswer: "24",
          },
        },
        {
          id: "cialfm-u2-lm-q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Identify the transformation $\\begin{pmatrix}-1&0\\\\0&-1\\end{pmatrix}$ and find the image of $(2,-1)$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Recognise transform", statement: "Compare to standard forms." }],
            steps: [
              { reasoning: "Rotation by 180° (equivalently, enlargement scale factor $-1$).", marks: 1, markCode: "M" },
              { reasoning: "$\\begin{pmatrix}-1&0\\\\0&-1\\end{pmatrix}\\begin{pmatrix}2\\\\-1\\end{pmatrix}=\\begin{pmatrix}-2\\\\1\\end{pmatrix}$.", marks: 1, markCode: "M" },
              { reasoning: "Image: $(-2,1)$.", marks: 1, markCode: "A" }],
            finalAnswer: "Rotation 180°; image $(-2,1)$",
          },
        },
        {
          id: "cialfm-u2-lm-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Reflection in the $y$-axis is represented by…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\begin{pmatrix}0&1\\\\1&0\\end{pmatrix}$" },
            { id: "b", text: "$\\begin{pmatrix}1&0\\\\0&-1\\end{pmatrix}$" },
            { id: "c", text: "$\\begin{pmatrix}0&-1\\\\1&0\\end{pmatrix}$" },
            { id: "d", text: "$\\begin{pmatrix}-1&0\\\\0&1\\end{pmatrix}$" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "convention", name: "Reflection y-axis", statement: "Negate $x$-component." }],
            steps: [{ reasoning: "Negating the first row reflects in the $y$-axis.", marks: 1, markCode: "A" }],
            finalAnswer: "$\\begin{pmatrix}-1&0\\\\0&1\\end{pmatrix}$",
          },
        },
        {
          id: "cialfm-u2-lm-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The determinant of a 3×3 permutation matrix (each row/column has one 1) is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Always −1" },
            { id: "b", text: "Always 1" },
            { id: "c", text: "Either 1 or −1" },
            { id: "d", text: "Always 0" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "property", name: "Permutation determinant", statement: "$\\pm1$ depending on parity." }],
            steps: [{ reasoning: "Sign depends on whether the permutation is even or odd.", marks: 1, markCode: "A" }],
            finalAnswer: "Either 1 or −1",
          },
        },
        {
          id: "cialfm-u2-lm-q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Write down the matrix for a rotation of 60° anticlockwise, leaving entries in exact form.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "convention", name: "Rotation matrix", statement: "$\\begin{pmatrix}\\cos\\theta&-\\sin\\theta\\\\\\sin\\theta&\\cos\\theta\\end{pmatrix}$." }],
            steps: [
              { reasoning: "$\\cos 60° = \\frac12$, $\\sin 60° = \\frac{\\sqrt3}{2}$.", marks: 1, markCode: "M" },
              { reasoning: "Matrix: $\\begin{pmatrix}\\frac12&-\\frac{\\sqrt3}{2}\\\\\\frac{\\sqrt3}{2}&\\frac12\\end{pmatrix}$.", marks: 1, markCode: "M" },
              { reasoning: "Answer shown.", marks: 1, markCode: "A" }],
            finalAnswer: "$\\begin{pmatrix}\\frac12&-\\frac{\\sqrt3}{2}\\\\\\frac{\\sqrt3}{2}&\\frac12\\end{pmatrix}$",
          },
        },
        {
          id: "cialfm-u2-lm-q12",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Find $\\det\\begin{pmatrix}1&0&1\\\\0&1&1\\\\1&1&0\\end{pmatrix}$.",
          response: { type: "numeric", parts: [{ label: "a", answer: -2 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Cofactor expansion", statement: "Expand along first row." }],
            steps: [
              { reasoning: "$1(1\\times0-1\\times1) - 0 + 1(0\\times1-1\\times1) = -1 - 1$.", marks: 1, markCode: "M" },
              { reasoning: "$= -2$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: -2.", marks: 1, markCode: "A" }],
            finalAnswer: "-2",
          },
        },
        {
          id: "cialfm-u2-lm-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "An enlargement with scale factor $k$ about the origin is represented by…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\begin{pmatrix}k&1\\\\1&k\\end{pmatrix}$" },
            { id: "b", text: "$\\begin{pmatrix}k&0\\\\0&1\\end{pmatrix}$" },
            { id: "c", text: "$\\begin{pmatrix}1&k\\\\k&1\\end{pmatrix}$" },
            { id: "d", text: "$\\begin{pmatrix}k&0\\\\0&k\\end{pmatrix}$" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "convention", name: "Scaling matrix", statement: "Scalar multiple of $I$." }],
            steps: [{ reasoning: "Both diagonal entries equal $k$.", marks: 1, markCode: "A" }],
            finalAnswer: "$\\begin{pmatrix}k&0\\\\0&k\\end{pmatrix}$",
          },
        },
        {
          id: "cialfm-u2-lm-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "The transformation $\\begin{pmatrix}2&0\\\\0&2\\end{pmatrix}$ is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "An enlargement, scale factor 2" },
            { id: "b", text: "A shear" },
            { id: "c", text: "A rotation" },
            { id: "d", text: "A reflection" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "convention", name: "Scaling", statement: "$kI$ is enlargement by $k$." }],
            steps: [{ reasoning: "Scalar matrix $2I$ doubles all coordinates.", marks: 1, markCode: "A" }],
            finalAnswer: "Enlargement SF 2",
          },
        },
        {
          id: "cialfm-u2-lm-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A transformation matrix has determinant $4$. A triangle of area $5$ is mapped by this transformation. Find the area of the image.",
          response: { type: "numeric", parts: [{ label: "a", answer: 20 }] },
          markscheme: {
            principles: [{ kind: "theorem", name: "Area scaling", statement: "Areas scale by $|\\det A|$." }],
            steps: [
              { reasoning: "Image area $= |\\det A| \\times$ original area $= 4\\times5$.", marks: 1, markCode: "M" },
              { reasoning: "$= 20$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 20.", marks: 1, markCode: "A" }],
            finalAnswer: "20",
          },
        },
        {
          id: "cialfm-u2-lm-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Let $M=\\begin{pmatrix}0&-2\\\\2&0\\end{pmatrix}$ represent a transformation $T$.",
          parts: [
            { label: "a", prompt: "Describe $T$ fully.", marks: 2 },
            { label: "b", prompt: "Find the image of $(1,3)$ under $T$.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Composite transform", statement: "Rotation form with scale factor." }],
            steps: [
              { reasoning: "$M = 2\\begin{pmatrix}0&-1\\\\1&0\\end{pmatrix}$: rotation 90° ACW combined with enlargement SF 2.", marks: 1, markCode: "M", part: "a" },
              { reasoning: "Answer for (a): rotation 90° ACW then enlarge by factor 2.", marks: 1, markCode: "A", part: "a" },
              { reasoning: "$M\\begin{pmatrix}1\\\\3\\end{pmatrix}=\\begin{pmatrix}-6\\\\2\\end{pmatrix}$.", marks: 1, markCode: "M", part: "b" },
              { reasoning: "Image: $(-6,2)$.", marks: 1, markCode: "A", part: "b" }],
            finalAnswer: "Rotation 90° ACW + enlargement SF 2; image $(-6,2)$",
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
