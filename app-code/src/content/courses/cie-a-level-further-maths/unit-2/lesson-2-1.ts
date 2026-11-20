import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "cialfm-u2-lesson-2-1",
  code: "2-1",
  title: "Matrix operations and determinants",
  goal: "I CAN perform matrix arithmetic and compute determinants.",
  standards: ["9231 P1: matrices"],
  vocabulary: [
    { term: "Matrix", definition: "A rectangular array of numbers." },
    { term: "Order", definition: "Dimensions $m \\times n$ (rows × columns)." },
    { term: "Determinant", definition: "Scalar $\\det A$ measuring scaling; for 2×2: $ad-bc$." },
    { term: "Singular matrix", definition: "A matrix with determinant zero — not invertible." },
    { term: "Identity matrix", definition: "$I$ with 1s on diagonal, 0 elsewhere." },
  ],
  concepts: [
    {
      id: "cialfm-u2-s1-operations",
      title: "Matrix arithmetic",
      skill: "Add, subtract and multiply matrices at A Level.",
      lesson: {
        sections: [
          {
            heading: "Addition",
            body: "Same order required. Add corresponding entries. Scalar multiplication multiplies every entry.",
          },
          {
            heading: "Multiplication",
            body: "$AB$ requires columns of $A$ = rows of $B$. Entry $(i,j)$ = row $i$ of $A$ dot column $j$ of $B$. NOT commutative: $AB \\neq BA$ generally.",
          },
        ],
        keyFormulas: [
          { name: "2×2 determinant", statement: "$\\det\\begin{pmatrix}a&b\\\\c&d\\end{pmatrix} = ad-bc$" },
        ],
        workedExample: {
          problem: "Find $\\det\\begin{pmatrix}3&1\\\\2&4\\end{pmatrix}$.",
          solution: "$3 \\times 4 - 1 \\times 2 = 10$.",
        },
      },
      questions: [
        {
          id: "cialfm-u2-s1-op-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "For $A=\\begin{pmatrix}2&1\\\\3&4\\end{pmatrix}$, find $\\det A$.",
          response: { type: "mcq", choices: [
            { id: "a", text: "5" }, { id: "b", text: "11" }, { id: "c", text: "10" }, { id: "d", text: "-5" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "formula", name: "Determinant", statement: "$ad-bc$." }],
            steps: [{ reasoning: "$2 \\times 4 - 1 \\times 3 = 5$.", marks: 1, markCode: "A" }],
            finalAnswer: "5",
          },
        },
        {
          id: "cialfm-u2-s1-op-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Compute $\\begin{pmatrix}1&2\\\\3&4\\end{pmatrix}\\begin{pmatrix}5\\\\6\\end{pmatrix}$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Matrix product", statement: "Row × column." }],
            steps: [
              { reasoning: "$\\begin{pmatrix}1\\cdot5+2\\cdot6\\\\3\\cdot5+4\\cdot6\\end{pmatrix} = \\begin{pmatrix}17\\\\39\\end{pmatrix}$.", marks: 1, markCode: "M" },
              { reasoning: "Answer shown.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\begin{pmatrix}17\\\\39\\end{pmatrix}$",
          },
        },
        {
          id: "cialfm-u2-s1-op-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "A matrix $A$ has $\\det A = 0$. What does this mean?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "property", name: "Singular", statement: "det = 0 → not invertible." }],
            steps: [
              { reasoning: "$\\det A = 0$ means $A$ is singular.", marks: 1, markCode: "M" },
              { reasoning: "$A$ has no inverse; it collapses space to lower dimension.", marks: 1, markCode: "M" },
              { reasoning: "Answer stated.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Singular — not invertible",
          },
        },
        {
          id: "cialfm-u2-s1-op-q4",
          difficulty: "core",
          totalMarks: 3,
          stem: "Find $AB$ where $A=\\begin{pmatrix}1&0\\\\2&1\\end{pmatrix}$, $B=\\begin{pmatrix}3&1\\\\0&2\\end{pmatrix}$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "2×2 product", statement: "Compute all entries." }],
            steps: [
              { reasoning: "$AB = \\begin{pmatrix}3&1\\\\6&4\\end{pmatrix}$.", marks: 1, markCode: "M" },
              { reasoning: "Check: $(2,1)$ entry $= 2\\cdot1+1\\cdot2=4$. ✓", marks: 1, markCode: "M" },
              { reasoning: "Answer shown.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\begin{pmatrix}3&1\\\\6&4\\end{pmatrix}$",
          },
        },
      ],
    },
    {
      id: "cialfm-u2-s1-inverse",
      title: "Inverse matrices",
      skill: "Find inverses of 2×2 matrices.",
      lesson: {
        sections: [
          {
            heading: "Formula",
            body: "For $A=\\begin{pmatrix}a&b\\\\c&d\\end{pmatrix}$ with $\\det A = ad-bc \\neq 0$: $A^{-1} = \\frac{1}{ad-bc}\\begin{pmatrix}d&-b\\\\-c&a\\end{pmatrix}$.",
          },
          {
            heading: "Check",
            body: "Verify $AA^{-1} = I$. Inverse exists only when determinant nonzero.",
          },
        ],
        keyFormulas: [
          { name: "2×2 inverse", statement: "$A^{-1}=\\frac{1}{\\det A}\\begin{pmatrix}d&-b\\\\-c&a\\end{pmatrix}$" },
        ],
        workedExample: {
          problem: "Find $A^{-1}$ for $A=\\begin{pmatrix}2&1\\\\1&1\\end{pmatrix}$.",
          solution: "$\\det=1$; $A^{-1}=\\begin{pmatrix}1&-1\\\\-1&2\\end{pmatrix}$.",
        },
      },
      questions: [
        {
          id: "cialfm-u2-s1-inv-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The inverse of $\\begin{pmatrix}a&b\\\\c&d\\end{pmatrix}$ swaps…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Diagonal entries and negates off-diagonal" }, { id: "b", text: "Rows and columns" }, { id: "c", text: "All entries" }, { id: "d", text: "Nothing" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "formula", name: "Inverse", statement: "Swap diagonal, negate off-diagonal." }],
            steps: [{ reasoning: "Correct description of inverse structure.", marks: 1, markCode: "A" }],
            finalAnswer: "Option a",
          },
        },
        {
          id: "cialfm-u2-s1-inv-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Find $\\begin{pmatrix}1&2\\\\3&4\\end{pmatrix}^{-1}$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Inverse", statement: "Apply formula." }],
            steps: [
              { reasoning: "$\\det=-2$; $A^{-1}=-\\frac12\\begin{pmatrix}4&-2\\\\-3&1\\end{pmatrix}=\\begin{pmatrix}-2&1\\\\1.5&-0.5\\end{pmatrix}$.", marks: 1, markCode: "M" },
              { reasoning: "Answer shown.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\begin{pmatrix}-2&1\\\\\\frac32&-\\frac12\\end{pmatrix}$",
          },
        },
        {
          id: "cialfm-u2-s1-inv-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Verify that $\\begin{pmatrix}2&1\\\\1&1\\end{pmatrix}\\begin{pmatrix}1&-1\\\\-1&2\\end{pmatrix} = I$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Verify inverse", statement: "Multiply to check." }],
            steps: [
              { reasoning: "Product: $\\begin{pmatrix}2-1&-2+2\\\\1-1&-1+2\\end{pmatrix}=\\begin{pmatrix}1&0\\\\0&1\\end{pmatrix}$.", marks: 1, markCode: "M" },
              { reasoning: "Equals identity $I$. ✓", marks: 1, markCode: "M" },
              { reasoning: "Confirmed inverse.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$I$ confirmed",
          },
        },
        {
          id: "cialfm-u2-s1-inv-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Solve $\\begin{pmatrix}3&1\\\\2&2\\end{pmatrix}\\begin{pmatrix}x\\\\y\\end{pmatrix}=\\begin{pmatrix}5\\\\6\\end{pmatrix}$ using the inverse.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Matrix equation", statement: "$X=A^{-1}B$." }],
            steps: [
              { reasoning: "$\\det A = 4$; $A^{-1}=\\frac14\\begin{pmatrix}2&-1\\\\-2&3\\end{pmatrix}$.", marks: 1, markCode: "M" },
              { reasoning: "$X = \\frac14\\begin{pmatrix}2\\cdot5-6\\\\-10+18\\end{pmatrix}=\\frac14\\begin{pmatrix}4\\\\8\\end{pmatrix}$.", marks: 1, markCode: "M" },
              { reasoning: "$x=1$, $y=2$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $x=1, y=2$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x=1, y=2$",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cialfm-u2-s1-mat-notes",
      title: "Matrix operations and inverses — revision notes",
      summary: "Arithmetic, determinants, 2×2 inverse, solving systems.",
      sections: [
        { heading: "Determinant", body: "2×2: $ad-bc$. Zero → singular, no inverse." },
        { heading: "Inverse", body: "$A^{-1}=\\frac{1}{\\det A}\\begin{pmatrix}d&-b\\\\-c&a\\end{pmatrix}$. Solve $AX=B$ via $X=A^{-1}B$." },
      ],
    },
  ],
};
