import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "mypm1-u3-lesson-3-1",
  code: "3-1",
  title: "Angles and Shapes",
  goal: "I CAN use angle facts to find missing angles and give reasons, describe the properties of triangles, quadrilaterals and polygons, and find a rule for the interior angle sum of a polygon.",
  standards: [
    "Criterion A: Knowing and understanding",
    "Criterion B: Investigating patterns",
    "Criterion C: Communicating",
    "MYP Maths: Geometry and trigonometry",
  ],
  vocabulary: [
    { term: "Vertically opposite angles", definition: "The equal angles formed opposite each other when two straight lines cross." },
    { term: "Exterior angle", definition: "The angle between one side of a polygon and the extension of the next side." },
    { term: "Isosceles triangle", definition: "A triangle with two equal sides and two equal angles." },
    { term: "Parallelogram", definition: "A quadrilateral with two pairs of parallel sides. Opposite sides and opposite angles are equal." },
    { term: "Trapezium", definition: "A quadrilateral with exactly one pair of parallel sides." },
    { term: "Polygon", definition: "A closed 2D shape with straight sides, for example a pentagon (5 sides) or hexagon (6 sides)." },
    { term: "Regular polygon", definition: "A polygon with all sides equal and all interior angles equal." },
  ],
  concepts: [
    {
      id: "mypm1-u3-angle-facts",
      title: "Angle facts with reasons",
      skill: "Find missing angles on a line, at a point, in triangles and quadrilaterals, and give a reason for each step.",
      lesson: {
        sections: [
          {
            heading: "Angles on a line and at a point",
            body: "Angles on a straight line add up to $180^\\circ$. Angles around a point add up to $360^\\circ$. When two straight lines cross, the **vertically opposite** angles are equal. For example, if a line splits a straight angle into $125^\\circ$ and $x$, then $x=180^\\circ-125^\\circ=55^\\circ$.",
          },
          {
            heading: "Triangles and quadrilaterals",
            body: "The angles in a triangle add up to $180^\\circ$. The angles in a quadrilateral add up to $360^\\circ$. When you write a solution, give a short reason for each angle you find, such as \"angles on a straight line add up to $180^\\circ$\". Giving reasons is an important part of communicating mathematics clearly.",
          },
        ],
        keyFormulas: [
          { name: "Angles on a straight line", statement: "Sum $=180^\\circ$" },
          { name: "Angles at a point", statement: "Sum $=360^\\circ$" },
          { name: "Angles in a triangle", statement: "Sum $=180^\\circ$" },
          { name: "Angles in a quadrilateral", statement: "Sum $=360^\\circ$" },
        ],
        workedExample: {
          problem: "A triangle has angles $38^\\circ$ and $71^\\circ$. Find the third angle and give a reason.",
          solution: "The angles in a triangle add up to $180^\\circ$. Third angle $=180^\\circ-38^\\circ-71^\\circ=71^\\circ$. The triangle is isosceles because two of its angles are equal.",
        },
      },
      questions: [
        {
          id: "mypm1-u3-angle-facts-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Two angles lie on a straight line. One of the angles is $125^\\circ$. What is the other angle?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$235^\\circ$" },
              { id: "b", text: "$65^\\circ$" },
              { id: "c", text: "$45^\\circ$" },
              { id: "d", text: "$55^\\circ$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Angles on a straight line", statement: "Angles on a straight line add up to $180^\\circ$." },
            ],
            steps: [
              { reasoning: "Subtract the known angle from $180^\\circ$.", working: "180-125=55", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** $55^\\circ$",
            commonErrors: ["Subtracting from $360^\\circ$ (angles at a point) to get $235^\\circ$.", "Subtracting from $90^\\circ$ or making an arithmetic slip."],
          },
        },
        {
          id: "mypm1-u3-angle-facts-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Two angles of a triangle are $48^\\circ$ and $67^\\circ$. Work out the third angle, in degrees.",
          response: { type: "numeric", parts: [{ label: "Third angle", answer: 65, unit: "°" }] },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Angle sum of a triangle", statement: "The angles in a triangle add up to $180^\\circ$." },
            ],
            steps: [
              { reasoning: "Subtract both known angles from $180^\\circ$.", working: "180-48-67", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "65", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$65^\\circ$",
            commonErrors: ["Adding the two angles and giving $115^\\circ$.", "Using $360^\\circ$ instead of $180^\\circ$."],
          },
        },
        {
          id: "mypm1-u3-angle-facts-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Four angles meet at a point. They measure $x$, $2x$, $3x$ and $90^\\circ$. Work out the value of $x$.",
          response: { type: "numeric", parts: [{ label: "x", answer: 45, unit: "°" }] },
          markscheme: {
            principles: [
              { kind: "property", name: "Angles at a point", statement: "Angles around a point add up to $360^\\circ$." },
            ],
            steps: [
              { reasoning: "Angles at a point add up to $360^\\circ$, so form an equation.", working: "x+2x+3x+90=360", marks: 1, markCode: "M" },
              { reasoning: "Collect like terms and subtract 90.", working: "6x=270", marks: 1, markCode: "M" },
              { reasoning: "Divide by 6.", working: "x=45", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x=45^\\circ$",
            commonErrors: ["Using a total of $180^\\circ$ instead of $360^\\circ$.", "Forgetting to subtract the $90^\\circ$ angle before dividing."],
          },
        },
        {
          id: "mypm1-u3-angle-facts-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "In triangle $PQR$, angle $QPR=52^\\circ$ and angle $PQR=74^\\circ$. The side $QR$ is extended in a straight line to a point $S$, so that $R$ lies between $Q$ and $S$. The angle $PRS$ is the exterior angle at $R$. A separate quadrilateral has three angles of $85^\\circ$, $110^\\circ$ and $95^\\circ$.",
          parts: [
            { label: "a", prompt: "Work out angle $PRQ$. Give a reason.", marks: 2 },
            { label: "b", prompt: "Work out angle $PRS$. Give a reason.", marks: 2 },
            { label: "c", prompt: "Show that the exterior angle $PRS$ equals the sum of the two angles $QPR$ and $PQR$. Write down this sum.", marks: 2 },
            { label: "d", prompt: "Work out the fourth angle of the quadrilateral.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Angle PRQ", answer: 54, unit: "°" },
              { label: "(b) Angle PRS", answer: 126, unit: "°" },
              { label: "(c) Sum of angles QPR and PQR", answer: 126, unit: "°" },
              { label: "(d) Fourth angle of the quadrilateral", answer: 70, unit: "°" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Angle sum of a triangle", statement: "The angles in a triangle add up to $180^\\circ$." },
              { kind: "property", name: "Angles on a straight line", statement: "Angles on a straight line add up to $180^\\circ$." },
              { kind: "theorem", name: "Angle sum of a quadrilateral", statement: "The angles in a quadrilateral add up to $360^\\circ$." },
            ],
            steps: [
              { part: "a", reasoning: "Angles in a triangle add up to $180^\\circ$.", working: "180-52-74", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate and state the reason.", working: "\\angle PRQ=54^\\circ", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$QRS$ is a straight line, so angles $PRQ$ and $PRS$ add up to $180^\\circ$.", working: "180-54", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate.", working: "\\angle PRS=126^\\circ", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Add the two angles at $P$ and $Q$.", working: "52+74=126", marks: 1, markCode: "B" },
              { part: "c", reasoning: "This equals the exterior angle found in (b). Both come from $180^\\circ$ minus the angle $PRQ$, so the result is always true.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Angles in a quadrilateral add up to $360^\\circ$.", working: "360-(85+110+95)=360-290", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Evaluate.", working: "70", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $54^\\circ$ (b) $126^\\circ$ (c) $52^\\circ+74^\\circ=126^\\circ$, equal to the exterior angle (d) $70^\\circ$",
            commonErrors: ["Giving the answer to (b) as $54^\\circ$ by forgetting the straight line.", "Using $180^\\circ$ for the quadrilateral and getting a negative angle."],
            examinerNote: "In (a) and (b) the reason must be stated for the A mark. In (c) accept any correct explanation that links the two calculations.",
          },
        },
        {
          id: "mypm1-u3-angle-facts-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Two angles lie on a straight line. One angle is $64^\\circ$. What is the other angle?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$296^\\circ$" },
              { id: "b", text: "$126^\\circ$" },
              { id: "c", text: "$26^\\circ$" },
              { id: "d", text: "$116^\\circ$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Angles on a straight line", statement: "Angles on a straight line add up to $180^\\circ$." },
            ],
            steps: [
              { reasoning: "Subtract from $180^\\circ$: $180-64=116$.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** $116^\\circ$",
            commonErrors: ["Subtracting from $360^\\circ$ to get $296^\\circ$.", "Subtracting from $90^\\circ$."],
            examinerNote: "B1 for 116°.",
          },
        },
        {
          id: "mypm1-u3-angle-facts-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Three angles meet at a point. Two of them are $100^\\circ$ and $140^\\circ$. What is the third angle?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$60^\\circ$" },
              { id: "b", text: "$80^\\circ$" },
              { id: "c", text: "$240^\\circ$" },
              { id: "d", text: "$120^\\circ$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Angles at a point", statement: "Angles around a point add up to $360^\\circ$." },
            ],
            steps: [
              { reasoning: "$360-100-140=120$.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** $120^\\circ$",
            commonErrors: ["Using $180^\\circ$ to get $-60^\\circ$ or 60.", "Adding the known angles instead of subtracting."],
            examinerNote: "B1 for 120°.",
          },
        },
        {
          id: "mypm1-u3-angle-facts-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Two straight lines cross. One of the angles formed is $47^\\circ$. What is the size of the vertically opposite angle?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$133^\\circ$" },
              { id: "b", text: "$47^\\circ$" },
              { id: "c", text: "$94^\\circ$" },
              { id: "d", text: "$233^\\circ$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Vertically opposite angles", statement: "When two straight lines cross, the vertically opposite angles are equal." },
            ],
            steps: [
              { reasoning: "The vertically opposite angle equals $47^\\circ$; the adjacent angle would be $180-47=133^\\circ$.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $47^\\circ$",
            commonErrors: ["Choosing $133^\\circ$, which is the angle on the straight line, not the vertically opposite one."],
            examinerNote: "B1 for 47°.",
          },
        },
        {
          id: "mypm1-u3-angle-facts-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Two angles of a triangle are $55^\\circ$ and $80^\\circ$. Work out the third angle, in degrees.",
          response: { type: "numeric", parts: [{ label: "Third angle", answer: 45, unit: "°" }] },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Angle sum of a triangle", statement: "The angles in a triangle add up to $180^\\circ$." },
            ],
            steps: [
              { reasoning: "Subtract both known angles from $180^\\circ$.", working: "180-55-80=45", marks: 1, markCode: "M" },
              { reasoning: "State the answer with units.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$45^\\circ$",
            commonErrors: ["Adding the angles to get $135^\\circ$.", "Using $360^\\circ$."],
            examinerNote: "M1 for the subtraction. A1 for 45°.",
          },
        },
        {
          id: "mypm1-u3-angle-facts-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Three angles of a quadrilateral are $95^\\circ$, $105^\\circ$ and $80^\\circ$. Work out the fourth angle, in degrees.",
          response: { type: "numeric", parts: [{ label: "Fourth angle", answer: 80, unit: "°" }] },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Angle sum of a quadrilateral", statement: "The angles in a quadrilateral add up to $360^\\circ$." },
            ],
            steps: [
              { reasoning: "Add the three known angles, then subtract from 360.", working: "360-(95+105+80)=360-280", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "80", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$80^\\circ$",
            commonErrors: ["Using $180^\\circ$ and getting a negative angle."],
            examinerNote: "M1 for 360 - 280. A1 for 80°.",
          },
        },
        {
          id: "mypm1-u3-angle-facts-q10",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "In a triangle, one angle is twice another and the third angle is $90^\\circ$. Which equation finds the smaller angle $x$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x+2x+90=360$" },
              { id: "b", text: "$x+2x+90=180$" },
              { id: "c", text: "$3x+90=180$ only if angles are equal" },
              { id: "d", text: "$x+2x=90$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Angle sum of a triangle", statement: "The angles in a triangle add up to $180^\\circ$." },
            ],
            steps: [
              { reasoning: "The angles are $x$, $2x$ and $90$, and their sum is 180.", working: "x+2x+90=180", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $x+2x+90=180$",
            commonErrors: ["Using 360, the quadrilateral sum."],
            examinerNote: "B1 for choice (a).",
          },
        },
        {
          id: "mypm1-u3-angle-facts-q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "In triangle $ABC$, angle $BAC=48^\\circ$ and angle $ABC=62^\\circ$. The side $BC$ is extended in a straight line to a point $D$. Work out angle $ACD$, the exterior angle at $C$, and give a reason.",
          response: { type: "numeric", parts: [{ label: "Exterior angle", answer: 110, unit: "°" }] },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Angle sum of a triangle", statement: "The angles in a triangle add up to $180^\\circ$." },
              { kind: "property", name: "Exterior angle", statement: "An exterior angle equals $180^\\circ$ minus the interior angle at the same vertex." },
            ],
            steps: [
              { reasoning: "Find the interior angle at $C$ first.", working: "\\angle ACB=180-48-62=70", marks: 1, markCode: "M" },
              { reasoning: "The exterior angle is on a straight line with $70^\\circ$.", working: "180-70=110", marks: 1, markCode: "M" },
              { reasoning: "State the reason: angles on a straight line add up to $180^\\circ$ (equivalently, exterior angle $=$ sum of the two opposite interior angles $48+62=110$).", marks: 1, markCode: "R" },
            ],
            finalAnswer: "$110^\\circ$",
            commonErrors: ["Giving 70 as the exterior angle.", "Forgetting to give the reason."],
            examinerNote: "M1 for 70°. M1 for 180 - 70. R1 for the straight-line reason.",
          },
        },
        {
          id: "mypm1-u3-angle-facts-q12",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Two angles are vertically opposite. One of them is $x$ and the other is $3x-20$ degrees. What is the value of $x$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x=40$" },
              { id: "b", text: "$x=10$" },
              { id: "c", text: "$x=30$" },
              { id: "d", text: "$x=20$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Vertically opposite angles", statement: "Vertically opposite angles are equal, so $x=3x-20$." },
            ],
            steps: [
              { reasoning: "Set equal: $x=3x-20$, so $20=2x$ and $x=10$.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $x=10$",
            commonErrors: ["Setting the sum to 180 instead of the angles equal."],
            examinerNote: "B1 for x = 10.",
          },
        },
        {
          id: "mypm1-u3-angle-facts-q13",
          difficulty: "core",
          totalMarks: 3,
          stem: "Hana is finding a missing angle in a triangle with angles $x$, $2x$ and $60^\\circ$.",
          parts: [
            { label: "a", prompt: "Write down the equation she should use.", marks: 1 },
            { label: "b", prompt: "Solve the equation to find $x$.", marks: 1 },
            { label: "c", prompt: "Explain why she must use $180^\\circ$ and not $360^\\circ$.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Angle sum of a triangle", statement: "The angles in a triangle add up to $180^\\circ$; $360^\\circ$ is the sum for angles at a point or in a quadrilateral." },
            ],
            steps: [
              { part: "a", reasoning: "Add the three angles and set equal to 180.", working: "x+2x+60=180", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Collect and solve: $3x=120$.", working: "x=40", marks: 1, markCode: "A" },
              { part: "c", reasoning: "The shape is a triangle, and triangle angles sum to $180^\\circ$; $360^\\circ$ applies to angles around a point or in a quadrilateral.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $x+2x+60=180$ (b) $x=40$ (c) triangles sum to $180^\\circ$",
            commonErrors: ["Using 360 and getting $x=100$."],
            examinerNote: "In (c) the reason must name the triangle angle sum (oe).",
          },
        },
        {
          id: "mypm1-u3-angle-facts-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A straight line is split into two angles. One angle is $37^\\circ$. What is the other angle?",
          response: { type: "numeric", parts: [{ label: "Other angle", answer: 143, unit: "°" }] },
          markscheme: {
            principles: [
              { kind: "property", name: "Angles on a straight line", statement: "Angles on a straight line add up to $180^\\circ$." },
            ],
            steps: [
              { reasoning: "Subtract from 180.", working: "180-37=143", marks: 1, markCode: "B" },
            ],
            finalAnswer: "$143^\\circ$",
            commonErrors: ["Subtracting from 360 to get 323."],
            examinerNote: "B1 for 143°.",
          },
        },
        {
          id: "mypm1-u3-angle-facts-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "In quadrilateral $ABCD$, the diagonal $AC$ divides it into two triangles. In triangle $ABC$, angle $BAC=50^\\circ$ and angle $BCA=60^\\circ$. In triangle $ACD$, angle $ACD=40^\\circ$ and angle $ADC=70^\\circ$.",
          parts: [
            { label: "a", prompt: "Work out angle $ABC$.", marks: 2 },
            { label: "b", prompt: "Work out angle $BAD$.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Angle ABC", answer: 70, unit: "°" },
              { label: "(b) Angle BAD", answer: 120, unit: "°" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Angle sum of a triangle", statement: "The angles in a triangle add up to $180^\\circ$." },
            ],
            steps: [
              { part: "a", reasoning: "In triangle $ABC$: $180-50-60=70$.", working: "70", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the answer with the triangle angle-sum reason.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "In triangle $ACD$: $\\angle CAD=180-40-70=70$, so $\\angle BAD=50+70=120$.", working: "180-40-70=70,\\quad 50+70=120", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the answer.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $70^\\circ$ (b) $120^\\circ$",
            commonErrors: ["Using 360 for the triangle sums.", "In (b) giving only $\\angle CAD=70$ instead of adding $\\angle BAC$."],
            examinerNote: "In (b) both the triangle calculation and the addition at vertex A are needed for the method mark.",
          },
        },
        {
          id: "mypm1-u3-angle-facts-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Aisha draws two straight lines that cross, making one angle of $72^\\circ$.",
          parts: [
            { label: "a", prompt: "Work out the size of the angle adjacent to the $72^\\circ$ angle (on the same straight line).", marks: 1 },
            { label: "b", prompt: "Work out the size of the vertically opposite angle.", marks: 1 },
            { label: "c", prompt: "Explain why the four angles around the crossing point add up to $360^\\circ$.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Vertically opposite angles", statement: "Vertically opposite angles are equal." },
              { kind: "property", name: "Angles on a straight line and at a point", statement: "Adjacent angles on a line sum to $180^\\circ$; all four sum to $360^\\circ$." },
            ],
            steps: [
              { part: "a", reasoning: "Adjacent on the straight line: $180-72=108$.", working: "108", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Vertically opposite equals the given angle.", working: "72", marks: 1, markCode: "B" },
              { part: "c", reasoning: "The four angles go all the way around the point where the lines cross, so they sum to $360^\\circ$ (or: two straight lines each contribute $180^\\circ$).", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Check: $72+108+72+108=360$.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $108^\\circ$ (b) $72^\\circ$ (c) the angles go around a full turn, summing to $360^\\circ$",
            commonErrors: ["Giving the vertically opposite angle as 108."],
            examinerNote: "In (c) a reason referencing angles at a point or two straight angles is required.",
          },
        },
      ],
    },
    {
      id: "mypm1-u3-polygon-properties",
      title: "Properties of polygons and the interior angle pattern",
      skill: "Describe triangles and quadrilaterals and use the pattern $(n-2)\\times180^\\circ$ for the interior angles of a polygon.",
      lesson: {
        sections: [
          {
            heading: "Triangles and quadrilaterals",
            body: "An **equilateral** triangle has three equal sides and three $60^\\circ$ angles. An **isosceles** triangle has two equal sides and two equal angles. A **scalene** triangle has no equal sides. A rectangle has four right angles. A rhombus has four equal sides. A parallelogram has two pairs of parallel sides. A trapezium has exactly one pair of parallel sides. A kite has two pairs of equal adjacent sides.",
          },
          {
            heading: "Investigating the interior angle sum",
            body: "Pick one vertex of a polygon and draw lines to every other vertex that it is not next to. This splits an $n$-sided polygon into $n-2$ triangles. A quadrilateral gives 2 triangles ($360^\\circ$), a pentagon gives 3 triangles ($540^\\circ$) and a hexagon gives 4 triangles ($720^\\circ$). The pattern is that the sum increases by $180^\\circ$ for each extra side.",
          },
          {
            heading: "The general rule",
            body: "The sum of the interior angles of an $n$-sided polygon is $(n-2)\\times180^\\circ$. In a **regular** polygon every angle is equal, so one interior angle is $\\frac{(n-2)\\times180^\\circ}{n}$.",
          },
        ],
        keyFormulas: [
          { name: "Interior angle sum", statement: "$S=(n-2)\\times180^\\circ$" },
          { name: "One angle of a regular polygon", statement: "$\\dfrac{(n-2)\\times180^\\circ}{n}$" },
        ],
        workedExample: {
          problem: "Find the sum of the interior angles of a pentagon.",
          solution: "A pentagon has $n=5$ sides. $S=(5-2)\\times180^\\circ=3\\times180^\\circ=540^\\circ$.",
        },
      },
      questions: [
        {
          id: "mypm1-u3-polygon-properties-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which quadrilateral has exactly one pair of parallel sides?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Parallelogram" },
              { id: "b", text: "Trapezium" },
              { id: "c", text: "Rectangle" },
              { id: "d", text: "Rhombus" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Trapezium", statement: "A quadrilateral with exactly one pair of parallel sides." },
            ],
            steps: [
              { reasoning: "A rhombus, rectangle and parallelogram each have two pairs of parallel sides. Only the trapezium has exactly one pair.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Trapezium",
            commonErrors: ["Choosing parallelogram, which has two pairs of parallel sides."],
          },
        },
        {
          id: "mypm1-u3-polygon-properties-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Work out the sum of the interior angles of a hexagon, in degrees.",
          response: { type: "numeric", parts: [{ label: "Angle sum", answer: 720, unit: "°" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Interior angle sum", statement: "$S=(n-2)\\times180^\\circ$ for an $n$-sided polygon." },
            ],
            steps: [
              { reasoning: "A hexagon has 6 sides, so it splits into $6-2=4$ triangles.", working: "(6-2)\\times180", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "4\\times180=720", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$720^\\circ$",
            commonErrors: ["Using $6\\times180=1080$.", "Using $n-1$ triangles."],
          },
        },
        {
          id: "mypm1-u3-polygon-properties-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "The interior angles of a polygon add up to $1260^\\circ$. How many sides does the polygon have?",
          response: { type: "numeric", parts: [{ label: "Number of sides", answer: 9 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Interior angle sum", statement: "$S=(n-2)\\times180^\\circ$." },
            ],
            steps: [
              { reasoning: "Set the formula equal to the given sum.", working: "(n-2)\\times180=1260", marks: 1, markCode: "M" },
              { reasoning: "Divide both sides by 180.", working: "n-2=7", marks: 1, markCode: "M" },
              { reasoning: "Add 2.", working: "n=9", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$9$ sides (a nonagon)",
            commonErrors: ["Dividing by 180 and forgetting to add 2, giving 7.", "Writing $n\\times180=1260$."],
          },
        },
        {
          id: "mypm1-u3-polygon-properties-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Amara investigates the sum of the interior angles of polygons. She chooses one vertex, draws all the diagonals from it, and counts the triangles. A quadrilateral gives 2 triangles ($360^\\circ$), a pentagon gives 3 triangles ($540^\\circ$) and a hexagon gives 4 triangles ($720^\\circ$).",
          parts: [
            { label: "a", prompt: "Continue the pattern to find the number of triangles and the angle sum for a heptagon (7 sides).", marks: 2 },
            { label: "b", prompt: "Write a rule for the angle sum of an $n$-sided polygon, and explain why the number of triangles is $n-2$.", marks: 2 },
            { label: "c", prompt: "Work out the size of one interior angle of a regular octagon.", marks: 2 },
            { label: "d", prompt: "One interior angle of a regular polygon is $150^\\circ$. Use your rule to form an equation and find the number of sides.", marks: 3 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Triangles in a heptagon", answer: 5 },
              { label: "(a) Angle sum of a heptagon", answer: 900, unit: "°" },
              { label: "(c) One angle of a regular octagon", answer: 135, unit: "°" },
              { label: "(d) Number of sides", answer: 12 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Interior angle sum", statement: "$S=(n-2)\\times180^\\circ$." },
              { kind: "property", name: "Regular polygon", statement: "All interior angles of a regular polygon are equal, so one angle is $S\\div n$." },
            ],
            steps: [
              { part: "a", reasoning: "The number of triangles is two fewer than the number of sides.", working: "7-2=5", marks: 1, markCode: "B" },
              { part: "a", reasoning: "Each triangle adds $180^\\circ$.", working: "5\\times180=900", marks: 1, markCode: "A" },
              { part: "b", reasoning: "The rule is the number of triangles multiplied by $180^\\circ$.", working: "S=(n-2)\\times180", marks: 1, markCode: "B" },
              { part: "b", reasoning: "The two sides next to the chosen vertex cannot be used for a diagonal, so the diagonals split the polygon into $n-2$ triangles.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Find the angle sum of an octagon, $n=8$.", working: "(8-2)\\times180=1080", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Divide by 8 because all angles are equal.", working: "1080\\div8=135", marks: 1, markCode: "A" },
              { part: "d", reasoning: "The sum of the angles equals $n$ angles of $150^\\circ$.", working: "(n-2)\\times180=150n", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Expand and collect the terms in $n$.", working: "180n-360=150n \\Rightarrow 30n=360", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Divide by 30.", working: "n=12", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 5 triangles, $900^\\circ$ (b) $S=(n-2)\\times180^\\circ$ (c) $135^\\circ$ (d) $12$ sides",
            commonErrors: ["Saying the heptagon has 7 triangles.", "In (c) dividing $1080^\\circ$ by 6 or by 180."],
            examinerNote: "In (b) the R mark needs a reason, not just the rule. In (d) accept the exterior angle method ($360\\div30$) for full marks.",
          },
        },
        {
          id: "mypm1-u3-polygon-properties-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A triangle has two equal angles. What is the special name for this triangle?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Isosceles" },
              { id: "b", text: "Equilateral" },
              { id: "c", text: "Right-angled" },
              { id: "d", text: "Scalene" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Isosceles triangle", statement: "A triangle with two equal sides and two equal angles." },
            ],
            steps: [
              { reasoning: "Two equal angles means two equal sides opposite them, so the triangle is isosceles.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Isosceles",
            commonErrors: ["Choosing equilateral, which requires all three angles equal."],
            examinerNote: "B1 for isosceles.",
          },
        },
        {
          id: "mypm1-u3-polygon-properties-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the sum of the interior angles of a pentagon?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$720^\\circ$" },
              { id: "b", text: "$540^\\circ$" },
              { id: "c", text: "$900^\\circ$" },
              { id: "d", text: "$360^\\circ$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Interior angle sum", statement: "$S=(n-2)\\times180^\\circ$; a pentagon splits into 3 triangles." },
            ],
            steps: [
              { reasoning: "$(5-2)\\times180=3\\times180=540$.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $540^\\circ$",
            commonErrors: ["Using $5\\times180=900$ or $4\\times180=720$."],
            examinerNote: "B1 for 540°.",
          },
        },
        {
          id: "mypm1-u3-polygon-properties-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is the size of one interior angle of a regular hexagon?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$120^\\circ$" },
              { id: "b", text: "$108^\\circ$" },
              { id: "c", text: "$60^\\circ$" },
              { id: "d", text: "$135^\\circ$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "One angle of a regular polygon", statement: "One interior angle $=\\frac{(n-2)\\times180^\\circ}{n}$." },
            ],
            steps: [
              { reasoning: "Sum is $(6-2)\\times180=720$; divide by 6: $720\\div6=120$.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $120^\\circ$",
            commonErrors: ["Dividing 720 by 4 or by 180 instead of by 6."],
            examinerNote: "B1 for 120°.",
          },
        },
        {
          id: "mypm1-u3-polygon-properties-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Work out the sum of the interior angles of a decagon (10 sides), in degrees.",
          response: { type: "numeric", parts: [{ label: "Angle sum", answer: 1440, unit: "°" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Interior angle sum", statement: "$S=(n-2)\\times180^\\circ$." },
            ],
            steps: [
              { reasoning: "A decagon has $n=10$, so it splits into 8 triangles.", working: "(10-2)\\times180", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "8\\times180=1440", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$1440^\\circ$",
            commonErrors: ["Using $10\\times180=1800$.", "Using $n-1=9$ triangles."],
            examinerNote: "M1 for 8 x 180. A1 for 1440°.",
          },
        },
        {
          id: "mypm1-u3-polygon-properties-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the size of one interior angle of a regular pentagon, in degrees.",
          response: { type: "numeric", parts: [{ label: "One angle", answer: 108, unit: "°" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "One angle of a regular polygon", statement: "One interior angle $=\\frac{(n-2)\\times180^\\circ}{n}$." },
            ],
            steps: [
              { reasoning: "Sum is $(5-2)\\times180=540$.", working: "540", marks: 1, markCode: "M" },
              { reasoning: "Divide by 5 because all five angles are equal.", working: "540\\div5=108", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$108^\\circ$",
            commonErrors: ["Dividing 540 by 3 (the number of triangles) instead of by 5."],
            examinerNote: "M1 for 540. A1 for 108°.",
          },
        },
        {
          id: "mypm1-u3-polygon-properties-q10",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "The interior angles of a polygon add up to $900^\\circ$. How many sides does it have?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$7$" },
              { id: "b", text: "$6$" },
              { id: "c", text: "$5$" },
              { id: "d", text: "$8$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Interior angle sum", statement: "$(n-2)\\times180=900$ gives $n-2=5$, so $n=7$." },
            ],
            steps: [
              { reasoning: "$900\\div180=5$ triangles, so $n=5+2=7$ sides.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $7$",
            commonErrors: ["Forgetting to add 2 and answering 5."],
            examinerNote: "B1 for 7.",
          },
        },
        {
          id: "mypm1-u3-polygon-properties-q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "The interior angles of a polygon add up to $1620^\\circ$.",
          response: { type: "numeric", parts: [{ label: "Number of sides", answer: 11 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Interior angle sum", statement: "$S=(n-2)\\times180^\\circ$." },
            ],
            steps: [
              { reasoning: "Set the formula equal to the given sum.", working: "(n-2)\\times180=1620", marks: 1, markCode: "M" },
              { reasoning: "Divide by 180.", working: "n-2=9", marks: 1, markCode: "M" },
              { reasoning: "Add 2.", working: "n=11", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$11$ sides",
            commonErrors: ["Answering 9 by forgetting to add 2.", "Dividing by 360 instead of 180."],
            examinerNote: "M1 for n - 2 = 9. M1 for adding 2. A1 for 11.",
          },
        },
        {
          id: "mypm1-u3-polygon-properties-q12",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Each interior angle of a regular polygon is $140^\\circ$. Using the exterior angle method, how many sides does the polygon have?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$7$" },
              { id: "b", text: "$8$" },
              { id: "c", text: "$10$" },
              { id: "d", text: "$9$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Interior and exterior angles", statement: "Exterior angle $=180^\\circ-140^\\circ=40^\\circ$, and exterior angles sum to $360^\\circ$." },
            ],
            steps: [
              { reasoning: "Exterior angle is $180-140=40$; $360\\div40=9$ sides.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** $9$",
            commonErrors: ["Dividing 360 by 140 instead of by the exterior angle."],
            examinerNote: "B1 for 9.",
          },
        },
        {
          id: "mypm1-u3-polygon-properties-q13",
          difficulty: "core",
          totalMarks: 3,
          stem: "Ben is explaining why the interior angles of any polygon sum to $(n-2)\\times180^\\circ$.",
          parts: [
            { label: "a", prompt: "Describe how drawing diagonals from one vertex splits an $n$-sided polygon.", marks: 1 },
            { label: "b", prompt: "Explain why the number of triangles formed is $n-2$.", marks: 1 },
            { label: "c", prompt: "Use this to explain the formula $(n-2)\\times180^\\circ$.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Angle sum of a triangle", statement: "Each triangle contributes $180^\\circ$ to the angle sum." },
            ],
            steps: [
              { part: "a", reasoning: "From one vertex, draw diagonals to every vertex that is not next to it.", marks: 1, markCode: "R" },
              { part: "b", reasoning: "The two sides next to the chosen vertex cannot be used for diagonals, leaving $n-3$ diagonals and $n-2$ triangles.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Each triangle has angles summing to $180^\\circ$, so the total is $(n-2)\\times180^\\circ$.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) diagonals to non-adjacent vertices (b) $n-3$ diagonals make $n-2$ triangles (c) $(n-2)$ triangles each $180^\\circ$",
            commonErrors: ["Saying there are $n$ triangles.", "Claiming the diagonals must be drawn from every vertex."],
            examinerNote: "All three parts need a reasoned explanation, not just statements.",
          },
        },
        {
          id: "mypm1-u3-polygon-properties-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Three angles of a quadrilateral are $100^\\circ$, $95^\\circ$ and $110^\\circ$. What is the fourth angle?",
          response: { type: "numeric", parts: [{ label: "Fourth angle", answer: 55, unit: "°" }] },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Angle sum of a quadrilateral", statement: "The angles in a quadrilateral add up to $360^\\circ$." },
            ],
            steps: [
              { reasoning: "$360-(100+95+110)=360-305=55$.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "$55^\\circ$",
            commonErrors: ["Using 180 to get a negative answer."],
            examinerNote: "B1 for 55°.",
          },
        },
        {
          id: "mypm1-u3-polygon-properties-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A regular polygon has interior angles of $156^\\circ$.",
          parts: [
            { label: "a", prompt: "Work out the size of each exterior angle, in degrees.", marks: 1 },
            { label: "b", prompt: "Work out the number of sides of the polygon.", marks: 1 },
            { label: "c", prompt: "Check your answer using the interior angle sum formula.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Exterior angle", answer: 24, unit: "°" },
              { label: "(b) Number of sides", answer: 15 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Interior and exterior angles", statement: "Interior + exterior $=180^\\circ$; exterior angles sum to $360^\\circ$." },
              { kind: "formula", name: "Interior angle sum", statement: "$S=(n-2)\\times180^\\circ$." },
            ],
            steps: [
              { part: "a", reasoning: "Exterior angle $=180-156$.", working: "24", marks: 1, markCode: "B" },
              { part: "b", reasoning: "$360\\div24=15$ sides.", working: "15", marks: 1, markCode: "A" },
              { part: "c", reasoning: "For $n=15$: sum $=(15-2)\\times180=13\\times180=2340$, and $2340\\div15=156$.", working: "2340\\div15=156", marks: 1, markCode: "M" },
              { part: "c", reasoning: "The check confirms 15 sides.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $24^\\circ$ (b) 15 sides (c) $2340\\div15=156$ confirms it",
            commonErrors: ["Dividing 156 into 360 directly.", "Using $360\\div156$ for the number of sides."],
            examinerNote: "In (c) the check must use the interior angle sum formula explicitly.",
          },
        },
        {
          id: "mypm1-u3-polygon-properties-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Lena investigates the interior angles of regular polygons.",
          parts: [
            { label: "a", prompt: "Write down the size of one interior angle of a regular triangle, square, pentagon and hexagon.", marks: 2 },
            { label: "b", prompt: "Describe what happens to the size of one interior angle as the number of sides increases.", marks: 1 },
            { label: "c", prompt: "Explain why the angle never reaches $180^\\circ$, no matter how many sides the polygon has.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "One angle of a regular polygon", statement: "One interior angle $=\\frac{(n-2)\\times180^\\circ}{n}=180^\\circ-\\frac{360^\\circ}{n}$." },
            ],
            steps: [
              { part: "a", reasoning: "Triangle $60^\\circ$, square $90^\\circ$, pentagon $108^\\circ$, hexagon $120^\\circ$.", working: "60,\\ 90,\\ 108,\\ 120", marks: 1, markCode: "B" },
              { part: "a", reasoning: "All four values correct.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "The angle increases as $n$ increases.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Since $\\frac{360}{n}$ is always positive, the angle is always less than $180^\\circ$; it approaches $180^\\circ$ only as $n$ becomes very large.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $60^\\circ, 90^\\circ, 108^\\circ, 120^\\circ$ (b) it increases (c) it is always $180^\\circ$ minus a positive amount",
            commonErrors: ["Writing the square's angle as $45^\\circ$."],
            examinerNote: "In (c) the explanation must reference $\\frac{360}{n}>0$ or equivalent (oe).",
          },
        },
      ],
    },
  ],
};
