import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "cialfm-u2-lesson-2-2",
  code: "2-2",
  title: "Solving systems with matrices",
  goal: "I CAN solve systems of linear equations using matrices.",
  standards: ["9231 P1: matrices — systems of equations"],
  vocabulary: [
    { term: "Coefficient matrix", definition: "Matrix of coefficients in a system $AX=B$." },
    { term: "Unique solution", definition: "Exactly one solution; occurs when $\\det A \\neq 0$." },
    { term: "No solution", definition: "Inconsistent system; occurs when $\\det A = 0$ and equations conflict." },
    { term: "Infinite solutions", definition: "Dependent system; equations are multiples." },
  ],
  concepts: [
    {
      id: "cialfm-u2-s2-2x2",
      title: "Two equations, two unknowns",
      skill: "Solve 2×2 systems via matrix inverse.",
      lesson: {
        sections: [
          {
            heading: "Setting up",
            body: "Write equations as $AX = B$ where $X=\\begin{pmatrix}x\\\\y\\end{pmatrix}$. If $\\det A \\neq 0$, unique solution $X=A^{-1}B$.",
          },
          {
            heading: "Determinant check",
            body: "Compute $\\det A$ first. If zero, investigate consistency separately — may have no or infinite solutions.",
          },
        ],
        keyFormulas: [
          { name: "Solution", statement: "$X = A^{-1}B$" },
        ],
        workedExample: {
          problem: "Solve $2x+y=5$, $x+3y=10$.",
          solution: "$A=\\begin{pmatrix}2&1\\\\1&3\\end{pmatrix}$, $\\det=5$; $X=A^{-1}B$ gives $x=1, y=3$.",
        },
      },
      questions: [
        {
          id: "cialfm-u2-s2-tq-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "For $\\begin{pmatrix}2&1\\\\1&3\\end{pmatrix}$ the determinant is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "5" }, { id: "b", text: "7" }, { id: "c", text: "6" }, { id: "d", text: "1" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "formula", name: "Determinant", statement: "$ad-bc$." }],
            steps: [{ reasoning: "$6-1=5$.", marks: 1, markCode: "A" }],
            finalAnswer: "5",
          },
        },
        {
          id: "cialfm-u2-s2-tq-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Solve $x+y=4$, $x-y=2$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Quick solve", statement: "Add/subtract equations." }],
            steps: [
              { reasoning: "Add: $2x=6$ → $x=3$; subtract: $2y=2$ → $y=1$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $x=3, y=1$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x=3, y=1$",
          },
        },
        {
          id: "cialfm-u2-s2-tq-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Solve $3x+2y=12$, $x-y=1$ using matrices.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Matrix solve", statement: "$X=A^{-1}B$." }],
            steps: [
              { reasoning: "$A=\\begin{pmatrix}3&2\\\\1&-1\\end{pmatrix}$, $\\det=-5$, $A^{-1}=-\\frac15\\begin{pmatrix}-1&-2\\\\-1&3\\end{pmatrix}$.", marks: 1, markCode: "M" },
              { reasoning: "$X = -\\frac15\\begin{pmatrix}-1&-2\\\\-1&3\\end{pmatrix}\\begin{pmatrix}12\\\\1\\end{pmatrix} = \\begin{pmatrix}2\\\\1\\end{pmatrix}$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $x=2, y=1$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x=2, y=1$",
          },
        },
        {
          id: "cialfm-u2-s2-tq-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "$\\begin{pmatrix}1&2\\\\2&4\\end{pmatrix}\\begin{pmatrix}x\\\\y\\end{pmatrix}=\\begin{pmatrix}3\\\\6\\end{pmatrix}$. How many solutions?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "property", name: "Singular system", statement: "$\\det=0$ → check consistency." }],
            steps: [
              { reasoning: "$\\det A = 4-4 = 0$ → singular.", marks: 1, markCode: "M" },
              { reasoning: "Second equation is $2\\times$ first: $2x+4y=6$ vs $2(3)=6$ — consistent.", marks: 1, markCode: "M" },
              { reasoning: "Infinitely many solutions on the line $x+2y=3$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: infinite solutions.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Infinite solutions",
          },
        },
      ],
    },
    {
      id: "cialfm-u2-s2-3x3",
      title: "Three equations, three unknowns",
      skill: "Solve 3×3 systems via inverse matrices.",
      lesson: {
        sections: [
          {
            heading: "3×3 inverse",
            body: "For $A=\\begin{pmatrix}a&b&c\\\\d&e&f\\\\g&h&i\\end{pmatrix}$, $A^{-1}=\\frac{1}{\\det A}\\text{adj}(A)$. Find $\\det A$ by first-row expansion.",
          },
          {
            heading: "Strategy",
            body: "Compute determinant first. If nonzero, find adjugate (transpose of cofactor matrix) and multiply by $B$.",
          },
        ],
        keyFormulas: [
          { name: "3×3 determinant", statement: "$a(ei-fh)-b(di-fg)+c(dh-eg)$" },
        ],
        workedExample: {
          problem: "Find $\\det\\begin{pmatrix}1&0&0\\\\0&2&0\\\\0&0&3\\end{pmatrix}$.",
          solution: "Diagonal matrix: $\\det = 1\\times2\\times3 = 6$.",
        },
      },
      questions: [
        {
          id: "cialfm-u2-s2-3q-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The determinant of a diagonal matrix is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Product of diagonal entries" }, { id: "b", text: "Sum of diagonal entries" }, { id: "c", text: "Zero" }, { id: "d", text: "1" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "property", name: "Diagonal det", statement: "Product of diagonals." }],
            steps: [{ reasoning: "Det = product of diagonal entries.", marks: 1, markCode: "A" }],
            finalAnswer: "Product of diagonal",
          },
        },
        {
          id: "cialfm-u2-s2-3q-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Find $\\det\\begin{pmatrix}2&0&0\\\\0&3&0\\\\0&0&4\\end{pmatrix}$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 24 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Diagonal det", statement: "Multiply diagonals." }],
            steps: [
              { reasoning: "$2 \\times 3 \\times 4 = 24$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 24.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "24",
          },
        },
        {
          id: "cialfm-u2-s2-3q-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Find $\\det\\begin{pmatrix}1&2&0\\\\0&1&3\\\\0&0&1\\end{pmatrix}$ (upper triangular).",
          response: { type: "numeric", parts: [{ label: "a", answer: 1 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Triangular det", statement: "Product of diagonal." }],
            steps: [
              { reasoning: "Upper triangular: $\\det = 1\\times1\\times1 = 1$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 1.", marks: 1, markCode: "M" },
              { reasoning: "Expansion confirms.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1",
          },
        },
        {
          id: "cialfm-u2-s2-3q-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Solve $x+y+z=6$, $x-y+z=2$, $x+y-z=0$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "3×3 system", statement: "Elimination or inverse." }],
            steps: [
              { reasoning: "Add eq1+eq2: $2x+2z=8$ → $x+z=4$.", marks: 1, markCode: "M" },
              { reasoning: "Eq1−eq3: $2z=6$ → $z=3$; then $x=1$.", marks: 1, markCode: "M" },
              { reasoning: "From eq1: $y=2$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $x=1, y=2, z=3$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x=1, y=2, z=3$",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cialfm-u2-s2-sys-notes",
      title: "Systems of equations — revision notes",
      summary: "$AX=B$, determinant checks, unique/infinite/no solutions.",
      sections: [
        { heading: "2×2", body: "$X=A^{-1}B$ when $\\det\\neq0$. Singular → check if consistent." },
        { heading: "3×3", body: "Same principle; elimination often faster than full inverse." },
      ],
    },
  ],
};
