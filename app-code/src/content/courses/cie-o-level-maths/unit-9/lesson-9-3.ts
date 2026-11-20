import type { Lesson } from "../../../types.ts";

export const lesson93: Lesson = {
  id: "olm-u9-lesson-9-3",
  code: "9-3",
  title: "Vectors in Geometry",
  goal: "I CAN use vectors to prove geometric properties and find ratios.",
  standards: ["4024: vectors"],
  vocabulary: [
    { term: "Position vector", definition: "Vector from origin to point." },
    { term: "Collinear", definition: "Points on the same straight line." },
    { term: "Section formula", definition: "Position of point dividing a segment in ratio $m:n$." },
    { term: "Parallel vectors", definition: "Vectors that are scalar multiples." },
  ],
  concepts: [
    {
      id: "olm-u9-s3-position",
      title: "Position vectors and collinearity",
      skill: "Use position vectors at O Level.",
      lesson: {
        sections: [
          { heading: "Position vectors", body: "The position vector of point A is $\\vec{OA}$ — the vector from origin O to A. If A has coordinates $(x,y)$, its position vector is $\\begin{pmatrix}x\\\\y\\end{pmatrix}$. The vector between two points: $\\vec{AB}=\\vec{OB}-\\vec{OA}$ — subtract position vectors." },
          { heading: "Collinearity", body: "Three points A, B, C are collinear if $\\vec{AB}$ and $\\vec{BC}$ are parallel (scalar multiples) AND share a common point. To prove: show $\\vec{BC}=k\\vec{AB}$ for some scalar $k$, or show $\\vec{AC}=\\vec{AB}+\\vec{BC}$ with the vectors parallel. For midpoints: $\\vec{OM}=\\frac12(\\vec{OA}+\\vec{OB})$ — average of position vectors." },
        ],
        keyFormulas: [
          { name: "AB", statement: "$\\vec{AB}=\\vec{OB}-\\vec{OA}$" },
          { name: "Midpoint", statement: "$\\frac{\\vec{OA}+\\vec{OB}}{2}$" },
        ],
        workedExample: { problem: "A(1,2), B(4,6), C(7,10). Prove collinear using vectors.", solution: "$\\vec{AB}=\\begin{pmatrix}3\\\\4\\end{pmatrix}$, $\\vec{BC}=\\begin{pmatrix}3\\\\4\\end{pmatrix}$ — equal → parallel and same direction → collinear." },
      },
      questions: [
        {
          id: "olm-u9-s3-po-q1", difficulty: "foundation", totalMarks: 1,
          stem: "The position vector of point $(3,-2)$ is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\begin{pmatrix}3\\\\-2\\end{pmatrix}$" }, { id: "b", text: "$\\begin{pmatrix}-2\\\\3\\end{pmatrix}$" }, { id: "c", text: "$\\begin{pmatrix}3\\\\2\\end{pmatrix}$" }, { id: "d", text: "$\\begin{pmatrix}-3\\\\2\\end{pmatrix}$" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Position vector", statement: "Coordinates as column." }], steps: [{ reasoning: "$(x,y)\\to\\begin{pmatrix}x\\\\y\\end{pmatrix}$.", marks: 1, markCode: "A" }], finalAnswer: "$\\begin{pmatrix}3\\\\-2\\end{pmatrix}$" },
        },
        {
          id: "olm-u9-s3-po-q2", difficulty: "foundation", totalMarks: 2,
          stem: "Find $\\vec{AB}$ where A=(1,3), B=(5,8).",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "formula", name: "AB", statement: "$\\vec{OB}-\\vec{OA}$." }], steps: [
            { reasoning: "$\\vec{AB}=\\begin{pmatrix}5\\\\8\\end{pmatrix}-\\begin{pmatrix}1\\\\3\\end{pmatrix}=\\begin{pmatrix}4\\\\5\\end{pmatrix}$.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$\\begin{pmatrix}4\\\\5\\end{pmatrix}$" },
        },
        {
          id: "olm-u9-s3-po-q3", difficulty: "core", totalMarks: 3,
          stem: "Are A(0,0), B(2,3), C(4,6) collinear? Justify with vectors.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Collinearity", statement: "Parallel vectors + shared point." }], steps: [
            { reasoning: "$\\vec{AB}=\\begin{pmatrix}2\\\\3\\end{pmatrix}$, $\\vec{BC}=\\begin{pmatrix}2\\\\3\\end{pmatrix}$ — identical → parallel.", marks: 1, markCode: "M" },
            { reasoning: "B is common point → collinear.", marks: 1, markCode: "M" },
            { reasoning: "Answer: yes, collinear.", marks: 1, markCode: "A" },
          ], finalAnswer: "Yes" },
        },
        {
          id: "olm-u9-s3-po-q4", difficulty: "core", totalMarks: 4,
          stem: "Find the position vector of the midpoint of A(2,4) and B(8,10).",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "formula", name: "Midpoint", statement: "Average position vectors." }], steps: [
            { reasoning: "$\\vec{OM}=\\frac12\\left(\\begin{pmatrix}2\\\\4\\end{pmatrix}+\\begin{pmatrix}8\\\\10\\end{pmatrix}\\right)=\\frac12\\begin{pmatrix}10\\\\14\\end{pmatrix}=\\begin{pmatrix}5\\\\7\\end{pmatrix}$.", marks: 1, markCode: "M" },
            { reasoning: "Check: midpoint coords $\\left(\\frac{2+8}{2},\\frac{4+10}{2}\\right)=(5,7)$ ✓.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $\\begin{pmatrix}5\\\\7\\end{pmatrix}$.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$\\begin{pmatrix}5\\\\7\\end{pmatrix}$" },
        },
      ],
    },
    {
      id: "olm-u9-s3-section",
      title: "Section formula and ratios",
      skill: "Apply the section formula at O Level.",
      lesson: {
        sections: [
          { heading: "Section formula", body: "A point P divides AB in ratio $m:n$ (i.e. $AP:PB=m:n$). Its position vector is $\\vec{OP}=\\frac{n\\vec{OA}+m\\vec{OB}}{m+n}$ — note the weights are swapped. For midpoint $m=n=1$: average. For internal division, weights are positive; the formula works for any ratio." },
          { heading: "Finding ratios", body: "To find the ratio in which P divides AB: write $\\vec{OP}=\\vec{OA}+t\\vec{AB}$ for some $t\\in[0,1]$, solve for $t$ using components, then $AP:PB=t:(1-t)$. Equivalently, if $\\vec{AP}=k\\vec{AB}$, the ratio is $k:(1-k)$. Always verify both components give the same $t$ — inconsistency means an error." },
        ],
        keyFormulas: [
          { name: "Section", statement: "$\\vec{OP}=\\frac{n\\vec{OA}+m\\vec{OB}}{m+n}$" },
          { name: "Ratio from t", statement: "$AP:PB=t:(1-t)$" },
        ],
        workedExample: { problem: "Find position vector of point dividing A(0,0) to B(6,4) in ratio 1:2.", solution: "$m=1,n=2$: $\\vec{OP}=\\frac{2\\begin{pmatrix}0\\\\0\\end{pmatrix}+1\\begin{pmatrix}6\\\\4\\end{pmatrix}}{3}=\\begin{pmatrix}2\\\\\\frac43\\end{pmatrix}$." },
      },
      questions: [
        {
          id: "olm-u9-s3-se-q1", difficulty: "foundation", totalMarks: 1,
          stem: "The midpoint divides AB in ratio…",
          response: { type: "mcq", choices: [
            { id: "a", text: "1:1" }, { id: "b", text: "1:2" }, { id: "c", text: "2:1" }, { id: "d", text: "1:3" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Midpoint", statement: "Equal parts." }], steps: [{ reasoning: "1:1.", marks: 1, markCode: "A" }], finalAnswer: "1:1" },
        },
        {
          id: "olm-u9-s3-se-q2", difficulty: "foundation", totalMarks: 2,
          stem: "Point P divides AB in ratio 1:3 with A=(0,0), B=(8,4). Find P's coordinates.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "formula", name: "Section", statement: "Weighted average." }], steps: [
            { reasoning: "$P=\\frac{3\\begin{pmatrix}0\\\\0\\end{pmatrix}+1\\begin{pmatrix}8\\\\4\\end{pmatrix}}{4}=\\begin{pmatrix}2\\\\1\\end{pmatrix}$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $(2,1)$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$(2,1)$" },
        },
        {
          id: "olm-u9-s3-se-q3", difficulty: "core", totalMarks: 3,
          stem: "P lies on AB with $\\vec{AP}=\\frac13\\vec{AB}$. Find AP:PB.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Ratio from fraction", statement: "$t:(1-t)$." }], steps: [
            { reasoning: "$t=\\frac13$ → $AP:PB=\\frac13:\\frac23=1:2$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 1:2.", marks: 1, markCode: "M" },
            { reasoning: "Check: AP is 1/3 of AB, PB is 2/3 → ratio 1:2 ✓.", marks: 1, markCode: "A" },
          ], finalAnswer: "1:2" },
        },
        {
          id: "olm-u9-s3-se-q4", difficulty: "core", totalMarks: 4,
          stem: "A=(1,1), B=(7,5). Point P divides AB such that AP:PB=1:2. Find P's position vector.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Section formula", statement: "m=1, n=2." }], steps: [
            { reasoning: "$\\vec{OP}=\\frac{2\\begin{pmatrix}1\\\\1\\end{pmatrix}+1\\begin{pmatrix}7\\\\5\\end{pmatrix}}{3}=\\frac13\\begin{pmatrix}9\\\\7\\end{pmatrix}=\\begin{pmatrix}3\\\\\\frac73\\end{pmatrix}$.", marks: 1, markCode: "M" },
            { reasoning: "Check: $\\vec{AP}=\\begin{pmatrix}2\\\\\\frac43\\end{pmatrix}$, $\\vec{PB}=\\begin{pmatrix}4\\\\\\frac83\\end{pmatrix}=2\\vec{AP}$ → ratio 1:2 ✓.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $\\begin{pmatrix}3\\\\\\frac73\\end{pmatrix}$.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$\\begin{pmatrix}3\\\\\\frac73\\end{pmatrix}$" },
        },
      ],
    },
  ],
  notes: [
    { id: "olm-u9-s3-geom-notes", title: "Vector geometry — notes", summary: "Position vectors, collinearity, section formula.",
      sections: [
        { heading: "Basics", body: "$\\vec{AB}=\\vec{OB}-\\vec{OA}$; collinear if vectors parallel + shared point; midpoint = average." },
        { heading: "Section", body: "$\\vec{OP}=\\frac{n\\vec{OA}+m\\vec{OB}}{m+n}$ for ratio $m:n$." },
      ] },
  ],
};
