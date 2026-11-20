import type { Lesson } from "../../../types.ts";

export const lesson33: Lesson = {
  id: "aahl-u3-lesson-3-3",
  code: "3-3",
  title: "Vector Product and Planes",
  goal: "I CAN use the vector product to find areas and normal vectors, and find equations of planes, intersections and angles involving planes.",
  standards: ["AHL 3.16", "AHL 3.17", "AHL 3.18"],
  vocabulary: [
    { term: "Vector product", definition: "$\\boldsymbol{a}\\times\\boldsymbol{b}=\\begin{pmatrix} a_2b_3-a_3b_2 \\\\ a_3b_1-a_1b_3 \\\\ a_1b_2-a_2b_1 \\end{pmatrix}$, a vector perpendicular to both $\\boldsymbol{a}$ and $\\boldsymbol{b}$ with magnitude $|\\boldsymbol{a}||\\boldsymbol{b}|\\sin\\theta$." },
    { term: "Normal vector", definition: "A vector perpendicular to every direction lying in a plane." },
    { term: "Cartesian equation of a plane", definition: "$ax+by+cz=d$, where $\\begin{pmatrix} a \\\\ b \\\\ c \\end{pmatrix}$ is a normal vector." },
    { term: "Vector equation of a plane", definition: "$\\boldsymbol{r}=\\boldsymbol{a}+\\lambda\\boldsymbol{b}+\\mu\\boldsymbol{c}$ with $\\boldsymbol{b},\\boldsymbol{c}$ non-parallel directions in the plane; or $\\boldsymbol{r}\\cdot\\boldsymbol{n}=\\boldsymbol{a}\\cdot\\boldsymbol{n}$." },
    { term: "Angle between a line and a plane", definition: "The complement of the angle between the line's direction $\\boldsymbol{d}$ and the normal $\\boldsymbol{n}$: $\\sin\\theta=\\frac{|\\boldsymbol{d}\\cdot\\boldsymbol{n}|}{|\\boldsymbol{d}||\\boldsymbol{n}|}$." },
    { term: "Angle between two planes", definition: "The acute angle between their normal vectors: $\\cos\\theta=\\frac{|\\boldsymbol{n}_1\\cdot\\boldsymbol{n}_2|}{|\\boldsymbol{n}_1||\\boldsymbol{n}_2|}$." },
  ],
  concepts: [
    {
      id: "aahl-u3-vector-product",
      title: "The vector product and areas",
      skill: "Compute vector products and use them to find perpendicular vectors and areas of triangles and parallelograms.",
      lesson: {
        sections: [
          {
            heading: "Calculating $\\boldsymbol{a}\\times\\boldsymbol{b}$",
            body: "The vector product is a vector, not a number. Its components follow the cross pattern in the definition above. Check by confirming that the result has zero scalar product with both $\\boldsymbol{a}$ and $\\boldsymbol{b}$. The order matters: $\\boldsymbol{b}\\times\\boldsymbol{a}=-\\boldsymbol{a}\\times\\boldsymbol{b}$, and $\\boldsymbol{a}\\times\\boldsymbol{b}=\\boldsymbol{0}$ exactly when $\\boldsymbol{a}$ and $\\boldsymbol{b}$ are parallel.",
          },
          {
            heading: "Areas",
            body: "The magnitude $|\\boldsymbol{a}\\times\\boldsymbol{b}|=|\\boldsymbol{a}||\\boldsymbol{b}|\\sin\\theta$ is the area of the parallelogram with adjacent sides $\\boldsymbol{a},\\boldsymbol{b}$. Triangle $ABC$ has area $\\frac12|\\overrightarrow{AB}\\times\\overrightarrow{AC}|$. Collinear points give area zero.",
          },
        ],
        keyFormulas: [
          { name: "Magnitude of the vector product", statement: "$|\\boldsymbol{a}\\times\\boldsymbol{b}|=|\\boldsymbol{a}||\\boldsymbol{b}|\\sin\\theta$" },
          { name: "Area of a triangle", statement: "$\\text{Area}=\\tfrac12|\\overrightarrow{AB}\\times\\overrightarrow{AC}|$" },
        ],
        workedExample: {
          problem: "Find $\\begin{pmatrix} 1 \\\\ 0 \\\\ 2 \\end{pmatrix}\\times\\begin{pmatrix} 3 \\\\ 1 \\\\ -1 \\end{pmatrix}$.",
          solution: "Components: $0(-1)-2(1)=-2$; $2(3)-1(-1)=7$; $1(1)-0(3)=1$. So the result is $\\begin{pmatrix} -2 \\\\ 7 \\\\ 1 \\end{pmatrix}$. Check: dot with the first vector $=-2+0+2=0$.",
        },
      },
      questions: [
        {
          id: "aahl-u3-cross-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Find $\\begin{pmatrix} 1 \\\\ 2 \\\\ 0 \\end{pmatrix}\\times\\begin{pmatrix} 0 \\\\ 1 \\\\ 3 \\end{pmatrix}$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\begin{pmatrix} 6 \\\\ -3 \\\\ 1 \\end{pmatrix}$" },
              { id: "b", text: "$\\begin{pmatrix} -6 \\\\ 3 \\\\ -1 \\end{pmatrix}$" },
              { id: "c", text: "$\\begin{pmatrix} 0 \\\\ 2 \\\\ 0 \\end{pmatrix}$" },
              { id: "d", text: "$\\begin{pmatrix} 6 \\\\ 3 \\\\ 1 \\end{pmatrix}$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Vector product", statement: "$\\boldsymbol{a}\\times\\boldsymbol{b}=(a_2b_3-a_3b_2,\\ a_3b_1-a_1b_3,\\ a_1b_2-a_2b_1)$." },
            ],
            steps: [
              { reasoning: "Compute the components: $2(3)-0(1)=6$, $0(0)-1(3)=-3$, $1(1)-2(0)=1$.", working: "\\begin{pmatrix} 6 \\\\ -3 \\\\ 1 \\end{pmatrix}", marks: 2, markCode: "A" },
            ],
            finalAnswer: "**(a)** $\\begin{pmatrix} 6 \\\\ -3 \\\\ 1 \\end{pmatrix}$",
            commonErrors: ["Reversing the order, giving option (b).", "Forgetting the sign change on the middle component."],
            examinerNote: "Award M1 for an attempt at the cross pattern and A1 for all three components.",
          },
        },
        {
          id: "aahl-u3-cross-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "The points $A(1,0,0)$, $B(0,2,0)$ and $C(0,0,3)$ form a triangle. Find the area of triangle $ABC$ as an exact value, then enter its numerical value to 3 significant figures.",
          response: { type: "numeric", parts: [{ label: "Area", answer: 3.5, tolerance: 0.005 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Area of a triangle", statement: "$\\text{Area}=\\frac12|\\overrightarrow{AB}\\times\\overrightarrow{AC}|$." },
            ],
            steps: [
              { reasoning: "Find two sides from $A$.", working: "\\overrightarrow{AB}=\\begin{pmatrix} -1 \\\\ 2 \\\\ 0 \\end{pmatrix},\\quad \\overrightarrow{AC}=\\begin{pmatrix} -1 \\\\ 0 \\\\ 3 \\end{pmatrix}", marks: 1, markCode: "A" },
              { reasoning: "Vector product: $(6-0,\\ 0+3,\\ 0+2)$.", working: "\\overrightarrow{AB}\\times\\overrightarrow{AC}=\\begin{pmatrix} 6 \\\\ 3 \\\\ 2 \\end{pmatrix}", marks: 1, markCode: "M" },
              { reasoning: "Half the magnitude: $\\sqrt{36+9+4}=7$.", working: "\\text{Area}=\\tfrac12(7)=3.5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\frac72=3.5$",
            commonErrors: ["Forgetting the factor $\\frac12$ (giving a parallelogram area of 7).", "Using position vectors $\\boldsymbol{a}\\times\\boldsymbol{b}$ rather than side vectors."],
          },
        },
        {
          id: "aahl-u3-cross-q3",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 4,
          stem: "Given $\\boldsymbol{a}=\\begin{pmatrix} 2 \\\\ 1 \\\\ -1 \\end{pmatrix}$ and $\\boldsymbol{b}=\\begin{pmatrix} 1 \\\\ -1 \\\\ 2 \\end{pmatrix}$, find a unit vector perpendicular to both $\\boldsymbol{a}$ and $\\boldsymbol{b}$ whose $z$-component is positive. Enter its $z$-component to 3 decimal places.",
          response: { type: "numeric", parts: [{ label: "$z$-component", answer: 0.507, tolerance: 0.0005 }] },
          markscheme: {
            principles: [
              { kind: "property", name: "Perpendicular vector", statement: "$\\boldsymbol{a}\\times\\boldsymbol{b}$ is perpendicular to both $\\boldsymbol{a}$ and $\\boldsymbol{b}$." },
            ],
            steps: [
              { reasoning: "Vector product: $(1(2)-(-1)(-1),\\ (-1)(1)-2(2),\\ 2(-1)-1(1))$.", working: "\\boldsymbol{a}\\times\\boldsymbol{b}=\\begin{pmatrix} 1 \\\\ -5 \\\\ -3 \\end{pmatrix}", marks: 2, markCode: "A" },
              { reasoning: "The $z$-component is negative, so use the opposite direction.", working: "-\\begin{pmatrix} 1 \\\\ -5 \\\\ -3 \\end{pmatrix}=\\begin{pmatrix} -1 \\\\ 5 \\\\ 3 \\end{pmatrix}", marks: 1, markCode: "M" },
              { reasoning: "Divide by the magnitude $\\sqrt{1+25+9}=\\sqrt{35}$; the $z$-component is $\\frac{3}{\\sqrt{35}}$.", working: "\\tfrac{3}{\\sqrt{35}}\\approx0.507", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Unit vector $\\frac1{\\sqrt{35}}\\begin{pmatrix} -1 \\\\ 5 \\\\ 3 \\end{pmatrix}$ with $z$-component $\\approx0.507$.",
            commonErrors: ["Not normalizing.", "Not changing the sign to satisfy the positive $z$-component condition."],
          },
        },
        {
          id: "aahl-u3-cross-q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 9,
          stem: "The points $A$, $B$, $C$ have coordinates $A(1,2,3)$, $B(3,1,0)$ and $C(2,4,2)$.",
          parts: [
            { label: "a", prompt: "Find $\\overrightarrow{AB}$ and $\\overrightarrow{AC}$.", marks: 1 },
            { label: "b", prompt: "Find $\\overrightarrow{AB}\\times\\overrightarrow{AC}$.", marks: 2 },
            { label: "c", prompt: "Hence find the area of triangle $ABC$, correct to 3 significant figures.", marks: 2 },
            { label: "d", prompt: "Find the coordinates of the point $D$ such that $ABDC$ is a parallelogram, and write down its area.", marks: 2 },
            { label: "e", prompt: "Find the shortest distance from $A$ to the line $BC$, correct to 3 significant figures.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Vector product area", statement: "Triangle area $=\\frac12|\\overrightarrow{AB}\\times\\overrightarrow{AC}|$; parallelogram area $=|\\overrightarrow{AB}\\times\\overrightarrow{AC}|$." },
              { kind: "principle", name: "Height from area", statement: "Area $=\\frac12\\times\\text{base}\\times\\text{height}$." },
            ],
            steps: [
              { part: "a", reasoning: "Subtract position vectors.", working: "\\overrightarrow{AB}=\\begin{pmatrix} 2 \\\\ -1 \\\\ -3 \\end{pmatrix},\\ \\overrightarrow{AC}=\\begin{pmatrix} 1 \\\\ 2 \\\\ -1 \\end{pmatrix}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Cross pattern: $(1+6,\\ -3+2,\\ 4+1)$.", working: "\\begin{pmatrix} 7 \\\\ -1 \\\\ 5 \\end{pmatrix}", marks: 2, markCode: "A" },
              { part: "c", reasoning: "Magnitude: $\\sqrt{49+1+25}=\\sqrt{75}$.", working: "|\\overrightarrow{AB}\\times\\overrightarrow{AC}|=\\sqrt{75}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Halve it.", working: "\\tfrac12\\sqrt{75}=4.33", marks: 1, markCode: "A" },
              { part: "d", reasoning: "$\\overrightarrow{AD}=\\overrightarrow{AB}+\\overrightarrow{AC}=\\begin{pmatrix} 3 \\\\ 1 \\\\ -4 \\end{pmatrix}$, so $D=(4,3,-1)$.", working: "D=(4,3,-1)", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Parallelogram area is the full magnitude.", working: "\\sqrt{75}=8.66", marks: 1, markCode: "A" },
              { part: "e", reasoning: "$\\overrightarrow{BC}=\\begin{pmatrix} -1 \\\\ 3 \\\\ 2 \\end{pmatrix}$ with $|\\overrightarrow{BC}|=\\sqrt{14}$. Use area $=\\frac12\\times BC\\times h$.", working: "h=\\frac{2\\times\\frac12\\sqrt{75}}{\\sqrt{14}}=\\frac{\\sqrt{75}}{\\sqrt{14}}", marks: 1, markCode: "M" },
              { part: "e", reasoning: "Evaluate.", working: "h=\\sqrt{\\tfrac{75}{14}}=2.31", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $(2,-1,-3)$, $(1,2,-1)$ (b) $(7,-1,5)$ (c) $4.33$ (d) $D=(4,3,-1)$, area $8.66$ (e) $2.31$",
            commonErrors: ["Forgetting the factor $\\frac12$ in (c).", "Using $AB$ as the base in (e) instead of $BC$."],
            examinerNote: "Check: $\\sqrt{75/14}=\\sqrt{5.357}=2.314$.",
          },
        },
        {
          id: "aahl-u3-cross-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Find $\\boldsymbol{a}\\times\\boldsymbol{b}$ where $\\boldsymbol{a}=\\begin{pmatrix} 1 \\\\ -1 \\\\ 2 \\end{pmatrix}$ and $\\boldsymbol{b}=\\begin{pmatrix} 2 \\\\ 1 \\\\ 0 \\end{pmatrix}$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\begin{pmatrix} -2 \\\\ 4 \\\\ 3 \\end{pmatrix}$" },
              { id: "b", text: "$\\begin{pmatrix} 2 \\\\ -4 \\\\ -3 \\end{pmatrix}$" },
              { id: "c", text: "$\\begin{pmatrix} -2 \\\\ -4 \\\\ 3 \\end{pmatrix}$" },
              { id: "d", text: "$\\begin{pmatrix} 2 \\\\ 4 \\\\ -3 \\end{pmatrix}$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Vector product", statement: "$\\boldsymbol{a}\\times\\boldsymbol{b}=(a_2b_3-a_3b_2,\\ a_3b_1-a_1b_3,\\ a_1b_2-a_2b_1)$." },
            ],
            steps: [
              { reasoning: "Compute the three components: $(-1)(0)-(2)(1)=-2$, $(2)(2)-(1)(0)=4$, $(1)(1)-(-1)(2)=3$.", working: "\\begin{pmatrix} -2 \\\\ 4 \\\\ 3 \\end{pmatrix}", marks: 1, markCode: "M" },
              { reasoning: "State the result.", working: "\\boldsymbol{a}\\times\\boldsymbol{b}=\\begin{pmatrix} -2 \\\\ 4 \\\\ 3 \\end{pmatrix}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $\\begin{pmatrix} -2 \\\\ 4 \\\\ 3 \\end{pmatrix}$",
            commonErrors: ["Reversing the order of the vectors (option b).", "A sign error in the middle component (option c)."],
          },
        },
        {
          id: "aahl-u3-cross-q6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 3,
          stem: "Find $\\boldsymbol{u}\\times\\boldsymbol{v}$ where $\\boldsymbol{u}=\\begin{pmatrix} 0 \\\\ 1 \\\\ 1 \\end{pmatrix}$ and $\\boldsymbol{v}=\\begin{pmatrix} 2 \\\\ -1 \\\\ 1 \\end{pmatrix}$.",
          response: {
            type: "numeric",
            parts: [
              { label: "$x$-component", answer: 2 },
              { label: "$y$-component", answer: 2 },
              { label: "$z$-component", answer: -2 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Vector product", statement: "$\\boldsymbol{a}\\times\\boldsymbol{b}=(a_2b_3-a_3b_2,\\ a_3b_1-a_1b_3,\\ a_1b_2-a_2b_1)$." },
            ],
            steps: [
              { reasoning: "$x$-component: $u_2v_3-u_3v_2$.", working: "1(1)-1(-1)=2", marks: 1, markCode: "M" },
              { reasoning: "$y$-component: $u_3v_1-u_1v_3$.", working: "1(2)-0(1)=2", marks: 1, markCode: "M" },
              { reasoning: "$z$-component: $u_1v_2-u_2v_1$.", working: "0(-1)-1(2)=-2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\boldsymbol{u}\\times\\boldsymbol{v}=\\begin{pmatrix} 2 \\\\ 2 \\\\ -2 \\end{pmatrix}$",
            commonErrors: ["Using $u_1v_3-u_3v_1$ for the $y$-component instead of $u_3v_1-u_1v_3$.", "Dropping the negative sign on the $z$-component."],
          },
        },
        {
          id: "aahl-u3-cross-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Let $\\boldsymbol{a}=\\begin{pmatrix} 1 \\\\ 2 \\\\ 0 \\end{pmatrix}$ and $\\boldsymbol{b}=\\begin{pmatrix} 0 \\\\ 1 \\\\ 3 \\end{pmatrix}$. Find $|\\boldsymbol{a}\\times\\boldsymbol{b}|$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\sqrt{46}$" },
              { id: "b", text: "$\\sqrt{26}$" },
              { id: "c", text: "$\\sqrt{20}$" },
              { id: "d", text: "$46$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Vector product and magnitude", statement: "$\\boldsymbol{a}\\times\\boldsymbol{b}$ then $|\\boldsymbol{v}|=\\sqrt{x^2+y^2+z^2}$." },
            ],
            steps: [
              { reasoning: "$\\boldsymbol{a}\\times\\boldsymbol{b}=(2(3)-0(1),\\ 0(0)-1(3),\\ 1(1)-2(0))=(6,-3,1)$.", working: "\\boldsymbol{a}\\times\\boldsymbol{b}=\\begin{pmatrix} 6 \\\\ -3 \\\\ 1 \\end{pmatrix}", marks: 1, markCode: "M" },
              { reasoning: "Find the magnitude.", working: "\\sqrt{36+9+1}=\\sqrt{46}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $\\sqrt{46}$",
            commonErrors: ["Computing $36-9-1$ instead of $36+9+1$ (option b).", "Adding components without squaring (option c).", "Forgetting the square root (option d)."],
          },
        },
        {
          id: "aahl-u3-cross-q8",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "The points $A(2,1,0)$, $B(4,0,2)$ and $C(1,3,1)$ form a triangle. Find the area of triangle $ABC$, correct to 3 significant figures.",
          response: { type: "numeric", parts: [{ label: "Area", answer: 3.536, tolerance: 0.001 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Area of a triangle", statement: "$\\text{Area}=\\frac12|\\overrightarrow{AB}\\times\\overrightarrow{AC}|$." },
            ],
            steps: [
              { reasoning: "Find two sides from $A$.", working: "\\overrightarrow{AB}=\\begin{pmatrix} 2 \\\\ -1 \\\\ 2 \\end{pmatrix},\\quad \\overrightarrow{AC}=\\begin{pmatrix} -1 \\\\ 2 \\\\ 1 \\end{pmatrix}", marks: 1, markCode: "A" },
              { reasoning: "Vector product: $(-1-4,\\ -2-2,\\ 4-1)$.", working: "\\overrightarrow{AB}\\times\\overrightarrow{AC}=\\begin{pmatrix} -5 \\\\ -4 \\\\ 3 \\end{pmatrix}", marks: 1, markCode: "A" },
              { reasoning: "Magnitude: $\\sqrt{25+16+9}=\\sqrt{50}=5\\sqrt2$.", working: "|\\overrightarrow{AB}\\times\\overrightarrow{AC}|=\\sqrt{50}", marks: 1, markCode: "M" },
              { reasoning: "Halve it.", working: "\\tfrac12\\sqrt{50}=3.54", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$3.54$ (exactly $\\frac{5\\sqrt2}{2}$)",
            commonErrors: ["Forgetting the factor $\\frac12$ (parallelogram area of $7.07$).", "Using position vectors instead of side vectors in the product."],
          },
        },
        {
          id: "aahl-u3-cross-q9",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Given $\\boldsymbol{a}=\\begin{pmatrix} 2 \\\\ k \\\\ 1 \\end{pmatrix}$ and $\\boldsymbol{b}=\\begin{pmatrix} 1 \\\\ -1 \\\\ 3 \\end{pmatrix}$, find the value of $k$ for which the $z$-component of $\\boldsymbol{a}\\times\\boldsymbol{b}$ is $5$.",
          response: { type: "numeric", parts: [{ label: "$k$", answer: -7 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Vector product component", statement: "The $z$-component of $\\boldsymbol{a}\\times\\boldsymbol{b}$ is $a_1b_2-a_2b_1$." },
            ],
            steps: [
              { reasoning: "Write the $z$-component in terms of $k$.", working: "a_1b_2-a_2b_1=2(-1)-k(1)=-2-k", marks: 1, markCode: "M" },
              { reasoning: "Set it equal to $5$.", working: "-2-k=5", marks: 1, markCode: "M" },
              { reasoning: "Solve for $k$.", working: "k=-7", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$k=-7$",
            commonErrors: ["Using $a_2b_1-a_1b_2$ and obtaining $k=3$.", "Sign error giving $k=-3$."],
            examinerNote: "Check: $\\boldsymbol{a}\\times\\boldsymbol{b}=\\begin{pmatrix} 3k+1 \\\\ -5 \\\\ -2-k \\end{pmatrix}$, whose $z$-component is $5$ when $k=-7$.",
          },
        },
        {
          id: "aahl-u3-cross-q10",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Which vector is perpendicular to both $\\boldsymbol{a}=\\begin{pmatrix} 1 \\\\ 0 \\\\ 1 \\end{pmatrix}$ and $\\boldsymbol{b}=\\begin{pmatrix} 0 \\\\ 1 \\\\ 1 \\end{pmatrix}$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\begin{pmatrix} -1 \\\\ -1 \\\\ 1 \\end{pmatrix}$" },
              { id: "b", text: "$\\begin{pmatrix} 1 \\\\ 1 \\\\ 1 \\end{pmatrix}$" },
              { id: "c", text: "$\\begin{pmatrix} 1 \\\\ -1 \\\\ 0 \\end{pmatrix}$" },
              { id: "d", text: "$\\begin{pmatrix} 0 \\\\ 0 \\\\ 1 \\end{pmatrix}$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Perpendicular vector", statement: "$\\boldsymbol{a}\\times\\boldsymbol{b}$ is perpendicular to both $\\boldsymbol{a}$ and $\\boldsymbol{b}$." },
            ],
            steps: [
              { reasoning: "Compute the vector product.", working: "\\boldsymbol{a}\\times\\boldsymbol{b}=\\begin{pmatrix} 0(1)-1(1) \\\\ 1(0)-1(1) \\\\ 1(1)-0(0) \\end{pmatrix}=\\begin{pmatrix} -1 \\\\ -1 \\\\ 1 \\end{pmatrix}", marks: 1, markCode: "M" },
              { reasoning: "Confirm it is one of the choices; the result is perpendicular to both vectors.", working: "\\boldsymbol{a}\\cdot(-1,-1,1)=-1-0+1=0,\\quad \\boldsymbol{b}\\cdot(-1,-1,1)=0-1+1=0", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $\\begin{pmatrix} -1 \\\\ -1 \\\\ 1 \\end{pmatrix}$",
            commonErrors: ["Choosing a vector that is perpendicular to only one of $\\boldsymbol{a}$ and $\\boldsymbol{b}$."],
          },
        },
        {
          id: "aahl-u3-cross-q11",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Let $\\boldsymbol{a}=\\begin{pmatrix} 1 \\\\ -2 \\\\ 2 \\end{pmatrix}$ and $\\boldsymbol{b}=\\begin{pmatrix} 3 \\\\ 1 \\\\ -1 \\end{pmatrix}$. Find the area of the parallelogram with adjacent sides $\\boldsymbol{a}$ and $\\boldsymbol{b}$, correct to 3 decimal places.",
          response: { type: "numeric", parts: [{ label: "Area", answer: 9.899, tolerance: 0.001 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Parallelogram area", statement: "$\\text{Area}=|\\boldsymbol{a}\\times\\boldsymbol{b}|=|\\boldsymbol{a}||\\boldsymbol{b}|\\sin\\theta$." },
            ],
            steps: [
              { reasoning: "$x$-component: $(-2)(-1)-(2)(1)=2-2=0$.", working: "a_2b_3-a_3b_2=0", marks: 1, markCode: "M" },
              { reasoning: "$y$- and $z$-components: $(2)(3)-(1)(-1)=7$ and $(1)(1)-(-2)(3)=7$.", working: "\\boldsymbol{a}\\times\\boldsymbol{b}=\\begin{pmatrix} 0 \\\\ 7 \\\\ 7 \\end{pmatrix}", marks: 1, markCode: "M" },
              { reasoning: "Magnitude: $\\sqrt{0+49+49}=\\sqrt{98}=7\\sqrt2$.", working: "|\\boldsymbol{a}\\times\\boldsymbol{b}|=\\sqrt{98}", marks: 1, markCode: "M" },
              { reasoning: "State the area to 3 decimal places.", working: "7\\sqrt2=9.899", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$9.899$ (exactly $7\\sqrt2$)",
            commonErrors: ["Halving the magnitude (that gives a triangle area).", "Sign error in the $z$-component giving $\\sqrt{18}$ instead of $\\sqrt{98}$."],
          },
        },
        {
          id: "aahl-u3-cross-q12",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 7,
          stem: "Let $\\boldsymbol{a}=\\begin{pmatrix} 2 \\\\ 1 \\\\ -1 \\end{pmatrix}$ and $\\boldsymbol{b}=\\begin{pmatrix} 1 \\\\ 3 \\\\ 1 \\end{pmatrix}$.",
          parts: [
            { label: "a", prompt: "Find $\\boldsymbol{a}\\times\\boldsymbol{b}$.", marks: 2 },
            { label: "b", prompt: "Find a unit vector perpendicular to both $\\boldsymbol{a}$ and $\\boldsymbol{b}$.", marks: 2 },
            { label: "c", prompt: "Find the area of the parallelogram with adjacent sides $\\boldsymbol{a}$ and $\\boldsymbol{b}$.", marks: 2 },
            { label: "d", prompt: "Verify that your answer to (b) has zero scalar product with both $\\boldsymbol{a}$ and $\\boldsymbol{b}$.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Vector product", statement: "$\\boldsymbol{a}\\times\\boldsymbol{b}=(a_2b_3-a_3b_2,\\ a_3b_1-a_1b_3,\\ a_1b_2-a_2b_1)$." },
              { kind: "formula", name: "Unit vector", statement: "$\\frac{\\boldsymbol{v}}{|\\boldsymbol{v}|}$." },
              { kind: "formula", name: "Parallelogram area", statement: "$\\text{Area}=|\\boldsymbol{a}\\times\\boldsymbol{b}|$." },
            ],
            steps: [
              { part: "a", reasoning: "Apply the cross pattern.", working: "\\boldsymbol{a}\\times\\boldsymbol{b}=\\begin{pmatrix} 1(1)-(-1)(3) \\\\ (-1)(1)-2(1) \\\\ 2(3)-1(1) \\end{pmatrix}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the components.", working: "\\begin{pmatrix} 4 \\\\ -3 \\\\ 5 \\end{pmatrix}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Magnitude of the product: $\\sqrt{16+9+25}=\\sqrt{50}=5\\sqrt2$.", working: "|\\boldsymbol{a}\\times\\boldsymbol{b}|=\\sqrt{50}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Divide each component.", working: "\\hat{\\boldsymbol{n}}=\\tfrac{1}{5\\sqrt2}\\begin{pmatrix} 4 \\\\ -3 \\\\ 5 \\end{pmatrix}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "The area equals the magnitude of the vector product.", working: "\\text{Area}=|\\boldsymbol{a}\\times\\boldsymbol{b}|=5\\sqrt2", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate.", working: "5\\sqrt2=7.07", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Both scalar products vanish: $\\boldsymbol{a}\\cdot\\hat{\\boldsymbol{n}}=\\tfrac{8-3-5}{5\\sqrt2}=0$ and $\\boldsymbol{b}\\cdot\\hat{\\boldsymbol{n}}=\\tfrac{4-9+5}{5\\sqrt2}=0$.", working: "\\boldsymbol{a}\\cdot\\hat{\\boldsymbol{n}}=\\boldsymbol{b}\\cdot\\hat{\\boldsymbol{n}}=0\\quad\\text{(AG)}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $\\begin{pmatrix} 4 \\\\ -3 \\\\ 5 \\end{pmatrix}$ (b) $\\frac{1}{5\\sqrt2}\\begin{pmatrix} 4 \\\\ -3 \\\\ 5 \\end{pmatrix}$ (c) $5\\sqrt2\\approx7.07$ (d) verified",
            commonErrors: ["Forgetting to normalize in (b).", "Using the scalar product instead of the vector product in (a)."],
            examinerNote: "Check: $\\frac{4}{5\\sqrt2}=\\frac{2\\sqrt2}{5}$, $\\frac{-3}{5\\sqrt2}=\\frac{-3\\sqrt2}{10}$, $\\frac{5}{5\\sqrt2}=\\frac{\\sqrt2}{2}$.",
          },
        },
        {
          id: "aahl-u3-cross-q13",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "For non-zero vectors $\\boldsymbol{u}$ and $\\boldsymbol{v}$, $\\boldsymbol{u}\\times\\boldsymbol{v}=\\boldsymbol{0}$ implies that $\\boldsymbol{u}$ and $\\boldsymbol{v}$ are...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "parallel" },
              { id: "b", text: "perpendicular" },
              { id: "c", text: "equal in length" },
              { id: "d", text: "both the zero vector" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Zero vector product", statement: "$\\boldsymbol{u}\\times\\boldsymbol{v}=\\boldsymbol{0}$ if and only if $\\boldsymbol{u}$ and $\\boldsymbol{v}$ are parallel (or one is zero)." },
            ],
            steps: [
              { reasoning: "The magnitude $|\\boldsymbol{u}\\times\\boldsymbol{v}|=|\\boldsymbol{u}||\\boldsymbol{v}|\\sin\\theta$ vanishes only when $\\sin\\theta=0$.", working: "\\theta=0^\\circ\\ \\text{or}\\ 180^\\circ", marks: 1, markCode: "M" },
              { reasoning: "Vectors at $0^\\circ$ or $180^\\circ$ to each other are parallel.", working: "\\boldsymbol{u}=k\\boldsymbol{v}\\ \\text{for some scalar}\\ k", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** parallel",
            commonErrors: ["Choosing perpendicular: that condition is $\\boldsymbol{u}\\cdot\\boldsymbol{v}=0$, not $\\boldsymbol{u}\\times\\boldsymbol{v}=\\boldsymbol{0}$.", "Ignoring the non-zero hypothesis in (d)."],
          },
        },
        {
          id: "aahl-u3-cross-q14",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 8,
          stem: "This question concerns the identity $|\\boldsymbol{a}\\times\\boldsymbol{b}|^2+(\\boldsymbol{a}\\cdot\\boldsymbol{b})^2=|\\boldsymbol{a}|^2|\\boldsymbol{b}|^2$ for vectors in three dimensions.",
          parts: [
            { label: "a", prompt: "Verify the identity for $\\boldsymbol{a}=\\begin{pmatrix} 1 \\\\ 0 \\\\ 1 \\end{pmatrix}$ and $\\boldsymbol{b}=\\begin{pmatrix} 0 \\\\ 2 \\\\ -1 \\end{pmatrix}$.", marks: 4 },
            { label: "b", prompt: "Prove that the identity holds for all vectors $\\boldsymbol{a}$ and $\\boldsymbol{b}$ in three dimensions.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Scalar product", statement: "$\\boldsymbol{a}\\cdot\\boldsymbol{b}=a_1b_1+a_2b_2+a_3b_3$ and $|\\boldsymbol{a}|^2=\\boldsymbol{a}\\cdot\\boldsymbol{a}$." },
              { kind: "formula", name: "Vector product", statement: "$\\boldsymbol{a}\\times\\boldsymbol{b}=(a_2b_3-a_3b_2,\\ a_3b_1-a_1b_3,\\ a_1b_2-a_2b_1)$." },
            ],
            steps: [
              { part: "a", reasoning: "Scalar product: $0+0-1=-1$, so $(\\boldsymbol{a}\\cdot\\boldsymbol{b})^2=1$.", working: "\\boldsymbol{a}\\cdot\\boldsymbol{b}=-1", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Vector product: $(-2, 1, 2)$, magnitude $\\sqrt{4+1+4}=3$, so $|\\boldsymbol{a}\\times\\boldsymbol{b}|^2=9$.", working: "\\boldsymbol{a}\\times\\boldsymbol{b}=\\begin{pmatrix} -2 \\\\ 1 \\\\ 2 \\end{pmatrix},\\quad |\\boldsymbol{a}\\times\\boldsymbol{b}|^2=9", marks: 1, markCode: "A" },
              { part: "a", reasoning: "$|\\boldsymbol{a}|^2=1+0+1=2$ and $|\\boldsymbol{b}|^2=0+4+1=5$.", working: "|\\boldsymbol{a}|^2|\\boldsymbol{b}|^2=10", marks: 1, markCode: "M" },
              { part: "a", reasoning: "$9+1=10$, so the identity holds for this pair.", working: "9+1=10\\quad\\text{(AG)}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Write $|\\boldsymbol{a}\\times\\boldsymbol{b}|^2$ as the sum of the three squared components and expand each.", working: "(a_2b_3-a_3b_2)^2+(a_3b_1-a_1b_3)^2+(a_1b_2-a_2b_1)^2", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Write $(\\boldsymbol{a}\\cdot\\boldsymbol{b})^2$ expanded as $(a_1b_1+a_2b_2+a_3b_3)^2$.", working: "(a_1b_1+a_2b_2+a_3b_3)^2", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Subtract: every mixed term in $(\\boldsymbol{a}\\cdot\\boldsymbol{b})^2$ cancels a corresponding term in $|\\boldsymbol{a}\\times\\boldsymbol{b}|^2$, leaving $\\sum a_i^2b_j^2$ for $i\\ne j$.", working: "|\\boldsymbol{a}\\times\\boldsymbol{b}|^2-(\\boldsymbol{a}\\cdot\\boldsymbol{b})^2=a_1^2b_2^2+a_1^2b_3^2+a_2^2b_1^2+a_2^2b_3^2+a_3^2b_1^2+a_3^2b_2^2", marks: 1, markCode: "M" },
              { part: "b", reasoning: "This equals $(a_1^2+a_2^2+a_3^2)(b_1^2+b_2^2+b_3^2)=|\\boldsymbol{a}|^2|\\boldsymbol{b}|^2$.", working: "=|\\boldsymbol{a}|^2|\\boldsymbol{b}|^2\\quad\\text{(AG)}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) verified: $9+1=10$ (b) proved",
            commonErrors: ["Forgetting the square on the scalar product.", "Dropping the cross terms when expanding $(\\boldsymbol{a}\\cdot\\boldsymbol{b})^2$."],
            examinerNote: "Equivalently $|\\boldsymbol{a}\\times\\boldsymbol{b}|^2=|\\boldsymbol{a}|^2|\\boldsymbol{b}|^2\\sin^2\\theta$, consistent with $|\\boldsymbol{a}\\times\\boldsymbol{b}|=|\\boldsymbol{a}||\\boldsymbol{b}|\\sin\\theta$.",
          },
        },
        {
          id: "aahl-u3-cross-q15",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "The points $A(0,1,2)$, $B(3,0,1)$ and $C(1,2,0)$ form a triangle. Find the area of triangle $ABC$ correct to 3 significant figures.",
          response: { type: "numeric", parts: [{ label: "Area", answer: 3.54, tolerance: 0.005 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Area of a triangle", statement: "$\\text{Area}=\\frac12|\\overrightarrow{AB}\\times\\overrightarrow{AC}|$." },
            ],
            steps: [
              { reasoning: "Find two sides from $A$.", working: "\\overrightarrow{AB}=\\begin{pmatrix} 3 \\\\ -1 \\\\ -1 \\end{pmatrix},\\quad \\overrightarrow{AC}=\\begin{pmatrix} 1 \\\\ 1 \\\\ -2 \\end{pmatrix}", marks: 1, markCode: "A" },
              { reasoning: "Vector product: $(2+1,\\ -1+6,\\ 3+1)$.", working: "\\overrightarrow{AB}\\times\\overrightarrow{AC}=\\begin{pmatrix} 3 \\\\ 5 \\\\ 4 \\end{pmatrix}", marks: 1, markCode: "A" },
              { reasoning: "Halve the magnitude: $\\frac12\\sqrt{9+25+16}=\\frac12\\sqrt{50}\\approx3.54$.", working: "\\tfrac12\\sqrt{50}=3.54", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$3.54$ (exactly $\\frac{5\\sqrt2}{2}$)",
            commonErrors: ["Forgetting the factor $\\frac12$.", "Using $\\overrightarrow{BA}$ and $\\overrightarrow{BC}$ from a different vertex without adjusting."],
          },
        },
        {
          id: "aahl-u3-cross-q16",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Vectors $\\boldsymbol{a}$ and $\\boldsymbol{b}$ are perpendicular with $|\\boldsymbol{a}|=5$ and $|\\boldsymbol{b}|=3$. Find $|\\boldsymbol{a}\\times\\boldsymbol{b}|$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$15$" },
              { id: "b", text: "$2$" },
              { id: "c", text: "$\\sqrt{34}$" },
              { id: "d", text: "$8$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Magnitude of the vector product", statement: "$|\\boldsymbol{a}\\times\\boldsymbol{b}|=|\\boldsymbol{a}||\\boldsymbol{b}|\\sin\\theta$ with $\\theta=90^\\circ$." },
            ],
            steps: [
              { reasoning: "Perpendicular vectors have $\\theta=90^\\circ$, so $\\sin\\theta=1$.", working: "|\\boldsymbol{a}\\times\\boldsymbol{b}|=5\\times3\\times1", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "15", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $15$",
            commonErrors: ["Subtracting the magnitudes ($5-3=2$, option b).", "Using the scalar product formula $|\\boldsymbol{a}||\\boldsymbol{b}|\\cos\\theta$ which gives $0$ here."],
          },
        },
      ],
    },
    {
      id: "aahl-u3-planes",
      title: "Planes, intersections and angles",
      skill: "Find equations of planes, intersections of lines and planes, and angles between lines and planes and between planes.",
      lesson: {
        sections: [
          {
            heading: "Equations of a plane",
            body: "A plane through $A$ with normal $\\boldsymbol{n}$ is $\\boldsymbol{r}\\cdot\\boldsymbol{n}=\\boldsymbol{a}\\cdot\\boldsymbol{n}$, which gives the Cartesian form $ax+by+cz=d$. Given three points, form two directions in the plane, find the normal as their vector product, and then find $d$ by substituting one of the points. The vector equation is $\\boldsymbol{r}=\\boldsymbol{a}+\\lambda\\boldsymbol{b}+\\mu\\boldsymbol{c}$.",
          },
          {
            heading: "Intersections and angles",
            body: "To intersect a line with a plane, substitute the line's parametric equations into the plane equation and solve for the parameter. If the coefficient of the parameter is $0$ the line is parallel to the plane: no intersection, or the line lies in the plane. The angle between a line and a plane is $\\theta$ with $\\sin\\theta=\\frac{|\\boldsymbol{d}\\cdot\\boldsymbol{n}|}{|\\boldsymbol{d}||\\boldsymbol{n}|}$; the angle between two planes is the acute angle between their normals.",
          },
        ],
        keyFormulas: [
          { name: "Plane equation", statement: "$\\boldsymbol{r}\\cdot\\boldsymbol{n}=\\boldsymbol{a}\\cdot\\boldsymbol{n}$, i.e. $ax+by+cz=d$" },
          { name: "Line-plane angle", statement: "$\\sin\\theta=\\frac{|\\boldsymbol{d}\\cdot\\boldsymbol{n}|}{|\\boldsymbol{d}||\\boldsymbol{n}|}$" },
          { name: "Plane-plane angle", statement: "$\\cos\\theta=\\frac{|\\boldsymbol{n}_1\\cdot\\boldsymbol{n}_2|}{|\\boldsymbol{n}_1||\\boldsymbol{n}_2|}$" },
        ],
        workedExample: {
          problem: "Find the Cartesian equation of the plane through $(1,2,3)$ with normal $\\begin{pmatrix} 2 \\\\ -1 \\\\ 1 \\end{pmatrix}$.",
          solution: "$d=\\boldsymbol{a}\\cdot\\boldsymbol{n}=2-2+3=3$, so the plane is $2x-y+z=3$.",
        },
      },
      questions: [
        {
          id: "aahl-u3-planes-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A plane passes through the point $(2,-1,4)$ and has normal vector $\\begin{pmatrix} 1 \\\\ 3 \\\\ -2 \\end{pmatrix}$. Which is its Cartesian equation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x+3y-2z=-9$" },
              { id: "b", text: "$x+3y-2z=9$" },
              { id: "c", text: "$2x-y+4z=-9$" },
              { id: "d", text: "$x+3y-2z=5$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Plane equation", statement: "$\\boldsymbol{r}\\cdot\\boldsymbol{n}=\\boldsymbol{a}\\cdot\\boldsymbol{n}$." },
            ],
            steps: [
              { reasoning: "Compute $d=\\boldsymbol{a}\\cdot\\boldsymbol{n}$.", working: "2-3-8=-9", marks: 1, markCode: "M" },
              { reasoning: "Write the equation using the normal's components as coefficients.", working: "x+3y-2z=-9", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $x+3y-2z=-9$",
            commonErrors: ["Using the point's coordinates as the coefficients (option c).", "Sign error in $-2(4)=-8$."],
          },
        },
        {
          id: "aahl-u3-planes-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "The line $L$ has equation $\\boldsymbol{r}=\\begin{pmatrix} 1 \\\\ 0 \\\\ -1 \\end{pmatrix}+\\lambda\\begin{pmatrix} 2 \\\\ 1 \\\\ 1 \\end{pmatrix}$ and the plane $\\Pi$ has equation $x+2y-z=8$. Find the coordinates of the point where $L$ meets $\\Pi$.",
          response: { type: "numeric", parts: [{ label: "$x$", answer: 5 }, { label: "$y$", answer: 2 }, { label: "$z$", answer: 1 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Line-plane intersection", statement: "Substitute the parametric form of the line into the plane equation." },
            ],
            steps: [
              { reasoning: "Write the line parametrically.", working: "x=1+2\\lambda,\\ y=\\lambda,\\ z=-1+\\lambda", marks: 1, markCode: "M" },
              { reasoning: "Substitute into the plane.", working: "(1+2\\lambda)+2\\lambda-(-1+\\lambda)=8\\Rightarrow3\\lambda+2=8", marks: 1, markCode: "A" },
              { reasoning: "Solve.", working: "\\lambda=2", marks: 1, markCode: "A" },
              { reasoning: "Substitute back to find the point.", working: "(5,2,1)", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$(5,2,1)$",
            commonErrors: ["Sign error: $-(-1+\\lambda)=1-\\lambda$.", "Substituting only into one coordinate."],
            examinerNote: "Check: $5+4-1=8$.",
          },
        },
        {
          id: "aahl-u3-planes-q3",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 5,
          stem: "The points $A(1,0,0)$, $B(0,1,0)$ and $C(0,0,2)$ lie on a plane $\\Pi$. Find the Cartesian equation of $\\Pi$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Normal from the vector product", statement: "The normal to the plane is $\\overrightarrow{AB}\\times\\overrightarrow{AC}$." },
            ],
            steps: [
              { reasoning: "Find two directions in the plane.", working: "\\overrightarrow{AB}=\\begin{pmatrix} -1 \\\\ 1 \\\\ 0 \\end{pmatrix},\\quad \\overrightarrow{AC}=\\begin{pmatrix} -1 \\\\ 0 \\\\ 2 \\end{pmatrix}", marks: 1, markCode: "A" },
              { reasoning: "The normal is their vector product.", working: "\\boldsymbol{n}=\\begin{pmatrix} 2 \\\\ 2 \\\\ 1 \\end{pmatrix}", marks: 2, markCode: "M" },
              { reasoning: "Find $d$ using point $A$.", working: "d=\\boldsymbol{a}\\cdot\\boldsymbol{n}=2", marks: 1, markCode: "M" },
              { reasoning: "State the equation.", working: "2x+2y+z=2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2x+2y+z=2$",
            commonErrors: ["Using position vectors instead of side vectors in the product.", "Forgetting to check all three points satisfy the equation."],
            examinerNote: "Check: $B$: $2$; $C$: $2$; $A$: $2$.",
          },
        },
        {
          id: "aahl-u3-planes-q4",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 12,
          stem: "The plane $\\Pi_1$ has equation $x+2y+2z=6$ and the plane $\\Pi_2$ has equation $2x-y+2z=6$. This question investigates their line of intersection and how the angle between planes can be generalized.",
          parts: [
            { label: "a", prompt: "Find the acute angle between $\\Pi_1$ and $\\Pi_2$, in degrees to 3 significant figures.", marks: 3 },
            { label: "b", prompt: "Find the direction vector of the line of intersection $L$ of $\\Pi_1$ and $\\Pi_2$.", marks: 2 },
            { label: "c", prompt: "Show that the point $(0,0,3)$ lies on both planes, and hence write down a vector equation of $L$.", marks: 2 },
            { label: "d", prompt: "Find the acute angle between $L$ and the plane $x+y=0$, in degrees to 3 significant figures.", marks: 3 },
            { label: "e", prompt: "Show that for any two planes with normals $\\boldsymbol{n}_1,\\boldsymbol{n}_2$ the direction of their line of intersection is perpendicular to both normals, and explain why this makes it parallel to $\\boldsymbol{n}_1\\times\\boldsymbol{n}_2$.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Angle between planes", statement: "$\\cos\\theta=\\frac{|\\boldsymbol{n}_1\\cdot\\boldsymbol{n}_2|}{|\\boldsymbol{n}_1||\\boldsymbol{n}_2|}$." },
              { kind: "formula", name: "Angle between a line and a plane", statement: "$\\sin\\theta=\\frac{|\\boldsymbol{d}\\cdot\\boldsymbol{n}|}{|\\boldsymbol{d}||\\boldsymbol{n}|}$." },
              { kind: "property", name: "Vector product", statement: "$\\boldsymbol{n}_1\\times\\boldsymbol{n}_2$ is perpendicular to both $\\boldsymbol{n}_1$ and $\\boldsymbol{n}_2$." },
            ],
            steps: [
              { part: "a", reasoning: "Normals $\\boldsymbol{n}_1=(1,2,2)$, $\\boldsymbol{n}_2=(2,-1,2)$; compute the scalar product and magnitudes.", working: "\\boldsymbol{n}_1\\cdot\\boldsymbol{n}_2=2-2+4=4,\\quad |\\boldsymbol{n}_1|=|\\boldsymbol{n}_2|=3", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Apply the formula.", working: "\\cos\\theta=\\frac49", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate.", working: "\\theta=63.6^\\circ", marks: 1, markCode: "A" },
              { part: "b", reasoning: "The direction is perpendicular to both normals, so use the vector product.", working: "\\boldsymbol{n}_1\\times\\boldsymbol{n}_2", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Compute: $(2\\cdot2-2\\cdot(-1),\\ 2\\cdot2-1\\cdot2,\\ 1\\cdot(-1)-2\\cdot2)$.", working: "\\begin{pmatrix} 6 \\\\ 2 \\\\ -5 \\end{pmatrix}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Substitute $(0,0,3)$ into both equations.", working: "0+0+6=6;\\quad 0-0+6=6\\quad\\text{(AG)}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Use this point and the direction from (b).", working: "\\boldsymbol{r}=\\begin{pmatrix} 0 \\\\ 0 \\\\ 3 \\end{pmatrix}+\\lambda\\begin{pmatrix} 6 \\\\ 2 \\\\ -5 \\end{pmatrix}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "The plane $x+y=0$ has normal $(1,1,0)$. Compute $\\boldsymbol{d}\\cdot\\boldsymbol{n}=6+2=8$, $|\\boldsymbol{d}|=\\sqrt{65}$, $|\\boldsymbol{n}|=\\sqrt2$.", working: "\\sin\\theta=\\frac{8}{\\sqrt{65}\\sqrt2}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Evaluate the ratio $\\frac{8}{\\sqrt{130}}=0.7016$.", working: "\\sin\\theta=0.7016", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Take the inverse sine.", working: "\\theta=44.6^\\circ", marks: 1, markCode: "A" },
              { part: "e", reasoning: "The line lies in both planes so its direction is perpendicular to each normal.", marks: 1, markCode: "R" },
              { part: "e", reasoning: "In three dimensions all vectors perpendicular to two non-parallel vectors are parallel to each other, and $\\boldsymbol{n}_1\\times\\boldsymbol{n}_2$ is one such vector.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $63.6^\\circ$ (b) $\\begin{pmatrix} 6 \\\\ 2 \\\\ -5 \\end{pmatrix}$ (c) see working (d) $44.6^\\circ$ (e) proved",
            commonErrors: ["Using $\\cos$ rather than $\\sin$ for the line-plane angle.", "Taking the normal of one plane as the line's direction."],
          },
        },
        {
          id: "aahl-u3-planes-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A plane passes through the point $(1,0,-2)$ and has normal vector $\\begin{pmatrix} 2 \\\\ 1 \\\\ -3 \\end{pmatrix}$. Which is its Cartesian equation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$2x+y-3z=8$" },
              { id: "b", text: "$2x+y-3z=-8$" },
              { id: "c", text: "$x-2z=5$" },
              { id: "d", text: "$2x+y-3z=6$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Plane equation", statement: "$\\boldsymbol{r}\\cdot\\boldsymbol{n}=\\boldsymbol{a}\\cdot\\boldsymbol{n}$, i.e. $ax+by+cz=d$." },
            ],
            steps: [
              { reasoning: "Compute $d=\\boldsymbol{a}\\cdot\\boldsymbol{n}=2(1)+1(0)+(-3)(-2)$.", working: "d=2+0+6=8", marks: 1, markCode: "M" },
              { reasoning: "Write the equation using the normal's components as coefficients.", working: "2x+y-3z=8", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $2x+y-3z=8$",
            commonErrors: ["Sign error: $(-3)(-2)=+6$, not $-6$ (options b and d).", "Using the point's coordinates as the coefficients (option c)."],
          },
        },
        {
          id: "aahl-u3-planes-q6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The plane $\\Pi$ has equation $2x-y+z=4$. Find the value of $x$ for which the point $(x,1,2)$ lies on $\\Pi$.",
          response: { type: "numeric", parts: [{ label: "$x$", answer: 1.5 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Point on a plane", statement: "A point lies on $ax+by+cz=d$ when its coordinates satisfy the equation." },
            ],
            steps: [
              { reasoning: "Substitute the coordinates into the plane equation.", working: "2x-1+2=4", marks: 1, markCode: "M" },
              { reasoning: "Solve for $x$.", working: "2x=3\\Rightarrow x=1.5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x=1.5$",
            commonErrors: ["Substituting $y=2$ and $z=1$ (swapped coordinates).", "Sign error in $-y=-1$."],
          },
        },
        {
          id: "aahl-u3-planes-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Find the acute angle between the planes $x+z=3$ and $x+y=1$, giving your answer in degrees.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$60^\\circ$" },
              { id: "b", text: "$30^\\circ$" },
              { id: "c", text: "$45^\\circ$" },
              { id: "d", text: "$90^\\circ$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Angle between two planes", statement: "$\\cos\\theta=\\frac{|\\boldsymbol{n}_1\\cdot\\boldsymbol{n}_2|}{|\\boldsymbol{n}_1||\\boldsymbol{n}_2|}$." },
            ],
            steps: [
              { reasoning: "Normals $\\boldsymbol{n}_1=(1,0,1)$, $\\boldsymbol{n}_2=(1,1,0)$; $\\boldsymbol{n}_1\\cdot\\boldsymbol{n}_2=1$ and both magnitudes are $\\sqrt2$.", working: "\\cos\\theta=\\frac{1}{\\sqrt2\\sqrt2}=\\frac12", marks: 1, markCode: "M" },
              { reasoning: "Take the inverse cosine (acute angle).", working: "\\theta=60^\\circ", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $60^\\circ$",
            commonErrors: ["Using $\\sin$ instead of $\\cos$ for the plane-plane angle.", "Forgetting the modulus and reporting $120^\\circ$."],
          },
        },
        {
          id: "aahl-u3-planes-q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "The line $L$ has equation $\\boldsymbol{r}=\\begin{pmatrix} 1 \\\\ 2 \\\\ -1 \\end{pmatrix}+\\lambda\\begin{pmatrix} 2 \\\\ -1 \\\\ 1 \\end{pmatrix}$ and the plane $\\Pi$ has equation $x+y+z=4$. Find the coordinates of the point where $L$ meets $\\Pi$.",
          response: {
            type: "numeric",
            parts: [
              { label: "$x$", answer: 3 },
              { label: "$y$", answer: 1 },
              { label: "$z$", answer: 0 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Line-plane intersection", statement: "Substitute the parametric form of the line into the plane equation and solve for the parameter." },
            ],
            steps: [
              { reasoning: "Write the line parametrically.", working: "x=1+2\\lambda,\\ y=2-\\lambda,\\ z=-1+\\lambda", marks: 1, markCode: "M" },
              { reasoning: "Substitute into the plane equation.", working: "(1+2\\lambda)+(2-\\lambda)+(-1+\\lambda)=4\\Rightarrow 2+2\\lambda=4", marks: 1, markCode: "M" },
              { reasoning: "Solve for $\\lambda$.", working: "\\lambda=1", marks: 1, markCode: "A" },
              { reasoning: "Substitute back to find the point.", working: "(3,1,0)", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$(3,1,0)$",
            commonErrors: ["Sign error on the $z$-term: $-1+\\lambda$ not $1+\\lambda$.", "Answering with $\\lambda$ instead of the point."],
            examinerNote: "Check: $3+1+0=4$.",
          },
        },
        {
          id: "aahl-u3-planes-q9",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "The line $L$ has direction vector $\\boldsymbol{d}=\\begin{pmatrix} 1 \\\\ 1 \\\\ 1 \\end{pmatrix}$ and the plane $\\Pi$ has equation $x+2y-z=5$. Find the acute angle between $L$ and $\\Pi$, in degrees correct to 2 decimal places.",
          response: { type: "numeric", parts: [{ label: "$\\theta$", answer: 28.13, tolerance: 0.01, unit: "°" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Angle between a line and a plane", statement: "$\\sin\\theta=\\frac{|\\boldsymbol{d}\\cdot\\boldsymbol{n}|}{|\\boldsymbol{d}||\\boldsymbol{n}|}$, where $\\boldsymbol{n}$ is the plane's normal." },
            ],
            steps: [
              { reasoning: "Normal $\\boldsymbol{n}=(1,2,-1)$; compute $\\boldsymbol{d}\\cdot\\boldsymbol{n}=1+2-1=2$, $|\\boldsymbol{d}|=\\sqrt3$, $|\\boldsymbol{n}|=\\sqrt6$.", working: "\\boldsymbol{d}\\cdot\\boldsymbol{n}=2,\\quad |\\boldsymbol{d}|=\\sqrt3,\\quad |\\boldsymbol{n}|=\\sqrt6", marks: 1, markCode: "M" },
              { reasoning: "Apply the formula.", working: "\\sin\\theta=\\frac{2}{\\sqrt3\\sqrt6}=\\frac{2}{3\\sqrt2}=\\frac{\\sqrt2}{3}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate the ratio $\\frac{\\sqrt2}{3}\\approx0.4714$.", working: "\\sin\\theta=0.4714", marks: 1, markCode: "A" },
              { reasoning: "Take the inverse sine.", working: "\\theta=28.13^\\circ", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\theta=28.13^\\circ$",
            commonErrors: ["Using $\\cos\\theta$ instead of $\\sin\\theta$ (that gives the complement, about $61.87^\\circ$).", "Dropping the modulus on the scalar product."],
          },
        },
        {
          id: "aahl-u3-planes-q10",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Which is a vector equation of the plane through $A(1,2,0)$ with directions $\\boldsymbol{u}=\\begin{pmatrix} 1 \\\\ 0 \\\\ 1 \\end{pmatrix}$ and $\\boldsymbol{v}=\\begin{pmatrix} 0 \\\\ 1 \\\\ -1 \\end{pmatrix}$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\boldsymbol{r}=\\begin{pmatrix} 1 \\\\ 2 \\\\ 0 \\end{pmatrix}+\\lambda\\begin{pmatrix} 1 \\\\ 0 \\\\ 1 \\end{pmatrix}+\\mu\\begin{pmatrix} 0 \\\\ 1 \\\\ -1 \\end{pmatrix}$" },
              { id: "b", text: "$\\boldsymbol{r}=\\begin{pmatrix} 1 \\\\ 2 \\\\ 0 \\end{pmatrix}+\\lambda\\begin{pmatrix} 1 \\\\ 1 \\\\ -1 \\end{pmatrix}+\\mu\\begin{pmatrix} 0 \\\\ 1 \\\\ -1 \\end{pmatrix}$" },
              { id: "c", text: "$\\boldsymbol{r}=\\begin{pmatrix} 0 \\\\ 0 \\\\ 0 \\end{pmatrix}+\\lambda\\begin{pmatrix} 1 \\\\ 0 \\\\ 1 \\end{pmatrix}+\\mu\\begin{pmatrix} 0 \\\\ 1 \\\\ -1 \\end{pmatrix}$" },
              { id: "d", text: "$\\boldsymbol{r}=\\begin{pmatrix} 1 \\\\ 2 \\\\ 0 \\end{pmatrix}+\\lambda\\begin{pmatrix} 1 \\\\ 1 \\\\ 1 \\end{pmatrix}+\\mu\\begin{pmatrix} 0 \\\\ 1 \\\\ -1 \\end{pmatrix}$" },
          ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Vector equation of a plane", statement: "$\\boldsymbol{r}=\\boldsymbol{a}+\\lambda\\boldsymbol{u}+\\mu\\boldsymbol{v}$ with $\\boldsymbol{u},\\boldsymbol{v}$ non-parallel directions in the plane." },
            ],
            steps: [
              { reasoning: "The base point is $A$ and the two parameters multiply the two given direction vectors.", working: "\\boldsymbol{r}=\\begin{pmatrix} 1 \\\\ 2 \\\\ 0 \\end{pmatrix}+\\lambda\\boldsymbol{u}+\\mu\\boldsymbol{v}", marks: 1, markCode: "M" },
              { reasoning: "Match to the choices.", working: "\\boldsymbol{r}=\\begin{pmatrix} 1 \\\\ 2 \\\\ 0 \\end{pmatrix}+\\lambda\\begin{pmatrix} 1 \\\\ 0 \\\\ 1 \\end{pmatrix}+\\mu\\begin{pmatrix} 0 \\\\ 1 \\\\ -1 \\end{pmatrix}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)**",
            commonErrors: ["Using a direction vector that is not in the span of $\\boldsymbol{u}$ and $\\boldsymbol{v}$ (options b and d).", "Using the origin instead of $A$ as the base point (option c)."],
            examinerNote: "Check: $(1,1,-1)$ is not a linear combination of $(1,0,1)$ and $(0,1,-1)$, and neither is $(1,1,1)$.",
          },
        },
        {
          id: "aahl-u3-planes-q11",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 6,
          stem: "The points $A(1,0,2)$, $B(2,1,0)$ and $C(0,3,1)$ lie on a plane $\\Pi$.",
          parts: [
            { label: "a", prompt: "Find a normal vector to $\\Pi$.", marks: 2 },
            { label: "b", prompt: "Hence find the Cartesian equation of $\\Pi$.", marks: 2 },
            { label: "c", prompt: "Find the coordinates of the point where $\\Pi$ meets the $z$-axis.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Normal from the vector product", statement: "The normal to the plane is $\\overrightarrow{AB}\\times\\overrightarrow{AC}$." },
              { kind: "formula", name: "Plane equation", statement: "$ax+by+cz=d$ with $d=\\boldsymbol{a}\\cdot\\boldsymbol{n}$." },
            ],
            steps: [
              { part: "a", reasoning: "Find two directions in the plane.", working: "\\overrightarrow{AB}=\\begin{pmatrix} 1 \\\\ 1 \\\\ -2 \\end{pmatrix},\\quad \\overrightarrow{AC}=\\begin{pmatrix} -1 \\\\ 3 \\\\ -1 \\end{pmatrix}", marks: 1, markCode: "A" },
              { part: "a", reasoning: "The normal is their vector product: $(-1+6,\\ 2+1,\\ 3+1)$.", working: "\\boldsymbol{n}=\\begin{pmatrix} 5 \\\\ 3 \\\\ 4 \\end{pmatrix}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Find $d$ using point $A$.", working: "d=\\boldsymbol{a}\\cdot\\boldsymbol{n}=5+0+8=13", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the equation.", working: "5x+3y+4z=13", marks: 1, markCode: "A" },
              { part: "c", reasoning: "On the $z$-axis $x=y=0$, so substitute.", working: "4z=13", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Solve.", working: "z=\\tfrac{13}{4}\\Rightarrow\\left(0,0,\\tfrac{13}{4}\\right)", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $\\begin{pmatrix} 5 \\\\ 3 \\\\ 4 \\end{pmatrix}$ (b) $5x+3y+4z=13$ (c) $\\left(0,0,\\frac{13}{4}\\right)$",
            commonErrors: ["Using position vectors $\\boldsymbol{b}\\times\\boldsymbol{c}$ instead of side vectors.", "Forgetting that the $z$-axis has $x=y=0$."],
            examinerNote: "Check: $B$: $10+3+0=13$; $C$: $0+9+4=13$; $A$: $5+0+8=13$.",
          },
        },
        {
          id: "aahl-u3-planes-q12",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Two distinct planes are parallel if and only if their normal vectors are...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "parallel (scalar multiples of each other)" },
              { id: "b", text: "perpendicular" },
              { id: "c", text: "equal in length" },
              { id: "d", text: "both the zero vector" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Parallel planes", statement: "Two planes are parallel exactly when their normals are scalar multiples." },
            ],
            steps: [
              { reasoning: "Planes are parallel when their equations differ only in the constant term, which means the coefficient vectors (the normals) are proportional.", working: "\\boldsymbol{n}_2=k\\boldsymbol{n}_1", marks: 1, markCode: "M" },
              { reasoning: "This is equivalent to saying the normals are parallel (scalar multiples of each other).", working: "\\boldsymbol{n}_1\\times\\boldsymbol{n}_2=\\boldsymbol{0}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** parallel",
            commonErrors: ["Confusing this with the condition for perpendicular planes, $\\boldsymbol{n}_1\\cdot\\boldsymbol{n}_2=0$."],
          },
        },
        {
          id: "aahl-u3-planes-q13",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 8,
          stem: "The line $L$ has equation $\\boldsymbol{r}=\\begin{pmatrix} 2 \\\\ -1 \\\\ 1 \\end{pmatrix}+\\lambda\\begin{pmatrix} 1 \\\\ 2 \\\\ -1 \\end{pmatrix}$ and the plane $\\Pi$ has equation $2x+y-z=5$. This question investigates how $L$ meets $\\Pi$ and a second plane.",
          parts: [
            { label: "a", prompt: "Show that $L$ intersects $\\Pi$ and find the coordinates of the point of intersection.", marks: 3 },
            { label: "b", prompt: "Find the acute angle between $L$ and $\\Pi$, in degrees correct to 3 significant figures.", marks: 3 },
            { label: "c", prompt: "Show that $L$ is parallel to, but does not lie in, the plane $x+z=2$.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Line-plane intersection", statement: "Substitute the parametric form of the line into the plane equation; a unique parameter means a single intersection." },
              { kind: "formula", name: "Angle between a line and a plane", statement: "$\\sin\\theta=\\frac{|\\boldsymbol{d}\\cdot\\boldsymbol{n}|}{|\\boldsymbol{d}||\\boldsymbol{n}|}$." },
              { kind: "property", name: "Line parallel to a plane", statement: "A line is parallel to a plane when its direction is perpendicular to the plane's normal; it does not meet the plane when no parameter satisfies the plane equation." },
            ],
            steps: [
              { part: "a", reasoning: "Write the line parametrically.", working: "x=2+\\lambda,\\ y=-1+2\\lambda,\\ z=1-\\lambda", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Substitute into $2x+y-z=5$.", working: "2(2+\\lambda)+(-1+2\\lambda)-(1-\\lambda)=5\\Rightarrow 2+5\\lambda=5", marks: 1, markCode: "M" },
              { part: "a", reasoning: "$\\lambda=\\frac35$ gives the point $\\left(\\frac{13}{5},\\frac15,\\frac25\\right)$.", working: "P=\\left(\\tfrac{13}{5},\\tfrac15,\\tfrac25\\right)", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Normal $\\boldsymbol{n}=(2,1,-1)$; $\\boldsymbol{d}\\cdot\\boldsymbol{n}=2+2+1=5$ and $|\\boldsymbol{d}|=|\\boldsymbol{n}|=\\sqrt6$.", working: "\\sin\\theta=\\frac{5}{\\sqrt6\\sqrt6}=\\frac56", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate the ratio.", working: "\\sin\\theta=0.8333", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Take the inverse sine.", working: "\\theta=56.4^\\circ", marks: 1, markCode: "A" },
              { part: "c", reasoning: "The plane $x+z=2$ has normal $(1,0,1)$; $\\boldsymbol{d}\\cdot(1,0,1)=1+0-1=0$, so $L$ is parallel to the plane.", working: "\\boldsymbol{d}\\cdot\\boldsymbol{n}_2=0", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Substituting gives $x+z=(2+\\lambda)+(1-\\lambda)=3\\ne2$ for all $\\lambda$, so $L$ does not lie in the plane.", working: "x+z=3\\ne2\\quad\\text{(AG)}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $P=\\left(\\frac{13}{5},\\frac15,\\frac25\\right)$ (b) $56.4^\\circ$ (c) proved",
            commonErrors: ["Using $\\cos$ rather than $\\sin$ for the line-plane angle.", "Concluding the line lies in $x+z=2$ without checking a point."],
            examinerNote: "Check (a): $2(\\frac{13}{5})+\\frac15-\\frac25=\\frac{26+1-2}{5}=5$.",
          },
        },
        {
          id: "aahl-u3-planes-q14",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Which is the Cartesian equation of the plane $\\boldsymbol{r}=\\begin{pmatrix} 1 \\\\ 2 \\\\ 3 \\end{pmatrix}+\\lambda\\begin{pmatrix} 1 \\\\ 0 \\\\ -1 \\end{pmatrix}+\\mu\\begin{pmatrix} 0 \\\\ 1 \\\\ 1 \\end{pmatrix}$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x-y+z=2$" },
              { id: "b", text: "$x-y+z=6$" },
              { id: "c", text: "$x+y+z=6$" },
              { id: "d", text: "$x-y+z=0$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Normal from the vector product", statement: "The normal to the plane is $\\boldsymbol{u}\\times\\boldsymbol{v}$, where $\\boldsymbol{u},\\boldsymbol{v}$ are the direction vectors." },
            ],
            steps: [
              { reasoning: "$\\boldsymbol{u}\\times\\boldsymbol{v}=(0(1)-(-1)(1),\\ (-1)(0)-1(1),\\ 1(1)-0(0))=(1,-1,1)$.", working: "\\boldsymbol{n}=\\begin{pmatrix} 1 \\\\ -1 \\\\ 1 \\end{pmatrix}", marks: 1, markCode: "M" },
              { reasoning: "$d=\\boldsymbol{a}\\cdot\\boldsymbol{n}=1-2+3=2$.", working: "x-y+z=2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $x-y+z=2$",
            commonErrors: ["Using $\\boldsymbol{u}\\cdot\\boldsymbol{v}$ or position vectors instead of $\\boldsymbol{u}\\times\\boldsymbol{v}$.", "Sign error in the middle component of the normal."],
          },
        },
        {
          id: "aahl-u3-planes-q15",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "The line $L$ has equation $\\boldsymbol{r}=\\begin{pmatrix} 0 \\\\ 1 \\\\ 2 \\end{pmatrix}+\\lambda\\begin{pmatrix} 2 \\\\ 1 \\\\ -1 \\end{pmatrix}$ and the plane $\\Pi$ has equation $x-2y+3z=7$. Find the coordinates of the point where $L$ meets $\\Pi$.",
          response: {
            type: "numeric",
            parts: [
              { label: "$x$", answer: -2 },
              { label: "$y$", answer: 0 },
              { label: "$z$", answer: 3 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Line-plane intersection", statement: "Substitute the parametric form of the line into the plane equation and solve for the parameter." },
            ],
            steps: [
              { reasoning: "Write the line parametrically.", working: "x=2\\lambda,\\ y=1+\\lambda,\\ z=2-\\lambda", marks: 1, markCode: "M" },
              { reasoning: "Substitute into the plane equation.", working: "2\\lambda-2(1+\\lambda)+3(2-\\lambda)=7\\Rightarrow 4-3\\lambda=7", marks: 1, markCode: "M" },
              { reasoning: "Solve for $\\lambda$.", working: "\\lambda=-1", marks: 1, markCode: "A" },
              { reasoning: "Substitute back to find the point.", working: "(-2,0,3)", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$(-2,0,3)$",
            commonErrors: ["Sign error in $-2(1+\\lambda)$.", "Taking $\\lambda=1$ instead of $-1$."],
            examinerNote: "Check: $-2-0+9=7$.",
          },
        },
        {
          id: "aahl-u3-planes-q16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 5,
          stem: "The planes $\\Pi_1$ and $\\Pi_2$ have equations $2x-y+z=4$ and $2x-y+z=-1$.",
          parts: [
            { label: "a", prompt: "Show that $\\Pi_1$ and $\\Pi_2$ are parallel.", marks: 2 },
            { label: "b", prompt: "Write down the equation of the plane parallel to both that passes through the origin.", marks: 1 },
            { label: "c", prompt: "Find the equation of the plane parallel to both that lies midway between $\\Pi_1$ and $\\Pi_2$.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Parallel planes", statement: "Two planes are parallel when their coefficient vectors (normals) are equal up to a scalar multiple; the constant term then determines the offset." },
            ],
            steps: [
              { part: "a", reasoning: "Both equations have coefficient vector $(2,-1,1)$, so their normals are identical and hence parallel.", working: "\\boldsymbol{n}_1=\\boldsymbol{n}_2=\\begin{pmatrix} 2 \\\\ -1 \\\\ 1 \\end{pmatrix}", marks: 1, markCode: "A" },
              { part: "a", reasoning: "The equations differ only in the constant term ($4$ vs $-1$), so the planes are distinct and parallel.", working: "4\\ne-1\\Rightarrow\\text{parallel, distinct}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "A parallel plane through the origin has the same normal and $d=0$.", working: "2x-y+z=0", marks: 1, markCode: "A" },
              { part: "c", reasoning: "The midway constant is the average of $4$ and $-1$.", working: "d=\\tfrac{4+(-1)}{2}=\\tfrac32", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State the equation (any positive multiple is acceptable).", working: "2x-y+z=\\tfrac32\\ \\text{or}\\ 4x-2y+2z=3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) proved (b) $2x-y+z=0$ (c) $2x-y+z=\\frac32$",
            commonErrors: ["Averaging the equations incorrectly, e.g. $2x-y+z=\\frac{4}{-1}=-4$.", "Changing the normal coefficients in (b) and (c)."],
            examinerNote: "The midway plane satisfies $\\frac{(2x-y+z)-4}{\\sqrt6}=\\frac{-1-(2x-y+z)}{\\sqrt6}$, giving $2x-y+z=\\frac32$.",
          },
        },
      ],
    },
  ],
};
