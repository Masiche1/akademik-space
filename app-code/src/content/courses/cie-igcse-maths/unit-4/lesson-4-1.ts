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
              { id: "a", text: "$60^\\circ$" },
              { id: "b", text: "$90^\\circ$" },
              { id: "c", text: "$120^\\circ$" },
              { id: "d", text: "$30^\\circ$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Angles on a line", statement: "Angles on a straight line sum to $180^\\circ$." },
            ],
            steps: [
              { reasoning: "Angles on a line sum to $180^\\circ$, so $3x=180$ and $x=60$.", working: "x=60", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $x=60^\\circ$",
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
              { id: "a", text: "$720^\\circ$" },
              { id: "b", text: "$900^\\circ$" },
              { id: "c", text: "$1080^\\circ$" },
              { id: "d", text: "$360^\\circ$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Interior angle sum", statement: "$(n-2)\\times180^\\circ$" },
            ],
            steps: [
              { reasoning: "Apply the formula with $n=6$.", working: "(6-2)\\times180^\\circ=4\\times180^\\circ=720^\\circ", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(a)** $720^\\circ$",
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
            finalAnswer: "(a) $x=36$ (b) $180^\\circ$ (c) $0^\\circ$ — the angles force a degenerate shape, worth noting",
            commonErrors: ["In (c) computing $180^\\circ-5x$ before finding $x$.", "Not noticing the answer implies a straight line."],
            examinerNote: "The largest angle equals $180^\\circ$, which means the pentagon is degenerate. Students should be credited for spotting this in part (c).",
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
