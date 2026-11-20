import type { Lesson } from "../../../types.ts";

export const lesson92: Lesson = {
  id: "olm-u9-lesson-9-2",
  code: "9-2",
  title: "Vectors",
  goal: "I CAN represent and manipulate vectors using column notation.",
  standards: ["4024: vectors"],
  vocabulary: [
    { term: "Vector", definition: "Quantity with magnitude and direction." },
    { term: "Column vector", definition: "Vector written as $\\begin{pmatrix}a\\\\b\\end{pmatrix}$." },
    { term: "Magnitude", definition: "Length of vector: $\\sqrt{a^2+b^2}$." },
    { term: "Scalar multiple", definition: "$k\\mathbf{v}$ scales vector by $k$." },
  ],
  concepts: [
    {
      id: "olm-u9-s2-basics",
      title: "Column vectors and magnitude",
      skill: "Work with column vectors at O Level.",
      lesson: {
        sections: [
          { heading: "Column vectors", body: "A 2D vector is written as a column $\\begin{pmatrix}a\\\\b\\end{pmatrix}$ where $a$ is horizontal displacement and $b$ vertical. The vector from point P to Q is $\\vec{PQ}=\\begin{pmatrix}x_Q-x_P\\\\y_Q-y_P\\end{pmatrix}$. The negative $-\\vec{v}$ reverses direction; equal vectors have same components regardless of position." },
          { heading: "Magnitude", body: "The magnitude (length) of $\\begin{pmatrix}a\\\\b\\end{pmatrix}$ is $|\\mathbf{v}|=\\sqrt{a^2+b^2}$ — Pythagoras again. A scalar multiple $k\\mathbf{v}=\\begin{pmatrix}ka\\\\kb\\end{pmatrix}$ has magnitude $|k|\\times|\\mathbf{v}|$. Unit vectors have magnitude 1: $\\hat{\\mathbf{v}}=\\frac{\\mathbf{v}}{|\\mathbf{v}|}$." },
        ],
        keyFormulas: [
          { name: "Vector PQ", statement: "$\\begin{pmatrix}x_Q-x_P\\\\y_Q-y_P\\end{pmatrix}$" },
          { name: "Magnitude", statement: "$|\\mathbf{v}|=\\sqrt{a^2+b^2}$" },
        ],
        workedExample: { problem: "Find the vector from A(1,3) to B(5,7) and its magnitude.", solution: "$\\vec{AB}=\\begin{pmatrix}4\\\\4\\end{pmatrix}$; $|\\vec{AB}|=\\sqrt{16+16}=4\\sqrt2$." },
      },
      questions: [
        {
          id: "olm-u9-s2-ba-q1", difficulty: "foundation", totalMarks: 1,
          stem: "The vector $\\begin{pmatrix}3\\\\4\\end{pmatrix}$ has magnitude…",
          response: { type: "mcq", choices: [
            { id: "a", text: "5" }, { id: "b", text: "7" }, { id: "c", text: "$\\sqrt7$" }, { id: "d", text: "25" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "formula", name: "Magnitude", statement: "$\\sqrt{a^2+b^2}$." }], steps: [{ reasoning: "$\\sqrt{9+16}=\\sqrt{25}=5$.", marks: 1, markCode: "A" }], finalAnswer: "5" },
        },
        {
          id: "olm-u9-s2-ba-q2", difficulty: "foundation", totalMarks: 2,
          stem: "Find the vector from P(2,1) to Q(7,4).",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "formula", name: "Vector PQ", statement: "Q minus P." }], steps: [
            { reasoning: "$\\vec{PQ}=\\begin{pmatrix}7-2\\\\4-1\\end{pmatrix}=\\begin{pmatrix}5\\\\3\\end{pmatrix}$.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$\\begin{pmatrix}5\\\\3\\end{pmatrix}$" },
        },
        {
          id: "olm-u9-s2-ba-q3", difficulty: "core", totalMarks: 3,
          stem: "Find the magnitude of $\\begin{pmatrix}-6\\\\8\\end{pmatrix}$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "formula", name: "Magnitude", statement: "Negatives square away." }], steps: [
            { reasoning: "$\\sqrt{36+64}=\\sqrt{100}=10$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 10.", marks: 1, markCode: "M" },
            { reasoning: "6-8-10 triple ✓.", marks: 1, markCode: "A" },
          ], finalAnswer: "10" },
        },
        {
          id: "olm-u9-s2-ba-q4", difficulty: "core", totalMarks: 4,
          stem: "Find the unit vector in the direction of $\\begin{pmatrix}3\\\\4\\end{pmatrix}$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Unit vector", statement: "$\\mathbf{v}/|\\mathbf{v}|$." }], steps: [
            { reasoning: "$|\\mathbf{v}|=\\sqrt{9+16}=5$.", marks: 1, markCode: "M" },
            { reasoning: "$\\hat{\\mathbf{v}}=\\frac15\\begin{pmatrix}3\\\\4\\end{pmatrix}=\\begin{pmatrix}0.6\\\\0.8\\end{pmatrix}$.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "M" },
            { reasoning: "Check magnitude: $\\sqrt{0.36+0.64}=1$ ✓.", marks: 1, markCode: "A" },
          ], finalAnswer: "$\\begin{pmatrix}0.6\\\\0.8\\end{pmatrix}$" },
        },
      ],
    },
    {
      id: "olm-u9-s2-operations",
      title: "Vector operations",
      skill: "Add, subtract and scale vectors at O Level.",
      lesson: {
        sections: [
          { heading: "Addition and subtraction", body: "Vectors add component-wise: $\\begin{pmatrix}a\\\\b\\end{pmatrix}+\\begin{pmatrix}c\\\\d\\end{pmatrix}=\\begin{pmatrix}a+c\\\\b+d\\end{pmatrix}$. Geometrically, $\\vec{AB}+\\vec{BC}=\\vec{AC}$ — head-to-tail. Subtraction $\\mathbf{u}-\\mathbf{v}=\\mathbf{u}+(-\\mathbf{v})$. Scalar multiplication: $k\\begin{pmatrix}a\\\\b\\end{pmatrix}=\\begin{pmatrix}ka\\\\kb\\end{pmatrix}$." },
          { heading: "Solving for vectors", body: "If $\\vec{AB}=\\begin{pmatrix}2\\\\-1\\end{pmatrix}$ and $\\vec{BC}=\\begin{pmatrix}3\\\\4\\end{pmatrix}$, then $\\vec{AC}=\\begin{pmatrix}5\\\\3\\end{pmatrix}$. To find an unknown vector: rearrange — if $\\mathbf{u}+\\mathbf{v}=\\mathbf{w}$ then $\\mathbf{v}=\\mathbf{w}-\\mathbf{u}$. For problems like 'find $k$ such that vectors are equal', equate components and solve the resulting equations." },
        ],
        keyFormulas: [
          { name: "Addition", statement: "Component-wise" },
          { name: "Scalar", statement: "$k\\mathbf{v}=\\begin{pmatrix}ka\\\\kb\\end{pmatrix}$" },
        ],
        workedExample: { problem: "$\\vec{AB}=\\begin{pmatrix}1\\\\2\\end{pmatrix}$, $\\vec{BC}=\\begin{pmatrix}4\\\\-3\\end{pmatrix}$. Find $\\vec{AC}$.", solution: "$\\vec{AC}=\\begin{pmatrix}1+4\\\\2-3\\end{pmatrix}=\\begin{pmatrix}5\\\\-1\\end{pmatrix}$." },
      },
      questions: [
        {
          id: "olm-u9-s2-op-q1", difficulty: "foundation", totalMarks: 1,
          stem: "$\\begin{pmatrix}2\\\\3\\end{pmatrix}+\\begin{pmatrix}1\\\\-4\\end{pmatrix}=$",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\begin{pmatrix}3\\\\-1\\end{pmatrix}$" }, { id: "b", text: "$\\begin{pmatrix}3\\\\7\\end{pmatrix}$" }, { id: "c", text: "$\\begin{pmatrix}1\\\\-1\\end{pmatrix}$" }, { id: "d", text: "$\\begin{pmatrix}2\\\\-1\\end{pmatrix}$" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "technique", name: "Addition", statement: "Component-wise." }], steps: [{ reasoning: "$2+1=3$, $3+(-4)=-1$.", marks: 1, markCode: "A" }], finalAnswer: "$\\begin{pmatrix}3\\\\-1\\end{pmatrix}$" },
        },
        {
          id: "olm-u9-s2-op-q2", difficulty: "foundation", totalMarks: 2,
          stem: "$3\\begin{pmatrix}2\\\\-1\\end{pmatrix}=$",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Scalar multiple", statement: "Multiply each component." }], steps: [
            { reasoning: "$\\begin{pmatrix}6\\\\-3\\end{pmatrix}$.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$\\begin{pmatrix}6\\\\-3\\end{pmatrix}$" },
        },
        {
          id: "olm-u9-s2-op-q3", difficulty: "core", totalMarks: 3,
          stem: "If $\\vec{AB}=\\begin{pmatrix}4\\\\1\\end{pmatrix}$ and $\\vec{AC}=\\begin{pmatrix}7\\\\5\\end{pmatrix}$, find $\\vec{BC}$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Vector subtraction", statement: "$\\vec{BC}=\\vec{AC}-\\vec{AB}$." }], steps: [
            { reasoning: "$\\vec{BC}=\\begin{pmatrix}7-4\\\\5-1\\end{pmatrix}=\\begin{pmatrix}3\\\\4\\end{pmatrix}$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $\\begin{pmatrix}3\\\\4\\end{pmatrix}$.", marks: 1, markCode: "M" },
            { reasoning: "Check: $\\vec{AB}+\\vec{BC}=\\begin{pmatrix}4+3\\\\1+4\\end{pmatrix}=\\begin{pmatrix}7\\\\5\\end{pmatrix}=\\vec{AC}$ ✓.", marks: 1, markCode: "A" },
          ], finalAnswer: "$\\begin{pmatrix}3\\\\4\\end{pmatrix}$" },
        },
        {
          id: "olm-u9-s2-op-q4", difficulty: "core", totalMarks: 4,
          stem: "Find $k$ such that $\\begin{pmatrix}2k\\\\3\\end{pmatrix}=\\begin{pmatrix}8\\\\3\\end{pmatrix}$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Equate components", statement: "Solve for k." }], steps: [
            { reasoning: "$2k=8$ → $k=4$; check second: $3=3$ ✓.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $k=4$.", marks: 1, markCode: "M" },
            { reasoning: "Both components must match — verified.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$k=4$" },
        },
      ],
    },
  ],
  notes: [
    { id: "olm-u9-s2-vec-notes", title: "Vectors — notes", summary: "Column vectors, magnitude, operations.",
      sections: [
        { heading: "Basics", body: "$\\vec{PQ}=Q-P$; magnitude $=\\sqrt{a^2+b^2}$; unit vector $=\\mathbf{v}/|\\mathbf{v}|$." },
        { heading: "Operations", body: "Add/subtract component-wise; scalar multiple scales all components." },
      ] },
  ],
};
