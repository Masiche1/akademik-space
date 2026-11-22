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
              { id: "a", text: "$\\begin{pmatrix}-3\\\\-4\\end{pmatrix}$" },
              { id: "b", text: "$\\begin{pmatrix}3\\\\4\\end{pmatrix}$" },
              { id: "c", text: "$\\begin{pmatrix}5\\\\8\\end{pmatrix}$" },
              { id: "d", text: "$\\begin{pmatrix}4\\\\6\\end{pmatrix}$" },
            ],
            correctChoiceId: "b",
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
        {
          id: "cial-m-u7-vc-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is $\\overrightarrow{AB}$ when A = (-2, 1) and B = (3, -4)?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\begin{pmatrix}5\\\\3\\end{pmatrix}$" },
              { id: "b", text: "$\\begin{pmatrix}1\\\\-3\\end{pmatrix}$" },
              { id: "c", text: "$\\begin{pmatrix}-5\\\\5\\end{pmatrix}$" },
              { id: "d", text: "$\\begin{pmatrix}5\\\\-5\\end{pmatrix}$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Vector subtraction",
                statement: "$\\overrightarrow{AB} = \\mathbf{b} - \\mathbf{a}$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$\\begin{pmatrix}3\\\\-4\\end{pmatrix} - \\begin{pmatrix}-2\\\\1\\end{pmatrix} = \\begin{pmatrix}5\\\\-5\\end{pmatrix}$.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(a)** $\\begin{pmatrix}5\\\\-5\\end{pmatrix}$",
            commonErrors: ["Subtracting in the wrong order."],
          },
        },
        {
          id: "cial-m-u7-vc-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the magnitude of $\\mathbf{v} = \\begin{pmatrix}-5\\\\12\\end{pmatrix}$.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 13 }],
          },
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
                reasoning: "$|\\mathbf{v}| = \\sqrt{25+144} = \\sqrt{169}$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$= 13$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$13$",
            commonErrors: ["Forgetting to square the negative component."],
          },
        },
        {
          id: "cial-m-u7-vc-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is $\\begin{pmatrix}2\\\\-1\\end{pmatrix} \\cdot \\begin{pmatrix}3\\\\4\\end{pmatrix}$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$2$" },
              { id: "b", text: "$14$" },
              { id: "c", text: "$-2$" },
              { id: "d", text: "$10$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Dot product",
                statement: "$\\mathbf{a}\\cdot\\mathbf{b} = a_1b_1 + a_2b_2$.",
              },
            ],
            steps: [
              {
                reasoning: "$2(3) + (-1)(4) = 6 - 4 = 2$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $2$",
            commonErrors: ["Adding corresponding components instead of multiplying."],
          },
        },
        {
          id: "cial-m-u7-vc-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the magnitude of $\\mathbf{v} = \\begin{pmatrix}1\\\\-2\\\\2\\end{pmatrix}$.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 3 }],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Magnitude",
                statement: "$|\\mathbf{v}| = \\sqrt{x^2+y^2+z^2}$.",
              },
            ],
            steps: [
              {
                reasoning: "$|\\mathbf{v}| = \\sqrt{1+4+4} = \\sqrt{9}$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$= 3$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$3$",
            commonErrors: ["Using only two components."],
          },
        },
        {
          id: "cial-m-u7-vc-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "If $\\overrightarrow{AB} = \\begin{pmatrix}3\\\\-1\\end{pmatrix}$, what is $2\\overrightarrow{AB}$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\begin{pmatrix}6\\\\-2\\end{pmatrix}$" },
              { id: "b", text: "$\\begin{pmatrix}6\\\\1\\end{pmatrix}$" },
              { id: "c", text: "$\\begin{pmatrix}5\\\\-3\\end{pmatrix}$" },
              { id: "d", text: "$\\begin{pmatrix}3\\\\-2\\end{pmatrix}$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Scalar multiple",
                statement: "Doubling a vector doubles each component.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$2\\begin{pmatrix}3\\\\-1\\end{pmatrix} = \\begin{pmatrix}6\\\\-2\\end{pmatrix}$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $\\begin{pmatrix}6\\\\-2\\end{pmatrix}$",
            commonErrors: ["Adding 2 to each component instead of multiplying."],
          },
        },
        {
          id: "cial-m-u7-vc-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "Find the value of $\\lambda$ for which $\\begin{pmatrix}\\lambda\\\\3\\end{pmatrix}$ is perpendicular to $\\begin{pmatrix}2\\\\-1\\end{pmatrix}$.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 1.5 }],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Perpendicular vectors",
                statement: "Perpendicular $\\Rightarrow$ dot product $= 0$.",
              },
            ],
            steps: [
              {
                reasoning: "$2\\lambda + 3(-1) = 0$, so $2\\lambda = 3$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$\\lambda = \\frac{3}{2}$.", marks: 1, markCode: "M" },
              { reasoning: "$\\lambda = 1.5$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$1.5$",
            commonErrors: ["Setting the vectors equal instead of using the dot product."],
          },
        },
        {
          id: "cial-m-u7-vc-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "Given $\\overrightarrow{AB} = \\begin{pmatrix}4\\\\-2\\end{pmatrix}$ and $\\overrightarrow{BC} = \\begin{pmatrix}-2\\\\1\\end{pmatrix}$, which statement is true?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "$\\overrightarrow{BC} = \\frac{1}{2}\\overrightarrow{AB}$",
              },
              {
                id: "b",
                text: "$\\overrightarrow{AB}$ and $\\overrightarrow{BC}$ are perpendicular",
              },
              { id: "c", text: "$\\overrightarrow{BC} = \\overrightarrow{AB}$" },
              {
                id: "d",
                text: "$\\overrightarrow{BC} = -\\frac{1}{2}\\overrightarrow{AB}$",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Scalar multiple",
                statement: "$\\begin{pmatrix}-2\\\\1\\end{pmatrix} = -\\frac{1}{2}\\begin{pmatrix}4\\\\-2\\end{pmatrix}$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$-\\frac{1}{2}\\begin{pmatrix}4\\\\-2\\end{pmatrix} = \\begin{pmatrix}-2\\\\1\\end{pmatrix}$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $\\overrightarrow{BC} = -\\frac{1}{2}\\overrightarrow{AB}$",
            commonErrors: ["Ignoring the negative sign in the scalar multiple."],
          },
        },
        {
          id: "cial-m-u7-vc-q12",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Find the angle between $\\mathbf{a} = \\begin{pmatrix}1\\\\2\\end{pmatrix}$ and $\\mathbf{b} = \\begin{pmatrix}3\\\\1\\end{pmatrix}$.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 45 }],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Angle between vectors",
                statement:
                  "$\\cos\\theta = \\frac{\\mathbf{a}\\cdot\\mathbf{b}}{|\\mathbf{a}||\\mathbf{b}|}$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$\\mathbf{a}\\cdot\\mathbf{b} = 3 + 2 = 5$; $|\\mathbf{a}| = \\sqrt{5}$, $|\\mathbf{b}| = \\sqrt{10}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$\\cos\\theta = \\frac{5}{\\sqrt{50}} = \\frac{1}{\\sqrt{2}}$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$\\theta = 45°$.", marks: 1, markCode: "M" },
              { reasoning: "Angle is $45°$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$45°$",
            commonErrors: ["Using the wrong formula for the angle."],
          },
        },
        {
          id: "cial-m-u7-vc-q13",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "If $|\\mathbf{a}| = 3$, $|\\mathbf{b}| = 4$ and $\\mathbf{a}\\cdot\\mathbf{b} = 6$, what is the angle between $\\mathbf{a}$ and $\\mathbf{b}$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$30°$" },
              { id: "b", text: "$120°$" },
              { id: "c", text: "$45°$" },
              { id: "d", text: "$60°$" },
            ],
            dorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Dot product",
                statement: "$\\cos\\theta = \\frac{\\mathbf{a}\\cdot\\mathbf{b}}{|\\mathbf{a}||\\mathbf{b}|} = \\frac{6}{12} = \\frac{1}{2}$.",
              },
            ],
            steps: [
              {
                reasoning: "$\\cos\\theta = \\frac{6}{3 \\times 4} = \\frac{1}{2}$, so $\\theta = 60°$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** $60°$",
            commonErrors: ["Forgetting to divide by the product of the magnitudes."],
          },
        },
        {
          id: "cial-m-u7-vc-q14",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Find the angle between $\\mathbf{a} = \\begin{pmatrix}1\\\\1\\end{pmatrix}$ and $\\mathbf{b} = \\begin{pmatrix}1\\\\-1\\end{pmatrix}$.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 90 }],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Perpendicular vectors",
                statement: "Dot product $= 0$ means $\\theta = 90°$.",
              },
            ],
            steps: [
              {
                reasoning: "$\\mathbf{a}\\cdot\\mathbf{b} = 1 - 1 = 0$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$|\\mathbf{a}| = |\\mathbf{b}| = \\sqrt{2}$, so $\\cos\\theta = 0$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$\\theta = 90°$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$90°$",
            commonErrors: ["Assuming equal magnitudes implies a zero angle."],
          },
        },
        {
          id: "cial-m-u7-vc-q15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "For $\\mathbf{a} = \\begin{pmatrix}2\\\\-1\\\\2\\end{pmatrix}$, what is $|\\mathbf{a}|$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\sqrt{13}$" },
              { id: "b", text: "$7$" },
              { id: "c", text: "$\\sqrt{5}$" },
              { id: "d", text: "$3$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Magnitude",
                statement: "$|\\mathbf{a}| = \\sqrt{4+1+4} = \\sqrt{9} = 3$.",
              },
            ],
            steps: [
              {
                reasoning: "$|\\mathbf{a}| = \\sqrt{2^2 + (-1)^2 + 2^2} = 3$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $3$",
            commonErrors: ["Adding the components without squaring."],
          },
        },
        {
          id: "cial-m-u7-vc-q16",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Vectors.",
          parts: [
            { label: "a", prompt: "Formula for $\\overrightarrow{AB}$?", marks: 1 },
            {
              label: "b",
              prompt: "$\\overrightarrow{AB}$ for A(-1,2), B(2,-3)?",
              marks: 2,
            },
            { label: "c", prompt: "Formula for the scalar product?", marks: 1 },
            {
              label: "d",
              prompt:
                "Evaluate $\\begin{pmatrix}2\\\\1\\end{pmatrix}\\cdot\\begin{pmatrix}-1\\\\4\\end{pmatrix}$.",
              marks: 2,
            },
            {
              label: "e",
              prompt:
                "Angle between $\\begin{pmatrix}1\\\\1\\end{pmatrix}$ and $\\begin{pmatrix}1\\\\-1\\end{pmatrix}$?",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Vectors",
                statement: "Subtraction+scalar product+magnitude+angle.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "$\\overrightarrow{AB} = \\mathbf{b} - \\mathbf{a}$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$\\begin{pmatrix}3\\\\-5\\end{pmatrix}$.",
                marks: 1,
                markCode: "M",
              },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "A" },
              {
                part: "c",
                reasoning: "$a_1b_1 + a_2b_2$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "$2(-1) + 1(4) = 2$.",
                marks: 1,
                markCode: "M",
              },
              { part: "d", reasoning: "Correct.", marks: 1, markCode: "A" },
              {
                part: "e",
                reasoning: "Dot product $= 1 - 1 = 0$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "e",
                reasoning: "$|\\mathbf{a}| = |\\mathbf{b}| = \\sqrt{2}$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "e",
                reasoning: "$\\cos\\theta = 0 \\Rightarrow \\theta = 90°$.",
                marks: 1,
                markCode: "M",
              },
              { part: "e", reasoning: "Correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "(a) b−a (b) (3,−5) (c) a₁b₁+a₂b₂ (d) 2 (e) 90°",
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
