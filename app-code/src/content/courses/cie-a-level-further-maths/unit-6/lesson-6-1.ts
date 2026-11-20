import type { Lesson } from "../../../types.ts";

export const lesson61: Lesson = {
  id: "cialfm-u6-lesson-6-1",
  code: "6-1",
  title: "Vectors in three dimensions",
  goal: "I CAN work with 3D vectors, dot and cross products.",
  standards: ["9231 P1: vectors"],
  vocabulary: [
    { term: "Vector", definition: "Quantity with magnitude and direction, written $\\mathbf{a} = \\begin{pmatrix}a_1\\\\a_2\\\\a_3\\end{pmatrix}$." },
    { term: "Scalar product", definition: "$\\mathbf{a}\\cdot\\mathbf{b} = a_1b_1+a_2b_2+a_3b_3 = |a||b|\\cos\\theta$." },
    { term: "Vector product", definition: "$\\mathbf{a}\\times\\mathbf{b}$ gives vector perpendicular to both." },
    { term: "Magnitude", definition: "$|\\mathbf{a}| = \\sqrt{a_1^2+a_2^2+a_3^2}$." },
    { term: "Unit vector", definition: "Vector of length 1: $\\hat{\\mathbf{a}} = \\mathbf{a}/|\\mathbf{a}|$." },
  ],
  concepts: [
    {
      id: "cialfm-u6-s1-3d",
      title: "3D vector arithmetic",
      skill: "Add, subtract and find magnitudes of 3D vectors.",
      lesson: {
        sections: [
          {
            heading: "Notation",
            body: "$\\mathbf{a} = a_1\\mathbf{i} + a_2\\mathbf{j} + a_3\\mathbf{k}$ or column vector. Add/subtract component-wise.",
          },
          {
            heading: "Magnitude",
            body: "$|\\mathbf{a}| = \\sqrt{a_1^2+a_2^2+a_3^2}$. Distance between points $A, B$: $|\\overrightarrow{AB}|$.",
          },
        ],
        keyFormulas: [
          { name: "Magnitude", statement: "$|\\mathbf{a}| = \\sqrt{a_1^2+a_2^2+a_3^2}$" },
        ],
        workedExample: {
          problem: "Find $|\\mathbf{a}|$ for $\\mathbf{a} = \\begin{pmatrix}1\\\\2\\\\2\\end{pmatrix}$.",
          solution: "$\\sqrt{1+4+4} = 3$.",
        },
      },
      questions: [
        {
          id: "cialfm-u6-s1-3d-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The magnitude of $\\begin{pmatrix}3\\\\4\\\\0\\end{pmatrix}$ is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "5" }, { id: "b", text: "7" }, { id: "c", text: "12" }, { id: "d", text: "25" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "formula", name: "Magnitude", statement: "$\\sqrt{\\sum a_i^2}$." }],
            steps: [{ reasoning: "$\\sqrt{9+16} = 5$.", marks: 1, markCode: "A" }],
            finalAnswer: "5",
          },
        },
        {
          id: "cialfm-u6-s1-3d-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Find $\\mathbf{a}+\\mathbf{b}$ for $\\mathbf{a}=\\begin{pmatrix}1\\\\2\\\\3\\end{pmatrix}$, $\\mathbf{b}=\\begin{pmatrix}4\\\\5\\\\6\\end{pmatrix}$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Vector addition", statement: "Component-wise." }],
            steps: [
              { reasoning: "$= \\begin{pmatrix}5\\\\7\\\\9\\end{pmatrix}$.", marks: 1, markCode: "M" },
              { reasoning: "Answer shown.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\begin{pmatrix}5\\\\7\\\\9\\end{pmatrix}$",
          },
        },
        {
          id: "cialfm-u6-s1-3d-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Find the distance between $A(1,0,0)$ and $B(4,4,2)$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Distance", statement: "$|\\overrightarrow{AB}|$." }],
            steps: [
              { reasoning: "$\\overrightarrow{AB} = \\begin{pmatrix}3\\\\4\\\\2\\end{pmatrix}$; $|AB| = \\sqrt{9+16+4} = \\sqrt{29}$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $\\sqrt{29}$.", marks: 1, markCode: "M" },
              { reasoning: "Check components.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\sqrt{29}$",
          },
        },
        {
          id: "cialfm-u6-s1-3d-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Find the unit vector in the direction of $\\mathbf{a} = \\begin{pmatrix}2\\\\0\\\\0\\end{pmatrix}$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Unit vector", statement: "$\\hat{a} = a/|a|$." }],
            steps: [
              { reasoning: "$|a| = 2$.", marks: 1, markCode: "M" },
              { reasoning: "$\\hat{a} = \\begin{pmatrix}1\\\\0\\\\0\\end{pmatrix}$.", marks: 1, markCode: "M" },
              { reasoning: "Answer shown.", marks: 1, markCode: "M" },
              { reasoning: "Check magnitude = 1. ✓", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\begin{pmatrix}1\\\\0\\\\0\\end{pmatrix}$",
          },
        },
      ],
    },
    {
      id: "cialfm-u6-s1-dot",
      title: "Scalar and vector products",
      skill: "Use dot and cross products at A Level.",
      lesson: {
        sections: [
          {
            heading: "Scalar product",
            body: "$\\mathbf{a}\\cdot\\mathbf{b} = a_1b_1+a_2b_2+a_3b_3$. Also $=|a||b|\\cos\\theta$. Perpendicular vectors have $\\mathbf{a}\\cdot\\mathbf{b}=0$.",
          },
          {
            heading: "Vector product",
            body: "$\\mathbf{a}\\times\\mathbf{b} = \\begin{pmatrix}a_2b_3-a_3b_2\\\\a_3b_1-a_1b_3\\\\a_1b_2-a_2b_1\\end{pmatrix}$. Result is perpendicular to both; $|a\\times b| = |a||b|\\sin\\theta$ = area of parallelogram.",
          },
        ],
        keyFormulas: [
          { name: "Dot product", statement: "$\\mathbf{a}\\cdot\\mathbf{b}=\\sum a_ib_i$" },
          { name: "Cross product", statement: "$\\mathbf{a}\\times\\mathbf{b}$ perpendicular to both" },
        ],
        workedExample: {
          problem: "Find $\\mathbf{i}\\times\\mathbf{j}$.",
          solution: "$\\mathbf{i}\\times\\mathbf{j} = \\mathbf{k}$.",
        },
      },
      questions: [
        {
          id: "cialfm-u6-s1-do-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "$\\mathbf{i}\\cdot\\mathbf{j}$ equals…",
          response: { type: "mcq", choices: [
            { id: "a", text: "0" }, { id: "b", text: "1" }, { id: "c", text: "$\\mathbf{k}$" }, { id: "d", text: "-1" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "property", name: "Dot product", statement: "Perpendicular → 0." }],
            steps: [{ reasoning: "$\\mathbf{i}\\perp\\mathbf{j}$ → dot = 0.", marks: 1, markCode: "A" }],
            finalAnswer: "0",
          },
        },
        {
          id: "cialfm-u6-s1-do-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Find $\\begin{pmatrix}1\\\\2\\\\3\\end{pmatrix}\\cdot\\begin{pmatrix}4\\\\5\\\\6\\end{pmatrix}$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 32 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Dot product", statement: "Sum of products." }],
            steps: [
              { reasoning: "$1\\cdot4+2\\cdot5+3\\cdot6 = 4+10+18 = 32$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 32.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "32",
          },
        },
        {
          id: "cialfm-u6-s1-do-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Find $\\mathbf{i}\\times\\mathbf{j}$ and $\\mathbf{j}\\times\\mathbf{k}$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Cross product", statement: "Cyclic rule." }],
            steps: [
              { reasoning: "$\\mathbf{i}\\times\\mathbf{j} = \\mathbf{k}$; $\\mathbf{j}\\times\\mathbf{k} = \\mathbf{i}$.", marks: 1, markCode: "M" },
              { reasoning: "Answer shown.", marks: 1, markCode: "M" },
              { reasoning: "Pattern: $\\mathbf{i}\\to\\mathbf{j}\\to\\mathbf{k}\\to\\mathbf{i}$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\mathbf{k}$ and $\\mathbf{i}$",
          },
        },
        {
          id: "cialfm-u6-s1-do-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Find $\\begin{pmatrix}1\\\\0\\\\0\\end{pmatrix}\\times\\begin{pmatrix}0\\\\1\\\\0\\end{pmatrix}$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Cross product", statement: "Compute components." }],
            steps: [
              { reasoning: "$= \\begin{pmatrix}0\\cdot0-0\\cdot1\\\\0\\cdot0-1\\cdot0\\\\1\\cdot1-0\\cdot0\\end{pmatrix} = \\begin{pmatrix}0\\\\0\\\\1\\end{pmatrix}$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $\\mathbf{k}$ direction.", marks: 1, markCode: "M" },
              { reasoning: "Check perpendicular to both. ✓", marks: 1, markCode: "M" },
              { reasoning: "Final answer shown.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\begin{pmatrix}0\\\\0\\\\1\\end{pmatrix}$",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cialfm-u6-s1-vec-notes",
      title: "3D vectors — revision notes",
      summary: "Arithmetic, dot and cross products.",
      sections: [
        { heading: "Dot", body: "$\\mathbf{a}\\cdot\\mathbf{b}=\\sum a_ib_i=|a||b|\\cos\\theta$. Zero → perpendicular." },
        { heading: "Cross", body: "$\\mathbf{a}\\times\\mathbf{b}$ perpendicular to both; magnitude = area of parallelogram." },
      ],
    },
  ],
};
