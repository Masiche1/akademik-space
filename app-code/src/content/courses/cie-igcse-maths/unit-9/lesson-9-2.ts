import type { Lesson } from "../../../types.ts";

export const lesson92: Lesson = {
  id: "ciem-u9-lesson-9-2",
  code: "9-2",
  title: "Vector Proofs",
  goal: "I CAN use vectors to prove geometric results such as parallel lines, midpoints and ratios in triangles and quadrilaterals.",
  standards: ["0580 9.3"],
  vocabulary: [
    { term: "Vector proof", definition: "A geometric proof using position vectors and vector algebra." },
    { term: "Midpoint theorem", definition: "The line joining midpoints of two sides of a triangle is parallel to the third side and half its length." },
    { term: "Median", definition: "A line from a vertex to the midpoint of the opposite side." },
    { term: "Centroid", definition: "The point where the three medians meet; $\\frac23$ of the way along each median." },
    { term: "Scalar multiple proof", definition: "Showing one vector is a scalar multiple of another proves parallelism." },
  ],
  concepts: [
    {
      id: "ciem-u9-vector-proofs",
      title: "Proving with vectors",
      skill: "Set up position vectors and prove geometric relationships algebraically.",
      lesson: {
        sections: [
          {
            heading: "Proof structure",
            body: "1. Assign position vectors to key points (often $\\mathbf{0}$ for one vertex to simplify).\n2. Express the vectors you need in terms of these.\n3. Show the required relationship — e.g. $\\overrightarrow{XY}=k\\overrightarrow{ZW}$ proves $XY \\parallel ZW$.",
          },
          {
            heading: "Midpoint theorem",
            body: "If $D$ and $E$ are midpoints of $AB$ and $AC$, then $\\overrightarrow{DE}=\\frac12\\overrightarrow{BC}$ — parallel and half the length.",
          },
          {
            heading: "Choosing the origin",
            body: "Placing one vertex at the origin simplifies calculations. E.g. for triangle $ABC$ with $A$ at origin: $\\mathbf{a}=\\mathbf{0}$, so $\\overrightarrow{AB}=\\mathbf{b}$ and $\\overrightarrow{AC}=\\mathbf{c}$.",
          },
        ],
        keyFormulas: [
          { name: "Parallel proof", statement: "$\\overrightarrow{XY}=k\\overrightarrow{ZW} \\Rightarrow XY \\parallel ZW$" },
          { name: "Midpoint theorem", statement: "$\\overrightarrow{DE}=\\frac12\\overrightarrow{BC}$" },
        ],
        workedExample: {
          problem: "Prove the midpoint theorem for triangle $ABC$ with $D$, $E$ midpoints of $AB$, $AC$.",
          solution: "Let $\\mathbf{a}=\\mathbf{0}$. $\\mathbf{d}=\\frac{\\mathbf{b}}{2}$, $\\mathbf{e}=\\frac{\\mathbf{c}}{2}$. $\\overrightarrow{DE}=\\mathbf{e}-\\mathbf{d}=\\frac{\\mathbf{c}-\\mathbf{b}}{2}=\\frac12\\overrightarrow{BC}$ — parallel and half length.",
        },
      },
      questions: [
        {
          id: "ciem-u9-vector-proofs-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "To prove two lines are parallel using vectors, you show:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The lines intersect" },
              { id: "b", text: "The lines have the same length" },
              { id: "c", text: "One direction vector is a scalar multiple of the other" },
              { id: "d", text: "The vectors are equal" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Parallel proof", statement: "$\\mathbf{u}=k\\mathbf{v} \\Rightarrow$ parallel." },
            ],
            steps: [
              { reasoning: "Recall the proof method.", working: "k\\mathbf{v}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Scalar multiple",
            commonErrors: ["Trying to prove equal length instead of parallel."],
          },
        },
        {
          id: "ciem-u9-vector-proofs-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "In triangle $ABC$, $M$ is the midpoint of $AB$. Given $\\mathbf{a}=\\begin{pmatrix}0\\\\0\\end{pmatrix}$, $\\mathbf{b}=\\begin{pmatrix}4\\\\2\\end{pmatrix}$, $\\mathbf{c}=\\begin{pmatrix}6\\\\6\\end{pmatrix}$, find $\\overrightarrow{MC}$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Midpoint", statement: "$\\mathbf{m}=\\frac{\\mathbf{a}+\\mathbf{b}}{2}$" },
            ],
            steps: [
              { reasoning: "$\\mathbf{m}=\\frac12\\begin{pmatrix}4\\\\2\\end{pmatrix}=\\begin{pmatrix}2\\\\1\\end{pmatrix}$.", working: "\\begin{pmatrix}2\\\\1\\end{pmatrix}", marks: 1, markCode: "M" },
              { reasoning: "$\\overrightarrow{MC}=\\mathbf{c}-\\mathbf{m}$.", working: "=\\begin{pmatrix}6\\\\6\\end{pmatrix}-\\begin{pmatrix}2\\\\1\\end{pmatrix}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "=\\begin{pmatrix}4\\\\5\\end{pmatrix}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\begin{pmatrix}4\\\\5\\end{pmatrix}$",
            commonErrors: ["Subtracting in the wrong order."],
          },
        },
        {
          id: "ciem-u9-vector-proofs-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "In triangle $ABC$, $D$ and $E$ are midpoints of $AB$ and $AC$. Prove $DE \\parallel BC$ and $DE=\\frac12BC$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Midpoint theorem", statement: "$\\overrightarrow{DE}=\\frac12\\overrightarrow{BC}$" },
            ],
            steps: [
              { reasoning: "Let $\\mathbf{a}=\\mathbf{0}$. Then $\\mathbf{d}=\\frac{\\mathbf{b}}{2}$, $\\mathbf{e}=\\frac{\\mathbf{c}}{2}$.", working: "\\mathbf{d}=\\frac{b}{2},\\ \\mathbf{e}=\\frac{c}{2}", marks: 1, markCode: "M" },
              { reasoning: "$\\overrightarrow{DE}=\\mathbf{e}-\\mathbf{d}=\\frac{\\mathbf{c}-\\mathbf{b}}{2}$.", working: "=\\frac{\\mathbf{c}-\\mathbf{b}}{2}", marks: 1, markCode: "M" },
              { reasoning: "$\\overrightarrow{BC}=\\mathbf{c}-\\mathbf{b}$, so $\\overrightarrow{DE}=\\frac12\\overrightarrow{BC}$.", working: "\\overrightarrow{DE}=\\frac12\\overrightarrow{BC}", marks: 1, markCode: "M" },
              { reasoning: "Scalar multiple $\\Rightarrow$ parallel; factor $\\frac12$ $\\Rightarrow$ half length. QED.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Proven: $DE \\parallel BC$ and $DE=\\frac12BC$",
            commonErrors: ["Not stating the conclusion explicitly."],
          },
        },
        {
          id: "ciem-u9-vector-proofs-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "In parallelogram $ABCD$, $E$ is the midpoint of $AB$ and $F$ is the midpoint of $CD$. Position vectors: $\\mathbf{a}=\\begin{pmatrix}0\\\\0\\end{pmatrix}$, $\\mathbf{b}=\\begin{pmatrix}8\\\\0\\end{pmatrix}$, $\\mathbf{d}=\\begin{pmatrix}2\\\\6\\end{pmatrix}$, and $\\mathbf{c}=\\mathbf{b}+\\mathbf{d}$.",
          parts: [
            { label: "a", prompt: "Find $\\mathbf{c}$ and the position vectors of $E$ and $F$.", marks: 3 },
            { label: "b", prompt: "Prove $AECF$ is a parallelogram (show $\\overrightarrow{AE}=\\overrightarrow{FC}$ and $\\overrightarrow{AF}=\\overrightarrow{EC}$).", marks: 4 },
            { label: "c", prompt: "Find $\\overrightarrow{EF}$ and state its relationship to $\\overrightarrow{AD}$.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Parallelogram", statement: "$\\mathbf{c}=\\mathbf{b}+\\mathbf{d}$" },
              { kind: "technique", name: "Proof by vectors", statement: "Show opposite sides equal." },
            ],
            steps: [
              { part: "a", reasoning: "$\\mathbf{c}=\\begin{pmatrix}8\\\\0\\end{pmatrix}+\\begin{pmatrix}2\\\\6\\end{pmatrix}=\\begin{pmatrix}10\\\\6\\end{pmatrix}$.", working: "\\begin{pmatrix}10\\\\6\\end{pmatrix}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "$\\mathbf{e}=\\frac{\\mathbf{a}+\\mathbf{b}}{2}=\\begin{pmatrix}4\\\\0\\end{pmatrix}$; $\\mathbf{f}=\\frac{\\mathbf{c}+\\mathbf{d}}{2}=\\begin{pmatrix}6\\\\6\\end{pmatrix}$.", working: "\\begin{pmatrix}4\\\\0\\end{pmatrix},\\ \\begin{pmatrix}6\\\\6\\end{pmatrix}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the vectors.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$\\overrightarrow{AE}=\\mathbf{e}-\\mathbf{a}=\\begin{pmatrix}4\\\\0\\end{pmatrix}$; $\\overrightarrow{FC}=\\mathbf{c}-\\mathbf{f}=\\begin{pmatrix}10-6\\\\6-6\\end{pmatrix}=\\begin{pmatrix}4\\\\0\\end{pmatrix}$ — equal.", working: "\\overrightarrow{AE}=\\overrightarrow{FC}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "$\\overrightarrow{AF}=\\mathbf{f}-\\mathbf{a}=\\begin{pmatrix}6\\\\6\\end{pmatrix}$; $\\overrightarrow{EC}=\\mathbf{c}-\\mathbf{e}=\\begin{pmatrix}10-4\\\\6-0\\end{pmatrix}=\\begin{pmatrix}6\\\\6\\end{pmatrix}$ — equal.", working: "\\overrightarrow{AF}=\\overrightarrow{EC}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Both pairs of opposite sides equal → $AECF$ is a parallelogram.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the conclusion.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$\\overrightarrow{EF}=\\mathbf{f}-\\mathbf{e}=\\begin{pmatrix}2\\\\6\\end{pmatrix}$.", working: "\\begin{pmatrix}2\\\\6\\end{pmatrix}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "$\\overrightarrow{AD}=\\mathbf{d}-\\mathbf{a}=\\begin{pmatrix}2\\\\6\\end{pmatrix}$ — equal, so $EF \\parallel AD$ and $EF=AD$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $\\mathbf{c}=\\begin{pmatrix}10\\\\6\\end{pmatrix}$, $\\mathbf{e}=\\begin{pmatrix}4\\\\0\\end{pmatrix}$, $\\mathbf{f}=\\begin{pmatrix}6\\\\6\\end{pmatrix}$ (b) proven (c) $\\overrightarrow{EF}=\\overrightarrow{AD}$",
            commonErrors: ["In (b) mixing up which pairs are opposite sides.", "In (c) computing $\\overrightarrow{FE}$ instead of $\\overrightarrow{EF}$."],
          },
        },
        {
          id: "ciem-u9-vector-proofs-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "When setting up a vector proof, the best place to put the origin is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Always at the centre of the diagram" },
              { id: "b", text: "At the midpoint of the longest side" },
              { id: "c", text: "At a vertex that makes the algebra simplest" },
              { id: "d", text: "It makes no difference" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Origin choice", statement: "Place the origin where position vectors simplify — often a vertex." },
            ],
            steps: [
              { reasoning: "Recall the proof strategy.", working: "\\text{convenient vertex}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** At a simplifying vertex",
            commonErrors: ["Choosing an arbitrary point and making algebra harder."],
          },
        },
        {
          id: "ciem-u9-vector-proofs-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "In triangle $ABC$, $A(0,0)$, $B(4,0)$, $C(0,6)$. $D$ is the midpoint of $AB$ and $E$ is the midpoint of $AC$. Find $\\overrightarrow{DE}$.",
          response: { type: "numeric", unordered: true, parts: [{ label: "x", answer: -2, tolerance: 0.001 }, { label: "y", answer: 3, tolerance: 0.001 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Midpoint", statement: "$\\mathbf{d}=\\frac{\\mathbf{a}+\\mathbf{b}}{2}$" },
            ],
            steps: [
              { reasoning: "$\\mathbf{d}=\\begin{pmatrix}2\\\\0\\end{pmatrix}$, $\\mathbf{e}=\\begin{pmatrix}0\\\\3\\end{pmatrix}$, so $\\overrightarrow{DE}=\\mathbf{e}-\\mathbf{d}$.", working: "\\begin{pmatrix}0-2\\\\3-0\\end{pmatrix}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "=\\begin{pmatrix}-2\\\\3\\end{pmatrix}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\begin{pmatrix}-2\\\\3\\end{pmatrix}$",
            commonErrors: ["Computing $\\overrightarrow{ED}$ instead."],
          },
        },
        {
          id: "ciem-u9-vector-proofs-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "The midpoint theorem states that the segment joining the midpoints of two sides of a triangle is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Equal to the third side" },
              { id: "b", text: "Half the perimeter" },
              { id: "c", text: "Parallel to the third side and half its length" },
              { id: "d", text: "Perpendicular to the third side" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Midpoint theorem", statement: "$\\overrightarrow{DE}=\\frac12\\overrightarrow{BC}$" },
            ],
            steps: [
              { reasoning: "Recall the theorem.", working: "DE = (1/2) BC", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Parallel and half the length",
            commonErrors: ["Forgetting the factor $\\frac12$."],
          },
        },
        {
          id: "ciem-u9-vector-proofs-q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "In triangle $ABC$, place $A$ at the origin with $\\mathbf{b}=\\begin{pmatrix}4\\\\2\\end{pmatrix}$ and $\\mathbf{c}=\\begin{pmatrix}8\\\\6\\end{pmatrix}$. $D$ and $E$ are the midpoints of $AB$ and $AC$. Prove that $DE \\parallel BC$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Midpoint theorem", statement: "$\\overrightarrow{DE}=\\frac12\\overrightarrow{BC}$" },
            ],
            steps: [
              { reasoning: "$\\mathbf{d}=\\frac{\\mathbf{b}}{2}=\\begin{pmatrix}2\\\\1\\end{pmatrix}$, $\\mathbf{e}=\\frac{\\mathbf{c}}{2}=\\begin{pmatrix}4\\\\3\\end{pmatrix}$.", working: "d=b/2,\\ e=c/2", marks: 1, markCode: "M" },
              { reasoning: "$\\overrightarrow{DE}=\\mathbf{e}-\\mathbf{d}=\\frac{\\mathbf{c}-\\mathbf{b}}{2}=\\frac12\\overrightarrow{BC}$.", working: "\\overrightarrow{DE}=\\frac12\\overrightarrow{BC}", marks: 1, markCode: "M" },
              { reasoning: "A scalar multiple $\\Rightarrow$ $DE \\parallel BC$. QED.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Proven: $DE \\parallel BC$",
            commonErrors: ["Not stating the conclusion explicitly."],
          },
        },
        {
          id: "ciem-u9-vector-proofs-q9",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "In a triangle, $D$ and $E$ are the midpoints of $AB$ and $AC$. Given $\\overrightarrow{BC}=\\begin{pmatrix}10\\\\14\\end{pmatrix}$, find $\\overrightarrow{DE}$.",
          response: { type: "numeric", unordered: true, parts: [{ label: "x", answer: 5, tolerance: 0.001 }, { label: "y", answer: 7, tolerance: 0.001 }] },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Midpoint theorem", statement: "$\\overrightarrow{DE}=\\frac12\\overrightarrow{BC}$" },
            ],
            steps: [
              { reasoning: "Halve $\\overrightarrow{BC}$.", working: "=\\frac12\\begin{pmatrix}10\\\\14\\end{pmatrix}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "=\\begin{pmatrix}5\\\\7\\end{pmatrix}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\begin{pmatrix}5\\\\7\\end{pmatrix}$",
            commonErrors: ["Forgetting the factor $\\frac12$."],
          },
        },
        {
          id: "ciem-u9-vector-proofs-q10",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "To prove that $ABCD$ is a parallelogram using vectors, you show that:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The diagonals are equal" },
              { id: "b", text: "All four sides are equal" },
              { id: "c", text: "Both pairs of opposite side vectors are equal" },
              { id: "d", text: "One pair of sides is parallel" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Proof by vectors", statement: "Equal opposite side vectors $\\Rightarrow$ parallelogram." },
            ],
            steps: [
              { reasoning: "Recall the proof method.", working: "AB=DC and AD=BC", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Opposite side vectors equal",
            commonErrors: ["Stopping after proving only one pair parallel."],
          },
        },
        {
          id: "ciem-u9-vector-proofs-q11",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "In parallelogram $ABCD$, $E$ is the midpoint of $AB$ and $F$ is the midpoint of $AD$. Prove that $EF \\parallel BD$ and $EF=\\frac12BD$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Midpoint theorem", statement: "$\\overrightarrow{EF}=\\frac12\\overrightarrow{BD}$ in triangle $ABD$" },
            ],
            steps: [
              { reasoning: "Place $\\mathbf{a}=\\mathbf{0}$. Then $\\mathbf{e}=\\frac{\\mathbf{b}}{2}$ and $\\mathbf{f}=\\frac{\\mathbf{d}}{2}$.", working: "e=b/2,\\ f=d/2", marks: 1, markCode: "M" },
              { reasoning: "$\\overrightarrow{EF}=\\mathbf{f}-\\mathbf{e}=\\frac{\\mathbf{d}-\\mathbf{b}}{2}=\\frac12\\overrightarrow{BD}$.", working: "\\overrightarrow{EF}=\\frac{\\mathbf{d}-\\mathbf{b}}{2}", marks: 1, markCode: "M" },
              { reasoning: "$\\overrightarrow{BD}=\\mathbf{d}-\\mathbf{b}$, so $\\overrightarrow{EF}$ is a scalar multiple of it.", marks: 1, markCode: "M" },
              { reasoning: "Hence $EF \\parallel BD$ and $EF=\\frac12BD$. QED.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Proven: $EF \\parallel BD$ and $EF=\\frac12BD$",
            commonErrors: ["Using $\\overrightarrow{DB}$ instead of $\\overrightarrow{BD}$ — still parallel but wrong direction stated."],
          },
        },
        {
          id: "ciem-u9-vector-proofs-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The centroid of a triangle divides each median in the ratio:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$1:1$" },
              { id: "b", text: "$3:1$ measured from the vertex" },
              { id: "c", text: "$1:2$ measured from the vertex" },
              { id: "d", text: "$2:1$ measured from the vertex" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Centroid", statement: "$\\frac23$ of the way along each median from the vertex." },
            ],
            steps: [
              { reasoning: "Recall the property.", working: "AG:GM=2:1", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** $2:1$ from the vertex",
            commonErrors: ["Reversing the ratio."],
          },
        },
        {
          id: "ciem-u9-vector-proofs-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "If $\\overrightarrow{DE}=\\frac12\\overrightarrow{BC}$, then $DE$ is ___ to $BC$ and ___ its length.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "parallel; equal" },
              { id: "b", text: "perpendicular; half" },
              { id: "c", text: "parallel; half" },
              { id: "d", text: "equal; equal" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Scalar multiple", statement: "$k\\mathbf{v}$ gives parallel direction; $|k|$ scales length." },
            ],
            steps: [
              { reasoning: "Factor $\\frac12$ scales length by half; direction unchanged → parallel.", working: "k=1/2", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Parallel; half",
            commonErrors: ["Ignoring the length factor."],
          },
        },
        {
          id: "ciem-u9-vector-proofs-q14",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Triangle $ABC$ with $\\mathbf{a}=\\mathbf{0}$, $\\mathbf{b}=\\begin{pmatrix}6\\\\0\\end{pmatrix}$, $\\mathbf{c}=\\begin{pmatrix}2\\\\4\\end{pmatrix}$. $M$ is the midpoint of $BC$. Find $\\overrightarrow{AM}$.",
          response: { type: "numeric", unordered: true, parts: [{ label: "x", answer: 4, tolerance: 0.001 }, { label: "y", answer: 2, tolerance: 0.001 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Midpoint", statement: "$\\mathbf{m}=\\frac{\\mathbf{b}+\\mathbf{c}}{2}$" },
            ],
            steps: [
              { reasoning: "$\\mathbf{m}=\\frac12\\left(\\begin{pmatrix}6\\\\0\\end{pmatrix}+\\begin{pmatrix}2\\\\4\\end{pmatrix}\\right)=\\frac12\\begin{pmatrix}8\\\\4\\end{pmatrix}=\\begin{pmatrix}4\\\\2\\end{pmatrix}$.", working: "m=(4,2)", marks: 1, markCode: "M" },
              { reasoning: "$\\overrightarrow{AM}=\\mathbf{m}-\\mathbf{a}=\\begin{pmatrix}4\\\\2\\end{pmatrix}$.", working: "AM=m-a", marks: 1, markCode: "M" },
              { reasoning: "State the vector.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\overrightarrow{AM}=\\begin{pmatrix}4\\\\2\\end{pmatrix}$",
            commonErrors: ["Using $\\frac{\\mathbf{b}+\\mathbf{c}}{3}$ (centroid) instead of midpoint."],
          },
        },
        {
          id: "ciem-u9-vector-proofs-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "In triangle $A(0,0)$, $B(8,0)$, $C(4,10)$, $D$, $E$, $F$ are the midpoints of $AB$, $BC$, $CA$ respectively. Find the length of $EF$.",
          response: { type: "numeric", parts: [{ label: "EF", answer: 4, tolerance: 0.001 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Midpoint", statement: "$\\mathbf{e}=\\frac{\\mathbf{b}+\\mathbf{c}}{2}$, $\\mathbf{f}=\\frac{\\mathbf{c}+\\mathbf{a}}{2}$" },
            ],
            steps: [
              { reasoning: "$\\mathbf{e}=\\begin{pmatrix}6\\\\5\\end{pmatrix}$, $\\mathbf{f}=\\begin{pmatrix}2\\\\5\\end{pmatrix}$.", working: "e=(6,5),\\ f=(2,5)", marks: 1, markCode: "M" },
              { reasoning: "$\\overrightarrow{EF}=\\mathbf{f}-\\mathbf{e}=\\begin{pmatrix}-4\\\\0\\end{pmatrix}$.", working: "EF=(-4,0)", marks: 1, markCode: "M" },
              { reasoning: "Length $=4$.", working: "|EF|=4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$EF=4$",
            commonErrors: ["Computing the wrong pair of midpoints."],
          },
        },
        {
          id: "ciem-u9-vector-proofs-q16",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Triangle $ABC$ with $\\mathbf{a}=\\mathbf{0}$, $\\mathbf{b}=\\begin{pmatrix}10\\\\0\\end{pmatrix}$, $\\mathbf{c}=\\begin{pmatrix}6\\\\8\\end{pmatrix}$. $D$, $E$, $F$ are the midpoints of $AB$, $AC$, $BC$.",
          parts: [
            { label: "a", prompt: "Find the position vectors of $D$, $E$ and $F$.", marks: 3 },
            { label: "b", prompt: "Prove $DE \\parallel BC$ and $DE=\\frac12BC$.", marks: 3 },
            { label: "c", prompt: "Find $\\overrightarrow{EF}$ and compare it with $\\overrightarrow{AB}$.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Midpoint", statement: "$\\mathbf{d}=\\frac{\\mathbf{a}+\\mathbf{b}}{2}$ etc." },
              { kind: "technique", name: "Proof by vectors", statement: "Show one vector is a scalar multiple of another." },
            ],
            steps: [
              { part: "a", reasoning: "$\\mathbf{d}=\\frac12\\begin{pmatrix}10\\\\0\\end{pmatrix}=\\begin{pmatrix}5\\\\0\\end{pmatrix}$; $\\mathbf{e}=\\frac12\\begin{pmatrix}6\\\\8\\end{pmatrix}=\\begin{pmatrix}3\\\\4\\end{pmatrix}$; $\\mathbf{f}=\\frac12\\left(\\begin{pmatrix}10\\\\0\\end{pmatrix}+\\begin{pmatrix}6\\\\8\\end{pmatrix}\\right)=\\begin{pmatrix}8\\\\4\\end{pmatrix}$.", working: "\\begin{pmatrix}5\\\\0\\end{pmatrix},\\ \\begin{pmatrix}3\\\\4\\end{pmatrix},\\ \\begin{pmatrix}8\\\\4\\end{pmatrix}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State all three position vectors.", marks: 2, markCode: "A" },
              { part: "b", reasoning: "$\\overrightarrow{DE}=\\mathbf{e}-\\mathbf{d}=\\begin{pmatrix}3-5\\\\4-0\\end{pmatrix}=\\begin{pmatrix}-2\\\\4\\end{pmatrix}$.", working: "\\begin{pmatrix}-2\\\\4\\end{pmatrix}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "$\\overrightarrow{BC}=\\mathbf{c}-\\mathbf{b}=\\begin{pmatrix}-4\\\\8\\end{pmatrix}=2\\begin{pmatrix}-2\\\\4\\end{pmatrix}$.", working: "\\overrightarrow{BC}=2\\overrightarrow{DE}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Scalar multiple $\\Rightarrow$ parallel and half length. QED.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$\\overrightarrow{EF}=\\mathbf{f}-\\mathbf{e}=\\begin{pmatrix}8-3\\\\4-4\\end{pmatrix}=\\begin{pmatrix}5\\\\0\\end{pmatrix}$.", working: "\\begin{pmatrix}5\\\\0\\end{pmatrix}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "$\\overrightarrow{AB}=\\begin{pmatrix}10\\\\0\\end{pmatrix}=2\\overrightarrow{EF}$ — so $EF \\parallel AB$ and $EF=\\frac12AB$.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State the comparison.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $\\mathbf{d}=\\begin{pmatrix}5\\\\0\\end{pmatrix}$, $\\mathbf{e}=\\begin{pmatrix}3\\\\4\\end{pmatrix}$, $\\mathbf{f}=\\begin{pmatrix}8\\\\4\\end{pmatrix}$ (b) proven (c) $\\overrightarrow{EF}=\\frac12\\overrightarrow{AB}$",
            commonErrors: ["In (b) using $\\overrightarrow{CB}$ instead of $\\overrightarrow{BC}$.", "In (c) pairing the wrong midpoints."],
          },
        },
      ],
    },
    {
      id: "ciem-u9-vector-problem-solving",
      title: "Vector problem solving",
      skill: "Solve extended problems using position vectors, ratios and geometric proofs.",
      lesson: {
        sections: [
          {
            heading: "Strategy",
            body: "1. Draw the figure and label all points.\n2. Assign position vectors (origin at a convenient vertex).\n3. Express needed vectors, look for scalar multiples or equalities.\n4. State conclusions explicitly.",
          },
          {
            heading: "Common results",
            body: "- Midpoint of $AB$: $\\frac{\\mathbf{a}+\\mathbf{b}}{2}$\n- Centroid: $\\frac{\\mathbf{a}+\\mathbf{b}+\\mathbf{c}}{3}$\n- Point dividing $AB$ in ratio $m:n$: $\\frac{n\\mathbf{a}+m\\mathbf{b}}{m+n}$",
          },
          {
            heading: "Checking",
            body: "Verify vector directions carefully ($\\overrightarrow{AB}$ vs $\\overrightarrow{BA}$). A sign error reverses the vector.",
          },
        ],
        keyFormulas: [
          { name: "Section formula", statement: "$\\frac{n\\mathbf{a}+m\\mathbf{b}}{m+n}$" },
          { name: "Centroid", statement: "$\\frac{\\mathbf{a}+\\mathbf{b}+\\mathbf{c}}{3}$" },
        ],
        workedExample: {
          problem: "$A(0,0)$, $B(8,4)$, $C(2,10)$. Find the centroid.",
          solution: "$\\frac13\\left(\\begin{pmatrix}0\\\\0\\end{pmatrix}+\\begin{pmatrix}8\\\\4\\end{pmatrix}+\\begin{pmatrix}2\\\\10\\end{pmatrix}\\right)=\\frac13\\begin{pmatrix}10\\\\14\\end{pmatrix}=\\begin{pmatrix}10/3\\\\14/3\\end{pmatrix}$.",
        },
      },
      questions: [
        {
          id: "ciem-u9-vector-problem-solving-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Where should you place the origin when setting up a vector proof?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "At the midpoint of the longest side" },
              { id: "b", text: "At a vertex that simplifies the algebra" },
              { id: "c", text: "Always at the centre of the shape" },
              { id: "d", text: "It doesn't matter" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Origin choice", statement: "Place origin where it simplifies — often a vertex." },
            ],
            steps: [
              { reasoning: "Recall the strategy.", working: "\\text{convenient vertex}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** At a simplifying vertex",
            commonErrors: ["Choosing the centre when a vertex is simpler."],
          },
        },
        {
          id: "ciem-u9-vector-problem-solving-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "$A(0,0)$, $B(6,2)$, $C(4,8)$. Find the centroid of triangle $ABC$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Centroid", statement: "$\\frac{\\mathbf{a}+\\mathbf{b}+\\mathbf{c}}{3}$" },
            ],
            steps: [
              { reasoning: "Sum position vectors.", working: "\\begin{pmatrix}0+6+4\\\\0+2+8\\end{pmatrix}=\\begin{pmatrix}10\\\\10\\end{pmatrix}", marks: 1, markCode: "M" },
              { reasoning: "Divide by 3.", working: "=\\begin{pmatrix}10/3\\\\10/3\\end{pmatrix}", marks: 1, markCode: "M" },
              { reasoning: "State the position vector.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\begin{pmatrix}10/3\\\\10/3\\end{pmatrix}$",
            commonErrors: ["Dividing by 2 (midpoint formula) instead of 3."],
          },
        },
        {
          id: "ciem-u9-vector-problem-solving-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "$A(1,1)$, $B(7,3)$, $C(5,9)$. $D$ divides $BC$ in ratio $1:2$. Find the position vector of $D$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Section formula", statement: "$\\mathbf{d}=\\frac{2\\mathbf{b}+1\\mathbf{c}}{3}$" },
            ],
            steps: [
              { reasoning: "Ratio $1:2$ from $B$ to $C$: $\\mathbf{d}=\\frac{2\\mathbf{b}+\\mathbf{c}}{3}$.", working: "\\frac{2\\mathbf{b}+\\mathbf{c}}{3}", marks: 1, markCode: "M" },
              { reasoning: "Substitute: $\\frac13\\left(2\\begin{pmatrix}7\\\\3\\end{pmatrix}+\\begin{pmatrix}5\\\\9\\end{pmatrix}\\right)$.", working: "=\\frac13\\begin{pmatrix}14+5\\\\6+9\\end{pmatrix}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "=\\frac13\\begin{pmatrix}19\\\\15\\end{pmatrix}=\\begin{pmatrix}19/3\\\\5\\end{pmatrix}", marks: 1, markCode: "M" },
              { reasoning: "State the position vector.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\begin{pmatrix}19/3\\\\5\\end{pmatrix}$",
            commonErrors: ["Reversing the ratio weights ($\\frac{\\mathbf{b}+2\\mathbf{c}}{3}$)."],
          },
        },
        {
          id: "ciem-u9-vector-problem-solving-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "In triangle $ABC$, $D$, $E$, $F$ are the midpoints of $AB$, $AC$ and $BC$ respectively. Position vectors: $\\mathbf{a}=\\begin{pmatrix}0\\\\0\\end{pmatrix}$, $\\mathbf{b}=\\begin{pmatrix}8\\\\0\\end{pmatrix}$, $\\mathbf{c}=\\begin{pmatrix}4\\\\8\\end{pmatrix}$.",
          parts: [
            { label: "a", prompt: "Find the position vectors of $D$, $E$ and $F$.", marks: 3 },
            { label: "b", prompt: "Show that $DE \\parallel BC$ and $DE=\\frac12BC$.", marks: 4 },
            { label: "c", prompt: "Show that $EF \\parallel AB$ and comment on $\\overrightarrow{EF}$ and $\\overrightarrow{AB}$.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Midpoint", statement: "$\\mathbf{d}=\\frac{\\mathbf{a}+\\mathbf{b}}{2}$ etc." },
              { kind: "technique", name: "Proof by vectors", statement: "Show one vector is a scalar multiple of another." },
            ],
            steps: [
              { part: "a", reasoning: "$\\mathbf{d}=\\frac12\\begin{pmatrix}8\\\\0\\end{pmatrix}=\\begin{pmatrix}4\\\\0\\end{pmatrix}$; $\\mathbf{e}=\\frac12\\begin{pmatrix}4\\\\8\\end{pmatrix}=\\begin{pmatrix}2\\\\4\\end{pmatrix}$; $\\mathbf{f}=\\frac12\\left(\\begin{pmatrix}8\\\\0\\end{pmatrix}+\\begin{pmatrix}4\\\\8\\end{pmatrix}\\right)=\\begin{pmatrix}6\\\\4\\end{pmatrix}$.", working: "\\begin{pmatrix}4\\\\0\\end{pmatrix},\\ \\begin{pmatrix}2\\\\4\\end{pmatrix},\\ \\begin{pmatrix}6\\\\4\\end{pmatrix}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State all three position vectors.", marks: 2, markCode: "A" },
              { part: "b", reasoning: "$\\overrightarrow{DE}=\\mathbf{e}-\\mathbf{d}=\\begin{pmatrix}2-4\\\\4-0\\end{pmatrix}=\\begin{pmatrix}-2\\\\4\\end{pmatrix}$.", working: "\\begin{pmatrix}-2\\\\4\\end{pmatrix}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "$\\overrightarrow{BC}=\\mathbf{c}-\\mathbf{b}=\\begin{pmatrix}4-8\\\\8-0\\end{pmatrix}=\\begin{pmatrix}-4\\\\8\\end{pmatrix}=2\\begin{pmatrix}-2\\\\4\\end{pmatrix}$.", working: "\\overrightarrow{BC}=2\\overrightarrow{DE}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Scalar multiple $\\Rightarrow$ parallel; factor 2 $\\Rightarrow$ $DE=\\frac12BC$.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the conclusion.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$\\overrightarrow{EF}=\\mathbf{f}-\\mathbf{e}=\\begin{pmatrix}6-2\\\\4-4\\end{pmatrix}=\\begin{pmatrix}4\\\\0\\end{pmatrix}$.", working: "\\begin{pmatrix}4\\\\0\\end{pmatrix}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "$\\overrightarrow{AB}=\\mathbf{b}-\\mathbf{a}=\\begin{pmatrix}8\\\\0\\end{pmatrix}=2\\overrightarrow{EF}$ — parallel and $EF=\\frac12AB$; directions are the same.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $\\mathbf{d}=\\begin{pmatrix}4\\\\0\\end{pmatrix}$, $\\mathbf{e}=\\begin{pmatrix}2\\\\4\\end{pmatrix}$, $\\mathbf{f}=\\begin{pmatrix}6\\\\4\\end{pmatrix}$ (b) proven (c) $EF \\parallel AB$, $EF=\\frac12AB$",
            commonErrors: ["In (b) using $\\overrightarrow{CB}$ instead of $\\overrightarrow{BC}$.", "In (c) not comparing with $\\overrightarrow{AB}$ explicitly."],
          },
        },
        {
          id: "ciem-u9-vector-problem-solving-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The most useful first step in a vector geometry problem is to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Guess the answer and check" },
              { id: "b", text: "Measure the diagram with a ruler" },
              { id: "c", text: "Assign position vectors to the key points" },
              { id: "d", text: "Convert everything to Cartesian coordinates" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Strategy", statement: "Set up position vectors early — most parts build on them." },
            ],
            steps: [
              { reasoning: "Recall the strategy.", working: "\\text{assign position vectors}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Assign position vectors",
            commonErrors: ["Starting calculations without a clear setup."],
          },
        },
        {
          id: "ciem-u9-vector-problem-solving-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "$A(0,0)$, $B(4,0)$, $C(1,4)$. Find the centroid of triangle $ABC$.",
          response: { type: "numeric", unordered: true, parts: [{ label: "x", answer: 1.67, tolerance: 0.01 }, { label: "y", answer: 1.33, tolerance: 0.01 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Centroid", statement: "$\\mathbf{g}=\\frac{\\mathbf{a}+\\mathbf{b}+\\mathbf{c}}{3}$" },
            ],
            steps: [
              { reasoning: "Sum and divide by 3: $\\frac13\\begin{pmatrix}5\\\\4\\end{pmatrix}$.", working: "g=(5/3,\\ 4/3)", marks: 1, markCode: "M" },
              { reasoning: "State decimal values.", working: "(1.67,\\ 1.33)", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$G\\left(\\frac53,\\frac43\\right)\\approx(1.67,1.33)$",
            commonErrors: ["Dividing by 2 instead of 3."],
          },
        },
        {
          id: "ciem-u9-vector-problem-solving-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "When using the section formula for the ratio $m:n$, the weights on $\\mathbf{a}$ and $\\mathbf{b}$ are respectively:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$n$ on $\\mathbf{a}$ and $m$ on $\\mathbf{b}$" },
              { id: "b", text: "$m$ on $\\mathbf{a}$ and $n$ on $\\mathbf{b}$" },
              { id: "c", text: "$n$ on both" },
              { id: "d", text: "$m$ on both" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Section formula", statement: "$\\mathbf{p}=\\frac{n\\mathbf{a}+m\\mathbf{b}}{m+n}$ — weights reversed." },
            ],
            steps: [
              { reasoning: "Recall the formula.", working: "n a + m b", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $n$ on $\\mathbf{a}$, $m$ on $\\mathbf{b}$",
            commonErrors: ["Using the ratio order directly without reversing."],
          },
        },
        {
          id: "ciem-u9-vector-problem-solving-q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "$A(2,1)$, $B(8,7)$, $C(5,4)$. Find the centroid of triangle $ABC$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Centroid", statement: "$\\mathbf{g}=\\frac{\\mathbf{a}+\\mathbf{b}+\\mathbf{c}}{3}$" },
            ],
            steps: [
              { reasoning: "Sum the position vectors.", working: "\\begin{pmatrix}2+8+5\\\\1+7+4\\end{pmatrix}=\\begin{pmatrix}15\\\\12\\end{pmatrix}", marks: 1, markCode: "M" },
              { reasoning: "Divide by 3.", working: "=\\frac13\\begin{pmatrix}15\\\\12\\end{pmatrix}", marks: 1, markCode: "M" },
              { reasoning: "State the position vector.", working: "=\\begin{pmatrix}5\\\\4\\end{pmatrix}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\begin{pmatrix}5\\\\4\\end{pmatrix}$",
            commonErrors: ["Dividing by 2 (midpoint formula)."],
          },
        },
        {
          id: "ciem-u9-vector-problem-solving-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "$A(0,0)$, $B(12,6)$. Point $P$ divides $AB$ in the ratio $1:2$. Find the position vector of $P$.",
          response: { type: "numeric", unordered: true, parts: [{ label: "x", answer: 4, tolerance: 0.001 }, { label: "y", answer: 2, tolerance: 0.001 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Section formula", statement: "$\\mathbf{p}=\\mathbf{a}+\\frac{m}{m+n}(\\mathbf{b}-\\mathbf{a})$" },
            ],
            steps: [
              { reasoning: "$\\mathbf{p}=\\frac13\\begin{pmatrix}12\\\\6\\end{pmatrix}$ (one third of the way).", working: "=\\frac13\\begin{pmatrix}12\\\\6\\end{pmatrix}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "=\\begin{pmatrix}4\\\\2\\end{pmatrix}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\begin{pmatrix}4\\\\2\\end{pmatrix}$",
            commonErrors: ["Using $\\frac23$ instead of $\\frac13$."],
          },
        },
        {
          id: "ciem-u9-vector-problem-solving-q10",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "The position vector of the point dividing $AB$ in the ratio $m:n$ is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac{m\\mathbf{a}+n\\mathbf{b}}{m+n}$" },
              { id: "b", text: "$\\frac{n\\mathbf{a}+m\\mathbf{b}}{m+n}$" },
              { id: "c", text: "$\\mathbf{a}+\\frac{n}{m}(\\mathbf{b}-\\mathbf{a})$" },
              { id: "d", text: "$\\frac{\\mathbf{a}+\\mathbf{b}}{m+n}$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Section formula", statement: "$\\frac{n\\mathbf{a}+m\\mathbf{b}}{m+n}$" },
            ],
            steps: [
              { reasoning: "Recall the formula.", working: "n a + m b over m+n", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $\\frac{n\\mathbf{a}+m\\mathbf{b}}{m+n}$",
            commonErrors: ["Not reversing the weights."],
          },
        },
        {
          id: "ciem-u9-vector-problem-solving-q11",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "$A(0,0)$, $B(9,3)$, $C(3,9)$. $D$ is the midpoint of $BC$. Find $\\overrightarrow{AD}$ and its length.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Midpoint", statement: "$\\mathbf{d}=\\frac{\\mathbf{b}+\\mathbf{c}}{2}$" },
              { kind: "formula", name: "Magnitude", statement: "$|\\mathbf{v}|=\\sqrt{x^2+y^2}$" },
            ],
            steps: [
              { reasoning: "$\\mathbf{d}=\\frac12\\left(\\begin{pmatrix}9\\\\3\\end{pmatrix}+\\begin{pmatrix}3\\\\9\\end{pmatrix}\\right)=\\begin{pmatrix}6\\\\6\\end{pmatrix}$.", working: "d=(6,6)", marks: 1, markCode: "M" },
              { reasoning: "$\\overrightarrow{AD}=\\mathbf{d}-\\mathbf{a}=\\begin{pmatrix}6\\\\6\\end{pmatrix}$.", working: "AD=(6,6)", marks: 1, markCode: "M" },
              { reasoning: "Length $=\\sqrt{36+36}=\\sqrt{72}=6\\sqrt2$.", working: "\\sqrt{72}", marks: 1, markCode: "M" },
              { reasoning: "State both answers.", working: "6\\sqrt2\\approx8.49", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\overrightarrow{AD}=\\begin{pmatrix}6\\\\6\\end{pmatrix}$, length $6\\sqrt2\\approx8.49$",
            commonErrors: ["Stopping at the vector without finding the length."],
          },
        },
        {
          id: "ciem-u9-vector-problem-solving-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "$A(0,0)$, $B(6,0)$, $C(0,9)$. The centroid of triangle $ABC$ is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$(3,2)$" },
              { id: "b", text: "$(6,9)$" },
              { id: "c", text: "$(2,3)$" },
              { id: "d", text: "$(2,4.5)$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Centroid", statement: "$\\frac{\\mathbf{a}+\\mathbf{b}+\\mathbf{c}}{3}$" },
            ],
            steps: [
              { reasoning: "$\\frac13\\begin{pmatrix}6\\\\9\\end{pmatrix}=\\begin{pmatrix}2\\\\3\\end{pmatrix}$.", working: "(2,3)", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** $(2,3)$",
            commonErrors: ["Dividing by 2 instead of 3."],
          },
        },
        {
          id: "ciem-u9-vector-problem-solving-q13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'show that' question in vectors requires you to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Draw an accurate diagram" },
              { id: "b", text: "Just write down the final answer" },
              { id: "c", text: "Give algebraic working that leads to the stated result" },
              { id: "d", text: "State the formula used" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Show that", statement: "Algebraic justification ending in the required result earns the marks." },
            ],
            steps: [
              { reasoning: "Recall exam technique.", working: "\\text{justify algebraically}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Algebraic working leading to the result",
            commonErrors: ["Writing only the answer — no marks for unsupported results."],
          },
        },
        {
          id: "ciem-u9-vector-problem-solving-q14",
          difficulty: "core",
          totalMarks: 3,
          stem: "$A(1,2)$, $B(5,2)$, $C(3,6)$. $M$ is the midpoint of $AC$. Find the vector from $B$ to $M$.",
          response: { type: "numeric", unordered: true, parts: [{ label: "x", answer: -3, tolerance: 0.001 }, { label: "y", answer: 2, tolerance: 0.001 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Midpoint", statement: "$\\mathbf{m}=\\frac{\\mathbf{a}+\\mathbf{c}}{2}$" },
            ],
            steps: [
              { reasoning: "$\\mathbf{m}=\\frac12\\left(\\begin{pmatrix}1\\\\2\\end{pmatrix}+\\begin{pmatrix}3\\\\6\\end{pmatrix}\\right)=\\begin{pmatrix}2\\\\4\\end{pmatrix}$.", working: "m=(2,4)", marks: 1, markCode: "M" },
              { reasoning: "$\\overrightarrow{BM}=\\mathbf{m}-\\mathbf{b}=\\begin{pmatrix}2-5\\\\4-2\\end{pmatrix}$.", working: "=\\begin{pmatrix}-3\\\\2\\end{pmatrix}", marks: 1, markCode: "M" },
              { reasoning: "State the vector.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\begin{pmatrix}-3\\\\2\\end{pmatrix}$",
            commonErrors: ["Computing $\\overrightarrow{MB}$ instead of $\\overrightarrow{BM}$."],
          },
        },
        {
          id: "ciem-u9-vector-problem-solving-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Square $ABCD$ has $A(0,0)$, $B(10,0)$, $C(10,10)$, $D(0,10)$. Find the position vector of the intersection of the diagonals.",
          response: { type: "numeric", unordered: true, parts: [{ label: "x", answer: 5, tolerance: 0.001 }, { label: "y", answer: 5, tolerance: 0.001 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Diagonal intersection", statement: "Diagonals of a parallelogram bisect — intersection is midpoint of either diagonal." },
            ],
            steps: [
              { reasoning: "Intersection $=$ midpoint of $AC$.", working: "\\frac12\\left(\\begin{pmatrix}0\\\\0\\end{pmatrix}+\\begin{pmatrix}10\\\\10\\end{pmatrix}\\right)", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "=\\begin{pmatrix}5\\\\5\\end{pmatrix}", marks: 1, markCode: "M" },
              { reasoning: "State the position vector.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\begin{pmatrix}5\\\\5\\end{pmatrix}$",
            commonErrors: ["Using midpoint of a side instead of a diagonal."],
          },
        },
        {
          id: "ciem-u9-vector-problem-solving-q16",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "$A(0,0)$, $B(8,0)$, $C(10,4)$, $D(2,4)$ form a parallelogram.",
          parts: [
            { label: "a", prompt: "Find $\\overrightarrow{AB}$ and $\\overrightarrow{DC}$, and show they are equal.", marks: 3 },
            { label: "b", prompt: "Find $\\overrightarrow{AD}$ and $\\overrightarrow{BC}$, and show they are equal.", marks: 3 },
            { label: "c", prompt: "Find the position vector of the intersection of the diagonals $AC$ and $BD$.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Vector between points", statement: "$\\overrightarrow{PQ}=\\mathbf{q}-\\mathbf{p}$" },
              { kind: "property", name: "Parallelogram diagonals", statement: "Diagonals bisect each other — intersection is the midpoint." },
            ],
            steps: [
              { part: "a", reasoning: "$\\overrightarrow{AB}=\\begin{pmatrix}8\\\\0\\end{pmatrix}$; $\\overrightarrow{DC}=\\begin{pmatrix}10-2\\\\4-4\\end{pmatrix}=\\begin{pmatrix}8\\\\0\\end{pmatrix}$ — equal.", working: "\\overrightarrow{AB}=\\overrightarrow{DC}", marks: 2, markCode: "M" },
              { part: "a", reasoning: "State the conclusion.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$\\overrightarrow{AD}=\\begin{pmatrix}2\\\\4\\end{pmatrix}$; $\\overrightarrow{BC}=\\begin{pmatrix}10-8\\\\4-0\\end{pmatrix}=\\begin{pmatrix}2\\\\4\\end{pmatrix}$ — equal.", working: "\\overrightarrow{AD}=\\overrightarrow{BC}", marks: 2, markCode: "M" },
              { part: "b", reasoning: "State the conclusion.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Intersection $=$ midpoint of $AC$: $\\frac12\\left(\\begin{pmatrix}0\\\\0\\end{pmatrix}+\\begin{pmatrix}10\\\\4\\end{pmatrix}\\right)$.", working: "=\\frac12\\begin{pmatrix}10\\\\4\\end{pmatrix}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate.", working: "=\\begin{pmatrix}5\\\\2\\end{pmatrix}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State the position vector.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $\\overrightarrow{AB}=\\overrightarrow{DC}=\\begin{pmatrix}8\\\\0\\end{pmatrix}$ (b) $\\overrightarrow{AD}=\\overrightarrow{BC}=\\begin{pmatrix}2\\\\4\\end{pmatrix}$ (c) $\\begin{pmatrix}5\\\\2\\end{pmatrix}$",
            commonErrors: ["Using $\\overrightarrow{CD}$ instead of $\\overrightarrow{DC}$.", "Finding midpoint of a side instead of a diagonal."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciem-u9-vector-solving-notes",
      title: "Vector problem solving — revision notes",
      summary: "Position vectors, section formula, centroid and extended vector problems.",
      sections: [
        {
          heading: "Key formulas",
          body: "Midpoint $=\\frac{\\mathbf{a}+\\mathbf{b}}{2}$; section $=\\frac{n\\mathbf{a}+m\\mathbf{b}}{m+n}$; centroid $=\\frac{\\mathbf{a}+\\mathbf{b}+\\mathbf{c}}{3}$.",
        },
        {
          heading: "Proof technique",
          body: "Set origin at a vertex; express vectors; look for scalar multiples; state conclusions.",
        },
        {
          heading: "Exam technique",
          body: "- Check vector directions carefully.\n- Ratio $m:n$ weights are reversed: nearer point gets larger weight.\n- Verify answers by substituting back.",
        },
      ],
    },
  ],
};
