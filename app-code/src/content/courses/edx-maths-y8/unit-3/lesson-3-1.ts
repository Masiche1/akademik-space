import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "edm8-u3-lesson-3-1",
  code: "3-1",
  title: "Angles",
  goal: "I CAN use angle facts, parallel line rules and polygon angle sums to find missing angles and give reasons.",
  standards: ["Y8 Geometry and Measures"],
  vocabulary: [
    { term: "Alternate angles", definition: "Equal angles on opposite sides of a transversal, between two parallel lines (they form a Z shape)." },
    { term: "Corresponding angles", definition: "Equal angles in matching positions where a transversal crosses two parallel lines (they form an F shape)." },
    { term: "Co-interior angles", definition: "Angles between two parallel lines on the same side of a transversal; they add up to $180^\\circ$ (a C or U shape)." },
    { term: "Vertically opposite angles", definition: "The equal angles opposite each other where two straight lines cross." },
    { term: "Interior angle", definition: "An angle inside a polygon at one of its vertices." },
    { term: "Exterior angle", definition: "The angle between one side of a polygon and the extension of the adjacent side; interior + exterior = $180^\\circ$." },
    { term: "Regular polygon", definition: "A polygon with all sides equal and all angles equal." },
  ],
  concepts: [
    {
      id: "edm8-u3-angle-facts-parallel",
      title: "Angle facts and parallel lines",
      skill: "Use angle facts and the rules for parallel lines to find missing angles, giving reasons.",
      lesson: {
        sections: [
          {
            heading: "Basic angle facts",
            body: "Angles on a straight line add up to $180^\\circ$. Angles around a point add up to $360^\\circ$. Angles in a triangle add up to $180^\\circ$. Vertically opposite angles are equal. An exterior angle of a triangle equals the sum of the two opposite interior angles.",
          },
          {
            heading: "Parallel lines",
            body: "When a straight line (a transversal) crosses two parallel lines, three rules apply: alternate angles are equal, corresponding angles are equal, and co-interior angles add up to $180^\\circ$. In an exam, always write the reason next to each angle you find, for example 'alternate angles'.",
          },
          {
            heading: "Setting up equations",
            body: "Sometimes angles are written as expressions such as $3x+20$. Use the correct angle rule to write an equation, solve it, and then substitute back to find the angle. Check by making sure both angles agree.",
          },
        ],
        keyFormulas: [
          { name: "Straight line", statement: "Angles on a straight line sum to $180^\\circ$" },
          { name: "Triangle", statement: "Angles in a triangle sum to $180^\\circ$" },
          { name: "Parallel lines", statement: "Alternate = equal, corresponding = equal, co-interior sum to $180^\\circ$" },
        ],
        workedExample: {
          problem: "Two parallel lines are crossed by a transversal. One angle is $65^\\circ$. A co-interior angle is $y$. Work out $y$.",
          solution: "Co-interior angles add up to $180^\\circ$, so $y=180-65=115^\\circ$.",
        },
      },
      questions: [
        {
          id: "edm8-u3-angle-facts-parallel-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Two angles lie on a straight line. One angle is $118^\\circ$. Work out the other angle.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$72^\\circ$" },
              { id: "b", text: "$242^\\circ$" },
              { id: "c", text: "$62^\\circ$" },
              { id: "d", text: "$52^\\circ$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "law", name: "Angles on a straight line", statement: "Angles on a straight line add up to $180^\\circ$." }],
            steps: [{ reasoning: "Subtract the known angle from $180^\\circ$.", working: "180-118=62", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** $62^\\circ$",
            commonErrors: ["Subtracting from $360^\\circ$ giving $242^\\circ$.", "Arithmetic slips in $180-118$."],
          },
        },
        {
          id: "edm8-u3-angle-facts-parallel-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "In triangle $PQR$, angle $P=52^\\circ$ and angle $Q=74^\\circ$. The side $QR$ is extended to a point $S$ so that $QRS$ is a straight line. Work out the size of angle $PRS$.",
          response: { type: "numeric", parts: [{ label: "Angle $PRS$", answer: 126, unit: "degrees" }] },
          markscheme: {
            principles: [
              { kind: "law", name: "Angles in a triangle", statement: "Angles in a triangle add up to $180^\\circ$." },
              { kind: "law", name: "Angles on a straight line", statement: "Angles on a straight line add up to $180^\\circ$." },
            ],
            steps: [
              { reasoning: "Find the interior angle at $R$ using the angle sum of a triangle.", working: "\\angle PRQ = 180-52-74 = 54", marks: 1, markCode: "M" },
              { reasoning: "Angle $PRS$ is on a straight line with angle $PRQ$.", working: "\\angle PRS = 180-54", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "126^\\circ", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$126^\\circ$",
            commonErrors: ["Giving $54^\\circ$, the interior angle, instead of the exterior angle.", "Not using the fact that an exterior angle equals $52+74$."],
            examinerNote: "Award full marks for $52+74=126$ using the exterior angle property (oe).",
          },
        },
        {
          id: "edm8-u3-angle-facts-parallel-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "The lines $AB$ and $CD$ are parallel. A straight line crosses $AB$ at $G$ and $CD$ at $H$, with $G$ above $H$. Angle $AGH$ lies below $AB$ and to the left of the crossing line, and measures $(3x+20)^\\circ$. Angle $GHD$ lies above $CD$ and to the right of the crossing line, and measures $(5x-30)^\\circ$. These two angles are alternate angles.\n\nWork out the value of $x$ and the size of angle $AGH$.",
          response: {
            type: "numeric",
            parts: [
              { label: "Value of $x$", answer: 25 },
              { label: "Angle $AGH$", answer: 95, unit: "degrees" },
            ],
          },
          markscheme: {
            principles: [{ kind: "law", name: "Alternate angles", statement: "Alternate angles between parallel lines are equal." }],
            steps: [
              { reasoning: "Alternate angles are equal, so form an equation.", working: "3x+20=5x-30", marks: 1, markCode: "M" },
              { reasoning: "Collect terms: $50=2x$.", working: "x=25", marks: 1, markCode: "A" },
              { reasoning: "Substitute back into one expression.", working: "3(25)+20", marks: 1, markCode: "M" },
              { reasoning: "Check with the other expression: $5(25)-30=95$.", working: "95^\\circ", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x=25$, angle $AGH=95^\\circ$",
            commonErrors: ["Using $180^\\circ$ as if the angles were co-interior.", "Solving for $x$ but not substituting to find the angle."],
          },
        },
        {
          id: "edm8-u3-angle-facts-parallel-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Triangle $ABC$ is isosceles with $AB=AC$ and angle $BAC=40^\\circ$. A straight line $DAE$ is drawn through $A$ parallel to $BC$, with $D$ on the same side as $B$ and $E$ on the same side as $C$.",
          parts: [
            { label: "a", prompt: "Work out the size of angle $ABC$.", marks: 2 },
            { label: "b", prompt: "Write down the size of angle $DAB$. Give a reason for your answer.", marks: 2 },
            { label: "c", prompt: "Show that angle $DAB$ + angle $BAC$ + angle $CAE = 180^\\circ$, and explain how this proves that the angles in any triangle add up to $180^\\circ$.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Isosceles triangle", statement: "The base angles of an isosceles triangle are equal." },
              { kind: "law", name: "Alternate angles", statement: "Alternate angles between parallel lines are equal." },
              { kind: "law", name: "Angles on a straight line", statement: "Angles on a straight line add up to $180^\\circ$." },
            ],
            steps: [
              { part: "a", reasoning: "Base angles are equal, so share out the remaining $140^\\circ$.", working: "(180-40)\\div 2", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate.", working: "70^\\circ", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$DAB$ and $ABC$ are alternate angles between parallel lines $DE$ and $BC$.", working: "70^\\circ", marks: 1, markCode: "B" },
              { part: "b", reasoning: "The reason must be stated: alternate angles are equal.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Angle $CAE=70^\\circ$ by alternate angles with angle $ACB=70^\\circ$.", working: "\\angle CAE = 70", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Add the three angles at $A$.", working: "70+40+70", marks: 1, markCode: "M" },
              { part: "c", reasoning: "They make a straight line, so the total is $180^\\circ$.", working: "=180", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Angles $DAB$ and $CAE$ equal the other two angles of the triangle (alternate angles), so the three angles of any triangle fill a straight line and sum to $180^\\circ$.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) $70^\\circ$ (b) $70^\\circ$, alternate angles (c) $70+40+70=180^\\circ$, angles on a straight line",
            commonErrors: ["Calculating $180-40=140$ and forgetting to halve.", "Stating the angle without a reason."],
          },
        },
      ],
    },
    {
      id: "edm8-u3-polygon-angles",
      title: "Interior and exterior angles of polygons",
      skill: "Calculate interior and exterior angles of regular and irregular polygons.",
      lesson: {
        sections: [
          {
            heading: "Sum of interior angles",
            body: "A polygon with $n$ sides can be split into $n-2$ triangles from one vertex, so the interior angles add up to $(n-2)\\times 180^\\circ$. For example, a hexagon ($n=6$) has angle sum $4\\times180=720^\\circ$.",
          },
          {
            heading: "Exterior angles",
            body: "The exterior angles of any polygon add up to $360^\\circ$. At each vertex, interior angle + exterior angle = $180^\\circ$. For a regular polygon with $n$ sides, each exterior angle is $360^\\circ\\div n$.",
          },
          {
            heading: "Working backwards",
            body: "If you know the exterior angle of a regular polygon you can find $n$ using $n=360\\div\\text{exterior angle}$. The answer must be a whole number. For an interior angle, first subtract it from $180^\\circ$ to get the exterior angle.",
          },
        ],
        keyFormulas: [
          { name: "Interior angle sum", statement: "$(n-2)\\times180^\\circ$" },
          { name: "Exterior angle of regular polygon", statement: "$\\dfrac{360^\\circ}{n}$" },
        ],
        workedExample: {
          problem: "Work out the size of each interior angle of a regular pentagon.",
          solution: "Exterior angle $=360\\div5=72^\\circ$. Interior angle $=180-72=108^\\circ$. Check: $3\\times180\\div5=108^\\circ$.",
        },
      },
      questions: [
        {
          id: "edm8-u3-polygon-angles-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the sum of the interior angles of a hexagon?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$630^\\circ$" },
              { id: "b", text: "$540^\\circ$" },
              { id: "c", text: "$720^\\circ$" },
              { id: "d", text: "$360^\\circ$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "formula", name: "Interior angle sum", statement: "$(n-2)\\times180^\\circ$" }],
            steps: [{ reasoning: "A hexagon has $6$ sides.", working: "(6-2)\\times180=720", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** $720^\\circ$",
            commonErrors: ["Using $n-1$ triangles giving $900^\\circ$ or using a pentagon's $540^\\circ$.", "Using the exterior angle sum $360^\\circ$."],
          },
        },
        {
          id: "edm8-u3-polygon-angles-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Work out the size of one interior angle of a regular octagon.",
          response: { type: "numeric", parts: [{ label: "Interior angle", answer: 135, unit: "degrees" }] },
          markscheme: {
            principles: [
              { kind: "property", name: "Exterior angles", statement: "Exterior angles of a polygon sum to $360^\\circ$; interior + exterior = $180^\\circ$." },
            ],
            steps: [
              { reasoning: "Each exterior angle of a regular octagon is $360\\div8$.", working: "360\\div 8=45", marks: 1, markCode: "M" },
              { reasoning: "Interior angle $=180-45$.", working: "135^\\circ", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$135^\\circ$",
            commonErrors: ["Stopping at $45^\\circ$, the exterior angle."],
            examinerNote: "Accept $6\\times180\\div8=135$ (oe).",
          },
        },
        {
          id: "edm8-u3-polygon-angles-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Each interior angle of a regular polygon is $156^\\circ$. Work out the number of sides of the polygon.",
          response: { type: "numeric", parts: [{ label: "Number of sides", answer: 15 }] },
          markscheme: {
            principles: [
              { kind: "property", name: "Exterior angles", statement: "Interior + exterior $=180^\\circ$ and the exterior angles of a polygon sum to $360^\\circ$." },
            ],
            steps: [
              { reasoning: "Find the exterior angle.", working: "180-156", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "24^\\circ", marks: 1, markCode: "A" },
              { reasoning: "Number of sides $=360\\div$ exterior angle.", working: "360\\div24", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "15", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$15$ sides",
            commonErrors: ["Dividing $360$ by the interior angle $156$.", "Using $180\\div156$."],
          },
        },
        {
          id: "edm8-u3-polygon-angles-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "$ABCDE$ is an irregular pentagon. Angle $A=100^\\circ$, angle $B=110^\\circ$, angle $C=120^\\circ$, angle $D=x^\\circ$ and angle $E=2x^\\circ$.",
          parts: [
            { label: "a", prompt: "Work out the sum of the interior angles of a pentagon.", marks: 2 },
            { label: "b", prompt: "Work out the value of $x$.", marks: 3 },
            { label: "c", prompt: "Work out the size of one exterior angle and one interior angle of a regular decagon (10 sides).", marks: 2 },
            { label: "d", prompt: "Explain why a regular polygon cannot have an exterior angle of $25^\\circ$.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Interior angle sum", statement: "$(n-2)\\times180^\\circ$" },
              { kind: "property", name: "Exterior angles", statement: "The exterior angles of a regular $n$-sided polygon are each $360^\\circ\\div n$." },
            ],
            steps: [
              { part: "a", reasoning: "A pentagon has $5$ sides.", working: "(5-2)\\times180", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate.", working: "540^\\circ", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Set the sum of all five angles equal to $540$.", working: "100+110+120+x+2x=540", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Simplify: $330+3x=540$.", working: "3x=210", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Divide by $3$.", working: "x=70", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Exterior angle $=360\\div10$.", working: "36^\\circ", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Interior angle $=180-36$.", working: "144^\\circ", marks: 1, markCode: "B" },
              { part: "d", reasoning: "The number of sides would be $360\\div25$.", working: "360\\div25=14.4", marks: 1, markCode: "M" },
              { part: "d", reasoning: "The number of sides must be a whole number, and $14.4$ is not.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $540^\\circ$ (b) $x=70$ (c) exterior $36^\\circ$, interior $144^\\circ$ (d) $360\\div25=14.4$ is not a whole number",
            commonErrors: ["Using $5\\times180$ for the angle sum.", "Forgetting that angle $E$ is $2x$, not $x$."],
          },
        },
      ],
    },
  ],
};
