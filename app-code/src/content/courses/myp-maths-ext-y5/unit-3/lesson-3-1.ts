import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "mypme5-u3-lesson-3-1",
  code: "3-1",
  title: "Vectors",
  goal: "I CAN represent and manipulate vectors in 2D and 3D, find magnitudes and unit vectors, and apply vectors to geometric problems.",
  standards: [
    "MYP Maths: Geometry & Trigonometry",
    "Criterion A: Knowing and understanding",
    "Criterion C: Communicating",
  ],
  vocabulary: [
    { term: "Vector", definition: "A quantity with magnitude and direction; written $\\vec{a}=\\begin{pmatrix}a_1\\\\a_2\\end{pmatrix}$ or $\\vec{AB}=\\vec{b}-\\vec{a}$." },
    { term: "Position vector", definition: "Vector from origin to a point; point $A$ has position vector $\\vec{a}$." },
    { term: "Magnitude", definition: "Length of vector: $|\\vec{v}|=\\sqrt{v_1^2+v_2^2}$ in 2D; $\\sqrt{v_1^2+v_2^2+v_3^2}$ in 3D." },
    { term: "Unit vector", definition: "Vector of length 1 in same direction: $\\hat{v}=\\frac{\\vec{v}}{|\\vec{v}|}$." },
    { term: "Scalar product", definition: "$\\vec{a}\\cdot\\vec{b}=a_1b_1+a_2b_2$ (2D) or sum of products of components; relates to angle: $\\cos\\theta=\\frac{\\vec{a}\\cdot\\vec{b}}{|\\vec{a}||\\vec{b}|}$." },
  ],
  concepts: [
    {
      id: "mypme5-u3-vectors",
      title: "Vector operations and geometry",
      skill: "Add, subtract, and scale vectors; find magnitudes, unit vectors, and apply vectors to prove geometric properties.",
      lesson: {
        sections: [
          {
            heading: "Vector basics",
            body: "$\\vec{AB}=\\vec{b}-\\vec{a}$ where $\\vec{a},\\vec{b}$ are position vectors. Addition follows triangle/parallelogram law. Scalar multiplication scales magnitude. Equal vectors have same components; parallel vectors are scalar multiples.",
          },
          {
            heading: "Magnitude and unit vectors",
            body: "$|\\vec{v}|=\\sqrt{v_1^2+v_2^2+v_3^2}$. Unit vector $\\hat{v}=\\frac{\\vec{v}}{|\\vec{v}|}$ — used to specify direction only. Distance between points = magnitude of displacement vector.",
          },
          {
            heading: "Vector geometry proofs",
            body: "To prove collinearity: show $\\vec{AB}=k\\vec{BC}$ for some scalar $k$. To find midpoint: $\\vec{m}=\\frac{\\vec{a}+\\vec{b}}{2}$. Section formula: point dividing $AB$ in ratio $m:n$ is $\\vec{p}=\\frac{n\\vec{a}+m\\vec{b}}{m+n}$.",
          },
        ],
        keyFormulas: [
          { name: "Displacement", statement: "$\\vec{AB}=\\vec{b}-\\vec{a}$" },
          { name: "Magnitude", statement: "$|\\vec{v}|=\\sqrt{v_1^2+v_2^2+v_3^2}$" },
          { name: "Unit vector", statement: "$\\hat{v}=\\frac{\\vec{v}}{|\\vec{v}|}$" },
          { name: "Midpoint", statement: "$\\frac{\\vec{a}+\\vec{b}}{2}$" },
        ],
        workedExample: {
          problem: "Find $|\\vec{v}|$ and $\\hat{v}$ for $\\vec{v}=\\begin{pmatrix}3\\\\4\\end{pmatrix}$.",
          solution: "$|\\vec{v}|=\\sqrt{9+16}=5$; $\\hat{v}=\\begin{pmatrix}0.6\\\\0.8\\end{pmatrix}$.",
        },
      },
      questions: [
        {
          id: "mypme5-u3-vec-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Find $|\\vec{v}|$ for $\\vec{v}=\\begin{pmatrix}6\\\\8\\end{pmatrix}$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "\\sqrt{14}" },
              { id: "b", text: "14" },
              { id: "c", text: "48" },
              { id: "d", text: "10" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Magnitude", statement: "$|\\vec{v}|=\\sqrt{36+64}=\\sqrt{100}=10$." },
            ],
            steps: [
              { reasoning: "$\\sqrt{6^2+8^2}=\\sqrt{100}=10$.", working: "10", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** 10",
            commonErrors: ["Adding components instead of Pythagoras."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypme5-u3-vec-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Points $A(1,2)$ and $B(4,6)$. Find $\\vec{AB}$ and its magnitude.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\vec{AB}=\\begin{pmatrix}3\\\\4\\end{pmatrix}$, $|\\vec{AB}|=5$" },
              { id: "b", text: "$\\vec{AB}=\\begin{pmatrix}3\\\\4\\end{pmatrix}$, $|\\vec{AB}|=7$" },
              { id: "c", text: "$\\vec{AB}=\\begin{pmatrix}5\\\\8\\end{pmatrix}$, $|\\vec{AB}|=13$" },
              { id: "d", text: "$\\vec{AB}=\\begin{pmatrix}-3\\\\-4\\end{pmatrix}$, $|\\vec{AB}|=5$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Displacement", statement: "$\\vec{AB}=\\vec{b}-\\vec{a}=\\begin{pmatrix}3\\\\4\\end{pmatrix}$; magnitude $=5$." },
            ],
            steps: [
              { reasoning: "$\\vec{AB}=\\begin{pmatrix}4-1\\\\6-2\\end{pmatrix}=\\begin{pmatrix}3\\\\4\\end{pmatrix}$.", working: "\\begin{pmatrix}3\\\\4\\end{pmatrix}", marks: 1, markCode: "M" },
              { reasoning: "$|\\vec{AB}|=\\sqrt{9+16}=5$.", working: "5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\vec{AB}=\\begin{pmatrix}3\\\\4\\end{pmatrix}$, magnitude 5",
            commonErrors: ["Computing $\\vec{BA}$ instead of $\\vec{AB}$."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypme5-u3-vec-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Find the unit vector in the direction of $\\vec{v}=\\begin{pmatrix}2\\\\-1\\\\2\\end{pmatrix}$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\begin{pmatrix}2\\\\-1\\\\2\\end{pmatrix}$" },
              { id: "b", text: "$\\begin{pmatrix}\\frac{2}{3}\\\\-\\frac{1}{3}\\\\\\frac{2}{3}\\end{pmatrix}$" },
              { id: "c", text: "$\\begin{pmatrix}\\frac{1}{3}\\\\-\\frac{1}{6}\\\\\\frac{1}{3}\\end{pmatrix}$" },
              { id: "d", text: "$\\begin{pmatrix}\\frac{2}{9}\\\\-\\frac{1}{9}\\\\\\frac{2}{9}\\end{pmatrix}$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Unit vector", statement: "$|\\vec{v}|=\\sqrt{4+1+4}=3$; $\\hat{v}=\\frac{1}{3}\\begin{pmatrix}2\\\\-1\\\\2\\end{pmatrix}$." },
            ],
            steps: [
              { reasoning: "$|\\vec{v}|=\\sqrt{4+1+4}=3$.", working: "|v|=3", marks: 1, markCode: "M" },
              { reasoning: "$\\hat{v}=\\frac{1}{3}\\begin{pmatrix}2\\\\-1\\\\2\\end{pmatrix}=\\begin{pmatrix}2/3\\\\-1/3\\\\2/3\\end{pmatrix}$.", working: "\\hat{v}", marks: 1, markCode: "M" },
              { reasoning: "State the unit vector.", working: "\\hat{v}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\begin{pmatrix}\\frac{2}{3}\\\\-\\frac{1}{3}\\\\\\frac{2}{3}\\end{pmatrix}$",
            commonErrors: ["Dividing by sum of components instead of magnitude."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypme5-u3-vec-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Points $A(1,0,2)$, $B(3,2,4)$, $C(5,4,6)$.",
          parts: [
            { label: "a", prompt: "Find $\\vec{AB}$ and $\\vec{BC}$.", marks: 2 },
            { label: "b", prompt: "Show that $A$, $B$, $C$ are collinear.", marks: 2 },
            { label: "c", prompt: "Find the midpoint of $AC$.", marks: 1 },
            { label: "d", prompt: "Find the point that divides $AB$ in ratio 1:2 (from $A$).", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Vector geometry", statement: "Collinear if displacement vectors are scalar multiples." },
            ],
            steps: [
              { part: "a", reasoning: "$\\vec{AB}=\\begin{pmatrix}2\\\\2\\\\2\\end{pmatrix}$; $\\vec{BC}=\\begin{pmatrix}2\\\\2\\\\2\\end{pmatrix}$.", working: "AB=BC=(2,2,2)", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State both vectors.", working: "\\vec{AB}=\\vec{BC}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$\\vec{AB}=\\vec{BC}$ → same direction and magnitude → $B$ midpoint of $AC$ → collinear.", working: "\\vec{AB}=\\vec{BC}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Conclude collinearity.", working: "\\text{collinear}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Midpoint $=\\left(\\frac{1+5}{2},\\frac{0+4}{2},\\frac{2+6}{2}\\right)=(3,2,4)$.", working: "(3,2,4)", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Ratio 1:2 from $A$: $\\vec{p}=\\vec{a}+\\frac{1}{3}(\\vec{b}-\\vec{a})=\\begin{pmatrix}1\\\\0\\\\2\\end{pmatrix}+\\frac{1}{3}\\begin{pmatrix}2\\\\2\\\\2\\end{pmatrix}=\\begin{pmatrix}1.67\\\\0.67\\\\2.67\\end{pmatrix}$.", working: "(1.67,0.67,2.67)", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Apply section formula.", working: "\\vec{a}+\\frac{1}{3}\\vec{AB}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "State the point.", working: "(1.67,0.67,2.67)", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $\\vec{AB}=\\vec{BC}=\\begin{pmatrix}2\\\\2\\\\2\\end{pmatrix}$ (b) collinear (c) $(3,2,4)$ (d) $(\\frac{5}{3},\\frac{2}{3},\\frac{8}{3})$",
            commonErrors: ["In (d), using ratio 1:2 incorrectly — from A means 1 part toward B."],
            examinerNote: "M1 A1 for (a), M1 A1 for (b), A1 for (c), M1 M1 A1 for (d).",
          },
        },
        {
          id: "mypme5-u3-vec-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Find the magnitude of $\\vec{v}=\\begin{pmatrix}3\\\\4\\end{pmatrix}$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\sqrt7$" },
              { id: "b", text: "7" },
              { id: "c", text: "5" },
              { id: "d", text: "12" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Vector magnitude", statement: "$|\\vec v|=\\sqrt{3^2+4^2}=\\sqrt{25}=5$." },
            ],
            steps: [
              { reasoning: "$\\sqrt{9+16}=5$.", working: "5", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** 5",
            commonErrors: ["Adding components: 3+4=7."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypme5-u3-vec-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Find the magnitude of $\\vec{v}=\\begin{pmatrix}6\\\\8\\end{pmatrix}$.",
          response: { type: "numeric", parts: [{ label: "$|\\vec v|$", answer: 10 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Vector magnitude", statement: "$|\\vec v|=\\sqrt{36+64}=\\sqrt{100}=10$." },
            ],
            steps: [
              { reasoning: "$\\sqrt{100}=10$.", working: "10", marks: 1, markCode: "B" },
            ],
            finalAnswer: "10",
            commonErrors: ["Computing $\\sqrt{36}+\\sqrt{64}=14$."],
          },
        },
        {
          id: "mypme5-u3-vec-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the unit vector in the direction of $\\vec{v}=\\begin{pmatrix}3\\\\4\\end{pmatrix}$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\begin{pmatrix}3\\\\4\\end{pmatrix}$" },
              { id: "b", text: "$\\begin{pmatrix}5\\\\5\\end{pmatrix}$" },
              { id: "c", text: "$\\begin{pmatrix}0.3\\\\0.4\\end{pmatrix}$" },
              { id: "d", text: "$\\begin{pmatrix}0.6\\\\0.8\\end{pmatrix}$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Unit vector", statement: "$\\hat v=\\frac{\\vec v}{|\\vec v|}=\\frac{1}{5}\\begin{pmatrix}3\\\\4\\end{pmatrix}=\\begin{pmatrix}0.6\\\\0.8\\end{pmatrix}$." },
            ],
            steps: [
              { reasoning: "Divide by magnitude 5.", working: "\\frac{1}{5}\\begin{pmatrix}3\\\\4\\end{pmatrix}", marks: 1, markCode: "M" },
              { reasoning: "Match option (a).", working: "a", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $\\begin{pmatrix}0.6\\\\0.8\\end{pmatrix}$",
            commonErrors: ["Forgetting to divide by the magnitude."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypme5-u3-vec-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "If $\\vec a=\\begin{pmatrix}1\\\\2\\end{pmatrix}$ and $\\vec b=\\begin{pmatrix}3\\\\-1\\end{pmatrix}$, find $|\\vec a+\\vec b|$.",
          response: { type: "numeric", parts: [{ label: "$|\\vec a+\\vec b|$", answer: 4.123, tolerance: 0.001 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Vector addition", statement: "$\\vec a+\\vec b=\\begin{pmatrix}4\\\\1\\end{pmatrix}$; magnitude $=\\sqrt{17}\\approx4.123$." },
            ],
            steps: [
              { reasoning: "Add components: $\\begin{pmatrix}4\\\\1\\end{pmatrix}$; magnitude $\\sqrt{16+1}=\\sqrt{17}$.", working: "\\sqrt{17}", marks: 1, markCode: "M" },
              { reasoning: "State the value: $4.123$.", working: "4.123", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\sqrt{17}\\approx4.123$",
            commonErrors: ["Adding magnitudes instead of vectors."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypme5-u3-vec-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "In quadrilateral $ABCD$, the position vectors satisfy $\\vec{AB}=\\vec{DC}$. What can you conclude?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$ABCD$ is a rectangle" },
              { id: "b", text: "$ABCD$ is a kite" },
              { id: "c", text: "Nothing can be concluded" },
              { id: "d", text: "$ABCD$ is a parallelogram" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Parallelogram criterion", statement: "One pair of opposite sides equal and parallel ($\\vec{AB}=\\vec{DC}$) implies a parallelogram." },
            ],
            steps: [
              { reasoning: "$\\vec{AB}=\\vec{DC}$ means $AB$ and $DC$ are equal in length and direction → parallel and equal.", working: "\\vec{AB}=\\vec{DC}", marks: 1, markCode: "M" },
              { reasoning: "Equal parallel opposite sides → parallelogram.", working: "\\text{parallelogram}", marks: 1, markCode: "M" },
              { reasoning: "Match option (a).", working: "a", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Parallelogram",
            commonErrors: ["Concluding rectangle — equal sides alone don't give right angles."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypme5-u3-vec-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Find the magnitude of $3\\begin{pmatrix}2\\\\-1\\end{pmatrix}$.",
          response: { type: "numeric", parts: [{ label: "Magnitude", answer: 6.708, tolerance: 0.001 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Scalar multiplication", statement: "$3\\begin{pmatrix}2\\\\-1\\end{pmatrix}=\\begin{pmatrix}6\\\\-3\\end{pmatrix}$; magnitude $=\\sqrt{45}=3\\sqrt5\\approx6.708$." },
            ],
            steps: [
              { reasoning: "$\\sqrt{36+9}=\\sqrt{45}\\approx6.708$.", working: "6.708", marks: 1, markCode: "B" },
            ],
            finalAnswer: "$3\\sqrt5\\approx6.708$",
            commonErrors: ["Computing $3+\\sqrt5$ or forgetting to scale both components."],
          },
        },
        {
          id: "mypme5-u3-vec-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "Let $\\vec v=\\begin{pmatrix}5\\\\12\\end{pmatrix}$. Find the values of $k$ for which $|k\\vec v|=26$.",
          response: { type: "numeric", parts: [
            { label: "$k$", answer: 2 },
            { label: "$k$", answer: -2 },
          ], unordered: true },
          markscheme: {
            principles: [
              { kind: "formula", name: "Magnitude scaling", statement: "$|\\vec v|=13$; $|k\\vec v|=|k|\\cdot13=26$ → $|k|=2$ → $k=\\pm2$." },
            ],
            steps: [
              { reasoning: "$|\\vec v|=\\sqrt{25+144}=13$; $|k|(13)=26$ → $|k|=2$.", working: "|k|=2", marks: 1, markCode: "M" },
              { reasoning: "$k=2$ or $k=-2$.", working: "k=\\pm2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$k=\\pm2$",
            commonErrors: ["Forgetting the negative solution."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypme5-u3-vec-q12",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Points $A(1,2)$, $B(4,6)$ and $C(7,3)$ have position vectors $\\vec a,\\vec b,\\vec c$. Find the coordinates of point $D$ such that $ABCD$ is a parallelogram (vertices in order).",
          response: { type: "numeric", parts: [
            { label: "$x$-coordinate", answer: 4 },
            { label: "$y$-coordinate", answer: -1 },
          ], unordered: true },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Parallelogram vectors", statement: "$\\vec{AB}=\\vec{DC}$ → $\\vec d=\\vec a+\\vec c-\\vec b=(1+7-4,\\,2+3-6)=(4,-1)$." },
            ],
            steps: [
              { reasoning: "$\\vec{AB}=\\vec b-\\vec a=(3,4)$; need $\\vec{DC}=\\vec c-\\vec d=(3,4)$ → $\\vec d=\\vec c-(3,4)=(4,-1)$.", working: "d=(4,-1)", marks: 1, markCode: "M" },
              { reasoning: "Equivalently $\\vec d=\\vec a+\\vec c-\\vec b=(4,-1)$.", working: "(1+7-4,2+3-6)", marks: 1, markCode: "M" },
              { reasoning: "State coordinates.", working: "D=(4,-1)", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$D=(4,-1)$",
            commonErrors: ["Using $\\vec d=\\vec b+\\vec c-\\vec a$ which gives a different ordering."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypme5-u3-vec-q13",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A triangle has vertices $A(1,1)$, $B(5,3)$ and $C(3,7)$.",
          parts: [
            { label: "a", prompt: "Find the vectors $\\vec{AB}$, $\\vec{BC}$ and $\\vec{CA}$.", marks: 2 },
            { label: "b", prompt: "Verify that $\\vec{AB}+\\vec{BC}+\\vec{CA}=\\vec0$.", marks: 1 },
            { label: "c", prompt: "Find the midpoint of $AB$.", marks: 1 },
            { label: "d", prompt: "Find the centroid of the triangle.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Vector geometry", statement: "Edge vectors sum to zero around a closed path; midpoint $=\\frac{\\vec a+\\vec b}{2}$; centroid $=\\frac{\\vec a+\\vec b+\\vec c}{3}$." },
            ],
            steps: [
              { part: "a", reasoning: "$\\vec{AB}=(4,2)$, $\\vec{BC}=(-2,4)$, $\\vec{CA}=(-2,-6)$.", working: "(4,2),(-2,4),(-2,-6)", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State all three vectors.", working: "\\text{stated}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$(4,2)+(-2,4)+(-2,-6)=(0,0)=\\vec0$ ✓.", working: "\\vec0", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Midpoint $=\\left(\\frac{1+5}{2},\\frac{1+3}{2}\\right)=(3,2)$.", working: "(3,2)", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Centroid $=\\left(\\frac{1+5+3}{3},\\frac{1+3+7}{3}\\right)=\\left(3,\\frac{11}{3}\\right)$.", working: "(3,11/3)", marks: 1, markCode: "M" },
              { part: "d", reasoning: "State the centroid.", working: "(3,\\tfrac{11}{3})", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $(4,2),(-2,4),(-2,-6)$ (b) $\\vec0$ ✓ (c) $(3,2)$ (d) $(3,\\frac{11}{3})$",
            commonErrors: ["In (a), computing $\\vec{BC}=C-B$ as $(2,-4)$ with reversed subtraction."],
            examinerNote: "M1 A1 for (a), B1 for (b), M1 for (c), M1 A1 for (d).",
          },
        },
        {
          id: "mypme5-u3-vec-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which vector is parallel to $\\begin{pmatrix}2\\\\-3\\end{pmatrix}$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\begin{pmatrix}3\\\\-2\\end{pmatrix}$" },
              { id: "b", text: "$\\begin{pmatrix}6\\\\4\\end{pmatrix}$" },
              { id: "c", text: "$\\begin{pmatrix}4\\\\6\\end{pmatrix}$" },
              { id: "d", text: "$\\begin{pmatrix}4\\\\-6\\end{pmatrix}$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Parallel vectors", statement: "Parallel iff one is a scalar multiple of the other: $\\begin{pmatrix}4\\\\-6\\end{pmatrix}=2\\begin{pmatrix}2\\\\-3\\end{pmatrix}$." },
            ],
            steps: [
              { reasoning: "Check ratios: $4/2=2$ and $-6/-3=2$ — consistent scalar multiple.", working: "\\lambda=2", marks: 1, markCode: "M" },
              { reasoning: "Match option (a). Options (b) and (c) fail the second ratio; (d) has no consistent scalar.", working: "a", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $\\begin{pmatrix}4\\\\-6\\end{pmatrix}$",
            commonErrors: ["Checking only one component ratio."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypme5-u3-vec-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A boat has velocity $\\vec v_b=\\begin{pmatrix}4\\\\3\\end{pmatrix}$ km/h in still water, and the current has velocity $\\vec v_c=\\begin{pmatrix}1\\\\-1\\end{pmatrix}$ km/h. Find the speed of the boat relative to the ground.",
          response: { type: "numeric", parts: [{ label: "Speed (km/h)", answer: 5.385, tolerance: 0.001 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Resultant velocity", statement: "$\\vec v=\\begin{pmatrix}5\\\\2\\end{pmatrix}$; speed $=\\sqrt{25+4}=\\sqrt{29}\\approx5.385$ km/h." },
            ],
            steps: [
              { reasoning: "Add velocities: $\\begin{pmatrix}4+1\\\\3-1\\end{pmatrix}=\\begin{pmatrix}5\\\\2\\end{pmatrix}$.", working: "\\begin{pmatrix}5\\\\2\\end{pmatrix}", marks: 1, markCode: "M" },
              { reasoning: "Speed $=\\sqrt{29}\\approx5.385$ km/h.", working: "5.385", marks: 1, markCode: "M" },
              { reasoning: "State the speed.", working: "5.385\\text{ km/h}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\sqrt{29}\\approx5.385$ km/h",
            commonErrors: ["Adding speeds $\\sqrt{16+9}+\\sqrt2$ instead of vector sum."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypme5-u3-vec-q16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Points $A(0,0)$, $B(4,2)$, $C(6,6)$ and $D(2,4)$ form a quadrilateral.",
          parts: [
            { label: "a", prompt: "Show that $\\vec{AB}$ and $\\vec{DC}$ are equal.", marks: 2 },
            { label: "b", prompt: "What type of quadrilateral is $ABCD$? Justify.", marks: 1 },
            { label: "c", prompt: "Find the point where the diagonals $AC$ and $BD$ intersect.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Parallelogram + diagonals", statement: "Opposite sides equal vectors → parallelogram; its diagonals bisect each other at the midpoint." },
            ],
            steps: [
              { part: "a", reasoning: "$\\vec{AB}=(4,2)$; $\\vec{DC}=\\vec c-\\vec d=(6-2,\\,6-4)=(4,2)$.", working: "\\vec{AB}=\\vec{DC}=(4,2)", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Equal and parallel → opposite sides congruent.", working: "(4,2)=(4,2)", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$ABCD$ is a parallelogram (one pair of opposite sides equal and parallel).", working: "\\text{parallelogram}", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Midpoint of $AC=\\left(\\frac{0+6}{2},\\frac{0+6}{2}\\right)=(3,3)$.", working: "(3,3)", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Midpoint of $BD=\\left(\\frac{4+2}{2},\\frac{2+4}{2}\\right)=(3,3)$ — diagonals bisect at $(3,3)$.", working: "(3,3)", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $\\vec{AB}=\\vec{DC}=(4,2)$ (b) parallelogram (c) $(3,3)$",
            commonErrors: ["Using midpoint of $AD$ instead of the diagonals."],
            examinerNote: "M1 A1 for (a), R1 for (b), M1 A1 for (c).",
          },
        },
      ],
    },
    {
      id: "mypme5-u3-scalprod",
      title: "Scalar Product and Angles",
      skill: "Use the scalar (dot) product to find angles between vectors and test for perpendicularity.",
      lesson: {
        sections: [
          {
            heading: "Scalar product definition",
            body: "$\\vec{a}\\cdot\\vec{b}=a_1b_1+a_2b_2+a_3b_3$. Also $\\vec{a}\\cdot\\vec{b}=|\\vec{a}||\\vec{b}|\\cos\\theta$ where $\\theta$ is angle between them. Perpendicular vectors have $\\vec{a}\\cdot\\vec{b}=0$.",
          },
          {
            heading: "Finding angles",
            body: "$\\cos\\theta=\\frac{\\vec{a}\\cdot\\vec{b}}{|\\vec{a}||\\vec{b}|}$. For obtuse angles, $\\cos\\theta<0$. Always give angle in degrees or radians as requested.",
          },
          {
            heading: "Applications",
            body: "Work done by force: $W=\\vec{F}\\cdot\\vec{d}$. Projection of $\\vec{a}$ onto $\\vec{b}$: $\\frac{\\vec{a}\\cdot\\vec{b}}{|\\vec{b}|}$. Vector equation of line: $\\vec{r}=\\vec{a}+t\\vec{d}$.",
          },
        ],
        keyFormulas: [
          { name: "Dot product", statement: "$\\vec{a}\\cdot\\vec{b}=\\sum a_ib_i$" },
          { name: "Angle", statement: "$\\cos\\theta=\\frac{\\vec{a}\\cdot\\vec{b}}{|\\vec{a}||\\vec{b}|}$" },
          { name: "Perpendicular", statement: "$\\vec{a}\\cdot\\vec{b}=0$" },
        ],
        workedExample: {
          problem: "Find angle between $\\vec{a}=\\begin{pmatrix}1\\\\2\\end{pmatrix}$ and $\\vec{b}=\\begin{pmatrix}3\\\\-1\\end{pmatrix}$.",
          solution: "$\\vec{a}\\cdot\\vec{b}=3-2=1$; $|\\vec{a}|=\\sqrt{5}$, $|\\vec{b}|=\\sqrt{10}$; $\\cos\\theta=\\frac{1}{\\sqrt{50}}$; $\\theta=81.9°$.",
        },
      },
      questions: [
        {
          id: "mypme5-u3-dot-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Find $\\vec{a}\\cdot\\vec{b}$ for $\\vec{a}=\\begin{pmatrix}2\\\\3\\end{pmatrix}$, $\\vec{b}=\\begin{pmatrix}4\\\\-1\\end{pmatrix}$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "5" },
              { id: "b", text: "1" },
              { id: "c", text: "11" },
              { id: "d", text: "-5" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Dot product", statement: "$2(4)+3(-1)=8-3=5$." },
            ],
            steps: [
              { reasoning: "$8-3=5$.", working: "5", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** 5",
            commonErrors: ["Adding products instead of the actual computation."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypme5-u3-dot-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Are $\\vec{a}=\\begin{pmatrix}3\\\\-2\\end{pmatrix}$ and $\\vec{b}=\\begin{pmatrix}4\\\\6\\end{pmatrix}$ perpendicular?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Yes, because magnitudes are equal" },
              { id: "b", text: "No" },
              { id: "c", text: "Yes, $\\vec{a}\\cdot\\vec{b}=0$" },
              { id: "d", text: "Cannot determine" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Perpendicular", statement: "$\\vec{a}\\cdot\\vec{b}=12-12=0$ → perpendicular." },
            ],
            steps: [
              { reasoning: "$3(4)+(-2)(6)=12-12=0$.", working: "0", marks: 1, markCode: "M" },
              { reasoning: "Dot product zero → perpendicular.", working: "\\text{perpendicular}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Yes, perpendicular",
            commonErrors: ["Comparing magnitudes instead of dot product."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypme5-u3-dot-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Find the angle between $\\vec{a}=\\begin{pmatrix}1\\\\0\\\\1\\end{pmatrix}$ and $\\vec{b}=\\begin{pmatrix}0\\\\1\\\\1\\end{pmatrix}$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "45°" },
              { id: "b", text: "90°" },
              { id: "c", text: "30°" },
              { id: "d", text: "60°" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Angle", statement: "$\\vec{a}\\cdot\\vec{b}=1$; $|\\vec{a}|=|\\vec{b}|=\\sqrt{2}$; $\\cos\\theta=\\frac{1}{2}$ → $\\theta=60°$." },
            ],
            steps: [
              { reasoning: "$\\vec{a}\\cdot\\vec{b}=0+0+1=1$; magnitudes $\\sqrt{2}$ each.", working: "dot=1", marks: 1, markCode: "M" },
              { reasoning: "$\\cos\\theta=\\frac{1}{2}$ → $\\theta=60°$.", working: "60^{\\circ}", marks: 1, markCode: "M" },
              { reasoning: "State the angle.", working: "60^{\\circ}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "60°",
            commonErrors: ["Using wrong formula or forgetting square root."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypme5-u3-dot-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A force $\\vec{F}=\\begin{pmatrix}3\\\\4\\\\0\\end{pmatrix}$ N moves an object through displacement $\\vec{d}=\\begin{pmatrix}2\\\\1\\\\3\\end{pmatrix}$ m.",
          parts: [
            { label: "a", prompt: "Find the work done $W=\\vec{F}\\cdot\\vec{d}$.", marks: 2 },
            { label: "b", prompt: "Find $|\\vec{F}|$ and $|\\vec{d}|$.", marks: 2 },
            { label: "c", prompt: "Find the angle between $\\vec{F}$ and $\\vec{d}$.", marks: 2 },
            { label: "d", prompt: "Find the component of $\\vec{F}$ in the direction of $\\vec{d}$.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Work and projection", statement: "$W=\\vec{F}\\cdot\\vec{d}$; component $=\\frac{\\vec{F}\\cdot\\vec{d}}{|\\vec{d}|}$." },
            ],
            steps: [
              { part: "a", reasoning: "$W=3(2)+4(1)+0(3)=6+4+0=10$ J.", working: "10\\text{ J}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the work.", working: "10\\text{ J}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$|\\vec{F}|=\\sqrt{9+16}=5$; $|\\vec{d}|=\\sqrt{4+1+9}=\\sqrt{14}$.", working: "5,\\sqrt{14}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State both magnitudes.", working: "5\\text{ and }\\sqrt{14}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$\\cos\\theta=\\frac{10}{5\\sqrt{14}}=\\frac{2}{\\sqrt{14}}$; $\\theta=57.7°$.", working: "57.7^{\\circ}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State the angle.", working: "57.7^{\\circ}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Component $=\\frac{\\vec{F}\\cdot\\vec{d}}{|\\vec{d}|}=\\frac{10}{\\sqrt{14}}=\\frac{10\\sqrt{14}}{14}=\\frac{5\\sqrt{14}}{7}\\approx2.67$ N.", working: "2.67\\text{ N}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "State the component.", working: "\\frac{5\\sqrt{14}}{7}\\approx2.67\\text{ N}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 10 J (b) 5 N, $\\sqrt{14}$ m (c) 57.7° (d) $\\frac{5\\sqrt{14}}{7}\\approx2.67$ N",
            commonErrors: ["In (d), dividing by $|\\vec{F}|$ instead of $|\\vec{d}|$."],
            examinerNote: "M1 A1 for (a), M1 A1 for (b), M1 A1 for (c), M1 A1 for (d).",
          },
        },
        {
          id: "mypme5-u3-dot-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Find $\\begin{pmatrix}2\\\\3\\end{pmatrix}\\cdot\\begin{pmatrix}4\\\\-1\\end{pmatrix}$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "14" },
              { id: "b", text: "5" },
              { id: "c", text: "11" },
              { id: "d", text: "-5" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Scalar product", statement: "$\\vec a\\cdot\\vec b=a_1b_1+a_2b_2=2(4)+3(-1)=8-3=5$." },
            ],
            steps: [
              { reasoning: "$8-3=5$.", working: "5", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** 5",
            commonErrors: ["Adding products: $8+3=11$."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypme5-u3-dot-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Find the angle between $\\begin{pmatrix}1\\\\0\\end{pmatrix}$ and $\\begin{pmatrix}0\\\\1\\end{pmatrix}$. Give your answer in degrees.",
          response: { type: "numeric", parts: [{ label: "Angle (degrees)", answer: 90 }] },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Perpendicular vectors", statement: "Dot product $=0$ → perpendicular → angle $90°$." },
            ],
            steps: [
              { reasoning: "Dot product $=1(0)+0(1)=0$ → $90°$.", working: "90", marks: 1, markCode: "B" },
            ],
            finalAnswer: "90°",
            commonErrors: ["Computing the angle as $0°$."],
          },
        },
        {
          id: "mypme5-u3-dot-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Show that $\\begin{pmatrix}3\\\\4\\end{pmatrix}$ and $\\begin{pmatrix}4\\\\-3\\end{pmatrix}$ are perpendicular.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Their dot product is 24" },
              { id: "b", text: "Their dot product is $12-12=0$" },
              { id: "c", text: "Their magnitudes are equal" },
              { id: "d", text: "They are scalar multiples" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Perpendicular test", statement: "$\\vec a\\cdot\\vec b=0$ iff $\\vec a\\perp\\vec b$." },
            ],
            steps: [
              { reasoning: "$3(4)+4(-3)=12-12=0$ → perpendicular.", working: "12-12=0", marks: 1, markCode: "M" },
              { reasoning: "Match option (a).", working: "a", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Dot product is 0",
            commonErrors: ["Checking magnitudes instead of the dot product."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypme5-u3-dot-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the angle between $\\vec a=\\begin{pmatrix}2\\\\-1\\\\2\\end{pmatrix}$ and $\\vec b=\\begin{pmatrix}1\\\\1\\\\1\\end{pmatrix}$, in degrees correct to 1 d.p.",
          response: { type: "numeric", parts: [{ label: "Angle (degrees)", answer: 54.7, tolerance: 0.1 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Angle between vectors", statement: "$\\cos\\theta=\\frac{\\vec a\\cdot\\vec b}{|\\vec a||\\vec b|}=\\frac{3}{3\\sqrt3}=\\frac1{\\sqrt3}$ → $\\theta=54.7°$." },
            ],
            steps: [
              { reasoning: "$\\vec a\\cdot\\vec b=2-1+2=3$; $|\\vec a|=3$, $|\\vec b|=\\sqrt3$.", working: "\\cos\\theta=\\frac{3}{3\\sqrt3}", marks: 1, markCode: "M" },
              { reasoning: "$\\cos\\theta=0.5774$ → $\\theta=54.74°\\approx54.7°$.", working: "54.7", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$54.7°$",
            commonErrors: ["Using degrees in the cosine computation or forgetting magnitudes."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypme5-u3-dot-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the projection (scalar) of $\\begin{pmatrix}4\\\\2\\end{pmatrix}$ onto $\\begin{pmatrix}1\\\\0\\end{pmatrix}$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "4" },
              { id: "b", text: "$2\\sqrt5$" },
              { id: "c", text: "2" },
              { id: "d", text: "$\\sqrt{20}$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Scalar projection", statement: "$\\text{proj}=\\frac{\\vec a\\cdot\\vec b}{|\\vec b|}=\\frac{4(1)+2(0)}{1}=4$." },
            ],
            steps: [
              { reasoning: "$\\vec a\\cdot\\vec b=4$; $|\\vec b|=1$ → projection $=4$.", working: "4", marks: 1, markCode: "M" },
              { reasoning: "Match option (a).", working: "a", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** 4",
            commonErrors: ["Dividing by $|\\vec a|$ instead of $|\\vec b|$."],
            examinerNote: "M1 A1 A1.",
          },
        },
        {
          id: "mypme5-u3-dot-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A force $\\vec F=\\begin{pmatrix}6\\\\8\\end{pmatrix}$ N moves an object through displacement $\\vec d=\\begin{pmatrix}2\\\\0\\end{pmatrix}$ m. Find the work done.",
          response: { type: "numeric", parts: [{ label: "Work (J)", answer: 12 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Work", statement: "$W=\\vec F\\cdot\\vec d=6(2)+8(0)=12$ J." },
            ],
            steps: [
              { reasoning: "$W=12$ J.", working: "12", marks: 1, markCode: "B" },
            ],
            finalAnswer: "12 J",
            commonErrors: ["Using $|\\vec F||\\vec d|=20$ instead of the dot product."],
          },
        },
        {
          id: "mypme5-u3-dot-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find $k$ such that $\\begin{pmatrix}k\\\\3\\end{pmatrix}$ is perpendicular to $\\begin{pmatrix}2\\\\-1\\end{pmatrix}$.",
          response: { type: "numeric", parts: [{ label: "$k$", answer: 1.5 }] },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Perpendicular test", statement: "$k(2)+3(-1)=0$ → $2k=3$ → $k=1.5$." },
            ],
            steps: [
              { reasoning: "$2k-3=0$ → $k=1.5$.", working: "k=1.5", marks: 1, markCode: "M" },
              { reasoning: "State the value.", working: "k=1.5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$k=1.5$",
            commonErrors: ["Writing $2k+3=0$ → $k=-1.5$."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypme5-u3-dot-q12",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Find the angle between $\\vec a=\\begin{pmatrix}1\\\\2\\\\0\\end{pmatrix}$ and $\\vec b=\\begin{pmatrix}3\\\\0\\\\4\\end{pmatrix}$, in degrees correct to 1 d.p.",
          response: { type: "numeric", parts: [{ label: "Angle (degrees)", answer: 74.4, tolerance: 0.1 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Angle between vectors", statement: "$\\vec a\\cdot\\vec b=3$; $|\\vec a|=\\sqrt5$, $|\\vec b|=5$; $\\cos\\theta=\\frac{3}{5\\sqrt5}=0.2683$ → $\\theta=74.4°$." },
            ],
            steps: [
              { reasoning: "Dot product $=3$; magnitudes $\\sqrt5$ and $5$.", working: "\\cos\\theta=\\frac{3}{5\\sqrt5}", marks: 1, markCode: "M" },
              { reasoning: "$\\cos\\theta=0.2683$ → $\\theta=74.39°\\approx74.4°$.", working: "74.4", marks: 1, markCode: "M" },
              { reasoning: "State the angle.", working: "74.4°", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$74.4°$",
            commonErrors: ["Forgetting the $z$-components in magnitudes."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypme5-u3-dot-q13",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Let $\\vec a=\\begin{pmatrix}2\\\\1\\end{pmatrix}$ and $\\vec b=\\begin{pmatrix}1\\\\3\\end{pmatrix}$.",
          parts: [
            { label: "a", prompt: "Find $\\vec a\\cdot\\vec b$.", marks: 1 },
            { label: "b", prompt: "Find $|\\vec a|$ and $|\\vec b|$.", marks: 1 },
            { label: "c", prompt: "Find the angle between $\\vec a$ and $\\vec b$.", marks: 2 },
            { label: "d", prompt: "Find $\\lambda$ such that $\\vec a+\\lambda\\vec b$ is perpendicular to $\\vec a$.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Scalar product", statement: "$\\cos\\theta=\\frac{\\vec a\\cdot\\vec b}{|\\vec a||\\vec b|}$; perpendicularity requires dot product $=0$." },
            ],
            steps: [
              { part: "a", reasoning: "$\\vec a\\cdot\\vec b=2(1)+1(3)=5$.", working: "5", marks: 1, markCode: "B" },
              { part: "b", reasoning: "$|\\vec a|=\\sqrt5$, $|\\vec b|=\\sqrt{10}$.", working: "\\sqrt5,\\sqrt{10}", marks: 1, markCode: "B" },
              { part: "c", reasoning: "$\\cos\\theta=\\frac{5}{\\sqrt5\\sqrt{10}}=\\frac{5}{\\sqrt{50}}=\\frac{5}{5\\sqrt2}=\\frac1{\\sqrt2}$.", working: "\\cos\\theta=\\frac1{\\sqrt2}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "$\\theta=45°$.", working: "45°", marks: 1, markCode: "A" },
              { part: "d", reasoning: "$(\\vec a+\\lambda\\vec b)\\cdot\\vec a=0$ → $(2+\\lambda)(2)+(1+3\\lambda)(1)=0$ → $4+2\\lambda+1+3\\lambda=0$ → $5\\lambda=-5$ → $\\lambda=-1$.", working: "\\lambda=-1", marks: 1, markCode: "M" },
              { part: "d", reasoning: "State the value.", working: "\\lambda=-1", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 5 (b) $\\sqrt5,\\sqrt{10}$ (c) 45° (d) $\\lambda=-1$",
            commonErrors: ["In (d), setting $\\vec a+\\lambda\\vec b=\\vec0$ instead of perpendicular to $\\vec a$."],
            examinerNote: "B1 for (a)-(b), M1 A1 for (c), M1 A1 for (d).",
          },
        },
        {
          id: "mypme5-u3-dot-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which statement is always true for vectors $\\vec a$ and $\\vec b$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\vec a\\cdot\\vec b=|\\vec a||\\vec b|$ always" },
              { id: "b", text: "$\\vec a\\cdot\\vec b$ is always positive" },
              { id: "c", text: "$|\\vec a\\cdot\\vec b|\\le|\\vec a||\\vec b|$ (Cauchy–Schwarz)" },
              { id: "d", text: "$\\vec a\\cdot\\vec b=0$ implies $\\vec a=\\vec0$ or $\\vec b=\\vec0$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Cauchy–Schwarz", statement: "$|\\vec a\\cdot\\vec b|\\le|\\vec a||\\vec b|$ with equality iff parallel." },
            ],
            steps: [
              { reasoning: "Cauchy–Schwarz bounds the dot product by the product of magnitudes.", working: "|a\\cdot b|\\le|a||b|", marks: 1, markCode: "M" },
              { reasoning: "Match option (a).", working: "a", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Cauchy–Schwarz inequality",
            commonErrors: ["Choosing (d): perpendicular nonzero vectors also give dot product 0."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypme5-u3-dot-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Two forces act on an object: $\\vec F_1=\\begin{pmatrix}30\\\\40\\end{pmatrix}$ N and $\\vec F_2=\\begin{pmatrix}-10\\\\20\\end{pmatrix}$ N. Find the magnitude of the resultant force.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$40\\sqrt{2}\\approx56.6$ N" },
              { id: "b", text: "$20\\sqrt{10}\\approx63.2$ N" },
              { id: "c", text: "80 N" },
              { id: "d", text: "$50\\sqrt{2}\\approx70.7$ N" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Resultant force", statement: "$\\vec F=\\begin{pmatrix}20\\\\60\\end{pmatrix}$; $|\\vec F|=\\sqrt{400+3600}=\\sqrt{4000}=20\\sqrt{10}\\approx63.2$ N." },
            ],
            steps: [
              { reasoning: "Add: $\\vec F=\\begin{pmatrix}20\\\\60\\end{pmatrix}$; magnitude $=\\sqrt{4000}$.", working: "\\sqrt{4000}", marks: 1, markCode: "M" },
              { reasoning: "$\\sqrt{4000}=20\\sqrt{10}\\approx63.25$ N.", working: "63.2", marks: 1, markCode: "M" },
              { reasoning: "Match option (a).", working: "a", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $20\\sqrt{10}\\approx63.2$ N",
            commonErrors: ["Adding magnitudes $50+22.4$ instead of vector sum."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypme5-u3-dot-q16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A square has vertices $O(0,0)$, $A(s,0)$, $B(s,s)$ and $C(0,s)$. Its diagonals are $OB$ and $AC$.",
          parts: [
            { label: "a", prompt: "Write down the direction vectors of the two diagonals.", marks: 2 },
            { label: "b", prompt: "Compute the dot product of the diagonal vectors.", marks: 1 },
            { label: "c", prompt: "Prove that the diagonals of a square are perpendicular.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Perpendicular test", statement: "Vectors perpendicular iff dot product $=0$." },
            ],
            steps: [
              { part: "a", reasoning: "$\\vec{OB}=\\begin{pmatrix}s\\\\s\\end{pmatrix}$; $\\vec{AC}=\\begin{pmatrix}-s\\\\s\\end{pmatrix}$ (from $A$ to $C$).", working: "(s,s),(-s,s)", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State both diagonal vectors.", working: "\\vec{OB},\\vec{AC}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$\\vec{OB}\\cdot\\vec{AC}=s(-s)+s(s)=-s^2+s^2=0$.", working: "0", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Since the dot product is 0, the diagonals are perpendicular. QED.", working: "\\therefore\\perp", marks: 1, markCode: "R" },
              { part: "c", reasoning: "State the conclusion clearly.", working: "\\text{perpendicular}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $\\vec{OB}=(s,s)$, $\\vec{AC}=(-s,s)$ (b) 0 (c) diagonals perpendicular",
            commonErrors: ["Using $\\vec{CA}$ instead of $\\vec{AC}$ — sign matters for dot product but result is same here."],
            examinerNote: "M1 A1 for (a), M1 for (b), R1 A1 for (c).",
          },
        },
      ],
    },
  ],
};
