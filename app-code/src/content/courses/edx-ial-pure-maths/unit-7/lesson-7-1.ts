import type { Lesson } from "../../../types.ts";

export const lesson71: Lesson = {
  id: "edialpm-u7-lesson-7-1",
  code: "3-1",
  title: "Matrices and Eigenvalues",
  goal: "I CAN perform matrix operations, find eigenvalues and eigenvectors, and diagonalise $2\\times2$ matrices.",
  standards: ["WFM03 FP3", "Matrices"],
  vocabulary: [
    { term: "Matrix", definition: "A rectangular array of numbers; $2\\times2$ matrix $\\begin{pmatrix}a&b\\\\c&d\\end{pmatrix}$ acts on column vectors." },
    { term: "Eigenvalue", definition: "Scalar $\\lambda$ such that $A\\mathbf{v}=\\lambda\\mathbf{v}$ for nonzero vector $\\mathbf{v}$." },
    { term: "Eigenvector", definition: "Nonzero vector $\\mathbf{v}$ satisfying $A\\mathbf{v}=\\lambda\\mathbf{v}$." },
    { term: "Characteristic equation", definition: "$\\det(A-\\lambda I)=0$; for $2\\times2$: $\\lambda^2-\\text{tr}(A)\\lambda+\\det A=0$." },
    { term: "Diagonalisation", definition: "Writing $A=PDP^{-1}$ where $D$ is diagonal of eigenvalues and columns of $P$ are eigenvectors." },
  ],
  concepts: [
    {
      id: "edialpm-u7-matrix-basics",
      title: "Matrix operations and transformations",
      skill: "Add, multiply and invert $2\\times2$ matrices and interpret them as linear transformations.",
      lesson: {
        sections: [
          {
            heading: "Operations",
            body: "For $A=\\begin{pmatrix}a&b\\\\c&d\\end{pmatrix}$ and $B=\\begin{pmatrix}e&f\\\\g&h\\end{pmatrix}$: $AB=\\begin{pmatrix}ae+bg&af+bh\\\\ce+dg&cf+dh\\end{pmatrix}$ — row-by-column. Inverse: $A^{-1}=\\frac{1}{\\det A}\\begin{pmatrix}d&-b\\\\-c&a\\end{pmatrix}$ when $\\det A=ad-bc\\ne0$.",
          },
          {
            heading: "Linear transformations",
            body: "A matrix maps vectors: $\\begin{pmatrix}a&b\\\\c&d\\end{pmatrix}\\begin{pmatrix}x\\\\y\\end{pmatrix}=\\begin{pmatrix}ax+by\\\\cx+dy\\end{pmatrix}$. Special matrices: rotation $\\begin{pmatrix}\\cos\\theta&-\\sin\\theta\\\\\\sin\\theta&\\cos\\theta\\end{pmatrix}$, reflection, scaling, shear.",
          },
          {
            heading: "Determinant and area scale",
            body: "$\\det A=ad-bc$ gives the signed area scale factor of the transformation; negative determinant means orientation reversal.",
          },
        ],
        keyFormulas: [
          { name: "Inverse", statement: "$A^{-1}=\\frac{1}{ad-bc}\\begin{pmatrix}d&-b\\\\-c&a\\end{pmatrix}$" },
          { name: "Determinant", statement: "$\\det A=ad-bc$" },
        ],
        workedExample: {
          problem: "Find $A^{-1}$ for $A=\\begin{pmatrix}2&1\\\\1&1\\end{pmatrix}$.",
          solution: "$\\det A=2\\cdot1-1\\cdot1=1$; $A^{-1}=\\begin{pmatrix}1&-1\\\\-1&2\\end{pmatrix}$.",
        },
      },
      questions: [
        {
          id: "edialpm-mat-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "For $A=\\begin{pmatrix}2&0\\\\0&3\\end{pmatrix}$, what is $A^2$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\begin{pmatrix}6&0\\\\0&6\\end{pmatrix}$" },
              { id: "b", text: "$\\begin{pmatrix}4&0\\\\0&6\\end{pmatrix}$" },
              { id: "c", text: "$\\begin{pmatrix}2&0\\\\0&3\\end{pmatrix}$" },
              { id: "d", text: "$\\begin{pmatrix}4&0\\\\0&9\\end{pmatrix}$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "formula", name: "Matrix product", statement: "Diagonal matrices multiply entrywise." }],
            steps: [{ reasoning: "$A^2=\\begin{pmatrix}4&0\\\\0&9\\end{pmatrix}$.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** $\\begin{pmatrix}4&0\\\\0&9\\end{pmatrix}$",
          },
        },
        {
          id: "edialpm-mat-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Find the inverse of $A=\\begin{pmatrix}3&1\\\\2&1\\end{pmatrix}$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "Inverse", statement: "$A^{-1}=\\frac{1}{\\det A}\\begin{pmatrix}d&-b\\\\-c&a\\end{pmatrix}$." }],
            steps: [
              { reasoning: "$\\det A=3\\cdot1-1\\cdot2=1$.", working: "det=1", marks: 1, markCode: "M" },
              { reasoning: "$A^{-1}=\\begin{pmatrix}1&-1\\\\-2&3\\end{pmatrix}$.", working: "inverse", marks: 1, markCode: "M" },
              { reasoning: "State inverse; verify $AA^{-1}=I$ optionally.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\begin{pmatrix}1&-1\\\\-2&3\\end{pmatrix}$",
            commonErrors: ["Wrong sign placement in adjugate."],
          },
        },
        {
          id: "edialpm-mat-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "The matrix $M=\\begin{pmatrix}1&2\\\\0&1\\end{pmatrix}$ represents a shear. Find the image of the point $(1,1)$ and the area scale factor.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Transformation", statement: "Apply matrix to column vector; $|\\det|$ is area factor." }],
            steps: [
              { reasoning: "$M\\begin{pmatrix}1\\\\1\\end{pmatrix}=\\begin{pmatrix}1+2\\\\1\\end{pmatrix}=\\begin{pmatrix}3\\\\1\\end{pmatrix}$, so $(3,1)$.", working: "(3,1)", marks: 1, markCode: "M" },
              { reasoning: "$\\det M=1\\cdot1-2\\cdot0=1$.", working: "det=1", marks: 1, markCode: "M" },
              { reasoning: "Area scale factor $=|\\det M|=1$ (area preserved).", marks: 1, markCode: "M" },
              { reasoning: "State both results.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Image $(3,1)$; area factor $1$",
            commonErrors: ["Row vs column vector confusion."],
          },
        },
        {
          id: "edialpm-mat-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Let $A=\\begin{pmatrix}4&1\\\\2&3\\end{pmatrix}$.",
          parts: [
            { label: "a", prompt: "Write down the characteristic equation of $A$.", marks: 3 },
            { label: "b", prompt: "Find the eigenvalues of $A$.", marks: 3 },
            { label: "c", prompt: "Find an eigenvector for each eigenvalue.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Characteristic equation", statement: "$\\det(A-\\lambda I)=0$." },
              { kind: "technique", name: "Eigenvector", statement: "Solve $(A-\\lambda I)\\mathbf{v}=0$." },
            ],
            steps: [
              { part: "a", reasoning: "$\\det\\begin{pmatrix}4-\\lambda&1\\\\2&3-\\lambda\\end{pmatrix}=(4-\\lambda)(3-\\lambda)-2=\\lambda^2-7\\lambda+10$.", working: "lambda^2-7lambda+10", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Characteristic equation: $\\lambda^2-7\\lambda+10=0$.", working: "=0", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State equation.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Factorise: $(\\lambda-5)(\\lambda-2)=0$, so $\\lambda=5,2$.", working: "5,2", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State eigenvalues.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Check sum $=7=\\text{tr}$, product $=10=\\det$ ✓.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$\\lambda=5$: $(A-5I)\\mathbf{v}=\\begin{pmatrix}-1&1\\\\2&-2\\end{pmatrix}\\mathbf{v}=0$; take $\\mathbf{v}=\\begin{pmatrix}1\\\\1\\end{pmatrix}$.", working: "(1,1)", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Check $A\\begin{pmatrix}1\\\\1\\end{pmatrix}=\\begin{pmatrix}5\\\\5\\end{pmatrix}=5\\mathbf{v}$ ✓.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "$\\lambda=2$: $(A-2I)=\\begin{pmatrix}2&1\\\\2&1\\end{pmatrix}$; take $\\mathbf{v}=\\begin{pmatrix}1\\\\-2\\end{pmatrix}$.", working: "(1,-2)", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Check $A\\begin{pmatrix}1\\\\-2\\end{pmatrix}=\\begin{pmatrix}2\\\\-4\\end{pmatrix}=2\\mathbf{v}$ ✓. State eigenvectors.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $\\lambda^2-7\\lambda+10=0$ (b) $\\lambda=5,2$ (c) $\\begin{pmatrix}1\\\\1\\end{pmatrix}$ and $\\begin{pmatrix}1\\\\-2\\end{pmatrix}$",
            commonErrors: ["Arithmetic slips in determinant.", "Eigenvector not checked."],
          },
        },
      ],
    },
    {
      id: "edialpm-u7-eigen-adv",
      title: "Eigenvectors and diagonalisation",
      skill: "Find eigenvectors systematically and diagonalise a $2\\times2$ matrix.",
      lesson: {
        sections: [
          {
            heading: "Finding eigenvectors",
            body: "For each eigenvalue $\\lambda$, solve $(A-\\lambda I)\\mathbf{v}=\\mathbf{0}$ — a singular system giving a one-parameter family of eigenvectors. Any nonzero scalar multiple is equally valid.",
          },
          {
            heading: "Diagonalisation",
            body: "If $A$ has distinct eigenvalues $\\lambda_1,\\lambda_2$ with eigenvectors $\\mathbf{v}_1,\\mathbf{v}_2$, form $P=\\begin{pmatrix}\\mathbf{v}_1&\\mathbf{v}_2\\end{pmatrix}$ and $D=\\begin{pmatrix}\\lambda_1&0\\\\0&\\lambda_2\\end{pmatrix}$; then $A=PDP^{-1}$ and $A^n=PD^nP^{-1}$ — useful for powers of matrices.",
          },
          {
            heading: "Repeated/complex eigenvalues",
            body: "If eigenvalues are equal or complex, diagonalisation may fail; complex eigenvalues come in conjugate pairs for real matrices.",
          },
        ],
        keyFormulas: [
          { name: "Diagonalisation", statement: "$A=PDP^{-1}$; $A^n=PD^nP^{-1}$" },
        ],
        workedExample: {
          problem: "Diagonalise $A=\\begin{pmatrix}4&1\\\\2&3\\end{pmatrix}$ using eigenvalues $5,2$ and eigenvectors $(1,1)^T,(1,-2)^T$.",
          solution: "$P=\\begin{pmatrix}1&1\\\\1&-2\\end{pmatrix}$, $\\det P=-3$, $P^{-1}=-\\frac13\\begin{pmatrix}-2&-1\\\\-1&1\\end{pmatrix}=\\begin{pmatrix}2/3&1/3\\\\1/3&-1/3\\end{pmatrix}$. Verify $PDP^{-1}=A$.",
        },
      },
      questions: [
        {
          id: "edialpm-eig-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "If $A\\mathbf{v}=\\lambda\\mathbf{v}$, then $\\mathbf{v}$ is called:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A characteristic vector" },
              { id: "b", text: "An eigenvector of $A$" },
              { id: "c", text: "A singular vector" },
              { id: "d", text: "A basis vector" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Eigenvector", statement: "$A\\mathbf{v}=\\lambda\\mathbf{v}$ defines eigenvector." }],
            steps: [{ reasoning: "Direct definition.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** eigenvector",
          },
        },
        {
          id: "edialpm-eig-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "For $A=\\begin{pmatrix}2&1\\\\1&2\\end{pmatrix}$ with eigenvalues $1$ and $3$, find eigenvectors.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Eigenvector", statement: "Solve $(A-\\lambda I)\\mathbf{v}=0$." }],
            steps: [
              { reasoning: "$\\lambda=1$: $(A-I)=\\begin{pmatrix}1&1\\\\1&1\\end{pmatrix}$; $x+y=0$, take $\\mathbf{v}_1=\\begin{pmatrix}1\\\\-1\\end{pmatrix}$.", working: "(1,-1)", marks: 1, markCode: "M" },
              { reasoning: "$\\lambda=3$: $(A-3I)=\\begin{pmatrix}-1&1\\\\1&-1\\end{pmatrix}$; $-x+y=0$, take $\\mathbf{v}_2=\\begin{pmatrix}1\\\\1\\end{pmatrix}$.", working: "(1,1)", marks: 1, markCode: "M" },
              { reasoning: "State eigenvectors.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\begin{pmatrix}1\\\\-1\\end{pmatrix}$ and $\\begin{pmatrix}1\\\\1\\end{pmatrix}$",
            commonErrors: ["Sign slips in $(A-\\lambda I)$."],
          },
        },
        {
          id: "edialpm-eig-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "For $A=\\begin{pmatrix}4&1\\\\2&3\\end{pmatrix}$, use diagonalisation to find $A^2$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "Powers", statement: "$A^n=PD^nP^{-1}$." }],
            steps: [
              { reasoning: "Eigenvalues $5,2$; $P=\\begin{pmatrix}1&1\\\\1&-2\\end{pmatrix}$, $P^{-1}=\\begin{pmatrix}2/3&1/3\\\\1/3&-1/3\\end{pmatrix}$.", working: "P,P^{-1}", marks: 1, markCode: "M" },
              { reasoning: "$A^2=PD^2P^{-1}$ with $D^2=\\begin{pmatrix}25&0\\\\0&4\\end{pmatrix}$.", working: "D^2", marks: 1, markCode: "M" },
              { reasoning: "Compute product to get $A^2=\\begin{pmatrix}18&7\\\\14&11\\end{pmatrix}$.", working: "A^2", marks: 1, markCode: "M" },
              { reasoning: "Verify by direct multiplication.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$A^2=\\begin{pmatrix}18&7\\\\14&11\\end{pmatrix}$",
            commonErrors: ["Matrix multiplication order errors."],
          },
        },
        {
          id: "edialpm-eig-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A population model is described by $\\mathbf{p}_{n+1}=A\\mathbf{p}_n$ with $A=\\begin{pmatrix}0.9&0.2\\\\0.1&0.8\\end{pmatrix}$.",
          parts: [
            { label: "a", prompt: "Find the eigenvalues of $A$.", marks: 3 },
            { label: "b", prompt: "Find the eigenvector for the dominant eigenvalue.", marks: 4 },
            { label: "c", prompt: "Explain the long-term behaviour of the population.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Population model", statement: "Dominant eigenvalue governs long-term behaviour." }],
            steps: [
              { part: "a", reasoning: "Characteristic equation: $\\lambda^2-1.7\\lambda+0.7=0$ (since $\\text{tr}=1.7$, $\\det=0.72-0.02=0.70$).", working: "char eq", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Factorise: $(\\lambda-1)(\\lambda-0.7)=0$, so $\\lambda=1,0.7$.", working: "1,0.7", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State eigenvalues.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Dominant $\\lambda=1$: $(A-I)=\\begin{pmatrix}-0.1&0.2\\\\0.1&-0.2\\end{pmatrix}$; $-0.1x+0.2y=0\\Rightarrow x=2y$.", working: "x=2y", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Take $\\mathbf{v}=\\begin{pmatrix}2\\\\1\\end{pmatrix}$.", working: "(2,1)", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Check $A\\mathbf{v}=\\begin{pmatrix}1.8+0.2\\\\0.2+0.8\\end{pmatrix}=\\begin{pmatrix}2\\\\1\\end{pmatrix}$ ✓.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State eigenvector.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Since $|\\lambda_2|=0.7<1$, the $0.7$-component decays.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Population tends to a multiple of $(2,1)$ — stable distribution in ratio $2:1$.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Conclude steady state.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $\\lambda=1,0.7$ (b) $\\begin{pmatrix}2\\\\1\\end{pmatrix}$ (c) stable ratio $2:1$",
            commonErrors: ["Determinant arithmetic; forgetting eigenvector check."],
          },
        },
      ],
    },
  ],
};
