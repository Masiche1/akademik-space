import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "mypme4-u3-lesson-3-1",
  code: "3-1",
  title: "Vectors in Two Dimensions",
  goal: "I CAN represent vectors as column vectors, add and subtract vectors, find magnitudes, and use vectors to solve geometric problems.",
  standards: [
    "MYP Maths: Geometry and trigonometry",
    "MYP Maths: Discrete mathematics",
    "Criterion A: Knowing and understanding",
    "Criterion B: Investigating patterns",
  ],
  vocabulary: [
    { term: "Vector", definition: "A quantity with both magnitude and direction, written as a column vector $\\begin{pmatrix}x\\\\y\\end{pmatrix}$ or $\\vec{AB}$." },
    { term: "Magnitude", definition: "The length (size) of a vector: $|\\vec{v}|=\\sqrt{x^2+y^2}$." },
    { term: "Column vector", definition: "A vector written vertically: $\\begin{pmatrix}3\\\\4\\end{pmatrix}$ means 3 right, 4 up." },
    { term: "Position vector", definition: "The vector from the origin to a point." },
    { term: "Parallel vectors", definition: "Vectors that are scalar multiples of each other: $\\vec{u}=k\\vec{v}$." },
  ],
  concepts: [
    {
      id: "mypme4-u3-vectors",
      title: "Vector operations",
      skill: "Add, subtract and scale vectors, find magnitudes, and use vectors in geometry.",
      lesson: {
        sections: [
          {
            heading: "Representing vectors",
            body: "A vector $\\vec{AB}$ goes from $A$ to $B$. As a column vector $\\begin{pmatrix}x\\\\y\\end{pmatrix}$, $x$ is the horizontal change and $y$ the vertical change. The vector $\\vec{AB}$ equals position vector $\\vec{OB}-\\vec{OA}$.",
          },
          {
            heading: "Adding and subtracting",
            body: "Add/subtract corresponding components: $\\begin{pmatrix}3\\\\4\\end{pmatrix}+\\begin{pmatrix}1\\\\-2\\end{pmatrix}=\\begin{pmatrix}4\\\\2\\end{pmatrix}$. Scalar multiplication: $3\\begin{pmatrix}2\\\\1\\end{pmatrix}=\\begin{pmatrix}6\\\\3\\end{pmatrix}$.",
          },
          {
            heading: "Magnitude and direction",
            body: "The magnitude of $\\begin{pmatrix}x\\\\y\\end{pmatrix}$ is $\\sqrt{x^2+y^2}$. Two vectors are **parallel** if one is a scalar multiple of the other. E.g. $\\begin{pmatrix}2\\\\4\\end{pmatrix}$ and $\\begin{pmatrix}1\\\\2\\end{pmatrix}$ are parallel ($\\times2$).",
          },
        ],
        keyFormulas: [
          { name: "Addition", statement: "$\\begin{pmatrix}x_1\\\\y_1\\end{pmatrix}+\\begin{pmatrix}x_2\\\\y_2\\end{pmatrix}=\\begin{pmatrix}x_1+x_2\\\\y_1+y_2\\end{pmatrix}$" },
          { name: "Magnitude", statement: "$|\\vec{v}|=\\sqrt{x^2+y^2}$" },
          { name: "Parallel", statement: "$\\vec{u}=k\\vec{v}$ for some scalar $k$" },
        ],
        workedExample: {
          problem: "Find $\\vec{AB}$ where $A(1,2)$ and $B(4,6)$, and its magnitude.",
          solution: "$\\vec{AB}=\\begin{pmatrix}4-1\\\\6-2\\end{pmatrix}=\\begin{pmatrix}3\\\\4\\end{pmatrix}$; magnitude $=\\sqrt{9+16}=5$.",
        },
      },
      questions: [
        {
          id: "mypme4-u3-vec-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is $\\begin{pmatrix}2\\\\3\\end{pmatrix}+\\begin{pmatrix}1\\\\4\\end{pmatrix}$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\begin{pmatrix}3\\\\7\\end{pmatrix}$" },
              { id: "b", text: "$\\begin{pmatrix}1\\\\-1\\end{pmatrix}$" },
              { id: "c", text: "$\\begin{pmatrix}3\\\\12\\end{pmatrix}$" },
              { id: "d", text: "$\\begin{pmatrix}2\\\\12\\end{pmatrix}$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Vector addition", statement: "Add corresponding components." },
            ],
            steps: [
              { reasoning: "$\\begin{pmatrix}2+1\\\\3+4\\end{pmatrix}=\\begin{pmatrix}3\\\\7\\end{pmatrix}$.", working: "\\begin{pmatrix}3\\\\7\\end{pmatrix}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $\\begin{pmatrix}3\\\\7\\end{pmatrix}$",
            commonErrors: ["Multiplying components instead of adding."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypme4-u3-vec-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the magnitude of $\\begin{pmatrix}3\\\\4\\end{pmatrix}$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "7" },
              { id: "b", text: "5" },
              { id: "c", text: "$\\sqrt{7}$" },
              { id: "d", text: "25" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Magnitude", statement: "$|\\vec{v}|=\\sqrt{x^2+y^2}$." },
            ],
            steps: [
              { reasoning: "$\\sqrt{9+16}=\\sqrt{25}=5$.", working: "5", marks: 1, markCode: "M" },
              { reasoning: "State the magnitude.", working: "5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$5$",
            commonErrors: ["Adding components instead of using Pythagoras."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypme4-u3-vec-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Are $\\begin{pmatrix}2\\\\6\\end{pmatrix}$ and $\\begin{pmatrix}1\\\\3\\end{pmatrix}$ parallel? Justify.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "No — different magnitudes" },
              { id: "b", text: "No — not scalar multiples" },
              { id: "c", text: "Yes — second is half of first" },
              { id: "d", text: "Yes — same direction" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Parallel vectors", statement: "$\\vec{u}=k\\vec{v}$ for scalar $k$." },
            ],
            steps: [
              { reasoning: "$\\begin{pmatrix}2\\\\6\\end{pmatrix}=2\\begin{pmatrix}1\\\\3\\end{pmatrix}$.", working: "k=2", marks: 1, markCode: "M" },
              { reasoning: "Scalar multiple → parallel.", working: "\\text{parallel}", marks: 1, markCode: "M" },
              { reasoning: "State conclusion.", working: "\\text{yes, parallel}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Yes — $\\begin{pmatrix}2\\\\6\\end{pmatrix}=2\\begin{pmatrix}1\\\\3\\end{pmatrix}$",
            commonErrors: ["Comparing magnitudes instead of checking scalar multiple."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypme4-u3-vec-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Points $A(1,1)$, $B(4,5)$ and $C(6,2)$.",
          parts: [
            { label: "a", prompt: "Find $\\vec{AB}$ and $\\vec{AC}$ as column vectors.", marks: 2 },
            { label: "b", prompt: "Find $\\vec{AB}+\\vec{BC}$ and verify it equals $\\vec{AC}$.", marks: 2 },
            { label: "c", prompt: "Find the magnitude of $\\vec{AB}$.", marks: 2 },
            { label: "d", prompt: "Find the point $D$ such that $ABCD$ is a parallelogram (i.e. $\\vec{AD}=\\vec{BC}$).", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Vectors", statement: "$\\vec{AB}=\\vec{OB}-\\vec{OA}$; parallelogram has equal opposite sides." },
            ],
            steps: [
              { part: "a", reasoning: "$\\vec{AB}=\\begin{pmatrix}3\\\\4\\end{pmatrix}$; $\\vec{AC}=\\begin{pmatrix}5\\\\1\\end{pmatrix}$.", working: "\\begin{pmatrix}3\\\\4\\end{pmatrix},\\begin{pmatrix}5\\\\1\\end{pmatrix}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Both correct.", working: "\\text{both vectors}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$\\vec{BC}=\\begin{pmatrix}2\\\\-3\\end{pmatrix}$; sum $=\\begin{pmatrix}5\\\\1\\end{pmatrix}=\\vec{AC}$. ✓", working: "\\vec{AB}+\\vec{BC}=\\vec{AC}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Verify equality.", working: "\\begin{pmatrix}5\\\\1\\end{pmatrix}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$|\\vec{AB}|=\\sqrt{9+16}=5$.", working: "5", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State the magnitude.", working: "5", marks: 1, markCode: "A" },
              { part: "d", reasoning: "$\\vec{AD}=\\vec{BC}=\\begin{pmatrix}2\\\\-3\\end{pmatrix}$; $D=A+\\vec{AD}=(1+2,1-3)=(3,-2)$.", working: "D=(3,-2)", marks: 1, markCode: "M" },
              { part: "d", reasoning: "State the point.", working: "(3,-2)", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $\\vec{AB}=\\begin{pmatrix}3\\\\4\\end{pmatrix}$, $\\vec{AC}=\\begin{pmatrix}5\\\\1\\end{pmatrix}$ (b) verified (c) 5 (d) $D(3,-2)$",
            commonErrors: ["In (d), adding vectors in the wrong order."],
            examinerNote: "M1 A1 for (a), M1 A1 for (b), M1 A1 for (c), M1 A1 for (d).",
          },
        },
        {
          id: "mypme4-u3-vec-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is $\\begin{pmatrix}3\\\\1\\end{pmatrix}+\\begin{pmatrix}2\\\\-4\\end{pmatrix}$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\begin{pmatrix}5\\\\5\\end{pmatrix}$" },
              { id: "b", text: "$\\begin{pmatrix}1\\\\5\\end{pmatrix}$" },
              { id: "c", text: "$\\begin{pmatrix}5\\\\-3\\end{pmatrix}$" },
              { id: "d", text: "$\\begin{pmatrix}6\\\\-4\\end{pmatrix}$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Vector addition", statement: "Add corresponding components." },
            ],
            steps: [
              { reasoning: "$\\begin{pmatrix}3+2\\\\1+(-4)\\end{pmatrix}=\\begin{pmatrix}5\\\\-3\\end{pmatrix}$.", working: "\\begin{pmatrix}5\\\\-3\\end{pmatrix}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $\\begin{pmatrix}5\\\\-3\\end{pmatrix}$",
            commonErrors: ["Adding component-wise incorrectly or subtracting."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypme4-u3-vec-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Find the magnitude of $\\begin{pmatrix}5\\\\12\\end{pmatrix}$.",
          response: { type: "numeric", parts: [{ label: "Magnitude", answer: 13 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Magnitude", statement: "$|\\vec{v}|=\\sqrt{x^2+y^2}$." },
            ],
            steps: [
              { reasoning: "$\\sqrt{25+144}=\\sqrt{169}=13$.", working: "13", marks: 1, markCode: "B" },
            ],
            finalAnswer: "$13$",
            commonErrors: ["Adding 5+12=17 instead of using Pythagoras."],
          },
        },
        {
          id: "mypme4-u3-vec-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find $\\begin{pmatrix}2\\\\4\\end{pmatrix}-\\begin{pmatrix}1\\\\1\\end{pmatrix}$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\begin{pmatrix}1\\\\3\\end{pmatrix}$" },
              { id: "b", text: "$\\begin{pmatrix}1\\\\5\\end{pmatrix}$" },
              { id: "c", text: "$\\begin{pmatrix}-1\\\\3\\end{pmatrix}$" },
              { id: "d", text: "$\\begin{pmatrix}3\\\\5\\end{pmatrix}$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Vector subtraction", statement: "Subtract corresponding components." },
            ],
            steps: [
              { reasoning: "$\\begin{pmatrix}2-1\\\\4-1\\end{pmatrix}=\\begin{pmatrix}1\\\\3\\end{pmatrix}$.", working: "\\begin{pmatrix}1\\\\3\\end{pmatrix}", marks: 1, markCode: "M" },
              { reasoning: "State the result.", working: "\\begin{pmatrix}1\\\\3\\end{pmatrix}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\begin{pmatrix}1\\\\3\\end{pmatrix}$",
            commonErrors: ["Reversing the subtraction order."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypme4-u3-vec-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the magnitude of $\\vec{AB}$ where $A(1,2)$ and $B(4,6)$.",
          response: { type: "numeric", parts: [{ label: "$|\\vec{AB}|$", answer: 5 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Magnitude", statement: "$\\vec{AB}=\\begin{pmatrix}3\\\\4\\end{pmatrix}$, $|\\vec{AB}|=\\sqrt{9+16}=5$." },
            ],
            steps: [
              { reasoning: "$\\vec{AB}=\\begin{pmatrix}4-1\\\\6-2\\end{pmatrix}=\\begin{pmatrix}3\\\\4\\end{pmatrix}$; magnitude $=\\sqrt{25}=5$.", working: "5", marks: 1, markCode: "M" },
              { reasoning: "State the magnitude.", working: "5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$5$",
            commonErrors: ["Subtracting in the wrong order or using $\\sqrt{3+4}$."],
          },
        },
        {
          id: "mypme4-u3-vec-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Are $\\begin{pmatrix}4\\\\6\\end{pmatrix}$ and $\\begin{pmatrix}2\\\\3\\end{pmatrix}$ parallel? Justify.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "No — not scalar multiples" },
              { id: "b", text: "No — different magnitudes" },
              { id: "c", text: "Yes — $\\begin{pmatrix}4\\\\6\\end{pmatrix}=2\\begin{pmatrix}2\\\\3\\end{pmatrix}$" },
              { id: "d", text: "Yes — same direction only" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Parallel vectors", statement: "$\\vec{u}=k\\vec{v}$ for scalar $k$ implies parallel." },
            ],
            steps: [
              { reasoning: "$\\begin{pmatrix}4\\\\6\\end{pmatrix}=2\\begin{pmatrix}2\\\\3\\end{pmatrix}$ — a scalar multiple.", working: "k=2", marks: 1, markCode: "M" },
              { reasoning: "Scalar multiple → parallel.", working: "\\text{parallel}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Yes — scalar multiple with $k=2$",
            commonErrors: ["Comparing magnitudes instead of checking the ratio."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypme4-u3-vec-q10",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Find the value of $k$ such that $\\begin{pmatrix}2\\\\k\\end{pmatrix}$ is parallel to $\\begin{pmatrix}6\\\\9\\end{pmatrix}$.",
          response: { type: "numeric", parts: [{ label: "$k$", answer: 3 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Parallel vectors", statement: "Components must have the same ratio: $\\frac{6}{2}=\\frac{9}{k}$." },
            ],
            steps: [
              { reasoning: "$\\frac{9}{k}=3 \\Rightarrow k=3$.", working: "k=3", marks: 1, markCode: "M" },
              { reasoning: "Check: $\\begin{pmatrix}2\\\\3\\end{pmatrix}\\times3=\\begin{pmatrix}6\\\\9\\end{pmatrix}$. ✓", working: "k=3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$k=3$",
            commonErrors: ["Setting $\\frac{k}{9}=\\frac{2}{6}$ incorrectly or guessing."],
          },
        },
        {
          id: "mypme4-u3-vec-q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Points $A(1,1)$, $B(4,3)$ and $C(5,6)$. Find the point $D$ such that $ABCD$ is a parallelogram (i.e. $\\vec{AD}=\\vec{BC}$).",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$(3,2)$" },
              { id: "b", text: "$(8,8)$" },
              { id: "c", text: "$(2,-2)$" },
              { id: "d", text: "$(2,4)$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Parallelogram", statement: "$\\vec{AD}=\\vec{BC}$; $D=A+\\vec{BC}$." },
            ],
            steps: [
              { reasoning: "$\\vec{BC}=\\begin{pmatrix}5-4\\\\6-3\\end{pmatrix}=\\begin{pmatrix}1\\\\3\\end{pmatrix}$.", working: "\\begin{pmatrix}1\\\\3\\end{pmatrix}", marks: 1, markCode: "M" },
              { reasoning: "$D=A+\\vec{BC}=(1+1,\\,1+3)=(2,4)$.", working: "D=(2,4)", marks: 1, markCode: "M" },
              { reasoning: "State the point.", working: "(2,4)", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$D(2,4)$",
            commonErrors: ["Adding $\\vec{BC}$ to $B$ instead of $A$."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypme4-u3-vec-q12",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Points $A(2,3)$ and $B(6,7)$. Point $P$ is the midpoint of $AB$. Find the coordinates of $P$.",
          response: { type: "numeric", parts: [
            { label: "$x$-coordinate", answer: 4 },
            { label: "$y$-coordinate", answer: 5 },
          ] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Midpoint", statement: "Midpoint $=\\left(\\frac{x_1+x_2}{2},\\frac{y_1+y_2}{2}\\right)$." },
            ],
            steps: [
              { reasoning: "$x=\\frac{2+6}{2}=4$; $y=\\frac{3+7}{2}=5$.", working: "x=4,\\ y=5", marks: 1, markCode: "M" },
              { reasoning: "Alternatively $\\vec{AP}=\\frac{1}{2}\\vec{AB}$: $A+\\frac{1}{2}(4,4)=(4,5)$. ✓", working: "(4,5)", marks: 1, markCode: "M" },
              { reasoning: "State the point.", working: "P=(4,5)", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$P(4,5)$",
            commonErrors: ["Adding coordinates without halving."],
          },
        },
        {
          id: "mypme4-u3-vec-q13",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Vector arithmetic.",
          parts: [
            { label: "a", prompt: "Find $\\begin{pmatrix}1\\\\-2\\end{pmatrix}+\\begin{pmatrix}3\\\\4\\end{pmatrix}$.", marks: 2 },
            { label: "b", prompt: "Find $2\\begin{pmatrix}2\\\\-1\\end{pmatrix}-\\begin{pmatrix}3\\\\4\\end{pmatrix}$.", marks: 2 },
            { label: "c", prompt: "Find the magnitude of $\\begin{pmatrix}7\\\\24\\end{pmatrix}$.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Vector operations", statement: "Add/subtract components; scalar multiplication scales both." },
            ],
            steps: [
              { part: "a", reasoning: "$\\begin{pmatrix}1+3\\\\-2+4\\end{pmatrix}=\\begin{pmatrix}4\\\\2\\end{pmatrix}$.", working: "\\begin{pmatrix}4\\\\2\\end{pmatrix}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the result.", working: "\\begin{pmatrix}4\\\\2\\end{pmatrix}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$\\begin{pmatrix}4\\\\-2\\end{pmatrix}-\\begin{pmatrix}3\\\\4\\end{pmatrix}=\\begin{pmatrix}1\\\\-6\\end{pmatrix}$.", working: "\\begin{pmatrix}1\\\\-6\\end{pmatrix}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the result.", working: "\\begin{pmatrix}1\\\\-6\\end{pmatrix}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$\\sqrt{49+576}=\\sqrt{625}=25$.", working: "25", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State the magnitude.", working: "25", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $\\begin{pmatrix}4\\\\2\\end{pmatrix}$ (b) $\\begin{pmatrix}1\\\\-6\\end{pmatrix}$ (c) 25",
            commonErrors: ["In (b), subtracting only the first component."],
            examinerNote: "M1 A1 for (a), M1 A1 for (b), M1 A1 for (c).",
          },
        },
        {
          id: "mypme4-u3-vec-q14",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "Points $A(0,0)$, $B(3,4)$ and $C(7,1)$.",
          parts: [
            { label: "a", prompt: "Find $\\vec{AB}$, $\\vec{BC}$ and $\\vec{AC}$.", marks: 3 },
            { label: "b", prompt: "Verify that $\\vec{AB}+\\vec{BC}=\\vec{AC}$.", marks: 2 },
            { label: "c", prompt: "Find the point $D$ such that $ABCD$ is a parallelogram ($\\vec{AD}=\\vec{BC}$).", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Vectors", statement: "$\\vec{AB}+\\vec{BC}=\\vec{AC}$; $D=A+\\vec{BC}$." },
            ],
            steps: [
              { part: "a", reasoning: "$\\vec{AB}=\\begin{pmatrix}3\\\\4\\end{pmatrix}$, $\\vec{BC}=\\begin{pmatrix}4\\\\-3\\end{pmatrix}$, $\\vec{AC}=\\begin{pmatrix}7\\\\1\\end{pmatrix}$.", working: "(3,4),(4,-3),(7,1)", marks: 1, markCode: "M" },
              { part: "a", reasoning: "All three correct.", working: "\\text{all vectors}", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Vectors written as column vectors.", working: "\\begin{pmatrix}\\cdot\\\\\\cdot\\end{pmatrix}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$\\begin{pmatrix}3\\\\4\\end{pmatrix}+\\begin{pmatrix}4\\\\-3\\end{pmatrix}=\\begin{pmatrix}7\\\\1\\end{pmatrix}=\\vec{AC}$. ✓", working: "\\vec{AB}+\\vec{BC}=\\vec{AC}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State verified.", working: "\\begin{pmatrix}7\\\\1\\end{pmatrix}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$D=A+\\vec{BC}=(0+4,\\,0-3)=(4,-3)$.", working: "D=(4,-3)", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State the point.", working: "(4,-3)", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $\\vec{AB}=\\begin{pmatrix}3\\\\4\\end{pmatrix}$, $\\vec{BC}=\\begin{pmatrix}4\\\\-3\\end{pmatrix}$, $\\vec{AC}=\\begin{pmatrix}7\\\\1\\end{pmatrix}$ (b) verified (c) $D(4,-3)$",
            commonErrors: ["In (c), using $\\vec{AB}$ instead of $\\vec{BC}$."],
            examinerNote: "M1 A1 A1 for (a), M1 A1 for (b), M1 A1 for (c).",
          },
        },
        {
          id: "mypme4-u3-vec-q15",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Let $\\vec{u}=\\begin{pmatrix}2\\\\1\\end{pmatrix}$ and $\\vec{v}=\\begin{pmatrix}1\\\\3\\end{pmatrix}$.",
          parts: [
            { label: "a", prompt: "Find $\\vec{u}+\\vec{v}$.", marks: 2 },
            { label: "b", prompt: "Find the magnitude of $\\vec{u}+\\vec{v}$.", marks: 2 },
            { label: "c", prompt: "Find the scalar $k$ such that $k\\vec{u}=\\begin{pmatrix}6\\\\3\\end{pmatrix}$.", marks: 2 },
            { label: "d", prompt: "Are $\\vec{u}$ and $\\vec{v}$ parallel? Justify.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Vectors", statement: "Add components; parallel iff one is a scalar multiple of the other." },
            ],
            steps: [
              { part: "a", reasoning: "$\\vec{u}+\\vec{v}=\\begin{pmatrix}3\\\\4\\end{pmatrix}$.", working: "\\begin{pmatrix}3\\\\4\\end{pmatrix}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the sum.", working: "\\begin{pmatrix}3\\\\4\\end{pmatrix}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$|\\vec{u}+\\vec{v}|=\\sqrt{9+16}=5$.", working: "5", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the magnitude.", working: "5", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$k\\begin{pmatrix}2\\\\1\\end{pmatrix}=\\begin{pmatrix}6\\\\3\\end{pmatrix}$; from top $k=3$, check bottom $3(1)=3$. ✓", working: "k=3", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State the scalar.", working: "k=3", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Ratios $\\frac{1}{2}\\ne\\frac{3}{1}$ — not scalar multiples.", working: "\\text{not parallel}", marks: 1, markCode: "R" },
              { part: "d", reasoning: "State conclusion.", working: "\\text{not parallel}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $\\begin{pmatrix}3\\\\4\\end{pmatrix}$ (b) 5 (c) $k=3$ (d) not parallel",
            commonErrors: ["In (d), comparing magnitudes instead of ratios."],
            examinerNote: "M1 A1 for (a), M1 A1 for (b), M1 A1 for (c), R1 A1 for (d).",
          },
        },
        {
          id: "mypme4-u3-vec-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Points $A(1,1)$, $B(4,5)$ and $C(7,9)$. Are they collinear? Justify.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Yes — all have integer coordinates" },
              { id: "b", text: "Yes — $\\vec{AC}=2\\vec{AB}$" },
              { id: "c", text: "No — the points form a triangle" },
              { id: "d", text: "No — $C$ is not between $A$ and $B$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Collinearity", statement: "Points are collinear if position vectors are scalar multiples." },
            ],
            steps: [
              { reasoning: "$\\vec{AB}=\\begin{pmatrix}3\\\\4\\end{pmatrix}$; $\\vec{AC}=\\begin{pmatrix}6\\\\8\\end{pmatrix}=2\\begin{pmatrix}3\\\\4\\end{pmatrix}$." , working: "\\vec{AC}=2\\vec{AB}", marks: 1, markCode: "M" },
              { reasoning: "Scalar multiple → same line through $A$.", working: "\\text{collinear}", marks: 1, markCode: "M" },
              { reasoning: "State the conclusion.", working: "\\text{yes, collinear}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Yes — $\\vec{AC}=2\\vec{AB}$",
            commonErrors: ["Checking slopes incorrectly or not comparing vectors."],
            examinerNote: "M1 M1 A1.",
          },
        },
      ],
    },
    {
      id: "mypme4-u3-3dtrig",
      title: "Three-dimensional trigonometry",
      skill: "Use trigonometry in 3D: angle between line and plane, angle between two planes, and bearings in 3D.",
      lesson: {
        sections: [
          {
            heading: "Angle between line and plane",
            body: "The **angle between a line and a plane** is the angle between the line and its projection onto the plane. Find it by dropping a perpendicular from a point on the line to the plane, forming a right-angled triangle.",
          },
          {
            heading: "Angle between two planes",
            body: "The **angle between two planes** (dihedral angle) is found by taking a line perpendicular to their intersection in each plane, then finding the angle between those perpendiculars.",
          },
          {
            heading: "3D bearings",
            body: "In 3D, bearings can include elevation/depression angles. A bearing of $060°$ with elevation $30°$ means 60° clockwise from north and 30° above horizontal. Resolve into components using trigonometry in each plane.",
          },
        ],
        keyFormulas: [
          { name: "Line-plane angle", statement: "Angle between line and its projection on the plane" },
          { name: "Plane-plane angle", statement: "Angle between perpendiculars to the line of intersection" },
        ],
        workedExample: {
          problem: "A line makes a $45°$ angle with the horizontal plane. If the line is 10 m long, how far horizontally does it travel?",
          solution: "Horizontal distance = $10\\cos45°=10\\times0.707=7.07$ m; vertical = $10\\sin45°=7.07$ m.",
        },
      },
      questions: [
        {
          id: "mypme4-u3-3d-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the angle between a line and a plane if the line is perpendicular to the plane?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$45°$" },
              { id: "b", text: "$0°$" },
              { id: "c", text: "$90°$" },
              { id: "d", text: "Cannot be determined" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Line-plane angle", statement: "Perpendicular line meets plane at $90°$." },
            ],
            steps: [
              { reasoning: "Perpendicular to plane → angle = $90°$.", working: "90°", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $90°$",
            commonErrors: ["Thinking it's 0° — that's parallel."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypme4-u3-3d-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A line is 12 m long and makes a $30°$ angle with the horizontal plane. Find its vertical height above the plane.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$12\\sin30°=6$ m" },
              { id: "b", text: "$6\\sqrt{3}$ m" },
              { id: "c", text: "6 m" },
              { id: "d", text: "$12\\cos30°=10.4$ m" },
            ],
            aorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Trigonometry", statement: "Vertical = $L\\sin\\theta$; horizontal = $L\\cos\\theta$." },
            ],
            steps: [
              { reasoning: "Height = $12\\sin30°=12\\times0.5=6$ m.", working: "6\\text{ m}", marks: 1, markCode: "M" },
              { reasoning: "State the height.", working: "6\\text{ m}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$6$ m",
            commonErrors: ["Using cosine instead of sine."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypme4-u3-3d-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Two planes meet at an angle of $60°$. A line lies in one plane and is perpendicular to their intersection. Another line lies in the other plane and is also perpendicular to the intersection. What is the angle between these two lines?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$60°$" },
              { id: "b", text: "$90°$" },
              { id: "c", text: "$120°$" },
              { id: "d", text: "$30°$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Dihedral angle", statement: "Angle between planes = angle between perpendiculars to their intersection." },
            ],
            steps: [
              { reasoning: "The angle between the planes is defined by these perpendiculars.", working: "\\text{dihedral angle}", marks: 1, markCode: "M" },
              { reasoning: "Therefore angle between lines = $60°$.", working: "60°", marks: 1, markCode: "M" },
              { reasoning: "State the answer.", working: "60°", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$60°$",
            commonErrors: ["Halving the angle."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypme4-u3-3d-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A ramp is 5 m long and inclined at $25°$ to the horizontal.",
          parts: [
            { label: "a", prompt: "Find the horizontal distance covered by the ramp.", marks: 2 },
            { label: "b", prompt: "Find the vertical height gained.", marks: 2 },
            { label: "c", prompt: "If the ramp is part of a staircase making a $60°$ angle with a vertical wall, find the angle between the ramp and the wall.", marks: 2 },
            { label: "d", prompt: "Explain why the angle between the ramp and the ground is the same as the angle of inclination.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Trigonometry", statement: "Horizontal $=L\\cos\\theta$; vertical $=L\\sin\\theta$." },
            ],
            steps: [
              { part: "a", reasoning: "Horizontal $=5\\cos25°=5\\times0.906=4.53$ m.", working: "4.53\\text{ m}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the distance.", working: "4.53\\text{ m}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Vertical $=5\\sin25°=5\\times0.423=2.11$ m.", working: "2.11\\text{ m}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the height.", working: "2.11\\text{ m}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Angle between ramp and vertical wall = $90°-60°=30°$.", working: "30°", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State the angle.", working: "30°", marks: 1, markCode: "A" },
              { part: "d", reasoning: "The ramp's angle with the ground IS the angle of inclination — same angle.", working: "\\text{same angle}", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Explain the definition.", working: "\\text{angle of inclination}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 4.53 m (b) 2.11 m (c) 30° (d) angle of inclination is defined as angle with horizontal",
            commonErrors: ["In (c), using 60° directly instead of complement."],
            examinerNote: "M1 A1 for (a), M1 A1 for (b), M1 A1 for (c), R1 A1 for (d).",
          },
        },
        {
          id: "mypme4-u3-3d-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the angle between a line that lies in a plane and the plane itself?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$45°$" },
              { id: "b", text: "$90°$" },
              { id: "c", text: "$0°$" },
              { id: "d", text: "Cannot be determined" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Line-plane angle", statement: "A line in the plane makes angle $0°$ with it." },
            ],
            steps: [
              { reasoning: "The line coincides with its projection → angle $0°$.", working: "0°", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $0°$",
            commonErrors: ["Confusing with a perpendicular line ($90°$)."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypme4-u3-3d-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A line 10 m long makes a $30°$ angle with the horizontal plane. Find the horizontal distance it covers.",
          response: { type: "numeric", parts: [{ label: "Horizontal distance (m)", answer: 8.66, tolerance: 0.01 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Trigonometry", statement: "Horizontal $=L\\cos\\theta$; vertical $=L\\sin\\theta$." },
            ],
            steps: [
              { reasoning: "$10\\cos30°=10\\times0.866=8.66$ m.", working: "8.66", marks: 1, markCode: "B" },
            ],
            finalAnswer: "$8.66$ m",
            commonErrors: ["Using sine instead of cosine."],
          },
        },
        {
          id: "mypme4-u3-3d-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "A line is 8 m long and makes a $60°$ angle with the horizontal plane. Find its vertical height above the plane.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$4$ m" },
              { id: "b", text: "$4\\sqrt{3}$ m" },
              { id: "c", text: "$8\\sqrt{3}$ m" },
              { id: "d", text: "$\\frac{8}{\\sqrt{3}}$ m" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Trigonometry", statement: "Vertical $=L\\sin\\theta=8\\sin60°$." },
            ],
            steps: [
              { reasoning: "$8\\sin60°=8\\times\\frac{\\sqrt{3}}{2}=4\\sqrt{3}$ m.", working: "4\\sqrt{3}", marks: 1, markCode: "M" },
              { reasoning: "State the height.", working: "4\\sqrt{3}\\text{ m}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$4\\sqrt{3}$ m",
            commonErrors: ["Using cosine for the vertical component."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypme4-u3-3d-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "A ramp is 12 m long and inclined at $25°$ to the horizontal. Find its vertical height.",
          response: { type: "numeric", parts: [{ label: "Height (m)", answer: 5.07, tolerance: 0.01 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Trigonometry", statement: "Height $=L\\sin\\theta=12\\sin25°$." },
            ],
            steps: [
              { reasoning: "$12\\sin25°=12\\times0.4226=5.07$ m.", working: "5.07", marks: 1, markCode: "M" },
              { reasoning: "State the height.", working: "5.07\\text{ m}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$5.07$ m",
            commonErrors: ["Using $12\\cos25°$ for the height."],
          },
        },
        {
          id: "mypme4-u3-3d-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "A path goes 100 m horizontally at a bearing of $060°$, then rises 30 m vertically. Find the angle of elevation of the final position above the start.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$73.3°$" },
              { id: "b", text: "$60°$" },
              { id: "c", text: "$16.7°$" },
              { id: "d", text: "$30°$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Trigonometry", statement: "$\\tan\\theta=\\frac{\\text{vertical}}{\\text{horizontal}}=\\frac{30}{100}$." },
            ],
            steps: [
              { reasoning: "$\\tan\\theta=0.3 \\Rightarrow \\theta=\\tan^{-1}0.3=16.7°$." , working: "16.7°", marks: 1, markCode: "M" },
              { reasoning: "State the angle.", working: "16.7°", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$16.7°$",
            commonErrors: ["Using the bearing 60° instead of the elevation angle."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypme4-u3-3d-q10",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A line 15 m long makes a $40°$ angle with the horizontal plane. Find the length of its projection on the plane.",
          response: { type: "numeric", parts: [{ label: "Projection (m)", answer: 11.49, tolerance: 0.01 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Projection", statement: "Projection $=L\\cos\\theta=15\\cos40°$." },
            ],
            steps: [
              { reasoning: "$15\\cos40°=15\\times0.766=11.49$ m.", working: "11.49", marks: 1, markCode: "M" },
              { reasoning: "State the length.", working: "11.49\\text{ m}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$11.49$ m",
            commonErrors: ["Using sine — projection uses cosine."],
          },
        },
        {
          id: "mypme4-u3-3d-q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Two planes meet at an angle of $50°$. In each plane, a line is drawn perpendicular to the line of intersection. What is the angle between these two lines?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$90°$" },
              { id: "b", text: "$130°$" },
              { id: "c", text: "$25°$" },
              { id: "d", text: "$50°$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Dihedral angle", statement: "Angle between planes equals the angle between perpendiculars to their intersection." },
            ],
            steps: [
              { reasoning: "The dihedral angle is defined by these perpendiculars.", working: "\\text{dihedral angle}", marks: 1, markCode: "M" },
              { reasoning: "Therefore the angle between the lines is $50°$.", working: "50°", marks: 1, markCode: "M" },
              { reasoning: "State the answer.", working: "50°", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$50°$",
            commonErrors: ["Halving or supplementing the angle."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypme4-u3-3d-q12",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A path climbs at an angle of elevation of $5°$ over a horizontal distance of 200 m. Find the vertical height gained.",
          response: { type: "numeric", parts: [{ label: "Height (m)", answer: 17.49, tolerance: 0.01 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Trigonometry", statement: "Height $=d\\tan\\theta=200\\tan5°$." },
            ],
            steps: [
              { reasoning: "$200\\tan5°=200\\times0.0875=17.49$ m.", working: "17.49", marks: 1, markCode: "M" },
              { reasoning: "State the height.", working: "17.49\\text{ m}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$17.49$ m",
            commonErrors: ["Using $200\\sin5°$ — small-angle difference, but tan is correct for slope."],
          },
        },
        {
          id: "mypme4-u3-3d-q13",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A line is 20 m long and makes a $35°$ angle with the horizontal plane. What is the length of its projection onto the plane?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$20$ m" },
              { id: "b", text: "$16.4$ m" },
              { id: "c", text: "$11.5$ m" },
              { id: "d", text: "$8.2$ m" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Projection", statement: "Projection $=L\\cos\\theta=20\\cos35°$." },
            ],
            steps: [
              { reasoning: "$20\\cos35°=20\\times0.819=16.38\\approx16.4$ m.", working: "16.4", marks: 1, markCode: "M" },
              { reasoning: "Check: projection must be shorter than the line. ✓", working: "16.4<20", marks: 1, markCode: "M" },
              { reasoning: "State the length.", working: "16.4\\text{ m}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$16.4$ m",
            commonErrors: ["Using $20\\sin35°$ for the projection."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypme4-u3-3d-q14",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "A ramp is 8 m long and inclined at $20°$ to the horizontal.",
          parts: [
            { label: "a", prompt: "Find the horizontal distance covered.", marks: 2 },
            { label: "b", prompt: "Find the vertical height gained.", marks: 2 },
            { label: "c", prompt: "Find the angle between the ramp and a vertical wall.", marks: 2 },
            { label: "d", prompt: "Explain what 'angle of elevation' means for this ramp.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Trigonometry", statement: "Horizontal $=L\\cos\\theta$; vertical $=L\\sin\\theta$." },
            ],
            steps: [
              { part: "a", reasoning: "$8\\cos20°=8\\times0.940=7.52$ m.", working: "7.52\\text{ m}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the distance.", working: "7.52\\text{ m}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$8\\sin20°=8\\times0.342=2.74$ m.", working: "2.74\\text{ m}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the height.", working: "2.74\\text{ m}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Angle with vertical wall $=90°-20°=70°$.", working: "70°", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State the angle.", working: "70°", marks: 1, markCode: "A" },
              { part: "d", reasoning: "The angle of elevation is the angle the ramp makes above the horizontal — here $20°$.", working: "\\text{angle above horizontal}", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) 7.52 m (b) 2.74 m (c) 70° (d) angle above horizontal = 20°",
            commonErrors: ["In (c), using 20° directly instead of the complement."],
            examinerNote: "M1 A1 for (a), M1 A1 for (b), M1 A1 for (c), R1 for (d).",
          },
        },
        {
          id: "mypme4-u3-3d-q15",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A wire of length 25 m is fixed at the top of a pole and anchored 25 m along the ground, making a $50°$ angle with the ground.",
          parts: [
            { label: "a", prompt: "Find the height of the pole.", marks: 2 },
            { label: "b", prompt: "Find the horizontal distance from the base of the pole to the anchor.", marks: 2 },
            { label: "c", prompt: "Find the angle between the wire and the vertical pole.", marks: 2 },
            { label: "d", prompt: "If the wire made a $60°$ angle with the ground instead, find the pole height.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Trigonometry", statement: "Height $=L\\sin\\theta$; horizontal $=L\\cos\\theta$." },
            ],
            steps: [
              { part: "a", reasoning: "$25\\sin50°=25\\times0.766=19.15$ m.", working: "19.15\\text{ m}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the height.", working: "19.15\\text{ m}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$25\\cos50°=25\\times0.643=16.07$ m.", working: "16.07\\text{ m}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the distance.", working: "16.07\\text{ m}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Angle with vertical pole $=90°-50°=40°$.", working: "40°", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State the angle.", working: "40°", marks: 1, markCode: "A" },
              { part: "d", reasoning: "$25\\sin60°=25\\times\\frac{\\sqrt{3}}{2}=21.65$ m.", working: "21.65\\text{ m}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "State the height.", working: "21.65\\text{ m}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 19.15 m (b) 16.07 m (c) 40° (d) 21.65 m",
            commonErrors: ["In (c), forgetting the complement with the vertical."],
            examinerNote: "M1 A1 for (a), M1 A1 for (b), M1 A1 for (c), M1 A1 for (d).",
          },
        },
        {
          id: "mypme4-u3-3d-q16",
          difficulty: "core",
          totalMarks: 2,
          stem: "A ladder 5 m long leans against a wall with its foot 3 m from the wall. Find the angle the ladder makes with the ground.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$30°$" },
              { id: "b", text: "$36.9°$" },
              { id: "c", text: "$53.1°$" },
              { id: "d", text: "$60°$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Trigonometry", statement: "$\\cos\\theta=\\frac{\\text{adjacent}}{\\text{hypotenuse}}=\\frac{3}{5}$." },
            ],
            steps: [
              { reasoning: "$\\cos\\theta=\\frac{3}{5}=0.6 \\Rightarrow \\theta=\\cos^{-1}0.6=53.13°$." , working: "53.13°", marks: 1, markCode: "M" },
              { reasoning: "State the angle.", working: "53.1°", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$53.1°$",
            commonErrors: ["Using $\\sin\\theta=\\frac{3}{5}$ which gives the angle with the wall."],
            examinerNote: "M1 A1.",
          },
        },
      ],
    },
  ],
};
