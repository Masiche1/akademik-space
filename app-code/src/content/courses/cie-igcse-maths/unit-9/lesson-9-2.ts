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
              { id: "a", text: "One direction vector is a scalar multiple of the other" },
              { id: "b", text: "The lines have the same length" },
              { id: "c", text: "The vectors are equal" },
              { id: "d", text: "The lines intersect" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Parallel proof", statement: "$\\mathbf{u}=k\\mathbf{v} \\Rightarrow$ parallel." },
            ],
            steps: [
              { reasoning: "Recall the proof method.", working: "k\\mathbf{v}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Scalar multiple",
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
              { id: "a", text: "At a vertex that simplifies the algebra" },
              { id: "b", text: "Always at the centre of the shape" },
              { id: "c", text: "At the midpoint of the longest side" },
              { id: "d", text: "It doesn't matter" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Origin choice", statement: "Place origin where it simplifies — often a vertex." },
            ],
            steps: [
              { reasoning: "Recall the strategy.", working: "\\text{convenient vertex}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** At a simplifying vertex",
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
