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
            { id: "a", text: "7" },
            { id: "b", text: "5" },
            { id: "c", text: "12" },
            { id: "d", text: "25" },
          ], correctChoiceId: "b" },
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
        {
          id: "cialfm-u6-s1-3d-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The magnitude of $\\begin{pmatrix}2\\\\-2\\\\1\\end{pmatrix}$ is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "9" },
            { id: "b", text: "5" },
            { id: "c", text: "3" },
            { id: "d", text: "$\\sqrt{5}$" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "formula", name: "Magnitude", statement: "$\\sqrt{\\sum a_i^2}$." }],
            steps: [{ reasoning: "$\\sqrt{4+4+1} = 3$.", marks: 1, markCode: "A" }],
            finalAnswer: "3",
          },
        },
        {
          id: "cialfm-u6-s1-3d-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Find the magnitude of $\\begin{pmatrix}1\\\\2\\\\2\\end{pmatrix}-\\begin{pmatrix}-1\\\\0\\\\1\\end{pmatrix}$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 3 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Vector subtraction", statement: "Component-wise then magnitude." }],
            steps: [
              { reasoning: "Difference $= \\begin{pmatrix}2\\\\2\\\\1\\end{pmatrix}$; $|\\cdot| = \\sqrt{4+4+1} = 3$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 3.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "3",
          },
        },
        {
          id: "cialfm-u6-s1-3d-q7",
          difficulty: "core",
          totalMarks: 3,
          stem: "Find $2\\mathbf{a}-\\mathbf{b}$ for $\\mathbf{a}=\\begin{pmatrix}1\\\\2\\\\3\\end{pmatrix}$, $\\mathbf{b}=\\begin{pmatrix}4\\\\1\\\\0\\end{pmatrix}$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Linear combination", statement: "Scalar multiply then subtract." }],
            steps: [
              { reasoning: "$2\\mathbf{a} = \\begin{pmatrix}2\\\\4\\\\6\\end{pmatrix}$.", marks: 1, markCode: "M" },
              { reasoning: "$2\\mathbf{a}-\\mathbf{b} = \\begin{pmatrix}-2\\\\3\\\\6\\end{pmatrix}$.", marks: 1, markCode: "M" },
              { reasoning: "Answer shown.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\begin{pmatrix}-2\\\\3\\\\6\\end{pmatrix}$",
          },
        },
        {
          id: "cialfm-u6-s1-3d-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The distance between the origin and the point $(1,2,2)$ is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\sqrt{5}$" },
            { id: "b", text: "3" },
            { id: "c", text: "$\\sqrt{6}$" },
            { id: "d", text: "9" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "formula", name: "Distance", statement: "Magnitude of position vector." }],
            steps: [{ reasoning: "$\\sqrt{1+4+4} = 3$.", marks: 1, markCode: "A" }],
            finalAnswer: "3",
          },
        },
        {
          id: "cialfm-u6-s1-3d-q9",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Find $|\\mathbf{a}|$ for $\\mathbf{a}=\\begin{pmatrix}2\\\\3\\\\6\\end{pmatrix}$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 7 }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Magnitude", statement: "$\\sqrt{a_1^2+a_2^2+a_3^2}$." }],
            steps: [
              { reasoning: "$\\sqrt{4+9+36} = \\sqrt{49} = 7$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 7.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "7",
          },
        },
        {
          id: "cialfm-u6-s1-3d-q10",
          difficulty: "core",
          totalMarks: 4,
          stem: "Find the midpoint of the line segment joining $A(1,2,3)$ and $B(3,4,5)$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Midpoint", statement: "Average of coordinates." }],
            steps: [
              { reasoning: "$x = \\frac{1+3}{2} = 2$, $y = \\frac{2+4}{2} = 3$, $z = \\frac{3+5}{2} = 4$.", marks: 1, markCode: "M" },
              { reasoning: "Midpoint $= (2,3,4)$.", marks: 1, markCode: "M" },
              { reasoning: "Check it lies halfway along $\\overrightarrow{AB}$. ✓", marks: 1, markCode: "M" },
              { reasoning: "Answer stated.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$(2,3,4)$",
          },
        },
        {
          id: "cialfm-u6-s1-3d-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of the following is a unit vector?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\begin{pmatrix}2\\\\0\\\\0\\end{pmatrix}$" },
            { id: "b", text: "$\\begin{pmatrix}1\\\\1\\\\1\\end{pmatrix}$" },
            { id: "c", text: "$\\begin{pmatrix}1/3\\\\2/3\\\\2/3\\end{pmatrix}$" },
            { id: "d", text: "$\\begin{pmatrix}0\\\\0\\\\1\\end{pmatrix}$ scaled by 2" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "property", name: "Unit vector", statement: "Magnitude = 1." }],
            steps: [{ reasoning: "$\\sqrt{1/9+4/9+4/9} = 1$ for choice (a) only.", marks: 1, markCode: "A" }],
            finalAnswer: "$\\begin{pmatrix}1/3\\\\2/3\\\\2/3\\end{pmatrix}$",
          },
        },
        {
          id: "cialfm-u6-s1-3d-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the magnitude of $\\begin{pmatrix}3\\\\4\\\\12\\end{pmatrix}$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 13 }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Magnitude", statement: "$\\sqrt{\\sum a_i^2}$." }],
            steps: [
              { reasoning: "$\\sqrt{9+16+144} = \\sqrt{169} = 13$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 13.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "13",
          },
        },
        {
          id: "cialfm-u6-s1-3d-q13",
          difficulty: "core",
          totalMarks: 3,
          stem: "Express $\\begin{pmatrix}4\\\\-2\\\\6\\end{pmatrix}$ as a scalar multiple of $\\begin{pmatrix}2\\\\-1\\\\3\\end{pmatrix}$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Scalar multiple", statement: "Check each component ratio." }],
            steps: [
              { reasoning: "$4/2 = -2/-1 = 6/3 = 2$.", marks: 1, markCode: "M" },
              { reasoning: "All ratios equal 2, so it is $2\\begin{pmatrix}2\\\\-1\\\\3\\end{pmatrix}$.", marks: 1, markCode: "M" },
              { reasoning: "Answer shown.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2\\begin{pmatrix}2\\\\-1\\\\3\\end{pmatrix}$",
          },
        },
        {
          id: "cialfm-u6-s1-3d-q14",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "If $\\mathbf{a}=\\begin{pmatrix}2\\\\3\\\\c\\end{pmatrix}$ and $|\\mathbf{a}|=7$, find the possible values of $c$.",
          response: { type: "mcq", choices: [
            { id: "a", text: "-6" },
            { id: "b", text: "6" },
            { id: "c", text: "36" },
            { id: "d", text: "$\\pm 6$" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "technique", name: "Magnitude equation", statement: "Solve $\\sum a_i^2 = |a|^2$." }],
            steps: [
              { reasoning: "$4+9+c^2 = 49 \\Rightarrow c^2 = 36 \\Rightarrow c = \\pm 6$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $\\pm 6$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$c = \\pm 6$",
          },
        },
        {
          id: "cialfm-u6-s1-3d-q15",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the distance between $A(1,1,1)$ and $B(4,5,1)$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 5 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Distance", statement: "$|\\overrightarrow{AB}|$." }],
            steps: [
              { reasoning: "$\\overrightarrow{AB} = \\begin{pmatrix}3\\\\4\\\\0\\end{pmatrix}$; $|AB| = \\sqrt{9+16} = 5$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 5.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "5",
          },
        },
        {
          id: "cialfm-u6-s1-3d-q16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "For $\\mathbf{a}=\\begin{pmatrix}1\\\\-2\\\\2\\end{pmatrix}$ and $\\mathbf{b}=\\begin{pmatrix}2\\\\1\\\\-1\\end{pmatrix}$, find $|\\mathbf{a}-\\mathbf{b}|$ and $|\\mathbf{a}+\\mathbf{b}|$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Sum and difference", statement: "Component-wise then magnitude." }],
            steps: [
              { reasoning: "$\\mathbf{a}-\\mathbf{b} = \\begin{pmatrix}-1\\\\-3\\\\3\\end{pmatrix}$, so $|\\mathbf{a}-\\mathbf{b}| = \\sqrt{1+9+9} = \\sqrt{19}$.", marks: 1, markCode: "M" },
              { reasoning: "$\\mathbf{a}+\\mathbf{b} = \\begin{pmatrix}3\\\\-1\\\\1\\end{pmatrix}$, so $|\\mathbf{a}+\\mathbf{b}| = \\sqrt{9+1+1} = \\sqrt{11}$.", marks: 1, markCode: "M" },
              { reasoning: "Both magnitudes computed correctly.", marks: 1, markCode: "M" },
              { reasoning: "Check arithmetic of both vectors. ✓", marks: 1, markCode: "M" },
              { reasoning: "Answers stated.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\sqrt{19}$ and $\\sqrt{11}$",
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
            { id: "a", text: "-1" },
            { id: "b", text: "1" },
            { id: "c", text: "0" },
            { id: "d", text: "$\\mathbf{k}$" },
          ], correctChoiceId: "c" },
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
        {
          id: "cialfm-u6-s1-do-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "$\\begin{pmatrix}1\\\\1\\\\0\\end{pmatrix}\\cdot\\begin{pmatrix}0\\\\1\\\\1\\end{pmatrix}$ equals…",
          response: { type: "mcq", choices: [
            { id: "a", text: "0" },
            { id: "b", text: "-1" },
            { id: "c", text: "2" },
            { id: "d", text: "1" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "technique", name: "Dot product", statement: "Sum of component products." }],
            steps: [{ reasoning: "$1\\cdot0+1\\cdot1+0\\cdot1 = 1$.", marks: 1, markCode: "A" }],
            finalAnswer: "1",
          },
        },
        {
          id: "cialfm-u6-s1-do-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Find $\\begin{pmatrix}2\\\\-1\\\\3\\end{pmatrix}\\cdot\\begin{pmatrix}1\\\\4\\\\-1\\end{pmatrix}$.",
          response: { type: "numeric", parts: [{ label: "a", answer: -5 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Dot product", statement: "$\\sum a_ib_i$." }],
            steps: [
              { reasoning: "$2\\cdot1 + (-1)\\cdot4 + 3\\cdot(-1) = 2-4-3 = -5$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: -5.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "-5",
          },
        },
        {
          id: "cialfm-u6-s1-do-q7",
          difficulty: "core",
          totalMarks: 4,
          stem: "Find the angle between $\\begin{pmatrix}1\\\\0\\\\0\\end{pmatrix}$ and $\\begin{pmatrix}1\\\\1\\\\0\\end{pmatrix}$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "Angle", statement: "$\\cos\\theta = \\frac{\\mathbf{a}\\cdot\\mathbf{b}}{|\\mathbf{a}||\\mathbf{b}|}$." }],
            steps: [
              { reasoning: "$\\mathbf{a}\\cdot\\mathbf{b} = 1$; $|\\mathbf{a}| = 1$, $|\\mathbf{b}| = \\sqrt{2}$.", marks: 1, markCode: "M" },
              { reasoning: "$\\cos\\theta = \\frac{1}{\\sqrt{2}}$.", marks: 1, markCode: "M" },
              { reasoning: "$\\theta = 45^\\circ$.", marks: 1, markCode: "M" },
              { reasoning: "Answer stated.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$45^\\circ$",
          },
        },
        {
          id: "cialfm-u6-s1-do-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "$\\begin{pmatrix}1\\\\0\\\\0\\end{pmatrix}\\times\\begin{pmatrix}0\\\\0\\\\1\\end{pmatrix}$ equals…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\begin{pmatrix}0\\\\0\\\\-1\\end{pmatrix}$" },
            { id: "b", text: "$\\begin{pmatrix}0\\\\-1\\\\0\\end{pmatrix}$" },
            { id: "c", text: "$\\begin{pmatrix}0\\\\1\\\\0\\end{pmatrix}$" },
            { id: "d", text: "$\\begin{pmatrix}1\\\\0\\\\0\\end{pmatrix}$" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "technique", name: "Cross product", statement: "Component formula." }],
            steps: [{ reasoning: "$= \\begin{pmatrix}0\\cdot1-0\\cdot0\\\\0\\cdot0-1\\cdot1\\\\1\\cdot0-0\\cdot0\\end{pmatrix} = \\begin{pmatrix}0\\\\-1\\\\0\\end{pmatrix}$.", marks: 1, markCode: "A" }],
            finalAnswer: "$\\begin{pmatrix}0\\\\-1\\\\0\\end{pmatrix}$",
          },
        },
        {
          id: "cialfm-u6-s1-do-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the area of the parallelogram with adjacent sides $\\begin{pmatrix}1\\\\1\\\\0\\end{pmatrix}$ and $\\begin{pmatrix}0\\\\1\\\\1\\end{pmatrix}$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 1.732, tolerance: 0.001 }] },
          markscheme: {
            principles: [{ kind: "property", name: "Area", statement: "Area $= |\\mathbf{a}\\times\\mathbf{b}|$." }],
            steps: [
              { reasoning: "$\\mathbf{a}\\times\\mathbf{b} = \\begin{pmatrix}1\\\\-1\\\\1\\end{pmatrix}$, so area $= \\sqrt{3} \\approx 1.732$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $\\sqrt{3}$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\sqrt{3}$",
          },
        },
        {
          id: "cialfm-u6-s1-do-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "Find a vector perpendicular to both $\\begin{pmatrix}1\\\\1\\\\0\\end{pmatrix}$ and $\\begin{pmatrix}1\\\\0\\\\1\\end{pmatrix}$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Cross product", statement: "Perpendicular to both." }],
            steps: [
              { reasoning: "$\\mathbf{n} = \\begin{pmatrix}1\\\\1\\\\0\\end{pmatrix}\\times\\begin{pmatrix}1\\\\0\\\\1\\end{pmatrix} = \\begin{pmatrix}1\\\\-1\\\\-1\\end{pmatrix}$.", marks: 1, markCode: "M" },
              { reasoning: "Check: $\\mathbf{n}\\cdot\\mathbf{a} = 1-1+0 = 0$ and $\\mathbf{n}\\cdot\\mathbf{b} = 1+0-1 = 0$. ✓", marks: 1, markCode: "M" },
              { reasoning: "Answer shown.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\begin{pmatrix}1\\\\-1\\\\-1\\end{pmatrix}$",
          },
        },
        {
          id: "cialfm-u6-s1-do-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "If $\\mathbf{a}\\cdot\\mathbf{b}=0$ for non-zero vectors, then $\\mathbf{a}$ and $\\mathbf{b}$ are…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Perpendicular" },
            { id: "b", text: "Opposite" },
            { id: "c", text: "Equal" },
            { id: "d", text: "Parallel" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "property", name: "Dot product", statement: "$\\cos\\theta=0$ when dot = 0." }],
            steps: [{ reasoning: "Zero dot product means $\\theta = 90^\\circ$.", marks: 1, markCode: "A" }],
            finalAnswer: "Perpendicular",
          },
        },
        {
          id: "cialfm-u6-s1-do-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find $\\left|\\begin{pmatrix}1\\\\0\\\\0\\end{pmatrix}\\times\\begin{pmatrix}0\\\\2\\\\0\\end{pmatrix}\\right|$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 2 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Cross product magnitude", statement: "Compute then magnitude." }],
            steps: [
              { reasoning: "$\\begin{pmatrix}1\\\\0\\\\0\\end{pmatrix}\\times\\begin{pmatrix}0\\\\2\\\\0\\end{pmatrix} = \\begin{pmatrix}0\\\\0\\\\2\\end{pmatrix}$; magnitude $= 2$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 2.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2",
          },
        },
        {
          id: "cialfm-u6-s1-do-q13",
          difficulty: "core",
          totalMarks: 3,
          stem: "Show that $\\begin{pmatrix}1\\\\2\\\\3\\end{pmatrix}$ and $\\begin{pmatrix}2\\\\-1\\\\0\\end{pmatrix}$ are perpendicular.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Perpendicular test", statement: "Dot product = 0." }],
            steps: [
              { reasoning: "$\\mathbf{a}\\cdot\\mathbf{b} = 1\\cdot2 + 2\\cdot(-1) + 3\\cdot0$.", marks: 1, markCode: "M" },
              { reasoning: "$= 2 - 2 + 0 = 0$.", marks: 1, markCode: "M" },
              { reasoning: "Zero dot product ⇒ perpendicular. QED.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Perpendicular",
          },
        },
        {
          id: "cialfm-u6-s1-do-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "$|\\mathbf{a}\\times\\mathbf{b}|$ equals…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Dot product $\\mathbf{a}\\cdot\\mathbf{b}$" },
            { id: "b", text: "Scalar product only" },
            { id: "c", text: "Magnitude of $\\mathbf{a}+\\mathbf{b}$" },
            { id: "d", text: "Area of parallelogram formed by $\\mathbf{a}$ and $\\mathbf{b}$" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "property", name: "Cross product magnitude", statement: "$|a\\times b| = |a||b|\\sin\\theta$." }],
            steps: [{ reasoning: "It equals the parallelogram area.", marks: 1, markCode: "A" }],
            finalAnswer: "Parallelogram area",
          },
        },
        {
          id: "cialfm-u6-s1-do-q15",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find $\\begin{pmatrix}2\\\\1\\\\-1\\end{pmatrix}\\cdot\\begin{pmatrix}1\\\\-1\\\\2\\end{pmatrix}$.",
          response: { type: "numeric", parts: [{ label: "a", answer: -1 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Dot product", statement: "$\\sum a_ib_i$." }],
            steps: [
              { reasoning: "$2\\cdot1 + 1\\cdot(-1) + (-1)\\cdot2 = 2-1-2 = -1$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: -1.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "-1",
          },
        },
        {
          id: "cialfm-u6-s1-do-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Find $\\mathbf{a}\\times\\mathbf{b}$ for $\\mathbf{a}=\\begin{pmatrix}0\\\\1\\\\2\\end{pmatrix}$, $\\mathbf{b}=\\begin{pmatrix}1\\\\0\\\\3\\end{pmatrix}$, and verify it is perpendicular to both.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Cross product", statement: "Component formula; result perpendicular to both." }],
            steps: [
              { reasoning: "$\\mathbf{a}\\times\\mathbf{b} = \\begin{pmatrix}3\\\\2\\\\-1\\end{pmatrix}$.", marks: 1, markCode: "M" },
              { reasoning: "$(\\mathbf{a}\\times\\mathbf{b})\\cdot\\mathbf{a} = 0+2-2 = 0$.", marks: 1, markCode: "M" },
              { reasoning: "$(\\mathbf{a}\\times\\mathbf{b})\\cdot\\mathbf{b} = 3+0-3 = 0$.", marks: 1, markCode: "M" },
              { reasoning: "Both zero ⇒ perpendicular; answer shown.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\begin{pmatrix}3\\\\2\\\\-1\\end{pmatrix}$",
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
