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
              { id: "a", text: "$\\mathbf{a}-\\mathbf{b}$" },
              { id: "b", text: "$\\mathbf{b}-\\mathbf{a}$" },
              { id: "c", text: "$\\mathbf{a}+\\mathbf{b}$" },
              { id: "d", text: "$\\mathbf{a}\\times\\mathbf{b}$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Displacement", statement: "$\\overrightarrow{AB}=\\mathbf{b}-\\mathbf{a}$" },
            ],
            steps: [
              { reasoning: "Recall the formula.", working: "b-a", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $\\mathbf{b}-\\mathbf{a}$",
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
        {
          id: "ciem-u9-vectors-motion-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Velocity is defined as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Distance travelled per unit time" },
              { id: "b", text: "Displacement per unit time" },
              { id: "c", text: "Acceleration per unit time" },
              { id: "d", text: "Position per unit time" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Velocity", definition: "Rate of change of displacement; a vector with direction." },
            ],
            steps: [
              { reasoning: "Recall the definition.", working: "v = displacement/time", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Displacement per unit time",
            commonErrors: ["Confusing velocity (vector) with speed (scalar)."],
          },
        },
        {
          id: "ciem-u9-vectors-motion-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "$\\mathbf{r}(t)=\\begin{pmatrix}2\\\\1\\end{pmatrix}+t\\begin{pmatrix}1\\\\3\\end{pmatrix}$. Find the position vector at $t=3$.",
          response: { type: "numeric", unordered: true, parts: [{ label: "x", answer: 5, tolerance: 0.001 }, { label: "y", answer: 10, tolerance: 0.001 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Position vector", statement: "$\\mathbf{r}(t)=\\mathbf{r}_0+t\\mathbf{v}$" },
            ],
            steps: [
              { reasoning: "Substitute $t=3$: $\\begin{pmatrix}2\\\\1\\end{pmatrix}+3\\begin{pmatrix}1\\\\3\\end{pmatrix}=\\begin{pmatrix}2+3\\\\1+9\\end{pmatrix}$.", working: "=\\begin{pmatrix}5\\\\10\\end{pmatrix}", marks: 1, markCode: "M" },
              { reasoning: "State the position vector.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\begin{pmatrix}5\\\\10\\end{pmatrix}$",
            commonErrors: ["Multiplying only one component by $t$."],
          },
        },
        {
          id: "ciem-u9-vectors-motion-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "A boat moves through water while a current acts on it. The resultant velocity is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The sum of the two speeds" },
              { id: "b", text: "The difference of the two velocities" },
              { id: "c", text: "The vector sum of the two velocities" },
              { id: "d", text: "The larger of the two velocities" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Resultant velocity", statement: "$\\mathbf{v}_R=\\mathbf{v}_1+\\mathbf{v}_2$" },
            ],
            steps: [
              { reasoning: "Recall the principle of superposition.", working: "v_R = v_1 + v_2", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Vector sum",
            commonErrors: ["Adding speeds instead of velocity vectors."],
          },
        },
        {
          id: "ciem-u9-vectors-motion-q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "A boat's velocity in still water is $\\begin{pmatrix}5\\\\0\\end{pmatrix}$ km/h and the current adds $\\begin{pmatrix}0\\\\3\\end{pmatrix}$ km/h. Find the resultant velocity vector and the resultant speed.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Resultant velocity", statement: "$\\mathbf{v}_R=\\mathbf{v}_1+\\mathbf{v}_2$" },
              { kind: "formula", name: "Magnitude", statement: "$|\\mathbf{v}|=\\sqrt{x^2+y^2}$" },
            ],
            steps: [
              { reasoning: "Add the velocity vectors.", working: "\\begin{pmatrix}5+0\\\\0+3\\end{pmatrix}=\\begin{pmatrix}5\\\\3\\end{pmatrix}", marks: 1, markCode: "M" },
              { reasoning: "Speed $=\\sqrt{25+9}=\\sqrt{34}$.", working: "\\sqrt{34}", marks: 1, markCode: "M" },
              { reasoning: "State both answers.", working: "\\approx5.83\\text{ km/h}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\mathbf{v}_R=\\begin{pmatrix}5\\\\3\\end{pmatrix}$ km/h, speed $\\sqrt{34}\\approx5.83$ km/h",
            commonErrors: ["Adding magnitudes $5+3=8$ instead of the vectors."],
          },
        },
        {
          id: "ciem-u9-vectors-motion-q9",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Two velocity vectors are $\\mathbf{v}_1=\\begin{pmatrix}3\\\\4\\end{pmatrix}$ and $\\mathbf{v}_2=\\begin{pmatrix}4\\\\0\\end{pmatrix}$. Find the magnitude of the resultant velocity.",
          response: { type: "numeric", parts: [{ label: "speed", answer: 8.06, tolerance: 0.01, unit: "km/h" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Resultant velocity", statement: "$\\mathbf{v}_R=\\mathbf{v}_1+\\mathbf{v}_2$" },
              { kind: "formula", name: "Magnitude", statement: "$|\\mathbf{v}|=\\sqrt{x^2+y^2}$" },
            ],
            steps: [
              { reasoning: "$\\mathbf{v}_R=\\begin{pmatrix}7\\\\4\\end{pmatrix}$; magnitude $=\\sqrt{49+16}=\\sqrt{65}$.", working: "\\sqrt{65}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "\\approx8.06", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\sqrt{65}\\approx8.06$ km/h",
            commonErrors: ["Adding the component magnitudes incorrectly."],
          },
        },
        {
          id: "ciem-u9-vectors-motion-q10",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A velocity vector $\\begin{pmatrix}3\\\\4\\end{pmatrix}$ has magnitude:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "12" },
              { id: "b", text: "7" },
              { id: "c", text: "$\\sqrt{7}$" },
              { id: "d", text: "5" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Magnitude", statement: "$|\\mathbf{v}|=\\sqrt{x^2+y^2}=\\sqrt{9+16}=5$" },
            ],
            steps: [
              { reasoning: "Apply Pythagoras.", working: "\\sqrt{9+16}=\\sqrt{25}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** 5",
            commonErrors: ["Adding components $3+4=7$."],
          },
        },
        {
          id: "ciem-u9-vectors-motion-q11",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A particle has position vector $\\mathbf{r}(t)=\\begin{pmatrix}1\\\\2\\end{pmatrix}+t\\begin{pmatrix}2\\\\-1\\end{pmatrix}$. Find its position at $t=5$ and the distance it has moved from $t=0$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Position vector", statement: "$\\mathbf{r}(t)=\\mathbf{r}_0+t\\mathbf{v}$" },
              { kind: "formula", name: "Magnitude", statement: "$|\\mathbf{v}|=\\sqrt{x^2+y^2}$" },
            ],
            steps: [
              { reasoning: "Position at $t=5$: $\\begin{pmatrix}1\\\\2\\end{pmatrix}+5\\begin{pmatrix}2\\\\-1\\end{pmatrix}=\\begin{pmatrix}11\\\\-3\\end{pmatrix}$.", working: "\\begin{pmatrix}11\\\\-3\\end{pmatrix}", marks: 1, markCode: "M" },
              { reasoning: "Displacement over 5 hours $=5\\mathbf{v}=\\begin{pmatrix}10\\\\-5\\end{pmatrix}$.", working: "\\begin{pmatrix}10\\\\-5\\end{pmatrix}", marks: 1, markCode: "M" },
              { reasoning: "Distance $=\\sqrt{100+25}=\\sqrt{125}=5\\sqrt5$.", working: "\\sqrt{125}", marks: 1, markCode: "M" },
              { reasoning: "State both answers.", working: "\\approx11.18", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Position $\\begin{pmatrix}11\\\\-3\\end{pmatrix}$; distance $5\\sqrt5\\approx11.18$",
            commonErrors: ["Using velocity magnitude $\\sqrt5$ without multiplying by time."],
          },
        },
        {
          id: "ciem-u9-vectors-motion-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "A particle starts at the origin with constant velocity $\\begin{pmatrix}2\\\\1\\end{pmatrix}$ km/h. Find its position after 4 hours and its distance from the origin.",
          response: { type: "numeric", parts: [{ label: "x", answer: 8, tolerance: 0.001 }, { label: "y", answer: 4, tolerance: 0.001 }, { label: "distance", answer: 8.94, tolerance: 0.01, unit: "km" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Position vector", statement: "$\\mathbf{r}(t)=\\mathbf{r}_0+t\\mathbf{v}$" },
              { kind: "formula", name: "Magnitude", statement: "$|\\mathbf{r}|=\\sqrt{x^2+y^2}$" },
            ],
            steps: [
              { reasoning: "Displacement $=4\\begin{pmatrix}2\\\\1\\end{pmatrix}=\\begin{pmatrix}8\\\\4\\end{pmatrix}$.", working: "tv=(8,4)", marks: 1, markCode: "M" },
              { reasoning: "Position $=$ displacement since $\\mathbf{r}_0=\\mathbf{0}$: $(8,4)$.", working: "r=(8,4)", marks: 1, markCode: "M" },
              { reasoning: "Distance $=\\sqrt{64+16}=\\sqrt{80}=4\\sqrt5\\approx8.94$ km.", working: "\\sqrt{80}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Position $(8,4)$; distance $4\\sqrt5\\approx8.94$ km",
            commonErrors: ["Forgetting the origin means position equals displacement."],
          },
        },
        {
          id: "ciem-u9-vectors-motion-q13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The speed of a moving particle is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Its acceleration" },
              { id: "b", text: "Its displacement" },
              { id: "c", text: "Its velocity vector" },
              { id: "d", text: "The magnitude of its velocity vector" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Speed", statement: "Speed $=|\\mathbf{v}|=\\sqrt{x^2+y^2}$ — a scalar." },
            ],
            steps: [
              { reasoning: "Recall the definition.", working: "speed = |v|", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Magnitude of velocity",
            commonErrors: ["Confusing speed with velocity."],
          },
        },
        {
          id: "ciem-u9-vectors-motion-q14",
          difficulty: "core",
          totalMarks: 3,
          stem: "A swimmer's velocity in still water is $\\begin{pmatrix}0\\\\4\\end{pmatrix}$ km/h and the river current is $\\begin{pmatrix}3\\\\0\\end{pmatrix}$ km/h. Find the resultant speed of the swimmer.",
          response: { type: "numeric", parts: [{ label: "speed", answer: 5, tolerance: 0.001, unit: "km/h" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Resultant velocity", statement: "$\\mathbf{v}_R=\\mathbf{v}_1+\\mathbf{v}_2$" },
              { kind: "formula", name: "Magnitude", statement: "$|\\mathbf{v}|=\\sqrt{x^2+y^2}$" },
            ],
            steps: [
              { reasoning: "Add the velocities: $\\begin{pmatrix}3\\\\4\\end{pmatrix}$.", working: "v_R=(3,4)", marks: 1, markCode: "M" },
              { reasoning: "Magnitude $=\\sqrt{9+16}=\\sqrt{25}$.", working: "\\sqrt{25}", marks: 1, markCode: "M" },
              { reasoning: "State the speed.", working: "5 km/h", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$5$ km/h",
            commonErrors: ["Adding $4+3=7$ instead of using Pythagoras."],
          },
        },
        {
          id: "ciem-u9-vectors-motion-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "If $\\mathbf{r}(t)=\\begin{pmatrix}1\\\\0\\end{pmatrix}+t\\begin{pmatrix}2\\\\2\\end{pmatrix}$, the velocity vector of the particle is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\begin{pmatrix}1\\\\0\\end{pmatrix}$" },
              { id: "b", text: "$\\begin{pmatrix}2t\\\\2t\\end{pmatrix}$" },
              { id: "c", text: "$\\begin{pmatrix}3\\\\2\\end{pmatrix}$" },
              { id: "d", text: "$\\begin{pmatrix}2\\\\2\\end{pmatrix}$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Position vector", statement: "In $\\mathbf{r}(t)=\\mathbf{r}_0+t\\mathbf{v}$, the coefficient of $t$ is $\\mathbf{v}$." },
            ],
            steps: [
              { reasoning: "Identify the coefficient of $t$.", working: "v=(2,2)", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** $\\begin{pmatrix}2\\\\2\\end{pmatrix}$",
            commonErrors: ["Giving the initial position instead of velocity."],
          },
        },
        {
          id: "ciem-u9-vectors-motion-q16",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A boat has velocity $\\begin{pmatrix}4\\\\0\\end{pmatrix}$ km/h in still water and the current is $\\begin{pmatrix}0\\\\2\\end{pmatrix}$ km/h. The boat starts at the origin.",
          parts: [
            { label: "a", prompt: "Find the resultant velocity vector.", marks: 2 },
            { label: "b", prompt: "Find the boat's position vector after 3 hours.", marks: 3 },
            { label: "c", prompt: "Find the time at which the boat's $y$-coordinate is 10, and its position then.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Resultant velocity", statement: "$\\mathbf{v}_R=\\mathbf{v}_1+\\mathbf{v}_2$" },
              { kind: "formula", name: "Position vector", statement: "$\\mathbf{r}(t)=\\mathbf{r}_0+t\\mathbf{v}_R$" },
            ],
            steps: [
              { part: "a", reasoning: "Add the velocities.", working: "\\begin{pmatrix}4+0\\\\0+2\\end{pmatrix}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the resultant.", working: "=\\begin{pmatrix}4\\\\2\\end{pmatrix}\\text{ km/h}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$\\mathbf{r}(3)=\\mathbf{0}+3\\begin{pmatrix}4\\\\2\\end{pmatrix}$.", working: "=3\\begin{pmatrix}4\\\\2\\end{pmatrix}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate.", working: "=\\begin{pmatrix}12\\\\6\\end{pmatrix}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the position vector.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$y$-coordinate: $2t=10$.", working: "t=5", marks: 1, markCode: "M" },
              { part: "c", reasoning: "$x$-coordinate at $t=5$: $4\\times5=20$.", working: "x=20", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Position $\\begin{pmatrix}20\\\\10\\end{pmatrix}$.", working: "\\begin{pmatrix}20\\\\10\\end{pmatrix}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State time and position.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $\\begin{pmatrix}4\\\\2\\end{pmatrix}$ km/h (b) $\\begin{pmatrix}12\\\\6\\end{pmatrix}$ after 3 h (c) $t=5$ h, position $\\begin{pmatrix}20\\\\10\\end{pmatrix}$",
            commonErrors: ["In (c) solving for $x$ instead of $y$.", "Forgetting units are hours and km."],
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
              { id: "a", text: "$\\frac34$" },
              { id: "b", text: "$\\frac13$" },
              { id: "c", text: "$\\frac12$" },
              { id: "d", text: "$\\frac14$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Section formula", statement: "$\\overrightarrow{AP}=\\frac{m}{m+n}\\overrightarrow{AB}$" },
            ],
            steps: [
              { reasoning: "Ratio $1:3$ → fraction $\\frac{1}{1+3}=\\frac14$.", working: "\\frac14", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** $\\frac14$",
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
        {
          id: "ciem-u9-vector-problem-solving-extended-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The difference between a 'show that' question and a 'find' question is that a 'show that' question requires:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A diagram" },
              { id: "b", text: "Algebraic justification leading to the given result" },
              { id: "c", text: "A numerical answer only" },
              { id: "d", text: "No working" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Show that", statement: "Algebraic working that ends at the stated result." },
            ],
            steps: [
              { reasoning: "Recall exam technique.", working: "\\text{justify algebraically}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Algebraic justification",
            commonErrors: ["Writing only the result — unsupported answers earn no marks."],
          },
        },
        {
          id: "ciem-u9-vector-problem-solving-extended-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "$A(0,0)$, $B(6,0)$, $C(3,6)$. $D$ is the midpoint of $BC$. Find the position vector of $D$.",
          response: { type: "numeric", unordered: true, parts: [{ label: "x", answer: 4.5, tolerance: 0.001 }, { label: "y", answer: 3, tolerance: 0.001 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Midpoint", statement: "$\\mathbf{d}=\\frac{\\mathbf{b}+\\mathbf{c}}{2}$" },
            ],
            steps: [
              { reasoning: "$\\mathbf{d}=\\frac12\\left(\\begin{pmatrix}6\\\\0\\end{pmatrix}+\\begin{pmatrix}3\\\\6\\end{pmatrix}\\right)=\\frac12\\begin{pmatrix}9\\\\6\\end{pmatrix}$.", working: "d=(4.5,3)", marks: 1, markCode: "M" },
              { reasoning: "State the position vector.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\begin{pmatrix}4.5\\\\3\\end{pmatrix}$",
            commonErrors: ["Forgetting to halve."],
          },
        },
        {
          id: "ciem-u9-vector-problem-solving-extended-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "If $\\mathbf{p}=\\mathbf{a}+t(\\mathbf{b}-\\mathbf{a})$ and $t=\\frac13$, then $P$ divides $AB$ in the ratio:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$1:3$" },
              { id: "b", text: "$2:1$" },
              { id: "c", text: "$1:2$" },
              { id: "d", text: "$1:1$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Point on AB", statement: "$t=\\frac{m}{m+n}$ for ratio $m:n$" },
            ],
            steps: [
              { reasoning: "$t=\\frac13$ means $AP:PB=1:2$.", working: "t=1/3", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** $1:2$",
            commonErrors: ["Reading $t$ directly as the ratio."],
          },
        },
        {
          id: "ciem-u9-vector-problem-solving-extended-q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "$A(2,0)$, $B(6,0)$, $C(4,4)$. $E$ is the midpoint of $BC$. Find $\\overrightarrow{AE}$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Midpoint", statement: "$\\mathbf{e}=\\frac{\\mathbf{b}+\\mathbf{c}}{2}$" },
            ],
            steps: [
              { reasoning: "$\\mathbf{e}=\\frac12\\left(\\begin{pmatrix}6\\\\0\\end{pmatrix}+\\begin{pmatrix}4\\\\4\\end{pmatrix}\\right)=\\begin{pmatrix}5\\\\2\\end{pmatrix}$.", working: "e=(5,2)", marks: 1, markCode: "M" },
              { reasoning: "$\\overrightarrow{AE}=\\mathbf{e}-\\mathbf{a}=\\begin{pmatrix}5-2\\\\2-0\\end{pmatrix}$.", working: "=\\begin{pmatrix}3\\\\2\\end{pmatrix}", marks: 1, markCode: "M" },
              { reasoning: "State the vector.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\overrightarrow{AE}=\\begin{pmatrix}3\\\\2\\end{pmatrix}$",
            commonErrors: ["Forgetting $\\mathbf{a}\\neq\\mathbf{0}$ here — must subtract."],
          },
        },
        {
          id: "ciem-u9-vector-problem-solving-extended-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "$A(0,0)$, $B(8,8)$. Find the position vector of the point one quarter of the way from $A$ to $B$.",
          response: { type: "numeric", unordered: true, parts: [{ label: "x", answer: 2, tolerance: 0.001 }, { label: "y", answer: 2, tolerance: 0.001 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Point on AB", statement: "$\\mathbf{p}=\\mathbf{a}+\\frac14(\\mathbf{b}-\\mathbf{a})$" },
            ],
            steps: [
              { reasoning: "$\\mathbf{p}=\\frac14\\begin{pmatrix}8\\\\8\\end{pmatrix}$.", working: "=\\frac14\\begin{pmatrix}8\\\\8\\end{pmatrix}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "=\\begin{pmatrix}2\\\\2\\end{pmatrix}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\begin{pmatrix}2\\\\2\\end{pmatrix}$",
            commonErrors: ["Using $\\frac34$ instead of $\\frac14$."],
          },
        },
        {
          id: "ciem-u9-vector-problem-solving-extended-q10",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "The point dividing $AB$ in the ratio $2:1$ has position vector:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac{2\\mathbf{a}+\\mathbf{b}}{3}$" },
              { id: "b", text: "$\\frac{\\mathbf{a}+2\\mathbf{b}}{3}$" },
              { id: "c", text: "$\\frac{2\\mathbf{a}+2\\mathbf{b}}{3}$" },
              { id: "d", text: "$\\frac{\\mathbf{a}+\\mathbf{b}}{3}$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Section formula", statement: "$\\frac{n\\mathbf{a}+m\\mathbf{b}}{m+n}$ with $m=2$, $n=1$." },
            ],
            steps: [
              { reasoning: "Weights reversed: $n=1$ on $\\mathbf{a}$, $m=2$ on $\\mathbf{b}$.", working: "\\frac{a+2b}{3}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $\\frac{\\mathbf{a}+2\\mathbf{b}}{3}$",
            commonErrors: ["Not reversing the weights — $2:1$ means closer to $B$."],
          },
        },
        {
          id: "ciem-u9-vector-problem-solving-extended-q11",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "$A(0,0)$, $B(8,0)$, $C(4,8)$. $D$ divides $AB$ in the ratio $1:3$ and $E$ divides $AC$ in the ratio $1:3$.",
          parts: [
            { label: "a", prompt: "Find the position vectors of $D$ and $E$.", marks: 2 },
            { label: "b", prompt: "Show that $DE \\parallel BC$.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Section formula", statement: "$\\mathbf{p}=\\mathbf{a}+\\frac{m}{m+n}(\\mathbf{b}-\\mathbf{a})$" },
              { kind: "technique", name: "Parallel proof", statement: "$\\overrightarrow{DE}=k\\overrightarrow{BC}$" },
            ],
            steps: [
              { part: "a", reasoning: "$\\mathbf{d}=\\frac14\\begin{pmatrix}8\\\\0\\end{pmatrix}=\\begin{pmatrix}2\\\\0\\end{pmatrix}$; $\\mathbf{e}=\\frac14\\begin{pmatrix}4\\\\8\\end{pmatrix}=\\begin{pmatrix}1\\\\2\\end{pmatrix}$.", working: "d=(2,0),\\ e=(1,2)", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State both position vectors.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$\\overrightarrow{DE}=\\begin{pmatrix}1-2\\\\2-0\\end{pmatrix}=\\begin{pmatrix}-1\\\\2\\end{pmatrix}$; $\\overrightarrow{BC}=\\begin{pmatrix}4-8\\\\8-0\\end{pmatrix}=\\begin{pmatrix}-4\\\\8\\end{pmatrix}=4\\begin{pmatrix}-1\\\\2\\end{pmatrix}$.", working: "BC=4 DE", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Scalar multiple $\\Rightarrow$ parallel. QED.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $\\mathbf{d}=\\begin{pmatrix}2\\\\0\\end{pmatrix}$, $\\mathbf{e}=\\begin{pmatrix}1\\\\2\\end{pmatrix}$ (b) proven",
            commonErrors: ["Using $\\frac34$ of the way instead of $\\frac14$."],
          },
        },
        {
          id: "ciem-u9-vector-problem-solving-extended-q12",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "$A(0,0)$, $B(9,0)$, $C(3,6)$. The midpoint of $BC$ is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$(6,6)$" },
              { id: "b", text: "$(3,3)$" },
              { id: "c", text: "$(6,3)$" },
              { id: "d", text: "$(4.5,3)$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Midpoint", statement: "$\\frac{\\mathbf{b}+\\mathbf{c}}{2}$" },
            ],
            steps: [
              { reasoning: "$\\frac12\\begin{pmatrix}9+3\\\\0+6\\end{pmatrix}=\\begin{pmatrix}6\\\\3\\end{pmatrix}$.", working: "(6,3)", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** $(6,3)$",
            commonErrors: ["Averaging the wrong pair of points."],
          },
        },
        {
          id: "ciem-u9-vector-problem-solving-extended-q13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Point $P$ divides $AB$ in the ratio $m:n$ with $m<n$. $P$ is closer to $A$, so it has the larger weight on:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The midpoint formula" },
              { id: "b", text: "Neither — weights are equal" },
              { id: "c", text: "$\\mathbf{a}$" },
              { id: "d", text: "$\\mathbf{b}$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Section formula", statement: "Weights reversed: larger weight on the nearer endpoint." },
            ],
            steps: [
              { reasoning: "Reason: $P$ near $A$ means position $\\approx\\mathbf{a}$.", working: "n a + m b", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** $\\mathbf{a}$",
            commonErrors: ["Weighting the farther endpoint more."],
          },
        },
        {
          id: "ciem-u9-vector-problem-solving-extended-q14",
          difficulty: "core",
          totalMarks: 3,
          stem: "$A(1,1)$, $B(7,1)$, $C(4,7)$. $F$ is the midpoint of $BC$. Find $\\overrightarrow{AF}$.",
          response: { type: "numeric", unordered: true, parts: [{ label: "x", answer: 4.5, tolerance: 0.001 }, { label: "y", answer: 3, tolerance: 0.001 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Midpoint", statement: "$\\mathbf{f}=\\frac{\\mathbf{b}+\\mathbf{c}}{2}$" },
            ],
            steps: [
              { reasoning: "$\\mathbf{f}=\\frac12\\left(\\begin{pmatrix}7\\\\1\\end{pmatrix}+\\begin{pmatrix}4\\\\7\\end{pmatrix}\\right)=\\begin{pmatrix}5.5\\\\4\\end{pmatrix}$.", working: "f=(5.5,4)", marks: 1, markCode: "M" },
              { reasoning: "$\\overrightarrow{AF}=\\mathbf{f}-\\mathbf{a}=\\begin{pmatrix}5.5-1\\\\4-1\\end{pmatrix}$.", working: "=\\begin{pmatrix}4.5\\\\3\\end{pmatrix}", marks: 1, markCode: "M" },
              { reasoning: "State the vector.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\begin{pmatrix}4.5\\\\3\\end{pmatrix}$",
            commonErrors: ["Forgetting to subtract $\\mathbf{a}$ (not the origin)."],
          },
        },
        {
          id: "ciem-u9-vector-problem-solving-extended-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Parallelogram $ABCD$ has $A(0,0)$, $B(6,0)$, $C(8,4)$, $D(2,4)$. Find the position vector of the intersection of the diagonals.",
          response: { type: "numeric", unordered: true, parts: [{ label: "x", answer: 4, tolerance: 0.001 }, { label: "y", answer: 2, tolerance: 0.001 }] },
          markscheme: {
            principles: [
              { kind: "property", name: "Parallelogram diagonals", statement: "Diagonals bisect — intersection is midpoint of $AC$ (or $BD$)." },
            ],
            steps: [
              { reasoning: "Midpoint of $AC$: $\\frac12\\left(\\begin{pmatrix}0\\\\0\\end{pmatrix}+\\begin{pmatrix}8\\\\4\\end{pmatrix}\\right)$.", working: "=\\frac12\\begin{pmatrix}8\\\\4\\end{pmatrix}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "=\\begin{pmatrix}4\\\\2\\end{pmatrix}", marks: 1, markCode: "M" },
              { reasoning: "State the position vector.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\begin{pmatrix}4\\\\2\\end{pmatrix}$",
            commonErrors: ["Using a side midpoint instead of a diagonal midpoint."],
          },
        },
        {
          id: "ciem-u9-vector-problem-solving-extended-q16",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Triangle $ABC$ has $A(0,0)$, $B(12,0)$, $C(8,10)$. $D$ is the midpoint of $BC$ and $E$ is the midpoint of $AC$.",
          parts: [
            { label: "a", prompt: "Find the position vectors of $D$ and $E$.", marks: 3 },
            { label: "b", prompt: "Show that $DE \\parallel AB$ and $DE=\\frac12AB$.", marks: 3 },
            { label: "c", prompt: "Find $\\overrightarrow{AD}$ and its length.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Midpoint", statement: "$\\mathbf{d}=\\frac{\\mathbf{b}+\\mathbf{c}}{2}$, $\\mathbf{e}=\\frac{\\mathbf{a}+\\mathbf{c}}{2}$" },
              { kind: "formula", name: "Magnitude", statement: "$|\\mathbf{v}|=\\sqrt{x^2+y^2}$" },
            ],
            steps: [
              { part: "a", reasoning: "$\\mathbf{d}=\\frac12\\left(\\begin{pmatrix}12\\\\0\\end{pmatrix}+\\begin{pmatrix}8\\\\10\\end{pmatrix}\\right)=\\begin{pmatrix}10\\\\5\\end{pmatrix}$; $\\mathbf{e}=\\frac12\\left(\\begin{pmatrix}0\\\\0\\end{pmatrix}+\\begin{pmatrix}8\\\\10\\end{pmatrix}\\right)=\\begin{pmatrix}4\\\\5\\end{pmatrix}$.", working: "d=(10,5),\\ e=(4,5)", marks: 2, markCode: "M" },
              { part: "a", reasoning: "State both position vectors.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$\\overrightarrow{DE}=\\mathbf{e}-\\mathbf{d}=\\begin{pmatrix}4-10\\\\5-5\\end{pmatrix}=\\begin{pmatrix}-6\\\\0\\end{pmatrix}$.", working: "DE=(-6,0)", marks: 1, markCode: "M" },
              { part: "b", reasoning: "$\\overrightarrow{AB}=\\begin{pmatrix}12\\\\0\\end{pmatrix}=(-2)\\begin{pmatrix}-6\\\\0\\end{pmatrix}$ — scalar multiple, so parallel; magnitudes give $DE=\\frac12AB$.", working: "AB = -2 DE", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the conclusion.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$\\overrightarrow{AD}=\\mathbf{d}-\\mathbf{a}=\\begin{pmatrix}10\\\\5\\end{pmatrix}$ (since $\\mathbf{a}=\\mathbf{0}$).", working: "AD=(10,5)", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Length $=\\sqrt{100+25}=\\sqrt{125}=5\\sqrt5$.", working: "\\sqrt{125}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State the vector and length.", working: "\\approx11.18", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $\\mathbf{d}=\\begin{pmatrix}10\\\\5\\end{pmatrix}$, $\\mathbf{e}=\\begin{pmatrix}4\\\\5\\end{pmatrix}$ (b) proven (c) $\\overrightarrow{AD}=\\begin{pmatrix}10\\\\5\\end{pmatrix}$, length $5\\sqrt5\\approx11.18$",
            commonErrors: ["In (b) using $\\overrightarrow{BA}$ and getting a sign confusion.", "In (c) forgetting $\\overrightarrow{AD}=\\mathbf{d}$ requires $\\mathbf{a}=\\mathbf{0}$."],
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
