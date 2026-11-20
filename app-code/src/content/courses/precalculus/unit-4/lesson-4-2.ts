import type { Lesson } from "../../../types.ts";

export const lesson42: Lesson = {
  id: "pc-u4-lesson-4-2",
  code: "4-2",
  title: "Matrices",
  goal: "I CAN perform matrix operations, compute determinants and inverses of 2x2 matrices, and solve linear systems with matrices.",
  standards: ["HSN-VM.C.6", "HSN-VM.C.7", "HSN-VM.C.8", "HSN-VM.C.9", "HSN-VM.C.10", "HSN-VM.C.12", "HSA-REI.C.9"],
  vocabulary: [
    { term: "Matrix", definition: "A rectangular array of numbers arranged in rows and columns." },
    { term: "Dimensions", definition: "The size of a matrix written rows $\\times$ columns; an $m\\times n$ matrix has $m$ rows and $n$ columns." },
    { term: "Identity matrix", definition: "A square matrix with 1s on the main diagonal and 0s elsewhere; $AI=IA=A$." },
    { term: "Determinant", definition: "For $\\begin{bmatrix} a & b \\\\ c & d \\end{bmatrix}$, the number $ad-bc$." },
    { term: "Inverse matrix", definition: "The matrix $A^{-1}$ satisfying $AA^{-1}=A^{-1}A=I$; it exists only when $\\det A\\ne0$." },
    { term: "Singular matrix", definition: "A square matrix with determinant $0$, which has no inverse." },
  ],
  concepts: [
    {
      id: "pc-u4-matrix-operations",
      title: "Matrix addition, scalar multiplication, and multiplication",
      skill: "Add, scale, and multiply matrices, and decide when an operation is defined from the dimensions.",
      lesson: {
        sections: [
          {
            heading: "Adding and scaling",
            body: "Matrices of the same dimensions are added entry by entry. A scalar multiple $kA$ multiplies every entry of $A$ by $k$. Matrices with different dimensions cannot be added.",
          },
          {
            heading: "Matrix multiplication",
            body: "The product $AB$ is defined only when the number of columns of $A$ equals the number of rows of $B$. If $A$ is $m\\times n$ and $B$ is $n\\times p$, then $AB$ is $m\\times p$. The entry in row $i$, column $j$ of $AB$ is the dot product of row $i$ of $A$ with column $j$ of $B$.",
          },
          {
            heading: "Properties and cautions",
            body: "Matrix multiplication is associative and distributes over addition, but it is **not commutative**: in general $AB\\ne BA$, and one of the two may not even be defined. Matrices model real data: a quantities matrix times a prices matrix produces totals.",
          },
        ],
        keyFormulas: [
          { name: "Dimensions of a product", statement: "$(m\\times n)(n\\times p)\\to m\\times p$" },
          { name: "Product entry", statement: "$(AB)_{ij}=\\sum_k a_{ik}b_{kj}$" },
          { name: "Identity", statement: "$AI=IA=A$" },
        ],
        workedExample: {
          problem: "Compute $\\begin{bmatrix} 1 & 2 \\\\ 0 & 3 \\end{bmatrix}\\begin{bmatrix} 4 \\\\ 5 \\end{bmatrix}$.",
          solution: "A $2\\times2$ matrix times a $2\\times1$ matrix gives a $2\\times1$ matrix. Row 1: $1(4)+2(5)=14$. Row 2: $0(4)+3(5)=15$. The result is $\\begin{bmatrix} 14 \\\\ 15 \\end{bmatrix}$.",
        },
      },
      questions: [
        {
          id: "pc-u4-matrix-operations-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Matrix $A$ is $2\\times3$ and matrix $B$ is $3\\times4$. What are the dimensions of $AB$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$3\\times3$" },
              { id: "b", text: "$2\\times4$" },
              { id: "c", text: "$4\\times2$" },
              { id: "d", text: "$AB$ is not defined" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Product dimensions", statement: "$(m\\times n)(n\\times p)$ is defined and has dimensions $m\\times p$." },
            ],
            steps: [
              { reasoning: "The inner dimensions match (3 columns of $A$, 3 rows of $B$), so the product is defined.", working: "(2\\times3)(3\\times4)", marks: 1, markCode: "M" },
              { reasoning: "The result takes the outer dimensions.", working: "2\\times4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** $2\\times4$",
            commonErrors: ["Thinking the product is undefined because $A$ and $B$ differ in size.", "Reversing the outer dimensions."],
          },
        },
        {
          id: "pc-u4-matrix-operations-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Let $A=\\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix}$ and $B=\\begin{bmatrix} 2 & 0 \\\\ 1 & 3 \\end{bmatrix}$. Find $AB$. Enter the entries row by row.",
          response: {
            type: "numeric",
            parts: [
              { label: "Row 1, column 1", answer: 4 },
              { label: "Row 1, column 2", answer: 6 },
              { label: "Row 2, column 1", answer: 10 },
              { label: "Row 2, column 2", answer: 12 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Matrix product", statement: "Entry $(i,j)$ is the dot product of row $i$ of the first matrix with column $j$ of the second." },
            ],
            steps: [
              { reasoning: "Multiply each row of $A$ by each column of $B$.", working: "\\begin{bmatrix} 1(2)+2(1) & 1(0)+2(3) \\\\ 3(2)+4(1) & 3(0)+4(3) \\end{bmatrix}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate the first row.", working: "4,\\;6", marks: 1, markCode: "A" },
              { reasoning: "Evaluate the second row.", working: "10,\\;12", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$AB=\\begin{bmatrix} 4 & 6 \\\\ 10 & 12 \\end{bmatrix}$",
            commonErrors: ["Multiplying entry by entry instead of row by column.", "Computing $BA$ by mistake."],
          },
        },
        {
          id: "pc-u4-matrix-operations-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Let $A=\\begin{bmatrix} 2 & -1 \\\\ 0 & 3 \\end{bmatrix}$ and $B=\\begin{bmatrix} 1 & 4 \\\\ -2 & 5 \\end{bmatrix}$. Find $AB$ and enter its entries row by row.",
          response: {
            type: "numeric",
            parts: [
              { label: "Row 1, column 1", answer: 4 },
              { label: "Row 1, column 2", answer: 3 },
              { label: "Row 2, column 1", answer: -6 },
              { label: "Row 2, column 2", answer: 15 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Matrix product", statement: "Entry $(i,j)$ is the dot product of row $i$ of the first matrix with column $j$ of the second." },
            ],
            steps: [
              { reasoning: "Set up each entry as a row-by-column dot product.", working: "\\begin{bmatrix} 2(1)+(-1)(-2) & 2(4)+(-1)(5) \\\\ 0(1)+3(-2) & 0(4)+3(5) \\end{bmatrix}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate row 1, taking care with the negative products.", working: "2+2=4,\\quad 8-5=3", marks: 1, markCode: "A" },
              { reasoning: "Evaluate row 2.", working: "-6,\\quad 15", marks: 1, markCode: "A" },
              { reasoning: "State the product matrix.", working: "\\begin{bmatrix} 4 & 3 \\\\ -6 & 15 \\end{bmatrix}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "$AB=\\begin{bmatrix} 4 & 3 \\\\ -6 & 15 \\end{bmatrix}$ (note $BA=\\begin{bmatrix} 2 & 11 \\\\ -4 & 17 \\end{bmatrix}\\ne AB$)",
            commonErrors: ["Sign error in $(-1)(-2)$.", "Assuming $AB=BA$."],
          },
        },
        {
          id: "pc-u4-matrix-operations-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A shop records the number of three items sold on two days. The quantities matrix is $Q=\\begin{bmatrix} 10 & 5 & 8 \\\\ 6 & 9 & 4 \\end{bmatrix}$ (rows: Monday, Tuesday; columns: item 1, 2, 3). The prices are $\\$4$, $\\$6$ and $\\$3$ per item, written as the price matrix $P=\\begin{bmatrix} 4 \\\\ 6 \\\\ 3 \\end{bmatrix}$.",
          parts: [
            { label: "a", prompt: "State the dimensions of $Q$, $P$ and $QP$, and explain why $QP$ is defined.", marks: 2 },
            { label: "b", prompt: "Compute $QP$ and interpret its entries. Enter Monday's and Tuesday's revenue in dollars.", marks: 3 },
            { label: "c", prompt: "All prices rise by $10\\%$. Use a scalar multiple of $P$ to find the new revenue for each day, in dollars.", marks: 2 },
            { label: "d", prompt: "Explain why $PQ$ is not defined.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(b) Monday revenue ($\\$$)", answer: 94 },
              { label: "(b) Tuesday revenue ($\\$$)", answer: 90 },
              { label: "(c) Monday new revenue ($\\$$)", answer: 103.4, tolerance: 0.01 },
              { label: "(c) Tuesday new revenue ($\\$$)", answer: 99, tolerance: 0.01 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Product dimensions", statement: "$(m\\times n)(n\\times p)$ is defined and has dimensions $m\\times p$." },
              { kind: "definition", name: "Matrix product", statement: "Entry $(i,j)$ is the dot product of row $i$ with column $j$." },
              { kind: "property", name: "Scalar multiples", statement: "$(kA)B=k(AB)$." },
            ],
            steps: [
              { part: "a", reasoning: "State the three sizes.", working: "Q:\\;2\\times3,\\quad P:\\;3\\times1,\\quad QP:\\;2\\times1", marks: 1, markCode: "B" },
              { part: "a", reasoning: "Columns of $Q$ (3) equal rows of $P$ (3), so the product is defined.", marks: 1, markCode: "R" },
              { part: "b", reasoning: "Multiply each row of $Q$ by the price column.", working: "\\begin{bmatrix} 10(4)+5(6)+8(3) \\\\ 6(4)+9(6)+4(3) \\end{bmatrix}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate.", working: "\\begin{bmatrix} 40+30+24 \\\\ 24+54+12 \\end{bmatrix}=\\begin{bmatrix} 94 \\\\ 90 \\end{bmatrix}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Interpret: each entry is that day's total revenue.", working: "\\text{Monday }\\$94,\\;\\text{Tuesday }\\$90", marks: 1, markCode: "R" },
              { part: "c", reasoning: "A $10\\%$ rise multiplies prices by $1.1$, so the new revenue is $1.1\\,QP$.", working: "1.1\\begin{bmatrix} 94 \\\\ 90 \\end{bmatrix}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate.", working: "\\begin{bmatrix} 103.4 \\\\ 99 \\end{bmatrix}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "$P$ is $3\\times1$ and $Q$ is $2\\times3$; the columns of $P$ (1) do not equal the rows of $Q$ (2).", working: "(3\\times1)(2\\times3)", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Because the inner dimensions differ, the product does not exist; this also shows multiplication is not commutative.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $2\\times3$, $3\\times1$, $2\\times1$. (b) $\\$94$ and $\\$90$. (c) $\\$103.40$ and $\\$99$. (d) Inner dimensions $1\\ne2$.",
            commonErrors: ["Multiplying columns of $Q$ by the price rows in the wrong order.", "Adding $10\\%$ to the revenue as $\\$10$ instead of multiplying by $1.1$."],
          },
        },
      ],
    },
    {
      id: "pc-u4-determinants-inverses-systems",
      title: "Determinants, inverses, and solving systems",
      skill: "Find the determinant and inverse of a 2x2 matrix and use the inverse to solve a linear system.",
      lesson: {
        sections: [
          {
            heading: "The determinant",
            body: "For $A=\\begin{bmatrix} a & b \\\\ c & d \\end{bmatrix}$, $\\det A=ad-bc$. The determinant is zero exactly when the rows are proportional, and in that case $A$ has no inverse. Geometrically, $|\\det A|$ is the factor by which $A$ scales areas.",
          },
          {
            heading: "The 2x2 inverse",
            body: "If $\\det A\\ne0$, then $A^{-1}=\\dfrac{1}{ad-bc}\\begin{bmatrix} d & -b \\\\ -c & a \\end{bmatrix}$: swap $a$ and $d$, negate $b$ and $c$, and divide by the determinant. Check by confirming $AA^{-1}=I$.",
          },
          {
            heading: "Solving systems",
            body: "A system such as $ax+by=e,\\;cx+dy=f$ is the matrix equation $A\\mathbf{x}=\\mathbf{b}$. When $\\det A\\ne0$, multiply both sides on the left by $A^{-1}$ to get $\\mathbf{x}=A^{-1}\\mathbf{b}$, the unique solution. If $\\det A=0$, there is no unique solution: the system has either none or infinitely many.",
          },
        ],
        keyFormulas: [
          { name: "Determinant", statement: "$\\det\\begin{bmatrix} a & b \\\\ c & d \\end{bmatrix}=ad-bc$" },
          { name: "Inverse", statement: "$A^{-1}=\\dfrac{1}{ad-bc}\\begin{bmatrix} d & -b \\\\ -c & a \\end{bmatrix}$" },
          { name: "Solution of a system", statement: "$A\\mathbf{x}=\\mathbf{b}\\Rightarrow\\mathbf{x}=A^{-1}\\mathbf{b}$" },
        ],
        workedExample: {
          problem: "Find the inverse of $A=\\begin{bmatrix} 2 & 1 \\\\ 5 & 3 \\end{bmatrix}$.",
          solution: "$\\det A=2(3)-1(5)=1$. So $A^{-1}=\\dfrac11\\begin{bmatrix} 3 & -1 \\\\ -5 & 2 \\end{bmatrix}$. Check: first row of $A$ times first column of $A^{-1}$ gives $2(3)+1(-5)=1$.",
        },
      },
      questions: [
        {
          id: "pc-u4-determinants-inverses-systems-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the determinant of $\\begin{bmatrix} 4 & 3 \\\\ 2 & 5 \\end{bmatrix}$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$26$" },
              { id: "b", text: "$14$" },
              { id: "c", text: "$-14$" },
              { id: "d", text: "$7$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "2x2 determinant", statement: "$\\det\\begin{bmatrix} a & b \\\\ c & d \\end{bmatrix}=ad-bc$." },
            ],
            steps: [
              { reasoning: "Multiply the main diagonal and subtract the product of the other diagonal.", working: "4(5)-3(2)", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "20-6=14", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** $14$",
            commonErrors: ["Adding the diagonal products ($26$).", "Subtracting in the wrong order ($-14$)."],
          },
        },
        {
          id: "pc-u4-determinants-inverses-systems-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Find the inverse of $A=\\begin{bmatrix} 3 & 1 \\\\ 5 & 2 \\end{bmatrix}$. Enter the entries of $A^{-1}$ row by row.",
          response: {
            type: "numeric",
            parts: [
              { label: "Row 1, column 1", answer: 2 },
              { label: "Row 1, column 2", answer: -1 },
              { label: "Row 2, column 1", answer: -5 },
              { label: "Row 2, column 2", answer: 3 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "2x2 inverse", statement: "$A^{-1}=\\dfrac{1}{ad-bc}\\begin{bmatrix} d & -b \\\\ -c & a \\end{bmatrix}$, valid when $ad-bc\\ne0$." },
            ],
            steps: [
              { reasoning: "Compute the determinant to confirm the inverse exists.", working: "\\det A=3(2)-1(5)=1", marks: 1, markCode: "M" },
              { reasoning: "Swap the diagonal entries and negate the off-diagonal entries.", working: "\\begin{bmatrix} 2 & -1 \\\\ -5 & 3 \\end{bmatrix}", marks: 1, markCode: "M" },
              { reasoning: "Divide by the determinant, which is 1.", working: "A^{-1}=\\begin{bmatrix} 2 & -1 \\\\ -5 & 3 \\end{bmatrix}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$A^{-1}=\\begin{bmatrix} 2 & -1 \\\\ -5 & 3 \\end{bmatrix}$",
            commonErrors: ["Negating the diagonal entries instead of the off-diagonal ones.", "Forgetting to divide by the determinant."],
          },
        },
        {
          id: "pc-u4-determinants-inverses-systems-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Solve the system $2x+3y=7$, $x+2y=4$ by writing it as a matrix equation and using an inverse matrix. Enter $x$ and $y$.",
          response: {
            type: "numeric",
            parts: [
              { label: "$x$", answer: 2 },
              { label: "$y$", answer: 1 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Matrix equation", statement: "If $A\\mathbf{x}=\\mathbf{b}$ and $\\det A\\ne0$, then $\\mathbf{x}=A^{-1}\\mathbf{b}$." },
              { kind: "formula", name: "2x2 inverse", statement: "$A^{-1}=\\dfrac{1}{ad-bc}\\begin{bmatrix} d & -b \\\\ -c & a \\end{bmatrix}$." },
            ],
            steps: [
              { reasoning: "Write the system in matrix form.", working: "\\begin{bmatrix} 2 & 3 \\\\ 1 & 2 \\end{bmatrix}\\begin{bmatrix} x \\\\ y \\end{bmatrix}=\\begin{bmatrix} 7 \\\\ 4 \\end{bmatrix}", marks: 1, markCode: "M" },
              { reasoning: "Find the determinant and the inverse.", working: "\\det=4-3=1,\\quad A^{-1}=\\begin{bmatrix} 2 & -3 \\\\ -1 & 2 \\end{bmatrix}", marks: 1, markCode: "A" },
              { reasoning: "Multiply the inverse by the constants column (inverse on the left).", working: "\\begin{bmatrix} 2(7)-3(4) \\\\ -1(7)+2(4) \\end{bmatrix}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate and check in the original equations ($4+3=7$, $2+2=4$).", working: "x=2,\\;y=1", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x=2,\\;y=1$",
            commonErrors: ["Multiplying $\\mathbf{b}A^{-1}$ in the wrong order.", "Sign errors in the inverse."],
          },
        },
        {
          id: "pc-u4-determinants-inverses-systems-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Consider the system $4x+3y=11$, $5x+4y=14$, written as $A\\mathbf{x}=\\mathbf{b}$ with $A=\\begin{bmatrix} 4 & 3 \\\\ 5 & 4 \\end{bmatrix}$ and $\\mathbf{b}=\\begin{bmatrix} 11 \\\\ 14 \\end{bmatrix}$.",
          parts: [
            { label: "a", prompt: "Find $\\det A$.", marks: 1 },
            { label: "b", prompt: "Find $A^{-1}$. Enter its entries row by row.", marks: 2 },
            { label: "c", prompt: "Use $A^{-1}$ to solve for $x$ and $y$.", marks: 3 },
            { label: "d", prompt: "The matrix $B=\\begin{bmatrix} k & 6 \\\\ 2 & 3 \\end{bmatrix}$ has no inverse. Find $k$ and explain what this means for a system $B\\mathbf{x}=\\mathbf{c}$.", marks: 3 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) $\\det A$", answer: 1 },
              { label: "(b) Row 1, column 1", answer: 4 },
              { label: "(b) Row 1, column 2", answer: -3 },
              { label: "(b) Row 2, column 1", answer: -5 },
              { label: "(b) Row 2, column 2", answer: 4 },
              { label: "(c) $x$", answer: 2 },
              { label: "(c) $y$", answer: 1 },
              { label: "(d) $k$", answer: 4 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "2x2 inverse", statement: "$A^{-1}=\\dfrac{1}{ad-bc}\\begin{bmatrix} d & -b \\\\ -c & a \\end{bmatrix}$." },
              { kind: "principle", name: "Solving $A\\mathbf{x}=\\mathbf{b}$", statement: "If $\\det A\\ne0$, the unique solution is $\\mathbf{x}=A^{-1}\\mathbf{b}$." },
              { kind: "theorem", name: "Invertibility", statement: "A square matrix has an inverse if and only if its determinant is nonzero." },
            ],
            steps: [
              { part: "a", reasoning: "Apply $ad-bc$.", working: "4(4)-3(5)=16-15=1", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Swap the diagonal, negate the off-diagonal.", working: "\\frac{1}{1}\\begin{bmatrix} 4 & -3 \\\\ -5 & 4 \\end{bmatrix}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the inverse.", working: "A^{-1}=\\begin{bmatrix} 4 & -3 \\\\ -5 & 4 \\end{bmatrix}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Multiply both sides on the left by $A^{-1}$.", working: "\\mathbf{x}=A^{-1}\\mathbf{b}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Compute the product.", working: "\\begin{bmatrix} 4(11)-3(14) \\\\ -5(11)+4(14) \\end{bmatrix}=\\begin{bmatrix} 44-42 \\\\ -55+56 \\end{bmatrix}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State the solution and check: $4(2)+3(1)=11$, $5(2)+4(1)=14$.", working: "x=2,\\;y=1", marks: 1, markCode: "A" },
              { part: "d", reasoning: "No inverse means the determinant is zero.", working: "3k-6\\cdot2=0", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Solve for $k$.", working: "3k=12\\Rightarrow k=4", marks: 1, markCode: "A" },
              { part: "d", reasoning: "With $\\det B=0$ the rows are proportional, so $B\\mathbf{x}=\\mathbf{c}$ has no unique solution: either no solution or infinitely many.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $1$. (b) $\\begin{bmatrix} 4 & -3 \\\\ -5 & 4 \\end{bmatrix}$. (c) $x=2,y=1$. (d) $k=4$; no unique solution.",
            commonErrors: ["Negating the wrong entries in the inverse.", "Claiming that $\\det B=0$ guarantees no solution; it may have infinitely many."],
          },
        },
      ],
    },
  ],
};
