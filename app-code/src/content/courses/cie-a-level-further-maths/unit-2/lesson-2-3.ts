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
            { id: "a", text: "The trace only" },
            { id: "b", text: "The determinant" },
            { id: "c", text: "The diagonal entries" },
            { id: "d", text: "Zero" },
          ], correctChoiceId: "c" },
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
        {
          id: "cialfm-u2-s3-ev-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The eigenvalues of a matrix $A$ are the roots of…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$A^{-1}=0$" },
            { id: "b", text: "$\\det(A-\\lambda I)=0$" },
            { id: "c", text: "$Av=0$" },
            { id: "d", text: "$\\det A = 1$" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "law", name: "Characteristic equation", statement: "$\\det(A-\\lambda I)=0$." }],
            steps: [{ reasoning: "Eigenvalues come from the characteristic equation.", marks: 1, markCode: "A" }],
            finalAnswer: "$\\det(A-\\lambda I)=0$",
          },
        },
        {
          id: "cialfm-u2-s3-ev-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Find the eigenvalues of $\\begin{pmatrix}3&0\\\\0&7\\end{pmatrix}$.",
          response: { type: "numeric", parts: [
            { label: "a", answer: 3 }, { label: "b", answer: 7 },
          ], unordered: true },
          markscheme: {
            principles: [{ kind: "property", name: "Diagonal eigenvalues", statement: "Diagonal entries are eigenvalues." }],
            steps: [
              { reasoning: "Diagonal matrix: eigenvalues are $3$ and $7$.", marks: 1, markCode: "M" },
              { reasoning: "Answers: $3, 7$.", marks: 1, markCode: "A" }],
            finalAnswer: "$3, 7$",
          },
        },
        {
          id: "cialfm-u2-s3-ev-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "For $A=\\begin{pmatrix}1&2\\\\3&4\\end{pmatrix}$, find the sum of its eigenvalues.",
          response: { type: "numeric", parts: [{ label: "a", answer: 5 }] },
          markscheme: {
            principles: [{ kind: "theorem", name: "Trace", statement: "Sum of eigenvalues = trace." }],
            steps: [
              { reasoning: "Sum $= 1+4 = 5$ (the trace).", marks: 1, markCode: "M" },
              { reasoning: "Answer: 5.", marks: 1, markCode: "A" }],
            finalAnswer: "5",
          },
        },
        {
          id: "cialfm-u2-s3-ev-q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Find the eigenvalues of $\\begin{pmatrix}0&1\\\\1&0\\end{pmatrix}$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Char eq solve", statement: "Expand and factorise." }],
            steps: [
              { reasoning: "$\\det\\begin{pmatrix}-\\lambda&1\\\\1&-\\lambda\\end{pmatrix} = \\lambda^2 - 1 = 0$.", marks: 1, markCode: "M" },
              { reasoning: "$(\\lambda-1)(\\lambda+1)=0$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $\\lambda = 1, -1$.", marks: 1, markCode: "A" }],
            finalAnswer: "$\\lambda = 1, -1$",
          },
        },
        {
          id: "cialfm-u2-s3-ev-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "The characteristic equation of $\\begin{pmatrix}3&1\\\\1&3\\end{pmatrix}$ is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\lambda^2+6\\lambda+8=0$" },
            { id: "b", text: "$\\lambda^2-6\\lambda+8=0$" },
            { id: "c", text: "$\\lambda^2-6\\lambda+9=0$" },
            { id: "d", text: "$\\lambda^2-3\\lambda+8=0$" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "technique", name: "Char eq", statement: "$(3-\\lambda)^2-1=0$." }],
            steps: [{ reasoning: "$(3-\\lambda)^2-1 = \\lambda^2-6\\lambda+8$.", marks: 1, markCode: "A" }],
            finalAnswer: "$\\lambda^2-6\\lambda+8=0$",
          },
        },
        {
          id: "cialfm-u2-s3-ev-q10",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Find the eigenvalues of $\\begin{pmatrix}2&0\\\\0&-1\\end{pmatrix}$.",
          response: { type: "numeric", parts: [
            { label: "a", answer: 2 }, { label: "b", answer: -1 },
          ], unordered: true },
          markscheme: {
            principles: [{ kind: "property", name: "Diagonal eigenvalues", statement: "Diagonal entries." }],
            steps: [
              { reasoning: "Eigenvalues: $2$ and $-1$.", marks: 1, markCode: "M" },
              { reasoning: "Answers shown.", marks: 1, markCode: "A" }],
            finalAnswer: "$2, -1$",
          },
        },
        {
          id: "cialfm-u2-s3-ev-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "$\\lambda$ is an eigenvalue of $A$ if and only if…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$A\\lambda=0$" },
            { id: "b", text: "$A$ is diagonal" },
            { id: "c", text: "$\\det(A-\\lambda I)=0$" },
            { id: "d", text: "$\\lambda=\\det A$" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "law", name: "Eigenvalue condition", statement: "Characteristic equation." }],
            steps: [{ reasoning: "Nontrivial kernel of $A-\\lambda I$ requires $\\det=0$.", marks: 1, markCode: "A" }],
            finalAnswer: "$\\det(A-\\lambda I)=0$",
          },
        },
        {
          id: "cialfm-u2-s3-ev-q12",
          difficulty: "core",
          totalMarks: 4,
          stem: "Find the eigenvalues of $\\begin{pmatrix}1&1\\\\2&2\\end{pmatrix}$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Char eq solve", statement: "Expand and factorise." }],
            steps: [
              { reasoning: "$\\det\\begin{pmatrix}1-\\lambda&1\\\\2&2-\\lambda\\end{pmatrix} = (1-\\lambda)(2-\\lambda)-2 = 0$.", marks: 1, markCode: "M" },
              { reasoning: "$\\lambda^2-3\\lambda = 0$.", marks: 1, markCode: "M" },
              { reasoning: "$\\lambda(\\lambda-3)=0$ → $\\lambda = 0, 3$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $\\lambda = 0, 3$.", marks: 1, markCode: "A" }],
            finalAnswer: "$\\lambda = 0, 3$",
          },
        },
        {
          id: "cialfm-u2-s3-ev-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "For a 2×2 matrix $A$ with eigenvalues $\\lambda_1,\\lambda_2$, their product equals…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$A$ itself" },
            { id: "b", text: "The trace" },
            { id: "c", text: "Zero" },
            { id: "d", text: "$\\det A$" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "theorem", name: "Determinant", statement: "Product of eigenvalues = $\\det A$." }],
            steps: [{ reasoning: "Constant term of char poly is $\\det A$.", marks: 1, markCode: "A" }],
            finalAnswer: "$\\det A$",
          },
        },
        {
          id: "cialfm-u2-s3-ev-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "For a 2×2 matrix $A$, the sum of its eigenvalues equals…",
          response: { type: "mcq", choices: [
            { id: "a", text: "The trace of $A$" },
            { id: "b", text: "$\\det A$" },
            { id: "c", text: "The largest entry" },
            { id: "d", text: "$A^{-1}$" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "theorem", name: "Trace", statement: "Sum of eigenvalues = trace." }],
            steps: [{ reasoning: "Coefficient of $\\lambda$ in char equation is the trace.", marks: 1, markCode: "A" }],
            finalAnswer: "Trace",
          },
        },
        {
          id: "cialfm-u2-s3-ev-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A 2×2 matrix has eigenvalues $1$ and $4$. Find its trace and determinant.",
          response: { type: "numeric", parts: [
            { label: "a", answer: 5 }, { label: "b", answer: 4 },
          ] },
          markscheme: {
            principles: [{ kind: "theorem", name: "Trace and determinant", statement: "Sum = trace, product = det." }],
            steps: [
              { reasoning: "Trace $= 1+4 = 5$; $\\det A = 1\\times4 = 4$.", marks: 1, markCode: "M" },
              { reasoning: "Answers: $5$ and $4$.", marks: 1, markCode: "M" },
              { reasoning: "Confirmed.", marks: 1, markCode: "A" }],
            finalAnswer: "Trace 5, det 4",
          },
        },
        {
          id: "cialfm-u2-s3-ev-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Let $A=\\begin{pmatrix}4&1\\\\2&3\\end{pmatrix}$.",
          parts: [
            { label: "a", prompt: "Find the eigenvalues of $A$.", marks: 2 },
            { label: "b", prompt: "Verify that their sum equals the trace.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Char eq", statement: "$\\det(A-\\lambda I)=0$." }],
            steps: [
              { reasoning: "$(4-\\lambda)(3-\\lambda)-2 = \\lambda^2-7\\lambda+10 = 0$ → $\\lambda = 2, 5$.", marks: 1, markCode: "M", part: "a" },
              { reasoning: "Answer for (a): $\\lambda = 2, 5$.", marks: 1, markCode: "A", part: "a" },
              { reasoning: "Sum $= 7$; trace $= 4+3 = 7$ ✓.", marks: 1, markCode: "M", part: "b" },
              { reasoning: "Verified.", marks: 1, markCode: "A", part: "b" }],
            finalAnswer: "$\\lambda = 2, 5$; sum 7 = trace",
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
            { id: "a", text: "$A^{-1}v=0$" },
            { id: "b", text: "$(A-\\lambda I)v=0$" },
            { id: "c", text: "$Av=0$" },
            { id: "d", text: "$v=\\lambda$" },
          ], correctChoiceId: "b" },
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
        {
          id: "cialfm-u2-s3-evv-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A vector $v$ is an eigenvector of $A$ with eigenvalue $\lambda$ when…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$Av = \lambda v$" },
            { id: "b", text: "$Av = 0$" },
            { id: "c", text: "$v = \lambda I$" },
            { id: "d", text: "$A^{-1}v = \lambda$" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "Eigenvector", statement: "$Av = \lambda v$, $v \\neq 0$." }],
            steps: [{ reasoning: "Eigenvector definition.", marks: 1, markCode: "A" }],
            finalAnswer: "$Av = \\lambda v$",
          },
        },
        {
          id: "cialfm-u2-s3-evv-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "For $A=\\begin{pmatrix}2&1\\\\1&2\\end{pmatrix}$ and $v=\\begin{pmatrix}1\\\\1\\end{pmatrix}$, find the first component of $Av$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 3 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Matrix-vector product", statement: "Row dot vector." }],
            steps: [
              { reasoning: "$(Av)_1 = 2\\times1 + 1\\times1 = 3$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 3 (and indeed $Av = 3v$, so $v$ is an eigenvector with $\lambda=3$).", marks: 1, markCode: "A" }],
            finalAnswer: "3",
          },
        },
        {
          id: "cialfm-u2-s3-evv-q7",
          difficulty: "core",
          totalMarks: 3,
          stem: "The vector $v=\\begin{pmatrix}2\\\\3\\end{pmatrix}$ is an eigenvector of $A=\\begin{pmatrix}1&2\\\\3&2\\end{pmatrix}$. Find the corresponding eigenvalue.",
          response: { type: "numeric", parts: [{ label: "a", answer: 4 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Find $\lambda$", statement: "Compare components of $Av$ and $v$." }],
            steps: [
              { reasoning: "$Av = \\begin{pmatrix}1\\times2+2\\times3\\\\3\\times2+2\\times3\\end{pmatrix} = \\begin{pmatrix}8\\\\12\\end{pmatrix}$.", marks: 1, markCode: "M" },
              { reasoning: "$\\begin{pmatrix}8\\\\12\\end{pmatrix} = 4\\begin{pmatrix}2\\\\3\\end{pmatrix}$, so $\lambda=4$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 4.", marks: 1, markCode: "A" }],
            finalAnswer: "4",
          },
        },
        {
          id: "cialfm-u2-s3-evv-q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "For $A=\\begin{pmatrix}2&1\\\\1&2\\end{pmatrix}$ and $\lambda=1$, an eigenvector $v=\\begin{pmatrix}x\\\\y\\end{pmatrix}$ satisfies $x+y=0$. Find the ratio $y/x$.",
          response: { type: "numeric", parts: [{ label: "a", answer: -1 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Solve $(A-\lambda I)v=0$", statement: "Homogeneous system." }],
            steps: [
              { reasoning: "$A-I=\\begin{pmatrix}1&1\\\\1&1\\end{pmatrix}$ gives $x+y=0$.", marks: 1, markCode: "M" },
              { reasoning: "$y=-x$, so $y/x=-1$ (e.g. $v=\\begin{pmatrix}1\\\\-1\\end{pmatrix}$).", marks: 1, markCode: "M" },
              { reasoning: "Answer: -1.", marks: 1, markCode: "A" }],
            finalAnswer: "-1",
          },
        },
        {
          id: "cialfm-u2-s3-evv-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "An eigenvector is unique only up to…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Any nonzero scalar multiple" },
            { id: "b", text: "Its direction only" },
            { id: "c", text: "Nothing — it is unique" },
            { id: "d", text: "Its sign" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "property", name: "Eigenvector scaling", statement: "Scalar multiples remain eigenvectors." }],
            steps: [{ reasoning: "If $v$ is an eigenvector, so is $kv$ for $k\\neq0$.", marks: 1, markCode: "A" }],
            finalAnswer: "Scalar multiples",
          },
        },
        {
          id: "cialfm-u2-s3-evv-q10",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Find an eigenvector of $A=\\begin{pmatrix}1&2\\\\3&2\\end{pmatrix}$ corresponding to $\lambda=-1$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Eigenvector solve", statement: "Solve $(A-\lambda I)v=0$." }],
            steps: [
              { reasoning: "$A-(-1)I=\\begin{pmatrix}2&2\\\\3&3\\end{pmatrix}$; equation $2x+2y=0$ → $x+y=0$.", marks: 1, markCode: "M" },
              { reasoning: "Take $x=1$, then $y=-1$.", marks: 1, markCode: "M" },
              { reasoning: "$v=\\begin{pmatrix}1\\\\-1\\end{pmatrix}$.", marks: 1, markCode: "M" },
              { reasoning: "Check: $Av=\\begin{pmatrix}-1\\\\1\\end{pmatrix}=-v$. ✓", marks: 1, markCode: "A" }],
            finalAnswer: "$\\begin{pmatrix}1\\\\-1\\end{pmatrix}$",
          },
        },
        {
          id: "cialfm-u2-s3-evv-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "Eigenvectors corresponding to distinct eigenvalues of a matrix are…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Linearly independent" },
            { id: "b", text: "Parallel" },
            { id: "c", text: "Zero" },
            { id: "d", text: "Equal" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "theorem", name: "Eigenvector independence", statement: "Distinct eigenvalues ⇒ independent eigenvectors." }],
            steps: [{ reasoning: "Standard result for diagonalizable matrices.", marks: 1, markCode: "A" }],
            finalAnswer: "Linearly independent",
          },
        },
        {
          id: "cialfm-u2-s3-evv-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of the following can be an eigenvector?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\begin{pmatrix}0\\\\0\\end{pmatrix}$" },
            { id: "b", text: "$0$" },
            { id: "c", text: "The zero matrix" },
            { id: "d", text: "$\\begin{pmatrix}1\\\\0\\end{pmatrix}$" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "definition", name: "Eigenvector", statement: "Must be nonzero." }],
            steps: [{ reasoning: "Zero vector is excluded by definition.", marks: 1, markCode: "A" }],
            finalAnswer: "$\\begin{pmatrix}1\\\\0\\end{pmatrix}$",
          },
        },
        {
          id: "cialfm-u2-s3-evv-q13",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Find eigenvectors of $A=\\begin{pmatrix}2&1\\\\1&2\\end{pmatrix}$ for each of its eigenvalues $\lambda=3$ and $\lambda=1$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Both eigenvectors", statement: "Solve $(A-\lambda I)v=0$ for each $\lambda$." }],
            steps: [
              { reasoning: "For $\lambda=3$: $\\begin{pmatrix}-1&1\\\\1&-1\\end{pmatrix}v=0$ → $x=y$ → $v=\\begin{pmatrix}1\\\\1\\end{pmatrix}$.", marks: 1, markCode: "M" },
              { reasoning: "For $\lambda=1$: $\\begin{pmatrix}1&1\\\\1&1\\end{pmatrix}v=0$ → $x=-y$ → $v=\\begin{pmatrix}1\\\\-1\\end{pmatrix}$.", marks: 1, markCode: "M" },
              { reasoning: "Both vectors verified against $Av=\lambda v$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $\\begin{pmatrix}1\\\\1\\end{pmatrix}$ and $\\begin{pmatrix}1\\\\-1\\end{pmatrix}$.", marks: 1, markCode: "A" }],
            finalAnswer: "$\\begin{pmatrix}1\\\\1\\end{pmatrix},\\ \\begin{pmatrix}1\\\\-1\\end{pmatrix}$",
          },
        },
        {
          id: "cialfm-u2-s3-evv-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "The vector $v=\\begin{pmatrix}1\\\\-1\\end{pmatrix}$ is an eigenvector of $\\begin{pmatrix}2&1\\\\1&2\\end{pmatrix}$ with eigenvalue…",
          response: { type: "mcq", choices: [
            { id: "a", text: "3" },
            { id: "b", text: "2" },
            { id: "c", text: "1" },
            { id: "d", text: "-1" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "technique", name: "Verify eigenpair", statement: "Compute $Av$ and compare with $v$." }],
            steps: [{ reasoning: "$Av=\\begin{pmatrix}1\\\\-1\\end{pmatrix}=1\\cdot v$, so $\lambda=1$.", marks: 1, markCode: "A" }],
            finalAnswer: "1",
          },
        },
        {
          id: "cialfm-u2-s3-evv-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "For $A=\\begin{pmatrix}3&1\\\\1&3\\end{pmatrix}$, an eigenvector for $\lambda=2$ satisfies $x+y=0$. Find the ratio $y/x$.",
          response: { type: "numeric", parts: [{ label: "a", answer: -1 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Solve homogeneous system", statement: "$(A-2I)v=0$ gives $x+y=0$." }],
            steps: [
              { reasoning: "$A-2I=\\begin{pmatrix}1&1\\\\1&1\\end{pmatrix}$ → $x+y=0$.", marks: 1, markCode: "M" },
              { reasoning: "$y=-x$ → $y/x=-1$ (e.g. $v=\\begin{pmatrix}1\\\\-1\\end{pmatrix}$).", marks: 1, markCode: "M" },
              { reasoning: "Answer: -1.", marks: 1, markCode: "A" }],
            finalAnswer: "-1",
          },
        },
        {
          id: "cialfm-u2-s3-evv-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Let $A=\\begin{pmatrix}2&1\\\\1&2\\end{pmatrix}$ with eigenvalues $\lambda=3$ and $\lambda=1$.",
          parts: [
            { label: "a", prompt: "Find an eigenvector for $\lambda=3$.", marks: 2 },
            { label: "b", prompt: "Find an eigenvector for $\lambda=1$.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Solve for each $\lambda$", statement: "$(A-\lambda I)v=0$." }],
            steps: [
              { reasoning: "For $\lambda=3$: $-x+y=0$ → $v=\\begin{pmatrix}1\\\\1\\end{pmatrix}$.", marks: 1, markCode: "M", part: "a" },
              { reasoning: "Answer for (a) shown.", marks: 1, markCode: "A", part: "a" },
              { reasoning: "For $\lambda=1$: $x+y=0$ → $v=\\begin{pmatrix}1\\\\-1\\end{pmatrix}$.", marks: 1, markCode: "M", part: "b" },
              { reasoning: "Answer for (b) shown.", marks: 1, markCode: "A", part: "b" }],
            finalAnswer: "$\\begin{pmatrix}1\\\\1\\end{pmatrix}$ and $\\begin{pmatrix}1\\\\-1\\end{pmatrix}$",
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
