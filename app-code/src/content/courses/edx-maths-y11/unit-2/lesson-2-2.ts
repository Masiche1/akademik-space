import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "edm11-u2-lesson-2-2",
  code: "2-2",
  title: "Vectors",
  goal: "I CAN use column vectors and vector arithmetic, find magnitudes, and use vectors to solve geometry problems and write proofs.",
  standards: ["4MA1 4.9", "4MA1 4.9H"],
  vocabulary: [
    { term: "Vector", definition: "A quantity with both magnitude (size) and direction, written as a column vector or as a letter in bold, such as $\\mathbf{a}$, or as $\\overrightarrow{AB}$." },
    { term: "Column vector", definition: "A vector written as $\\begin{pmatrix} x \\\\ y \\end{pmatrix}$: $x$ units across and $y$ units up (negative means left or down)." },
    { term: "Magnitude", definition: "The length of a vector. For $\\begin{pmatrix} x \\\\ y \\end{pmatrix}$ it is $\\sqrt{x^2+y^2}$." },
    { term: "Parallel vectors", definition: "Vectors that are scalar multiples of each other. They have the same or opposite direction." },
    { term: "Collinear points", definition: "Points that lie on one straight line." },
    { term: "Position vector", definition: "The vector from the origin $O$ to a point, e.g. $\\overrightarrow{OA}$." },
  ],
  concepts: [
    {
      id: "edm11-u2-column-vectors",
      title: "Column vectors, arithmetic and magnitude",
      skill: "Add, subtract and multiply column vectors by a scalar, and find the magnitude of a vector.",
      lesson: {
        sections: [
          {
            heading: "Column vectors and arithmetic",
            body: "Add or subtract vectors by adding or subtracting the top numbers and the bottom numbers: $\\begin{pmatrix} 3 \\\\ -1 \\end{pmatrix} + \\begin{pmatrix} 2 \\\\ 4 \\end{pmatrix} = \\begin{pmatrix} 5 \\\\ 3 \\end{pmatrix}$. To multiply by a scalar, multiply both entries: $2\\begin{pmatrix} 3 \\\\ -1 \\end{pmatrix}=\\begin{pmatrix} 6 \\\\ -2 \\end{pmatrix}$.",
          },
          {
            heading: "Vectors between points",
            body: "The vector from $A(x_1,y_1)$ to $B(x_2,y_2)$ is $\\overrightarrow{AB}=\\begin{pmatrix} x_2-x_1 \\\\ y_2-y_1 \\end{pmatrix}$. Also $\\overrightarrow{BA}=-\\overrightarrow{AB}$ and $\\overrightarrow{AC}=\\overrightarrow{AB}+\\overrightarrow{BC}$.",
          },
          {
            heading: "Magnitude",
            body: "The magnitude of $\\begin{pmatrix} x \\\\ y \\end{pmatrix}$ is found with Pythagoras' theorem: $\\left|\\begin{pmatrix} x \\\\ y \\end{pmatrix}\\right|=\\sqrt{x^2+y^2}$. For $\\begin{pmatrix} 3 \\\\ 4 \\end{pmatrix}$ this is $\\sqrt{9+16}=5$.",
          },
        ],
        keyFormulas: [
          { name: "Magnitude", statement: "$\\left|\\begin{pmatrix} x \\\\ y \\end{pmatrix}\\right|=\\sqrt{x^2+y^2}$" },
          { name: "Triangle law", statement: "$\\overrightarrow{AC}=\\overrightarrow{AB}+\\overrightarrow{BC}$" },
        ],
        workedExample: {
          problem: "$\\mathbf{a}=\\begin{pmatrix} 2 \\\\ 1 \\end{pmatrix}$ and $\\mathbf{b}=\\begin{pmatrix} -4 \\\\ 5 \\end{pmatrix}$. Find $\\mathbf{a}+2\\mathbf{b}$.",
          solution: "$2\\mathbf{b}=\\begin{pmatrix} -8 \\\\ 10 \\end{pmatrix}$, so $\\mathbf{a}+2\\mathbf{b}=\\begin{pmatrix} 2-8 \\\\ 1+10 \\end{pmatrix}=\\begin{pmatrix} -6 \\\\ 11 \\end{pmatrix}$.",
        },
      },
      questions: [
        {
          id: "edm11-u2-column-vectors-q1",
          difficulty: "foundation",
          tier: "foundation",
          totalMarks: 1,
          stem: "$\\mathbf{a}=\\begin{pmatrix} 3 \\\\ -1 \\end{pmatrix}$ and $\\mathbf{b}=\\begin{pmatrix} 2 \\\\ 4 \\end{pmatrix}$\n\nWhat is $\\mathbf{a}+\\mathbf{b}$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\begin{pmatrix} 1 \\\\ -5 \\end{pmatrix}$" },
              { id: "b", text: "$\\begin{pmatrix} 6 \\\\ -4 \\end{pmatrix}$" },
              { id: "c", text: "$\\begin{pmatrix} 5 \\\\ -3 \\end{pmatrix}$" },
              { id: "d", text: "$\\begin{pmatrix} 5 \\\\ 3 \\end{pmatrix}$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "law", name: "Vector addition", statement: "Add corresponding entries." }],
            steps: [{ reasoning: "Add the top entries and the bottom entries.", working: "\\begin{pmatrix} 3+2 \\\\ -1+4 \\end{pmatrix}=\\begin{pmatrix} 5 \\\\ 3 \\end{pmatrix}", marks: 1, markCode: "B" }],
            finalAnswer: "**(d)** $\\begin{pmatrix} 5 \\\\ 3 \\end{pmatrix}$",
            commonErrors: ["Subtracting instead of adding, giving $\\begin{pmatrix} 1 \\\\ -5 \\end{pmatrix}$.", "Sign error on $-1+4$."],
          },
        },
        {
          id: "edm11-u2-column-vectors-q2",
          difficulty: "core",
          tier: "foundation",
          totalMarks: 2,
          stem: "$\\mathbf{a}=\\begin{pmatrix} 3 \\\\ -2 \\end{pmatrix}$ and $\\mathbf{b}=\\begin{pmatrix} -1 \\\\ 5 \\end{pmatrix}$\n\nWork out $2\\mathbf{a}-\\mathbf{b}$ as a column vector. Enter the top and bottom entries.",
          response: {
            type: "numeric",
            parts: [
              { label: "Top entry", answer: 7 },
              { label: "Bottom entry", answer: -9 },
            ],
          },
          markscheme: {
            principles: [{ kind: "law", name: "Vector arithmetic", statement: "Multiply by scalars first, then add or subtract corresponding entries." }],
            steps: [
              { reasoning: "Double $\\mathbf{a}$.", working: "2\\mathbf{a}=\\begin{pmatrix} 6 \\\\ -4 \\end{pmatrix}", marks: 1, markCode: "M" },
              { reasoning: "Subtract $\\mathbf{b}$; note $6-(-1)=7$ and $-4-5=-9$.", working: "\\begin{pmatrix} 6+1 \\\\ -4-5 \\end{pmatrix}=\\begin{pmatrix} 7 \\\\ -9 \\end{pmatrix}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\begin{pmatrix} 7 \\\\ -9 \\end{pmatrix}$",
            commonErrors: ["Writing $6-1=5$, ignoring the negative in $\\mathbf{b}$."],
          },
        },
        {
          id: "edm11-u2-column-vectors-q3",
          difficulty: "challenge",
          tier: "higher",
          totalMarks: 4,
          stem: "$\\mathbf{a}=\\begin{pmatrix} 2 \\\\ 1 \\end{pmatrix}$ and $\\mathbf{b}=\\begin{pmatrix} -4 \\\\ 5 \\end{pmatrix}$\n\nWork out the magnitude of $3\\mathbf{a}+\\mathbf{b}$. Give your answer correct to 3 significant figures.",
          response: { type: "numeric", parts: [{ label: "$|3\\mathbf{a}+\\mathbf{b}|$", answer: 8.25, tolerance: 0.01 }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Magnitude", statement: "$\\left|\\begin{pmatrix} x \\\\ y \\end{pmatrix}\\right|=\\sqrt{x^2+y^2}$" }],
            steps: [
              { reasoning: "Multiply $\\mathbf{a}$ by 3.", working: "3\\mathbf{a}=\\begin{pmatrix} 6 \\\\ 3 \\end{pmatrix}", marks: 1, markCode: "M" },
              { reasoning: "Add $\\mathbf{b}$.", working: "\\begin{pmatrix} 2 \\\\ 8 \\end{pmatrix}", marks: 1, markCode: "A" },
              { reasoning: "Use Pythagoras for the magnitude.", working: "\\sqrt{2^2+8^2}=\\sqrt{68}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate to 3 significant figures.", working: "8.246\\ldots = 8.25", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$8.25$",
            commonErrors: ["Adding the magnitudes of $3\\mathbf{a}$ and $\\mathbf{b}$ instead of the vectors.", "Adding $2+8$ rather than using Pythagoras."],
          },
        },
        {
          id: "edm11-u2-column-vectors-q4",
          difficulty: "challenge",
          tier: "higher",
          totalMarks: 9,
          stem: "The points A, B and C have coordinates $A(1,2)$, $B(5,5)$ and $C(9,-1)$.",
          parts: [
            { label: "a", prompt: "Write $\\overrightarrow{AB}$ as a column vector.", marks: 1 },
            { label: "b", prompt: "Work out $\\left|\\overrightarrow{AB}\\right|$.", marks: 2 },
            { label: "c", prompt: "Work out $\\left|\\overrightarrow{AC}\\right|$. Give your answer correct to 3 significant figures.", marks: 3 },
            { label: "d", prompt: "ABCD is a parallelogram. Find the coordinates of D, and verify that $\\overrightarrow{AD}=\\overrightarrow{BC}$.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Vector between points", statement: "$\\overrightarrow{AB}=\\begin{pmatrix} x_B-x_A \\\\ y_B-y_A \\end{pmatrix}$" },
              { kind: "property", name: "Parallelogram", statement: "In parallelogram ABCD, $\\overrightarrow{AB}=\\overrightarrow{DC}$ and $\\overrightarrow{AD}=\\overrightarrow{BC}$." },
            ],
            steps: [
              { part: "a", reasoning: "Subtract the coordinates of A from B.", working: "\\begin{pmatrix} 4 \\\\ 3 \\end{pmatrix}", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Use Pythagoras.", working: "\\sqrt{4^2+3^2}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate.", working: "5", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Find $\\overrightarrow{AC}=\\begin{pmatrix} 8 \\\\ -3 \\end{pmatrix}$ (from $\\overrightarrow{AB}+\\overrightarrow{BC}$ or from the coordinates).", working: "\\overrightarrow{AC}=\\begin{pmatrix} 9-1 \\\\ -1-2 \\end{pmatrix}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Apply Pythagoras.", working: "\\sqrt{8^2+(-3)^2}=\\sqrt{73}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate to 3 significant figures.", working: "8.544\\ldots=8.54", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Since $\\overrightarrow{DC}=\\overrightarrow{AB}$, subtract $\\overrightarrow{AB}$ from C.", working: "D=(9-4,\\,-1-3)", marks: 1, markCode: "M" },
              { part: "d", reasoning: "State D.", working: "D=(5,-4)", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Check: $\\overrightarrow{AD}=\\begin{pmatrix} 4 \\\\ -6 \\end{pmatrix}$ and $\\overrightarrow{BC}=\\begin{pmatrix} 4 \\\\ -6 \\end{pmatrix}$.", working: "\\overrightarrow{AD}=\\overrightarrow{BC}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) $\\begin{pmatrix} 4 \\\\ 3 \\end{pmatrix}$ (b) 5 (c) 8.54 (d) $D=(5,-4)$",
            commonErrors: ["Finding $\\overrightarrow{BA}$ instead of $\\overrightarrow{AB}$.", "Adding the coordinates of A and C to find D."],
          },
        },
      ],
    },
    {
      id: "edm11-u2-vector-geometry",
      title: "Vector geometry and proof",
      skill: "Express vectors in terms of $\\mathbf{a}$ and $\\mathbf{b}$ and use them to prove geometric results.",
      lesson: {
        sections: [
          {
            heading: "Routes and the triangle law",
            body: "To find a vector between two points, choose a route made of known vectors. For example $\\overrightarrow{AB}=\\overrightarrow{AO}+\\overrightarrow{OB}=-\\mathbf{a}+\\mathbf{b}=\\mathbf{b}-\\mathbf{a}$. Going backwards along a vector gives its negative.",
          },
          {
            heading: "Ratios on a line",
            body: "If $P$ lies on $AB$ with $AP:PB=m:n$, then $\\overrightarrow{AP}=\\frac{m}{m+n}\\overrightarrow{AB}$. The midpoint of $AB$ has $\\overrightarrow{OM}=\\frac12(\\mathbf{a}+\\mathbf{b})$.",
          },
          {
            heading: "Proving parallel and collinear",
            body: "Two vectors are parallel if one is a scalar multiple of the other. Three points are collinear if two of the vectors joining them are parallel and the vectors share a common point. State the conclusion in words in a proof.",
          },
        ],
        keyFormulas: [
          { name: "Subtraction", statement: "$\\overrightarrow{AB}=\\mathbf{b}-\\mathbf{a}$ where $\\overrightarrow{OA}=\\mathbf{a}$, $\\overrightarrow{OB}=\\mathbf{b}$" },
          { name: "Parallel", statement: "$\\mathbf{u}=k\\mathbf{v}$ means $\\mathbf{u}$ is parallel to $\\mathbf{v}$" },
        ],
        workedExample: {
          problem: "$\\overrightarrow{OA}=\\mathbf{a}$, $\\overrightarrow{OB}=\\mathbf{b}$. M is the midpoint of AB. Find $\\overrightarrow{OM}$.",
          solution: "$\\overrightarrow{AB}=\\mathbf{b}-\\mathbf{a}$. $\\overrightarrow{OM}=\\overrightarrow{OA}+\\frac12\\overrightarrow{AB}=\\mathbf{a}+\\frac12(\\mathbf{b}-\\mathbf{a})=\\frac12(\\mathbf{a}+\\mathbf{b})$.",
        },
      },
      questions: [
        {
          id: "edm11-u2-vector-geometry-q1",
          difficulty: "foundation",
          tier: "higher",
          totalMarks: 2,
          stem: "$\\overrightarrow{OA}=\\mathbf{a}$ and $\\overrightarrow{OB}=\\mathbf{b}$. M is the midpoint of AB.\n\nWhat is $\\overrightarrow{OM}$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac12(\\mathbf{b}-\\mathbf{a})$" },
              { id: "b", text: "$\\frac12\\mathbf{a}+\\mathbf{b}$" },
              { id: "c", text: "$\\frac12(\\mathbf{a}+\\mathbf{b})$" },
              { id: "d", text: "$\\mathbf{a}+\\mathbf{b}$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "law", name: "Triangle law", statement: "$\\overrightarrow{OM}=\\overrightarrow{OA}+\\overrightarrow{AM}$" }],
            steps: [
              { reasoning: "$\\overrightarrow{AB}=\\mathbf{b}-\\mathbf{a}$ and $\\overrightarrow{AM}=\\frac12\\overrightarrow{AB}$.", working: "\\overrightarrow{OM}=\\mathbf{a}+\\frac12(\\mathbf{b}-\\mathbf{a})", marks: 1, markCode: "M" },
              { reasoning: "Simplify.", working: "\\frac12(\\mathbf{a}+\\mathbf{b})", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** $\\frac12(\\mathbf{a}+\\mathbf{b})$",
            commonErrors: ["Giving $\\overrightarrow{AM}$ instead of $\\overrightarrow{OM}$ (option b).", "Forgetting to halve both vectors."],
          },
        },
        {
          id: "edm11-u2-vector-geometry-q2",
          difficulty: "core",
          tier: "higher",
          totalMarks: 3,
          stem: "OAB is a triangle. $\\overrightarrow{OA}=\\mathbf{a}$ and $\\overrightarrow{OB}=\\mathbf{b}$. The point P lies on AB such that $AP:PB=1:2$.\n\nFind $\\overrightarrow{OP}$ in terms of $\\mathbf{a}$ and $\\mathbf{b}$. Give your answer in its simplest form.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Ratio on a line", statement: "If $AP:PB=1:2$ then $\\overrightarrow{AP}=\\frac13\\overrightarrow{AB}$." }],
            steps: [
              { reasoning: "Find $\\overrightarrow{AB}$.", working: "\\overrightarrow{AB}=\\mathbf{b}-\\mathbf{a}", marks: 1, markCode: "B" },
              { reasoning: "P is one third of the way from A to B.", working: "\\overrightarrow{OP}=\\mathbf{a}+\\frac13(\\mathbf{b}-\\mathbf{a})", marks: 1, markCode: "M" },
              { reasoning: "Simplify.", working: "\\frac23\\mathbf{a}+\\frac13\\mathbf{b}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\overrightarrow{OP}=\\frac23\\mathbf{a}+\\frac13\\mathbf{b}$ (oe)",
            commonErrors: ["Using $\\frac12$ or $\\frac23$ of $\\overrightarrow{AB}$ instead of $\\frac13$.", "Using $\\mathbf{a}-\\mathbf{b}$ for $\\overrightarrow{AB}$."],
            examinerNote: "Accept $\\frac13(2\\mathbf{a}+\\mathbf{b})$ (oe).",
          },
        },
        {
          id: "edm11-u2-vector-geometry-q3",
          difficulty: "challenge",
          tier: "higher",
          totalMarks: 4,
          stem: "O is the origin. $\\overrightarrow{OP}=2\\mathbf{a}+\\mathbf{b}$, $\\overrightarrow{OQ}=5\\mathbf{a}+4\\mathbf{b}$ and $\\overrightarrow{OR}=9\\mathbf{a}+8\\mathbf{b}$.\n\nShow that P, Q and R lie on a straight line.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Collinear points", statement: "If $\\overrightarrow{PQ}$ and $\\overrightarrow{QR}$ are parallel and share the point Q, then P, Q and R are collinear." }],
            steps: [
              { reasoning: "Find $\\overrightarrow{PQ}$.", working: "\\overrightarrow{PQ}=\\overrightarrow{OQ}-\\overrightarrow{OP}=3\\mathbf{a}+3\\mathbf{b}", marks: 1, markCode: "M" },
              { reasoning: "Find $\\overrightarrow{QR}$.", working: "\\overrightarrow{QR}=\\overrightarrow{OR}-\\overrightarrow{OQ}=4\\mathbf{a}+4\\mathbf{b}", marks: 1, markCode: "M" },
              { reasoning: "Show one is a multiple of the other.", working: "\\overrightarrow{QR}=\\frac43\\overrightarrow{PQ}", marks: 1, markCode: "A" },
              { reasoning: "The vectors are parallel and both pass through Q, so P, Q and R are on the same straight line.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "$\\overrightarrow{QR}=\\frac43\\overrightarrow{PQ}$, parallel with common point Q, so P, Q, R are collinear.",
            commonErrors: ["Showing parallel vectors but not stating the common point.", "Subtracting in the wrong order."],
          },
        },
        {
          id: "edm11-u2-vector-geometry-q4",
          difficulty: "challenge",
          tier: "higher",
          totalMarks: 10,
          stem: "OAB is a triangle. $\\overrightarrow{OA}=6\\mathbf{a}$ and $\\overrightarrow{OB}=6\\mathbf{b}$. M is the midpoint of OA and N is the midpoint of OB. P is the point on AB such that $AP:PB=1:2$.",
          parts: [
            { label: "a", prompt: "Find $\\overrightarrow{AB}$ in terms of $\\mathbf{a}$ and $\\mathbf{b}$.", marks: 1 },
            { label: "b", prompt: "Find $\\overrightarrow{MN}$ in terms of $\\mathbf{a}$ and $\\mathbf{b}$.", marks: 2 },
            { label: "c", prompt: "Prove that MN is parallel to AB, and that MN is half the length of AB.", marks: 2 },
            { label: "d", prompt: "Find $\\overrightarrow{OP}$ in terms of $\\mathbf{a}$ and $\\mathbf{b}$.", marks: 3 },
            { label: "e", prompt: "The point Q is such that $\\overrightarrow{OQ}=2\\mathbf{a}+\\mathbf{b}$. Show that O, Q and P lie on a straight line.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "law", name: "Triangle law", statement: "$\\overrightarrow{XY}=\\overrightarrow{XO}+\\overrightarrow{OY}$" },
              { kind: "principle", name: "Parallel vectors", statement: "$\\mathbf{u}=k\\mathbf{v}$ means parallel; the length ratio is $|k|$." },
            ],
            steps: [
              { part: "a", reasoning: "Route A to O to B.", working: "\\overrightarrow{AB}=-6\\mathbf{a}+6\\mathbf{b}=6\\mathbf{b}-6\\mathbf{a}", marks: 1, markCode: "B" },
              { part: "b", reasoning: "$\\overrightarrow{OM}=3\\mathbf{a}$ and $\\overrightarrow{ON}=3\\mathbf{b}$, so route M to O to N.", working: "\\overrightarrow{MN}=-3\\mathbf{a}+3\\mathbf{b}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the result.", working: "3\\mathbf{b}-3\\mathbf{a}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Compare the two vectors.", working: "\\overrightarrow{AB}=6\\mathbf{b}-6\\mathbf{a}=2(3\\mathbf{b}-3\\mathbf{a})=2\\overrightarrow{MN}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Since $\\overrightarrow{AB}$ is a scalar multiple of $\\overrightarrow{MN}$, they are parallel, and $MN=\\frac12AB$.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "$\\overrightarrow{AP}=\\frac13\\overrightarrow{AB}$.", working: "\\overrightarrow{AP}=2\\mathbf{b}-2\\mathbf{a}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Route O to A to P.", working: "\\overrightarrow{OP}=6\\mathbf{a}+2\\mathbf{b}-2\\mathbf{a}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Simplify.", working: "4\\mathbf{a}+2\\mathbf{b}", marks: 1, markCode: "A" },
              { part: "e", reasoning: "Compare $\\overrightarrow{OP}$ with $\\overrightarrow{OQ}$.", working: "\\overrightarrow{OP}=4\\mathbf{a}+2\\mathbf{b}=2(2\\mathbf{a}+\\mathbf{b})=2\\overrightarrow{OQ}", marks: 1, markCode: "M" },
              { part: "e", reasoning: "The vectors are parallel and share the point O, so O, Q, P are collinear.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $6\\mathbf{b}-6\\mathbf{a}$ (b) $3\\mathbf{b}-3\\mathbf{a}$ (c) $\\overrightarrow{AB}=2\\overrightarrow{MN}$ (d) $4\\mathbf{a}+2\\mathbf{b}$ (e) $\\overrightarrow{OP}=2\\overrightarrow{OQ}$, so collinear",
            commonErrors: ["Writing $\\overrightarrow{AB}=6\\mathbf{a}-6\\mathbf{b}$.", "Using $\\overrightarrow{AP}=\\frac12\\overrightarrow{AB}$ for the ratio $1:2$."],
            examinerNote: "In (c) both parallel and the length ratio must be stated for the R mark.",
          },
        },
      ],
    },
  ],
};
