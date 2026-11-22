import type { Lesson } from "../../../types.ts";

export const lesson41: Lesson = {
  id: "ciem-u4-lesson-4-1",
  code: "4-1",
  title: "Angles and Polygons",
  goal: "I CAN use angle properties at a point, on a line and in parallel lines, find angles in triangles and quadrilaterals, and calculate interior and exterior angles of polygons.",
  standards: ["0580 4.1", "0580 4.2", "0580 4.3"],
  vocabulary: [
    { term: "Vertically opposite angles", definition: "The two equal angles formed when two straight lines intersect." },
    { term: "Corresponding angles", definition: "Angles in the same position at each intersection of a transversal with parallel lines; they are equal." },
    { term: "Alternate angles", definition: "Angles between the parallel lines on opposite sides of the transversal; they are equal." },
    { term: "Interior angle of a polygon", definition: "The angle inside the polygon at one vertex." },
    { term: "Exterior angle of a polygon", definition: "The angle between one side and the extension of an adjacent side; equals the sum of the two interior angles at the other vertices." },
  ],
  concepts: [
    {
      id: "ciem-u4-angle-properties",
      title: "Angle properties",
      skill: "Apply angle rules at a point, on a line, in parallel lines and in triangles and quadrilaterals.",
      lesson: {
        sections: [
          {
            heading: "Angles at a point and on a line",
            body: "Angles around a point sum to $360^\\circ$; angles on a straight line sum to $180^\\circ$. When two lines cross, **vertically opposite angles are equal**, and **adjacent angles are supplementary** (they add to $180^\\circ$).",
          },
          {
            heading: "Parallel lines",
            body: "When a transversal crosses two parallel lines:\n\n- **corresponding angles** are equal\n- **alternate angles** are equal\n- **co-interior (allied) angles** add to $180^\\circ$\n\nIdentify which pair you have before applying the rule — drawing the parallel-line arrows on the diagram helps.",
          },
          {
            heading: "Triangles and quadrilaterals",
            body: "The interior angles of a triangle sum to $180^\\circ$; the **exterior angle equals the sum of the two interior opposite angles**. In a quadrilateral the sum is $360^\\circ$. Special quadrilaterals: parallelogram (opposite angles equal, consecutive supplementary), rectangle (all $90^\\circ$), rhombus (opposite angles equal), kite (one pair of equal opposite angles).",
          },
        ],
        keyFormulas: [
          { name: "Angles at a point", statement: "$360^\\circ$" },
          { name: "Angles on a line", statement: "$180^\\circ$" },
          { name: "Triangle sum", statement: "$180^\\circ$" },
          { name: "Quadrilateral sum", statement: "$360^\\circ$" },
          { name: "Exterior angle", statement: "$=$ sum of interior opposite angles" },
        ],
        workedExample: {
          problem: "Two parallel lines are cut by a transversal. One interior angle is $65^\\circ$. Find the co-interior angle on the same side.",
          solution: "Co-interior angles are supplementary: $180^\\circ-65^\\circ=115^\\circ$.",
        },
      },
      questions: [
        {
          id: "ciem-u4-angle-properties-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Two angles on a straight line are $x$ and $2x$. Find $x$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$90^\\circ$" },
              { id: "b", text: "$120^\\circ$" },
              { id: "c", text: "$30^\\circ$" },
              { id: "d", text: "$60^\\circ$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Angles on a line", statement: "Angles on a straight line sum to $180^\\circ$." },
            ],
            steps: [
              { reasoning: "Angles on a line sum to $180^\\circ$, so $3x=180$ and $x=60$.", working: "x=60", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** $x=60^\\circ$",
            commonErrors: ["Using $360^\\circ$ (angles at a point) instead of $180^\\circ$."],
          },
        },
        {
          id: "ciem-u4-angle-properties-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A triangle has angles $2x$, $3x$ and $x$. Find the largest angle.",
          response: { type: "numeric", parts: [{ label: "Largest angle", answer: 90, unit: "degrees" }] },
          markscheme: {
            principles: [
              { kind: "property", name: "Triangle angle sum", statement: "Interior angles of a triangle sum to $180^\\circ$." },
            ],
            steps: [
              { reasoning: "Set up the equation.", working: "2x+3x+x=180", marks: 1, markCode: "M" },
              { reasoning: "Solve for $x$.", working: "6x=180 \\Rightarrow x=30", marks: 1, markCode: "M" },
              { reasoning: "Identify and evaluate the largest angle ($3x$).", working: "3\\times30=90^\\circ", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$90^\\circ$",
            commonErrors: ["Reporting $x=30$ instead of the largest angle."],
          },
        },
        {
          id: "ciem-u4-angle-properties-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "In a parallelogram $ABCD$, angle $A$ is $72^\\circ$. Find the size of angle $B$.",
          response: { type: "numeric", parts: [{ label: "Angle B", answer: 108, unit: "degrees" }] },
          markscheme: {
            principles: [
              { kind: "property", name: "Parallelogram angles", statement: "Consecutive angles of a parallelogram are supplementary; opposite angles are equal." },
            ],
            steps: [
              { reasoning: "Identify $A$ and $B$ as consecutive angles.", working: "\\angle A + \\angle B = 180^\\circ", marks: 1, markCode: "M" },
              { reasoning: "Substitute.", working: "72^\\circ + \\angle B = 180^\\circ", marks: 1, markCode: "M" },
              { reasoning: "Solve.", working: "\\angle B = 108^\\circ", marks: 2, markCode: "A" },
            ],
            finalAnswer: "$108^\\circ$",
            commonErrors: ["Answering $72^\\circ$ (that's angle $D$, the opposite angle)."],
          },
        },
        {
          id: "ciem-u4-angle-properties-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Two parallel lines are intersected by a transversal. One angle is $110^\\circ$.",
          parts: [
            { label: "a", prompt: "Find the size of the corresponding angle on the other parallel line.", marks: 2 },
            { label: "b", prompt: "Find the size of the alternate angle.", marks: 2 },
            { label: "c", prompt: "Find the size of the co-interior angle on the same side as the given angle.", marks: 2 },
            { label: "d", prompt: "Explain why the co-interior angle is supplementary to the given angle.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Parallel line angles", statement: "Corresponding and alternate angles are equal; co-interior angles sum to $180^\\circ$." },
            ],
            steps: [
              { part: "a", reasoning: "Corresponding angles are equal.", working: "110^\\circ", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the answer.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Alternate angles are equal.", working: "110^\\circ", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the answer.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Co-interior angles are supplementary.", working: "180^\\circ-110^\\circ", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Compute.", working: "=70^\\circ", marks: 1, markCode: "A" },
              { part: "d", reasoning: "State the reason: the two angles lie between the parallels on the same side of the transversal.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Explain: the transversal acts as a straight line, so the two angles together form a straight angle with the corresponding pair.", marks: 2, markCode: "A" },
              { part: "d", reasoning: "Conclude they are supplementary.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $110^\\circ$ (b) $110^\\circ$ (c) $70^\\circ$ (d) explained — co-interior angles sum to $180^\\circ$",
            commonErrors: ["In (d) just restating the answer without geometric justification."],
            examinerNote: "Part (d) requires a reason, not just the value — 'co-interior angles are supplementary' alone earns at most 1 mark.",
          },
        },
        {
          id: "ciem-u4-angle-properties-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Two straight lines intersect. One of the angles formed is $47^\\circ$. What is the size of the vertically opposite angle?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$94^\\circ$" },
              { id: "b", text: "$133^\\circ$" },
              { id: "c", text: "$47^\\circ$" },
              { id: "d", text: "$43^\\circ$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Vertically opposite angles", statement: "Vertically opposite angles formed by intersecting lines are equal." },
            ],
            steps: [
              { reasoning: "Vertically opposite angles are equal, so the angle is also $47^\\circ$.", working: "47^\\circ", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** $47^\\circ$",
            commonErrors: ["Subtracting from $180^\\circ$ to get the adjacent angle instead."],
          },
        },
        {
          id: "ciem-u4-angle-properties-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Three angles around a point measure $120^\\circ$, $135^\\circ$ and $x^\\circ$. Find $x$.",
          response: { type: "numeric", parts: [{ label: "x", answer: 105, unit: "degrees" }] },
          markscheme: {
            principles: [
              { kind: "property", name: "Angles at a point", statement: "Angles around a point sum to $360^\\circ$." },
            ],
            steps: [
              { reasoning: "Set up the equation using the angles-at-a-point rule.", working: "120+135+x=360", marks: 1, markCode: "M" },
              { reasoning: "Solve for $x$.", working: "x=360-255=105^\\circ", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$105^\\circ$",
            commonErrors: ["Using $180^\\circ$ (angles on a line) instead of $360^\\circ$."],
          },
        },
        {
          id: "ciem-u4-angle-properties-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "A transversal cuts two parallel lines, forming an angle of $58^\\circ$. What is the size of the corresponding angle on the other parallel line?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$58^\\circ$" },
              { id: "b", text: "$32^\\circ$" },
              { id: "c", text: "$122^\\circ$" },
              { id: "d", text: "$116^\\circ$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Corresponding angles", statement: "Corresponding angles formed by a transversal with parallel lines are equal." },
            ],
            steps: [
              { reasoning: "Corresponding angles are equal.", working: "58^\\circ", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(a)** $58^\\circ$",
            commonErrors: ["Using supplementary instead of equal angles."],
          },
        },
        {
          id: "ciem-u4-angle-properties-q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "The exterior angle of a triangle at one vertex is $125^\\circ$. One of the interior opposite angles is $70^\\circ$. Find the other interior opposite angle.",
          response: { type: "numeric", parts: [{ label: "Other interior opposite angle", answer: 55, unit: "degrees" }] },
          markscheme: {
            principles: [
              { kind: "property", name: "Exterior angle theorem", statement: "The exterior angle of a triangle equals the sum of the two interior opposite angles." },
            ],
            steps: [
              { reasoning: "Apply the exterior angle theorem.", working: "125^\\circ=70^\\circ+x", marks: 1, markCode: "M" },
              { reasoning: "Solve for $x$.", working: "x=55^\\circ", marks: 2, markCode: "A" },
            ],
            finalAnswer: "$55^\\circ$",
            commonErrors: ["Using $180^\\circ-125^\\circ$ to find the interior angle at that vertex instead."],
          },
        },
        {
          id: "ciem-u4-angle-properties-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Three angles of a quadrilateral measure $80^\\circ$, $95^\\circ$ and $105^\\circ$. What is the size of the fourth angle?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$70^\\circ$" },
              { id: "b", text: "$90^\\circ$" },
              { id: "c", text: "$100^\\circ$" },
              { id: "d", text: "$80^\\circ$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Quadrilateral angle sum", statement: "Interior angles of a quadrilateral sum to $360^\\circ$." },
            ],
            steps: [
              { reasoning: "Subtract the three known angles from $360^\\circ$.", working: "360-(80+95+105)=80^\\circ", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(d)** $80^\\circ$",
            commonErrors: ["Adding the three angles and forgetting to subtract from $360^\\circ$."],
          },
        },
        {
          id: "ciem-u4-angle-properties-q10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Angles $A$ and $B$ are supplementary. Angle $B$ is three times the size of angle $A$. Find the size of angle $B$.",
          response: { type: "numeric", parts: [{ label: "Angle B", answer: 135, unit: "degrees" }] },
          markscheme: {
            principles: [
              { kind: "property", name: "Supplementary angles", statement: "Supplementary angles add to $180^\\circ$." },
            ],
            steps: [
              { reasoning: "Write $B=3A$ and use $A+B=180^\\circ$.", working: "A+3A=180", marks: 1, markCode: "M" },
              { reasoning: "Solve for $A$.", working: "4A=180 \\Rightarrow A=45^\\circ", marks: 1, markCode: "M" },
              { reasoning: "Find $B=3A$.", working: "B=3\\times45^\\circ=135^\\circ", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$135^\\circ$",
            commonErrors: ["Answering $45^\\circ$ (angle $A$) instead of angle $B$."],
          },
        },
        {
          id: "ciem-u4-angle-properties-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Two parallel lines are cut by a transversal. An interior angle on one line is $72^\\circ$. What is the size of the co-interior angle on the same side of the transversal?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$72^\\circ$" },
              { id: "b", text: "$252^\\circ$" },
              { id: "c", text: "$18^\\circ$" },
              { id: "d", text: "$108^\\circ$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Co-interior angles", statement: "Co-interior (allied) angles formed by a transversal with parallel lines sum to $180^\\circ$." },
            ],
            steps: [
              { reasoning: "Co-interior angles are supplementary.", working: "180-72=108^\\circ", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(d)** $108^\\circ$",
            commonErrors: ["Assuming the angle is equal rather than supplementary."],
          },
        },
        {
          id: "ciem-u4-angle-properties-q12",
          difficulty: "core",
          totalMarks: 7,
          stem: "In triangle $ABC$, the exterior angle at vertex $B$ is $110^\\circ$ and angle $A$ is $48^\\circ$.",
          parts: [
            { label: "a", prompt: "Find the size of angle $C$.", marks: 3 },
            { label: "b", prompt: "Find the size of angle $B$.", marks: 2 },
            { label: "c", prompt: "Explain how you found the size of angle $C$.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Exterior angle theorem", statement: "The exterior angle of a triangle equals the sum of the two interior opposite angles." },
              { kind: "property", name: "Interior + exterior", statement: "Interior and exterior angles at a vertex sum to $180^\\circ$." },
            ],
            steps: [
              { part: "a", reasoning: "Apply the exterior angle theorem: exterior angle at $B$ equals angles $A$ and $C$.", working: "110^\\circ=48^\\circ+C", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Rearrange.", working: "C=110^\\circ-48^\\circ", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Compute.", working: "C=62^\\circ", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Use interior + exterior $=180^\\circ$ at vertex $B$.", working: "B=180^\\circ-110^\\circ", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Compute.", working: "B=70^\\circ", marks: 1, markCode: "A" },
              { part: "c", reasoning: "State the property used.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Apply it: the exterior angle equals the sum of the interior opposite angles, so $C=110^\\circ-48^\\circ=62^\\circ$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $62^\\circ$ (b) $70^\\circ$ (c) exterior angle theorem applied",
            commonErrors: ["In (b) using the exterior angle theorem instead of the interior + exterior relationship."],
          },
        },
        {
          id: "ciem-u4-angle-properties-q13",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Two angles on a straight line are in the ratio $2:3$. What is the size of the larger angle?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$120^\\circ$" },
              { id: "b", text: "$72^\\circ$" },
              { id: "c", text: "$108^\\circ$" },
              { id: "d", text: "$90^\\circ$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Angles on a line", statement: "Angles on a straight line sum to $180^\\circ$." },
            ],
            steps: [
              { reasoning: "Let the angles be $2x$ and $3x$; then $5x=180$ so $x=36$ and the larger is $3x=108^\\circ$.", working: "3\\times36=108^\\circ", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(c)** $108^\\circ$",
            commonErrors: ["Answering $72^\\circ$, the smaller angle."],
          },
        },
        {
          id: "ciem-u4-angle-properties-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "In parallelogram $PQRS$, angle $P$ is $65^\\circ$. Find the size of angle $R$.",
          response: { type: "numeric", parts: [{ label: "Angle R", answer: 65, unit: "degrees" }] },
          markscheme: {
            principles: [
              { kind: "property", name: "Parallelogram angles", statement: "Opposite angles of a parallelogram are equal." },
            ],
            steps: [
              { reasoning: "Identify $P$ and $R$ as opposite angles.", working: "\\angle R = \\angle P", marks: 1, markCode: "M" },
              { reasoning: "State the value.", working: "\\angle R = 65^\\circ", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$65^\\circ$",
            commonErrors: ["Using the supplementary rule for consecutive angles and getting $115^\\circ$ (that would be angle $Q$ or $S$)."],
          },
        },
        {
          id: "ciem-u4-angle-properties-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "The exterior angle of a triangle at a vertex is $140^\\circ$. The two interior opposite angles are in the ratio $2:5$. Find the smaller of these interior opposite angles.",
          response: { type: "numeric", parts: [{ label: "Smaller interior opposite angle", answer: 40, unit: "degrees" }] },
          markscheme: {
            principles: [
              { kind: "property", name: "Exterior angle theorem", statement: "The exterior angle of a triangle equals the sum of the two interior opposite angles." },
            ],
            steps: [
              { reasoning: "Let the angles be $2k$ and $5k$; the exterior angle equals their sum.", working: "2k+5k=140", marks: 1, markCode: "M" },
              { reasoning: "Solve for $k$.", working: "7k=140 \\Rightarrow k=20", marks: 1, markCode: "M" },
              { reasoning: "Find the smaller angle $2k$.", working: "2\\times20=40^\\circ", marks: 2, markCode: "A" },
            ],
            finalAnswer: "$40^\\circ$",
            commonErrors: ["Finding $k=20$ and stopping, or giving $5k=100^\\circ$ (the larger angle)."],
          },
        },
        {
          id: "ciem-u4-angle-properties-q16",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A transversal cuts two parallel lines. One of the angles formed is $3x^\\circ$, and the alternate angle on the other parallel line is $(5x-20)^\\circ$.",
          parts: [
            { label: "a", prompt: "Find the value of $x$.", marks: 3 },
            { label: "b", prompt: "Find the size of each of these two angles.", marks: 2 },
            { label: "c", prompt: "Find the size of the co-interior angle on the same side as the $3x^\\circ$ angle, and state its relationship to the $30^\\circ$ angle.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Alternate angles", statement: "Alternate angles formed by a transversal with parallel lines are equal." },
              { kind: "property", name: "Co-interior angles", statement: "Co-interior angles formed by a transversal with parallel lines sum to $180^\\circ$." },
            ],
            steps: [
              { part: "a", reasoning: "Alternate angles are equal.", working: "3x=5x-20", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Rearrange.", working: "2x=20", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Solve.", working: "x=10", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Substitute $x=10$ into $3x$.", working: "3\\times10", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the angle.", working: "=30^\\circ", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Co-interior angles are supplementary: subtract from $180^\\circ$.", working: "180^\\circ-30^\\circ", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Compute.", working: "=150^\\circ", marks: 1, markCode: "A" },
              { part: "c", reasoning: "State the relationship.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Conclude: $150^\\circ$ and $30^\\circ$ are supplementary (co-interior angles sum to $180^\\circ$).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $x=10$ (b) $30^\\circ$ (c) $150^\\circ$ — supplementary to $30^\\circ$",
            commonErrors: ["In (a) using the co-interior rule (adding to $180^\\circ$) instead of equality for alternate angles."],
          },
        },
      ],
    },
    {
      id: "ciem-u4-polygon-angles",
      title: "Interior and exterior angles of polygons",
      skill: "Calculate interior and exterior angles of regular and irregular polygons.",
      lesson: {
        sections: [
          {
            heading: "Interior angle sum",
            body: "A polygon with $n$ sides can be split into $n-2$ triangles, so the interior angle sum is $(n-2)\\times180^\\circ$. For a **regular** polygon each interior angle is $\\frac{(n-2)\\times180^\\circ}{n}$.",
          },
          {
            heading: "Exterior angles",
            body: "Each exterior angle of any polygon is $180^\\circ - \\text{interior angle}$, and the exterior angles of **any** polygon sum to $360^\\circ$. For a regular polygon: exterior angle $=\\frac{360^\\circ}{n}$, which makes finding $n$ easy when an exterior angle is given.",
          },
          {
            heading: "Choosing the right formula",
            body: "Interior angles → use $(n-2)\\times180^\\circ$ or the regular-polygon formula. Exterior angles → $360^\\circ$ total, or $180^\\circ-$ interior. If a question gives an exterior angle and asks for the number of sides, use $n=\\frac{360^\\circ}{\\text{exterior angle}}$.",
          },
        ],
        keyFormulas: [
          { name: "Interior sum", statement: "$(n-2)\\times180^\\circ$" },
          { name: "Regular interior angle", statement: "$\\frac{(n-2)\\times180^\\circ}{n}$" },
          { name: "Exterior sum", statement: "$360^\\circ$" },
          { name: "Regular exterior angle", statement: "$\\frac{360^\\circ}{n}$" },
        ],
        workedExample: {
          problem: "Find the interior angle of a regular pentagon.",
          solution: "Interior sum $=(5-2)\\times180^\\circ=540^\\circ$; each angle $=\\frac{540^\\circ}{5}=108^\\circ$. Check via exterior: $\\frac{360^\\circ}{5}=72^\\circ$, so interior $=180^\\circ-72^\\circ=108^\\circ$ ✓",
        },
      },
      questions: [
        {
          id: "ciem-u4-polygon-angles-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the sum of the interior angles of a hexagon?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$900^\\circ$" },
              { id: "b", text: "$360^\\circ$" },
              { id: "c", text: "$720^\\circ$" },
              { id: "d", text: "$1080^\\circ$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Interior angle sum", statement: "$(n-2)\\times180^\\circ$" },
            ],
            steps: [
              { reasoning: "Apply the formula with $n=6$.", working: "(6-2)\\times180^\\circ=4\\times180^\\circ=720^\\circ", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(c)** $720^\\circ$",
            commonErrors: ["Using $n\\times180^\\circ$ instead of $(n-2)\\times180^\\circ$."],
          },
        },
        {
          id: "ciem-u4-polygon-angles-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the size of each interior angle of a regular octagon.",
          response: { type: "numeric", parts: [{ label: "Interior angle", answer: 135, unit: "degrees" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Regular interior angle", statement: "$\\frac{(n-2)\\times180^\\circ}{n}$" },
            ],
            steps: [
              { reasoning: "Apply the formula with $n=8$.", working: "\\frac{(8-2)\\times180^\\circ}{8}=\\frac{1080^\\circ}{8}", marks: 1, markCode: "M" },
              { reasoning: "Compute.", working: "=135^\\circ", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$135^\\circ$",
            commonErrors: ["Forgetting to divide by $n$ — giving the sum $1080^\\circ$."],
          },
        },
        {
          id: "ciem-u4-polygon-angles-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Each exterior angle of a regular polygon is $40^\\circ$. Find the number of sides.",
          response: { type: "numeric", parts: [{ label: "Number of sides", answer: 9 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Exterior angles sum", statement: "Exterior angles of any polygon sum to $360^\\circ$." },
            ],
            steps: [
              { reasoning: "Use $n=\\frac{360^\\circ}{\\text{exterior angle}}$.", working: "n=\\frac{360^\\circ}{40^\\circ}", marks: 1, markCode: "M" },
              { reasoning: "Compute.", working: "=9", marks: 2, markCode: "A" },
            ],
            finalAnswer: "$9$ sides (a nonagon)",
            commonErrors: ["Using $\\frac{(n-2)\\times180}{40}$ and getting stuck."],
          },
        },
        {
          id: "ciem-u4-polygon-angles-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "The interior angles of a pentagon are $x$, $2x$, $3x$, $4x$ and $5x$ degrees.",
          parts: [
            { label: "a", prompt: "Find the value of $x$.", marks: 3 },
            { label: "b", prompt: "Find the largest interior angle.", marks: 2 },
            { label: "c", prompt: "Find the size of the exterior angle at that vertex.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Interior angle sum", statement: "$(n-2)\\times180^\\circ$" },
              { kind: "property", name: "Interior + exterior", statement: "Interior and exterior angles at a vertex sum to $180^\\circ$." },
            ],
            steps: [
              { part: "a", reasoning: "Sum the angles and equate to the pentagon's interior sum.", working: "x+2x+3x+4x+5x=(5-2)\\times180^\\circ", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Simplify the left side.", working: "15x=540^\\circ", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Solve.", working: "x=36", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Largest angle is $5x$.", working: "5\\times36", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Compute.", working: "=180^\\circ", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Use interior + exterior $=180^\\circ$.", working: "180^\\circ-180^\\circ", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Compute.", working: "=0^\\circ", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Comment that this means the 'pentagon' degenerates — the largest angle is a straight angle, so the figure is not a valid convex pentagon.", marks: 2, markCode: "A" },
            ],
            finalAnswer: "(a) $x=36$ (b) $180^\circ$ (c) $0^\circ$ — the angles force a degenerate shape, worth noting",
            commonErrors: ["In (c) computing $180^\circ-5x$ before finding $x$.", "Not noticing the answer implies a straight line."],
            examinerNote: "The largest angle equals $180^\circ$, which means the pentagon is degenerate. Students should be credited for spotting this in part (c).",
          },
        },
        {
          id: "ciem-u4-polygon-angles-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the sum of the exterior angles of any polygon?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$360^\\circ$" },
              { id: "b", text: "$720^\\circ$" },
              { id: "c", text: "$(n-2)\\times180^\\circ$" },
              { id: "d", text: "$180^\\circ$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Exterior angle sum", statement: "Exterior angles of any polygon sum to $360^\\circ$." },
            ],
            steps: [
              { reasoning: "Exterior angles of any polygon always sum to $360^\\circ$, whatever the number of sides.", working: "360^\\circ", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $360^\\circ$",
            commonErrors: ["Using the interior angle sum $(n-2)\\times180^\\circ$ instead."],
          },
        },
        {
          id: "ciem-u4-polygon-angles-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the size of each interior angle of a regular pentagon.",
          response: { type: "numeric", parts: [{ label: "Interior angle", answer: 108, unit: "degrees" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Regular interior angle", statement: "$\\frac{(n-2)\\times180^\\circ}{n}$" },
            ],
            steps: [
              { reasoning: "Apply the formula with $n=5$.", working: "\\frac{(5-2)\\times180^\\circ}{5}=\\frac{540^\\circ}{5}", marks: 1, markCode: "M" },
              { reasoning: "Compute.", working: "=108^\\circ", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$108^\\circ$",
            commonErrors: ["Giving the interior sum $540^\\circ$ instead of each angle."],
          },
        },
        {
          id: "ciem-u4-polygon-angles-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the sum of the interior angles of a polygon with $9$ sides?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$1620^\\circ$" },
              { id: "b", text: "$1080^\\circ$" },
              { id: "c", text: "$1260^\\circ$" },
              { id: "d", text: "$1440^\\circ$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Interior angle sum", statement: "$(n-2)\\times180^\\circ$" },
            ],
            steps: [
              { reasoning: "Apply the formula with $n=9$.", working: "(9-2)\\times180^\\circ=7\\times180^\\circ=1260^\\circ", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(c)** $1260^\\circ$",
            commonErrors: ["Using $n\\times180^\\circ$ instead of $(n-2)\\times180^\\circ$."],
          },
        },
        {
          id: "ciem-u4-polygon-angles-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the size of each exterior angle of a regular hexagon.",
          response: { type: "numeric", parts: [{ label: "Exterior angle", answer: 60, unit: "degrees" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Regular exterior angle", statement: "$\\frac{360^\\circ}{n}$" },
            ],
            steps: [
              { reasoning: "Apply the formula with $n=6$.", working: "\\frac{360^\\circ}{6}", marks: 1, markCode: "M" },
              { reasoning: "Compute.", working: "=60^\\circ", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$60^\\circ$",
            commonErrors: ["Using $\\frac{(n-2)\\times180^\\circ}{n}$ and giving the interior angle $120^\\circ$."],
          },
        },
        {
          id: "ciem-u4-polygon-angles-q9",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "The interior angles of a polygon sum to $900^\\circ$. How many sides does the polygon have?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$5$" },
              { id: "b", text: "$6$" },
              { id: "c", text: "$8$" },
              { id: "d", text: "$7$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Interior angle sum", statement: "$(n-2)\\times180^\\circ$" },
            ],
            steps: [
              { reasoning: "Set $(n-2)\\times180^\\circ=900^\\circ$, so $n-2=5$ and $n=7$.", working: "n-2=\\frac{900}{180}=5 \\Rightarrow n=7", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(d)** $7$ sides (a heptagon)",
            commonErrors: ["Answering $5$ — that is $n-2$, not $n$."],
          },
        },
        {
          id: "ciem-u4-polygon-angles-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the size of each interior angle of a regular decagon?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$144^\\circ$" },
              { id: "b", text: "$156^\\circ$" },
              { id: "c", text: "$120^\\circ$" },
              { id: "d", text: "$108^\\circ$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Regular interior angle", statement: "$\\frac{(n-2)\\times180^\\circ}{n}$" },
            ],
            steps: [
              { reasoning: "Apply the formula with $n=10$.", working: "\\frac{(10-2)\\times180^\\circ}{10}=\\frac{1440^\\circ}{10}=144^\\circ", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(a)** $144^\\circ$",
            commonErrors: ["Using $n=9$ (nonagon) by mistake, giving $140^\\circ$."],
          },
        },
        {
          id: "ciem-u4-polygon-angles-q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Each interior angle of a regular polygon is $156^\\circ$. Find the number of sides.",
          response: { type: "numeric", parts: [{ label: "Number of sides", answer: 15 }] },
          markscheme: {
            principles: [
              { kind: "property", name: "Interior + exterior", statement: "Interior and exterior angles at a vertex sum to $180^\\circ$." },
              { kind: "formula", name: "Exterior angles sum", statement: "Exterior angles of a regular polygon sum to $360^\\circ$, so $n=\\frac{360^\\circ}{\\text{exterior angle}}$." },
            ],
            steps: [
              { reasoning: "Find the exterior angle first.", working: "180^\\circ-156^\\circ=24^\\circ", marks: 1, markCode: "M" },
              { reasoning: "Use $n=\\frac{360^\\circ}{\\text{exterior angle}}$.", working: "n=\\frac{360^\\circ}{24^\\circ}", marks: 1, markCode: "M" },
              { reasoning: "Compute.", working: "n=15", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$15$ sides",
            commonErrors: ["Using $\\frac{360^\\circ}{156^\\circ}$ directly and getting a non-integer."],
          },
        },
        {
          id: "ciem-u4-polygon-angles-q12",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "The six interior angles of a hexagon are $x$, $x+10$, $x+20$, $x+30$, $x+40$ and $x+50$ degrees. What is the value of $x$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$85$" },
              { id: "b", text: "$120$" },
              { id: "c", text: "$95$" },
              { id: "d", text: "$105$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Interior angle sum", statement: "$(n-2)\\times180^\\circ$" },
            ],
            steps: [
              { reasoning: "Sum $=6x+150$ equals $(6-2)\\times180^\\circ=720^\\circ$, so $6x=570$ and $x=95$.", working: "6x+150=720 \\Rightarrow x=95", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(c)** $x=95$",
            commonErrors: ["Adding the offsets to get $150$ but forgetting to subtract it from $720$ before dividing by $6$."],
          },
        },
        {
          id: "ciem-u4-polygon-angles-q13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Each interior angle of a regular polygon is $120^\\circ$. What is the size of each exterior angle?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$120^\\circ$" },
              { id: "b", text: "$60^\\circ$" },
              { id: "c", text: "$30^\\circ$" },
              { id: "d", text: "$240^\\circ$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Interior + exterior", statement: "Interior and exterior angles at a vertex sum to $180^\\circ$." },
            ],
            steps: [
              { reasoning: "Exterior angle $=180^\\circ-120^\\circ=60^\\circ$.", working: "180-120=60^\\circ", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $60^\\circ$",
            commonErrors: ["Thinking the exterior angle equals the interior angle."],
          },
        },
        {
          id: "ciem-u4-polygon-angles-q14",
          difficulty: "core",
          totalMarks: 4,
          stem: "Four interior angles of a pentagon measure $100^\\circ$, $110^\\circ$, $120^\\circ$ and $130^\\circ$. The fifth angle is $x^\\circ$.",
          parts: [
            { label: "a", prompt: "Find the value of $x$.", marks: 2 },
            { label: "b", prompt: "Find the size of the exterior angle at that vertex.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Interior angle sum", statement: "$(n-2)\\times180^\\circ$" },
              { kind: "property", name: "Interior + exterior", statement: "Interior and exterior angles at a vertex sum to $180^\\circ$." },
            ],
            steps: [
              { part: "a", reasoning: "Pentagon interior sum is $540^\\circ$.", working: "(5-2)\\times180^\\circ=540^\\circ", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Solve for $x$.", working: "x=540-(100+110+120+130)=80", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Use interior + exterior $=180^\\circ$.", working: "180^\\circ-80^\\circ", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Compute.", working: "=100^\\circ", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $x=80$ (b) $100^\\circ$",
            commonErrors: ["In (b) subtracting the interior angle from $360^\\circ$ instead of $180^\\circ$."],
          },
        },
        {
          id: "ciem-u4-polygon-angles-q15",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Each interior angle of a regular polygon is $140^\\circ$.",
          parts: [
            { label: "a", prompt: "Find the size of each exterior angle.", marks: 2 },
            { label: "b", prompt: "Find the number of sides of the polygon.", marks: 3 },
            { label: "c", prompt: "Find the sum of the interior angles.", marks: 2 },
            { label: "d", prompt: "Explain why using the exterior angle makes this question easier than using the interior angle sum formula directly.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Interior + exterior", statement: "Interior and exterior angles at a vertex sum to $180^\\circ$." },
              { kind: "formula", name: "Exterior angles sum", statement: "Exterior angles of a regular polygon sum to $360^\\circ$." },
            ],
            steps: [
              { part: "a", reasoning: "Exterior angle $=180^\\circ-$ interior angle.", working: "180^\\circ-140^\\circ", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Compute.", working: "=40^\\circ", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Use $n=\\frac{360^\\circ}{\\text{exterior angle}}$.", working: "n=\\frac{360^\\circ}{40^\\circ}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Compute.", working: "n=9", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the polygon has $9$ sides (a nonagon).", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Use $(n-2)\\times180^\\circ$ with $n=9$.", working: "(9-2)\\times180^\\circ", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Compute.", working: "=7\\times180^\\circ=1260^\\circ", marks: 1, markCode: "A" },
              { part: "d", reasoning: "State that the exterior angle gives $n$ directly via division by $360^\\circ$.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Explain that the interior angle would require solving $\\frac{(n-2)\\times180^\\circ}{n}=140^\\circ$, which is algebraically harder.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $40^\\circ$ (b) $9$ sides (c) $1260^\\circ$ (d) exterior angle $=\\frac{360^\\circ}{n}$ gives $n$ immediately",
            commonErrors: ["In (b) using $\\frac{360^\\circ}{140^\\circ}$ instead of the exterior angle."],
            examinerNote: "Part (d) requires a reason — simply restating the answer without comparing the two methods earns at most 1 mark.",
          },
        },
        {
          id: "ciem-u4-polygon-angles-q16",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Each exterior angle of a regular polygon is $30^\\circ$.",
          parts: [
            { label: "a", prompt: "Find the number of sides.", marks: 3 },
            { label: "b", prompt: "Find the size of each interior angle.", marks: 2 },
            { label: "c", prompt: "Find the sum of the interior angles.", marks: 2 },
            { label: "d", prompt: "Check your answer to part (c) using the regular interior angle formula.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Exterior angles sum", statement: "Exterior angles of a regular polygon sum to $360^\\circ$." },
              { kind: "property", name: "Interior + exterior", statement: "Interior and exterior angles at a vertex sum to $180^\\circ$." },
              { kind: "formula", name: "Regular interior angle", statement: "$\\frac{(n-2)\\times180^\\circ}{n}$" },
            ],
            steps: [
              { part: "a", reasoning: "Use $n=\\frac{360^\\circ}{\\text{exterior angle}}$.", working: "n=\\frac{360^\\circ}{30^\\circ}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Compute.", working: "n=12", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the polygon has $12$ sides (a dodecagon).", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Interior angle $=180^\\circ-30^\\circ$.", working: "=150^\\circ", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the answer.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Use $(n-2)\\times180^\\circ$ with $n=12$.", working: "(12-2)\\times180^\\circ", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Compute.", working: "=1800^\\circ", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Apply $\\frac{(n-2)\\times180^\\circ}{n}$ with $n=12$.", working: "\\frac{10\\times180^\\circ}{12}=150^\\circ", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Comment that this matches the interior angle found in part (b), confirming the answer.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $12$ sides (b) $150^\\circ$ (c) $1800^\\circ$ (d) check gives $150^\\circ$ — consistent",
            commonErrors: ["In (d) checking the sum instead of the individual interior angle."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciem-u4-angles-polygons-notes",
      title: "Angles and polygons — revision notes",
      summary: "Angle properties at a point, on a line and in parallel lines; interior and exterior angles of polygons.",
      sections: [
        {
          heading: "Basic angle rules",
          body: "- Around a point: $360^\\circ$\n- On a straight line: $180^\\circ$\n- Vertically opposite angles are equal\n- Triangle sum: $180^\\circ$; exterior angle = sum of interior opposite angles\n- Quadrilateral sum: $360^\\circ$\n\n**Worked example.** Triangle angles $2x$, $3x$, $x$: $6x=180$, so $x=30$; largest angle $3x=90^\\circ$.",
        },
        {
          heading: "Parallel lines",
          body: "With a transversal across parallel lines:\n- Corresponding angles: equal\n- Alternate angles: equal\n- Co-interior angles: sum to $180^\\circ$\n\n**Worked example.** Given $110^\\circ$: corresponding $=110^\\circ$, alternate $=110^\\circ$, co-interior $=70^\\circ$.",
        },
        {
          heading: "Polygon angle sums",
          body: "Interior sum $=(n-2)\\times180^\\circ$ (split into $n-2$ triangles). Regular polygon interior angle $=\\frac{(n-2)\\times180^\\circ}{n}$. Exterior angles always sum to $360^\\circ$; regular exterior angle $=\\frac{360^\\circ}{n}$.",
        },
        {
          heading: "Exam technique",
          body: "- Name the angle pair before using a rule — most lost marks come from using the wrong pair.\n- For 'find $n$' questions use exterior angles: $n=\\frac{360^\\circ}{\\text{exterior angle}}$.\n- 'Explain why' parts need a geometric reason, not just the value.",
        },
      ],
    },
  ],
};
