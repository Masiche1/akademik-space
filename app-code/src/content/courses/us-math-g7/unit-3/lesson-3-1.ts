import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "m7-u3-lesson-3-1",
  code: "3-1",
  title: "Circles and Angles",
  goal: "I CAN find the circumference and area of circles and use angle relationships to write and solve equations for unknown angles.",
  standards: ["7.G.B.4", "7.G.B.5"],
  vocabulary: [
    { term: "Circumference", definition: "The distance around a circle. It is given by $C = \\pi d = 2\\pi r$." },
    { term: "Radius", definition: "The distance from the center of a circle to any point on the circle. The diameter is twice the radius." },
    { term: "Pi ($\\pi$)", definition: "The ratio of a circle's circumference to its diameter. It is approximately $3.14$ or $\\frac{22}{7}$." },
    { term: "Supplementary angles", definition: "Two angles whose measures add to $180^\\circ$." },
    { term: "Complementary angles", definition: "Two angles whose measures add to $90^\\circ$." },
    { term: "Vertical angles", definition: "The pairs of opposite, non-adjacent angles formed when two lines intersect. Vertical angles are equal." },
    { term: "Adjacent angles", definition: "Two angles that share a common vertex and a common side but do not overlap." },
  ],
  concepts: [
    {
      id: "m7-u3-circle-measures",
      title: "Circumference and area of circles",
      skill: "Use $C = 2\\pi r$ and $A = \\pi r^2$ to solve problems, including problems with composite regions.",
      lesson: {
        sections: [
          {
            heading: "Circumference",
            body: "The circumference is the distance around a circle. For any circle, circumference divided by diameter is the same number, $\\pi$. So $C = \\pi d$, and because $d = 2r$, also $C = 2\\pi r$. A circle with radius $3$ cm has circumference $2 \\times \\pi \\times 3 = 6\\pi \\approx 18.84$ cm when $\\pi \\approx 3.14$.",
          },
          {
            heading: "Area",
            body: "The area of a circle is $A = \\pi r^2$. Square the **radius** first, then multiply by $\\pi$. If you are given the diameter, halve it to get the radius before you square. Area is measured in square units, such as $\\text{m}^2$.",
          },
          {
            heading: "Rings and working backward",
            body: "To find the area of a ring (or a path around a circle), subtract the area of the inner circle from the area of the outer circle. To work backward from a circumference, divide by $\\pi$ to get the diameter, then halve it to get the radius.",
          },
        ],
        keyFormulas: [
          { name: "Circumference", statement: "$C = \\pi d = 2\\pi r$" },
          { name: "Area of a circle", statement: "$A = \\pi r^2$" },
        ],
        workedExample: {
          problem: "A circular rug has a diameter of $8$ ft. Use $\\pi \\approx 3.14$ to find its area.",
          solution: "The radius is $8 \\div 2 = 4$ ft. Then $A = \\pi r^2 = 3.14 \\times 4^2 = 3.14 \\times 16 = 50.24$ square feet.",
        },
      },
      questions: [
        {
          id: "m7-u3-circle-measures-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A circle has a diameter of $10$ cm. Which expression gives its circumference, in centimeters, in terms of $\\pi$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$100\\pi$" },
              { id: "b", text: "$10\\pi$" },
              { id: "c", text: "$25\\pi$" },
              { id: "d", text: "$20\\pi$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Circumference", statement: "$C = \\pi d$" },
            ],
            steps: [
              { reasoning: "The diameter is given, so use $C = \\pi d$ directly.", working: "C = \\pi \\times 10 = 10\\pi", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $10\\pi$ cm",
            commonErrors: ["Using $2\\pi d$ and getting $20\\pi$, which treats the diameter as a radius.", "Using the area formula and getting $25\\pi$ (halving to $r = 5$ and squaring).", "Squaring the diameter to get $100\\pi$."],
          },
        },
        {
          id: "m7-u3-circle-measures-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A circle has a radius of $6$ m. Use $\\pi \\approx 3.14$ to find its area. Give your answer in square meters.",
          response: { type: "numeric", parts: [{ label: "Area", answer: 113.04, tolerance: 0.01, unit: "m²" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Area of a circle", statement: "$A = \\pi r^2$" },
            ],
            steps: [
              { reasoning: "Square the radius first, then multiply by $\\pi$.", working: "A = 3.14 \\times 6^2 = 3.14 \\times 36", marks: 1, markCode: "M" },
              { reasoning: "Multiply.", working: "A = 113.04", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$113.04\\ \\text{m}^2$",
            commonErrors: ["Multiplying the radius by 2 instead of squaring it, giving $\\pi \\times 12 = 37.68$.", "Computing $(\\pi \\times 6)^2$."],
            examinerNote: "M1 for $3.14 \\times 36$ (oe). A1 cao.",
          },
        },
        {
          id: "m7-u3-circle-measures-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "The circumference of a circular pond is $31.4$ feet. Use $\\pi \\approx 3.14$ to find the area of the pond, in square feet.",
          response: { type: "numeric", parts: [{ label: "Area", answer: 78.5, tolerance: 0.01, unit: "ft²" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Circumference", statement: "$C = 2\\pi r$" },
              { kind: "formula", name: "Area of a circle", statement: "$A = \\pi r^2$" },
            ],
            steps: [
              { reasoning: "Work backward from the circumference to find the radius.", working: "r = \\frac{31.4}{2 \\times 3.14} = 5", marks: 1, markCode: "M" },
              { reasoning: "Substitute the radius into the area formula.", working: "A = 3.14 \\times 5^2 = 3.14 \\times 25", marks: 1, markCode: "M" },
              { reasoning: "Multiply.", working: "A = 78.5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$78.5\\ \\text{ft}^2$",
            commonErrors: ["Using $31.4 \\div 3.14 = 10$ as the radius, giving area $314$.", "Squaring the circumference."],
            examinerNote: "M1 for finding $r = 5$ (or $d = 10$). M1 for using $\\pi r^2$ with their radius. A1 cao.",
          },
        },
        {
          id: "m7-u3-circle-measures-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A circular swimming pool has a radius of $5$ m. A walkway $1$ m wide goes all the way around the pool, so the outer edge of the walkway is also a circle. Use $\\pi \\approx 3.14$ in all parts.",
          parts: [
            { label: "a", prompt: "Find the circumference of the pool, in meters.", marks: 2 },
            { label: "b", prompt: "Find the area of the pool, in square meters.", marks: 2 },
            { label: "c", prompt: "Find the area of the walkway, in square meters.", marks: 3 },
            { label: "d", prompt: "The walkway is covered with tiles that cost $\\$4$ per square meter. Find the cost of the tiles, in dollars.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Circumference of the pool", answer: 31.4, tolerance: 0.01, unit: "m" },
              { label: "(b) Area of the pool", answer: 78.5, tolerance: 0.01, unit: "m²" },
              { label: "(c) Area of the walkway", answer: 34.54, tolerance: 0.01, unit: "m²" },
              { label: "(d) Cost of the tiles", answer: 138.16, tolerance: 0.01, unit: "dollars" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Circumference", statement: "$C = 2\\pi r$" },
              { kind: "formula", name: "Area of a circle", statement: "$A = \\pi r^2$" },
              { kind: "principle", name: "Area of a ring", statement: "Area of ring $=$ area of outer circle $-$ area of inner circle." },
            ],
            steps: [
              { part: "a", reasoning: "Substitute the radius into $C = 2\\pi r$.", working: "C = 2 \\times 3.14 \\times 5", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Multiply.", working: "C = 31.4", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Substitute the radius into $A = \\pi r^2$.", working: "A = 3.14 \\times 5^2", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Multiply.", working: "A = 78.5", marks: 1, markCode: "A" },
              { part: "c", reasoning: "The walkway is $1$ m wide, so the outer circle has radius $5 + 1 = 6$ m. Find its area.", working: "A_{\\text{outer}} = 3.14 \\times 6^2 = 113.04", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Subtract the area of the pool to leave the walkway.", working: "113.04 - 78.5", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate.", working: "34.54", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Multiply the area by the cost per square meter.", working: "34.54 \\times 4", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Evaluate.", working: "138.16", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $31.4$ m (b) $78.5\\ \\text{m}^2$ (c) $34.54\\ \\text{m}^2$ (d) $\\$138.16$",
            commonErrors: ["Using radius 1 for the walkway circle, or finding $\\pi \\times 1^2$.", "Using radius 6 for the walkway area without subtracting the pool.", "Using the diameter in place of the radius in the area formula."],
            examinerNote: "In (c) the outer radius of 6 m must be seen. In (d) follow through from an incorrect area in (c) (ft).",
          },
        },
      ],
    },
    {
      id: "m7-u3-angle-relationships",
      title: "Angle relationships and equations",
      skill: "Use supplementary, complementary, vertical and adjacent angle facts to write and solve equations for unknown angles.",
      lesson: {
        sections: [
          {
            heading: "Angle pairs",
            body: "Angles that add to $90^\\circ$ are **complementary**. Angles that add to $180^\\circ$ are **supplementary**. Two adjacent angles that form a straight line are supplementary (a linear pair). When two lines cross, the opposite angles, called **vertical angles**, are equal.",
          },
          {
            heading: "Writing equations",
            body: "Name the relationship, then write an equation. If two angles are supplementary and measure $(2x + 15)^\\circ$ and $(x + 30)^\\circ$, then $(2x + 15) + (x + 30) = 180$. Solve for $x$, then substitute back to find each angle. Always check by adding the angles to confirm the relationship holds.",
          },
        ],
        keyFormulas: [
          { name: "Complementary angles", statement: "$a + b = 90^\\circ$" },
          { name: "Supplementary angles", statement: "$a + b = 180^\\circ$" },
          { name: "Vertical angles", statement: "Vertical angles are equal." },
        ],
        workedExample: {
          problem: "Two angles are supplementary. One measures $(3x + 5)^\\circ$ and the other measures $(2x + 25)^\\circ$. Find $x$ and the larger angle.",
          solution: "Supplementary means the sum is $180$: $(3x + 5) + (2x + 25) = 180$, so $5x + 30 = 180$ and $x = 30$. The angles are $3(30) + 5 = 95^\\circ$ and $2(30) + 25 = 85^\\circ$. Check: $95 + 85 = 180$. The larger angle is $95^\\circ$.",
        },
      },
      questions: [
        {
          id: "m7-u3-angle-relationships-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Two angles are supplementary. One angle measures $65^\\circ$. What is the measure of the other angle?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$115^\\circ$" },
              { id: "b", text: "$25^\\circ$" },
              { id: "c", text: "$295^\\circ$" },
              { id: "d", text: "$105^\\circ$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Supplementary angles", statement: "Supplementary angles add to $180^\\circ$." },
            ],
            steps: [
              { reasoning: "Subtract the known angle from $180^\\circ$.", working: "180 - 65 = 115", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $115^\\circ$",
            commonErrors: ["Subtracting from $90^\\circ$ (complementary) to get $25^\\circ$.", "Subtracting from $360^\\circ$ to get $295^\\circ$."],
          },
        },
        {
          id: "m7-u3-angle-relationships-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Two angles are complementary. One angle is $4$ times as large as the other. Find the measure of the smaller angle, in degrees.",
          response: { type: "numeric", parts: [{ label: "Smaller angle", answer: 18, unit: "°" }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Complementary angles", statement: "Complementary angles add to $90^\\circ$." },
            ],
            steps: [
              { reasoning: "Let the smaller angle be $x$. The other is $4x$. They add to $90$.", working: "x + 4x = 90", marks: 1, markCode: "M" },
              { reasoning: "Solve: $5x = 90$.", working: "x = 18", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$18^\\circ$ (the larger angle is $72^\\circ$)",
            commonErrors: ["Using $180$ instead of $90$, giving $36^\\circ$.", "Writing $x + 4 = 90$."],
            examinerNote: "M1 for $x + 4x = 90$ (oe). A1 cao.",
          },
        },
        {
          id: "m7-u3-angle-relationships-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Two lines intersect. A pair of vertical angles measure $(3x + 10)^\\circ$ and $(5x - 30)^\\circ$. Find the measure of each of these angles, in degrees.",
          response: { type: "numeric", parts: [{ label: "Angle measure", answer: 70, unit: "°" }] },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Vertical angles", statement: "Vertical angles are equal in measure." },
            ],
            steps: [
              { reasoning: "Vertical angles are equal, so set the two expressions equal.", working: "3x + 10 = 5x - 30", marks: 1, markCode: "M" },
              { reasoning: "Collect terms: $40 = 2x$.", working: "x = 20", marks: 1, markCode: "M" },
              { reasoning: "Substitute into either expression. Check with the other: $5(20) - 30 = 70$.", working: "3(20) + 10 = 70", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$70^\\circ$ (each angle)",
            commonErrors: ["Adding the expressions and setting the sum to $180$, which treats them as supplementary.", "Stopping at $x = 20$ without finding the angle."],
            examinerNote: "M1 for equating the expressions. M1 for solving for $x$. A1 for $70$.",
          },
        },
        {
          id: "m7-u3-angle-relationships-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Line $AC$ and line $BD$ intersect at point $O$. Points $A$, $O$ and $C$ lie on one straight line. The angle $\\angle AOB$ measures $(2x + 15)^\\circ$ and the adjacent angle $\\angle BOC$ measures $(x + 30)^\\circ$.",
          parts: [
            { label: "a", prompt: "Explain why $(2x + 15) + (x + 30) = 180$.", marks: 2 },
            { label: "b", prompt: "Solve the equation to find $x$.", marks: 2 },
            { label: "c", prompt: "Find the measure of $\\angle AOB$, in degrees.", marks: 1 },
            { label: "d", prompt: "Find the measure of $\\angle COD$, in degrees, and give a reason.", marks: 2 },
            { label: "e", prompt: "Find the measure of $\\angle AOD$, in degrees, and show that the four angles at $O$ add to $360^\\circ$.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(b) Value of $x$", answer: 45 },
              { label: "(c) $\\angle AOB$", answer: 105, unit: "°" },
              { label: "(d) $\\angle COD$", answer: 105, unit: "°" },
              { label: "(e) $\\angle AOD$", answer: 75, unit: "°" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Linear pair", statement: "Adjacent angles on a straight line are supplementary and add to $180^\\circ$." },
              { kind: "theorem", name: "Vertical angles", statement: "Vertical angles are equal in measure." },
            ],
            steps: [
              { part: "a", reasoning: "$A$, $O$, $C$ lie on a straight line, so $\\angle AOB$ and $\\angle BOC$ are adjacent angles on a line and are supplementary.", marks: 1, markCode: "R" },
              { part: "a", reasoning: "Supplementary angles add to $180^\\circ$, giving the equation.", working: "(2x + 15) + (x + 30) = 180", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Combine like terms: $3x + 45 = 180$.", working: "3x = 135", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Divide by $3$.", working: "x = 45", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Substitute $x = 45$.", working: "2(45) + 15 = 105", marks: 1, markCode: "B" },
              { part: "d", reasoning: "$\\angle COD$ and $\\angle AOB$ are vertical angles (opposite angles formed by intersecting lines), so they are equal.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "State the measure.", working: "\\angle COD = 105", marks: 1, markCode: "A" },
              { part: "e", reasoning: "$\\angle AOD$ is vertical to $\\angle BOC = 45 + 30 = 75$, so $\\angle AOD = 75^\\circ$.", working: "\\angle AOD = 75", marks: 1, markCode: "A" },
              { part: "e", reasoning: "Check the total around the point.", working: "105 + 75 + 105 + 75 = 360", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) angles on a line are supplementary (b) $x = 45$ (c) $105^\\circ$ (d) $105^\\circ$, vertical angles (e) $75^\\circ$; $105 + 75 + 105 + 75 = 360$",
            commonErrors: ["Setting the two expressions equal as if they were vertical angles.", "Setting the sum to $90$ (complementary).", "Giving $\\angle COD = 75^\\circ$ by confusing which angle is opposite."],
            examinerNote: "In (a) the reason must refer to a straight line or supplementary angles. In (e) accept $180 - 105 = 75$ (oe).",
          },
        },
      ],
    },
  ],
};
