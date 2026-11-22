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
            { id: "a", text: "5" },
            { id: "b", text: "$\\sqrt7$" },
            { id: "c", text: "7" },
            { id: "d", text: "25" },
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
        {
          id: "olm-u9-s2-ba-q5", difficulty: "foundation", totalMarks: 1,
          stem: "The vector from $(1,2)$ to $(4,7)$ is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$(4,7)$" },
            { id: "b", text: "$(5,9)$" },
            { id: "c", text: "$(-3,-5)$" },
            { id: "d", text: "$(3,5)$" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "formula", name: "Vector PQ", statement: "Subtract the starting point from the ending point." }], steps: [{ reasoning: "$(4-1,7-2)=(3,5)$.", marks: 1, markCode: "A" }], finalAnswer: "$(3,5)$" },
        },
        {
          id: "olm-u9-s2-ba-q6", difficulty: "foundation", totalMarks: 2,
          stem: "Find the magnitude of the vector $(6,8)$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 10 }] },
          markscheme: { principles: [{ kind: "formula", name: "Magnitude", statement: "$|v|=(a^2+b^2)^{1/2}$." }], steps: [
            { reasoning: "$|v|=(36+64)^{1/2}=100^{1/2}=10$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $10$.", marks: 1, markCode: "A" },
          ], finalAnswer: "10" },
        },
        {
          id: "olm-u9-s2-ba-q7", difficulty: "core", totalMarks: 3,
          stem: "Find the vector from $A(-2,3)$ to $B(1,-4)$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "formula", name: "Vector PQ", statement: "$\\vec{PQ}=Q-P$ in component form." }], steps: [
            { reasoning: "Horizontal component: $1-(-2)=3$.", marks: 1, markCode: "M" },
            { reasoning: "Vertical component: $-4-3=-7$.", marks: 1, markCode: "M" },
            { reasoning: "Vector: $(3,-7)$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$(3,-7)$" },
        },
        {
          id: "olm-u9-s2-ba-q8", difficulty: "core", totalMarks: 1,
          stem: "What is the negative of the vector $(5,-2)$?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$(-5,2)$" },
            { id: "b", text: "$(-5,-2)$" },
            { id: "c", text: "$(5,2)$" },
            { id: "d", text: "$(2,-5)$" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Negative vector", statement: "Reverse both components." }], steps: [{ reasoning: "$-(5,-2)=(-5,2)$.", marks: 1, markCode: "A" }], finalAnswer: "$(-5,2)$" },
        },
        {
          id: "olm-u9-s2-ba-q9", difficulty: "challenge", totalMarks: 3,
          stem: "Find the unit vector in the direction of $(6,8)$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Unit vector", statement: "Divide by the magnitude." }], steps: [
            { reasoning: "Magnitude: $(36+64)^{1/2}=10$.", marks: 1, markCode: "M" },
            { reasoning: "Unit vector: $(6/10,8/10)=(0.6,0.8)$.", marks: 1, markCode: "M" },
            { reasoning: "Check magnitude: $(0.36+0.64)^{1/2}=1$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$(0.6,0.8)$" },
        },
        {
          id: "olm-u9-s2-ba-q10", difficulty: "foundation", totalMarks: 2,
          stem: "Find the magnitude of the vector $(-5,12)$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 13 }] },
          markscheme: { principles: [{ kind: "formula", name: "Magnitude", statement: "Squares remove negative signs." }], steps: [
            { reasoning: "$|v|=(25+144)^{1/2}=169^{1/2}=13$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $13$.", marks: 1, markCode: "A" },
          ], finalAnswer: "13" },
        },
        {
          id: "olm-u9-s2-ba-q11", difficulty: "core", totalMarks: 2,
          stem: "For $P(3,4)$ and $Q(-1,8)$, find the x-component of $\\vec{PQ}$.",
          response: { type: "numeric", parts: [{ label: "a", answer: -4 }] },
          markscheme: { principles: [{ kind: "formula", name: "Vector PQ", statement: "Subtract corresponding coordinates." }], steps: [
            { reasoning: "x-component: $-1-3=-4$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $-4$.", marks: 1, markCode: "A" },
          ], finalAnswer: "-4" },
        },
        {
          id: "olm-u9-s2-ba-q12", difficulty: "core", totalMarks: 1,
          stem: "Which pair of vectors are equal?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$(2,5)$ and $(2,5)$" },
            { id: "b", text: "$(2,5)$ and $(4,10)$" },
            { id: "c", text: "$(2,5)$ and $(-2,-5)$" },
            { id: "d", text: "$(2,5)$ and $(5,2)$" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Equal vectors", statement: "Same components, regardless of position." }], steps: [{ reasoning: "Only identical components are equal.", marks: 1, markCode: "A" }], finalAnswer: "$(2,5)$ and $(2,5)$" },
        },
        {
          id: "olm-u9-s2-ba-q13", difficulty: "challenge", totalMarks: 2,
          stem: "Find the magnitude of the vector $(9,12)$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 15 }] },
          markscheme: { principles: [{ kind: "formula", name: "Magnitude", statement: "$|v|=(a^2+b^2)^{1/2}$." }], steps: [
            { reasoning: "$|v|=(81+144)^{1/2}=225^{1/2}=15$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $15$.", marks: 1, markCode: "A" },
          ], finalAnswer: "15" },
        },
        {
          id: "olm-u9-s2-ba-q14", difficulty: "foundation", totalMarks: 1,
          stem: "The magnitude of vector $(a,b)$ is given by…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$a+b$" },
            { id: "b", text: "$\\sqrt{a}+\\sqrt{b}$" },
            { id: "c", text: "$(a^2+b^2)^{1/2}$" },
            { id: "d", text: "$a^2+b^2$" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "formula", name: "Magnitude", statement: "Pythagoras on components." }], steps: [{ reasoning: "Use the square root of the sum of squares.", marks: 1, markCode: "A" }], finalAnswer: "$(a^2+b^2)^{1/2}$" },
        },
        {
          id: "olm-u9-s2-ba-q15", difficulty: "core", totalMarks: 3,
          stem: "Point $P(2,1)$ and $\\vec{PQ}=(3,-4)$. Find the coordinates of $Q$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "formula", name: "Vector PQ", statement: "$Q=P+\\vec{PQ}$." }], steps: [
            { reasoning: "x-coordinate: $2+3=5$.", marks: 1, markCode: "M" },
            { reasoning: "y-coordinate: $1-4=-3$.", marks: 1, markCode: "M" },
            { reasoning: "$Q=(5,-3)$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$(5,-3)$" },
        },
        {
          id: "olm-u9-s2-ba-q16", difficulty: "challenge", totalMarks: 1,
          stem: "For $A(1,2)$, $B(4,3)$, $C(2,5)$ and $D(5,6)$, which statement about $\\vec{AB}$ and $\\vec{CD}$ is correct?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\vec{AB}=(-3,-1)$ and $\\vec{CD}=(3,1)$" },
            { id: "b", text: "$\\vec{AB}=(5,1)$ and $\\vec{CD}=(3,1)$" },
            { id: "c", text: "$\\vec{AB}=(3,1)$ and $\\vec{CD}=(-3,-1)$" },
            { id: "d", text: "$\\vec{AB}=(3,1)$ and $\\vec{CD}=(3,1)$" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "technique", name: "Vector subtraction", statement: "Compute both displacement vectors." }], steps: [{ reasoning: "$\\vec{AB}=(4-1,3-2)=(3,1)$; $\\vec{CD}=(5-2,6-5)=(3,1)$.", marks: 1, markCode: "A" }], finalAnswer: "$\\vec{AB}=\\vec{CD}=(3,1)$" },
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
            { id: "a", text: "$\\begin{pmatrix}3\\\\-1\\end{pmatrix}$" },
            { id: "b", text: "$\\begin{pmatrix}1\\\\-1\\end{pmatrix}$" },
            { id: "c", text: "$\\begin{pmatrix}2\\\\-1\\end{pmatrix}$" },
            { id: "d", text: "$\\begin{pmatrix}3\\\\7\\end{pmatrix}$" },
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
        {
          id: "olm-u9-s2-op-q5", difficulty: "foundation", totalMarks: 1,
          stem: "$(2,-3)+(4,1)=$",
          response: { type: "mcq", choices: [
            { id: "a", text: "$(8,-3)$" },
            { id: "b", text: "$(6,4)$" },
            { id: "c", text: "$(-2,-4)$" },
            { id: "d", text: "$(6,-2)$" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "technique", name: "Vector addition", statement: "Add corresponding components." }], steps: [{ reasoning: "$(2+4,-3+1)=(6,-2)$.", marks: 1, markCode: "A" }], finalAnswer: "$(6,-2)$" },
        },
        {
          id: "olm-u9-s2-op-q6", difficulty: "foundation", totalMarks: 2,
          stem: "Find the second component of $2(3,-1)$.",
          response: { type: "numeric", parts: [{ label: "a", answer: -2 }] },
          markscheme: { principles: [{ kind: "technique", name: "Scalar multiple", statement: "Multiply every component by the scalar." }], steps: [
            { reasoning: "$2(3,-1)=(6,-2)$.", marks: 1, markCode: "M" },
            { reasoning: "Second component: $-2$.", marks: 1, markCode: "A" },
          ], finalAnswer: "-2" },
        },
        {
          id: "olm-u9-s2-op-q7", difficulty: "core", totalMarks: 3,
          stem: "Given $u=(2,5)$ and $v=(1,-3)$, find $u-v$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Vector subtraction", statement: "$u-v=u+(-v)$." }], steps: [
            { reasoning: "Negative of $v$: $(-1,3)$.", marks: 1, markCode: "M" },
            { reasoning: "Add: $(2+(-1),5+3)=(1,8)$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $(1,8)$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$(1,8)$" },
        },
        {
          id: "olm-u9-s2-op-q8", difficulty: "core", totalMarks: 1,
          stem: "If $\\vec{AB}=(1,2)$ and $\\vec{BC}=(3,-1)$, then $\\vec{AC}=$",
          response: { type: "mcq", choices: [
            { id: "a", text: "$(2,-3)$" },
            { id: "b", text: "$(4,1)$" },
            { id: "c", text: "$(3,-2)$" },
            { id: "d", text: "$(4,-1)$" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "technique", name: "Head-to-tail", statement: "$\\vec{AB}+\\vec{BC}=\\vec{AC}$." }], steps: [{ reasoning: "$(1+3,2-1)=(4,1)$.", marks: 1, markCode: "A" }], finalAnswer: "$(4,1)$" },
        },
        {
          id: "olm-u9-s2-op-q9", difficulty: "challenge", totalMarks: 3,
          stem: "Vectors $u$ and $v$ satisfy $u+v=(7,4)$ and $u=(2,1)$. Find $v$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Rearrange vector equation", statement: "$v=(u+v)-u$." }], steps: [
            { reasoning: "Subtract $u$: $(7-2,4-1)=(5,3)$.", marks: 1, markCode: "M" },
            { reasoning: "Check: $(2,1)+(5,3)=(7,4)$ ✓.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $v=(5,3)$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$(5,3)$" },
        },
        {
          id: "olm-u9-s2-op-q10", difficulty: "foundation", totalMarks: 2,
          stem: "Find the x-component of $(-2,3)+(5,-1)$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 3 }] },
          markscheme: { principles: [{ kind: "technique", name: "Vector addition", statement: "Add corresponding components." }], steps: [
            { reasoning: "x-component: $-2+5=3$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $3$.", marks: 1, markCode: "A" },
          ], finalAnswer: "3" },
        },
        {
          id: "olm-u9-s2-op-q11", difficulty: "core", totalMarks: 1,
          stem: "Find $k$ such that $k(2,3)=(8,12)$.",
          response: { type: "mcq", choices: [
            { id: "a", text: "$3$" },
            { id: "b", text: "$4$" },
            { id: "c", text: "$12$" },
            { id: "d", text: "$6$" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "technique", name: "Equate components", statement: "Solve $2k=8$ and $3k=12$." }], steps: [{ reasoning: "$k=4$ satisfies both components.", marks: 1, markCode: "A" }], finalAnswer: "$4$" },
        },
        {
          id: "olm-u9-s2-op-q12", difficulty: "core", totalMarks: 3,
          stem: "Find $\\vec{AB}$ where $A(1,-2)$ and $B(5,3)$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "formula", name: "Vector PQ", statement: "Subtract position vectors." }], steps: [
            { reasoning: "Horizontal: $5-1=4$.", marks: 1, markCode: "M" },
            { reasoning: "Vertical: $3-(-2)=5$.", marks: 1, markCode: "M" },
            { reasoning: "$\\vec{AB}=(4,5)$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$(4,5)$" },
        },
        {
          id: "olm-u9-s2-op-q13", difficulty: "challenge", totalMarks: 1,
          stem: "If $u=(2,-1)$ and $v=(4,-2)$, which statement is correct?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$u=2v$" },
            { id: "b", text: "$v=-2u$" },
            { id: "c", text: "$v=u+2$" },
            { id: "d", text: "$v=2u$" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "property", name: "Scalar multiple", statement: "Each component is doubled." }], steps: [{ reasoning: "$2(2,-1)=(4,-2)=v$.", marks: 1, markCode: "A" }], finalAnswer: "$v=2u$" },
        },
        {
          id: "olm-u9-s2-op-q14", difficulty: "foundation", totalMarks: 2,
          stem: "Find the x-component of $3(1,4)+2(2,-1)$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 7 }] },
          markscheme: { principles: [{ kind: "technique", name: "Scalar multiples and addition", statement: "Scale then add components." }], steps: [
            { reasoning: "$3(1,4)=(3,12)$ and $2(2,-1)=(4,-2)$; sum is $(7,10)$.", marks: 1, markCode: "M" },
            { reasoning: "x-component: $7$.", marks: 1, markCode: "A" },
          ], finalAnswer: "7" },
        },
        {
          id: "olm-u9-s2-op-q15", difficulty: "core", totalMarks: 2,
          stem: "Solve for vector $x$: $x+(1,-2)=(4,5)$. Give the x-component of $x$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 3 }] },
          markscheme: { principles: [{ kind: "technique", name: "Rearrange vector equation", statement: "$x=(4,5)-(1,-2)$." }], steps: [
            { reasoning: "$x=(4-1,5-(-2))=(3,7)$.", marks: 1, markCode: "M" },
            { reasoning: "x-component: $3$.", marks: 1, markCode: "A" },
          ], finalAnswer: "3" },
        },
        {
          id: "olm-u9-s2-op-q16", difficulty: "challenge", totalMarks: 1,
          stem: "If $u=(2,3)$ and $v=(4,6)$, which statement is correct?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$v=u+(2,3)$" },
            { id: "b", text: "$v=2u$" },
            { id: "c", text: "$u=2v$" },
            { id: "d", text: "$v=-2u$" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "property", name: "Scalar multiple", statement: "Components are proportional." }], steps: [{ reasoning: "$2(2,3)=(4,6)=v$.", marks: 1, markCode: "A" }], finalAnswer: "$v=2u$" },
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
