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
            { id: "a", text: "$\\begin{pmatrix}3\\\\-2\\end{pmatrix}$" },
            { id: "b", text: "$\\begin{pmatrix}-2\\\\3\\end{pmatrix}$" },
            { id: "c", text: "$\\begin{pmatrix}-3\\\\2\\end{pmatrix}$" },
            { id: "d", text: "$\\begin{pmatrix}3\\\\2\\end{pmatrix}$" },
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
        {
          id: "olm-u9-s3-po-q5", difficulty: "foundation", totalMarks: 1,
          stem: "The position vector of the point $(-2,5)$ is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$(2,5)$" },
            { id: "b", text: "$(5,-2)$" },
            { id: "c", text: "$(2,-5)$" },
            { id: "d", text: "$(-2,5)$" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "Position vector", statement: "Coordinates give the components." }], steps: [{ reasoning: "$(x,y)$ has position vector $(x,y)$.", marks: 1, markCode: "A" }], finalAnswer: "$(-2,5)$" },
        },
        {
          id: "olm-u9-s3-po-q6", difficulty: "foundation", totalMarks: 2,
          stem: "For $A(2,1)$ and $B(5,4)$, find the x-component of $\\vec{AB}$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 3 }] },
          markscheme: { principles: [{ kind: "formula", name: "AB", statement: "$\\vec{AB}=B-A$." }], steps: [
            { reasoning: "x-component: $5-2=3$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $3$.", marks: 1, markCode: "A" },
          ], finalAnswer: "3" },
        },
        {
          id: "olm-u9-s3-po-q7", difficulty: "core", totalMarks: 3,
          stem: "Find the position vector of the midpoint of $A(2,6)$ and $B(8,2)$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "formula", name: "Midpoint", statement: "Average the position vectors." }], steps: [
            { reasoning: "x-coordinate: $(2+8)/2=5$.", marks: 1, markCode: "M" },
            { reasoning: "y-coordinate: $(6+2)/2=4$.", marks: 1, markCode: "M" },
            { reasoning: "Position vector: $(5,4)$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$(5,4)$" },
        },
        {
          id: "olm-u9-s3-po-q8", difficulty: "core", totalMarks: 1,
          stem: "Are $A(0,0)$, $B(1,2)$ and $C(2,4)$ collinear?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Cannot be determined" },
            { id: "b", text: "No" },
            { id: "c", text: "Only if $C$ is the midpoint" },
            { id: "d", text: "Yes" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "property", name: "Collinearity", statement: "Equal displacement vectors on one line." }], steps: [{ reasoning: "$\\vec{AB}=(1,2)$ and $\\vec{BC}=(1,2)$, so the points are collinear.", marks: 1, markCode: "A" }], finalAnswer: "Yes" },
        },
        {
          id: "olm-u9-s3-po-q9", difficulty: "challenge", totalMarks: 4,
          stem: "Use vectors to prove that $A(1,1)$, $B(4,2)$ and $C(7,3)$ are collinear.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Collinearity proof", statement: "Show consecutive displacement vectors are equal or scalar multiples." }], steps: [
            { reasoning: "$\\vec{AB}=(4-1,2-1)=(3,1)$.", marks: 1, markCode: "M" },
            { reasoning: "$\\vec{BC}=(7-4,3-2)=(3,1)$.", marks: 1, markCode: "M" },
            { reasoning: "$\\vec{AB}=\\vec{BC}$, so the vectors are parallel and share point $B$.", marks: 1, markCode: "M" },
            { reasoning: "Therefore $A$, $B$ and $C$ are collinear.", marks: 1, markCode: "A" },
          ], finalAnswer: "Collinear" },
        },
        {
          id: "olm-u9-s3-po-q10", difficulty: "foundation", totalMarks: 2,
          stem: "What is the y-component of the position vector of $(-4,7)$?",
          response: { type: "numeric", parts: [{ label: "a", answer: 7 }] },
          markscheme: { principles: [{ kind: "definition", name: "Position vector", statement: "Second component is the y-coordinate." }], steps: [
            { reasoning: "The point has coordinates $(-4,7)$.", marks: 1, markCode: "M" },
            { reasoning: "y-component: $7$.", marks: 1, markCode: "A" },
          ], finalAnswer: "7" },
        },
        {
          id: "olm-u9-s3-po-q11", difficulty: "core", totalMarks: 2,
          stem: "For $A(1,2)$ and $C(5,8)$, find the x-component of $\\vec{AC}$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 4 }] },
          markscheme: { principles: [{ kind: "formula", name: "AC", statement: "$C-A$ component-wise." }], steps: [
            { reasoning: "x-component: $5-1=4$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $4$.", marks: 1, markCode: "A" },
          ], finalAnswer: "4" },
        },
        {
          id: "olm-u9-s3-po-q12", difficulty: "core", totalMarks: 1,
          stem: "The midpoint of $A(0,0)$ and $B(6,8)$ has position vector…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$(12,16)$" },
            { id: "b", text: "$(6,8)$" },
            { id: "c", text: "$(3,4)$" },
            { id: "d", text: "$(2,3)$" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "formula", name: "Midpoint", statement: "Average the endpoints." }], steps: [{ reasoning: "$(0+6)/2=3$, $(0+8)/2=4$.", marks: 1, markCode: "A" }], finalAnswer: "$(3,4)$" },
        },
        {
          id: "olm-u9-s3-po-q13", difficulty: "challenge", totalMarks: 2,
          stem: "Find the magnitude of $\\vec{AB}$ where $A(0,0)$ and $B(3,4)$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 5 }] },
          markscheme: { principles: [{ kind: "formula", name: "Magnitude", statement: "$|v|=(a^2+b^2)^{1/2}$." }], steps: [
            { reasoning: "$\\vec{AB}=(3,4)$, so $|\\vec{AB}|=(9+16)^{1/2}=5$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $5$.", marks: 1, markCode: "A" },
          ], finalAnswer: "5" },
        },
        {
          id: "olm-u9-s3-po-q14", difficulty: "foundation", totalMarks: 1,
          stem: "Which pair of displacement vectors shows that three points are collinear?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$(2,3)$ and $(4,6)$" },
            { id: "b", text: "$(2,3)$ and $(3,2)$" },
            { id: "c", text: "$(2,3)$ and $(-2,-3)$" },
            { id: "d", text: "$(2,3)$ and $(4,5)$" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "property", name: "Parallel vectors", statement: "Collinear vectors are scalar multiples." }], steps: [{ reasoning: "$(4,6)=2(2,3)$.", marks: 1, markCode: "A" }], finalAnswer: "$(2,3)$ and $(4,6)$" },
        },
        {
          id: "olm-u9-s3-po-q15", difficulty: "core", totalMarks: 3,
          stem: "Find $\\vec{BA}$ where $A(4,1)$ and $B(7,6)$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "formula", name: "Vector BA", statement: "$\\vec{BA}=A-B$." }], steps: [
            { reasoning: "Horizontal: $4-7=-3$.", marks: 1, markCode: "M" },
            { reasoning: "Vertical: $1-6=-5$.", marks: 1, markCode: "M" },
            { reasoning: "$\\vec{BA}=(-3,-5)$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$(-3,-5)$" },
        },
        {
          id: "olm-u9-s3-po-q16", difficulty: "challenge", totalMarks: 1,
          stem: "If $M$ is the midpoint of $AB$, which equation must be true?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\vec{OM}=\\vec{OA}+\\vec{OB}$" },
            { id: "b", text: "$\\vec{OM}=2(\\vec{OA}+\\vec{OB})$" },
            { id: "c", text: "$\\vec{OM}=\\vec{OB}-\\vec{OA}$" },
            { id: "d", text: "$\\vec{OM}=\\frac12(\\vec{OA}+\\vec{OB})$" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "formula", name: "Midpoint", statement: "Average of endpoint position vectors." }], steps: [{ reasoning: "Midpoint position vector is the mean of $\\vec{OA}$ and $\\vec{OB}$.", marks: 1, markCode: "A" }], finalAnswer: "$\\vec{OM}=\\frac12(\\vec{OA}+\\vec{OB})$" },
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
            { id: "a", text: "1:3" },
            { id: "b", text: "1:1" },
            { id: "c", text: "2:1" },
            { id: "d", text: "1:2" },
          ], correctChoiceId: "b" },
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
        {
          id: "olm-u9-s3-se-q5", difficulty: "foundation", totalMarks: 1,
          stem: "Point $P$ divides $AB$ so that $AP:PB=2:1$. Which expression gives $\\vec{OP}$?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$(\\vec{OA}+2\\vec{OB})/3$" },
            { id: "b", text: "$(\\vec{OA}+\\vec{OB})/2$" },
            { id: "c", text: "$(2\\vec{OA}+2\\vec{OB})/3$" },
            { id: "d", text: "$(2\\vec{OA}+\\vec{OB})/3$" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "formula", name: "Section formula", statement: "$\\vec{OP}=(n\\vec{OA}+m\\vec{OB})/(m+n)$ for $AP:PB=m:n$." }], steps: [{ reasoning: "Here $m=2$, $n=1$, so $\\vec{OP}=(\\vec{OA}+2\\vec{OB})/3$.", marks: 1, markCode: "A" }], finalAnswer: "$(\\vec{OA}+2\\vec{OB})/3$" },
        },
        {
          id: "olm-u9-s3-se-q6", difficulty: "foundation", totalMarks: 2,
          stem: "Point $P$ divides $AB$ in the ratio $1:2$, where $A(0,0)$ and $B(6,9)$. Find the x-coordinate of $P$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 2 }] },
          markscheme: { principles: [{ kind: "formula", name: "Section formula", statement: "Weight endpoints by the opposite part." }], steps: [
            { reasoning: "$x_P=(2\\times0+1\\times6)/3=2$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $2$.", marks: 1, markCode: "A" },
          ], finalAnswer: "2" },
        },
        {
          id: "olm-u9-s3-se-q7", difficulty: "core", totalMarks: 3,
          stem: "Find the coordinates of the point dividing $A(0,0)$ to $B(6,3)$ in the ratio $1:2$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "formula", name: "Section formula", statement: "Use $m=1$, $n=2$." }], steps: [
            { reasoning: "$x=(2\\times0+1\\times6)/3=2$.", marks: 1, markCode: "M" },
            { reasoning: "$y=(2\\times0+1\\times3)/3=1$.", marks: 1, markCode: "M" },
            { reasoning: "Point: $(2,1)$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$(2,1)$" },
        },
        {
          id: "olm-u9-s3-se-q8", difficulty: "core", totalMarks: 1,
          stem: "Point $P$ on $AB$ satisfies $\\vec{AP}=\\frac14\\vec{AB}$. Find $AP:PB$.",
          response: { type: "mcq", choices: [
            { id: "a", text: "1:4" },
            { id: "b", text: "3:1" },
            { id: "c", text: "1:3" },
            { id: "d", text: "4:1" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "technique", name: "Ratio from fraction", statement: "$AP:PB=t:(1-t)$." }], steps: [{ reasoning: "$t=1/4$, so $AP:PB=(1/4):(3/4)=1:3$.", marks: 1, markCode: "A" }], finalAnswer: "1:3" },
        },
        {
          id: "olm-u9-s3-se-q9", difficulty: "challenge", totalMarks: 4,
          stem: "For $A(0,0)$, $B(8,4)$ and $P(2,1)$, find the ratio $AP:PB$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Find ratio from point", statement: "Compare $\\vec{AP}$ with $\\vec{AB}$." }], steps: [
            { reasoning: "$\\vec{AP}=(2,1)$ and $\\vec{AB}=(8,4)$.", marks: 1, markCode: "M" },
            { reasoning: "$\\vec{AB}=4\\vec{AP}$, so $t=1/4$.", marks: 1, markCode: "M" },
            { reasoning: "$AP:PB=(1/4):(3/4)=1:3$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $1:3$.", marks: 1, markCode: "A" },
          ], finalAnswer: "1:3" },
        },
        {
          id: "olm-u9-s3-se-q10", difficulty: "foundation", totalMarks: 2,
          stem: "Point $P$ divides $AB$ in the ratio $2:1$, where $A(0,0)$ and $B(9,6)$. Find the x-coordinate of $P$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 6 }] },
          markscheme: { principles: [{ kind: "formula", name: "Section formula", statement: "Use $m=2$, $n=1$." }], steps: [
            { reasoning: "$x_P=(1\\times0+2\\times9)/3=6$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $6$.", marks: 1, markCode: "A" },
          ], finalAnswer: "6" },
        },
        {
          id: "olm-u9-s3-se-q11", difficulty: "core", totalMarks: 2,
          stem: "Find the y-coordinate of the midpoint of $A(1,3)$ and $B(5,9)$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 6 }] },
          markscheme: { principles: [{ kind: "formula", name: "Midpoint", statement: "Average coordinates." }], steps: [
            { reasoning: "$y_M=(3+9)/2=6$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $6$.", marks: 1, markCode: "A" },
          ], finalAnswer: "6" },
        },
        {
          id: "olm-u9-s3-se-q12", difficulty: "core", totalMarks: 1,
          stem: "For $AP:PB=m:n$, the coefficient of $\\vec{OB}$ in the section formula is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$m+n$" },
            { id: "b", text: "$n$" },
            { id: "c", text: "$1$" },
            { id: "d", text: "$m$" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "formula", name: "Section formula", statement: "Weights are opposite to the named parts." }], steps: [{ reasoning: "$\\vec{OP}=(n\\vec{OA}+m\\vec{OB})/(m+n)$.", marks: 1, markCode: "A" }], finalAnswer: "$m$" },
        },
        {
          id: "olm-u9-s3-se-q13", difficulty: "challenge", totalMarks: 2,
          stem: "Point $P$ divides $AB$ in the ratio $1:2$, where $A(3,0)$ and $B(0,9)$. Find the y-coordinate of $P$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 3 }] },
          markscheme: { principles: [{ kind: "formula", name: "Section formula", statement: "Use $m=1$, $n=2$." }], steps: [
            { reasoning: "$y_P=(2\\times0+1\\times9)/3=3$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $3$.", marks: 1, markCode: "A" },
          ], finalAnswer: "3" },
        },
        {
          id: "olm-u9-s3-se-q14", difficulty: "foundation", totalMarks: 1,
          stem: "If $\\vec{AP}=\\frac14\\vec{AB}$, then $AP:PB=$",
          response: { type: "mcq", choices: [
            { id: "a", text: "1:4" },
            { id: "b", text: "4:1" },
            { id: "c", text: "3:4" },
            { id: "d", text: "1:3" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "technique", name: "Ratio from fraction", statement: "Remaining part is $1-t$." }], steps: [{ reasoning: "$PB$ corresponds to $3/4$ of $AB$.", marks: 1, markCode: "A" }], finalAnswer: "1:3" },
        },
        {
          id: "olm-u9-s3-se-q15", difficulty: "core", totalMarks: 4,
          stem: "Point $P$ divides $AB$ in the ratio $1:3$, where $A(1,1)$ and $B(5,3)$. Find the coordinates of $P$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "formula", name: "Section formula", statement: "Use $m=1$, $n=3$." }], steps: [
            { reasoning: "$x_P=(3\\times1+1\\times5)/4=2$.", marks: 1, markCode: "M" },
            { reasoning: "$y_P=(3\\times1+1\\times3)/4=3/2$.", marks: 1, markCode: "M" },
            { reasoning: "Check: $\\vec{AP}=(1,1/2)$ and $\\vec{PB}=(3,3/2)=3\\vec{AP}$ ✓.", marks: 1, markCode: "M" },
            { reasoning: "Point: $(2,3/2)$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$(2,3/2)$" },
        },
        {
          id: "olm-u9-s3-se-q16", difficulty: "challenge", totalMarks: 1,
          stem: "Point $P$ divides $AB$ in the ratio $AP:PB=2:3$. If $\\vec{OA}=(0,0)$ and $\\vec{OP}=(4,2)$, find $\\vec{OB}$.",
          response: { type: "mcq", choices: [
            { id: "a", text: "$(8,4)$" },
            { id: "b", text: "$(10,5)$" },
            { id: "c", text: "$(5,2)$" },
            { id: "d", text: "$(20,10)$" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "formula", name: "Section formula", statement: "Solve the weighted vector equation." }], steps: [{ reasoning: "$\\vec{OP}=2\\vec{OB}/5=(4,2)$, so $\\vec{OB}=(10,5)$.", marks: 1, markCode: "A" }], finalAnswer: "$(10,5)$" },
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
