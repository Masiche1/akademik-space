import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "aihl-u3-lesson-3-2",
  code: "3-2",
  title: "Scalar and Vector Products",
  goal: "I CAN use the scalar product to find angles and test perpendicularity, and use the vector product to find areas and perpendicular directions.",
  standards: ["AHL 3.13"],
  vocabulary: [
    {
      term: "Scalar product",
      definition:
        "$\\boldsymbol a\\cdot\\boldsymbol b=a_1b_1+a_2b_2+a_3b_3=|\\boldsymbol a||\\boldsymbol b|\\cos\\theta$, a single number.",
    },
    {
      term: "Perpendicular vectors",
      definition:
        "Non-zero vectors with $\\boldsymbol a\\cdot\\boldsymbol b=0$; the angle between them is $90^\\circ$.",
    },
    {
      term: "Vector product",
      definition:
        "$\\boldsymbol a\\times\\boldsymbol b$, a vector perpendicular to both $\\boldsymbol a$ and $\\boldsymbol b$ with magnitude $|\\boldsymbol a||\\boldsymbol b|\\sin\\theta$.",
    },
    {
      term: "Parallel vectors",
      definition:
        "Vectors with $\\boldsymbol a\\times\\boldsymbol b=\\boldsymbol0$, equivalently one is a scalar multiple of the other.",
    },
    {
      term: "Component",
      definition:
        "The projection of $\\boldsymbol a$ onto the direction of $\\boldsymbol b$ has length $\\dfrac{\\boldsymbol a\\cdot\\boldsymbol b}{|\\boldsymbol b|}$.",
    },
  ],
  concepts: [
    {
      id: "aihl-u3-scalar-product",
      title: "The scalar product and angles",
      skill:
        "Compute $\\boldsymbol a\\cdot\\boldsymbol b$, find the angle between vectors or lines, and use perpendicularity.",
      lesson: {
        sections: [
          {
            heading: "Two forms of the scalar product",
            body: "In components, $\\boldsymbol a\\cdot\\boldsymbol b=a_1b_1+a_2b_2+a_3b_3$. Geometrically $\\boldsymbol a\\cdot\\boldsymbol b=|\\boldsymbol a||\\boldsymbol b|\\cos\\theta$, where $\\theta$ is the angle between the vectors when both start at the same point. Equating the two gives $\\cos\\theta=\\dfrac{\\boldsymbol a\\cdot\\boldsymbol b}{|\\boldsymbol a||\\boldsymbol b|}$.",
          },
          {
            heading: "Perpendicularity and angles between lines",
            body: "Non-zero vectors are perpendicular exactly when $\\boldsymbol a\\cdot\\boldsymbol b=0$. For the angle at a vertex of a triangle $ABC$ at $A$ use $\\overrightarrow{AB}$ and $\\overrightarrow{AC}$, both pointing away from $A$. For two lines, use their direction vectors and take the acute angle by using the absolute value of the scalar product. In a real context, work is $W=\\boldsymbol F\\cdot\\boldsymbol d$.",
          },
        ],
        keyFormulas: [
          {
            name: "Component form",
            statement:
              "$\\boldsymbol a\\cdot\\boldsymbol b=a_1b_1+a_2b_2+a_3b_3$",
          },
          {
            name: "Angle",
            statement:
              "$\\cos\\theta=\\dfrac{\\boldsymbol a\\cdot\\boldsymbol b}{|\\boldsymbol a||\\boldsymbol b|}$",
          },
          {
            name: "Perpendicular test",
            statement: "$\\boldsymbol a\\cdot\\boldsymbol b=0$",
          },
        ],
        workedExample: {
          problem:
            "Find the angle between $\\boldsymbol a=\\begin{pmatrix} 1 \\\\ 2 \\\\ 2 \\end{pmatrix}$ and $\\boldsymbol b=\\begin{pmatrix} 2 \\\\ 0 \\\\ 1 \\end{pmatrix}$.",
          solution:
            "$\\boldsymbol a\\cdot\\boldsymbol b=2+0+2=4$, $|\\boldsymbol a|=3$, $|\\boldsymbol b|=\\sqrt5$. So $\\cos\\theta=\\frac{4}{3\\sqrt5}=0.5963$ and $\\theta=53.4^\\circ$.",
        },
      },
      questions: [
        {
          id: "aihl-u3-scalar-product-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Calculate $\\begin{pmatrix} 2 \\\\ -1 \\\\ 3 \\end{pmatrix}\\cdot\\begin{pmatrix} 4 \\\\ 5 \\\\ 1 \\end{pmatrix}$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$6$" },
              { id: "b", text: "$16$" },
              {
                id: "c",
                text: "$\\begin{pmatrix} 8 \\\\ -5 \\\\ 3 \\end{pmatrix}$",
              },
              { id: "d", text: "$14$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Scalar product",
                statement:
                  "$\\boldsymbol a\\cdot\\boldsymbol b=a_1b_1+a_2b_2+a_3b_3$",
              },
            ],
            steps: [
              {
                reasoning: "Multiply corresponding components.",
                working: "2(4)+(-1)(5)+3(1)",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Add.",
                working: "8-5+3=6",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $6$",
            commonErrors: [
              "Leaving the answer as a vector, which is the componentwise product.",
              "Dropping the negative sign.",
            ],
          },
        },
        {
          id: "aihl-u3-scalar-product-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "The vectors $\\begin{pmatrix} 3 \\\\ k \\\\ -2 \\end{pmatrix}$ and $\\begin{pmatrix} 4 \\\\ 1 \\\\ 5 \\end{pmatrix}$ are perpendicular. Find $k$.",
          response: { type: "numeric", parts: [{ label: "$k$", answer: -2 }] },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Perpendicular vectors",
                statement:
                  "$\\boldsymbol a\\cdot\\boldsymbol b=0$ for non-zero perpendicular vectors.",
              },
            ],
            steps: [
              {
                reasoning: "Set the scalar product to zero.",
                working: "3(4)+k(1)+(-2)(5)=0",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Simplify.",
                working: "12+k-10=0",
                marks: 1,
                markCode: "A",
              },
              { reasoning: "Solve.", working: "k=-2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$k=-2$",
            commonErrors: ["Setting the product of the magnitudes to zero."],
          },
        },
        {
          id: "aihl-u3-scalar-product-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "A triangle has vertices $A(1,2,3)$, $B(4,2,7)$ and $C(1,6,6)$. Find the size of angle $BAC$ in degrees, to 3 significant figures.",
          response: {
            type: "numeric",
            parts: [
              { label: "Angle $BAC$ (degrees)", answer: 61.3, tolerance: 0.05 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Angle between vectors",
                statement:
                  "$\\cos\\theta=\\frac{\\boldsymbol a\\cdot\\boldsymbol b}{|\\boldsymbol a||\\boldsymbol b|}$",
              },
            ],
            steps: [
              {
                reasoning: "Both vectors must start at $A$.",
                working:
                  "\\overrightarrow{AB}=\\begin{pmatrix} 3 \\\\ 0 \\\\ 4 \\end{pmatrix},\\;\\overrightarrow{AC}=\\begin{pmatrix} 0 \\\\ 4 \\\\ 3 \\end{pmatrix}",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Scalar product and magnitudes: $|\\overrightarrow{AB}|=5$ and $|\\overrightarrow{AC}|=5$.",
                working:
                  "\\overrightarrow{AB}\\cdot\\overrightarrow{AC}=0+0+12=12",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Substitute into the angle formula.",
                working: "\\cos\\theta=\\frac{12}{25}=0.48",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Take the inverse cosine in degree mode.",
                working: "\\theta=61.3^\\circ",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Angle $BAC\\approx61.3^\\circ$",
            commonErrors: [
              "Using $\\overrightarrow{BA}$ with $\\overrightarrow{AC}$, which gives the supplementary angle.",
            ],
          },
        },
        {
          id: "aihl-u3-scalar-product-q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 9,
          stem: "A cable car moves a load along a straight cable from $P(0,0,0)$ to $Q(60,0,25)$, in metres, with the $z$-axis vertical. A force $\\boldsymbol F=\\begin{pmatrix} 40 \\\\ 30 \\\\ 20 \\end{pmatrix}$ newtons acts on the load. The work done by a constant force is $W=\\boldsymbol F\\cdot\\overrightarrow{PQ}$ joules.",
          parts: [
            { label: "a", prompt: "Find $|\\overrightarrow{PQ}|$.", marks: 2 },
            {
              label: "b",
              prompt: "Calculate the work done by the force.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Find the angle between the force and the direction of motion, to 3 significant figures.",
              marks: 3,
            },
            {
              label: "d",
              prompt:
                "Find the value of $m$ for which the force $\\begin{pmatrix} 25 \\\\ 30 \\\\ m \\end{pmatrix}$ would do no work.",
              marks: 2,
            },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) $|\\overrightarrow{PQ}|$ (m)", answer: 65 },
              { label: "(b) work (J)", answer: 2900 },
              { label: "(c) angle (degrees)", answer: 34.1, tolerance: 0.05 },
              { label: "(d) $m$", answer: -60 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Work",
                statement: "$W=\\boldsymbol F\\cdot\\boldsymbol d$",
              },
              {
                kind: "formula",
                name: "Angle",
                statement:
                  "$\\cos\\theta=\\frac{\\boldsymbol F\\cdot\\boldsymbol d}{|\\boldsymbol F||\\boldsymbol d|}$",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Magnitude of $(60,0,25)$.",
                working: "\\sqrt{3600+625}=\\sqrt{4225}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Evaluate.",
                working: "65",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Scalar product.",
                working: "40(60)+30(0)+20(25)=2400+500",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Add.",
                working: "W=2900\\text{ J}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "$|\\boldsymbol F|=\\sqrt{1600+900+400}=\\sqrt{2900}=53.85$.",
                working: "|\\boldsymbol F|=53.85",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Substitute into the angle formula.",
                working: "\\cos\\theta=\\frac{2900}{53.85\\times65}=0.8285",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Inverse cosine.",
                working: "\\theta=34.1^\\circ",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning:
                  "No work means the force is perpendicular to the motion.",
                working: "25(60)+30(0)+m(25)=0",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Solve.",
                working: "m=-60",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "(a) 65 m. (b) 2900 J. (c) 34.1 degrees. (d) $m=-60$.",
            commonErrors: [
              "Dividing by $|\\overrightarrow{PQ}|$ only and not by $|\\boldsymbol F|$ as well.",
            ],
          },
        },
        {
          id: "aihl-u3-scalar-product-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Calculate $\\begin{pmatrix} 1 \\\\ 2 \\\\ 2 \\end{pmatrix}\\cdot\\begin{pmatrix} 3 \\\\ -1 \\\\ 4 \\end{pmatrix}$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$9$" },
              { id: "b", text: "$6$" },
              {
                id: "c",
                text: "$\\begin{pmatrix} 3 \\\\ -2 \\\\ 8 \\end{pmatrix}$",
              },
              { id: "d", text: "$-1$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Scalar product",
                statement:
                  "$\\boldsymbol a\\cdot\\boldsymbol b=a_1b_1+a_2b_2+a_3b_3$",
              },
            ],
            steps: [
              {
                reasoning: "Multiply corresponding components.",
                working: "1(3)+2(-1)+2(4)",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Add.",
                working: "3-2+8=9",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $9$",
            commonErrors: [
              "Leaving the answer as a vector, which is the componentwise product.",
            ],
          },
        },
        {
          id: "aihl-u3-scalar-product-q6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Two non-zero vectors are perpendicular. What is the angle between them?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$0^\\circ$" },
              { id: "b", text: "$90^\\circ$" },
              { id: "c", text: "$180^\\circ$" },
              { id: "d", text: "$45^\\circ$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Perpendicular vectors",
                statement:
                  "$\\boldsymbol a\\cdot\\boldsymbol b=0$, so $\\cos\\theta=0$.",
              },
            ],
            steps: [
              {
                reasoning: "Perpendicular vectors have scalar product zero.",
                working:
                  "\\cos\\theta=\\frac{0}{|\\boldsymbol a||\\boldsymbol b|}=0",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "The angle with cosine 0 is $90^\\circ$.",
                working: "\\theta=90^\\circ",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** $90^\\circ$",
            commonErrors: ["Confusing perpendicular with parallel."],
          },
        },
        {
          id: "aihl-u3-scalar-product-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "The vectors $\\begin{pmatrix} 2 \\\\ k \\\\ -1 \\end{pmatrix}$ and $\\begin{pmatrix} 3 \\\\ -2 \\\\ 4 \\end{pmatrix}$ are perpendicular. Find $k$.",
          response: { type: "numeric", parts: [{ label: "$k$", answer: 1 }] },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Perpendicular vectors",
                statement:
                  "$\\boldsymbol a\\cdot\\boldsymbol b=0$ for non-zero perpendicular vectors.",
              },
            ],
            steps: [
              {
                reasoning: "Set the scalar product to zero.",
                working: "2(3)+k(-2)+(-1)(4)=0",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Simplify.",
                working: "6-2k-4=0\\Rightarrow 2-2k=0",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Solve.", working: "k=1", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$k=1$",
            commonErrors: [
              "Dropping the minus sign on the third component product.",
            ],
          },
        },
        {
          id: "aihl-u3-scalar-product-q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Find the angle between the vectors $\\boldsymbol a=\\begin{pmatrix} 1 \\\\ 0 \\\\ 1 \\end{pmatrix}$ and $\\boldsymbol b=\\begin{pmatrix} 0 \\\\ 1 \\\\ 1 \\end{pmatrix}$, in degrees.",
          response: {
            type: "numeric",
            parts: [{ label: "Angle (degrees)", answer: 60 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Angle between vectors",
                statement:
                  "$\\cos\\theta=\\frac{\\boldsymbol a\\cdot\\boldsymbol b}{|\\boldsymbol a||\\boldsymbol b|}$",
              },
            ],
            steps: [
              {
                reasoning: "Compute the scalar product.",
                working: "\\boldsymbol a\\cdot\\boldsymbol b=0+0+1=1",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Compute the magnitudes.",
                working: "|\\boldsymbol a|=\\sqrt2,\\;|\\boldsymbol b|=\\sqrt2",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Substitute and evaluate: $\\cos\\theta=\\frac{1}{2}$.",
                working: "\\theta=60^\\circ",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\theta=60^\\circ$",
            commonErrors: [
              "Forgetting to take the inverse cosine, or using radian mode in the GDC.",
            ],
          },
        },
        {
          id: "aihl-u3-scalar-product-q9",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "A triangle has vertices $A(0,0,0)$, $B(2,2,0)$ and $C(3,0,2)$. Find the size of angle $BAC$ in degrees, to 3 significant figures.",
          response: {
            type: "numeric",
            parts: [
              { label: "Angle $BAC$ (degrees)", answer: 54.0, tolerance: 0.05 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Angle between vectors",
                statement:
                  "$\\cos\\theta=\\frac{\\boldsymbol a\\cdot\\boldsymbol b}{|\\boldsymbol a||\\boldsymbol b|}$",
              },
            ],
            steps: [
              {
                reasoning: "Both vectors must start at $A$.",
                working:
                  "\\overrightarrow{AB}=\\begin{pmatrix} 2 \\\\ 2 \\\\ 0 \\end{pmatrix},\\;\\overrightarrow{AC}=\\begin{pmatrix} 3 \\\\ 0 \\\\ 2 \\end{pmatrix}",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Scalar product and magnitudes: $|\\overrightarrow{AB}|=\\sqrt8$ and $|\\overrightarrow{AC}|=\\sqrt{13}$.",
                working: "\\overrightarrow{AB}\\cdot\\overrightarrow{AC}=6",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Substitute into the angle formula.",
                working:
                  "\\cos\\theta=\\frac{6}{\\sqrt8\\sqrt{13}}=\\frac{6}{\\sqrt{104}}\\approx0.588",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Take the inverse cosine in degree mode.",
                working: "\\theta\\approx54.0^\\circ",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Angle $BAC\\approx54.0^\\circ$",
            commonErrors: [
              "Using $\\overrightarrow{BA}$ with $\\overrightarrow{AC}$, which gives the supplementary angle.",
            ],
          },
        },
        {
          id: "aihl-u3-scalar-product-q10",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "A force $\\boldsymbol F=\\begin{pmatrix} 6 \\\\ -2 \\\\ 3 \\end{pmatrix}$ newtons moves an object through the displacement $\\boldsymbol d=\\begin{pmatrix} 4 \\\\ 5 \\\\ -2 \\end{pmatrix}$ metres. The work done is $W=\\boldsymbol F\\cdot\\boldsymbol d$ joules. Find the work done and the angle between the force and the displacement, in degrees to 3 significant figures.",
          response: {
            type: "numeric",
            parts: [
              { label: "Work (J)", answer: 8 },
              { label: "Angle (degrees)", answer: 80.2, tolerance: 0.05 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Work",
                statement: "$W=\\boldsymbol F\\cdot\\boldsymbol d$",
              },
              {
                kind: "formula",
                name: "Angle",
                statement:
                  "$\\cos\\theta=\\frac{\\boldsymbol F\\cdot\\boldsymbol d}{|\\boldsymbol F||\\boldsymbol d|}$",
              },
            ],
            steps: [
              {
                reasoning: "Compute the scalar product.",
                working: "W=6(4)+(-2)(5)+3(-2)=24-10-6",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate.",
                working: "W=8\\text{ J}",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "The magnitudes are $|\\boldsymbol F|=7$ and $|\\boldsymbol d|=\\sqrt{45}$.",
                working:
                  "|\\boldsymbol F|=\\sqrt{36+4+9}=7,\\;|\\boldsymbol d|=\\sqrt{16+25+4}",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Substitute into the angle formula.",
                working:
                  "\\cos\\theta=\\frac{8}{7\\sqrt{45}}\\approx0.170\\Rightarrow\\theta\\approx80.2^\\circ",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$W=8$ J, $\\theta\\approx80.2^\\circ$",
            commonErrors: [
              "Dividing by $|\\boldsymbol d|$ only and not by $|\\boldsymbol F|$ as well.",
            ],
          },
        },
        {
          id: "aihl-u3-scalar-product-q11",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 6,
          stem: "The lines $L_1: \\boldsymbol r=\\begin{pmatrix} 1 \\\\ 0 \\\\ 2 \\end{pmatrix}+t\\begin{pmatrix} 2 \\\\ 1 \\\\ -1 \\end{pmatrix}$ and $L_2: \\boldsymbol r=\\begin{pmatrix} 0 \\\\ 1 \\\\ 1 \\end{pmatrix}+s\\begin{pmatrix} 1 \\\\ -1 \\\\ 2 \\end{pmatrix}$ have direction vectors $\\boldsymbol d_1$ and $\\boldsymbol d_2$.",
          parts: [
            {
              label: "a",
              prompt: "Find $\\boldsymbol d_1\\cdot\\boldsymbol d_2$.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Find $\\cos\\theta$ where $\\theta$ is the angle between the direction vectors as given, and state whether it is acute or obtuse.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Hence find the acute angle between the two lines, to 3 significant figures.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Angle between lines",
                statement:
                  "Use $\\cos\\theta=\\frac{|\\boldsymbol d_1\\cdot\\boldsymbol d_2|}{|\\boldsymbol d_1||\\boldsymbol d_2|}$ for the acute angle between two lines.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Multiply corresponding components.",
                working:
                  "\\boldsymbol d_1\\cdot\\boldsymbol d_2=2(1)+1(-1)+(-1)(2)",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Evaluate.",
                working: "=2-1-2=-1",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Both magnitudes are $\\sqrt6$.",
                working:
                  "|\\boldsymbol d_1|=|\\boldsymbol d_2|=\\sqrt{4+1+1}=\\sqrt6",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Substitute: $\\cos\\theta=-\\frac16<0$, so $\\theta$ is obtuse.",
                working: "\\cos\\theta=\\frac{-1}{6}\\approx-0.167",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "The acute angle uses the absolute value of the scalar product.",
                working: "\\cos\\theta=\\frac{1}{6}\\approx0.167",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Inverse cosine.",
                working: "\\theta\\approx80.4^\\circ",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) $-1$. (b) $\\cos\\theta=-\\frac16$, obtuse ($\\theta\\approx99.6^\\circ$). (c) $80.4^\\circ$.",
            commonErrors: [
              "Reporting the obtuse angle $99.6^\\circ$ as the angle between the lines.",
            ],
          },
        },
        {
          id: "aihl-u3-scalar-product-q12",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 6,
          stem: "Let $\\boldsymbol u=\\begin{pmatrix} 1 \\\\ 2 \\\\ 0 \\end{pmatrix}$ and $\\boldsymbol v=\\begin{pmatrix} 0 \\\\ 1 \\\\ 3 \\end{pmatrix}$.",
          parts: [
            {
              label: "a",
              prompt:
                "Find a vector $\\boldsymbol w$ perpendicular to both $\\boldsymbol u$ and $\\boldsymbol v$.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "Verify that your $\\boldsymbol w$ is perpendicular to both $\\boldsymbol u$ and $\\boldsymbol v$.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Find the value of $k$ for which the vector $\\begin{pmatrix} k \\\\ 1 \\\\ 2 \\end{pmatrix}$ is perpendicular to $\\boldsymbol u$.",
              marks: 1,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Vector product",
                statement:
                  "$\\boldsymbol u\\times\\boldsymbol v$ is perpendicular to both $\\boldsymbol u$ and $\\boldsymbol v$.",
              },
              {
                kind: "property",
                name: "Perpendicular vectors",
                statement:
                  "$\\boldsymbol a\\cdot\\boldsymbol b=0$ for non-zero perpendicular vectors.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "First component: $u_2v_3-u_3v_2$.",
                working: "2(3)-0(1)=6",
                marks: 1,
                markCode: "A",
              },
              {
                part: "a",
                reasoning: "Second component: $u_3v_1-u_1v_3$.",
                working: "0(0)-1(3)=-3",
                marks: 1,
                markCode: "A",
              },
              {
                part: "a",
                reasoning: "Third component: $u_1v_2-u_2v_1$.",
                working:
                  "1(1)-2(0)=1\\Rightarrow\\boldsymbol w=\\begin{pmatrix} 6 \\\\ -3 \\\\ 1 \\end{pmatrix}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Check $\\boldsymbol w\\cdot\\boldsymbol u$.",
                working: "6(1)+(-3)(2)+1(0)=0",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Check $\\boldsymbol w\\cdot\\boldsymbol v$.",
                working: "6(0)+(-3)(1)+1(3)=0",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Set the scalar product to zero.",
                working: "k(1)+1(2)+2(0)=0\\Rightarrow k=-2",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) $\\boldsymbol w=\\begin{pmatrix} 6 \\\\ -3 \\\\ 1 \\end{pmatrix}$ (or any non-zero multiple). (b) both scalar products are 0. (c) $k=-2$.",
            commonErrors: [
              "Forgetting the reversed order in the middle component of the vector product.",
            ],
          },
        },
        {
          id: "aihl-u3-scalar-product-q13",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "For non-zero vectors $\\boldsymbol a$ and $\\boldsymbol b$, $\\boldsymbol a\\cdot\\boldsymbol b<0$. What can be said about the angle $\\theta$ between them?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$0^\\circ<\\theta<90^\\circ$" },
              { id: "b", text: "$90^\\circ<\\theta<180^\\circ$" },
              { id: "c", text: "$\\theta=90^\\circ$" },
              { id: "d", text: "$\\theta=0^\\circ$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Angle",
                statement:
                  "$\\cos\\theta=\\frac{\\boldsymbol a\\cdot\\boldsymbol b}{|\\boldsymbol a||\\boldsymbol b|}$",
              },
            ],
            steps: [
              {
                reasoning:
                  "A negative scalar product makes $\\cos\\theta$ negative since the magnitudes are positive.",
                working: "\\cos\\theta<0",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Cosine is negative for obtuse angles.",
                working: "90^\\circ<\\theta<180^\\circ",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** $90^\\circ<\\theta<180^\\circ$",
            commonErrors: [
              "Confusing a negative scalar product with a negative angle.",
            ],
          },
        },
        {
          id: "aihl-u3-scalar-product-q14",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Which pair of vectors is perpendicular?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "$\\begin{pmatrix} 1 \\\\ 1 \\\\ 1 \\end{pmatrix}$ and $\\begin{pmatrix} 1 \\\\ -2 \\\\ 1 \\end{pmatrix}$",
              },
              {
                id: "b",
                text: "$\\begin{pmatrix} 1 \\\\ 2 \\\\ 3 \\end{pmatrix}$ and $\\begin{pmatrix} 1 \\\\ 1 \\\\ 1 \\end{pmatrix}$",
              },
              {
                id: "c",
                text: "$\\begin{pmatrix} 2 \\\\ 0 \\\\ 1 \\end{pmatrix}$ and $\\begin{pmatrix} 1 \\\\ 1 \\\\ 0 \\end{pmatrix}$",
              },
              {
                id: "d",
                text: "$\\begin{pmatrix} 1 \\\\ -1 \\\\ 0 \\end{pmatrix}$ and $\\begin{pmatrix} 3 \\\\ 1 \\\\ 0 \\end{pmatrix}$",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Perpendicular vectors",
                statement:
                  "Non-zero vectors are perpendicular exactly when $\\boldsymbol a\\cdot\\boldsymbol b=0$.",
              },
            ],
            steps: [
              {
                reasoning: "Test each pair with the scalar product.",
                working: "1-2+1=0;\\;1+2+3=6;\\;2+0+0=2;\\;3-1+0=2",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Only the first pair gives zero.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)**",
            commonErrors: ["Checking only two of the three components."],
          },
        },
        {
          id: "aihl-u3-scalar-product-q15",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 2,
          stem: "The acute angle between two lines with direction vectors $\\boldsymbol d_1$ and $\\boldsymbol d_2$ is found using",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "$\\cos\\theta=\\frac{|\\boldsymbol d_1\\cdot\\boldsymbol d_2|}{|\\boldsymbol d_1||\\boldsymbol d_2|}$",
              },
              {
                id: "b",
                text: "$\\sin\\theta=\\frac{|\\boldsymbol d_1\\times\\boldsymbol d_2|}{|\\boldsymbol d_1||\\boldsymbol d_2|}$ only",
              },
              {
                id: "c",
                text: "$\\tan\\theta=\\frac{|\\boldsymbol d_1\\cdot\\boldsymbol d_2|}{|\\boldsymbol d_1||\\boldsymbol d_2|}$",
              },
              {
                id: "d",
                text: "$\\boldsymbol d_1\\times\\boldsymbol d_2$ alone",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Angle between lines",
                statement:
                  "The angle between lines uses the direction vectors and the scalar product; take the absolute value for the acute angle.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The scalar product relates the angle to the direction vectors.",
                working:
                  "\\cos\\theta=\\frac{\\boldsymbol d_1\\cdot\\boldsymbol d_2}{|\\boldsymbol d_1||\\boldsymbol d_2|}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "The absolute value ensures an acute angle.",
                working: "|\\boldsymbol d_1\\cdot\\boldsymbol d_2|",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)**",
            commonErrors: [
              "Forgetting the absolute value and reporting an obtuse angle.",
            ],
          },
        },
        {
          id: "aihl-u3-scalar-product-q16",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Find the value of $k$ for which $\\begin{pmatrix} 2 \\\\ 0 \\\\ -1 \\end{pmatrix}\\cdot\\begin{pmatrix} 1 \\\\ 3 \\\\ k \\end{pmatrix}=0$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$k=2$" },
              { id: "b", text: "$k=-2$" },
              { id: "c", text: "$k=1$" },
              { id: "d", text: "$k=-1$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Perpendicular vectors",
                statement:
                  "A zero scalar product means the vectors are perpendicular.",
              },
            ],
            steps: [
              {
                reasoning: "Expand the scalar product.",
                working: "2(1)+0(3)+(-1)(k)=0",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Solve.",
                working: "2-k=0\\Rightarrow k=2",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $k=2$",
            commonErrors: ["Sign error when handling $(-1)k$."],
          },
        },
      ],
    },
    {
      id: "aihl-u3-vector-product",
      title: "The vector product, areas and components",
      skill:
        "Compute $\\boldsymbol a\\times\\boldsymbol b$, find areas of parallelograms and triangles, and find perpendicular vectors.",
      lesson: {
        sections: [
          {
            heading: "Calculating $\\boldsymbol a\\times\\boldsymbol b$",
            body: "For $\\boldsymbol a=(a_1,a_2,a_3)$ and $\\boldsymbol b=(b_1,b_2,b_3)$, $\\boldsymbol a\\times\\boldsymbol b=\\begin{pmatrix} a_2b_3-a_3b_2 \\\\ a_3b_1-a_1b_3 \\\\ a_1b_2-a_2b_1 \\end{pmatrix}$. The result is perpendicular to both $\\boldsymbol a$ and $\\boldsymbol b$, and $\\boldsymbol b\\times\\boldsymbol a=-\\boldsymbol a\\times\\boldsymbol b$. Check by taking the scalar product with each original vector: it must be zero.",
          },
          {
            heading: "Areas",
            body: "$|\\boldsymbol a\\times\\boldsymbol b|=|\\boldsymbol a||\\boldsymbol b|\\sin\\theta$ is the area of the parallelogram with sides $\\boldsymbol a$ and $\\boldsymbol b$. The triangle with those sides has area $\\frac12|\\boldsymbol a\\times\\boldsymbol b|$. Two vectors are parallel exactly when their vector product is the zero vector.",
          },
        ],
        keyFormulas: [
          {
            name: "Components",
            statement:
              "$\\boldsymbol a\\times\\boldsymbol b=\\begin{pmatrix} a_2b_3-a_3b_2 \\\\ a_3b_1-a_1b_3 \\\\ a_1b_2-a_2b_1 \\end{pmatrix}$",
          },
          {
            name: "Parallelogram area",
            statement: "$A=|\\boldsymbol a\\times\\boldsymbol b|$",
          },
          {
            name: "Triangle area",
            statement: "$A=\\tfrac12|\\boldsymbol a\\times\\boldsymbol b|$",
          },
        ],
        workedExample: {
          problem:
            "Find $\\begin{pmatrix} 1 \\\\ 0 \\\\ 2 \\end{pmatrix}\\times\\begin{pmatrix} 3 \\\\ 1 \\\\ 0 \\end{pmatrix}$.",
          solution:
            "First: $0(0)-2(1)=-2$. Second: $2(3)-1(0)=6$. Third: $1(1)-0(3)=1$. The result is $\\begin{pmatrix} -2 \\\\ 6 \\\\ 1 \\end{pmatrix}$. Check: dot with $(1,0,2)$ gives $-2+0+2=0$.",
        },
      },
      questions: [
        {
          id: "aihl-u3-vector-product-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Which statement about $\\boldsymbol a\\times\\boldsymbol b$ is always true for non-zero vectors?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "It is a scalar equal to $|\\boldsymbol a||\\boldsymbol b|\\cos\\theta$.",
              },
              {
                id: "b",
                text: "It is perpendicular to both $\\boldsymbol a$ and $\\boldsymbol b$.",
              },
              { id: "c", text: "It is parallel to $\\boldsymbol a$." },
              {
                id: "d",
                text: "It equals $\\boldsymbol b\\times\\boldsymbol a$.",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Vector product",
                statement:
                  "$\\boldsymbol a\\times\\boldsymbol b$ is perpendicular to both $\\boldsymbol a$ and $\\boldsymbol b$, and $\\boldsymbol b\\times\\boldsymbol a=-\\boldsymbol a\\times\\boldsymbol b$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The vector product is a vector, so (a) describes the scalar product instead.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Only (b) holds: the product is perpendicular to both; it is the negative of $\\boldsymbol b\\times\\boldsymbol a$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)**",
            commonErrors: ["Believing the vector product is commutative."],
          },
        },
        {
          id: "aihl-u3-vector-product-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Find $\\begin{pmatrix} 2 \\\\ 1 \\\\ 3 \\end{pmatrix}\\times\\begin{pmatrix} 1 \\\\ 4 \\\\ 2 \\end{pmatrix}$. Enter its three components in order.",
          response: {
            type: "numeric",
            parts: [
              { label: "First component", answer: -10 },
              { label: "Second component", answer: -1 },
              { label: "Third component", answer: 7 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Vector product",
                statement:
                  "$\\boldsymbol a\\times\\boldsymbol b=(a_2b_3-a_3b_2,\\;a_3b_1-a_1b_3,\\;a_1b_2-a_2b_1)$",
              },
            ],
            steps: [
              {
                reasoning: "First component: $a_2b_3-a_3b_2$.",
                working: "1(2)-3(4)=-10",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Second component: $a_3b_1-a_1b_3$.",
                working: "3(1)-2(2)=-1",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Third component: $a_1b_2-a_2b_1$. Check: dot with $(2,1,3)$ is $-20-1+21=0$.",
                working: "2(4)-1(1)=7",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\begin{pmatrix} -10 \\\\ -1 \\\\ 7 \\end{pmatrix}$",
            commonErrors: [
              "Forgetting that the middle component has the reversed order.",
            ],
          },
        },
        {
          id: "aihl-u3-vector-product-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Triangle $ABC$ has vertices $A(1,0,2)$, $B(3,1,0)$ and $C(2,4,1)$. Find the area of the triangle, to 3 significant figures.",
          response: {
            type: "numeric",
            parts: [{ label: "Area", answer: 4.95, tolerance: 0.005 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Triangle area",
                statement:
                  "$A=\\frac12|\\overrightarrow{AB}\\times\\overrightarrow{AC}|$",
              },
            ],
            steps: [
              {
                reasoning: "Find two sides from $A$.",
                working:
                  "\\overrightarrow{AB}=\\begin{pmatrix} 2 \\\\ 1 \\\\ -2 \\end{pmatrix},\\;\\overrightarrow{AC}=\\begin{pmatrix} 1 \\\\ 4 \\\\ -1 \\end{pmatrix}",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Vector product: $1(-1)-(-2)(4)=7$, $(-2)(1)-2(-1)=0$, $2(4)-1(1)=7$.",
                working:
                  "\\overrightarrow{AB}\\times\\overrightarrow{AC}=\\begin{pmatrix} 7 \\\\ 0 \\\\ 7 \\end{pmatrix}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Magnitude: $\\sqrt{49+49}=7\\sqrt2$.",
                working: "|\\ldots|=9.899",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Halve it.",
                working: "A=\\tfrac12(9.899)=4.95",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Area $\\approx4.95$",
            commonErrors: ["Forgetting the factor $\\frac12$ for a triangle."],
          },
        },
        {
          id: "aihl-u3-vector-product-q4",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 11,
          stem: "Investigate the parallelogram with adjacent sides $\\boldsymbol a=\\begin{pmatrix} 2 \\\\ 1 \\\\ 0 \\end{pmatrix}$ and $\\boldsymbol b=\\begin{pmatrix} 1 \\\\ k \\\\ 2 \\end{pmatrix}$, where $k$ is a real constant.",
          parts: [
            {
              label: "a",
              prompt:
                "Show that $\\boldsymbol a\\times\\boldsymbol b=\\begin{pmatrix} 2 \\\\ -4 \\\\ 2k-1 \\end{pmatrix}$.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Hence show that the area of the parallelogram is $\\sqrt{4k^2-4k+21}$.",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "Find the value of $k$ for which the area is a minimum, and the minimum area to 3 significant figures.",
              marks: 3,
            },
            {
              label: "d",
              prompt:
                "Find the value of $k$ for which $\\boldsymbol a$ and $\\boldsymbol b$ are perpendicular.",
              marks: 1,
            },
            {
              label: "e",
              prompt:
                "Explain why the parallelogram can never be degenerate (have zero area) for any value of $k$.",
              marks: 2,
            },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(c) value of $k$ minimising the area", answer: 0.5 },
              { label: "(c) minimum area", answer: 4.47, tolerance: 0.005 },
              { label: "(d) $k$ for perpendicular", answer: -2 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Vector product",
                statement:
                  "$\\boldsymbol a\\times\\boldsymbol b=(a_2b_3-a_3b_2,\\;a_3b_1-a_1b_3,\\;a_1b_2-a_2b_1)$",
              },
              {
                kind: "formula",
                name: "Parallelogram area",
                statement: "$A=|\\boldsymbol a\\times\\boldsymbol b|$",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "First two components: $1(2)-0(k)=2$ and $0(1)-2(2)=-4$.",
                working: "2,\\;-4",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Third component: $2k-1(1)$ (AG).",
                working:
                  "\\boldsymbol a\\times\\boldsymbol b=\\begin{pmatrix} 2 \\\\ -4 \\\\ 2k-1 \\end{pmatrix}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "The area is the magnitude.",
                working: "A=\\sqrt{4+16+(2k-1)^2}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Expand the square.",
                working: "A=\\sqrt{20+4k^2-4k+1}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Simplify (AG).",
                working: "A=\\sqrt{4k^2-4k+21}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Minimise the quadratic under the root; its vertex is at $k=\\frac{4}{8}$.",
                working: "k=0.5",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Substitute: $4(0.25)-2+21=20$.",
                working: "A^2=20",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Take the square root.",
                working: "A_{\\min}=\\sqrt{20}=4.47",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning:
                  "Set $\\boldsymbol a\\cdot\\boldsymbol b=0$: $2+k+0=0$.",
                working: "k=-2",
                marks: 1,
                markCode: "A",
              },
              {
                part: "e",
                reasoning:
                  "Zero area requires $4k^2-4k+21=0$, with discriminant $16-336=-320<0$.",
                working: "\\Delta<0",
                marks: 1,
                markCode: "M",
              },
              {
                part: "e",
                reasoning:
                  "There is no real $k$ with zero area (equivalently $A^2=(2k-1)^2+20\\ge20>0$), so $\\boldsymbol a$ and $\\boldsymbol b$ are never parallel.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "(a) shown. (b) shown. (c) $k=0.5$, $A_{\\min}\\approx4.47$. (d) $k=-2$. (e) $A^2\\ge20>0$.",
            commonErrors: [
              "Squaring only $2k$ rather than $(2k-1)$.",
              "Assuming the minimum area occurs when the vectors are perpendicular.",
            ],
            examinerNote:
              "Notice that the area is not minimised at $k=-2$ where the vectors are perpendicular; that is where the angle is $90^\\circ$, not where the area is smallest.",
          },
        },
        {
          id: "aihl-u3-vector-product-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Calculate $\\begin{pmatrix} 0 \\\\ 1 \\\\ 0 \\end{pmatrix}\\times\\begin{pmatrix} 1 \\\\ 0 \\\\ 0 \\end{pmatrix}$.",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "$\\begin{pmatrix} 0 \\\\ 0 \\\\ 1 \\end{pmatrix}$",
              },
              {
                id: "b",
                text: "$\\begin{pmatrix} 0 \\\\ 0 \\\\ -1 \\end{pmatrix}$",
              },
              {
                id: "c",
                text: "$\\begin{pmatrix} 1 \\\\ 0 \\\\ 0 \\end{pmatrix}$",
              },
              {
                id: "d",
                text: "$\\begin{pmatrix} 0 \\\\ 1 \\\\ 0 \\end{pmatrix}$",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Vector product",
                statement:
                  "$\\boldsymbol a\\times\\boldsymbol b=(a_2b_3-a_3b_2,\\;a_3b_1-a_1b_3,\\;a_1b_2-a_2b_1)$",
              },
            ],
            steps: [
              {
                reasoning:
                  "Compute the three components: $(0(0)-0(0),\\;0(1)-0(0),\\;0(0)-1(1))$.",
                working: "(0,\\,0,\\,-1)",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The order matters: this is the negative of $\\boldsymbol b\\times\\boldsymbol a$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(b)** $\\begin{pmatrix} 0 \\\\ 0 \\\\ -1 \\end{pmatrix}$",
            commonErrors: ["Reversing the order and giving $(0,0,1)$."],
          },
        },
        {
          id: "aihl-u3-vector-product-q6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The area of the parallelogram formed by two vectors $\\boldsymbol a$ and $\\boldsymbol b$ is",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$|\\boldsymbol a\\times\\boldsymbol b|$" },
              { id: "b", text: "$\\boldsymbol a\\cdot\\boldsymbol b$" },
              { id: "c", text: "$|\\boldsymbol a||\\boldsymbol b|$" },
              {
                id: "d",
                text: "$\\frac12|\\boldsymbol a\\times\\boldsymbol b|$",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Parallelogram area",
                statement:
                  "$A=|\\boldsymbol a\\times\\boldsymbol b|=|\\boldsymbol a||\\boldsymbol b|\\sin\\theta$",
              },
            ],
            steps: [
              {
                reasoning:
                  "The magnitude of the vector product equals the area of the parallelogram.",
                working: "A=|\\boldsymbol a\\times\\boldsymbol b|",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The factor $\\frac12$ applies to a triangle, not a parallelogram.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)**",
            commonErrors: [
              "Using the triangle area formula for a parallelogram.",
            ],
          },
        },
        {
          id: "aihl-u3-vector-product-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Find $\\begin{pmatrix} 1 \\\\ 0 \\\\ 2 \\end{pmatrix}\\times\\begin{pmatrix} 0 \\\\ 1 \\\\ 1 \\end{pmatrix}$. Enter its three components in order.",
          response: {
            type: "numeric",
            parts: [
              { label: "First component", answer: -2 },
              { label: "Second component", answer: -1 },
              { label: "Third component", answer: 1 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Vector product",
                statement:
                  "$\\boldsymbol a\\times\\boldsymbol b=(a_2b_3-a_3b_2,\\;a_3b_1-a_1b_3,\\;a_1b_2-a_2b_1)$",
              },
            ],
            steps: [
              {
                reasoning: "First component: $a_2b_3-a_3b_2$.",
                working: "0(1)-2(1)=-2",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Second component: $a_3b_1-a_1b_3$.",
                working: "2(0)-1(1)=-1",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Third component: $a_1b_2-a_2b_1$.",
                working: "1(1)-0(0)=1",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\begin{pmatrix} -2 \\\\ -1 \\\\ 1 \\end{pmatrix}$",
            commonErrors: [
              "Forgetting that the middle component has the reversed order.",
            ],
          },
        },
        {
          id: "aihl-u3-vector-product-q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Find the area of the triangle formed by the vectors $\\boldsymbol u=\\begin{pmatrix} 2 \\\\ 0 \\\\ 1 \\end{pmatrix}$ and $\\boldsymbol v=\\begin{pmatrix} 0 \\\\ 3 \\\\ 1 \\end{pmatrix}$ as adjacent sides.",
          response: {
            type: "numeric",
            parts: [{ label: "Area", answer: 3.5 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Triangle area",
                statement: "$A=\\frac12|\\boldsymbol u\\times\\boldsymbol v|$",
              },
            ],
            steps: [
              {
                reasoning: "Vector product: $(-3,-2,6)$.",
                working:
                  "\\boldsymbol u\\times\\boldsymbol v=\\begin{pmatrix} 0(1)-1(3) \\\\ 1(0)-2(1) \\\\ 2(3)-0(0) \\end{pmatrix}=\\begin{pmatrix} -3 \\\\ -2 \\\\ 6 \\end{pmatrix}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Magnitude: $\\sqrt{9+4+36}=\\sqrt{49}$.",
                working: "|\\boldsymbol u\\times\\boldsymbol v|=7",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Halve it for the triangle.",
                working: "A=\\tfrac12(7)=3.5",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$A=3.5$",
            commonErrors: ["Forgetting the factor $\\frac12$ for a triangle."],
          },
        },
        {
          id: "aihl-u3-vector-product-q9",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "A triangle has vertices $A(0,0,0)$, $B(4,0,0)$ and $C(1,2,3)$. Find the area of the triangle, to 3 significant figures.",
          response: {
            type: "numeric",
            parts: [{ label: "Area", answer: 7.21, tolerance: 0.005 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Triangle area",
                statement:
                  "$A=\\frac12|\\overrightarrow{AB}\\times\\overrightarrow{AC}|$",
              },
            ],
            steps: [
              {
                reasoning: "Find two sides from $A$.",
                working:
                  "\\overrightarrow{AB}=\\begin{pmatrix} 4 \\\\ 0 \\\\ 0 \\end{pmatrix},\\;\\overrightarrow{AC}=\\begin{pmatrix} 1 \\\\ 2 \\\\ 3 \\end{pmatrix}",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Vector product: $(0,-12,8)$.",
                working:
                  "\\overrightarrow{AB}\\times\\overrightarrow{AC}=\\begin{pmatrix} 0(3)-0(2) \\\\ 0(1)-4(3) \\\\ 4(2)-0(1) \\end{pmatrix}=\\begin{pmatrix} 0 \\\\ -12 \\\\ 8 \\end{pmatrix}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Magnitude: $\\sqrt{144+64}=\\sqrt{208}$.",
                working: "|\\ldots|=\\sqrt{208}\\approx14.42",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Halve it.",
                working: "A=\\tfrac12\\sqrt{208}\\approx7.21",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Area $\\approx7.21$",
            commonErrors: [
              "Using $\\overrightarrow{BA}$ with $\\overrightarrow{AC}$, which changes the sign but not the magnitude.",
            ],
          },
        },
        {
          id: "aihl-u3-vector-product-q10",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Find the angle between the vectors $\\boldsymbol a=\\begin{pmatrix} 1 \\\\ 2 \\\\ 0 \\end{pmatrix}$ and $\\boldsymbol b=\\begin{pmatrix} 0 \\\\ 1 \\\\ 2 \\end{pmatrix}$, in degrees to 3 significant figures.",
          response: {
            type: "numeric",
            parts: [
              { label: "Angle (degrees)", answer: 66.4, tolerance: 0.05 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Angle between vectors",
                statement:
                  "$\\cos\\theta=\\frac{\\boldsymbol a\\cdot\\boldsymbol b}{|\\boldsymbol a||\\boldsymbol b|}$",
              },
            ],
            steps: [
              {
                reasoning: "Scalar product.",
                working: "\\boldsymbol a\\cdot\\boldsymbol b=0+2+0=2",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Magnitudes: $|\\boldsymbol a|=\\sqrt5$ and $|\\boldsymbol b|=\\sqrt5$.",
                working: "|\\boldsymbol a|=|\\boldsymbol b|=\\sqrt5",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Substitute: $\\cos\\theta=\\frac{2}{5}=0.4$.",
                working: "\\cos\\theta=\\frac{2}{5}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Inverse cosine in degree mode.",
                working: "\\theta\\approx66.4^\\circ",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\theta\\approx66.4^\\circ$",
            commonErrors: [
              "Using the vector product magnitude instead of the scalar product for the angle.",
            ],
          },
        },
        {
          id: "aihl-u3-vector-product-q11",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 6,
          stem: "Let $\\boldsymbol a=\\begin{pmatrix} 1 \\\\ 2 \\\\ 3 \\end{pmatrix}$ and $\\boldsymbol b=\\begin{pmatrix} 2 \\\\ -1 \\\\ 0 \\end{pmatrix}$.",
          parts: [
            {
              label: "a",
              prompt:
                "Show that $\\boldsymbol a\\times\\boldsymbol b=\\begin{pmatrix} 3 \\\\ 6 \\\\ -5 \\end{pmatrix}$.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "Find the area of the parallelogram formed by $\\boldsymbol a$ and $\\boldsymbol b$, to 3 significant figures.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Vector product",
                statement:
                  "$\\boldsymbol a\\times\\boldsymbol b=(a_2b_3-a_3b_2,\\;a_3b_1-a_1b_3,\\;a_1b_2-a_2b_1)$",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "First component: $a_2b_3-a_3b_2$.",
                working: "2(0)-3(-1)=3",
                marks: 1,
                markCode: "A",
              },
              {
                part: "a",
                reasoning: "Second component: $a_3b_1-a_1b_3$.",
                working: "3(2)-1(0)=6",
                marks: 1,
                markCode: "A",
              },
              {
                part: "a",
                reasoning: "Third component: $a_1b_2-a_2b_1$.",
                working: "1(-1)-2(2)=-5",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "The area is the magnitude of the vector product.",
                working: "A=\\sqrt{3^2+6^2+(-5)^2}=\\sqrt{70}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Evaluate the square root.",
                working: "\\sqrt{70}\\approx8.37",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "State the area.",
                working: "A\\approx8.37",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "(a) shown. (b) $A\\approx8.37$.",
            commonErrors: [
              "Forgetting that the middle component of the vector product has reversed order.",
            ],
          },
        },
        {
          id: "aihl-u3-vector-product-q12",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 6,
          stem: "The points $A(1,0,0)$, $B(0,1,0)$ and $C(0,0,1)$ form a triangle.",
          parts: [
            {
              label: "a",
              prompt:
                "Write down $\\overrightarrow{AB}$ and $\\overrightarrow{AC}$.",
              marks: 1,
            },
            {
              label: "b",
              prompt: "Find $\\overrightarrow{AB}\\times\\overrightarrow{AC}$.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Hence find the area of the triangle, to 3 significant figures.",
              marks: 2,
            },
            {
              label: "d",
              prompt: "Write down the exact area of the triangle.",
              marks: 1,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Triangle area",
                statement:
                  "$A=\\frac12|\\overrightarrow{AB}\\times\\overrightarrow{AC}|$",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "End minus start for both vectors.",
                working:
                  "\\overrightarrow{AB}=\\begin{pmatrix} -1 \\\\ 1 \\\\ 0 \\end{pmatrix},\\;\\overrightarrow{AC}=\\begin{pmatrix} -1 \\\\ 0 \\\\ 1 \\end{pmatrix}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "First two components: $1(1)-0(0)=1$ and $0(-1)-(-1)(1)=1$.",
                working: "(1,\\,1,\\,\\ldots)",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Third component: $(-1)(0)-1(-1)=1$.",
                working:
                  "\\overrightarrow{AB}\\times\\overrightarrow{AC}=\\begin{pmatrix} 1 \\\\ 1 \\\\ 1 \\end{pmatrix}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Magnitude of $(1,1,1)$ is $\\sqrt3$; halve for the triangle.",
                working: "|\\ldots|=\\sqrt3\\approx1.732",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Evaluate.",
                working: "A=\\tfrac{\\sqrt3}{2}\\approx0.866",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "State the exact value.",
                working: "A=\\frac{\\sqrt3}{2}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) $(-1,1,0)$ and $(-1,0,1)$. (b) $(1,1,1)$. (c) $0.866$. (d) $\\frac{\\sqrt3}{2}$.",
            commonErrors: [
              "Forgetting the factor $\\frac12$ for the triangle.",
            ],
          },
        },
        {
          id: "aihl-u3-vector-product-q13",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "For non-zero vectors $\\boldsymbol a$ and $\\boldsymbol b$, $\\boldsymbol a\\times\\boldsymbol b=\\boldsymbol 0$. What does this tell you about the vectors?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They are perpendicular." },
              { id: "b", text: "They are parallel." },
              { id: "c", text: "They are equal." },
              { id: "d", text: "They are unit vectors." },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Parallel vectors",
                statement:
                  "$\\boldsymbol a\\times\\boldsymbol b=\\boldsymbol0$ exactly when the vectors are parallel.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$|\\boldsymbol a\\times\\boldsymbol b|=|\\boldsymbol a||\\boldsymbol b|\\sin\\theta=0$ requires $\\sin\\theta=0$.",
                working: "\\theta=0^\\circ\\text{ or }180^\\circ",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The vectors point in the same or opposite direction, so they are parallel.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** They are parallel.",
            commonErrors: [
              "Confusing a zero vector product with a zero scalar product (perpendicular).",
            ],
          },
        },
        {
          id: "aihl-u3-vector-product-q14",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "The magnitude of $\\boldsymbol a\\times\\boldsymbol b$ is",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "$|\\boldsymbol a||\\boldsymbol b|\\cos\\theta$",
              },
              {
                id: "b",
                text: "$|\\boldsymbol a||\\boldsymbol b|\\sin\\theta$",
              },
              { id: "c", text: "$|\\boldsymbol a||\\boldsymbol b|$" },
              { id: "d", text: "$\\boldsymbol a\\cdot\\boldsymbol b$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Vector product magnitude",
                statement:
                  "$|\\boldsymbol a\\times\\boldsymbol b|=|\\boldsymbol a||\\boldsymbol b|\\sin\\theta$",
              },
            ],
            steps: [
              {
                reasoning:
                  "The magnitude uses sine, unlike the scalar product which uses cosine.",
                working:
                  "|\\boldsymbol a\\times\\boldsymbol b|=|\\boldsymbol a||\\boldsymbol b|\\sin\\theta",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "This equals the area of the parallelogram with sides $\\boldsymbol a$ and $\\boldsymbol b$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)**",
            commonErrors: [
              "Confusing the scalar product formula $|\\boldsymbol a||\\boldsymbol b|\\cos\\theta$.",
            ],
          },
        },
        {
          id: "aihl-u3-vector-product-q15",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 2,
          stem: "Which vector is perpendicular to both $\\begin{pmatrix} 1 \\\\ 0 \\\\ 0 \\end{pmatrix}$ and $\\begin{pmatrix} 0 \\\\ 1 \\\\ 0 \\end{pmatrix}$?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "$\\begin{pmatrix} 1 \\\\ 0 \\\\ 0 \\end{pmatrix}$",
              },
              {
                id: "b",
                text: "$\\begin{pmatrix} 0 \\\\ 1 \\\\ 0 \\end{pmatrix}$",
              },
              {
                id: "c",
                text: "$\\begin{pmatrix} 0 \\\\ 0 \\\\ 5 \\end{pmatrix}$",
              },
              {
                id: "d",
                text: "$\\begin{pmatrix} 1 \\\\ 1 \\\\ 0 \\end{pmatrix}$",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Vector product direction",
                statement:
                  "$\\boldsymbol a\\times\\boldsymbol b$ is perpendicular to both $\\boldsymbol a$ and $\\boldsymbol b$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The vector must be perpendicular to both the $x$-axis and the $y$-axis, so it must be parallel to the $z$-axis.",
                working:
                  "\\boldsymbol w=k\\begin{pmatrix} 0 \\\\ 0 \\\\ 1 \\end{pmatrix}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Only $(0,0,5)$ has this form.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)**",
            commonErrors: [
              "Choosing a vector in the $xy$-plane, which cannot be perpendicular to both basis vectors.",
            ],
          },
        },
        {
          id: "aihl-u3-vector-product-q16",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Find the area of the parallelogram formed by $\\boldsymbol a=\\begin{pmatrix} 1 \\\\ 1 \\\\ 0 \\end{pmatrix}$ and $\\boldsymbol b=\\begin{pmatrix} 0 \\\\ 1 \\\\ 1 \\end{pmatrix}$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\sqrt{3}$" },
              { id: "b", text: "$2$" },
              { id: "c", text: "$\\sqrt{2}$" },
              { id: "d", text: "$3$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Vector product",
                statement:
                  "$\\boldsymbol a\\times\\boldsymbol b=(1,-1,1)$ here, with magnitude $\\sqrt3$.",
              },
            ],
            steps: [
              {
                reasoning: "Compute the vector product.",
                working:
                  "\\begin{pmatrix} 1(1)-0(1) \\\\ 0(0)-1(1) \\\\ 1(1)-1(0) \\end{pmatrix}=\\begin{pmatrix} 1 \\\\ -1 \\\\ 1 \\end{pmatrix}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Take the magnitude for the area.",
                working: "\\sqrt{1+1+1}=\\sqrt3",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $\\sqrt3$",
            commonErrors: [
              "Using $\\frac12|\\boldsymbol a\\times\\boldsymbol b|$, which is the triangle area.",
            ],
          },
        },
      ],
    },
  ],
};
