import type { Lesson } from "../../../types.ts";

export const lesson91: Lesson = {
  id: "ciem-u9-lesson-9-1",
  code: "9-1",
  title: "Vector Notation and Algebra",
  goal: "I CAN use column vector notation, add, subtract and scalar-multiply vectors, and find vectors between points.",
  standards: ["0580 9.1", "0580 9.2"],
  vocabulary: [
    { term: "Vector", definition: "A quantity with magnitude and direction, written as a column vector $\\begin{pmatrix}a\\\\b\\end{pmatrix}$ or $\\overrightarrow{AB}$." },
    { term: "Column vector", definition: "$\\begin{pmatrix}x\\\\y\\end{pmatrix}$ — horizontal and vertical components." },
    { term: "Position vector", definition: "The vector from the origin to a point." },
    { term: "Scalar multiple", definition: "$k\\mathbf{v}$ scales a vector by factor $k$; negative $k$ reverses direction." },
    { term: "Equal vectors", definition: "Vectors with the same magnitude and direction; they need not start at the same point." },
  ],
  concepts: [
    {
      id: "ciem-u9-vector-basics",
      title: "Vector notation and operations",
      skill: "Add, subtract and scalar-multiply column vectors; find $\\overrightarrow{AB}$ from position vectors.",
      lesson: {
        sections: [
          {
            heading: "Column vectors",
            body: "$\\begin{pmatrix}3\\\\-2\\end{pmatrix}$ means 3 units right and 2 units down. The top entry is the $x$-component, bottom is $y$.",
          },
          {
            heading: "Operations",
            body: "- Addition: $\\begin{pmatrix}a\\\\b\\end{pmatrix}+\\begin{pmatrix}c\\\\d\\end{pmatrix}=\\begin{pmatrix}a+c\\\\b+d\\end{pmatrix}$\n- Subtraction: component-wise\n- Scalar multiple: $k\\begin{pmatrix}a\\\\b\\end{pmatrix}=\\begin{pmatrix}ka\\\\kb\\end{pmatrix}$",
          },
          {
            heading: "Vector between two points",
            body: "If $A$ has position vector $\\mathbf{a}$ and $B$ has $\\mathbf{b}$, then $\\overrightarrow{AB}=\\mathbf{b}-\\mathbf{a}$. Going from $A$ to $B$ means 'destination minus start'.",
          },
        ],
        keyFormulas: [
          { name: "AB vector", statement: "$\\overrightarrow{AB}=\\mathbf{b}-\\mathbf{a}$" },
          { name: "Scalar multiple", statement: "$k\\begin{pmatrix}a\\\\b\\end{pmatrix}=\\begin{pmatrix}ka\\\\kb\\end{pmatrix}$" },
        ],
        workedExample: {
          problem: "$A(1,2)$ and $B(4,6)$. Find $\\overrightarrow{AB}$.",
          solution: "$\\overrightarrow{AB}=\\begin{pmatrix}4\\\\6\\end{pmatrix}-\\begin{pmatrix}1\\\\2\\end{pmatrix}=\\begin{pmatrix}3\\\\4\\end{pmatrix}$.",
        },
      },
      questions: [
        {
          id: "ciem-u9-vector-basics-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does the column vector $\\begin{pmatrix}3\\\\-2\\end{pmatrix}$ represent?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "3 units right and 2 units down" },
              { id: "b", text: "2 units right and 3 units down" },
              { id: "c", text: "3 units left and 2 units up" },
              { id: "d", text: "A rotation of 3 by $-2$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Column vector", statement: "Top = $x$-component, bottom = $y$-component." },
            ],
            steps: [
              { reasoning: "Read the components.", working: "(3,-2)", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** 3 right, 2 down",
            commonErrors: ["Swapping components."],
          },
        },
        {
          id: "ciem-u9-vector-basics-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find $\\begin{pmatrix}4\\\\1\\end{pmatrix}+\\begin{pmatrix}-2\\\\5\\end{pmatrix}$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Vector addition", statement: "Add corresponding components." },
            ],
            steps: [
              { reasoning: "Add components.", working: "\\begin{pmatrix}4-2\\\\1+5\\end{pmatrix}", marks: 1, markCode: "M" },
              { reasoning: "Simplify.", working: "=\\begin{pmatrix}2\\\\6\\end{pmatrix}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\begin{pmatrix}2\\\\6\\end{pmatrix}$",
            commonErrors: ["Subtracting instead of adding."],
          },
        },
        {
          id: "ciem-u9-vector-basics-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "$A(2,1)$ and $B(5,7)$. Find $\\overrightarrow{AB}$ and $\\overrightarrow{BA}$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Vector between points", statement: "$\\overrightarrow{AB}=\\mathbf{b}-\\mathbf{a}$" },
            ],
            steps: [
              { reasoning: "$\\overrightarrow{AB}=\\begin{pmatrix}5\\\\7\\end{pmatrix}-\\begin{pmatrix}2\\\\1\\end{pmatrix}$.", working: "=\\begin{pmatrix}3\\\\6\\end{pmatrix}", marks: 1, markCode: "M" },
              { reasoning: "$\\overrightarrow{BA}$ is the negative.", working: "=-\\begin{pmatrix}3\\\\6\\end{pmatrix}", marks: 1, markCode: "M" },
              { reasoning: "Write both vectors.", working: "\\overrightarrow{AB}=\\begin{pmatrix}3\\\\6\\end{pmatrix},\\ \\overrightarrow{BA}=\\begin{pmatrix}-3\\\\-6\\end{pmatrix}", marks: 2, markCode: "A" },
            ],
            finalAnswer: "$\\overrightarrow{AB}=\\begin{pmatrix}3\\\\6\\end{pmatrix}$, $\\overrightarrow{BA}=\\begin{pmatrix}-3\\\\-6\\end{pmatrix}$",
            commonErrors: ["Reversing the subtraction for $\\overrightarrow{AB}$."],
          },
        },
        {
          id: "ciem-u9-vector-basics-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Points $A(1,2)$, $B(4,6)$, $C(7,2)$ form a triangle.",
          parts: [
            { label: "a", prompt: "Find $\\overrightarrow{AB}$, $\\overrightarrow{BC}$ and $\\overrightarrow{CA}$.", marks: 4 },
            { label: "b", prompt: "Verify that $\\overrightarrow{AB}+\\overrightarrow{BC}+\\overrightarrow{CA}=\\mathbf{0}$.", marks: 3 },
            { label: "c", prompt: "Find the midpoint $M$ of $AB$ as a position vector.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Vector between points", statement: "$\\overrightarrow{PQ}=\\mathbf{q}-\\mathbf{p}$" },
              { kind: "formula", name: "Midpoint", statement: "$\\mathbf{m}=\\frac{\\mathbf{a}+\\mathbf{b}}{2}$" },
            ],
            steps: [
              { part: "a", reasoning: "$\\overrightarrow{AB}=\\begin{pmatrix}4\\\\6\\end{pmatrix}-\\begin{pmatrix}1\\\\2\\end{pmatrix}=\\begin{pmatrix}3\\\\4\\end{pmatrix}$.", working: "\\begin{pmatrix}3\\\\4\\end{pmatrix}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "$\\overrightarrow{BC}=\\begin{pmatrix}7\\\\2\\end{pmatrix}-\\begin{pmatrix}4\\\\6\\end{pmatrix}=\\begin{pmatrix}3\\\\-4\\end{pmatrix}$.", working: "\\begin{pmatrix}3\\\\-4\\end{pmatrix}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "$\\overrightarrow{CA}=\\begin{pmatrix}1\\\\2\\end{pmatrix}-\\begin{pmatrix}7\\\\2\\end{pmatrix}=\\begin{pmatrix}-6\\\\0\\end{pmatrix}$.", working: "\\begin{pmatrix}-6\\\\0\\end{pmatrix}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State all three.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Add the three vectors.", working: "\\begin{pmatrix}3+3-6\\\\4-4+0\\end{pmatrix}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Simplify.", working: "=\\begin{pmatrix}0\\\\0\\end{pmatrix}=\\mathbf{0}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the result.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Midpoint $=\\frac12\\left(\\begin{pmatrix}1\\\\2\\end{pmatrix}+\\begin{pmatrix}4\\\\6\\end{pmatrix}\\right)$.", working: "=\\frac12\\begin{pmatrix}5\\\\8\\end{pmatrix}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State the position vector.", working: "=\\begin{pmatrix}2.5\\\\4\\end{pmatrix}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $\\overrightarrow{AB}=\\begin{pmatrix}3\\\\4\\end{pmatrix}$, $\\overrightarrow{BC}=\\begin{pmatrix}3\\\\-4\\end{pmatrix}$, $\\overrightarrow{CA}=\\begin{pmatrix}-6\\\\0\\end{pmatrix}$ (b) $\\mathbf{0}$ (c) $\\begin{pmatrix}2.5\\\\4\\end{pmatrix}$",
            commonErrors: ["In (b) sign errors producing nonzero sum.", "In (c) forgetting to halve."],
          },
        },
      ],
    },
    {
      id: "ciem-u9-parallel-vectors",
      title: "Parallel and equal vectors",
      skill: "Use scalar multiples to prove lines are parallel and find ratios along a line.",
      lesson: {
        sections: [
          {
            heading: "Parallel vectors",
            body: "Two vectors are **parallel** if one is a scalar multiple of the other: $\\mathbf{u}=k\\mathbf{v}$. Direction is what matters — magnitude can differ.",
          },
          {
            heading: "Collinear points",
            body: "Points $A$, $B$, $C$ are collinear if $\\overrightarrow{AB}=k\\overrightarrow{AC}$ for some scalar $k$, or if $\\overrightarrow{AB}$ and $\\overrightarrow{BC}$ are parallel and share point $B$.",
          },
          {
            heading: "Ratio along a line",
            body: "If $\\overrightarrow{AB}=k\\overrightarrow{AC}$ with $0<k<1$, then $B$ divides $AC$ in ratio $k:(1-k)$.",
          },
        ],
        keyFormulas: [
          { name: "Parallel test", statement: "$\\mathbf{u}=k\\mathbf{v}$ for some scalar $k$" },
          { name: "Collinear", statement: "$\\overrightarrow{AB}=k\\overrightarrow{AC}$" },
        ],
        workedExample: {
          problem: "$\\overrightarrow{AB}=\\begin{pmatrix}4\\\\6\\end{pmatrix}$ and $\\overrightarrow{CD}=\\begin{pmatrix}2\\\\3\\end{pmatrix}$. Are they parallel?",
          solution: "$\\begin{pmatrix}4\\\\6\\end{pmatrix}=2\\begin{pmatrix}2\\\\3\\end{pmatrix}$ — yes, parallel (same direction, double magnitude).",
        },
      },
      questions: [
        {
          id: "ciem-u9-parallel-vectors-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Two vectors are parallel when one is what of the other?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A scalar multiple" },
              { id: "b", text: "The negative" },
              { id: "c", text: "The perpendicular" },
              { id: "d", text: "The same length" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Parallel vectors", statement: "$\\mathbf{u}=k\\mathbf{v}$." },
            ],
            steps: [
              { reasoning: "Recall the test.", working: "k\\mathbf{v}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** A scalar multiple",
            commonErrors: ["Requiring equal magnitude."],
          },
        },
        {
          id: "ciem-u9-parallel-vectors-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "$\\overrightarrow{AB}=\\begin{pmatrix}6\\\\9\\end{pmatrix}$ and $\\overrightarrow{CD}=\\begin{pmatrix}4\\\\6\\end{pmatrix}$. Are $AB$ and $CD$ parallel? Justify.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Parallel test", statement: "Check if one vector is a scalar multiple of the other." },
            ],
            steps: [
              { reasoning: "Ratio of components: $\\frac63=2$, $\\frac94=2.25$ — not equal, so not parallel? Check: $6/4=1.5$, $9/6=1.5$ — equal!",
                working: "\\frac64=\\frac96=1.5", marks: 1, markCode: "M" },
              { reasoning: "Same ratio for both components → parallel.", working: "\\overrightarrow{AB}=1.5\\overrightarrow{CD}", marks: 1, markCode: "M" },
              { reasoning: "State the conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Yes — $\\overrightarrow{AB}=1.5\\overrightarrow{CD}$",
            commonErrors: ["Comparing only one component pair."],
          },
        },
        {
          id: "ciem-u9-parallel-vectors-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "$A(0,0)$, $B(3,4)$, $C(6,8)$. Show that $A$, $B$, $C$ are collinear and find $AB:BC$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Collinear test", statement: "$\\overrightarrow{AB}=k\\overrightarrow{AC}$" },
            ],
            steps: [
              { reasoning: "$\\overrightarrow{AB}=\\begin{pmatrix}3\\\\4\\end{pmatrix}$, $\\overrightarrow{AC}=\\begin{pmatrix}6\\\\8\\end{pmatrix}=2\\begin{pmatrix}3\\\\4\\end{pmatrix}$.", working: "\\overrightarrow{AC}=2\\overrightarrow{AB}", marks: 1, markCode: "M" },
              { reasoning: "Since $\\overrightarrow{AC}=2\\overrightarrow{AB}$, $B$ lies on $AC$ — collinear.", marks: 1, markCode: "M" },
              { reasoning: "$AB$ is half of $AC$, so $AB:BC=1:1$.", working: "BC=AC-AB", marks: 1, markCode: "M" },
              { reasoning: "State the ratio.", working: "1:1", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Collinear; $AB:BC=1:1$",
            commonErrors: ["Checking only that slopes match without vector reasoning."],
          },
        },
        {
          id: "ciem-u9-parallel-vectors-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "$A(0,0)$, $B(4,2)$, $C(6,6)$, $D(2,4)$.",
          parts: [
            { label: "a", prompt: "Find $\\overrightarrow{AB}$ and $\\overrightarrow{DC}$. Show $AB \\parallel DC$.", marks: 3 },
            { label: "b", prompt: "Find $\\overrightarrow{AD}$ and $\\overrightarrow{BC}$. Show $AD \\parallel BC$.", marks: 3 },
            { label: "c", prompt: "What type of quadrilateral is $ABCD$? Justify.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Vector between points", statement: "$\\overrightarrow{PQ}=\\mathbf{q}-\\mathbf{p}$" },
              { kind: "property", name: "Parallelogram", statement: "Both pairs of opposite sides parallel → parallelogram." },
            ],
            steps: [
              { part: "a", reasoning: "$\\overrightarrow{AB}=\\begin{pmatrix}4\\\\2\\end{pmatrix}$; $\\overrightarrow{DC}=\\begin{pmatrix}6-2\\\\6-4\\end{pmatrix}=\\begin{pmatrix}4\\\\2\\end{pmatrix}$.", working: "\\begin{pmatrix}4\\\\2\\end{pmatrix},\\ \\begin{pmatrix}4\\\\2\\end{pmatrix}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "The vectors are equal, hence parallel (and equal in length).", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the conclusion.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$\\overrightarrow{AD}=\\begin{pmatrix}2\\\\4\\end{pmatrix}$; $\\overrightarrow{BC}=\\begin{pmatrix}6-4\\\\6-2\\end{pmatrix}=\\begin{pmatrix}2\\\\4\\end{pmatrix}$.", working: "\\begin{pmatrix}2\\\\4\\end{pmatrix},\\ \\begin{pmatrix}2\\\\4\\end{pmatrix}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Equal vectors → parallel.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the conclusion.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Both pairs of opposite sides are equal and parallel.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Conclude the shape.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Justify as parallelogram.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$ABCD$ is a parallelogram",
            commonErrors: ["Using $\\overrightarrow{CD}$ instead of $\\overrightarrow{DC}$ and getting a sign error."],
          },
        },
      ],
    },
    {
      id: "ciem-u9-vector-geometry",
      title: "Vectors in geometry",
      skill: "Use position vectors to solve geometric problems: midpoints, ratios, and vector proofs.",
      lesson: {
        sections: [
          {
            heading: "Position vectors",
            body: "Point $A$ has position vector $\\mathbf{a}$ (from origin $O$). Then $\\overrightarrow{AB}=\\mathbf{b}-\\mathbf{a}$, and midpoint of $AB$ has position vector $\\frac{\\mathbf{a}+\\mathbf{b}}{2}$.",
          },
          {
            heading: "Point dividing a line",
            body: "Point $P$ dividing $AB$ in ratio $m:n$ has position vector $\\frac{n\\mathbf{a}+m\\mathbf{b}}{m+n}$.",
          },
          {
            heading: "Vector proofs",
            body: "To prove a geometric result, express the relevant vectors in terms of position vectors and show the required relationship (parallel, equal, or a ratio).",
          },
        ],
        keyFormulas: [
          { name: "Midpoint", statement: "$\\frac{\\mathbf{a}+\\mathbf{b}}{2}$" },
          { name: "Ratio m:n", statement: "$\\frac{n\\mathbf{a}+m\\mathbf{b}}{m+n}$" },
        ],
        workedExample: {
          problem: "$A$ and $B$ have position vectors $\\begin{pmatrix}2\\\\0\\end{pmatrix}$ and $\\begin{pmatrix}8\\\\6\\end{pmatrix}$. Find the midpoint.",
          solution: "$\\frac12\\left(\\begin{pmatrix}2\\\\0\\end{pmatrix}+\\begin{pmatrix}8\\\\6\\end{pmatrix}\\right)=\\begin{pmatrix}5\\\\3\\end{pmatrix}$.",
        },
      },
      questions: [
        {
          id: "ciem-u9-vector-geometry-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The midpoint of $AB$ has position vector:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac{\\mathbf{a}+\\mathbf{b}}{2}$" },
              { id: "b", text: "$\\mathbf{a}+\\mathbf{b}$" },
              { id: "c", text: "$\\frac{\\mathbf{a}-\\mathbf{b}}{2}$" },
              { id: "d", text: "$\\mathbf{b}-\\mathbf{a}$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Midpoint", statement: "$\\frac{\\mathbf{a}+\\mathbf{b}}{2}$" },
            ],
            steps: [
              { reasoning: "Recall the formula.", working: "\\frac{a+b}{2}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $\\frac{\\mathbf{a}+\\mathbf{b}}{2}$",
            commonErrors: ["Forgetting the factor $\\frac12$."],
          },
        },
        {
          id: "ciem-u9-vector-geometry-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "$A$ and $B$ have position vectors $\\begin{pmatrix}1\\\\3\\end{pmatrix}$ and $\\begin{pmatrix}7\\\\9\\end{pmatrix}$. Find the position vector of the midpoint of $AB$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Midpoint", statement: "$\\frac{\\mathbf{a}+\\mathbf{b}}{2}$" },
            ],
            steps: [
              { reasoning: "Add position vectors.", working: "\\begin{pmatrix}1+7\\\\3+9\\end{pmatrix}=\\begin{pmatrix}8\\\\12\\end{pmatrix}", marks: 1, markCode: "M" },
              { reasoning: "Halve.", working: "=\\begin{pmatrix}4\\\\6\\end{pmatrix}", marks: 1, markCode: "M" },
              { reasoning: "State the position vector.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\begin{pmatrix}4\\\\6\\end{pmatrix}$",
            commonErrors: ["Adding without halving."],
          },
        },
        {
          id: "ciem-u9-vector-geometry-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "$A$ and $B$ have position vectors $\\begin{pmatrix}0\\\\0\\end{pmatrix}$ and $\\begin{pmatrix}12\\\\8\\end{pmatrix}$. Point $P$ divides $AB$ in the ratio $1:3$. Find the position vector of $P$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Section formula", statement: "$\\mathbf{p}=\\frac{n\\mathbf{a}+m\\mathbf{b}}{m+n}$ for ratio $m:n$" },
            ],
            steps: [
              { reasoning: "Ratio $1:3$ means $AP:PB=1:3$; $P$ is $\\frac14$ of the way from $A$ to $B$.", working: "\\frac{3\\mathbf{a}+1\\mathbf{b}}{4}", marks: 1, markCode: "M" },
              { reasoning: "Substitute $\\mathbf{a}=\\begin{pmatrix}0\\\\0\\end{pmatrix}$, $\\mathbf{b}=\\begin{pmatrix}12\\\\8\\end{pmatrix}$.", working: "=\\frac14\\begin{pmatrix}12\\\\8\\end{pmatrix}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "=\\begin{pmatrix}3\\\\2\\end{pmatrix}", marks: 1, markCode: "M" },
              { reasoning: "State the position vector.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\begin{pmatrix}3\\\\2\\end{pmatrix}$",
            commonErrors: ["Using $\\frac13$ instead of $\\frac14$ — ratio $1:3$ divides into 4 parts."],
          },
        },
        {
          id: "ciem-u9-vector-geometry-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "In triangle $ABC$, $D$ is the midpoint of $BC$. Position vectors: $\\mathbf{a}=\\begin{pmatrix}0\\\\0\\end{pmatrix}$, $\\mathbf{b}=\\begin{pmatrix}6\\\\0\\end{pmatrix}$, $\\mathbf{c}=\\begin{pmatrix}4\\\\6\\end{pmatrix}$.",
          parts: [
            { label: "a", prompt: "Find the position vector of $D$.", marks: 2 },
            { label: "b", prompt: "Show that $\\overrightarrow{AD}=\\frac12(\\overrightarrow{AB}+\\overrightarrow{AC})$, i.e. the median from $A$ to $D$.", marks: 4 },
            { label: "c", prompt: "Find the position vector of the centroid $G$ of the triangle.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Midpoint", statement: "$\\mathbf{d}=\\frac{\\mathbf{b}+\\mathbf{c}}{2}$" },
              { kind: "formula", name: "Centroid", statement: "$\\mathbf{g}=\\frac{\\mathbf{a}+\\mathbf{b}+\\mathbf{c}}{3}$" },
            ],
            steps: [
              { part: "a", reasoning: "$\\mathbf{d}=\\frac12\\left(\\begin{pmatrix}6\\\\0\\end{pmatrix}+\\begin{pmatrix}4\\\\6\\end{pmatrix}\\right)$.", working: "=\\frac12\\begin{pmatrix}10\\\\6\\end{pmatrix}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the position vector.", working: "=\\begin{pmatrix}5\\\\3\\end{pmatrix}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$\\overrightarrow{AD}=\\mathbf{d}-\\mathbf{a}=\\begin{pmatrix}5\\\\3\\end{pmatrix}$.", working: "\\begin{pmatrix}5\\\\3\\end{pmatrix}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "$\\overrightarrow{AB}=\\begin{pmatrix}6\\\\0\\end{pmatrix}$, $\\overrightarrow{AC}=\\begin{pmatrix}4\\\\6\\end{pmatrix}$; half-sum $=\\frac12\\begin{pmatrix}10\\\\6\\end{pmatrix}=\\begin{pmatrix}5\\\\3\\end{pmatrix}$.", working: "\\frac12(\\overrightarrow{AB}+\\overrightarrow{AC})", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Both equal $\\begin{pmatrix}5\\\\3\\end{pmatrix}$ — the median vector from $A$.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the result.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Centroid $=\\frac13(\\mathbf{a}+\\mathbf{b}+\\mathbf{c})$.", working: "=\\frac13\\begin{pmatrix}0+6+4\\\\0+0+6\\end{pmatrix}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate.", working: "=\\frac13\\begin{pmatrix}10\\\\6\\end{pmatrix}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State the position vector.", working: "=\\begin{pmatrix}\\frac{10}{3}\\\\2\\end{pmatrix}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $\\begin{pmatrix}5\\\\3\\end{pmatrix}$ (b) $\\overrightarrow{AD}=\\frac12(\\overrightarrow{AB}+\\overrightarrow{AC})=\\begin{pmatrix}5\\\\3\\end{pmatrix}$ (c) $\\begin{pmatrix}10/3\\\\2\\end{pmatrix}$",
            commonErrors: ["In (b) forgetting that $\\mathbf{a}=\\mathbf{0}$ simplifies things.", "In (c) dividing by 2 instead of 3."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciem-u9-vectors-notes",
      title: "Vectors — revision notes",
      summary: "Column vector notation, operations, parallel vectors and position vector geometry.",
      sections: [
        {
          heading: "Basics",
          body: "$\\overrightarrow{AB}=\\mathbf{b}-\\mathbf{a}$; add/subtract component-wise; $k\\mathbf{v}$ scales. Parallel iff $\\mathbf{u}=k\\mathbf{v}$.",
        },
        {
          heading: "Geometry",
          body: "Midpoint $=\\frac{\\mathbf{a}+\\mathbf{b}}{2}$; section formula $\\frac{n\\mathbf{a}+m\\mathbf{b}}{m+n}$; centroid $=\\frac{\\mathbf{a}+\\mathbf{b}+\\mathbf{c}}{3}$.",
        },
        {
          heading: "Exam technique",
          body: "- Always write vectors as column vectors.\n- To prove parallel, show one vector is a scalar multiple of the other.\n- For 'show that' questions, state what you are proving then verify with vector algebra.",
        },
      ],
    },
  ],
};
