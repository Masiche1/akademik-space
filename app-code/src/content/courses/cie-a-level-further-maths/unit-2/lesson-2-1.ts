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
            { id: "a", text: "11" },
            { id: "b", text: "5" },
            { id: "c", text: "-5" },
            { id: "d", text: "10" },
          ], correctChoiceId: "b" },
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
        {
          id: "cialfm-u2-s1-op-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "For $A=\\begin{pmatrix}5&0\\\\0&3\\end{pmatrix}$, find $\\det A$.",
          response: { type: "mcq", choices: [
            { id: "a", text: "8" },
            { id: "b", text: "0" },
            { id: "c", text: "15" },
            { id: "d", text: "-15" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "formula", name: "Determinant", statement: "$ad-bc$." }],
            steps: [{ reasoning: "$5 \\times 3 - 0 \\times 0 = 15$.", marks: 1, markCode: "A" }],
            finalAnswer: "15",
          },
        },
        {
          id: "cialfm-u2-s1-op-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Find the $(1,2)$ entry of $AB$ where $A=\\begin{pmatrix}1&2\\\\3&4\\end{pmatrix}$ and $B=\\begin{pmatrix}5&6\\\\7&8\\end{pmatrix}$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 22 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Matrix product entry", statement: "Row $i$ of $A$ dot column $j$ of $B$." }],
            steps: [
              { reasoning: "$(1,2)$ entry $= 1\\times6 + 2\\times8 = 22$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 22.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "22",
          },
        },
        {
          id: "cialfm-u2-s1-op-q7",
          difficulty: "core",
          totalMarks: 3,
          stem: "Find $\\det\\begin{pmatrix}2&-1\\\\3&4\\end{pmatrix}$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 11 }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Determinant", statement: "$ad-bc$ — watch signs." }],
            steps: [
              { reasoning: "$\\det = 2\\times4 - (-1)\\times3 = 8 + 3$.", marks: 1, markCode: "M" },
              { reasoning: "$= 11$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 11.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "11",
          },
        },
        {
          id: "cialfm-u2-s1-op-q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Compute $\\begin{pmatrix}2&0\\\\1&3\\end{pmatrix}\\begin{pmatrix}1&1\\\\2&0\\end{pmatrix}$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Matrix product", statement: "Row $i$ of $A$ dot column $j$ of $B$." }],
            steps: [
              { reasoning: "First row: $(2\\times1+0\\times2,\\ 2\\times1+0\\times0) = (2,2)$.", marks: 1, markCode: "M" },
              { reasoning: "Second row: $(1\\times1+3\\times2,\\ 1\\times1+3\\times0) = (7,1)$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $\\begin{pmatrix}2&2\\\\7&1\\end{pmatrix}$.", marks: 1, markCode: "A" }],
            finalAnswer: "$\\begin{pmatrix}2&2\\\\7&1\\end{pmatrix}$",
          },
        },
        {
          id: "cialfm-u2-s1-op-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "In general, matrix multiplication is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Not commutative: $AB \\neq BA$ in general" },
            { id: "b", text: "Always commutative for square matrices" },
            { id: "c", text: "Commutative: $AB=BA$" },
            { id: "d", text: "Commutative only when $A=B$" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "property", name: "Non-commutativity", statement: "$AB \\neq BA$ generally." }],
            steps: [{ reasoning: "Matrix multiplication is not commutative in general.", marks: 1, markCode: "A" }],
            finalAnswer: "Not commutative",
          },
        },
        {
          id: "cialfm-u2-s1-op-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Two matrices can be added only when they have…",
          response: { type: "mcq", choices: [
            { id: "a", text: "The same determinant" },
            { id: "b", text: "Equal trace" },
            { id: "c", text: "The same order" },
            { id: "d", text: "Inverse matrices" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Addition", statement: "Same order required." }],
            steps: [{ reasoning: "Addition requires identical dimensions.", marks: 1, markCode: "A" }],
            finalAnswer: "Same order",
          },
        },
        {
          id: "cialfm-u2-s1-op-q11",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Show that $AB \\neq BA$ for $A=\\begin{pmatrix}1&2\\\\0&1\\end{pmatrix}$ and $B=\\begin{pmatrix}1&0\\\\1&1\\end{pmatrix}$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Non-commutativity", statement: "Compute both products." }],
            steps: [
              { reasoning: "$AB = \\begin{pmatrix}3&2\\\\1&1\\end{pmatrix}$.", marks: 1, markCode: "M" },
              { reasoning: "$BA = \\begin{pmatrix}1&2\\\\1&3\\end{pmatrix}$.", marks: 1, markCode: "M" },
              { reasoning: "Compare entries: e.g. $(1,1)$ gives $3 \\neq 1$.", marks: 1, markCode: "M" },
              { reasoning: "Hence $AB \\neq BA$.", marks: 1, markCode: "A" }],
            finalAnswer: "$AB \\neq BA$",
          },
        },
        {
          id: "cialfm-u2-s1-op-q12",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Find the value of $k$ for which $\\begin{pmatrix}k&2\\\\3&6\\end{pmatrix}$ is singular.",
          response: { type: "numeric", parts: [{ label: "a", answer: 1 }] },
          markscheme: {
            principles: [{ kind: "property", name: "Singular", statement: "$\\det = 0$." }],
            steps: [
              { reasoning: "Singular when $6k - 6 = 0$.", marks: 1, markCode: "M" },
              { reasoning: "$k = 1$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $k=1$.", marks: 1, markCode: "A" }],
            finalAnswer: "1",
          },
        },
        {
          id: "cialfm-u2-s1-op-q13",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Given $A=\\begin{pmatrix}2&4\\\\6&8\\end{pmatrix}$, find the $(2,1)$ entry of $3A$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 18 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Scalar multiplication", statement: "Multiply every entry." }],
            steps: [
              { reasoning: "$(2,1)$ entry of $A$ is $6$; $3 \\times 6 = 18$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 18.", marks: 1, markCode: "A" }],
            finalAnswer: "18",
          },
        },
        {
          id: "cialfm-u2-s1-op-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "For any matrix $A$ of compatible order, $AI=$",
          response: { type: "mcq", choices: [
            { id: "a", text: "$0$" },
            { id: "b", text: "$A^{-1}$" },
            { id: "c", text: "$A$" },
            { id: "d", text: "$I$" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "property", name: "Identity", statement: "$AI = IA = A$." }],
            steps: [{ reasoning: "Multiplying by identity leaves $A$ unchanged.", marks: 1, markCode: "A" }],
            finalAnswer: "$A$",
          },
        },
        {
          id: "cialfm-u2-s1-op-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "For square matrices $A$ and $B$, $\\det(AB)=$",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\det A \\times \\det B$" },
            { id: "b", text: "$\\det A + \\det B$" },
            { id: "c", text: "Cannot be determined" },
            { id: "d", text: "$\\det A - \\det B$" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "theorem", name: "Determinant of product", statement: "$\\det(AB)=\\det A\\,\\det B$." }],
            steps: [{ reasoning: "Determinant is multiplicative.", marks: 1, markCode: "A" }],
            finalAnswer: "$\\det A \\times \\det B$",
          },
        },
        {
          id: "cialfm-u2-s1-op-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Let $A=\\begin{pmatrix}2&1\\\\0&3\\end{pmatrix}$ and $B=\\begin{pmatrix}1&-1\\\\0&1\\end{pmatrix}$.",
          parts: [
            { label: "a", prompt: "Find $AB$.", marks: 2 },
            { label: "b", prompt: "Find $\\det(AB)$.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Product then determinant", statement: "Compute $AB$, then $\\det$." }],
            steps: [
              { reasoning: "$AB = \\begin{pmatrix}2&-2+1\\\\0&3\\end{pmatrix} = \\begin{pmatrix}2&-1\\\\0&3\\end{pmatrix}$.", marks: 1, markCode: "M", part: "a" },
              { reasoning: "Answer for (a): $\\begin{pmatrix}2&-1\\\\0&3\\end{pmatrix}$.", marks: 1, markCode: "A", part: "a" },
              { reasoning: "$\\det(AB) = 2\\times3 - (-1)\\times0 = 6$.", marks: 1, markCode: "M", part: "b" },
              { reasoning: "Check: $\\det A = 6$, $\\det B = 1$, product $=6$. ✓", marks: 1, markCode: "A", part: "b" }],
            finalAnswer: "$AB=\\begin{pmatrix}2&-1\\\\0&3\\end{pmatrix}$, $\\det(AB)=6$",
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
            { id: "a", text: "Nothing" },
            { id: "b", text: "Rows and columns" },
            { id: "c", text: "Diagonal entries and negates off-diagonal" },
            { id: "d", text: "All entries" },
          ], correctChoiceId: "c" },
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
        {
          id: "cialfm-u2-s1-inv-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A square matrix $A$ has an inverse if and only if…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\det A = 0$" },
            { id: "b", text: "$A$ is diagonal" },
            { id: "c", text: "All entries are positive" },
            { id: "d", text: "$\\det A \\neq 0$" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "theorem", name: "Invertibility", statement: "Inverse exists iff $\\det A \\neq 0$." }],
            steps: [{ reasoning: "Nonzero determinant is the condition.", marks: 1, markCode: "A" }],
            finalAnswer: "$\\det A \\neq 0$",
          },
        },
        {
          id: "cialfm-u2-s1-inv-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "For $A=\\begin{pmatrix}2&0\\\\0&4\\end{pmatrix}$, find the diagonal entries of $A^{-1}$.",
          response: { type: "numeric", parts: [
            { label: "a", answer: 0.5 }, { label: "b", answer: 0.25 },
          ] },
          markscheme: {
            principles: [{ kind: "technique", name: "Diagonal inverse", statement: "Invert each diagonal entry." }],
            steps: [
              { reasoning: "$A^{-1}=\\begin{pmatrix}\\frac12&0\\\\0&\\frac14\\end{pmatrix}$.", marks: 1, markCode: "M" },
              { reasoning: "Entries: $0.5$ and $0.25$.", marks: 1, markCode: "A" }],
            finalAnswer: "$\\frac12, \\frac14$",
          },
        },
        {
          id: "cialfm-u2-s1-inv-q7",
          difficulty: "core",
          totalMarks: 3,
          stem: "For $A=\\begin{pmatrix}2&3\\\\1&2\\end{pmatrix}$, find the $(1,2)$ entry of $A^{-1}$.",
          response: { type: "numeric", parts: [{ label: "a", answer: -3 }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Inverse", statement: "$A^{-1}=\\frac{1}{\\det A}\\begin{pmatrix}d&-b\\\\-c&a\\end{pmatrix}$." }],
            steps: [
              { reasoning: "$\\det A = 4-3 = 1$.", marks: 1, markCode: "M" },
              { reasoning: "$A^{-1}=\\begin{pmatrix}2&-3\\\\-1&2\\end{pmatrix}$; $(1,2)$ entry $=-3$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: -3.", marks: 1, markCode: "A" }],
            finalAnswer: "-3",
          },
        },
        {
          id: "cialfm-u2-s1-inv-q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Find $A^{-1}$ for $A=\\begin{pmatrix}1&3\\\\2&7\\end{pmatrix}$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Inverse", statement: "Apply the 2×2 formula." }],
            steps: [
              { reasoning: "$\\det A = 7-6 = 1$.", marks: 1, markCode: "M" },
              { reasoning: "$A^{-1}=\\begin{pmatrix}7&-3\\\\-2&1\\end{pmatrix}$.", marks: 1, markCode: "M" },
              { reasoning: "Answer shown.", marks: 1, markCode: "A" }],
            finalAnswer: "$\\begin{pmatrix}7&-3\\\\-2&1\\end{pmatrix}$",
          },
        },
        {
          id: "cialfm-u2-s1-inv-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "For invertible matrices $A$ and $B$, $(AB)^{-1}=$",
          response: { type: "mcq", choices: [
            { id: "a", text: "$A^{-1}B^{-1}$" },
            { id: "b", text: "$B^{-1}A^{-1}$" },
            { id: "c", text: "$(AB)$" },
            { id: "d", text: "$B A^{-1}$" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "theorem", name: "Product inverse", statement: "$(AB)^{-1}=B^{-1}A^{-1}$ — order reverses." }],
            steps: [{ reasoning: "Inverses reverse order, like $(ab)^{-1}=b^{-1}a^{-1}$.", marks: 1, markCode: "A" }],
            finalAnswer: "$B^{-1}A^{-1}$",
          },
        },
        {
          id: "cialfm-u2-s1-inv-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "For an invertible matrix $A$, $A^{-1}A=$",
          response: { type: "mcq", choices: [
            { id: "a", text: "$I$" },
            { id: "b", text: "$A$" },
            { id: "c", text: "$0$" },
            { id: "d", text: "$A^2$" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "property", name: "Inverse property", statement: "$A^{-1}A=AA^{-1}=I$." }],
            steps: [{ reasoning: "Inverse multiplied by matrix gives identity.", marks: 1, markCode: "A" }],
            finalAnswer: "$I$",
          },
        },
        {
          id: "cialfm-u2-s1-inv-q11",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Solve $\\begin{pmatrix}2&1\\\\1&3\\end{pmatrix}\\begin{pmatrix}x\\\\y\\end{pmatrix}=\\begin{pmatrix}4\\\\5\\end{pmatrix}$ using the inverse.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Matrix equation", statement: "$X=A^{-1}B$." }],
            steps: [
              { reasoning: "$\\det A = 5$; $A^{-1}=\\frac15\\begin{pmatrix}3&-1\\\\-1&2\\end{pmatrix}$.", marks: 1, markCode: "M" },
              { reasoning: "$X=\\frac15\\begin{pmatrix}3\\times4-5\\\\-4+10\\end{pmatrix}=\\frac15\\begin{pmatrix}7\\\\6\\end{pmatrix}$.", marks: 1, markCode: "M" },
              { reasoning: "$x=\\frac{7}{5}$, $y=\\frac{6}{5}$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $x=\\frac{7}{5}, y=\\frac{6}{5}$.", marks: 1, markCode: "A" }],
            finalAnswer: "$x=\\frac{7}{5}, y=\\frac{6}{5}$",
          },
        },
        {
          id: "cialfm-u2-s1-inv-q12",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Find the value of $k$ for which $\\begin{pmatrix}k&2\\\\4&4\\end{pmatrix}$ has no inverse.",
          response: { type: "numeric", parts: [{ label: "a", answer: 2 }] },
          markscheme: {
            principles: [{ kind: "property", name: "Singular", statement: "No inverse when $\\det=0$." }],
            steps: [
              { reasoning: "$\\det = 4k - 8 = 0$.", marks: 1, markCode: "M" },
              { reasoning: "$k = 2$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $k=2$.", marks: 1, markCode: "A" }],
            finalAnswer: "2",
          },
        },
        {
          id: "cialfm-u2-s1-inv-q13",
          difficulty: "core",
          totalMarks: 3,
          stem: "For $A=\\begin{pmatrix}2&1\\\\1&1\\end{pmatrix}$ and $B=\\begin{pmatrix}1&-1\\\\-1&2\\end{pmatrix}$, find the $(1,1)$ entry of $AB$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 1 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Verify inverse", statement: "Product should be $I$." }],
            steps: [
              { reasoning: "$(1,1)$ entry $= 2\\times1 + 1\\times(-1) = 1$.", marks: 1, markCode: "M" },
              { reasoning: "Consistent with $I$ (diagonal entries 1).", marks: 1, markCode: "M" },
              { reasoning: "Answer: 1.", marks: 1, markCode: "A" }],
            finalAnswer: "1",
          },
        },
        {
          id: "cialfm-u2-s1-inv-q14",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "If $A$ is a singular matrix, then $A^{-1}$…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Exists and equals $0$" },
            { id: "b", text: "Equals $I$" },
            { id: "c", text: "Does not exist" },
            { id: "d", text: "Equals $A$" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "property", name: "Singular", statement: "$\\det A = 0$ ⇒ no inverse." }],
            steps: [{ reasoning: "Singular matrices are not invertible.", marks: 1, markCode: "A" }],
            finalAnswer: "Does not exist",
          },
        },
        {
          id: "cialfm-u2-s1-inv-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "If $\\det A = 4$, then $\\det(A^{-1})=$",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\frac{1}{4}$" },
            { id: "b", text: "0" },
            { id: "c", text: "4" },
            { id: "d", text: "$-4$" },
          ], aorrectChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "theorem", name: "Determinant of inverse", statement: "$\\det(A^{-1}) = \\frac{1}{\\det A}$." }],
            steps: [{ reasoning: "$\\det(A^{-1}) = 1/4$.", marks: 1, markCode: "A" }],
            finalAnswer: "$\\frac{1}{4}$",
          },
        },
        {
          id: "cialfm-u2-s1-inv-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Let $A=\\begin{pmatrix}1&2\\\\0&1\\end{pmatrix}$.",
          parts: [
            { label: "a", prompt: "Find $A^{-1}$.", marks: 2 },
            { label: "b", prompt: "Find $A^2$.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Inverse and power", statement: "$\\det A = 1$, so inverse exists." }],
            steps: [
              { reasoning: "$A^{-1}=\\begin{pmatrix}1&-2\\\\0&1\\end{pmatrix}$.", marks: 1, markCode: "M", part: "a" },
              { reasoning: "Answer for (a) shown.", marks: 1, markCode: "A", part: "a" },
              { reasoning: "$A^2=\\begin{pmatrix}1&4\\\\0&1\\end{pmatrix}$.", marks: 1, markCode: "M", part: "b" },
              { reasoning: "Answer for (b) shown.", marks: 1, markCode: "A", part: "b" }],
            finalAnswer: "$A^{-1}=\\begin{pmatrix}1&-2\\\\0&1\\end{pmatrix}$, $A^2=\\begin{pmatrix}1&4\\\\0&1\\end{pmatrix}$",
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
