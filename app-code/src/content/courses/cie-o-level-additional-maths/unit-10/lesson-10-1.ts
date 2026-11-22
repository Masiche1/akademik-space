import type { Lesson } from "../../../types.ts";

export const lesson101: Lesson = {
  id: "olam-u10-lesson-10-1",
  code: "10-1",
  title: "Vectors in Two Dimensions",
  goal: "I CAN use vector notation, magnitude and direction in 2D.",
  standards: ["Cambridge O Level Additional Mathematics 4037: vectors"],
  vocabulary: [
    { term: "Vector", definition: "Quantity with magnitude and direction." },
    { term: "Column vector", definition: "$\\begin{pmatrix} x \\ y \\end{pmatrix}$ components form." },
    { term: "Magnitude", definition: "Length: $|\\mathbf{v}| = \\sqrt{x^2+y^2}$." },
    { term: "Unit vector", definition: "Vector of length 1 in a given direction." },
  ],
  concepts: [
    {
      id: "olam-u10-s1-vectors",
      title: "2D vector notation and operations",
      skill: "Add, subtract and find magnitudes of 2D vectors.",
      lesson: {
        sections: [
          {
            heading: "Notation and arithmetic",
            body: "A vector $\\overrightarrow{AB}$ from A to B equals $\\mathbf{b} - \\mathbf{a}$ (position vectors). Components add/subtract elementwise: $\\begin{pmatrix}a\\\\b\\end{pmatrix} + \\begin{pmatrix}c\\\\d\\end{pmatrix} = \\begin{pmatrix}a+c\\\\b+d\\end{pmatrix}$. Scalar multiplication scales both components.",
          },
          {
            heading: "Magnitude and unit vectors",
            body: "Magnitude $|\\mathbf{v}| = \\sqrt{x^2 + y^2}$. A unit vector in direction $\\mathbf{v}$ is $\\hat{\\mathbf{v}} = \\frac{\\mathbf{v}}{|\\mathbf{v}|}$. Parallel vectors are scalar multiples; perpendicular vectors satisfy $\\mathbf{a}\\cdot\\mathbf{b} = a_1b_1 + a_2b_2 = 0$.",
          },
        ],
        keyFormulas: [
          { name: "AB vector", statement: "$\\overrightarrow{AB} = \\mathbf{b} - \\mathbf{a}$" },
          { name: "Magnitude", statement: "$|\\mathbf{v}| = \\sqrt{x^2+y^2}$" },
          { name: "Unit vector", statement: "$\\hat{\\mathbf{v}} = \\mathbf{v}/|\\mathbf{v}|$" },
          { name: "Dot product", statement: "$\\mathbf{a}\\cdot\\mathbf{b} = a_1b_1 + a_2b_2$" },
        ],
        workedExample: {
          problem: "Find $\\overrightarrow{AB}$ and its magnitude for A(1,2), B(4,6).",
          solution: "$\\overrightarrow{AB} = \\begin{pmatrix}3\\\\4\\end{pmatrix}$; $|\\overrightarrow{AB}| = \\sqrt{9+16} = 5$.",
        },
      },
      questions: [
        {
          id: "olam-u10-vc-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Find $\\overrightarrow{AB}$ for A(2,1) and B(5,4).",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\begin{pmatrix}-3\\\\-3\\end{pmatrix}$" },
            { id: "b", text: "$\\begin{pmatrix}7\\\\5\\end{pmatrix}$" },
            { id: "c", text: "$\\begin{pmatrix}3\\\\-3\\end{pmatrix}$" },
            { id: "d", text: "$\\begin{pmatrix}3\\\\3\\end{pmatrix}$" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "technique", name: "Vector subtraction", statement: "$\\mathbf{b}-\\mathbf{a}$." }],
            steps: [{ reasoning: "$\\begin{pmatrix}5\\\\4\\end{pmatrix}-\\begin{pmatrix}2\\\\1\\end{pmatrix}=\\begin{pmatrix}3\\\\3\\end{pmatrix}$.", marks: 1, markCode: "A" }],
            finalAnswer: "$\\begin{pmatrix}3\\\\3\\end{pmatrix}$",
          },
        },
        {
          id: "olam-u10-vc-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Find the magnitude of $\\mathbf{v} = \\begin{pmatrix}6\\\\8\\end{pmatrix}$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "Magnitude", statement: "$\\sqrt{x^2+y^2}$." }],
            steps: [
              { reasoning: "$|\\mathbf{v}| = \\sqrt{36+64} = \\sqrt{100}$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 10.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "10",
          },
        },
        {
          id: "olam-u10-vc-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Find the unit vector in the direction of $\\mathbf{v} = \\begin{pmatrix}3\\\\4\\end{pmatrix}$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "Unit vector", statement: "$\\mathbf{v}/|\\mathbf{v}|$." }],
            steps: [
              { reasoning: "$|\\mathbf{v}| = \\sqrt{9+16} = 5$.", marks: 1, markCode: "M" },
              { reasoning: "$\\hat{\\mathbf{v}} = \\frac{1}{5}\\begin{pmatrix}3\\\\4\\end{pmatrix} = \\begin{pmatrix}0.6\\\\0.8\\end{pmatrix}$.", marks: 1, markCode: "M" },
              { reasoning: "Answer stated.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\begin{pmatrix}0.6\\\\0.8\\end{pmatrix}$",
          },
        },
        {
          id: "olam-u10-vc-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Show that $\\mathbf{a} = \\begin{pmatrix}2\\\\1\\end{pmatrix}$ and $\\mathbf{b} = \\begin{pmatrix}-1\\\\2\\end{pmatrix}$ are perpendicular.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "property", name: "Perpendicular", statement: "Dot product = 0." }],
            steps: [
              { reasoning: "$\\mathbf{a}\\cdot\\mathbf{b} = 2(-1) + 1(2) = -2 + 2$.", marks: 1, markCode: "M" },
              { reasoning: "$= 0$.", marks: 1, markCode: "M" },
              { reasoning: "Dot product zero ⇒ perpendicular.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion stated.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Perpendicular (dot product = 0)",
          },
        },
        {
          id: "olam-u10-vc-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Find $\\overrightarrow{AB}$ for A(0,0) and B(3,4).",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\begin{pmatrix}3\\\\4\\end{pmatrix}$" },
            { id: "b", text: "$\\begin{pmatrix}-3\\\\-4\\end{pmatrix}$" },
            { id: "c", text: "$\\begin{pmatrix}3\\\\-4\\end{pmatrix}$" },
            { id: "d", text: "$\\begin{pmatrix}4\\\\3\\end{pmatrix}$" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "technique", name: "Vector subtraction", statement: "$\\mathbf{b}-\\mathbf{a}$." }],
            steps: [{ reasoning: "$\\begin{pmatrix}3\\\\4\\end{pmatrix}-\\begin{pmatrix}0\\\\0\\end{pmatrix}=\\begin{pmatrix}3\\\\4\\end{pmatrix}$.", marks: 1, markCode: "A" }],
            finalAnswer: "$\\begin{pmatrix}3\\\\4\\end{pmatrix}$",
          },
        },
        {
          id: "olam-u10-vc-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Find the magnitude of $\\mathbf{v} = \\begin{pmatrix}5\\\\12\\end{pmatrix}$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 13 }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Magnitude", statement: "$\\sqrt{x^2+y^2}$." }],
            steps: [
              { reasoning: "$|\\mathbf{v}| = \\sqrt{25+144} = \\sqrt{169}$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 13.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "13",
          },
        },
        {
          id: "olam-u10-vc-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "The unit vector in the direction of $\\begin{pmatrix}3\\\\4\\end{pmatrix}$ is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\begin{pmatrix}3\\\\4\\end{pmatrix}$" },
            { id: "b", text: "$\\begin{pmatrix}0.6\\\\0.8\\end{pmatrix}$" },
            { id: "c", text: "$\\begin{pmatrix}0.5\\\\0.5\\end{pmatrix}$" },
            { id: "d", text: "$\\begin{pmatrix}0.3\\\\0.4\\end{pmatrix}$" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "formula", name: "Unit vector", statement: "$\\mathbf{v}/|\\mathbf{v}|$." }],
            steps: [{ reasoning: "$|\\mathbf{v}|=5$ → $\\frac15\\begin{pmatrix}3\\\\4\\end{pmatrix}=\\begin{pmatrix}0.6\\\\0.8\\end{pmatrix}$.", marks: 1, markCode: "A" }],
            finalAnswer: "$\\begin{pmatrix}0.6\\\\0.8\\end{pmatrix}$",
          },
        },
        {
          id: "olam-u10-vc-q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Find $\\overrightarrow{AB}$ and its magnitude for A(-1,2) and B(2,-2).",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Vector subtraction", statement: "$\\overrightarrow{AB}=\\mathbf{b}-\\mathbf{a}$." }],
            steps: [
              { reasoning: "$\\overrightarrow{AB}=\\begin{pmatrix}2-(-1)\\\\-2-2\\end{pmatrix}=\\begin{pmatrix}3\\\\-4\\end{pmatrix}$.", marks: 1, markCode: "M" },
              { reasoning: "$|\\overrightarrow{AB}|=\\sqrt{9+16}=\\sqrt{25}$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $\\begin{pmatrix}3\\\\-4\\end{pmatrix}$, magnitude 5.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\begin{pmatrix}3\\\\-4\\end{pmatrix}$; magnitude 5",
          },
        },
        {
          id: "olam-u10-vc-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the dot product $\\begin{pmatrix}2\\\\3\\end{pmatrix}\\cdot\\begin{pmatrix}4\\\\-1\\end{pmatrix}$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 5 }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Dot product", statement: "$a_1b_1+a_2b_2$." }],
            steps: [
              { reasoning: "$2(4)+3(-1)=8-3=5$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 5.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "5",
          },
        },
        {
          id: "olam-u10-vc-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which pair of vectors is parallel?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\begin{pmatrix}3\\\\0\\end{pmatrix}$ and $\\begin{pmatrix}0\\\\3\\end{pmatrix}$" },
            { id: "b", text: "$\\begin{pmatrix}1\\\\2\\end{pmatrix}$ and $\\begin{pmatrix}2\\\\-1\\end{pmatrix}$" },
            { id: "c", text: "$\\begin{pmatrix}2\\\\4\\end{pmatrix}$ and $\\begin{pmatrix}1\\\\2\\end{pmatrix}$" },
            { id: "d", text: "$\\begin{pmatrix}2\\\\4\\end{pmatrix}$ and $\\begin{pmatrix}1\\\\3\\end{pmatrix}$" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "property", name: "Parallel vectors", statement: "Scalar multiples." }],
            steps: [{ reasoning: "$\\begin{pmatrix}2\\\\4\\end{pmatrix}=2\\begin{pmatrix}1\\\\2\\end{pmatrix}$.", marks: 1, markCode: "A" }],
            finalAnswer: "(a)",
          },
        },
        {
          id: "olam-u10-vc-q11",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Find the value of $k$ for which $\\begin{pmatrix}1\\\\k\\end{pmatrix}$ is perpendicular to $\\begin{pmatrix}4\\\\-2\\end{pmatrix}$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "property", name: "Perpendicular", statement: "Dot product = 0." }],
            steps: [
              { reasoning: "$\\begin{pmatrix}1\\\\k\\end{pmatrix}\\cdot\\begin{pmatrix}4\\\\-2\\end{pmatrix}=4-2k$.", marks: 1, markCode: "M" },
              { reasoning: "Set $=0$: $4-2k=0$ → $k=2$.", marks: 1, markCode: "M" },
              { reasoning: "Verify: $1(4)+2(-2)=0$ ✓.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $k=2$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$k=2$",
          },
        },
        {
          id: "olam-u10-vc-q12",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Find the magnitude of $\\begin{pmatrix}-6\\\\8\\end{pmatrix}$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 10 }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Magnitude", statement: "$\\sqrt{x^2+y^2}$; squares remove signs." }],
            steps: [
              { reasoning: "$\\sqrt{36+64}=\\sqrt{100}$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 10.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "10",
          },
        },
        {
          id: "olam-u10-vc-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "Two vectors are parallel if and only if…",
          response: { type: "mcq", choices: [
            { id: "a", text: "They have equal magnitude" },
            { id: "b", text: "Their components are equal" },
            { id: "c", text: "Their dot product is zero" },
            { id: "d", text: "One is a scalar multiple of the other" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "property", name: "Parallel vectors", statement: "Scalar multiple." }],
            steps: [{ reasoning: "Definition of parallel vectors.", marks: 1, markCode: "A" }],
            finalAnswer: "Scalar multiple",
          },
        },
        {
          id: "olam-u10-vc-q14",
          difficulty: "core",
          totalMarks: 3,
          stem: "Find the unit vector in the direction of $\\begin{pmatrix}-6\\\\8\\end{pmatrix}$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "Unit vector", statement: "$\\mathbf{v}/|\\mathbf{v}|$." }],
            steps: [
              { reasoning: "$|\\mathbf{v}|=\\sqrt{36+64}=10$.", marks: 1, markCode: "M" },
              { reasoning: "$\\hat{\\mathbf{v}}=\\frac{1}{10}\\begin{pmatrix}-6\\\\8\\end{pmatrix}=\\begin{pmatrix}-0.6\\\\0.8\\end{pmatrix}$.", marks: 1, markCode: "M" },
              { reasoning: "Answer stated.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\begin{pmatrix}-0.6\\\\0.8\\end{pmatrix}$",
          },
        },
        {
          id: "olam-u10-vc-q15",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the magnitude of $\\overrightarrow{AB}$ for A(1,1) and B(4,5).",
          response: { type: "numeric", parts: [{ label: "a", answer: 5 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Vector then magnitude", statement: "$\\overrightarrow{AB}=\\mathbf{b}-\\mathbf{a}$." }],
            steps: [
              { reasoning: "$\\overrightarrow{AB}=\\begin{pmatrix}3\\\\4\\end{pmatrix}$ → $|\\overrightarrow{AB}|=\\sqrt{9+16}=5$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 5.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "5",
          },
        },
        {
          id: "olam-u10-vc-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Given $\\mathbf{a}=\\begin{pmatrix}2\\\\1\\end{pmatrix}$ and $\\mathbf{b}=\\begin{pmatrix}1\\\\3\\end{pmatrix}$, find $\\mathbf{a}+\\mathbf{b}$, $\\mathbf{a}-\\mathbf{b}$ and $2\\mathbf{a}-\\mathbf{b}$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Vector arithmetic", statement: "Component-wise operations." }],
            steps: [
              { reasoning: "$\\mathbf{a}+\\mathbf{b}=\\begin{pmatrix}3\\\\4\\end{pmatrix}$.", marks: 1, markCode: "M" },
              { reasoning: "$\\mathbf{a}-\\mathbf{b}=\\begin{pmatrix}1\\\\-2\\end{pmatrix}$.", marks: 1, markCode: "M" },
              { reasoning: "$2\\mathbf{a}-\\mathbf{b}=\\begin{pmatrix}4\\\\2\\end{pmatrix}-\\begin{pmatrix}1\\\\3\\end{pmatrix}=\\begin{pmatrix}3\\\\-1\\end{pmatrix}$.", marks: 1, markCode: "M" },
              { reasoning: "All three answers stated.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\begin{pmatrix}3\\\\4\\end{pmatrix}$, $\\begin{pmatrix}1\\\\-2\\end{pmatrix}$, $\\begin{pmatrix}3\\\\-1\\end{pmatrix}$",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "olam-u10-vc-notes",
      title: "2D vectors — revision notes",
      summary: "AB = b−a; |v|=√(x²+y²); perpendicular ⇔ dot = 0.",
      sections: [
        { heading: "Basics", body: "$\\overrightarrow{AB}=\\mathbf{b}-\\mathbf{a}$; magnitude $\\sqrt{x^2+y^2}$; unit vector $\\mathbf{v}/|\\mathbf{v}|$." },
        { heading: "Angles", body: "Dot product $a_1b_1+a_2b_2 = |a||b|\\cos\\theta$; 0 ⇒ perpendicular." },
      ],
    },
  ],
};
