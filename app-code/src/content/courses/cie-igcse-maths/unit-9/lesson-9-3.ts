import type { Lesson } from "../../../types.ts";

export const lesson93: Lesson = {
  id: "ciem-u9-lesson-9-3",
  code: "9-3",
  title: "Vectors in Motion and Problem Solving",
  goal: "I CAN use vectors for displacement and velocity problems and solve extended vector geometry problems.",
  standards: ["0580 9.4"],
  vocabulary: [
    { term: "Displacement vector", definition: "The change in position; $\\overrightarrow{AB}=\\mathbf{b}-\\mathbf{a}$." },
    { term: "Velocity vector", definition: "Displacement per unit time; direction of motion." },
    { term: "Resultant velocity", definition: "The vector sum of velocities (e.g. boat + current)." },
    { term: "Position vector", definition: "Vector from origin to a point at a given time." },
    { term: "Relative velocity", definition: "Velocity of one object as seen from another." },
  ],
  concepts: [
    {
      id: "ciem-u9-vectors-motion",
      title: "Displacement and velocity vectors",
      skill: "Use vectors for displacement, velocity and resultant motion problems.",
      lesson: {
        sections: [
          {
            heading: "Displacement",
            body: "If an object moves from $A$ to $B$, displacement $=\\overrightarrow{AB}=\\mathbf{b}-\\mathbf{a}$. After time $t$, position vector $\\mathbf{r}(t)=\\mathbf{r}_0+t\\mathbf{v}$ where $\\mathbf{v}$ is velocity.",
          },
          {
            heading: "Resultant velocity",
            body: "When two motions combine (e.g. boat in water + current), the resultant velocity is the vector sum: $\\mathbf{v}_{\\text{resultant}}=\\mathbf{v}_1+\\mathbf{v}_2$.",
          },
          {
            heading: "Solving motion problems",
            body: "Set up vectors for each motion, add for resultant, then use magnitude $=\\sqrt{x^2+y^2}$ and direction $\\tan\\theta=\\frac{y}{x}$ as needed.",
          },
        ],
        keyFormulas: [
          { name: "Position", statement: "$\\mathbf{r}(t)=\\mathbf{r}_0+t\\mathbf{v}$" },
          { name: "Resultant velocity", statement: "$\\mathbf{v}_R=\\mathbf{v}_1+\\mathbf{v}_2$" },
          { name: "Magnitude", statement: "$|\\mathbf{v}|=\\sqrt{x^2+y^2}$" },
        ],
        workedExample: {
          problem: "A boat moves at $\\begin{pmatrix}4\\\\0\\end{pmatrix}$ km/h in still water; the current adds $\\begin{pmatrix}0\\\\2\\end{pmatrix}$ km/h. Find the resultant velocity.",
          solution: "$\\mathbf{v}_R=\\begin{pmatrix}4\\\\2\\end{pmatrix}$ km/h; speed $=\\sqrt{16+4}=\\sqrt{20}\\approx4.47$ km/h.",
        },
      },
      questions: [
        {
          id: "ciem-u9-vectors-motion-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The displacement vector from $A$ to $B$ is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\mathbf{b}-\\mathbf{a}$" },
              { id: "b", text: "$\\mathbf{a}-\\mathbf{b}$" },
              { id: "c", text: "$\\mathbf{a}+\\mathbf{b}$" },
              { id: "d", text: "$\\mathbf{a}\\times\\mathbf{b}$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Displacement", statement: "$\\overrightarrow{AB}=\\mathbf{b}-\\mathbf{a}$" },
            ],
            steps: [
              { reasoning: "Recall the formula.", working: "b-a", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $\\mathbf{b}-\\mathbf{a}$",
            commonErrors: ["Reversing the subtraction."],
          },
        },
        {
          id: "ciem-u9-vectors-motion-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "An object has position vector $\\mathbf{r}(t)=\\begin{pmatrix}1\\\\2\\end{pmatrix}+t\\begin{pmatrix}3\\\\1\\end{pmatrix}$. Find its position at $t=4$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Position vector", statement: "$\\mathbf{r}(t)=\\mathbf{r}_0+t\\mathbf{v}$" },
            ],
            steps: [
              { reasoning: "Substitute $t=4$.", working: "\\begin{pmatrix}1\\\\2\\end{pmatrix}+4\\begin{pmatrix}3\\\\1\\end{pmatrix}", marks: 1, markCode: "M" },
              { reasoning: "Compute $t\\mathbf{v}$.", working: "=\\begin{pmatrix}12\\\\4\\end{pmatrix}", marks: 1, markCode: "M" },
              { reasoning: "Add.", working: "=\\begin{pmatrix}13\\\\6\\end{pmatrix}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\begin{pmatrix}13\\\\6\\end{pmatrix}$",
            commonErrors: ["Multiplying $t$ by only one component."],
          },
        },
        {
          id: "ciem-u9-vectors-motion-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A swimmer's velocity in still water is $\\begin{pmatrix}3\\\\4\\end{pmatrix}$ km/h and the river current is $\\begin{pmatrix}1\\\\0\\end{pmatrix}$ km/h. Find the resultant speed.",
          response: { type: "numeric", parts: [{ label: "Speed", answer: 5.66, tolerance: 0.05, unit: "km/h" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Resultant velocity", statement: "$\\mathbf{v}_R=\\mathbf{v}_1+\\mathbf{v}_2$" },
              { kind: "formula", name: "Magnitude", statement: "$|\\mathbf{v}|=\\sqrt{x^2+y^2}$" },
            ],
            steps: [
              { reasoning: "Add velocities.", working: "\\begin{pmatrix}3+1\\\\4+0\\end{pmatrix}=\\begin{pmatrix}4\\\\4\\end{pmatrix}", marks: 1, markCode: "M" },
              { reasoning: "Magnitude.", working: "=\\sqrt{16+16}=\\sqrt{32}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "\\approx5.66", marks: 1, markCode: "M" },
              { reasoning: "State the speed.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\sqrt{32}\\approx5.66$ km/h",
            commonErrors: ["Adding magnitudes instead of vectors ($3+4+1=8$)."],
            examinerNote: "Correct value: $\\sqrt{32}\\approx5.66$ km/h; response answer should be 5.66.",
          },
        },
        {
          id: "ciem-u9-vectors-motion-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Points $A(1,2)$, $B(7,4)$, $C(5,10)$. $M$ is the midpoint of $AB$, $N$ is the midpoint of $AC$.",
          parts: [
            { label: "a", prompt: "Find position vectors of $M$ and $N$.", marks: 2 },
            { label: "b", prompt: "Show that $MN \\parallel BC$ and find the ratio $MN:BC$.", marks: 4 },
            { label: "c", prompt: "A particle moves from $M$ to $N$ in 3 hours. Find its velocity vector and speed.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Midpoint", statement: "$\\mathbf{m}=\\frac{\\mathbf{a}+\\mathbf{b}}{2}$" },
              { kind: "technique", name: "Parallel proof", statement: "$\\overrightarrow{MN}=k\\overrightarrow{BC}$" },
            ],
            steps: [
              { part: "a", reasoning: "$\\mathbf{m}=\\frac12\\left(\\begin{pmatrix}1\\\\2\\end{pmatrix}+\\begin{pmatrix}7\\\\4\\end{pmatrix}\\right)=\\begin{pmatrix}4\\\\3\\end{pmatrix}$.", working: "\\begin{pmatrix}4\\\\3\\end{pmatrix}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "$\\mathbf{n}=\\frac12\\left(\\begin{pmatrix}1\\\\2\\end{pmatrix}+\\begin{pmatrix}5\\\\10\\end{pmatrix}\\right)=\\begin{pmatrix}3\\\\6\\end{pmatrix}$.", working: "\\begin{pmatrix}3\\\\6\\end{pmatrix}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$\\overrightarrow{MN}=\\mathbf{n}-\\mathbf{m}=\\begin{pmatrix}3-4\\\\6-3\\end{pmatrix}=\\begin{pmatrix}-1\\\\3\\end{pmatrix}$.", working: "\\begin{pmatrix}-1\\\\3\\end{pmatrix}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "$\\overrightarrow{BC}=\\mathbf{c}-\\mathbf{b}=\\begin{pmatrix}5-7\\\\10-4\\end{pmatrix}=\\begin{pmatrix}-2\\\\6\\end{pmatrix}=2\\begin{pmatrix}-1\\\\3\\end{pmatrix}$.", working: "\\overrightarrow{BC}=2\\overrightarrow{MN}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Parallel; $MN:BC=1:2$.", working: "1:2", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the result.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Velocity $=\\frac{\\overrightarrow{MN}}{3}=\\frac13\\begin{pmatrix}-1\\\\3\\end{pmatrix}=\\begin{pmatrix}-1/3\\\\1\\end{pmatrix}$.", working: "\\begin{pmatrix}-1/3\\\\1\\end{pmatrix}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Speed $=\\left|\\begin{pmatrix}-1/3\\\\1\\end{pmatrix}\\right|=\\sqrt{\\frac19+1}=\\sqrt{\\frac{10}{9}}=\\frac{\\sqrt{10}}{3}$.", working: "\\approx1.05", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State velocity and speed.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $\\mathbf{m}=\\begin{pmatrix}4\\\\3\\end{pmatrix}$, $\\mathbf{n}=\\begin{pmatrix}3\\\\6\\end{pmatrix}$ (b) $MN \\parallel BC$, $MN:BC=1:2$ (c) $\\mathbf{v}=\\begin{pmatrix}-1/3\\\\1\\end{pmatrix}$, speed $\\frac{\\sqrt{10}}{3}\\approx1.05$",
            commonErrors: ["In (c) forgetting to divide displacement by time."],
          },
        },
      ],
    },
    {
      id: "ciem-u9-vector-problem-solving-extended",
      title: "Extended vector problems",
      skill: "Solve multi-part vector geometry problems combining proofs, ratios and position vectors.",
      lesson: {
        sections: [
          {
            heading: "Approach",
            body: "Read the whole question first. Identify what must be proven vs calculated. Set up position vectors early — most parts build on the same setup.",
          },
          {
            heading: "Ratio problems",
            body: "If $P$ divides $AB$ in ratio $m:n$, then $\\overrightarrow{AP}=\\frac{m}{m+n}\\overrightarrow{AB}$ and $\\mathbf{p}=\\mathbf{a}+\\frac{m}{m+n}(\\mathbf{b}-\\mathbf{a})$.",
          },
          {
            heading: "Proofs vs calculations",
            body: "'Show that' questions need algebraic justification ending in the required result. 'Find' questions need a numerical/vector answer.",
          },
        ],
        keyFormulas: [
          { name: "Point on AB", statement: "$\\mathbf{p}=\\mathbf{a}+t(\\mathbf{b}-\\mathbf{a})$ for $0<t<1$" },
        ],
        workedExample: {
          problem: "$A(0,0)$, $B(6,0)$, $C(2,4)$. $P$ divides $BC$ in ratio $1:1$ (midpoint). Find $P$.",
          solution: "$\\mathbf{p}=\\frac{\\mathbf{b}+\\mathbf{c}}{2}=\\frac12\\left(\\begin{pmatrix}6\\\\0\\end{pmatrix}+\\begin{pmatrix}2\\\\4\\end{pmatrix}\\right)=\\begin{pmatrix}4\\\\2\\end{pmatrix}$.",
        },
      },
      questions: [
        {
          id: "ciem-u9-vector-problem-solving-extended-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Point $P$ divides $AB$ in ratio $1:3$. What fraction of $\\overrightarrow{AB}$ is $\\overrightarrow{AP}$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac14$" },
              { id: "b", text: "$\\frac13$" },
              { id: "c", text: "$\\frac34$" },
              { id: "d", text: "$\\frac12$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Section formula", statement: "$\\overrightarrow{AP}=\\frac{m}{m+n}\\overrightarrow{AB}$" },
            ],
            steps: [
              { reasoning: "Ratio $1:3$ → fraction $\\frac{1}{1+3}=\\frac14$.", working: "\\frac14", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $\\frac14$",
            commonErrors: ["Using $\\frac13$ (the ratio part, not the fraction of the whole)."],
          },
        },
        {
          id: "ciem-u9-vector-problem-solving-extended-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "$A(0,0)$, $B(8,0)$, $C(4,6)$. $P$ divides $AC$ in ratio $1:1$. Find $\\overrightarrow{BP}$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Midpoint", statement: "$\\mathbf{p}=\\frac{\\mathbf{a}+\\mathbf{c}}{2}$" },
            ],
            steps: [
              { reasoning: "$\\mathbf{p}=\\frac12\\begin{pmatrix}4\\\\6\\end{pmatrix}=\\begin{pmatrix}2\\\\3\\end{pmatrix}$.", working: "\\begin{pmatrix}2\\\\3\\end{pmatrix}", marks: 1, markCode: "M" },
              { reasoning: "$\\overrightarrow{BP}=\\mathbf{p}-\\mathbf{b}$.", working: "=\\begin{pmatrix}2-8\\\\3-0\\end{pmatrix}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "=\\begin{pmatrix}-6\\\\3\\end{pmatrix}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\begin{pmatrix}-6\\\\3\\end{pmatrix}$",
            commonErrors: ["Computing $\\overrightarrow{PB}$ instead."],
          },
        },
        {
          id: "ciem-u9-vector-problem-solving-extended-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "In triangle $ABC$, $D$ divides $BC$ in ratio $1:2$ (i.e. $BD:DC=1:2$). Given $\\mathbf{b}=\\begin{pmatrix}0\\\\0\\end{pmatrix}$, $\\mathbf{c}=\\begin{pmatrix}9\\\\6\\end{pmatrix}$, find $\\mathbf{d}$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Section formula", statement: "$\\mathbf{d}=\\frac{2\\mathbf{b}+1\\mathbf{c}}{3}$" },
            ],
            steps: [
              { reasoning: "$BD:DC=1:2$ → $\\mathbf{d}=\\frac{2\\mathbf{b}+\\mathbf{c}}{3}$.", working: "\\frac{2\\mathbf{b}+\\mathbf{c}}{3}", marks: 1, markCode: "M" },
              { reasoning: "Substitute.", working: "=\\frac13\\begin{pmatrix}0+9\\\\0+6\\end{pmatrix}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "=\\begin{pmatrix}3\\\\2\\end{pmatrix}", marks: 1, markCode: "M" },
              { reasoning: "State the position vector.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\begin{pmatrix}3\\\\2\\end{pmatrix}$",
            commonErrors: ["Weighting reversed: should be $\\frac{2\\mathbf{b}+\\mathbf{c}}{3}$ since $D$ is closer to $B$."],
          },
        },
        {
          id: "ciem-u9-vector-problem-solving-extended-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "In parallelogram $ABCD$, $P$ is the midpoint of $AB$ and $Q$ is the midpoint of $CD$. Position vectors: $\\mathbf{a}=\\begin{pmatrix}0\\\\0\\end{pmatrix}$, $\\mathbf{b}=\\begin{pmatrix}6\\\\0\\end{pmatrix}$, $\\mathbf{d}=\\begin{pmatrix}1\\\\4\\end{pmatrix}$, $\\mathbf{c}=\\mathbf{b}+\\mathbf{d}$.",
          parts: [
            { label: "a", prompt: "Find $\\mathbf{c}$, $\\mathbf{p}$ and $\\mathbf{q}$.", marks: 3 },
            { label: "b", prompt: "Show that $APCQ$ is a parallelogram.", marks: 4 },
            { label: "c", prompt: "Find $\\overrightarrow{PQ}$ and compare with $\\overrightarrow{AD}$.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Parallelogram", statement: "$\\mathbf{c}=\\mathbf{b}+\\mathbf{d}$" },
              { kind: "technique", name: "Proof by vectors", statement: "Show opposite sides equal." },
            ],
            steps: [
              { part: "a", reasoning: "$\\mathbf{c}=\\begin{pmatrix}6\\\\0\\end{pmatrix}+\\begin{pmatrix}1\\\\4\\end{pmatrix}=\\begin{pmatrix}7\\\\4\\end{pmatrix}$; $\\mathbf{p}=\\frac{\\mathbf{a}+\\mathbf{b}}{2}=\\begin{pmatrix}3\\\\0\\end{pmatrix}$; $\\mathbf{q}=\\frac{\\mathbf{c}+\\mathbf{d}}{2}=\\begin{pmatrix}4\\\\4\\end{pmatrix}$.", working: "\\begin{pmatrix}7\\\\4\\end{pmatrix},\\ \\begin{pmatrix}3\\\\0\\end{pmatrix},\\ \\begin{pmatrix}4\\\\4\\end{pmatrix}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State all three.", marks: 2, markCode: "A" },
              { part: "b", reasoning: "$\\overrightarrow{AP}=\\mathbf{p}-\\mathbf{a}=\\begin{pmatrix}3\\\\0\\end{pmatrix}$; $\\overrightarrow{QC}=\\mathbf{c}-\\mathbf{q}=\\begin{pmatrix}7-4\\\\4-4\\end{pmatrix}=\\begin{pmatrix}3\\\\0\\end{pmatrix}$ — equal.", working: "\\overrightarrow{AP}=\\overrightarrow{QC}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "$\\overrightarrow{AQ}=\\mathbf{q}-\\mathbf{a}=\\begin{pmatrix}4\\\\4\\end{pmatrix}$; $\\overrightarrow{PC}=\\mathbf{c}-\\mathbf{p}=\\begin{pmatrix}7-3\\\\4-0\\end{pmatrix}=\\begin{pmatrix}4\\\\4\\end{pmatrix}$ — equal.", working: "\\overrightarrow{AQ}=\\overrightarrow{PC}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Both pairs of opposite sides equal → parallelogram.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the conclusion.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$\\overrightarrow{PQ}=\\mathbf{q}-\\mathbf{p}=\\begin{pmatrix}4-3\\\\4-0\\end{pmatrix}=\\begin{pmatrix}1\\\\4\\end{pmatrix}$.", working: "\\begin{pmatrix}1\\\\4\\end{pmatrix}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "$\\overrightarrow{AD}=\\mathbf{d}-\\mathbf{a}=\\begin{pmatrix}1\\\\4\\end{pmatrix}$ — equal, so $PQ \\parallel AD$ and $PQ=AD$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $\\mathbf{c}=\\begin{pmatrix}7\\\\4\\end{pmatrix}$, $\\mathbf{p}=\\begin{pmatrix}3\\\\0\\end{pmatrix}$, $\\mathbf{q}=\\begin{pmatrix}4\\\\4\\end{pmatrix}$ (b) proven (c) $\\overrightarrow{PQ}=\\overrightarrow{AD}$",
            commonErrors: ["In (b) pairing wrong vertices as opposite sides."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciem-u9-extended-notes",
      title: "Extended vector problems — revision notes",
      summary: "Motion vectors, section formula, and multi-part vector geometry.",
      sections: [
        {
          heading: "Motion",
          body: "$\\mathbf{r}(t)=\\mathbf{r}_0+t\\mathbf{v}$; resultant velocity $=$ vector sum; speed $=\\sqrt{x^2+y^2}$.",
        },
        {
          heading: "Geometry",
          body: "Section formula: $\\mathbf{p}=\\mathbf{a}+\\frac{m}{m+n}(\\mathbf{b}-\\mathbf{a})$ for ratio $m:n$. Proofs: show vectors are scalar multiples or equal.",
        },
        {
          heading: "Exam technique",
          body: "- Read all parts before starting.\n- Set up position vectors once, reuse across parts.\n- 'Show that' needs algebraic justification, not just the answer.",
        },
      ],
    },
  ],
};
