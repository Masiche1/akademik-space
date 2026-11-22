import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "aihl-u1-lesson-1-3",
  code: "1-3",
  title: "Eigenvalues and Eigenvectors",
  goal: "I CAN find eigenvalues and eigenvectors of $2\\times2$ matrices and use diagonalization to compute matrix powers in applications.",
  standards: ["AHL 1.15"],
  vocabulary: [
    {
      term: "Eigenvector",
      definition:
        "A non-zero vector $\\boldsymbol{v}$ such that $A\\boldsymbol{v}=\\lambda\\boldsymbol{v}$ for some scalar $\\lambda$.",
    },
    {
      term: "Eigenvalue",
      definition:
        "The scalar $\\lambda$ by which an eigenvector is scaled when multiplied by $A$.",
    },
    {
      term: "Characteristic polynomial",
      definition:
        "The polynomial $\\det(A-\\lambda I)$, whose roots are the eigenvalues of $A$.",
    },
    {
      term: "Diagonalization",
      definition:
        "Writing $A=PDP^{-1}$, where $D$ is diagonal with the eigenvalues and the columns of $P$ are eigenvectors.",
    },
    {
      term: "Trace",
      definition:
        "The sum of the diagonal entries of a square matrix; it equals the sum of the eigenvalues.",
    },
  ],
  concepts: [
    {
      id: "aihl-u1-eigenvalues",
      title: "Eigenvalues and eigenvectors of $2\\times2$ matrices",
      skill:
        "Solve the characteristic equation to find eigenvalues, then find the corresponding eigenvectors.",
      lesson: {
        sections: [
          {
            heading: "The characteristic equation",
            body: "An eigenvector satisfies $A\\boldsymbol{v}=\\lambda\\boldsymbol{v}$, so $(A-\\lambda I)\\boldsymbol{v}=\\boldsymbol{0}$ with $\\boldsymbol{v}\\ne\\boldsymbol{0}$. This requires $A-\\lambda I$ to be singular, so $\\det(A-\\lambda I)=0$. For a $2\\times2$ matrix this is $\\lambda^2-(\\text{trace})\\lambda+\\det A=0$. The GDC can solve it.",
          },
          {
            heading: "Finding eigenvectors",
            body: "For each eigenvalue, solve $(A-\\lambda I)\\boldsymbol{v}=\\boldsymbol{0}$. The two equations are multiples of each other, so you obtain one direction; any non-zero multiple is also an eigenvector. A matrix transformation leaves the line through an eigenvector in the same direction, only stretching it by $\\lambda$.",
          },
        ],
        keyFormulas: [
          {
            name: "Characteristic equation",
            statement: "$\\det(A-\\lambda I)=0$",
          },
          {
            name: "$2\\times2$ shortcut",
            statement: "$\\lambda^2-(a+d)\\lambda+(ad-bc)=0$",
          },
        ],
        workedExample: {
          problem:
            "Find the eigenvalues and an eigenvector for the larger eigenvalue of $A=\\begin{pmatrix} 4 & 1 \\\\ 2 & 3 \\end{pmatrix}$.",
          solution:
            "Trace $=7$, $\\det A=10$, so $\\lambda^2-7\\lambda+10=0$ and $\\lambda=2$ or $5$. For $\\lambda=5$: $\\begin{pmatrix} -1 & 1 \\\\ 2 & -2 \\end{pmatrix}\\begin{pmatrix} x \\\\ y \\end{pmatrix}=\\boldsymbol 0$ gives $y=x$, so an eigenvector is $\\begin{pmatrix} 1 \\\\ 1 \\end{pmatrix}$.",
        },
      },
      questions: [
        {
          id: "aihl-u1-eigenvalues-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Matrix $A=\\begin{pmatrix} 2 & 0 \\\\ 0 & 5 \\end{pmatrix}$. Write down the eigenvalues of $A$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$-2$ and $-5$" },
              { id: "b", text: "$2$ and $5$" },
              { id: "c", text: "$0$ and $10$" },
              { id: "d", text: "$7$ and $10$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Characteristic equation",
                statement: "$\\det(A-\\lambda I)=0$",
              },
            ],
            steps: [
              {
                reasoning: "Form the characteristic equation.",
                working: "(2-\\lambda)(5-\\lambda)=0",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Solve; the eigenvalues of a diagonal matrix are its diagonal entries.",
                working: "\\lambda=2,\\; 5",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $2$ and $5$",
            commonErrors: [
              "Using the trace and determinant as the eigenvalues.",
              "Reversing the signs.",
            ],
          },
        },
        {
          id: "aihl-u1-eigenvalues-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Find the eigenvalues of $A=\\begin{pmatrix} 1 & 2 \\\\ 3 & 2 \\end{pmatrix}$.",
          response: {
            type: "numeric",
            parts: [
              { label: "Eigenvalue 1", answer: -1 },
              { label: "Eigenvalue 2", answer: 4 },
            ],
            unordered: true,
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Characteristic equation",
                statement: "$\\det(A-\\lambda I)=0$",
              },
            ],
            steps: [
              {
                reasoning: "Set up the determinant of $A-\\lambda I$.",
                working: "(1-\\lambda)(2-\\lambda)-6=0",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Expand: trace is 3 and determinant is $2-6=-4$.",
                working: "\\lambda^2-3\\lambda-4=0",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Factorise.",
                working:
                  "(\\lambda-4)(\\lambda+1)=0\\Rightarrow\\lambda=4,\\,-1",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\lambda=-1$ and $\\lambda=4$",
            commonErrors: ["Taking $\\det A=2+6$ by a sign slip."],
          },
        },
        {
          id: "aihl-u1-eigenvalues-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "The matrix $A=\\begin{pmatrix} 1 & 2 \\\\ 3 & 2 \\end{pmatrix}$ has eigenvalue $4$. Find an eigenvector of the form $\\begin{pmatrix} 2 \\\\ y \\end{pmatrix}$ corresponding to this eigenvalue.",
          response: { type: "numeric", parts: [{ label: "$y$", answer: 3 }] },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Eigenvector",
                statement:
                  "$A\\boldsymbol v=\\lambda\\boldsymbol v$ with $\\boldsymbol v\\ne\\boldsymbol0$.",
              },
            ],
            steps: [
              {
                reasoning: "Set up the eigenvector equation.",
                working:
                  "\\begin{pmatrix} 1 & 2 \\\\ 3 & 2 \\end{pmatrix}\\begin{pmatrix} 2 \\\\ y \\end{pmatrix}=4\\begin{pmatrix} 2 \\\\ y \\end{pmatrix}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Multiply out the first row.",
                working: "2+2y=8",
                marks: 1,
                markCode: "A",
              },
              { reasoning: "Solve.", working: "y=3", marks: 1, markCode: "A" },
              {
                reasoning: "Check the second row: $6+2(3)=12=4(3)$.",
                working: "12=12",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "$y=3$, eigenvector $\\begin{pmatrix} 2 \\\\ 3 \\end{pmatrix}$",
            commonErrors: ["Using $\\lambda=-1$ instead of 4."],
          },
        },
        {
          id: "aihl-u1-eigenvalues-q4",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 11,
          stem: "Investigate the eigenvalues and eigenvectors of the family of matrices $A=\\begin{pmatrix} 1 & k \\\\ 1 & 1 \\end{pmatrix}$, where $k$ is a real constant.",
          parts: [
            {
              label: "a",
              prompt:
                "Show that the characteristic equation of $A$ is $\\lambda^2-2\\lambda+1-k=0$.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "For $k=4$, find the eigenvalues of $A$.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Show that $A$ has real eigenvalues if and only if $k\\ge0$.",
              marks: 3,
            },
            {
              label: "d",
              prompt:
                "For $k=4$, find an eigenvector for the larger eigenvalue, with positive integer components.",
              marks: 2,
            },
            {
              label: "e",
              prompt:
                "Hence, for $k>0$, show that $\\begin{pmatrix} \\sqrt k \\\\ 1 \\end{pmatrix}$ is an eigenvector of $A$ and state its eigenvalue.",
              marks: 2,
            },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(b) larger eigenvalue", answer: 3 },
              { label: "(b) smaller eigenvalue", answer: -1 },
              {
                label: "(d) first component (second component is 1)",
                answer: 2,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Characteristic equation",
                statement: "$\\det(A-\\lambda I)=0$",
              },
              {
                kind: "property",
                name: "Discriminant",
                statement:
                  "$\\lambda^2+p\\lambda+q=0$ has real roots iff $p^2-4q\\ge0$.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Form $A-\\lambda I$ and take its determinant.",
                working:
                  "\\det\\begin{pmatrix} 1-\\lambda & k \\\\ 1 & 1-\\lambda \\end{pmatrix}=(1-\\lambda)^2-k",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Expand and set to zero (AG).",
                working: "\\lambda^2-2\\lambda+1-k=0",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Substitute $k=4$.",
                working: "\\lambda^2-2\\lambda-3=0",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Factorise.",
                working:
                  "(\\lambda-3)(\\lambda+1)=0\\Rightarrow\\lambda=3,\\,-1",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Real roots need a non-negative discriminant.",
                working: "\\Delta=(-2)^2-4(1-k)",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Simplify.",
                working: "\\Delta=4k",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "$\\Delta\\ge0\\iff k\\ge0$, so the eigenvalues are real exactly when $k\\ge0$.",
                working: "4k\\ge0\\iff k\\ge0",
                marks: 1,
                markCode: "R",
              },
              {
                part: "d",
                reasoning:
                  "For $\\lambda=3$ solve $(A-3I)\\boldsymbol v=\\boldsymbol0$.",
                working:
                  "\\begin{pmatrix} -2 & 4 \\\\ 1 & -2 \\end{pmatrix}\\begin{pmatrix} x \\\\ y \\end{pmatrix}=\\boldsymbol0\\Rightarrow x=2y",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Choose $y=1$.",
                working:
                  "\\boldsymbol v=\\begin{pmatrix} 2 \\\\ 1 \\end{pmatrix}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "e",
                reasoning: "Multiply $A$ by the vector.",
                working:
                  "\\begin{pmatrix} 1 & k \\\\ 1 & 1 \\end{pmatrix}\\begin{pmatrix} \\sqrt k \\\\ 1 \\end{pmatrix}=\\begin{pmatrix} \\sqrt k+k \\\\ \\sqrt k+1 \\end{pmatrix}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "e",
                reasoning:
                  "Since $\\sqrt k+k=\\sqrt k(1+\\sqrt k)$, the result is $(1+\\sqrt k)$ times the vector, so the eigenvalue is $1+\\sqrt k$ (AG).",
                working:
                  "=(1+\\sqrt k)\\begin{pmatrix} \\sqrt k \\\\ 1 \\end{pmatrix}",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "(a) shown. (b) $\\lambda=3,-1$. (c) shown. (d) $\\begin{pmatrix} 2 \\\\ 1 \\end{pmatrix}$. (e) eigenvalue $1+\\sqrt k$.",
            commonErrors: [
              "Forgetting that the second eigenvalue is $1-\\sqrt k$.",
              "Arithmetic slip in the discriminant.",
            ],
            examinerNote:
              "Check for $k=4$: $1+\\sqrt4=3$, consistent with (b). FT applies in (d) from an incorrect eigenvalue in (b).",
          },
        },
        {
          id: "aihl-u1-eigenvalues-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The eigenvalues of $A=\\begin{pmatrix} 3 & 0 \\\\ 0 & -2 \\end{pmatrix}$ are:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$-3$ and $2$" },
              { id: "b", text: "$5$ and $6$" },
              { id: "c", text: "$1$ and $-5$" },
              { id: "d", text: "$3$ and $-2$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Characteristic equation",
                statement: "$\\det(A-\\lambda I)=0$",
              },
            ],
            steps: [
              {
                reasoning:
                  "For a diagonal matrix the characteristic equation is $(3-\\lambda)(-2-\\lambda)=0$.",
                working: "(3-\\lambda)(-2-\\lambda)=0",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "The eigenvalues are the diagonal entries.",
                working: "\\lambda=3,\\,-2",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $3$ and $-2$",
            commonErrors: [
              "Using the trace $1$ and determinant $-6$ as the eigenvalues.",
            ],
          },
        },
        {
          id: "aihl-u1-eigenvalues-q6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The eigenvalues of $A=\\begin{pmatrix} 2 & 1 \\\\ 1 & 2 \\end{pmatrix}$ are:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$2$ and $2$" },
              { id: "b", text: "$4$ and $3$" },
              { id: "c", text: "$-1$ and $-3$" },
              { id: "d", text: "$1$ and $3$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "$2\\times2$ shortcut",
                statement: "$\\lambda^2-(\\text{trace})\\lambda+\\det A=0$",
              },
            ],
            steps: [
              {
                reasoning: "Trace is 4 and determinant is $4-1=3$.",
                working: "\\lambda^2-4\\lambda+3=0",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Factorise: $(\\lambda-1)(\\lambda-3)=0$.",
                working: "\\lambda=1,\\,3",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $1$ and $3$",
            commonErrors: ["Computing the determinant as $4+1=5$."],
          },
        },
        {
          id: "aihl-u1-eigenvalues-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "An eigenvector of $A=\\begin{pmatrix} 1 & 2 \\\\ 2 & 1 \\end{pmatrix}$ corresponding to the eigenvalue $3$ is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\begin{pmatrix} 1 \\\\ -1 \\end{pmatrix}$" },
              { id: "b", text: "$\\begin{pmatrix} 2 \\\\ 1 \\end{pmatrix}$" },
              { id: "c", text: "$\\begin{pmatrix} 1 \\\\ 1 \\end{pmatrix}$" },
              { id: "d", text: "$\\begin{pmatrix} 1 \\\\ 0 \\end{pmatrix}$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Eigenvector",
                statement: "$A\\boldsymbol v=\\lambda\\boldsymbol v$",
              },
            ],
            steps: [
              {
                reasoning:
                  "Check each candidate: $\\begin{pmatrix}1&2\\\\2&1\\end{pmatrix}\\begin{pmatrix}1\\\\1\\end{pmatrix}=\\begin{pmatrix}3\\\\3\\end{pmatrix}=3\\begin{pmatrix}1\\\\1\\end{pmatrix}$.",
                working:
                  "A\\begin{pmatrix}1\\\\1\\end{pmatrix}=3\\begin{pmatrix}1\\\\1\\end{pmatrix}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The other candidates fail the eigenvector equation.",
                working: "\\text{only (a) works}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $\\begin{pmatrix} 1 \\\\ 1 \\end{pmatrix}$",
            commonErrors: [
              "Picking the eigenvector for $\\lambda=-1$, which is $\\begin{pmatrix}1\\\\-1\\end{pmatrix}.",
            ],
          },
        },
        {
          id: "aihl-u1-eigenvalues-q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Find the eigenvalues of $A=\\begin{pmatrix} 5 & 2 \\\\ 1 & 4 \\end{pmatrix}$.",
          response: {
            type: "numeric",
            parts: [
              { label: "Eigenvalue 1", answer: 3 },
              { label: "Eigenvalue 2", answer: 6 },
            ],
            unordered: true,
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "$2\\times2$ shortcut",
                statement: "$\\lambda^2-(\\text{trace})\\lambda+\\det A=0$",
              },
            ],
            steps: [
              {
                reasoning: "Trace is 9 and determinant is $20-2=18$.",
                working: "\\lambda^2-9\\lambda+18=0",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Factorise.",
                working: "(\\lambda-3)(\\lambda-6)=0",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State both eigenvalues.",
                working: "\\lambda=3,\\,6",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\lambda=3$ and $\\lambda=6$",
            commonErrors: [
              "Sign error in the determinant giving $\\lambda^2-9\\lambda+22=0$.",
            ],
          },
        },
        {
          id: "aihl-u1-eigenvalues-q9",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Find the eigenvalues of $A=\\begin{pmatrix} 0 & 1 \\\\ -2 & -3 \\end{pmatrix}$.",
          response: {
            type: "numeric",
            parts: [
              { label: "Eigenvalue 1", answer: -1 },
              { label: "Eigenvalue 2", answer: -2 },
            ],
            unordered: true,
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "$2\\times2$ shortcut",
                statement: "$\\lambda^2-(\\text{trace})\\lambda+\\det A=0$",
              },
            ],
            steps: [
              {
                reasoning:
                  "Trace is $-3$ and determinant is $0\\times(-3)-1\\times(-2)=2$.",
                working: "\\lambda^2+3\\lambda+2=0",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Factorise.",
                working: "(\\lambda+1)(\\lambda+2)=0",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State both eigenvalues.",
                working: "\\lambda=-1,\\,-2",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\lambda=-1$ and $\\lambda=-2$",
            commonErrors: [
              "Losing the negative signs on the trace and determinant.",
            ],
          },
        },
        {
          id: "aihl-u1-eigenvalues-q10",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "The matrix $A=\\begin{pmatrix} 1 & 2 \\\\ 3 & 2 \\end{pmatrix}$ has eigenvalue $-1$. Find an eigenvector of the form $\\begin{pmatrix} 1 \\\\ y \\end{pmatrix}$ corresponding to this eigenvalue.",
          response: { type: "numeric", parts: [{ label: "$y$", answer: -1 }] },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Eigenvector",
                statement: "$(A-\\lambda I)\\boldsymbol v=\\boldsymbol 0$",
              },
            ],
            steps: [
              {
                reasoning:
                  "Set up the eigenvector equation with $\\lambda=-1$.",
                working:
                  "\\begin{pmatrix} 1 & 2 \\\\ 3 & 2 \\end{pmatrix}\\begin{pmatrix} 1 \\\\ y \\end{pmatrix}=-\\begin{pmatrix} 1 \\\\ y \\end{pmatrix}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Equate the first components: $1+2y=-1$.",
                working: "1+2y=-1",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Solve.", working: "y=-1", marks: 1, markCode: "A" },
              {
                reasoning: "Check the second row: $3+2(-1)=1=-(-1)$.",
                working: "1=1",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "$y=-1$, eigenvector $\\begin{pmatrix} 1 \\\\ -1 \\end{pmatrix}$",
            commonErrors: [
              "Using $\\lambda=4$ (the other eigenvalue) instead of $-1$.",
            ],
          },
        },
        {
          id: "aihl-u1-eigenvalues-q11",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 2,
          stem: "The characteristic equation of $\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}$ is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\lambda^2+(a+d)\\lambda+(ad-bc)=0$" },
              { id: "b", text: "$\\lambda^2-(a+d)\\lambda+(ad-bc)=0$" },
              { id: "c", text: "$\\lambda^2-(ad-bc)\\lambda+(a+d)=0$" },
              { id: "d", text: "$\\lambda^2-(a+d)\\lambda-(ad-bc)=0$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Characteristic equation",
                statement:
                  "$\\det(A-\\lambda I)=(a-\\lambda)(d-\\lambda)-bc=0$",
              },
            ],
            steps: [
              {
                reasoning: "Expand $(a-\\lambda)(d-\\lambda)-bc=0$.",
                working: "\\lambda^2-(a+d)\\lambda+ad-bc=0",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Match the standard form: trace subtracted, determinant added.",
                working: "\\lambda^2-(a+d)\\lambda+(ad-bc)=0",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $\\lambda^2-(a+d)\\lambda+(ad-bc)=0$",
            commonErrors: ["Sign errors on the trace and determinant terms."],
          },
        },
        {
          id: "aihl-u1-eigenvalues-q12",
          difficulty: "core",
          paper: "2",
          totalMarks: 6,
          stem: "Consider $A=\\begin{pmatrix} 2 & 0 \\\\ 1 & 3 \\end{pmatrix}$.",
          parts: [
            {
              label: "a",
              prompt:
                "Show that the characteristic equation is $(\\lambda-2)(\\lambda-3)=0$.",
              marks: 2,
            },
            { label: "b", prompt: "State the eigenvalues of $A$.", marks: 1 },
            {
              label: "c",
              prompt: "Find an eigenvector for $\\lambda=3$.",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "Verify that your eigenvector satisfies $A\\boldsymbol v=3\\boldsymbol v$.",
              marks: 1,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Characteristic equation",
                statement: "$\\det(A-\\lambda I)=0$",
              },
              {
                kind: "definition",
                name: "Eigenvector",
                statement: "$(A-\\lambda I)\\boldsymbol v=\\boldsymbol 0$",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Form $A-\\lambda I$ and take its determinant.",
                working:
                  "\\det\\begin{pmatrix} 2-\\lambda & 0 \\\\ 1 & 3-\\lambda \\end{pmatrix}=(2-\\lambda)(3-\\lambda)",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Set to zero (AG).",
                working: "(\\lambda-2)(\\lambda-3)=0",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Read off the roots.",
                working: "\\lambda=2,\\,3",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "For $\\lambda=3$: $(A-3I)\\boldsymbol v=\\boldsymbol0$ gives $-x=0$ and $x=0$, so $x=0$ and $y$ is free.",
                working:
                  "\\boldsymbol v=\\begin{pmatrix} 0 \\\\ 1 \\end{pmatrix}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "State a valid eigenvector.",
                working: "\\begin{pmatrix} 0 \\\\ 1 \\end{pmatrix}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning:
                  "Multiply: $A\\begin{pmatrix}0\\\\1\\end{pmatrix}=\\begin{pmatrix}0\\\\3\\end{pmatrix}=3\\begin{pmatrix}0\\\\1\\end{pmatrix}$, confirmed.",
                working:
                  "\\begin{pmatrix}0\\\\3\\end{pmatrix}=3\\begin{pmatrix}0\\\\1\\end{pmatrix}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) shown (b) $\\lambda=2,3$ (c) $\\begin{pmatrix}0\\\\1\\end{pmatrix}$ (d) verified",
            commonErrors: [
              "For the eigenvector of a triangular matrix, solving both rows instead of noticing one is redundant.",
            ],
          },
        },
        {
          id: "aihl-u1-eigenvalues-q13",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 10,
          stem: "Let $A=\\begin{pmatrix} 1 & k \\\\ 1 & 2 \\end{pmatrix}$, where $k$ is a real constant.",
          parts: [
            {
              label: "a",
              prompt:
                "Show that the characteristic equation of $A$ is $\\lambda^2-3\\lambda+2-k=0$.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "For $k=0$, find the eigenvalues of $A$.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Show that the eigenvalues of $A$ are real if and only if $k\\ge-\\frac14$.",
              marks: 3,
            },
            {
              label: "d",
              prompt:
                "For $k=0$, find an eigenvector for the larger eigenvalue.",
              marks: 2,
            },
            {
              label: "e",
              prompt:
                "State what happens to the eigenvalues when $k<-\\frac14$.",
              marks: 1,
            },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(b) larger eigenvalue", answer: 2 },
              { label: "(b) smaller eigenvalue", answer: 1 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Characteristic equation",
                statement: "$\\det(A-\\lambda I)=0$",
              },
              {
                kind: "property",
                name: "Discriminant",
                statement: "Real roots require $\\Delta\\ge0$.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Form $A-\\lambda I$ and take its determinant.",
                working:
                  "\\det\\begin{pmatrix} 1-\\lambda & k \\\\ 1 & 2-\\lambda \\end{pmatrix}=(1-\\lambda)(2-\\lambda)-k",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Expand and set to zero (AG).",
                working: "\\lambda^2-3\\lambda+2-k=0",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Substitute $k=0$.",
                working: "\\lambda^2-3\\lambda+2=0",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Factorise.",
                working:
                  "(\\lambda-1)(\\lambda-2)=0\\Rightarrow\\lambda=1,\\,2",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Real roots need a non-negative discriminant.",
                working: "\\Delta=(-3)^2-4(2-k)",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Simplify.",
                working: "\\Delta=9-8+4k=1+4k",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "$\\Delta\\ge0\\iff k\\ge-\\frac14$, so the eigenvalues are real exactly in this case.",
                working: "1+4k\\ge0\\iff k\\ge-\\frac14",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning:
                  "For $\\lambda=2$: $(A-2I)\\boldsymbol v=\\boldsymbol0$ gives $-x+0y=0$, so $x=0$.",
                working:
                  "\\boldsymbol v=\\begin{pmatrix} 0 \\\\ 1 \\end{pmatrix}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "State the eigenvector.",
                working: "\\begin{pmatrix} 0 \\\\ 1 \\end{pmatrix}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "e",
                reasoning:
                  "When $k<-\\frac14$, $\\Delta<0$ so the eigenvalues are a complex conjugate pair.",
                working: "\\text{complex conjugate pair}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) shown (b) $\\lambda=1,2$ (c) shown (d) $\\begin{pmatrix}0\\\\1\\end{pmatrix}$ (e) complex conjugate pair",
            commonErrors: [
              "Arithmetic slip in the discriminant: $9-4(2-k)=1+4k$, not $1-4k$.",
            ],
            examinerNote:
              "Check: for $k=0$ the eigenvector $\\begin{pmatrix}0\\\\1\\end{pmatrix}$ gives $A\\boldsymbol v=\\begin{pmatrix}0\\\\2\\end{pmatrix}=2\\boldsymbol v$.",
          },
        },
        {
          id: "aihl-u1-eigenvalues-q14",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Find the eigenvalues of $A=\\begin{pmatrix} 6 & 2 \\\\ 1 & 2 \\end{pmatrix}$, giving each to 3 significant figures.",
          response: {
            type: "numeric",
            parts: [
              { label: "Smaller eigenvalue", answer: 1.55, tolerance: 0.005 },
              { label: "Larger eigenvalue", answer: 6.45, tolerance: 0.005 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "$2\\times2$ shortcut",
                statement: "$\\lambda^2-(\\text{trace})\\lambda+\\det A=0$",
              },
            ],
            steps: [
              {
                reasoning: "Trace is 8 and determinant is $12-2=10$.",
                working: "\\lambda^2-8\\lambda+10=0",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Solve with the quadratic formula or GDC.",
                working: "\\lambda=\\frac{8\\pm\\sqrt{64-40}}{2}=4\\pm\\sqrt6",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate the smaller root.",
                working: "\\lambda=4-\\sqrt6\\approx1.55",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Evaluate the larger root.",
                working: "\\lambda=4+\\sqrt6\\approx6.45",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\lambda\\approx1.55$ and $\\lambda\\approx6.45$",
            commonErrors: [
              "Forgetting the $\\pm$ and giving only one eigenvalue.",
            ],
          },
        },
      ],
    },
    {
      id: "aihl-u1-diagonalization",
      title: "Diagonalization and matrix powers",
      skill:
        "Use $A^n=PD^nP^{-1}$ to compute powers and model long-term behaviour.",
      lesson: {
        sections: [
          {
            heading: "Diagonalizing",
            body: "If $A$ has eigenvalues $\\lambda_1,\\lambda_2$ with eigenvectors forming the columns of $P$, then $A=PDP^{-1}$ where $D=\\begin{pmatrix} \\lambda_1 & 0 \\\\ 0 & \\lambda_2 \\end{pmatrix}$. The order of the columns of $P$ must match the order of the eigenvalues in $D$.",
          },
          {
            heading: "Powers and long-term behaviour",
            body: "Because the inner factors cancel, $A^n=PD^nP^{-1}$, and $D^n$ simply raises each diagonal entry to the power $n$. In a population or migration model with $\\boldsymbol{x}_{n}=A^n\\boldsymbol{x}_0$, writing $\\boldsymbol{x}_0$ as a combination of eigenvectors shows that terms with $|\\lambda|<1$ die away, so the long-term state is governed by the eigenvalue with the largest modulus.",
          },
        ],
        keyFormulas: [
          { name: "Diagonalization", statement: "$A=PDP^{-1}$" },
          { name: "Powers", statement: "$A^n=PD^nP^{-1}$" },
        ],
        workedExample: {
          problem:
            "Given $A=PDP^{-1}$ with $D=\\begin{pmatrix} 2 & 0 \\\\ 0 & 3 \\end{pmatrix}$, write $D^4$.",
          solution:
            "Raise each diagonal entry to the power 4: $D^4=\\begin{pmatrix} 16 & 0 \\\\ 0 & 81 \\end{pmatrix}$.",
        },
      },
      questions: [
        {
          id: "aihl-u1-diagonalization-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 1,
          stem: "A matrix is diagonalized as $A=PDP^{-1}$. Which expression equals $A^5$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$P^5DP^{-5}$" },
              { id: "b", text: "$5PDP^{-1}$" },
              { id: "c", text: "$P^{-1}D^5P$" },
              { id: "d", text: "$PD^5P^{-1}$" },
            ],
            dorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Matrix powers",
                statement:
                  "$A^n=PD^nP^{-1}$ since $P^{-1}P=I$ cancels between the factors.",
              },
            ],
            steps: [
              {
                reasoning:
                  "In $(PDP^{-1})^5$ the inner $P^{-1}P$ pairs equal $I$.",
                working: "A^5=PD^5P^{-1}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** $PD^5P^{-1}$",
            commonErrors: [
              "Raising $P$ to a power as well.",
              "Reversing $P$ and $P^{-1}$.",
            ],
          },
        },
        {
          id: "aihl-u1-diagonalization-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Given $D=\\begin{pmatrix} 2 & 0 \\\\ 0 & 3 \\end{pmatrix}$, find $D^5$. Enter the two non-zero entries.",
          response: {
            type: "numeric",
            parts: [
              { label: "Row 1, column 1", answer: 32 },
              { label: "Row 2, column 2", answer: 243 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Powers of a diagonal matrix",
                statement:
                  "$D^n=\\operatorname{diag}(\\lambda_1^n,\\lambda_2^n)$",
              },
            ],
            steps: [
              {
                reasoning: "Raise each diagonal entry to the power 5.",
                working: "2^5=32,\\quad 3^5=243",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Write the matrix.",
                working:
                  "D^5=\\begin{pmatrix} 32 & 0 \\\\ 0 & 243 \\end{pmatrix}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "$D^5=\\begin{pmatrix} 32 & 0 \\\\ 0 & 243 \\end{pmatrix}$",
            commonErrors: ["Multiplying the diagonal entries by 5."],
          },
        },
        {
          id: "aihl-u1-diagonalization-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "The matrix $A=\\begin{pmatrix} 4 & 1 \\\\ 2 & 3 \\end{pmatrix}$ has eigenvalues $5$ and $2$ with eigenvectors $\\begin{pmatrix} 1 \\\\ 1 \\end{pmatrix}$ and $\\begin{pmatrix} 1 \\\\ -2 \\end{pmatrix}$ respectively. Use $A^3=PD^3P^{-1}$ to find the entries in row 1, column 1 and row 2, column 2 of $A^3$.",
          response: {
            type: "numeric",
            parts: [
              { label: "Row 1, column 1", answer: 86 },
              { label: "Row 2, column 2", answer: 47 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Diagonalization",
                statement: "$A^n=PD^nP^{-1}$",
              },
            ],
            steps: [
              {
                reasoning: "Build $P$ and $D$ with matching column order.",
                working:
                  "P=\\begin{pmatrix} 1 & 1 \\\\ 1 & -2 \\end{pmatrix},\\; D^3=\\begin{pmatrix} 125 & 0 \\\\ 0 & 8 \\end{pmatrix}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$\\det P=-3$, so the inverse is as follows.",
                working:
                  "P^{-1}=\\frac13\\begin{pmatrix} 2 & 1 \\\\ 1 & -1 \\end{pmatrix}",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Multiply $PD^3P^{-1}$.",
                working:
                  "A^3=\\frac13\\begin{pmatrix} 258 & 117 \\\\ 234 & 141 \\end{pmatrix}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Simplify. Check: direct multiplication gives the same matrix.",
                working:
                  "A^3=\\begin{pmatrix} 86 & 39 \\\\ 78 & 47 \\end{pmatrix}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "$A^3=\\begin{pmatrix} 86 & 39 \\\\ 78 & 47 \\end{pmatrix}$",
            commonErrors: [
              "Placing the eigenvalues in $D$ in the opposite order to the eigenvectors in $P$.",
            ],
          },
        },
        {
          id: "aihl-u1-diagonalization-q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 10,
          stem: "Each year, $30\\%$ of the residents of a city move to the suburbs and $20\\%$ of the suburban residents move to the city. Nobody else moves. If $c_n$ and $s_n$ are the populations of the city and suburbs after $n$ years, then $\\begin{pmatrix} c_{n+1} \\\\ s_{n+1} \\end{pmatrix}=M\\begin{pmatrix} c_n \\\\ s_n \\end{pmatrix}$ where $M=\\begin{pmatrix} 0.7 & 0.2 \\\\ 0.3 & 0.8 \\end{pmatrix}$. Initially $c_0=60\\,000$ and $s_0=40\\,000$.",
          parts: [
            {
              label: "a",
              prompt: "Show that the eigenvalues of $M$ are $1$ and $0.5$.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "Find an eigenvector for each eigenvalue, with integer components.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Write $\\begin{pmatrix} 60\\,000 \\\\ 40\\,000 \\end{pmatrix}=a\\begin{pmatrix} 2 \\\\ 3 \\end{pmatrix}+b\\begin{pmatrix} 1 \\\\ -1 \\end{pmatrix}$ and find $a$ and $b$.",
              marks: 2,
            },
            {
              label: "d",
              prompt: "Hence find the population of the city after 3 years.",
              marks: 2,
            },
            {
              label: "e",
              prompt: "Find the population of the city in the long term.",
              marks: 1,
            },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(c) $a$", answer: 20000 },
              { label: "(c) $b$", answer: 20000 },
              { label: "(d) city population after 3 years", answer: 42500 },
              { label: "(e) long-term city population", answer: 40000 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Characteristic equation",
                statement: "$\\det(M-\\lambda I)=0$",
              },
              {
                kind: "property",
                name: "Linearity",
                statement:
                  "$M^n(a\\boldsymbol u+b\\boldsymbol w)=a\\lambda_1^n\\boldsymbol u+b\\lambda_2^n\\boldsymbol w$ for eigenvectors $\\boldsymbol u,\\boldsymbol w$.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Trace is $1.5$ and determinant is $0.56-0.06=0.5$.",
                working: "\\lambda^2-1.5\\lambda+0.5=0",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Factorise.",
                working: "(\\lambda-1)(\\lambda-0.5)=0",
                marks: 1,
                markCode: "A",
              },
              {
                part: "a",
                reasoning: "Read off the roots (AG).",
                working: "\\lambda=1,\\;0.5",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "For $\\lambda=1$: $-0.3x+0.2y=0$, so $3x=2y$.",
                working: "\\begin{pmatrix} 2 \\\\ 3 \\end{pmatrix}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "For $\\lambda=0.5$: $0.2x+0.2y=0$, so $y=-x$.",
                working: "\\begin{pmatrix} 1 \\\\ -1 \\end{pmatrix}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Equate components: $2a+b=60\\,000$ and $3a-b=40\\,000$. Add them.",
                working: "5a=100\\,000",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Back-substitute.",
                working: "a=20\\,000,\\; b=20\\,000",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning:
                  "Apply $M^3$ using the eigenvalues $1$ and $0.5^3=0.125$.",
                working: "c_3=20\\,000(2)(1)^3+20\\,000(1)(0.5)^3",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning:
                  "Evaluate. Check by iterating: $60\\,000\\to50\\,000\\to45\\,000\\to42\\,500$.",
                working: "c_3=40\\,000+2\\,500=42\\,500",
                marks: 1,
                markCode: "A",
              },
              {
                part: "e",
                reasoning:
                  "As $n\\to\\infty$, $0.5^n\\to0$, so only the eigenvalue-1 term remains.",
                working: "c_\\infty=20\\,000\\times2=40\\,000",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "(a) shown. (b) $\\begin{pmatrix} 2 \\\\ 3 \\end{pmatrix}$ and $\\begin{pmatrix} 1 \\\\ -1 \\end{pmatrix}$. (c) $a=b=20\\,000$. (d) $42\\,500$. (e) $40\\,000$ (suburbs $60\\,000$).",
            commonErrors: [
              "Using $0.5\\times3$ instead of $0.5^3$.",
              "Forgetting that the total population is conserved.",
            ],
            examinerNote:
              "FT is awarded in (d) and (e) from incorrect values in (c).",
          },
        },
        {
          id: "aihl-u1-diagonalization-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "If $D=\\begin{pmatrix} 2 & 0 \\\\ 0 & 3 \\end{pmatrix}$, then $D^4=$",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "$\\begin{pmatrix} 6 & 0 \\\\ 0 & 9 \\end{pmatrix}$",
              },
              {
                id: "b",
                text: "$\\begin{pmatrix} 16 & 0 \\\\ 0 & 27 \\end{pmatrix}$",
              },
              {
                id: "c",
                text: "$\\begin{pmatrix} 16 & 0 \\\\ 0 & 81 \\end{pmatrix}$",
              },
              {
                id: "d",
                text: "$\\begin{pmatrix} 8 & 0 \\\\ 0 & 12 \\end{pmatrix}$",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Powers of a diagonal matrix",
                statement:
                  "$D^n=\\operatorname{diag}(\\lambda_1^n,\\lambda_2^n)$",
              },
            ],
            steps: [
              {
                reasoning: "Raise each diagonal entry to the power 4.",
                working: "2^4=16,\\quad 3^4=81",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Write the matrix.",
                working:
                  "D^4=\\begin{pmatrix} 16 & 0 \\\\ 0 & 81 \\end{pmatrix}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(a)** $\\begin{pmatrix} 16 & 0 \\\\ 0 & 81 \\end{pmatrix}$",
            commonErrors: [
              "Multiplying the diagonal entries by 4 instead of raising to the power 4.",
            ],
          },
        },
        {
          id: "aihl-u1-diagonalization-q6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "In the diagonalization $A=PDP^{-1}$, the diagonal matrix $D$ contains:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The eigenvalues of $A$" },
              { id: "b", text: "The inverse of $A$" },
              { id: "c", text: "The eigenvectors of $A$" },
              { id: "d", text: "The powers of $A$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Diagonalization",
                statement:
                  "$A=PDP^{-1}$ where $D$ has the eigenvalues and the columns of $P$ are the eigenvectors.",
              },
            ],
            steps: [
              {
                reasoning: "Recall the roles of $P$ and $D$.",
                working: "D=\\operatorname{diag}(\\lambda_1,\\lambda_2)",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State what $D$ contains.",
                working: "\\text{eigenvalues}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** The eigenvalues of $A$",
            commonErrors: [
              "Confusing the roles of $P$ (eigenvectors) and $D$ (eigenvalues).",
            ],
          },
        },
        {
          id: "aihl-u1-diagonalization-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A matrix $A$ has eigenvalues $1$ and $0.8$. As $n\\to\\infty$, the behaviour of $A^n$ is dominated by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The eigenvalue $0.8$, since it is smaller" },
              { id: "b", text: "Both eigenvalues equally" },
              { id: "c", text: "The eigenvalue $1$, since $|1|$ is largest" },
              { id: "d", text: "Neither; $A^n$ tends to zero" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Long-term behaviour",
                statement:
                  "Terms with $|\\lambda|<1$ die away; the eigenvalue with the largest modulus dominates.",
              },
            ],
            steps: [
              {
                reasoning: "$0.8^n\\to0$ while $1^n=1$ for all $n$.",
                working: "0.8^n\\to0,\\\\ 1^n=1",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "So the eigenvalue-1 component survives.",
                working: "\\lambda=1\\\\ \\text{dominates}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** The eigenvalue $1$",
            commonErrors: ["Thinking the smaller eigenvalue dominates."],
          },
        },
        {
          id: "aihl-u1-diagonalization-q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Given $D=\\begin{pmatrix} -2 & 0 \\\\ 0 & 3 \\end{pmatrix}$, find $D^3$. Enter the two non-zero entries.",
          response: {
            type: "numeric",
            parts: [
              { label: "Row 1, column 1", answer: -8 },
              { label: "Row 2, column 2", answer: 27 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Powers of a diagonal matrix",
                statement:
                  "$D^n=\\operatorname{diag}(\\lambda_1^n,\\lambda_2^n)$",
              },
            ],
            steps: [
              {
                reasoning:
                  "Raise each diagonal entry to the power 3, keeping the sign.",
                working: "(-2)^3=-8,\\quad 3^3=27",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Write the matrix.",
                working:
                  "D^3=\\begin{pmatrix} -8 & 0 \\\\ 0 & 27 \\end{pmatrix}",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer:
              "$D^3=\\begin{pmatrix} -8 & 0 \\\\ 0 & 27 \\end{pmatrix}$",
            commonErrors: ["Dropping the negative sign: $(-2)^3=-8$, not 8."],
          },
        },
        {
          id: "aihl-u1-diagonalization-q9",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 3,
          stem: "A matrix is diagonalized as $A=PDP^{-1}$ with $P=\\begin{pmatrix} 1 & 1 \\\\ 1 & -1 \\end{pmatrix}$ and $D=\\begin{pmatrix} 2 & 0 \\\\ 0 & 4 \\end{pmatrix}$. Find the entry in row 1, column 1 of $A$.",
          response: {
            type: "numeric",
            parts: [{ label: "Entry (1,1) of $A$", answer: 3 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Diagonalization",
                statement: "$A=PDP^{-1}$",
              },
            ],
            steps: [
              {
                reasoning:
                  "$\\det P=-2$, so $P^{-1}=\\frac12\\begin{pmatrix} 1 & 1 \\\\ 1 & -1 \\end{pmatrix}$.",
                working:
                  "P^{-1}=\\frac12\\begin{pmatrix} 1 & 1 \\\\ 1 & -1 \\end{pmatrix}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Compute $A=PDP^{-1}$ step by step.",
                working:
                  "A=\\frac12\\begin{pmatrix} 1 & 1 \\\\ 1 & -1 \\end{pmatrix}\\begin{pmatrix} 2 & 0 \\\\ 0 & 4 \\end{pmatrix}\\begin{pmatrix} 1 & 1 \\\\ 1 & -1 \\end{pmatrix}=\\begin{pmatrix} 1 & 1 \\\\ -2 & 2 \\end{pmatrix}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Read off the entry.",
                working: "A_{11}=3",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$3$",
            commonErrors: [
              "Mismatching the order of eigenvalues in $D$ with eigenvectors in $P$.",
            ],
          },
        },
        {
          id: "aihl-u1-diagonalization-q10",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "The symmetric matrix $A=\\begin{pmatrix} 2 & 1 \\\\ 1 & 2 \\end{pmatrix}$ has eigenvalues $1$ and $3$ with eigenvectors $\\begin{pmatrix} 1 \\\\ -1 \\end{pmatrix}$ and $\\begin{pmatrix} 1 \\\\ 1 \\end{pmatrix}$ respectively. Find $A^2$ using diagonalization.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Diagonalization",
                statement: "$A^n=PD^nP^{-1}$",
              },
            ],
            steps: [
              {
                reasoning:
                  "Build $P$ and $D$ with matching column order: first column is the eigenvector for $\\lambda=1$, second for $\\lambda=3$.",
                working:
                  "P=\\begin{pmatrix} 1 & 1 \\\\ -1 & 1 \\end{pmatrix},\\; D^2=\\begin{pmatrix} 1 & 0 \\\\ 0 & 9 \\end{pmatrix}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$\\det P=2$, so the inverse is as follows.",
                working:
                  "P^{-1}=\\frac12\\begin{pmatrix} 1 & -1 \\\\ 1 & 1 \\end{pmatrix}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Compute $PD^2P^{-1}$.",
                working:
                  "A^2=\\frac12\\begin{pmatrix} 1 & 1 \\\\ -1 & 1 \\end{pmatrix}\\begin{pmatrix} 1 & 0 \\\\ 0 & 9 \\end{pmatrix}\\begin{pmatrix} 1 & -1 \\\\ 1 & 1 \\end{pmatrix}=\\begin{pmatrix} 5 & 4 \\\\ 4 & 5 \\end{pmatrix}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Check directly: $A^2=\\begin{pmatrix}2&1\\\\1&2\\end{pmatrix}\\begin{pmatrix}2&1\\\\1&2\\end{pmatrix}=\\begin{pmatrix}5&4\\\\4&5\\end{pmatrix}$.",
                working: "A^2=\\begin{pmatrix} 5 & 4 \\\\ 4 & 5 \\end{pmatrix}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "$A^2=\\begin{pmatrix} 5 & 4 \\\\ 4 & 5 \\end{pmatrix}$",
            commonErrors: [
              "Pairing eigenvalues with the wrong eigenvectors in $P$ and $D$.",
            ],
          },
        },
        {
          id: "aihl-u1-diagonalization-q11",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A matrix $A$ has eigenvalues $2$ and $-1$. Which statement about $A^n$ as $n\\to\\infty$ is correct?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It always tends to the zero matrix" },
              {
                id: "b",
                text: "It depends on the eigenvector decomposition of the initial vector",
              },
              { id: "c", text: "It grows without bound" },
              { id: "d", text: "It oscillates between two fixed values" },
            ],
            borrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Long-term behaviour",
                statement:
                  "With a negative eigenvalue present, $(-1)^n$ alternates in sign, so the long-term behaviour depends on the components of the initial state.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$2^n\\to\\infty$ while $(-1)^n$ alternates, so neither component simply dies away.",
                working: "2^n\\to\\infty,\\\\ (-1)^n\\\\ \\text{alternates}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The outcome depends on whether the initial vector has components along each eigenvector.",
                working: "\\text{depends on the decomposition}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** It depends on the eigenvector decomposition",
            commonErrors: [
              "Assuming $|-1|<1$ means that component vanishes; $|-1|=1$ so it persists.",
            ],
          },
        },
        {
          id: "aihl-u1-diagonalization-q12",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 10,
          stem: "Each year, a proportion $0.1$ of the population of Town A moves to Town B and a proportion $0.05$ of Town B moves to Town A; nobody else moves. If $\\boldsymbol{x}_n=\\begin{pmatrix} a_n \\\\ b_n \\end{pmatrix}$ gives the populations after $n$ years, then $\\boldsymbol{x}_{n+1}=M\\boldsymbol{x}_n$ with $M=\\begin{pmatrix} 0.9 & 0.05 \\\\ 0.1 & 0.95 \\end{pmatrix}$. Initially $a_0=80\\,000$ and $b_0=20\\,000$.",
          parts: [
            {
              label: "a",
              prompt: "Show that the eigenvalues of $M$ are $1$ and $0.85$.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "Find an eigenvector for each eigenvalue, with integer components.",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "Write $\\begin{pmatrix} 80\\,000 \\\\ 20\\,000 \\end{pmatrix}$ as a combination of the two eigenvectors and find the coefficients.",
              marks: 2,
            },
            {
              label: "d",
              prompt: "Hence find the population of Town A after 4 years.",
              marks: 2,
            },
          ],
          response: {
            type: "numeric",
            parts: [
              {
                label:
                  "(c) coefficient of $\\begin{pmatrix}1\\\\2\\end{pmatrix}$",
                answer: 40000,
              },
              {
                label:
                  "(c) coefficient of $\\begin{pmatrix}2\\\\-1\\end{pmatrix}$",
                answer: 20000,
              },
              {
                label: "(d) Town A population after 4 years",
                answer: 60880.25,
                tolerance: 0.01,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Characteristic equation",
                statement: "$\\det(M-\\lambda I)=0$",
              },
              {
                kind: "property",
                name: "Linearity",
                statement:
                  "$M^n(a\\boldsymbol u+b\\boldsymbol w)=a\\lambda_1^n\\boldsymbol u+b\\lambda_2^n\\boldsymbol w$ for eigenvectors $\\boldsymbol u,\\boldsymbol w$.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Trace is $1.85$ and determinant is $0.855-0.005=0.85$.",
                working: "\\lambda^2-1.85\\lambda+0.85=0",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Factorise.",
                working: "(\\lambda-1)(\\lambda-0.85)=0",
                marks: 1,
                markCode: "A",
              },
              {
                part: "a",
                reasoning: "Read off the roots (AG).",
                working: "\\lambda=1,\\;0.85",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "For $\\lambda=1$: $-0.1x+0.05y=0$, so $y=2x$.",
                working: "\\begin{pmatrix} 1 \\\\ 2 \\end{pmatrix}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "For $\\lambda=0.85$: $0.05x+0.1y=0$, so $y=-\\tfrac12x$; equivalently $\\begin{pmatrix}2\\\\-1\\end{pmatrix}$.",
                working: "\\begin{pmatrix} 2 \\\\ -1 \\end{pmatrix}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "State a second independent eigenvector.",
                working: "\\begin{pmatrix} 2 \\\\ -1 \\end{pmatrix}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Solve $a\\begin{pmatrix}1\\\\2\\end{pmatrix}+b\\begin{pmatrix}2\\\\-1\\end{pmatrix}=\\begin{pmatrix}80000\\\\20000\\end{pmatrix}$: $a+2b=80000$ and $2a-b=20000$.",
                working: "a+2b=80000,\\\\ 2a-b=20000",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Solve the system.",
                working: "a=40000,\\\\ b=20000",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning:
                  "Apply $M^4$: the eigenvalue-1 component is unchanged; the other is multiplied by $0.85^4$.",
                working: "a_4=40000(1)+20000(2)(0.85)^4",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Evaluate.",
                working: "a_4=40000+40000(0.52200625)=60880.25",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) shown (b) $\\begin{pmatrix}1\\\\2\\end{pmatrix}$ and $\\begin{pmatrix}2\\\\-1\\end{pmatrix}$ (c) $a=40000$, $b=20000$ (d) $a_4=60880.25$",
            commonErrors: [
              "Mismatching eigenvector order with eigenvalues in $D$.",
            ],
            examinerNote:
              "Check: $0.85^4=0.52200625$; $a_4=40000+40000\\times0.52200625=60880.25$.",
          },
        },
        {
          id: "aihl-u1-diagonalization-q13",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "If $A=PDP^{-1}$ and $D=\\begin{pmatrix} 5 & 0 \\\\ 0 & -3 \\end{pmatrix}$, then $D^2=$",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "$\\begin{pmatrix} 25 & 0 \\\\ 0 & 9 \\end{pmatrix}$",
              },
              {
                id: "b",
                text: "$\\begin{pmatrix} 10 & 0 \\\\ 0 & -6 \\end{pmatrix}$",
              },
              {
                id: "c",
                text: "$\\begin{pmatrix} 5 & 0 \\\\ 0 & 3 \\end{pmatrix}$",
              },
              {
                id: "d",
                text: "$\\begin{pmatrix} 25 & 0 \\\\ 0 & -9 \\end{pmatrix}$",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Powers of a diagonal matrix",
                statement:
                  "$D^n=\\operatorname{diag}(\\lambda_1^n,\\lambda_2^n)$",
              },
            ],
            steps: [
              {
                reasoning: "Square each diagonal entry; $(-3)^2=9$.",
                working: "5^2=25,\\\\ (-3)^2=9",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Write the matrix.",
                working:
                  "D^2=\\begin{pmatrix} 25 & 0 \\\\ 0 & 9 \\end{pmatrix}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(a)** $\\begin{pmatrix} 25 & 0 \\\\ 0 & 9 \\end{pmatrix}$",
            commonErrors: ["Leaving $-9$ instead of $(-3)^2=9$."],
          },
        },
        {
          id: "aihl-u1-diagonalization-q14",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 5,
          stem: "The matrix $A=\\begin{pmatrix} 3 & 1 \\\\ 1 & 3 \\end{pmatrix}$ has eigenvalues $4$ and $2$ with eigenvectors $\\begin{pmatrix} 1 \\\\ 1 \\end{pmatrix}$ and $\\begin{pmatrix} 1 \\\\ -1 \\end{pmatrix}$ respectively. Find $A^{10}$, giving each entry to 3 significant figures.",
          response: {
            type: "numeric",
            parts: [
              { label: "Entry (1,1) of $A^{10}$", answer: 524800 },
              { label: "Entry (1,2) of $A^{10}$", answer: 524776 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Diagonalization",
                statement: "$A^n=PD^nP^{-1}$",
              },
            ],
            steps: [
              {
                reasoning: "Build $P$, $D^{10}$ and $P^{-1}$.",
                working:
                  "P=\\begin{pmatrix} 1 & 1 \\\\ 1 & -1 \\end{pmatrix},\\\\ D^{10}=\\begin{pmatrix} 4^{10} & 0 \\\\ 0 & 2^{10} \\end{pmatrix},\\\\ P^{-1}=\\frac12\\begin{pmatrix} 1 & 1 \\\\ 1 & -1 \\end{pmatrix}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Compute $A^{10}=PD^{10}P^{-1}$.",
                working:
                  "A^{10}=\\frac12\\begin{pmatrix} 4^{10}+2^{10} & 4^{10}-2^{10} \\\\ 4^{10}-2^{10} & 4^{10}+2^{10} \\end{pmatrix}",
                marks: 2,
                markCode: "M",
              },
              {
                reasoning: "Evaluate entry (1,1).",
                working: "A^{10}_{11}=\\frac{1048576+1024}{2}=524800",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Evaluate entry (1,2).",
                working: "A^{10}_{12}=\\frac{1048576-1024}{2}=524776",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "$A^{10}=\\begin{pmatrix} 524800 & 524776 \\\\ 524776 & 524800 \\end{pmatrix}$",
            commonErrors: [
              "Swapping the eigenvalue order between $P$ and $D$.",
            ],
          },
        },
      ],
    },
  ],
};
