import type { Lesson } from "../../../types.ts";

export const lesson71: Lesson = {
  id: "cial-m-u7-lesson-7-1",
  code: "7-1",
  title: "Vectors: notation, magnitude and dot product",
  goal: "I CAN use vector notation, magnitude and the scalar product.",
  standards: ["Cambridge A Level Mathematics 9709: vectors"],
  vocabulary: [
    { term: "Position vector", definition: "Vector from origin to a point." },
    { term: "Scalar (dot) product", definition: "$\\mathbf{a}\\cdot\\mathbf{b} = |a||b|\\cos\\theta$." },
    { term: "Magnitude", definition: "Length of a vector, $|\\mathbf{v}|=\\sqrt{x^2+y^2}$." },
  ],
  concepts: [
    {
      id: "cial-m-u7-vectors",
      title: "Vectors",
      skill:
        "Use vector notation, magnitude, dot product and position vectors.",
      lesson: {
        sections: [
          {
            heading: "Vector notation",
            body: "Vector $\\overrightarrow{AB} = \\mathbf{b} - \\mathbf{a}$ (position vector of B minus A). Column vector $\\begin{pmatrix} x \\ y \\end{pmatrix}$ or $\\mathbf{i} + 2\\mathbf{j}$ notation. Magnitude: $|\\mathbf{v}| = \\sqrt{x^2+y^2}$.",
          },
          {
            heading: "Scalar (dot) product",
            body: "$\\mathbf{a} \\cdot \\mathbf{b} = a_1b_1 + a_2b_2$. Also $\\mathbf{a} \\cdot \\mathbf{b} = |\\mathbf{a}||\\mathbf{b}|\\cos\\theta$. Perpendicular vectors have dot product 0. Used to find angles between vectors.",
          },
          {
            heading: "Vector equations of lines",
            body: "Line through point A with direction $\\mathbf{d}$: $\\mathbf{r} = \\mathbf{a} + \\lambda \\mathbf{d}$. Intersection of two lines: solve $\\mathbf{a} + \\lambda \\mathbf{d} = \\mathbf{b} + \\mu \\mathbf{e}$ simultaneously.",
          },
        ],
        keyFormulas: [
          {
            name: "Vector",
            statement: "$\\overrightarrow{AB} = \\mathbf{b} - \\mathbf{a}$",
          },
          { name: "Magnitude", statement: "$|\\mathbf{v}| = \\sqrt{x^2+y^2}$" },
          {
            name: "Dot product",
            statement:
              "$\\mathbf{a}\\cdot\\mathbf{b} = a_1b_1+a_2b_2 = |a||b|\\cos\\theta$",
          },
        ],
        workedExample: {
          problem: "Find $\\overrightarrow{AB}$ where A=(1,2), B=(4,6).",
          solution:
            "$\\overrightarrow{AB} = \\begin{pmatrix}4\\\\6\\end{pmatrix} - \\begin{pmatrix}1\\\\2\\end{pmatrix} = \\begin{pmatrix}3\\\\4\\end{pmatrix}$.",
        },
      },
      questions: [
        {
          id: "cial-m-u7-vc-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is $\\overrightarrow{AB}$ when A=(1,2) and B=(4,6)?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\begin{pmatrix}3\\\\4\\end{pmatrix}$" },
              { id: "b", text: "$\\begin{pmatrix}5\\\\8\\end{pmatrix}$" },
              { id: "c", text: "$\\begin{pmatrix}4\\\\6\\end{pmatrix}$" },
              { id: "d", text: "$\\begin{pmatrix}-3\\\\-4\\end{pmatrix}$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Vector subtraction",
                statement:
                  "$\\overrightarrow{AB} = \\mathbf{b} - \\mathbf{a}$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$\\begin{pmatrix}4\\\\6\\end{pmatrix} - \\begin{pmatrix}1\\\\2\\end{pmatrix} = \\begin{pmatrix}3\\\\4\\end{pmatrix}$.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(a)** $\\begin{pmatrix}3\\\\4\\end{pmatrix}$",
            commonErrors: ["Adding instead of subtracting."],
          },
        },
        {
          id: "cial-m-u7-vc-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the magnitude of $\\mathbf{v} = \\begin{pmatrix}3\\\\4\\end{pmatrix}$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Magnitude",
                statement: "$|\\mathbf{v}| = \\sqrt{x^2+y^2}$.",
              },
            ],
            steps: [
              {
                reasoning: "$|\\mathbf{v}| = \\sqrt{9+16} = \\sqrt{25}$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$= 5$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$5$",
            commonErrors: ["Adding components instead of squaring."],
          },
        },
        {
          id: "cial-m-u7-vc-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Find the angle between $\\mathbf{a} = \\begin{pmatrix}1\\\\0\\end{pmatrix}$ and $\\mathbf{b} = \\begin{pmatrix}1\\\\1\\end{pmatrix}$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Dot product",
                statement:
                  "$\\cos\\theta = \\frac{\\mathbf{a}\\cdot\\mathbf{b}}{|\\mathbf{a}||\\mathbf{b}|}$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$\\mathbf{a}\\cdot\\mathbf{b} = 1$; $|\\mathbf{a}|=1$, $|\\mathbf{b}|=\\sqrt{2}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$\\cos\\theta = \\frac{1}{\\sqrt{2}}$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$\\theta = 45°$.", marks: 1, markCode: "M" },
              { reasoning: "Correct angle.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$45°$",
            commonErrors: ["Using wrong formula for angle."],
          },
        },
        {
          id: "cial-m-u7-vc-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Vectors.",
          parts: [
            { label: "a", prompt: "$\\overrightarrow{AB}$ formula?", marks: 1 },
            {
              label: "b",
              prompt: "$\\overrightarrow{AB}$ for A(1,2), B(4,6)?",
              marks: 2,
            },
            { label: "c", prompt: "Dot product formula?", marks: 2 },
            {
              label: "d",
              prompt:
                "Angle between $\\begin{pmatrix}1\\\\0\\end{pmatrix}$ and $\\begin{pmatrix}1\\\\1\\end{pmatrix}$?",
              marks: 5,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Vectors",
                statement: "Subtraction+magnitude+dot product+angle.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "$\\mathbf{b}-\\mathbf{a}$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$\\begin{pmatrix}3\\\\4\\end{pmatrix}$.",
                marks: 1,
                markCode: "M",
              },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "A" },
              {
                part: "c",
                reasoning: "$a_1b_1+a_2b_2$.",
                marks: 1,
                markCode: "M",
              },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "A" },
              {
                part: "d",
                reasoning: "Dot product = 1.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Magnitudes 1 and $\\sqrt{2}$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "$\\cos\\theta = 1/\\sqrt{2}$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "$\\theta = 45°$.",
                marks: 1,
                markCode: "M",
              },
              { part: "d", reasoning: "Correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) b−a (b) (3,4) (c) a₁b₁+a₂b₂ (d) 45°",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cial-m-u7-vectors-notes",
      title: "Vectors — revision notes",
      summary: "Vector subtraction, magnitude and dot product.",
      sections: [
        { heading: "Basics", body: "$\\overrightarrow{AB}=\\mathbf{b}-\\mathbf{a}$. Magnitude $\\sqrt{x^2+y^2}$. Dot product $a_1b_1+a_2b_2=|a||b|\\cos\\theta$; perpendicular vectors have dot product 0." },
        { heading: "Lines", body: "Vector equation of a line: $\\mathbf{r}=\\mathbf{a}+\\lambda\\mathbf{d}$." },
      ],
    },
  ],
};
