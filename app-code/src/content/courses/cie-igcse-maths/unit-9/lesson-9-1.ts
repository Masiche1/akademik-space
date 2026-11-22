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
              { id: "b", text: "3 units left and 2 units up" },
              { id: "c", text: "2 units right and 3 units down" },
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
        {
          id: "ciem-u9-vector-basics-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is $\\begin{pmatrix}2\\\\-1\\end{pmatrix}+\\begin{pmatrix}5\\\\3\\end{pmatrix}$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\begin{pmatrix}10\\\\3\\end{pmatrix}$" },
              { id: "b", text: "$\\begin{pmatrix}7\\\\2\\end{pmatrix}$" },
              { id: "c", text: "$\\begin{pmatrix}7\\\\-2\\end{pmatrix}$" },
              { id: "d", text: "$\\begin{pmatrix}-3\\\\-4\\end{pmatrix}$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Vector addition", statement: "Add corresponding components." },
            ],
            steps: [
              { reasoning: "Add the components.", working: "\\begin{pmatrix}2+5\\\\-1+3\\end{pmatrix}=\\begin{pmatrix}7\\\\2\\end{pmatrix}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $\\begin{pmatrix}7\\\\2\\end{pmatrix}$",
            commonErrors: ["Adding all four numbers together."],
          },
        },
        {
          id: "ciem-u9-vector-basics-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the value of $k$ such that $k\\begin{pmatrix}1\\\\4\\end{pmatrix}=\\begin{pmatrix}6\\\\24\\end{pmatrix}$.",
          response: { type: "numeric", parts: [{ label: "k", answer: 6, tolerance: 0.001 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Scalar multiple", statement: "$k\\begin{pmatrix}a\\\\b\\end{pmatrix}=\\begin{pmatrix}ka\\\\kb\\end{pmatrix}$" },
            ],
            steps: [
              { reasoning: "Compare $x$-components: $k\\times1=6$.", working: "k=6", marks: 1, markCode: "M" },
              { reasoning: "Check $y$-components: $6\\times4=24$. Consistent.", working: "6\\times4=24", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$k=6$",
            commonErrors: ["Using only the $y$-components and getting $k=6$ by coincidence unchecked."],
          },
        },
        {
          id: "ciem-u9-vector-basics-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which statement about $\\mathbf{a}-\\mathbf{b}$ is correct?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It equals $\\mathbf{a}+\\mathbf{b}$" },
              { id: "b", text: "It equals $\\mathbf{b}-\\mathbf{a}$" },
              { id: "c", text: "It is always a positive vector" },
              { id: "d", text: "It equals $\\mathbf{a}+(-\\mathbf{b})$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Vector subtraction", statement: "$\\mathbf{a}-\\mathbf{b}=\\mathbf{a}+(-\\mathbf{b})$ — subtracting is adding the negative." },
            ],
            steps: [
              { reasoning: "Recall the definition of subtraction.", working: "a-b=a+(-b)", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** $\\mathbf{a}-\\mathbf{b}=\\mathbf{a}+(-\\mathbf{b})$",
            commonErrors: ["Confusing $\\mathbf{a}-\\mathbf{b}$ with $\\mathbf{b}-\\mathbf{a}$."],
          },
        },
        {
          id: "ciem-u9-vector-basics-q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "The position vectors of $P$ and $Q$ are $\\mathbf{p}=\\begin{pmatrix}1\\\\-2\\end{pmatrix}$ and $\\mathbf{q}=\\begin{pmatrix}5\\\\3\\end{pmatrix}$. Find $\\overrightarrow{PQ}$ and $\\overrightarrow{QP}$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Vector between points", statement: "$\\overrightarrow{PQ}=\\mathbf{q}-\\mathbf{p}$" },
            ],
            steps: [
              { reasoning: "$\\overrightarrow{PQ}=\\mathbf{q}-\\mathbf{p}=\\begin{pmatrix}5-1\\\\3-(-2)\\end{pmatrix}$.", working: "=\\begin{pmatrix}4\\\\5\\end{pmatrix}", marks: 1, markCode: "M" },
              { reasoning: "$\\overrightarrow{QP}$ is the negative of $\\overrightarrow{PQ}$.", working: "=-\\begin{pmatrix}4\\\\5\\end{pmatrix}", marks: 1, markCode: "M" },
              { reasoning: "State both vectors.", working: "\\overrightarrow{QP}=\\begin{pmatrix}-4\\\\-5\\end{pmatrix}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\overrightarrow{PQ}=\\begin{pmatrix}4\\\\5\\end{pmatrix}$, $\\overrightarrow{QP}=\\begin{pmatrix}-4\\\\-5\\end{pmatrix}$",
            commonErrors: ["Subtracting in the wrong order for $\\overrightarrow{PQ}$."],
          },
        },
        {
          id: "ciem-u9-vector-basics-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "$A(2,-3)$ and $B(6,1)$. Find the $x$-component and $y$-component of $\\overrightarrow{AB}$.",
          response: { type: "numeric", unordered: true, parts: [{ label: "x", answer: 4, tolerance: 0.001 }, { label: "y", answer: 4, tolerance: 0.001 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Vector between points", statement: "$\\overrightarrow{AB}=\\mathbf{b}-\\mathbf{a}$" },
            ],
            steps: [
              { reasoning: "$\\overrightarrow{AB}=\\begin{pmatrix}6-2\\\\1-(-3)\\end{pmatrix}$.", working: "=\\begin{pmatrix}4\\\\4\\end{pmatrix}", marks: 1, markCode: "M" },
              { reasoning: "Read off the components.", working: "x=4,\\ y=4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\overrightarrow{AB}=\\begin{pmatrix}4\\\\4\\end{pmatrix}$",
            commonErrors: ["Subtracting coordinates in the wrong order."],
          },
        },
        {
          id: "ciem-u9-vector-basics-q10",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which vector is equal to $\\begin{pmatrix}4\\\\-2\\end{pmatrix}$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\begin{pmatrix}-2\\\\4\\end{pmatrix}$" },
              { id: "b", text: "$\\begin{pmatrix}-4\\\\2\\end{pmatrix}$" },
              { id: "c", text: "$\\begin{pmatrix}4\\\\-2\\end{pmatrix}$" },
              { id: "d", text: "$\\begin{pmatrix}8\\\\-4\\end{pmatrix}$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Equal vectors", statement: "Same components — same magnitude and direction." },
            ],
            steps: [
              { reasoning: "Match both components.", working: "(4,-2)", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** $\\begin{pmatrix}4\\\\-2\\end{pmatrix}$",
            commonErrors: ["Choosing the negative or the doubled vector."],
          },
        },
        {
          id: "ciem-u9-vector-basics-q11",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "$A(0,0)$, $B(3,2)$, $C(6,4)$. Find $\\overrightarrow{AB}$, $\\overrightarrow{BC}$ and $\\overrightarrow{AC}$, and verify that $\\overrightarrow{AB}+\\overrightarrow{BC}=\\overrightarrow{AC}$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Vector between points", statement: "$\\overrightarrow{PQ}=\\mathbf{q}-\\mathbf{p}$" },
            ],
            steps: [
              { reasoning: "$\\overrightarrow{AB}=\\begin{pmatrix}3\\\\2\\end{pmatrix}$, $\\overrightarrow{BC}=\\begin{pmatrix}3\\\\2\\end{pmatrix}$, $\\overrightarrow{AC}=\\begin{pmatrix}6\\\\4\\end{pmatrix}$.", working: "\\begin{pmatrix}3\\\\2\\end{pmatrix},\\ \\begin{pmatrix}3\\\\2\\end{pmatrix},\\ \\begin{pmatrix}6\\\\4\\end{pmatrix}", marks: 2, markCode: "M" },
              { reasoning: "Add $\\overrightarrow{AB}+\\overrightarrow{BC}$.", working: "\\begin{pmatrix}3+3\\\\2+2\\end{pmatrix}=\\begin{pmatrix}6\\\\4\\end{pmatrix}", marks: 1, markCode: "M" },
              { reasoning: "This equals $\\overrightarrow{AC}$ — verified.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\overrightarrow{AB}=\\overrightarrow{BC}=\\begin{pmatrix}3\\\\2\\end{pmatrix}$, $\\overrightarrow{AC}=\\begin{pmatrix}6\\\\4\\end{pmatrix}$; sum verified",
            commonErrors: ["Computing $\\overrightarrow{CA}$ instead of $\\overrightarrow{AC}$."],
          },
        },
        {
          id: "ciem-u9-vector-basics-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The position vector of the point $(4,-3)$ is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\begin{pmatrix}-3\\\\4\\end{pmatrix}$" },
              { id: "b", text: "$\\begin{pmatrix}4\\\\-3\\end{pmatrix}$" },
              { id: "c", text: "$\\begin{pmatrix}4\\\\3\\end{pmatrix}$" },
              { id: "d", text: "$\\begin{pmatrix}-4\\\\-3\\end{pmatrix}$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Position vector", statement: "The vector from the origin to the point — coordinates in order $(x,y)$." },
            ],
            steps: [
              { reasoning: "Write $x$ on top, $y$ below.", working: "(4,-3)", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $\\begin{pmatrix}4\\\\-3\\end{pmatrix}$",
            commonErrors: ["Swapping the components or losing the sign."],
          },
        },
        {
          id: "ciem-u9-vector-basics-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "If $\\mathbf{u}=\\begin{pmatrix}2\\\\-1\\end{pmatrix}$, then $3\\mathbf{u}=$",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\begin{pmatrix}2\\\\-3\\end{pmatrix}$" },
              { id: "b", text: "$\\begin{pmatrix}5\\\\2\\end{pmatrix}$" },
              { id: "c", text: "$\\begin{pmatrix}6\\\\3\\end{pmatrix}$" },
              { id: "d", text: "$\\begin{pmatrix}6\\\\-3\\end{pmatrix}$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Scalar multiple", statement: "$k\\begin{pmatrix}a\\\\b\\end{pmatrix}=\\begin{pmatrix}ka\\\\kb\\end{pmatrix}$" },
            ],
            steps: [
              { reasoning: "Multiply each component by 3.", working: "3\\times(2,-1)=(6,-3)", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** $\\begin{pmatrix}6\\\\-3\\end{pmatrix}$",
            commonErrors: ["Adding 3 to each component instead of multiplying."],
          },
        },
        {
          id: "ciem-u9-vector-basics-q14",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Given $\\mathbf{u}=\\begin{pmatrix}2\\\\-1\\end{pmatrix}$ and $\\mathbf{v}=\\begin{pmatrix}1\\\\3\\end{pmatrix}$, find $2\\mathbf{u}-\\mathbf{v}$.",
          response: { type: "numeric", unordered: true, parts: [{ label: "x", answer: 3, tolerance: 0.001 }, { label: "y", answer: -5, tolerance: 0.001 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Scalar multiple and subtraction", statement: "$2\\mathbf{u}-\\mathbf{v}$ — scale first, then subtract component-wise." },
            ],
            steps: [
              { reasoning: "Compute $2\\mathbf{u}$.", working: "2\\begin{pmatrix}2\\\\-1\\end{pmatrix}=\\begin{pmatrix}4\\\\-2\\end{pmatrix}", marks: 1, markCode: "M" },
              { reasoning: "Subtract $\\mathbf{v}$.", working: "\\begin{pmatrix}4-1\\\\-2-3\\end{pmatrix}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "=\\begin{pmatrix}3\\\\-5\\end{pmatrix}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\begin{pmatrix}3\\\\-5\\end{pmatrix}$",
            commonErrors: ["Computing $2(\\mathbf{u}-\\mathbf{v})$ instead of $2\\mathbf{u}-\\mathbf{v}$."],
          },
        },
        {
          id: "ciem-u9-vector-basics-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "$A(-1,2)$, $B(3,-4)$, $C(5,0)$. Find $\\overrightarrow{AB}+\\overrightarrow{BC}$.",
          response: { type: "numeric", unordered: true, parts: [{ label: "x", answer: 6, tolerance: 0.001 }, { label: "y", answer: -2, tolerance: 0.001 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Vector between points", statement: "$\\overrightarrow{AB}+\\overrightarrow{BC}=\\overrightarrow{AC}$" },
            ],
            steps: [
              { reasoning: "$\\overrightarrow{AB}=\\begin{pmatrix}3-(-1)\\\\-4-2\\end{pmatrix}=\\begin{pmatrix}4\\\\-6\\end{pmatrix}$; $\\overrightarrow{BC}=\\begin{pmatrix}5-3\\\\0-(-4)\\end{pmatrix}=\\begin{pmatrix}2\\\\4\\end{pmatrix}$.", working: "\\begin{pmatrix}4\\\\-6\\end{pmatrix}+\\begin{pmatrix}2\\\\4\\end{pmatrix}", marks: 1, markCode: "M" },
              { reasoning: "Add the components.", working: "=\\begin{pmatrix}6\\\\-2\\end{pmatrix}", marks: 1, markCode: "M" },
              { reasoning: "State the result (equivalently $\\overrightarrow{AC}$).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\begin{pmatrix}6\\\\-2\\end{pmatrix}$",
            commonErrors: ["Sign error when subtracting negative coordinates."],
          },
        },
        {
          id: "ciem-u9-vector-basics-q16",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Points $A(0,0)$, $B(6,3)$, $C(2,9)$.",
          parts: [
            { label: "a", prompt: "Find $\\overrightarrow{AB}$, $\\overrightarrow{BC}$ and $\\overrightarrow{CA}$.", marks: 3 },
            { label: "b", prompt: "Find $\\overrightarrow{AB}+\\overrightarrow{BC}+\\overrightarrow{CA}$ and state what this shows.", marks: 3 },
            { label: "c", prompt: "Find $\\overrightarrow{AB}-\\overrightarrow{BC}$.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Vector between points", statement: "$\\overrightarrow{PQ}=\\mathbf{q}-\\mathbf{p}$" },
              { kind: "property", name: "Closed path", statement: "Vectors around a closed loop sum to $\\mathbf{0}$." },
            ],
            steps: [
              { part: "a", reasoning: "$\\overrightarrow{AB}=\\begin{pmatrix}6\\\\3\\end{pmatrix}$.", working: "\\begin{pmatrix}6\\\\3\\end{pmatrix}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "$\\overrightarrow{BC}=\\begin{pmatrix}2-6\\\\9-3\\end{pmatrix}=\\begin{pmatrix}-4\\\\6\\end{pmatrix}$.", working: "\\begin{pmatrix}-4\\\\6\\end{pmatrix}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "$\\overrightarrow{CA}=\\begin{pmatrix}0-2\\\\0-9\\end{pmatrix}=\\begin{pmatrix}-2\\\\-9\\end{pmatrix}$.", working: "\\begin{pmatrix}-2\\\\-9\\end{pmatrix}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Add all three vectors.", working: "\\begin{pmatrix}6-4-2\\\\3+6-9\\end{pmatrix}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Simplify.", working: "=\\begin{pmatrix}0\\\\0\\end{pmatrix}=\\mathbf{0}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State that the path $A\\to B\\to C\\to A$ is closed.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Subtract $\\overrightarrow{BC}$ from $\\overrightarrow{AB}$.", working: "\\begin{pmatrix}6\\\\3\\end{pmatrix}-\\begin{pmatrix}-4\\\\6\\end{pmatrix}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate component-wise.", working: "=\\begin{pmatrix}6-(-4)\\\\3-6\\end{pmatrix}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State the result.", working: "=\\begin{pmatrix}10\\\\-3\\end{pmatrix}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $\\overrightarrow{AB}=\\begin{pmatrix}6\\\\3\\end{pmatrix}$, $\\overrightarrow{BC}=\\begin{pmatrix}-4\\\\6\\end{pmatrix}$, $\\overrightarrow{CA}=\\begin{pmatrix}-2\\\\-9\\end{pmatrix}$ (b) $\\mathbf{0}$ — closed path (c) $\\begin{pmatrix}10\\\\-3\\end{pmatrix}$",
            commonErrors: ["In (c) adding instead of subtracting.", "In (b) arithmetic slips in the negative components."],
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
              { id: "b", text: "The same length" },
              { id: "c", text: "The negative" },
              { id: "d", text: "The perpendicular" },
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
        {
          id: "ciem-u9-parallel-vectors-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "$\\overrightarrow{AB}=\\begin{pmatrix}2\\\\4\\end{pmatrix}$ and $\\overrightarrow{CD}=\\begin{pmatrix}1\\\\2\\end{pmatrix}$. The lines $AB$ and $CD$ are:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Perpendicular" },
              { id: "b", text: "Parallel" },
              { id: "c", text: "Not related" },
              { id: "d", text: "Equal in length" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Parallel vectors", statement: "$\\mathbf{u}=k\\mathbf{v}$ for some scalar $k$." },
            ],
            steps: [
              { reasoning: "$\\begin{pmatrix}2\\\\4\\end{pmatrix}=2\\begin{pmatrix}1\\\\2\\end{pmatrix}$ — scalar multiple.", working: "k=2", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Parallel",
            commonErrors: ["Thinking different lengths means not parallel."],
          },
        },
        {
          id: "ciem-u9-parallel-vectors-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "$\\overrightarrow{AB}=\\begin{pmatrix}6\\\\9\\end{pmatrix}$ and $\\overrightarrow{XY}=\\begin{pmatrix}4\\\\6\\end{pmatrix}$. Find the value of $k$ such that $\\overrightarrow{AB}=k\\overrightarrow{XY}$.",
          response: { type: "numeric", parts: [{ label: "k", answer: 1.5, tolerance: 0.001 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Parallel test", statement: "$\\mathbf{u}=k\\mathbf{v}$" },
            ],
            steps: [
              { reasoning: "Compare component ratios.", working: "\\frac64=\\frac96=1.5", marks: 1, markCode: "M" },
              { reasoning: "State $k$.", working: "k=1.5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$k=1.5$",
            commonErrors: ["Writing $k=\\frac23$ by inverting the ratio."],
          },
        },
        {
          id: "ciem-u9-parallel-vectors-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Points $A(0,0)$, $B(2,3)$, $C(4,6)$ are:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Equally spaced" },
              { id: "b", text: "Vertices of a right-angled triangle" },
              { id: "c", text: "Not collinear" },
              { id: "d", text: "Collinear" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Collinear", statement: "$\\overrightarrow{AC}=2\\overrightarrow{AB}$, so $B$ lies on $AC$." },
            ],
            steps: [
              { reasoning: "$\\overrightarrow{AB}=\\begin{pmatrix}2\\\\3\\end{pmatrix}$, $\\overrightarrow{AC}=\\begin{pmatrix}4\\\\6\\end{pmatrix}=2\\overrightarrow{AB}$.", working: "AC=2AB", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Collinear",
            commonErrors: ["Assuming three points always form a triangle."],
          },
        },
        {
          id: "ciem-u9-parallel-vectors-q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "$A(1,1)$, $B(4,5)$, $C(7,9)$. Show that $A$, $B$, $C$ are collinear.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Collinear test", statement: "Show $\\overrightarrow{AC}=k\\overrightarrow{AB}$." },
            ],
            steps: [
              { reasoning: "Find $\\overrightarrow{AB}$ and $\\overrightarrow{AC}$.", working: "\\overrightarrow{AB}=\\begin{pmatrix}3\\\\4\\end{pmatrix},\\ \\overrightarrow{AC}=\\begin{pmatrix}6\\\\8\\end{pmatrix}", marks: 1, markCode: "M" },
              { reasoning: "$\\overrightarrow{AC}=2\\overrightarrow{AB}$ — a scalar multiple.", working: "\\begin{pmatrix}6\\\\8\\end{pmatrix}=2\\begin{pmatrix}3\\\\4\\end{pmatrix}", marks: 1, markCode: "M" },
              { reasoning: "Since the vectors are parallel and share point $A$, the points are collinear.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Collinear — $\\overrightarrow{AC}=2\\overrightarrow{AB}$",
            commonErrors: ["Comparing gradients only without vector justification."],
          },
        },
        {
          id: "ciem-u9-parallel-vectors-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "$\\overrightarrow{PQ}=\\begin{pmatrix}4\\\\6\\end{pmatrix}$ and $\\overrightarrow{RS}=\\begin{pmatrix}10\\\\15\\end{pmatrix}$. Find the value of $k$ such that $\\overrightarrow{RS}=k\\overrightarrow{PQ}$.",
          response: { type: "numeric", parts: [{ label: "k", answer: 2.5, tolerance: 0.001 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Parallel test", statement: "$\\mathbf{u}=k\\mathbf{v}$" },
            ],
            steps: [
              { reasoning: "Compare component ratios.", working: "\\frac{10}{4}=\\frac{15}{6}=2.5", marks: 1, markCode: "M" },
              { reasoning: "State $k$.", working: "k=2.5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$k=2.5$",
            commonErrors: ["Inverting the ratio to get $k=0.4$."],
          },
        },
        {
          id: "ciem-u9-parallel-vectors-q10",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Are $\\begin{pmatrix}3\\\\-2\\end{pmatrix}$ and $\\begin{pmatrix}-6\\\\4\\end{pmatrix}$ parallel?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "No — the lengths are different" },
              { id: "b", text: "Yes — $\\begin{pmatrix}-6\\\\4\\end{pmatrix}=-2\\begin{pmatrix}3\\\\-2\\end{pmatrix}$" },
              { id: "c", text: "No — the components have different signs" },
              { id: "d", text: "Yes — they are equal" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Parallel vectors", statement: "A negative scalar multiple still gives parallel (opposite) direction." },
            ],
            steps: [
              { reasoning: "$\\begin{pmatrix}-6\\\\4\\end{pmatrix}=-2\\begin{pmatrix}3\\\\-2\\end{pmatrix}$ — scalar multiple with $k=-2$.", working: "k=-2", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Yes — parallel with $k=-2$",
            commonErrors: ["Thinking a negative scalar means not parallel."],
          },
        },
        {
          id: "ciem-u9-parallel-vectors-q11",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "$A(0,0)$, $B(3,1)$, $C(9,3)$. Show that $A$, $B$, $C$ are collinear and find $AB:BC$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Collinear", statement: "$\\overrightarrow{AC}=k\\overrightarrow{AB}$" },
            ],
            steps: [
              { reasoning: "$\\overrightarrow{AB}=\\begin{pmatrix}3\\\\1\\end{pmatrix}$, $\\overrightarrow{AC}=\\begin{pmatrix}9\\\\3\\end{pmatrix}=3\\overrightarrow{AB}$.", working: "\\overrightarrow{AC}=3\\overrightarrow{AB}", marks: 1, markCode: "M" },
              { reasoning: "Scalar multiple sharing point $A$ → collinear.", marks: 1, markCode: "M" },
              { reasoning: "$\\overrightarrow{BC}=\\overrightarrow{AC}-\\overrightarrow{AB}=2\\overrightarrow{AB}$, so $BC=2\\,AB$.", working: "BC=2AB", marks: 1, markCode: "M" },
              { reasoning: "State the ratio.", working: "AB:BC=1:2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Collinear; $AB:BC=1:2$",
            commonErrors: ["Finding $AB:AC$ instead of $AB:BC$."],
          },
        },
        {
          id: "ciem-u9-parallel-vectors-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Two lines are parallel when their direction vectors are:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Scalar multiples of each other" },
              { id: "b", text: "Both horizontal" },
              { id: "c", text: "Perpendicular" },
              { id: "d", text: "Equal in length" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Parallel test", statement: "$\\mathbf{u}=k\\mathbf{v}$." },
            ],
            steps: [
              { reasoning: "Recall the parallel condition.", working: "u=kv", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Scalar multiples",
            commonErrors: ["Requiring equal magnitude."],
          },
        },
        {
          id: "ciem-u9-parallel-vectors-q13",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "$A$, $B$, $C$ are collinear with $\\overrightarrow{AB}=\\begin{pmatrix}2\\\\3\\end{pmatrix}$ and $\\overrightarrow{AC}=\\begin{pmatrix}8\\\\12\\end{pmatrix}$. Find $k$ such that $\\overrightarrow{BC}=k\\overrightarrow{AB}$.",
          response: { type: "numeric", parts: [{ label: "k", answer: 3, tolerance: 0.001 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Collinear", statement: "$\\overrightarrow{BC}=\\overrightarrow{AC}-\\overrightarrow{AB}$" },
            ],
            steps: [
              { reasoning: "$\\overrightarrow{BC}=\\begin{pmatrix}8\\\\12\\end{pmatrix}-\\begin{pmatrix}2\\\\3\\end{pmatrix}=\\begin{pmatrix}6\\\\9\\end{pmatrix}$.", working: "\\begin{pmatrix}6\\\\9\\end{pmatrix}", marks: 1, markCode: "M" },
              { reasoning: "Compare with $\\overrightarrow{AB}$: $\\begin{pmatrix}6\\\\9\\end{pmatrix}=3\\begin{pmatrix}2\\\\3\\end{pmatrix}$.", working: "k=3", marks: 1, markCode: "M" },
              { reasoning: "State $k$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$k=3$",
            commonErrors: ["Computing $\\overrightarrow{CB}$ instead of $\\overrightarrow{BC}$."],
          },
        },
        {
          id: "ciem-u9-parallel-vectors-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "$\\overrightarrow{PQ}=\\begin{pmatrix}6\\\\9\\end{pmatrix}$ and $\\overrightarrow{RS}=\\begin{pmatrix}2\\\\3\\end{pmatrix}$. Find the value of $k$ such that $\\overrightarrow{PQ}=k\\overrightarrow{RS}$.",
          response: { type: "numeric", parts: [{ label: "k", answer: 3, tolerance: 0.001 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Parallel test", statement: "$\\mathbf{u}=k\\mathbf{v}$" },
            ],
            steps: [
              { reasoning: "Compare component ratios.", working: "\\frac62=\\frac93=3", marks: 1, markCode: "M" },
              { reasoning: "State $k$.", working: "k=3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$k=3$",
            commonErrors: ["Giving $k=\\frac13$ by reversing the ratio."],
          },
        },
        {
          id: "ciem-u9-parallel-vectors-q15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "$\\overrightarrow{AB}=\\begin{pmatrix}2\\\\4\\end{pmatrix}$ and $\\overrightarrow{BC}=\\begin{pmatrix}1\\\\2\\end{pmatrix}$. What is $\\overrightarrow{AC}$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\begin{pmatrix}3\\\\6\\end{pmatrix}$" },
              { id: "b", text: "$\\begin{pmatrix}3\\\\2\\end{pmatrix}$" },
              { id: "c", text: "$\\begin{pmatrix}-1\\\\-2\\end{pmatrix}$" },
              { id: "d", text: "$\\begin{pmatrix}1\\\\2\\end{pmatrix}$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Vector addition", statement: "$\\overrightarrow{AC}=\\overrightarrow{AB}+\\overrightarrow{BC}$" },
            ],
            steps: [
              { reasoning: "Add the vectors.", working: "\\begin{pmatrix}2+1\\\\4+2\\end{pmatrix}=\\begin{pmatrix}3\\\\6\\end{pmatrix}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $\\begin{pmatrix}3\\\\6\\end{pmatrix}$",
            commonErrors: ["Subtracting instead of adding."],
          },
        },
        {
          id: "ciem-u9-parallel-vectors-q16",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "$A(0,0)$, $B(3,1)$, $C(5,4)$, $D(2,3)$.",
          parts: [
            { label: "a", prompt: "Find $\\overrightarrow{AB}$ and $\\overrightarrow{DC}$. Show $AB \\parallel DC$.", marks: 3 },
            { label: "b", prompt: "Find $\\overrightarrow{AD}$ and $\\overrightarrow{BC}$. Show $AD \\parallel BC$.", marks: 3 },
            { label: "c", prompt: "State the type of quadrilateral $ABCD$ and find $\\overrightarrow{AC}$.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Vector between points", statement: "$\\overrightarrow{PQ}=\\mathbf{q}-\\mathbf{p}$" },
              { kind: "property", name: "Parallelogram", statement: "Both pairs of opposite sides equal → parallelogram." },
            ],
            steps: [
              { part: "a", reasoning: "$\\overrightarrow{AB}=\\begin{pmatrix}3\\\\1\\end{pmatrix}$; $\\overrightarrow{DC}=\\begin{pmatrix}5-2\\\\4-3\\end{pmatrix}=\\begin{pmatrix}3\\\\1\\end{pmatrix}$ — equal, hence parallel.", working: "\\begin{pmatrix}3\\\\1\\end{pmatrix}", marks: 2, markCode: "M" },
              { part: "a", reasoning: "State the conclusion.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$\\overrightarrow{AD}=\\begin{pmatrix}2\\\\3\\end{pmatrix}$; $\\overrightarrow{BC}=\\begin{pmatrix}5-3\\\\4-1\\end{pmatrix}=\\begin{pmatrix}2\\\\3\\end{pmatrix}$ — equal, hence parallel.", working: "\\begin{pmatrix}2\\\\3\\end{pmatrix}", marks: 2, markCode: "M" },
              { part: "b", reasoning: "State the conclusion.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Both pairs of opposite sides are equal and parallel → parallelogram.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "$\\overrightarrow{AC}=\\begin{pmatrix}5\\\\4\\end{pmatrix}$.", working: "\\begin{pmatrix}5\\\\4\\end{pmatrix}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State the type and the diagonal vector.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$ABCD$ is a parallelogram; $\\overrightarrow{AC}=\\begin{pmatrix}5\\\\4\\end{pmatrix}$",
            commonErrors: ["Using $\\overrightarrow{CD}$ instead of $\\overrightarrow{DC}$.", "Forgetting to state the quadrilateral type."],
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
              { id: "a", text: "$\\mathbf{a}+\\mathbf{b}$" },
              { id: "b", text: "$\\mathbf{b}-\\mathbf{a}$" },
              { id: "c", text: "$\\frac{\\mathbf{a}+\\mathbf{b}}{2}$" },
              { id: "d", text: "$\\frac{\\mathbf{a}-\\mathbf{b}}{2}$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Midpoint", statement: "$\\frac{\\mathbf{a}+\\mathbf{b}}{2}$" },
            ],
            steps: [
              { reasoning: "Recall the formula.", working: "\\frac{a+b}{2}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** $\\frac{\\mathbf{a}+\\mathbf{b}}{2}$",
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
        {
          id: "ciem-u9-vector-geometry-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Point $P$ divides $AB$ in the ratio $m:n$. Its position vector is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac{\\mathbf{a}+\\mathbf{b}}{2}$" },
              { id: "b", text: "$\\mathbf{a}+\\frac{m}{n}(\\mathbf{b}-\\mathbf{a})$" },
              { id: "c", text: "$\\frac{m\\mathbf{a}+n\\mathbf{b}}{m+n}$" },
              { id: "d", text: "$\\frac{n\\mathbf{a}+m\\mathbf{b}}{m+n}$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Section formula", statement: "Ratio $m:n$ weights the endpoints oppositely: $n$ on $\\mathbf{a}$, $m$ on $\\mathbf{b}$." },
            ],
            steps: [
              { reasoning: "Recall the section formula.", working: "\\frac{n a + m b}{m+n}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** $\\frac{n\\mathbf{a}+m\\mathbf{b}}{m+n}$",
            commonErrors: ["Not reversing the weights."],
          },
        },
        {
          id: "ciem-u9-vector-geometry-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "$A(0,0)$ and $B(8,8)$. $M$ is the midpoint of $AB$. Find the coordinates of $M$.",
          response: { type: "numeric", unordered: true, parts: [{ label: "x", answer: 4, tolerance: 0.001 }, { label: "y", answer: 4, tolerance: 0.001 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Midpoint", statement: "$\\mathbf{m}=\\frac{\\mathbf{a}+\\mathbf{b}}{2}$" },
            ],
            steps: [
              { reasoning: "Average the coordinates.", working: "\\left(\\frac{0+8}{2},\\frac{0+8}{2}\\right)", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "(4,4)", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$M(4,4)$",
            commonErrors: ["Adding without halving."],
          },
        },
        {
          id: "ciem-u9-vector-geometry-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "The midpoint of $A(2,4)$ and $B(6,10)$ is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$(4,7)$" },
              { id: "b", text: "$(3,5)$" },
              { id: "c", text: "$(4,14)$" },
              { id: "d", text: "$(8,14)$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Midpoint", statement: "$\\left(\\frac{x_1+x_2}{2},\\frac{y_1+y_2}{2}\\right)$" },
            ],
            steps: [
              { reasoning: "Average each coordinate.", working: "\\left(\\frac{2+6}{2},\\frac{4+10}{2}\\right)=(4,7)", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $(4,7)$",
            commonErrors: ["Forgetting to halve the sum."],
          },
        },
        {
          id: "ciem-u9-vector-geometry-q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "$A$ and $B$ have position vectors $\\begin{pmatrix}0\\\\0\\end{pmatrix}$ and $\\begin{pmatrix}9\\\\3\\end{pmatrix}$. Point $P$ divides $AB$ in the ratio $1:2$. Find the position vector of $P$.",
          response: { type: "numeric", unordered: true, parts: [{ label: "x", answer: 3, tolerance: 0.001 }, { label: "y", answer: 1, tolerance: 0.001 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Section formula", statement: "$\\mathbf{p}=\\frac{2\\mathbf{a}+\\mathbf{b}}{3}$" },
            ],
            steps: [
              { reasoning: "Ratio $1:2$ → $\\mathbf{p}=\\frac{2\\mathbf{a}+\\mathbf{b}}{3}$.", working: "\\frac{2\\mathbf{a}+\\mathbf{b}}{3}", marks: 1, markCode: "M" },
              { reasoning: "Substitute $\\mathbf{a}=\\begin{pmatrix}0\\\\0\\end{pmatrix}$, $\\mathbf{b}=\\begin{pmatrix}9\\\\3\\end{pmatrix}$.", working: "=\\frac13\\begin{pmatrix}9\\\\3\\end{pmatrix}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "=\\begin{pmatrix}3\\\\1\\end{pmatrix}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\begin{pmatrix}3\\\\1\\end{pmatrix}$",
            commonErrors: ["Using $\\frac12$ (midpoint) instead of $\\frac13$."],
          },
        },
        {
          id: "ciem-u9-vector-geometry-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "$A$ and $B$ have position vectors $\\begin{pmatrix}0\\\\0\\end{pmatrix}$ and $\\begin{pmatrix}8\\\\4\\end{pmatrix}$. Point $P$ divides $AB$ in the ratio $3:1$. Find the position vector of $P$.",
          response: { type: "numeric", unordered: true, parts: [{ label: "x", answer: 6, tolerance: 0.001 }, { label: "y", answer: 3, tolerance: 0.001 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Section formula", statement: "$\\mathbf{p}=\\frac{\\mathbf{a}+3\\mathbf{b}}{4}$" },
            ],
            steps: [
              { reasoning: "Ratio $3:1$ → $\\mathbf{p}=\\frac{\\mathbf{a}+3\\mathbf{b}}{4}=\\frac34\\mathbf{b}$.", working: "\\frac{a+3b}{4}", marks: 1, markCode: "M" },
              { reasoning: "Substitute and evaluate.", working: "=\\frac34\\begin{pmatrix}8\\\\4\\end{pmatrix}=\\begin{pmatrix}6\\\\3\\end{pmatrix}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\begin{pmatrix}6\\\\3\\end{pmatrix}$",
            commonErrors: ["Using $\\frac14$ of the way instead of $\\frac34$."],
          },
        },
        {
          id: "ciem-u9-vector-geometry-q10",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "In the section formula, the point nearer to $A$ has the larger weight on:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\mathbf{b}$" },
              { id: "b", text: "$\\mathbf{a}$" },
              { id: "c", text: "Both equally" },
              { id: "d", text: "Neither" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Section formula", statement: "Weights are reversed: the nearer endpoint gets the larger weight." },
            ],
            steps: [
              { reasoning: "Reason: closer to $A$ means more of $\\mathbf{a}$.", working: "n a + m b", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $\\mathbf{a}$",
            commonErrors: ["Weighting the nearer endpoint less."],
          },
        },
        {
          id: "ciem-u9-vector-geometry-q11",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "$A(0,0)$, $B(6,0)$, $C(3,6)$. $D$ is the midpoint of $BC$. Find the position vector of $D$ and the vector $\\overrightarrow{AD}$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Midpoint", statement: "$\\mathbf{d}=\\frac{\\mathbf{b}+\\mathbf{c}}{2}$" },
            ],
            steps: [
              { reasoning: "$\\mathbf{d}=\\frac12\\left(\\begin{pmatrix}6\\\\0\\end{pmatrix}+\\begin{pmatrix}3\\\\6\\end{pmatrix}\\right)$.", working: "=\\frac12\\begin{pmatrix}9\\\\6\\end{pmatrix}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "=\\begin{pmatrix}4.5\\\\3\\end{pmatrix}", marks: 1, markCode: "M" },
              { reasoning: "$\\overrightarrow{AD}=\\mathbf{d}-\\mathbf{a}=\\begin{pmatrix}4.5\\\\3\\end{pmatrix}$ (since $\\mathbf{a}=\\mathbf{0}$).", working: "\\begin{pmatrix}4.5\\\\3\\end{pmatrix}", marks: 1, markCode: "M" },
              { reasoning: "State both answers.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\mathbf{d}=\\begin{pmatrix}4.5\\\\3\\end{pmatrix}$, $\\overrightarrow{AD}=\\begin{pmatrix}4.5\\\\3\\end{pmatrix}$",
            commonErrors: ["Forgetting $\\overrightarrow{AD}=\\mathbf{d}$ only because $\\mathbf{a}=\\mathbf{0}$ — stating without justification."],
          },
        },
        {
          id: "ciem-u9-vector-geometry-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The centroid of a triangle divides each median in the ratio:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$1:1$" },
              { id: "b", text: "$3:1$ from the vertex" },
              { id: "c", text: "$2:1$ from the vertex" },
              { id: "d", text: "$1:2$ from the vertex" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Centroid", statement: "Two-thirds of the way along each median from the vertex." },
            ],
            steps: [
              { reasoning: "Recall the centroid property.", working: "AG:GM=2:1", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** $2:1$ from the vertex",
            commonErrors: ["Reversing the ratio."],
          },
        },
        {
          id: "ciem-u9-vector-geometry-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "Point $P$ divides $AB$ in the ratio $2:1$. What fraction of $\\overrightarrow{AB}$ is $\\overrightarrow{AP}$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac23$ of the way from $B$" },
              { id: "b", text: "$\\frac23$" },
              { id: "c", text: "$\\frac13$" },
              { id: "d", text: "$\\frac12$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Section formula", statement: "$\\overrightarrow{AP}=\\frac{m}{m+n}\\overrightarrow{AB}$" },
            ],
            steps: [
              { reasoning: "Ratio $2:1$ → fraction $\\frac{2}{2+1}=\\frac23$.", working: "\\frac23", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $\\frac23$",
            commonErrors: ["Using $\\frac13$ — the wrong part of the ratio."],
          },
        },
        {
          id: "ciem-u9-vector-geometry-q14",
          difficulty: "core",
          totalMarks: 3,
          stem: "$A(0,0)$, $B(6,0)$, $C(0,6)$. Find the centroid $G$ of triangle $ABC$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Centroid", statement: "$\\mathbf{g}=\\frac{\\mathbf{a}+\\mathbf{b}+\\mathbf{c}}{3}$" },
            ],
            steps: [
              { reasoning: "Sum the position vectors.", working: "\\begin{pmatrix}0+6+0\\\\0+0+6\\end{pmatrix}=\\begin{pmatrix}6\\\\6\\end{pmatrix}", marks: 1, markCode: "M" },
              { reasoning: "Divide by 3.", working: "=\\frac13\\begin{pmatrix}6\\\\6\\end{pmatrix}", marks: 1, markCode: "M" },
              { reasoning: "State the position vector.", working: "=\\begin{pmatrix}2\\\\2\\end{pmatrix}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\begin{pmatrix}2\\\\2\\end{pmatrix}$",
            commonErrors: ["Dividing by 2 instead of 3."],
          },
        },
        {
          id: "ciem-u9-vector-geometry-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Find the midpoint of $A(3,-2)$ and $B(9,4)$.",
          response: { type: "numeric", unordered: true, parts: [{ label: "x", answer: 6, tolerance: 0.001 }, { label: "y", answer: 1, tolerance: 0.001 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Midpoint", statement: "$\\frac{\\mathbf{a}+\\mathbf{b}}{2}$" },
            ],
            steps: [
              { reasoning: "Average each coordinate.", working: "\\left(\\frac{3+9}{2},\\frac{-2+4}{2}\\right)", marks: 1, markCode: "M" },
              { reasoning: "Evaluate $x$.", working: "x=6", marks: 1, markCode: "M" },
              { reasoning: "Evaluate $y$.", working: "y=1", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$(6,1)$",
            commonErrors: ["Sign error on the $y$-coordinate ($-2+4=2$, halved is 1)."],
          },
        },
        {
          id: "ciem-u9-vector-geometry-q16",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Triangle $ABC$ has $\\mathbf{a}=\\begin{pmatrix}0\\\\0\\end{pmatrix}$, $\\mathbf{b}=\\begin{pmatrix}10\\\\0\\end{pmatrix}$, $\\mathbf{c}=\\begin{pmatrix}4\\\\8\\end{pmatrix}$.",
          parts: [
            { label: "a", prompt: "Find the centroid $G$ of the triangle.", marks: 2 },
            { label: "b", prompt: "Find the position vector of $M$, the midpoint of $BC$.", marks: 2 },
            { label: "c", prompt: "Show that $G$ divides the median $AM$ in the ratio $2:1$.", marks: 5 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Centroid", statement: "$\\mathbf{g}=\\frac{\\mathbf{a}+\\mathbf{b}+\\mathbf{c}}{3}$" },
              { kind: "formula", name: "Median division", statement: "Centroid is $\\frac23$ of the way from vertex to midpoint." },
            ],
            steps: [
              { part: "a", reasoning: "$\\mathbf{g}=\\frac13\\left(\\begin{pmatrix}0\\\\0\\end{pmatrix}+\\begin{pmatrix}10\\\\0\\end{pmatrix}+\\begin{pmatrix}4\\\\8\\end{pmatrix}\\right)$.", working: "=\\frac13\\begin{pmatrix}14\\\\8\\end{pmatrix}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate.", working: "=\\begin{pmatrix}14/3\\\\8/3\\end{pmatrix}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$\\mathbf{m}=\\frac12\\left(\\begin{pmatrix}10\\\\0\\end{pmatrix}+\\begin{pmatrix}4\\\\8\\end{pmatrix}\\right)$.", working: "=\\frac12\\begin{pmatrix}14\\\\8\\end{pmatrix}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate.", working: "=\\begin{pmatrix}7\\\\4\\end{pmatrix}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Point $\\frac23$ of the way from $A$ to $M$: $\\mathbf{a}+\\frac23(\\mathbf{m}-\\mathbf{a})=\\frac23\\mathbf{m}$.", working: "=\\frac23\\begin{pmatrix}7\\\\4\\end{pmatrix}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate.", working: "=\\begin{pmatrix}14/3\\\\8/3\\end{pmatrix}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "This equals $\\mathbf{g}$ from part (a), so $AG:GM=2:1$.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State the conclusion.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Hence $G$ divides $AM$ in ratio $2:1$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $\\mathbf{g}=\\begin{pmatrix}14/3\\\\8/3\\end{pmatrix}$ (b) $\\mathbf{m}=\\begin{pmatrix}7\\\\4\\end{pmatrix}$ (c) $AG:GM=2:1$ shown",
            commonErrors: ["In (c) using $\\frac13$ instead of $\\frac23$ of the way.", "Confusing centroid with midpoint."],
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
