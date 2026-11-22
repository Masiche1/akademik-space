import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "aihl-u1-lesson-1-2",
  code: "1-2",
  title: "Matrices",
  goal: "I CAN perform matrix operations, find determinants and inverses, and solve systems of linear equations using inverse matrices.",
  standards: ["AHL 1.14"],
  vocabulary: [
    {
      term: "Matrix",
      definition:
        "A rectangular array of numbers arranged in rows and columns.",
    },
    {
      term: "Determinant",
      definition:
        "For $A=\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}$, $\\det A=ad-bc$.",
    },
    {
      term: "Inverse matrix",
      definition:
        "The matrix $A^{-1}$ satisfying $AA^{-1}=A^{-1}A=I$. It exists only if $\\det A\\ne0$.",
    },
    {
      term: "Singular matrix",
      definition:
        "A square matrix with determinant zero, which has no inverse.",
    },
    {
      term: "Identity matrix",
      definition:
        "The square matrix $I$ with 1 on the main diagonal and 0 elsewhere, so $AI=IA=A$.",
    },
  ],
  concepts: [
    {
      id: "aihl-u1-matrix-operations",
      title: "Matrix operations, determinants and inverses",
      skill:
        "Multiply matrices, evaluate determinants and find inverses of $2\\times2$ matrices.",
      lesson: {
        sections: [
          {
            heading: "Multiplying matrices",
            body: "A product $AB$ exists when the number of columns of $A$ equals the number of rows of $B$. Each entry is a row of $A$ times a column of $B$. In general $AB\\ne BA$. In applications, a quantity matrix multiplied by a column of prices gives total costs.",
          },
          {
            heading: "Determinant and inverse",
            body: "For a $2\\times2$ matrix $\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}$ the determinant is $ad-bc$ and the inverse is $\\frac{1}{ad-bc}\\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}$. If the determinant is zero the matrix is singular. For larger matrices use the GDC. Also $\\det(AB)=\\det A\\times\\det B$.",
          },
        ],
        keyFormulas: [
          {
            name: "Determinant",
            statement:
              "$\\det\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}=ad-bc$",
          },
          {
            name: "Inverse",
            statement:
              "$A^{-1}=\\dfrac{1}{ad-bc}\\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}$",
          },
        ],
        workedExample: {
          problem:
            "Find the inverse of $A=\\begin{pmatrix} 4 & 3 \\\\ 2 & 2 \\end{pmatrix}$.",
          solution:
            "$\\det A=8-6=2$. Swap the diagonal entries and negate the others: $A^{-1}=\\frac12\\begin{pmatrix} 2 & -3 \\\\ -2 & 4 \\end{pmatrix}=\\begin{pmatrix} 1 & -1.5 \\\\ -1 & 2 \\end{pmatrix}$.",
        },
      },
      questions: [
        {
          id: "aihl-u1-matrix-operations-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Find the determinant of $\\begin{pmatrix} 3 & 2 \\\\ 1 & 4 \\end{pmatrix}$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$12$" },
              { id: "b", text: "$10$" },
              { id: "c", text: "$-10$" },
              { id: "d", text: "$14$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Determinant",
                statement: "$\\det=ad-bc$",
              },
            ],
            steps: [
              {
                reasoning:
                  "Multiply the main diagonal and subtract the product of the other diagonal.",
                working: "3\\times4-2\\times1",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate.",
                working: "12-2=10",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** $10$",
            commonErrors: [
              "Adding the diagonal products to get 14.",
              "Reversing the subtraction to get $-10$.",
            ],
          },
        },
        {
          id: "aihl-u1-matrix-operations-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Find the inverse of $A=\\begin{pmatrix} 2 & 1 \\\\ 5 & 3 \\end{pmatrix}$. Enter the entries of $A^{-1}$ row by row.",
          response: {
            type: "numeric",
            parts: [
              { label: "Row 1, column 1", answer: 3 },
              { label: "Row 1, column 2", answer: -1 },
              { label: "Row 2, column 1", answer: -5 },
              { label: "Row 2, column 2", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Inverse of a $2\\times2$ matrix",
                statement:
                  "$A^{-1}=\\frac{1}{ad-bc}\\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}$",
              },
            ],
            steps: [
              {
                reasoning: "Find the determinant.",
                working: "\\det A=6-5=1",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Swap the diagonal entries and negate the off-diagonal entries.",
                working:
                  "A^{-1}=\\frac11\\begin{pmatrix} 3 & -1 \\\\ -5 & 2 \\end{pmatrix}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Simplify.",
                working:
                  "A^{-1}=\\begin{pmatrix} 3 & -1 \\\\ -5 & 2 \\end{pmatrix}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "$A^{-1}=\\begin{pmatrix} 3 & -1 \\\\ -5 & 2 \\end{pmatrix}$",
            commonErrors: [
              "Forgetting to divide by the determinant.",
              "Negating the diagonal instead of the off-diagonal entries.",
            ],
          },
        },
        {
          id: "aihl-u1-matrix-operations-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Let $A=\\begin{pmatrix} 1 & 2 \\\\ 0 & 3 \\end{pmatrix}$ and $B=\\begin{pmatrix} 4 & 1 \\\\ 2 & 5 \\end{pmatrix}$. Find $\\det(AB)$.",
          response: {
            type: "numeric",
            parts: [{ label: "$\\det(AB)$", answer: 54 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Matrix product",
                statement:
                  "Entry $(i,j)$ of $AB$ is row $i$ of $A$ times column $j$ of $B$.",
              },
              {
                kind: "property",
                name: "Product of determinants",
                statement: "$\\det(AB)=\\det A\\,\\det B$",
              },
            ],
            steps: [
              {
                reasoning: "Multiply row by column.",
                working:
                  "AB=\\begin{pmatrix} 4+4 & 1+10 \\\\ 0+6 & 0+15 \\end{pmatrix}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Simplify.",
                working:
                  "AB=\\begin{pmatrix} 8 & 11 \\\\ 6 & 15 \\end{pmatrix}",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Apply the determinant formula.",
                working: "\\det(AB)=8\\times15-11\\times6",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Evaluate. Check: $\\det A\\times\\det B=3\\times18=54$.",
                working: "120-66=54",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\det(AB)=54$",
            commonErrors: [
              "Multiplying entries position by position instead of row by column.",
            ],
            examinerNote:
              "Full marks are also awarded for $\\det A\\times\\det B=3\\times18$ with correct values.",
          },
        },
        {
          id: "aihl-u1-matrix-operations-q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 9,
          stem: "Two bakeries sell loaves and pastries. The matrix $Q=\\begin{pmatrix} 20 & 30 \\\\ 40 & 10 \\end{pmatrix}$ gives the daily sales, where row 1 is Bakery 1 and row 2 is Bakery 2, column 1 is loaves and column 2 is pastries. The prices are $\\$4$ per loaf and $\\$2.50$ per pastry, written as the column matrix $p=\\begin{pmatrix} 4 \\\\ 2.5 \\end{pmatrix}$.",
          parts: [
            {
              label: "a",
              prompt: "Calculate $Qp$ and interpret its entries.",
              marks: 2,
            },
            { label: "b", prompt: "Find $\\det Q$.", marks: 2 },
            { label: "c", prompt: "Find $Q^{-1}$.", marks: 3 },
            {
              label: "d",
              prompt:
                "Explain why the existence of $Q^{-1}$ means that the prices can be recovered from the two daily revenues.",
              marks: 2,
            },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Bakery 1 revenue (\\$)", answer: 155 },
              { label: "(a) Bakery 2 revenue (\\$)", answer: 185 },
              { label: "(b) $\\det Q$", answer: -1000 },
              {
                label: "(c) entry in row 1, column 2 of $Q^{-1}$",
                answer: 0.03,
                tolerance: 0.0005,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Matrix product",
                statement: "Entry = row times column.",
              },
              {
                kind: "formula",
                name: "Inverse",
                statement:
                  "$Q^{-1}=\\frac{1}{ad-bc}\\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}$",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Row times column for each bakery.",
                working:
                  "Qp=\\begin{pmatrix} 20(4)+30(2.5) \\\\ 40(4)+10(2.5) \\end{pmatrix}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "The entries are the daily revenues in dollars for Bakery 1 and Bakery 2.",
                working: "Qp=\\begin{pmatrix} 155 \\\\ 185 \\end{pmatrix}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Use $ad-bc$.",
                working: "\\det Q=20\\times10-30\\times40",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Evaluate.",
                working: "200-1200=-1000",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Swap the diagonal, negate the off-diagonal and divide by the determinant.",
                working:
                  "Q^{-1}=\\frac{1}{-1000}\\begin{pmatrix} 10 & -30 \\\\ -40 & 20 \\end{pmatrix}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Divide each entry by $-1000$.",
                working:
                  "Q^{-1}=\\begin{pmatrix} -0.01 & 0.03 \\\\ 0.04 & -0.02 \\end{pmatrix}",
                marks: 2,
                markCode: "A",
              },
              {
                part: "d",
                reasoning:
                  "Since $Qp=r$ and $\\det Q\\ne0$, multiply both sides by $Q^{-1}$ so $p=Q^{-1}r$.",
                working: "p=Q^{-1}\\begin{pmatrix} 155 \\\\ 185 \\end{pmatrix}",
                marks: 1,
                markCode: "R",
              },
              {
                part: "d",
                reasoning:
                  "Evaluating gives $-1.55+5.55=4$ and $6.2-3.7=2.5$, so the unique prices are recovered.",
                working: "p=\\begin{pmatrix} 4 \\\\ 2.5 \\end{pmatrix}",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "(a) $\\begin{pmatrix} 155 \\\\ 185 \\end{pmatrix}$ dollars. (b) $-1000$. (c) $\\begin{pmatrix} -0.01 & 0.03 \\\\ 0.04 & -0.02 \\end{pmatrix}$. (d) $p=Q^{-1}r$ gives a unique solution.",
            commonErrors: [
              "Writing a $2\\times2$ product with columns of $Q$ instead of rows.",
            ],
          },
        },
        {
          id: "aihl-u1-matrix-operations-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Find the determinant of $\\begin{pmatrix} 5 & 2 \\\\ 1 & 3 \\end{pmatrix}$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$-13$" },
              { id: "b", text: "$17$" },
              { id: "c", text: "$11$" },
              { id: "d", text: "$13$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Determinant",
                statement:
                  "$\\det\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}=ad-bc$",
              },
            ],
            steps: [
              {
                reasoning:
                  "Multiply the main diagonal and subtract the product of the other diagonal.",
                working: "5\\times3-2\\times1",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate.",
                working: "15-2=13",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $13$",
            commonErrors: ["Adding the diagonal products to get 17."],
          },
        },
        {
          id: "aihl-u1-matrix-operations-q6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "If $A$ is a $2\\times3$ matrix and $B$ is a $3\\times4$ matrix, the product $AB$ has size:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$2\\times3$" },
              { id: "b", text: "$2\\times4$" },
              { id: "c", text: "The product does not exist" },
              { id: "d", text: "$3\\times3$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Matrix product",
                statement:
                  "$AB$ exists when the columns of $A$ equal the rows of $B$; the result has the rows of $A$ and columns of $B$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The inner dimensions match ($3=3$), so the product exists with the outer dimensions.",
                working: "2\\times3 \\;\\&\\; 3\\times4 \\Rightarrow 2\\times4",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State the size.",
                working: "2\\times4",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $2\\times4$",
            commonErrors: [
              "Multiplying the two middle numbers or adding the dimensions.",
            ],
          },
        },
        {
          id: "aihl-u1-matrix-operations-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "The determinant of $\\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$ is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$-2$" },
              { id: "b", text: "$10$" },
              { id: "c", text: "$2$" },
              { id: "d", text: "$-1$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Determinant",
                statement: "$\\det=ad-bc$",
              },
            ],
            steps: [
              {
                reasoning: "Apply $ad-bc$.",
                working: "1\\times4-2\\times3",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate; note the sign.",
                working: "4-6=-2",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** $-2$",
            commonErrors: ["Dropping the negative sign to get 2."],
          },
        },
        {
          id: "aihl-u1-matrix-operations-q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Find the determinant of $\\begin{pmatrix} -1 & 4 \\\\ 2 & 5 \\end{pmatrix}$.",
          response: {
            type: "numeric",
            parts: [{ label: "$\\det$", answer: -13 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Determinant",
                statement: "$\\det=ad-bc$",
              },
            ],
            steps: [
              {
                reasoning: "Set up $ad-bc$ with the signed entries.",
                working: "(-1)\\times5-4\\times2",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Compute each product.",
                working: "-5-8",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate.",
                working: "-13",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$-13$",
            commonErrors: [
              "Forgetting that $(-1)\\times5=-5$, giving $-5+8=3$.",
            ],
          },
        },
        {
          id: "aihl-u1-matrix-operations-q9",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Find the inverse of $A=\\begin{pmatrix} 3 & 1 \\\\ 2 & 4 \\end{pmatrix}$. Enter the four entries of $A^{-1}$ row by row.",
          response: {
            type: "numeric",
            parts: [
              { label: "Row 1, column 1", answer: 0.4 },
              { label: "Row 1, column 2", answer: -0.1 },
              { label: "Row 2, column 1", answer: -0.2 },
              { label: "Row 2, column 2", answer: 0.3 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Inverse of a $2\\times2$ matrix",
                statement:
                  "$A^{-1}=\\frac{1}{ad-bc}\\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}$",
              },
            ],
            steps: [
              {
                reasoning: "Find the determinant.",
                working: "\\det A=12-2=10",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Swap the diagonal entries and negate the off-diagonal entries, then divide by 10.",
                working:
                  "A^{-1}=\\frac{1}{10}\\begin{pmatrix} 4 & -1 \\\\ -2 & 3 \\end{pmatrix}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Divide each entry by 10.",
                working:
                  "A^{-1}=\\begin{pmatrix} 0.4 & -0.1 \\\\ -0.2 & 0.3 \\end{pmatrix}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "$A^{-1}=\\begin{pmatrix} 0.4 & -0.1 \\\\ -0.2 & 0.3 \\end{pmatrix}$",
            commonErrors: [
              "Negating the diagonal entries instead of the off-diagonal ones.",
            ],
          },
        },
        {
          id: "aihl-u1-matrix-operations-q10",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Let $A=\\begin{pmatrix} 2 & 1 \\\\ 1 & 3 \\end{pmatrix}$. Find $A^2$.",
          response: {
            type: "numeric",
            parts: [
              { label: "Entry (1,1)", answer: 5 },
              { label: "Entry (1,2)", answer: 5 },
              { label: "Entry (2,2)", answer: 10 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Matrix product",
                statement:
                  "Entry $(i,j)$ of $A^2$ is row $i$ of $A$ times column $j$ of $A$.",
              },
            ],
            steps: [
              {
                reasoning: "Multiply row by column for each entry.",
                working:
                  "A^2=\\begin{pmatrix} 2\\times2+1\\times1 & 2\\times1+1\\times3 \\\\ 1\\times2+3\\times1 & 1\\times1+3\\times3 \\end{pmatrix}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate the products.",
                working: "=\\begin{pmatrix} 5 & 5 \\\\ 5 & 10 \\end{pmatrix}",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "State the required entries.",
                working: "(1,1)=5,\\ (1,2)=5,\\ (2,2)=10",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "$A^2=\\begin{pmatrix} 5 & 5 \\\\ 5 & 10 \\end{pmatrix}$",
            commonErrors: [
              "Squaring each entry instead of multiplying the matrix by itself.",
            ],
          },
        },
        {
          id: "aihl-u1-matrix-operations-q11",
          difficulty: "core",
          paper: "2",
          totalMarks: 7,
          stem: "Let $M=\\begin{pmatrix} 2 & -1 \\\\ 3 & 4 \\end{pmatrix}$.",
          parts: [
            { label: "a", prompt: "Find $\\det M$.", marks: 2 },
            { label: "b", prompt: "Find $M^2$.", marks: 3 },
            { label: "c", prompt: "Find $M^{-1}$.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Determinant",
                statement: "$\\det=ad-bc$",
              },
              {
                kind: "formula",
                name: "Inverse",
                statement:
                  "$M^{-1}=\\frac{1}{\\det M}\\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}$",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Apply $ad-bc$.",
                working: "\\det M=2\\times4-(-1)\\times3",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Evaluate.",
                working: "\\det M=8+3=11",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Multiply $M$ by itself, row by column.",
                working:
                  "M^2=\\begin{pmatrix} 4-3 & -2-4 \\\\ 6+12 & -3+16 \\end{pmatrix}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Simplify the entries.",
                working:
                  "M^2=\\begin{pmatrix} 1 & -6 \\\\ 18 & 13 \\end{pmatrix}",
                marks: 2,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Use the inverse formula with $\\det M=11$.",
                working:
                  "M^{-1}=\\frac{1}{11}\\begin{pmatrix} 4 & 1 \\\\ -3 & 2 \\end{pmatrix}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "State the inverse.",
                working:
                  "M^{-1}=\\begin{pmatrix} \\frac{4}{11} & \\frac{1}{11} \\\\ -\\frac{3}{11} & \\frac{2}{11} \\end{pmatrix}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) $11$ (b) $\\begin{pmatrix} 1 & -6 \\\\ 18 & 13 \\end{pmatrix}$ (c) $\\frac{1}{11}\\begin{pmatrix} 4 & 1 \\\\ -3 & 2 \\end{pmatrix}$",
            commonErrors: [
              "Sign error in $(-1)\\times3$ when finding the determinant.",
            ],
          },
        },
        {
          id: "aihl-u1-matrix-operations-q12",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Let $A=\\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$ and $B=\\begin{pmatrix} 2 & 0 \\\\ 1 & 3 \\end{pmatrix}$.",
          parts: [
            { label: "a", prompt: "Find $AB$.", marks: 3 },
            { label: "b", prompt: "Find $BA$.", marks: 3 },
            {
              label: "c",
              prompt:
                "Use your answers to explain why matrix multiplication is not commutative in general.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Matrix product",
                statement:
                  "Entry $(i,j)$ is row $i$ of the first matrix times column $j$ of the second.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Compute each entry of $AB$ by row times column.",
                working:
                  "AB=\\begin{pmatrix} 1\\times2+2\\times1 & 1\\times0+2\\times3 \\\\ 3\\times2+4\\times1 & 3\\times0+4\\times3 \\end{pmatrix}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Evaluate the first row.",
                working: "=\\begin{pmatrix} 4 & 6 \\\\ ? & ? \\end{pmatrix}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "a",
                reasoning: "Evaluate the second row.",
                working:
                  "AB=\\begin{pmatrix} 4 & 6 \\\\ 10 & 12 \\end{pmatrix}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Compute each entry of $BA$.",
                working:
                  "BA=\\begin{pmatrix} 2\\times1+0\\times3 & 2\\times2+0\\times4 \\\\ 1\\times1+3\\times3 & 1\\times2+3\\times4 \\end{pmatrix}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Evaluate all entries.",
                working:
                  "BA=\\begin{pmatrix} 2 & 4 \\\\ 10 & 14 \\end{pmatrix}",
                marks: 2,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Compare a corresponding entry, e.g. $(1,1)$: $4\\ne2$.",
                working: "(AB)_{11}=4\\ne2=(BA)_{11}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Conclude that $AB\\ne BA$, so multiplication is not commutative.",
                working: "AB\\ne BA",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "$AB=\\begin{pmatrix} 4 & 6 \\\\ 10 & 12 \\end{pmatrix}$, $BA=\\begin{pmatrix} 2 & 4 \\\\ 10 & 14 \\end{pmatrix}$, and $AB\\ne BA$.",
            commonErrors: [
              "Multiplying entries position-by-position instead of row by column.",
            ],
          },
        },
      ],
    },
    {
      id: "aihl-u1-matrix-systems",
      title: "Solving systems with inverse matrices",
      skill:
        "Write a linear system as $AX=B$ and solve it using $X=A^{-1}B$, including parameter investigations.",
      lesson: {
        sections: [
          {
            heading: "Matrix form",
            body: "The system $ax+by=e$, $cx+dy=f$ is written $AX=B$ with $A=\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}$, $X=\\begin{pmatrix} x \\\\ y \\end{pmatrix}$ and $B=\\begin{pmatrix} e \\\\ f \\end{pmatrix}$. If $\\det A\\ne0$ then $X=A^{-1}B$. The order matters: multiply by $A^{-1}$ on the left. For three or more unknowns use the GDC.",
          },
          {
            heading: "When $\\det A=0$",
            body: "If $\\det A=0$ there is no inverse. The system has either no solution (parallel lines or planes) or infinitely many (the same line). Which one occurs depends on the right-hand side $B$.",
          },
        ],
        keyFormulas: [
          {
            name: "Solution of a system",
            statement: "$AX=B \\Rightarrow X=A^{-1}B$ when $\\det A\\ne0$",
          },
        ],
        workedExample: {
          problem: "Solve $3x+y=10$, $x+2y=5$.",
          solution:
            "$A=\\begin{pmatrix} 3 & 1 \\\\ 1 & 2 \\end{pmatrix}$, $\\det A=5$, so $A^{-1}=\\frac15\\begin{pmatrix} 2 & -1 \\\\ -1 & 3 \\end{pmatrix}$. Then $X=\\frac15\\begin{pmatrix} 20-5 \\\\ -10+15 \\end{pmatrix}=\\begin{pmatrix} 3 \\\\ 1 \\end{pmatrix}$.",
        },
      },
      questions: [
        {
          id: "aihl-u1-matrix-systems-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 1,
          stem: "A system of equations is written $AX=B$, where $A$ is a non-singular square matrix. Which expression gives $X$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$B/A$" },
              { id: "b", text: "$AB^{-1}$" },
              { id: "c", text: "$BA^{-1}$" },
              { id: "d", text: "$A^{-1}B$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Left multiplication",
                statement:
                  "Multiplying both sides of $AX=B$ on the left by $A^{-1}$ gives $X=A^{-1}B$.",
              },
            ],
            steps: [
              {
                reasoning: "Pre-multiply by $A^{-1}$ so that $A^{-1}A=I$.",
                working: "A^{-1}AX=A^{-1}B \\Rightarrow X=A^{-1}B",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** $A^{-1}B$",
            commonErrors: [
              "Multiplying on the right, which is not valid since matrix multiplication is not commutative.",
            ],
          },
        },
        {
          id: "aihl-u1-matrix-systems-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Solve the system $2x+y=7$, $5x+3y=18$ using an inverse matrix.",
          response: {
            type: "numeric",
            parts: [
              { label: "$x$", answer: 3 },
              { label: "$y$", answer: 1 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Matrix solution",
                statement: "$X=A^{-1}B$ when $\\det A\\ne0$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The determinant is $6-5=1$, so the inverse is easy.",
                working:
                  "A^{-1}=\\begin{pmatrix} 3 & -1 \\\\ -5 & 2 \\end{pmatrix}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Multiply by the right-hand side.",
                working:
                  "X=\\begin{pmatrix} 3(7)-18 \\\\ -5(7)+2(18) \\end{pmatrix}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate. Check: $2(3)+1=7$ and $5(3)+3(1)=18$.",
                working: "x=3,\\; y=1",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$x=3$, $y=1$",
            commonErrors: ["Using $BA^{-1}$ instead of $A^{-1}B$."],
          },
        },
        {
          id: "aihl-u1-matrix-systems-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Solve the system, using your GDC to find an inverse matrix.\n\n$x+y+z=6$\n\n$2x-y+z=3$\n\n$x+2y-z=2$",
          response: {
            type: "numeric",
            parts: [
              { label: "$x$", answer: 1 },
              { label: "$y$", answer: 2 },
              { label: "$z$", answer: 3 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Matrix solution",
                statement: "$X=A^{-1}B$ when $\\det A\\ne0$.",
              },
            ],
            steps: [
              {
                reasoning: "Write the system in matrix form.",
                working:
                  "\\begin{pmatrix} 1 & 1 & 1 \\\\ 2 & -1 & 1 \\\\ 1 & 2 & -1 \\end{pmatrix}\\begin{pmatrix} x \\\\ y \\\\ z \\end{pmatrix}=\\begin{pmatrix} 6 \\\\ 3 \\\\ 2 \\end{pmatrix}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The determinant is $7\\ne0$, so the inverse exists.",
                working: "\\det A=7",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Compute $A^{-1}B$ on the GDC.",
                working: "X=A^{-1}B",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Read the solution. Check: $1+2+3=6$, $2-2+3=3$, $1+4-3=2$.",
                working: "x=1,\\; y=2,\\; z=3",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$x=1$, $y=2$, $z=3$",
            commonErrors: ["Entering the matrix on the GDC with a sign error."],
          },
        },
        {
          id: "aihl-u1-matrix-systems-q4",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 11,
          stem: "Consider the system of equations, where $k$ is a real constant:\n\n$x+2y=5$\n\n$3x+ky=12$",
          parts: [
            {
              label: "a",
              prompt:
                "Write the system in the form $AX=B$ and find $\\det A$ in terms of $k$.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "For $k\\ne6$, show that $x=\\dfrac{5k-24}{k-6}$ and $y=\\dfrac{-3}{k-6}$.",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "Show that the system has no solution when $k=6$, and interpret this geometrically.",
              marks: 3,
            },
            {
              label: "d",
              prompt:
                "Find the value of $k$ for which $x=2$, and the corresponding value of $y$.",
              marks: 2,
            },
            {
              label: "e",
              prompt:
                "Now the second equation is replaced by $3x+6y=c$. Find the value of $c$ for which there are infinitely many solutions.",
              marks: 1,
            },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(d) $k$", answer: 4 },
              { label: "(d) $y$", answer: 1.5 },
              { label: "(e) $c$", answer: 15 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Matrix solution",
                statement: "$X=A^{-1}B$ when $\\det A\\ne0$.",
              },
              {
                kind: "property",
                name: "Singular systems",
                statement:
                  "If $\\det A=0$, the system has no solution or infinitely many solutions.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Take coefficients as $A$ and constants as $B$.",
                working:
                  "\\begin{pmatrix} 1 & 2 \\\\ 3 & k \\end{pmatrix}\\begin{pmatrix} x \\\\ y \\end{pmatrix}=\\begin{pmatrix} 5 \\\\ 12 \\end{pmatrix}",
                marks: 1,
                markCode: "B",
              },
              {
                part: "a",
                reasoning: "Use $ad-bc$.",
                working: "\\det A=k-6",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "For $k\\ne6$, the inverse exists.",
                working:
                  "A^{-1}=\\frac{1}{k-6}\\begin{pmatrix} k & -2 \\\\ -3 & 1 \\end{pmatrix}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Multiply by $B$.",
                working:
                  "X=\\frac{1}{k-6}\\begin{pmatrix} 5k-24 \\\\ -15+12 \\end{pmatrix}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Read off $x$ and $y$ (AG).",
                working: "x=\\frac{5k-24}{k-6},\\; y=\\frac{-3}{k-6}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "When $k=6$, $\\det A=0$, so $A^{-1}$ does not exist.",
                working: "\\det A=0",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Halve the second equation: $3x+6y=12$ gives $x+2y=4$, which contradicts $x+2y=5$.",
                working: "x+2y=4 \\text{ and } x+2y=5",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "The two lines have the same gradient but different intercepts: they are parallel and distinct, so they never meet.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "d",
                reasoning: "Set $x=2$ and solve for $k$.",
                working: "5k-24=2(k-6)\\Rightarrow 3k=12\\Rightarrow k=4",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning:
                  "Substitute $k=4$ into $y$. Check: $2+3=5$ and $6+6=12$.",
                working: "y=\\frac{-3}{-2}=1.5",
                marks: 1,
                markCode: "A",
              },
              {
                part: "e",
                reasoning:
                  "The lines coincide when the second equation is $3\\times$ the first, so $c=3\\times5$.",
                working: "c=15",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) $\\det A=k-6$. (b) shown. (c) no solution; parallel distinct lines. (d) $k=4$, $y=1.5$. (e) $c=15$.",
            commonErrors: [
              "Concluding that infinitely many solutions exist whenever $\\det A=0$.",
              "Mistakes with the sign of $-3/(k-6)$.",
            ],
          },
        },
        {
          id: "aihl-u1-matrix-systems-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A system of equations is written $AX=B$, where $A$ is a non-singular square matrix. How many solutions does the system have?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It depends on $B$" },
              { id: "b", text: "Infinitely many solutions" },
              { id: "c", text: "Exactly one solution" },
              { id: "d", text: "No solution" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Matrix solution",
                statement:
                  "$X=A^{-1}B$ exists and is unique when $\\det A\\ne0$.",
              },
            ],
            steps: [
              {
                reasoning: "Since $A$ is non-singular, $A^{-1}$ exists.",
                working: "X=A^{-1}B",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The product is a single matrix, so there is exactly one solution.",
                working: "\\text{unique solution}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** Exactly one solution",
            commonErrors: [
              "Thinking the number of solutions depends on $B$ — it does not when $\\det A\\ne0$.",
            ],
          },
        },
        {
          id: "aihl-u1-matrix-systems-q6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Solve the system $x+y=5$, $x-y=1$. What is the value of $x$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$4$" },
              { id: "b", text: "$1$" },
              { id: "c", text: "$2$" },
              { id: "d", text: "$3$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Elimination",
                statement:
                  "Add or subtract the equations to eliminate one variable.",
              },
            ],
            steps: [
              {
                reasoning: "Add the two equations to eliminate $y$.",
                working: "2x=6",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Solve for $x$.",
                working: "x=3",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** $x=3$",
            commonErrors: [
              "Subtracting the equations in the wrong order and losing a sign.",
            ],
          },
        },
        {
          id: "aihl-u1-matrix-systems-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Solve the system $2x+3y=12$, $x+2y=7$. What is the value of $y$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$2$" },
              { id: "b", text: "$1$" },
              { id: "c", text: "$3$" },
              { id: "d", text: "$4$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Elimination",
                statement:
                  "Multiply one equation so a variable can be eliminated.",
              },
            ],
            steps: [
              {
                reasoning:
                  "From the second equation $x=7-2y$; substitute into the first.",
                working: "2(7-2y)+3y=12",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Solve: $14-y=12$, so $y=2$.",
                working: "y=2",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** $y=2$",
            commonErrors: ["Substituting $x=7-2y$ incorrectly as $x=7+2y$."],
          },
        },
        {
          id: "aihl-u1-matrix-systems-q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Solve the system $3x-y=7$, $2x+2y=10$.",
          response: {
            type: "numeric",
            parts: [
              { label: "$x$", answer: 3 },
              { label: "$y$", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Matrix solution",
                statement: "$X=A^{-1}B$ when $\\det A\\ne0$.",
              },
            ],
            steps: [
              {
                reasoning: "Simplify the second equation to $x+y=5$.",
                working: "x+y=5",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Add it to $3x-y=7$ to eliminate $y$.",
                working: "4x=12\\Rightarrow x=3",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Back-substitute and check: $9-2=7$ and $6+4=10$.",
                working: "y=2",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$x=3$, $y=2$",
            commonErrors: [
              "Forgetting to halve both sides of $2x+2y=10$ before eliminating.",
            ],
          },
        },
        {
          id: "aihl-u1-matrix-systems-q9",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Solve the system $5x-2y=8$, $3x+2y=8$.",
          response: {
            type: "numeric",
            parts: [
              { label: "$x$", answer: 2 },
              { label: "$y$", answer: 1 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Matrix solution",
                statement: "$X=A^{-1}B$ when $\\det A\\ne0$.",
              },
            ],
            steps: [
              {
                reasoning: "Add the equations to eliminate $y$.",
                working: "8x=16",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Solve for $x$.",
                working: "x=2",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Substitute: $10-2y=8$, so $y=1$. Check: $6+2=8$.",
                working: "y=1",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$x=2$, $y=1$",
            commonErrors: ["Sign slip when moving $-2y$ across the equation."],
          },
        },
        {
          id: "aihl-u1-matrix-systems-q10",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Solve the system using your GDC or elimination.\n\n$x+y=3$\n\n$y+z=5$\n\n$x+z=4$",
          response: {
            type: "numeric",
            parts: [
              { label: "$x$", answer: 1 },
              { label: "$y$", answer: 2 },
              { label: "$z$", answer: 3 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Matrix solution",
                statement:
                  "Three equations in three unknowns can be solved as $AX=B$ using the GDC.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Add all three equations: each variable appears twice.",
                working: "2x+2y+2z=12\\Rightarrow x+y+z=6",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Subtract each original equation from this sum.",
                working: "z=3,\\ x=1,\\ y=2",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State all three values.",
                working: "x=1,\\ y=2,\\ z=3",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Check: $1+2=3$, $2+3=5$, $1+3=4$.",
                working: "\\text{all satisfied}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$x=1$, $y=2$, $z=3$",
            commonErrors: [
              "Forgetting that adding the equations counts each variable twice.",
            ],
          },
        },
        {
          id: "aihl-u1-matrix-systems-q11",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 7,
          stem: "Consider the system of equations:\n\n$2x+y=5$\n\n$4x+2y=10$",
          parts: [
            {
              label: "a",
              prompt: "Write the system in the form $AX=B$ and find $\\det A$.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Explain why the system has infinitely many solutions.",
              marks: 3,
            },
            { label: "c", prompt: "Find $x$ in terms of $y$.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Singular systems",
                statement:
                  "If $\\det A=0$, the system has no solution or infinitely many solutions.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Take the coefficients as $A$ and the constants as $B$.",
                working:
                  "\\begin{pmatrix} 2 & 1 \\\\ 4 & 2 \\end{pmatrix}\\begin{pmatrix} x \\\\ y \\end{pmatrix}=\\begin{pmatrix} 5 \\\\ 10 \\end{pmatrix}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Compute the determinant.",
                working: "\\det A=4-4=0",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Since $\\det A=0$, $A^{-1}$ does not exist.",
                working: "\\det A=0",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "The second equation is exactly twice the first.",
                working: "4x+2y=2(2x+y)",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Both equations describe the same line, so every point on it is a solution.",
                working: "\\text{infinitely many solutions}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Rearrange the first equation.",
                working: "x=\\frac{5-y}{2}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "State the relation.",
                working: "x=\\frac{5-y}{2}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) $\\det A=0$ (b) infinitely many solutions — the equations are identical (c) $x=\\frac{5-y}{2}$",
            commonErrors: [
              "Concluding there is no solution just because $\\det A=0$ — here the equations coincide.",
            ],
          },
        },
        {
          id: "aihl-u1-matrix-systems-q12",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 11,
          stem: "Consider the system of equations, where $k$ is a real constant:\n\n$x+ky=3$\n\n$2x+4y=6$",
          parts: [
            {
              label: "a",
              prompt:
                "Write the system in the form $AX=B$ and find $\\det A$ in terms of $k$.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Show that for $k\\ne2$ the solution is $x=3$ and $y=0$.",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "Describe the solutions when $k=2$ and interpret this geometrically.",
              marks: 3,
            },
            {
              label: "d",
              prompt:
                "The second equation is replaced by $2x+4y=c$. Find the value of $c$ for which there are infinitely many solutions, and state the condition on $c$ for there to be no solution.",
              marks: 3,
            },
          ],
          response: {
            type: "numeric",
            parts: [
              {
                label: "(d) value of $c$ for infinitely many solutions",
                answer: 6,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Matrix solution",
                statement: "$X=A^{-1}B$ when $\\det A\\ne0$.",
              },
              {
                kind: "property",
                name: "Singular systems",
                statement:
                  "If $\\det A=0$, the system has no solution or infinitely many solutions.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Take coefficients as $A$ and constants as $B$.",
                working:
                  "\\begin{pmatrix} 1 & k \\\\ 2 & 4 \\end{pmatrix}\\begin{pmatrix} x \\\\ y \\end{pmatrix}=\\begin{pmatrix} 3 \\\\ 6 \\end{pmatrix}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Compute the determinant.",
                working: "\\det A=4-2k",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "For $k\\ne2$, $\\det A\\ne0$ so the inverse exists.",
                working:
                  "A^{-1}=\\frac{1}{4-2k}\\begin{pmatrix} 4 & -k \\\\ -2 & 1 \\end{pmatrix}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Multiply by $B$.",
                working:
                  "X=\\frac{1}{4-2k}\\begin{pmatrix} 12-6k \\\\ -6+6 \\end{pmatrix}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Since $12-6k=3(4-2k)$ and the second entry is 0, $x=3$, $y=0$ for all $k\\ne2$ (AG).",
                working: "x=3,\\ y=0",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "When $k=2$, $\\det A=0$ so there is no inverse.",
                working: "\\det A=0",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Both equations become $x+2y=3$, so they are identical.",
                working: "x+2y=3\\ \\text{twice}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "The lines coincide, giving infinitely many solutions.",
                working: "\\text{infinitely many solutions}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning:
                  "For coincident lines the second equation must be twice the first: $c=2\\times3$.",
                working: "c=6",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "So $c=6$ gives infinitely many solutions.",
                working: "c=6\\Rightarrow\\text{infinite}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning:
                  "Any other $c$ makes the lines parallel and distinct, so there is no solution when $c\\ne6$.",
                working: "c\\ne6\\Rightarrow\\text{no solution}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) $\\det A=4-2k$ (b) shown (c) infinitely many solutions; coincident lines (d) $c=6$; no solution when $c\\ne6$",
            commonErrors: [
              "Assuming $\\det A=0$ always means no solution.",
              "Forgetting that the second equation is $2\\times$ the first when finding $c$.",
            ],
          },
        },
      ],
    },
  ],
};
