import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "m8-u3-lesson-3-2",
  code: "3-2",
  title: "Angles and the Pythagorean Theorem",
  goal: "I CAN use angle relationships in triangles and parallel lines, and use the Pythagorean Theorem and its converse to find lengths and distances.",
  standards: ["8.G.A.5", "8.G.B.6", "8.G.B.7", "8.G.B.8"],
  vocabulary: [
    { term: "Exterior angle", definition: "An angle formed by one side of a triangle and the extension of an adjacent side." },
    { term: "Transversal", definition: "A line that crosses two or more other lines." },
    { term: "Alternate interior angles", definition: "Angles on opposite sides of a transversal and between two lines. They are equal when the lines are parallel." },
    { term: "Corresponding angles", definition: "Angles in the same position at each intersection of a transversal. They are equal when the lines are parallel." },
    { term: "Angle-Angle (AA) similarity", definition: "If two angles of one triangle equal two angles of another triangle, the triangles are similar." },
    { term: "Hypotenuse", definition: "The side opposite the right angle in a right triangle; it is the longest side." },
    { term: "Pythagorean Theorem", definition: "In a right triangle with legs $a$ and $b$ and hypotenuse $c$, $a^2 + b^2 = c^2$. Its converse says that if $a^2 + b^2 = c^2$ then the triangle is a right triangle." },
  ],
  concepts: [
    {
      id: "m8-u3-angle-relationships",
      title: "Triangle angles, parallel lines and AA similarity",
      skill: "Use the angle sum, the exterior angle theorem and parallel line angle pairs to find unknown angles and justify similar triangles.",
      lesson: {
        sections: [
          {
            heading: "Angles in triangles",
            body: "The three interior angles of a triangle add up to $180^\\circ$. An **exterior angle** equals the sum of the two remote (non-adjacent) interior angles, because it and its adjacent interior angle add to $180^\\circ$ along a straight line.",
          },
          {
            heading: "Parallel lines and similar triangles",
            body: "When a transversal crosses two **parallel** lines, corresponding angles are equal, alternate interior angles are equal, and co-interior angles add to $180^\\circ$. If two angles of one triangle equal two angles of another, the third angles must also be equal, so the triangles are **similar** (AA). A line drawn parallel to one side of a triangle creates a smaller similar triangle.",
          },
        ],
        keyFormulas: [
          { name: "Angle sum", statement: "$a + b + c = 180^\\circ$" },
          { name: "Exterior angle", statement: "$\\text{exterior} = \\text{sum of the two remote interior angles}$" },
        ],
        workedExample: {
          problem: "A triangle has interior angles $40^\\circ$ and $65^\\circ$. Find the exterior angle at the third vertex.",
          solution: "The exterior angle equals the sum of the remote interior angles: $40^\\circ + 65^\\circ = 105^\\circ$. Check: the third interior angle is $180^\\circ - 105^\\circ = 75^\\circ$, and $75^\\circ + 105^\\circ = 180^\\circ$.",
        },
      },
      questions: [
        {
          id: "m8-u3-angle-relationships-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Two angles of a triangle measure $52^\\circ$ and $71^\\circ$. What is the measure of the third angle?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$57^\\circ$" },
              { id: "b", text: "$123^\\circ$" },
              { id: "c", text: "$67^\\circ$" },
              { id: "d", text: "$47^\\circ$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Triangle angle sum", statement: "The interior angles of a triangle add to $180^\\circ$." },
            ],
            steps: [
              { reasoning: "Subtract the known angles from $180^\\circ$.", working: "180 - 52 - 71 = 57", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $57^\\circ$",
            commonErrors: ["Choosing $123^\\circ$, which is the sum $52 + 71$.", "Subtracting the sum from $90^\\circ$ or arithmetic slips."],
          },
        },
        {
          id: "m8-u3-angle-relationships-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "In a triangle, the interior angles at two vertices are $48^\\circ$ and $67^\\circ$. Find the measure of the exterior angle at the third vertex, in degrees.",
          response: { type: "numeric", parts: [{ label: "Exterior angle", answer: 115, unit: "degrees" }] },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Exterior angle theorem", statement: "An exterior angle equals the sum of the two remote interior angles." },
            ],
            steps: [
              { reasoning: "Add the two remote interior angles.", working: "48 + 67", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "115^\\circ", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$115^\\circ$",
            commonErrors: ["Giving the third interior angle, $65^\\circ$.", "Using $90^\\circ$ instead of $180^\\circ$."],
          },
        },
        {
          id: "m8-u3-angle-relationships-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Two parallel lines are cut by a transversal. A pair of alternate interior angles measure $(3x + 10)^\\circ$ and $(5x - 30)^\\circ$. Find $x$ and the measure of each of these angles.",
          response: {
            type: "numeric",
            parts: [
              { label: "$x$", answer: 20 },
              { label: "Angle measure", answer: 70, unit: "degrees" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Parallel lines and alternate interior angles", statement: "When parallel lines are cut by a transversal, alternate interior angles are equal." },
            ],
            steps: [
              { reasoning: "The angles are equal, so set the expressions equal.", working: "3x + 10 = 5x - 30", marks: 1, markCode: "M" },
              { reasoning: "Solve for $x$.", working: "40 = 2x \\Rightarrow x = 20", marks: 1, markCode: "A" },
              { reasoning: "Substitute into either expression and check with the other.", working: "3(20) + 10 = 70,\\quad 5(20) - 30 = 70", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x = 20$; each angle is $70^\\circ$",
            commonErrors: ["Adding the expressions to $180^\\circ$ (treating them as co-interior angles).", "Stopping at $x = 20$ without finding the angle."],
          },
        },
        {
          id: "m8-u3-angle-relationships-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "In triangle $ABC$, angle $A = 40^\\circ$ and angle $B = 65^\\circ$. Point $D$ lies on side $AB$ and point $E$ lies on side $AC$ so that line $DE$ is parallel to side $BC$.",
          parts: [
            { label: "a", prompt: "Find the measure of angle $C$, in degrees.", marks: 2 },
            { label: "b", prompt: "Side $BC$ is extended past $C$. Find the exterior angle at $C$, in degrees.", marks: 2 },
            { label: "c", prompt: "Find the measures of angle $ADE$ and angle $AED$, in degrees.", marks: 2 },
            { label: "d", prompt: "Explain why triangle $ADE$ is similar to triangle $ABC$.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Angle $C$", answer: 75, unit: "degrees" },
              { label: "(b) Exterior angle at $C$", answer: 105, unit: "degrees" },
              { label: "(c) Angle $ADE$", answer: 65, unit: "degrees" },
              { label: "(c) Angle $AED$", answer: 75, unit: "degrees" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Triangle angle sum", statement: "Interior angles add to $180^\\circ$." },
              { kind: "theorem", name: "Exterior angle theorem", statement: "An exterior angle equals the sum of the remote interior angles." },
              { kind: "theorem", name: "Corresponding angles", statement: "Parallel lines cut by a transversal make equal corresponding angles." },
              { kind: "theorem", name: "AA similarity", statement: "Two triangles with two pairs of equal angles are similar." },
            ],
            steps: [
              { part: "a", reasoning: "Use the angle sum.", working: "C = 180 - 40 - 65", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate.", working: "C = 75^\\circ", marks: 1, markCode: "A" },
              { part: "b", reasoning: "The exterior angle equals the sum of the remote interior angles $A$ and $B$.", working: "40 + 65", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate (check: $180 - 75 = 105$).", working: "105^\\circ", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$DE \\parallel BC$ with transversal $AB$: angle $ADE$ corresponds to angle $B$.", working: "\\angle ADE = 65^\\circ", marks: 1, markCode: "B" },
              { part: "c", reasoning: "$AC$ is a transversal too, so angle $AED$ corresponds to angle $C$.", working: "\\angle AED = 75^\\circ", marks: 1, markCode: "B" },
              { part: "d", reasoning: "The triangles share angle $A$, and angle $ADE = $ angle $ABC$ (corresponding angles).", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Two pairs of equal angles means the triangles are similar by AA similarity.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $75^\\circ$ (b) $105^\\circ$ (c) $\\angle ADE = 65^\\circ$, $\\angle AED = 75^\\circ$ (d) shared angle $A$ and equal corresponding angles, so AA similarity.",
            commonErrors: ["Using alternate interior angles for (c) when the angles are corresponding.", "Giving $75^\\circ$ for the exterior angle, the interior angle instead."],
            examinerNote: "In (d) both the shared angle and the pair of corresponding angles must be identified.",
          },
        },
      ],
    },
    {
      id: "m8-u3-pythagorean-theorem",
      title: "The Pythagorean Theorem and distance",
      skill: "Use the Pythagorean Theorem and its converse to find side lengths, test for right triangles and find distances in the coordinate plane.",
      lesson: {
        sections: [
          {
            heading: "The theorem and its converse",
            body: "In a right triangle with legs $a$, $b$ and hypotenuse $c$, $a^2 + b^2 = c^2$. To find the hypotenuse add the squares of the legs and take the square root; to find a leg, subtract. The **converse** says that if three side lengths satisfy $a^2 + b^2 = c^2$ (with $c$ the longest), the triangle is a right triangle.",
          },
          {
            heading: "Distance on the coordinate plane",
            body: "To find the distance between two points, draw a right triangle whose legs are the horizontal change $\\Delta x$ and vertical change $\\Delta y$. The distance is the hypotenuse: $d = \\sqrt{(\\Delta x)^2 + (\\Delta y)^2}$. The same idea solves real problems such as ladders against walls and screen diagonals.",
          },
        ],
        keyFormulas: [
          { name: "Pythagorean Theorem", statement: "$a^2 + b^2 = c^2$" },
          { name: "Distance formula", statement: "$d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$" },
        ],
        workedExample: {
          problem: "Find the distance between $(1, 2)$ and $(4, 6)$.",
          solution: "$\\Delta x = 3$ and $\\Delta y = 4$. $d = \\sqrt{3^2 + 4^2} = \\sqrt{25} = 5$.",
        },
      },
      questions: [
        {
          id: "m8-u3-pythagorean-theorem-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A right triangle has legs of length $6$ and $8$. What is the length of the hypotenuse?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$14$" },
              { id: "b", text: "$100$" },
              { id: "c", text: "$10$" },
              { id: "d", text: "$7$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Pythagorean Theorem", statement: "$a^2 + b^2 = c^2$." },
            ],
            steps: [
              { reasoning: "Add the squares of the legs and take the square root.", working: "c = \\sqrt{36 + 64} = \\sqrt{100} = 10", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $10$",
            commonErrors: ["Adding the legs to get $14$.", "Forgetting to take the square root (choice d)."],
          },
        },
        {
          id: "m8-u3-pythagorean-theorem-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A right triangle has hypotenuse $13$ cm and one leg $5$ cm. Find the length of the other leg in centimeters.",
          response: { type: "numeric", parts: [{ label: "Other leg", answer: 12, unit: "cm" }] },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Pythagorean Theorem", statement: "$a^2 + b^2 = c^2$, where $c$ is the hypotenuse." },
            ],
            steps: [
              { reasoning: "Subtract the square of the known leg from the square of the hypotenuse.", working: "b^2 = 13^2 - 5^2 = 169 - 25 = 144", marks: 1, markCode: "M" },
              { reasoning: "Take the square root.", working: "b = 12", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$12$ cm",
            commonErrors: ["Adding $25$ and $169$.", "Subtracting $13 - 5 = 8$ without squaring."],
          },
        },
        {
          id: "m8-u3-pythagorean-theorem-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Find the distance between the points $(-2, 1)$ and $(4, 9)$ on the coordinate plane.",
          response: { type: "numeric", parts: [{ label: "Distance", answer: 10, unit: "units" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Distance formula", statement: "$d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$, from the Pythagorean Theorem." },
            ],
            steps: [
              { reasoning: "Find the horizontal and vertical changes.", working: "\\Delta x = 4 - (-2) = 6,\\quad \\Delta y = 9 - 1 = 8", marks: 1, markCode: "M" },
              { reasoning: "Apply the Pythagorean Theorem.", working: "d = \\sqrt{6^2 + 8^2} = \\sqrt{100}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "d = 10", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$10$ units",
            commonErrors: ["Computing $\\Delta x = 4 - 2 = 2$ by ignoring the negative sign.", "Adding $6 + 8 = 14$ without squaring."],
          },
        },
        {
          id: "m8-u3-pythagorean-theorem-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Use the Pythagorean Theorem to solve these related problems about right triangles.",
          parts: [
            { label: "a", prompt: "A rectangular tablet screen is $24$ cm wide and $7$ cm tall. Find the length of its diagonal, in centimeters.", marks: 2 },
            { label: "b", prompt: "A triangle has side lengths $20$, $21$ and $29$. Calculate $20^2 + 21^2$ and use it to decide whether the triangle is a right triangle.", marks: 2 },
            { label: "c", prompt: "A $17$-foot ladder leans against a vertical wall with its base $8$ feet from the wall. How high up the wall does it reach, in feet?", marks: 2 },
            { label: "d", prompt: "Find the distance between $A(-3, 2)$ and $B(2, 14)$ on the coordinate plane.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Diagonal", answer: 25, unit: "cm" },
              { label: "(b) $20^2 + 21^2$", answer: 841 },
              { label: "(c) Height reached", answer: 15, unit: "ft" },
              { label: "(d) Distance $AB$", answer: 13, unit: "units" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Pythagorean Theorem", statement: "$a^2 + b^2 = c^2$ in a right triangle." },
              { kind: "theorem", name: "Converse", statement: "If $a^2 + b^2 = c^2$ for the side lengths of a triangle, with $c$ the longest, it is a right triangle." },
              { kind: "formula", name: "Distance formula", statement: "$d = \\sqrt{(\\Delta x)^2 + (\\Delta y)^2}$." },
            ],
            steps: [
              { part: "a", reasoning: "The diagonal is the hypotenuse of a right triangle with legs $24$ and $7$.", working: "\\sqrt{24^2 + 7^2} = \\sqrt{576 + 49}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate.", working: "\\sqrt{625} = 25", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Compute the sum of squares of the two shorter sides.", working: "400 + 441 = 841", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Compare with the square of the longest side: $29^2 = 841$. They are equal, so by the converse the triangle is a right triangle.", working: "20^2 + 21^2 = 29^2", marks: 1, markCode: "R" },
              { part: "c", reasoning: "The ladder is the hypotenuse, so subtract the squared base distance from the squared ladder length.", working: "h^2 = 17^2 - 8^2 = 289 - 64 = 225", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Take the square root.", working: "h = 15", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Find the changes in $x$ and $y$.", working: "\\Delta x = 2 - (-3) = 5,\\quad \\Delta y = 14 - 2 = 12", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Apply the theorem.", working: "d = \\sqrt{25 + 144} = \\sqrt{169} = 13", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $25$ cm (b) $841 = 29^2$, so it is a right triangle (c) $15$ ft (d) $13$ units",
            commonErrors: ["Using $24 + 7 = 31$ for the diagonal.", "Adding instead of subtracting when finding a leg in (c).", "Comparing the sum of squares with $29$ instead of $29^2$."],
          },
        },
      ],
    },
  ],
};
