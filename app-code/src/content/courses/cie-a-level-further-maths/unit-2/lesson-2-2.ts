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
            { id: "a", text: "6" },
            { id: "b", text: "7" },
            { id: "c", text: "1" },
            { id: "d", text: "5" },
          ], correctChoiceId: "d" },
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
        {
          id: "cialfm-u2-s2-tq-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The system $AX=B$ has a unique solution when…",
          response: { type: "mcq", choices: [
            { id: "a", "text": "Always" },
            { id: "b", text: "$\\det A = 0$" },
            { id: "c", text: "$\\det A \\neq 0$" },
            { id: "d", text: "$B=0$" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "theorem", name: "Unique solution", statement: "$\\det A \\neq 0$ ⇒ unique solution." }],
            steps: [{ reasoning: "Nonzero determinant guarantees a unique solution.", marks: 1, markCode: "A" }],
            finalAnswer: "$\\det A \\neq 0$",
          },
        },
        {
          id: "cialfm-u2-s2-tq-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Solve $x+y=5$ and $x-y=1$.",
          response: { type: "numeric", parts: [
            { label: "a", answer: 3 }, { label: "b", answer: 2 },
          ] },
          markscheme: {
            principles: [{ kind: "technique", name: "Elimination", statement: "Add and subtract equations." }],
            steps: [
              { reasoning: "Add: $2x=6$ → $x=3$; subtract: $2y=4$ → $y=2$.", marks: 1, markCode: "M" },
              { reasoning: "Answers: $x=3$, $y=2$.", marks: 1, markCode: "A" }],
            finalAnswer: "$x=3, y=2$",
          },
        },
        {
          id: "cialfm-u2-s2-tq-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "For the system with coefficient matrix $A=\\begin{pmatrix}2&3\\\\1&4\\end{pmatrix}$, find $\\det A$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 5 }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Determinant", statement: "$ad-bc$." }],
            steps: [
              { reasoning: "$\\det A = 2\\times4 - 3\\times1 = 5$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 5.", marks: 1, markCode: "A" }],
            finalAnswer: "5",
          },
        },
        {
          id: "cialfm-u2-s2-tq-q8",
          difficulty: "core",
          totalMarks: 4,
          stem: "Solve $2x+y=7$, $x+2y=8$ using the matrix method.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Matrix solve", statement: "$X=A^{-1}B$." }],
            steps: [
              { reasoning: "$A=\\begin{pmatrix}2&1\\\\1&2\\end{pmatrix}$, $\\det A=3$, $A^{-1}=\\frac13\\begin{pmatrix}2&-1\\\\-1&2\\end{pmatrix}$.", marks: 1, markCode: "M" },
              { reasoning: "$X=\\frac13\\begin{pmatrix}14-8\\\\-7+16\\end{pmatrix}=\\frac13\\begin{pmatrix}6\\\\9\\end{pmatrix}$.", marks: 1, markCode: "M" },
              { reasoning: "$x=2$, $y=3$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $x=2, y=3$.", marks: 1, markCode: "A" }],
            finalAnswer: "$x=2, y=3$",
          },
        },
        {
          id: "cialfm-u2-s2-tq-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "If $\\det A = 0$ for a 2×2 system $AX=B$, the system may have…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Zero solutions only" },
            { id: "b", text: "No solution or infinitely many solutions" },
            { id: "c", text: "Exactly two solutions" },
            { id: "d", text: "A unique solution" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "property", name: "Singular system", statement: "$\\det A = 0$ ⇒ investigate consistency." }],
            steps: [{ reasoning: "Singular systems are either inconsistent or have infinitely many solutions.", marks: 1, markCode: "A" }],
            finalAnswer: "No solution or infinitely many",
          },
        },
        {
          id: "cialfm-u2-s2-tq-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In the matrix equation $AX=B$ for a system of equations, $B$ is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "The column vector of constants" },
            { id: "b", text: "The coefficient matrix" },
            { id: "c", text: "The identity matrix" },
            { id: "d", text: "The unknown vector" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "System form", statement: "$A$ coefficients, $X$ unknowns, $B$ constants." }],
            steps: [{ reasoning: "$B$ holds the right-hand side constants.", marks: 1, markCode: "A" }],
            finalAnswer: "Column vector of constants",
          },
        },
        {
          id: "cialfm-u2-s2-tq-q11",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Show that $x+y=3$ and $2x+2y=5$ has no solution.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "property", name: "Inconsistent system", statement: "Parallel equations conflict." }],
            steps: [
              { reasoning: "Coefficient matrix $\\begin{pmatrix}1&1\\\\2&2\\end{pmatrix}$ has $\\det = 0$ — singular.", marks: 1, markCode: "M" },
              { reasoning: "Doubling the first equation gives $2x+2y=6$, but the second requires $=5$.", marks: 1, markCode: "M" },
              { reasoning: "Contradiction: no $(x,y)$ satisfies both.", marks: 1, markCode: "M" },
              { reasoning: "Answer: no solution.", marks: 1, markCode: "A" }],
            finalAnswer: "No solution",
          },
        },
        {
          id: "cialfm-u2-s2-tq-q12",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Find the value of $k$ for which $kx+2y=4$, $3x+6y=12$ has infinitely many solutions.",
          response: { type: "numeric", parts: [{ label: "a", answer: 1 }] },
          markscheme: {
            principles: [{ kind: "property", name: "Infinite solutions", statement: "Rows proportional and consistent." }],
            steps: [
              { reasoning: "Need $\\det A = 0$: $6k - 6 = 0$ → $k=1$.", marks: 1, markCode: "M" },
              { reasoning: "Check consistency: second equation is $3\\times$ first when $k=1$: $3(x+2y)=12$ ✓.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $k=1$.", marks: 1, markCode: "A" }],
            finalAnswer: "1",
          },
        },
        {
          id: "cialfm-u2-s2-tq-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "The solution of $\\begin{pmatrix}a&b\\\\c&d\\end{pmatrix}X=\\begin{pmatrix}e\\\\f\\end{pmatrix}$ is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$X=BA^{-1}$" },
            { id: "b", text: "$X=B-A$" },
            { id: "c", text: "$X=A^{-1}B$" },
            { id: "d", text: "$X=AB$" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "formula", name: "Solution", statement: "$X=A^{-1}B$." }],
            steps: [{ reasoning: "Multiply both sides by $A^{-1}$.", marks: 1, markCode: "A" }],
            finalAnswer: "$X=A^{-1}B$",
          },
        },
        {
          id: "cialfm-u2-s2-tq-q14",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Solve $x-y=1$ and $x+y=5$.",
          response: { type: "numeric", parts: [
            { label: "a", answer: 3 }, { label: "b", answer: 2 },
          ] },
          markscheme: {
            principles: [{ kind: "technique", name: "Elimination", statement: "Add the equations." }],
            steps: [
              { reasoning: "Add: $2x=6$ → $x=3$; then $y=2$.", marks: 1, markCode: "M" },
              { reasoning: "Answers: $x=3$, $y=2$.", marks: 1, markCode: "A" }],
            finalAnswer: "$x=3, y=2$",
          },
        },
        {
          id: "cialfm-u2-s2-tq-q15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A 2×2 system $AX=B$ has infinitely many solutions only when…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\det A = 0$ and the equations are consistent" },
            { id: "b", text: "$\\det A \\neq 0$" },
            { id: "c", text: "$A=I$" },
            { id: "d", text: "$B=0$" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "property", name: "Infinite solutions", statement: "Singular and consistent." }],
            steps: [{ reasoning: "Need $\\det=0$ plus consistency (one equation a multiple of the other).", marks: 1, markCode: "A" }],
            finalAnswer: "$\\det A = 0$ and consistent",
          },
        },
        {
          id: "cialfm-u2-s2-tq-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Let $A=\\begin{pmatrix}2&1\\\\1&1\\end{pmatrix}$ and $B=\\begin{pmatrix}5\\\\3\\end{pmatrix}$ for the system $AX=B$.",
          parts: [
            { label: "a", prompt: "Find $\\det A$.", marks: 1 },
            { label: "b", prompt: "Hence solve for $X$.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Inverse solve", statement: "$X=A^{-1}B$." }],
            steps: [
              { reasoning: "$\\det A = 2-1 = 1$.", marks: 1, markCode: "M", part: "a" },
              { reasoning: "$A^{-1}=\\begin{pmatrix}1&-1\\\\-1&2\\end{pmatrix}$.", marks: 1, markCode: "M", part: "b" },
              { reasoning: "$X=\\begin{pmatrix}5-3\\\\-5+6\\end{pmatrix}=\\begin{pmatrix}2\\\\1\\end{pmatrix}$.", marks: 1, markCode: "M", part: "b" },
              { reasoning: "Answer: $x=2$, $y=1$.", marks: 1, markCode: "A", part: "b" }],
            finalAnswer: "$\\det A = 1$; $x=2, y=1$",
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
            { id: "a", text: "Sum of diagonal entries" },
            { id: "b", text: "Product of diagonal entries" },
            { id: "c", text: "Zero" },
            { id: "d", text: "1" },
          ], correctChoiceId: "b" },
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
        {
          id: "cialfm-u2-s2-3q-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The determinant of a triangular 3×3 matrix equals…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Always zero" },
            { id: "b", text: "The sum of all entries" },
            { id: "c", text: "The product of the diagonal entries" },
            { id: "d", text: "The trace" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "property", name: "Triangular determinant", statement: "Product of diagonal." }],
            steps: [{ reasoning: "Expansion leaves only diagonal product.", marks: 1, markCode: "A" }],
            finalAnswer: "Product of diagonal",
          },
        },
        {
          id: "cialfm-u2-s2-3q-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Find $\\det\\begin{pmatrix}2&1&3\\\\0&4&5\\\\0&0&1\\end{pmatrix}$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 8 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Triangular det", statement: "Multiply diagonal entries." }],
            steps: [
              { reasoning: "Upper triangular: $2\\times4\\times1 = 8$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 8.", marks: 1, markCode: "A" }],
            finalAnswer: "8",
          },
        },
        {
          id: "cialfm-u2-s2-3q-q7",
          difficulty: "core",
          totalMarks: 3,
          stem: "Find $\\det\\begin{pmatrix}1&0&2\\\\3&1&0\\\\0&2&1\\end{pmatrix}$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 13 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Cofactor expansion", statement: "$a(ei-fh)-b(di-fg)+c(dh-eg)$." }],
            steps: [
              { reasoning: "Expand along first row: $1(1\\times1-0\\times2) - 0 + 2(3\\times2-1\\times0)$.", marks: 1, markCode: "M" },
              { reasoning: "$= 1 + 12 = 13$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 13.", marks: 1, markCode: "A" }],
            finalAnswer: "13",
          },
        },
        {
          id: "cialfm-u2-s2-3q-q8",
          difficulty: "core",
          totalMarks: 4,
          stem: "Solve $2x+y+z=9$, $x+2y+z=8$, $x+y+2z=7$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "3×3 elimination", statement: "Subtract pairs of equations." }],
            steps: [
              { reasoning: "Eq1 − eq2: $x - y = 1$; eq2 − eq3: $y - z = 1$.", marks: 1, markCode: "M" },
              { reasoning: "So $x = y+1$ and $z = y-1$; substitute into eq1.", marks: 1, markCode: "M" },
              { reasoning: "$2(y+1) + y + (y-1) = 9$ → $4y = 8$ → $y=2$, hence $x=3$, $z=1$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $x=3, y=2, z=1$ (check: $6+2+1=9$, $3+4+1=8$, $3+2+2=7$).", marks: 1, markCode: "A" }],
            finalAnswer: "$x=3, y=2, z=1$",
          },
        },
        {
          id: "cialfm-u2-s2-3q-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "The adjugate of a matrix is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Its cofactor matrix" },
            { id: "b", text: "Its inverse" },
            { id: "c", text: "The transpose of its cofactor matrix" },
            { id: "d", text: "Its transpose" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Adjugate", statement: "Transpose of cofactor matrix." }],
            steps: [{ reasoning: "adj$(A)$ = transpose of cofactor matrix.", marks: 1, markCode: "A" }],
            finalAnswer: "Transpose of cofactor matrix",
          },
        },
        {
          id: "cialfm-u2-s2-3q-q10",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Find $\\det\\begin{pmatrix}0&1&0\\\\0&0&1\\\\1&0&0\\end{pmatrix}$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 1 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Permutation determinant", statement: "Expand along a row." }],
            steps: [
              { reasoning: "Expand along first row: only $b=1$ term survives: $-1\\times\\det\\begin{pmatrix}0&1\\\\1&0\\end{pmatrix} = -1\\times(-1) = 1$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 1.", marks: 1, markCode: "A" }],
            finalAnswer: "1",
          },
        },
        {
          id: "cialfm-u2-s2-3q-q11",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Show that $x+y+z=1$, $2x+2y+2z=2$, $x-y+z=0$ has infinitely many solutions.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "property", name: "Dependent equations", statement: "One equation is a multiple of another." }],
            steps: [
              { reasoning: "Second equation is exactly $2\\times$ the first: consistent.", marks: 1, markCode: "M" },
              { reasoning: "Coefficient matrix is singular — rows 1 and 2 proportional.", marks: 1, markCode: "M" },
              { reasoning: "One degree of freedom remains: let $z=t$, solve $x,y$ in terms of $t$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: infinitely many solutions.", marks: 1, markCode: "A" }],
            finalAnswer: "Infinitely many solutions",
          },
        },
        {
          id: "cialfm-u2-s2-3q-q12",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Find a value of $k$ for which $\\begin{pmatrix}k&1&0\\\\1&k&0\\\\0&0&1\\end{pmatrix}$ is singular.",
          response: { type: "numeric", parts: [{ label: "a", answer: 1 }] },
          markscheme: {
            principles: [{ kind: "property", name: "Singular", statement: "$\\det = 0$." }],
            steps: [
              { reasoning: "$\\det = k^2 - 1 = 0$ → $k = \\pm 1$.", marks: 1, markCode: "M" },
              { reasoning: "Any valid value accepted; e.g. $k=1$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $k=\\pm1$ (e.g. 1).", marks: 1, markCode: "A" }],
            finalAnswer: "1",
          },
        },
        {
          id: "cialfm-u2-s2-3q-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "Before solving a 3×3 system $AX=B$, you should first check that…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\det A \\neq 0$" },
            { id: "b", text: "$\\det A = 0$" },
            { id: "c", text: "$A$ is symmetric" },
            { id: "d", text: "$B$ is diagonal" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "theorem", name: "Unique solution", statement: "Nonzero determinant required." }],
            steps: [{ reasoning: "Unique solution exists iff $\\det A \\neq 0$.", marks: 1, markCode: "A" }],
            finalAnswer: "$\\det A \\neq 0$",
          },
        },
        {
          id: "cialfm-u2-s2-3q-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The determinant of $\\begin{pmatrix}2&0&0\\\\1&3&0\\\\4&5&1\\end{pmatrix}$ is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "0" },
            { id: "b", text: "10" },
            { id: "c", text: "6" },
            { id: "d", text: "30" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "property", name: "Lower triangular det", statement: "Product of diagonal." }],
            steps: [{ reasoning: "$2\\times3\\times1 = 6$.", marks: 1, markCode: "A" }],
            finalAnswer: "6",
          },
        },
        {
          id: "cialfm-u2-s2-3q-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "A 3×3 system has a unique solution when…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\det A \\neq 0$" },
            { id: "b", text: "$\\det A = 0$" },
            { id: "c", text: "Always" },
            { id: "d", text: "When $B=0$" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "theorem", name: "Unique solution", statement: "$\\det A \\neq 0$ ⇒ unique." }],
            steps: [{ reasoning: "Invertibility gives exactly one solution.", marks: 1, markCode: "A" }],
            finalAnswer: "$\\det A \\neq 0$",
          },
        },
        {
          id: "cialfm-u2-s2-3q-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Consider $A=\\begin{pmatrix}1&2&3\\\\4&5&6\\\\7&8&9\\end{pmatrix}$ for a system $AX=B$.",
          parts: [
            { label: "a", prompt: "Find $\\det A$.", marks: 2 },
            { label: "b", prompt: "State what this implies about the number of solutions.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Singular detection", statement: "Row dependence ⇒ $\\det=0$." }],
            steps: [
              { reasoning: "Row 3 − row 2 = $(3,3,3)$ = row 2 − row 1: rows are dependent.", marks: 1, markCode: "M", part: "a" },
              { reasoning: "$\\det A = 0$.", marks: 1, markCode: "A", part: "a" },
              { reasoning: "Singular ⇒ no unique solution.", marks: 1, markCode: "M", part: "b" },
              { reasoning: "Either no solution or infinitely many, depending on $B$.", marks: 1, markCode: "A", part: "b" }],
            finalAnswer: "$\\det A = 0$; no unique solution",
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
