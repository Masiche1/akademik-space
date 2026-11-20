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
            { id: "a", text: "$\\begin{pmatrix}3\\\\3\\end{pmatrix}$" }, { id: "b", text: "$\\begin{pmatrix}7\\\\5\\end{pmatrix}$" }, { id: "c", text: "$\\begin{pmatrix}3\\\\-3\\end{pmatrix}$" }, { id: "d", text: "$\\begin{pmatrix}-3\\\\-3\\end{pmatrix}$" },
          ], correctChoiceId: "a" },
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
