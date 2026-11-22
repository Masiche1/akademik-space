import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "geo-u1-lesson-1-1",
  code: "1-1",
  title: "Angle Relationships and Parallel Lines",
  goal: "I CAN use angle relationships at intersections and with parallel lines to find unknown angle measures and justify my reasoning.",
  standards: ["HSG-CO.C.9"],
  vocabulary: [
    { term: "Vertical angles", definition: "The opposite, nonadjacent angles formed when two lines intersect; each pair has equal measure." },
    { term: "Linear pair", definition: "Two adjacent angles whose noncommon sides form a straight line; their measures sum to $180^\\circ$." },
    { term: "Transversal", definition: "A line that intersects two or more other lines at distinct points." },
    { term: "Corresponding angles", definition: "Angles in matching positions at the two intersections of a transversal with two lines; if the lines are parallel, corresponding angles are congruent." },
    { term: "Alternate interior angles", definition: "Interior angles on opposite sides of a transversal; if the lines are parallel, they are congruent." },
    { term: "Same-side interior angles", definition: "Interior angles on the same side of a transversal; if the lines are parallel, they are supplementary." },
  ],
  concepts: [
    {
      id: "geo-u1-intersecting-lines",
      title: "Angles formed by intersecting lines",
      skill: "Use vertical-angle congruence and linear-pair supplementary relationships to solve for unknown angles.",
      lesson: {
        sections: [
          {
            heading: "Opposite and adjacent angles",
            body: "When two straight lines intersect, they form four angles. Opposite angles are **vertical angles** and have equal measures. Adjacent angles that share a side form a **linear pair**; the other sides lie on one straight line, so the pair sums to $180^\\circ$. These facts let you find all four angles from just one measure.",
          },
          {
            heading: "Build and solve an equation",
            body: "Translate the geometric relationship before solving. Equal vertical angles give an equation with an equals sign. A linear pair gives a sum of $180^\\circ$. If measures are expressions, solve the resulting linear equation, then substitute back to report the requested angle. Check that adjacent measures add to $180^\\circ$ and opposite measures match.",
          },
        ],
        keyFormulas: [
          { name: "Vertical angles", statement: "$m\\angle 1 = m\\angle 3$" },
          { name: "Linear pair", statement: "$m\\angle 1 + m\\angle 2 = 180^\\circ$" },
        ],
        workedExample: {
          problem: "Two intersecting lines form a linear pair with measures $(3x + 15)^\\circ$ and $(5x + 5)^\\circ$. Find $x$ and both angle measures.",
          solution: "A linear pair is supplementary, so $(3x + 15) + (5x + 5) = 180$. Thus $8x + 20 = 180$, $x = 20$, and the angles are $75^\\circ$ and $105^\\circ$. They sum to $180^\\circ$, as required.",
        },
      },
      questions: [
        {
          id: "geo-u1-int-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Two straight lines intersect. One angle measures $68^\\circ$. Find the measure of its vertical angle and the measure of either adjacent angle.",
          response: { type: "numeric", parts: [{ label: "Vertical angle", answer: 68 }, { label: "Adjacent angle", answer: 112, unit: "degrees" }] },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Vertical angles theorem", statement: "Vertical angles are congruent." },
              { kind: "property", name: "Linear pair", statement: "The measures of a linear pair sum to $180^\\circ$." },
            ],
            steps: [
              { reasoning: "The angle opposite the given angle is its vertical angle, so its measure is equal.", working: "68^\\circ", marks: 1, markCode: "B" },
              { reasoning: "An adjacent angle forms a linear pair with the given angle.", working: "180^\\circ - 68^\\circ = 112^\\circ", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Vertical angle: $68^\\circ$; either adjacent angle: $112^\\circ$.",
            commonErrors: ["Giving $112^\\circ$ for the vertical angle; opposite angles are equal, while adjacent angles are supplementary."],
          },
        },
        {
          id: "geo-u1-int-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Two lines intersect. A pair of vertical angles has measures $(7x - 9)^\\circ$ and $(4x + 30)^\\circ$. Find $x$ and the measure of each of those vertical angles.",
          response: { type: "numeric", parts: [{ label: "$x$", answer: 13 }, { label: "Angle measure", answer: 82, unit: "degrees" }] },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Vertical angles theorem", statement: "Vertical angles are congruent and therefore have equal measures." },
              { kind: "property", name: "Substitution", statement: "Replace equal expressions with one another and solve the resulting equation." },
            ],
            steps: [
              { reasoning: "Set the measures of the vertical angles equal.", working: "7x - 9 = 4x + 30", marks: 1, markCode: "M" },
              { reasoning: "Solve the linear equation.", working: "3x = 39 \\implies x = 13", marks: 1, markCode: "A" },
              { reasoning: "Substitute $x=13$ into either expression.", working: "7(13) - 9 = 82^\\circ", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x=13$; each of the vertical angles measures $82^\\circ$.",
            commonErrors: ["Adding the expressions to $180$ even though the angles are opposite, not adjacent."],
          },
        },
        {
          id: "geo-u1-int-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Two lines intersect. The measures of a linear pair are $(5x - 4)^\\circ$ and $(3x + 24)^\\circ$. Find $x$, then give the measures of all four angles formed. Describe which angles are equal.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Linear pair", statement: "Adjacent angles whose noncommon sides form a line are supplementary; their measures sum to $180^\\circ$." },
              { kind: "theorem", name: "Vertical angles theorem", statement: "Each pair of opposite angles has equal measure." },
            ],
            steps: [
              { reasoning: "Use the linear-pair relationship to form an equation.", working: "(5x - 4) + (3x + 24) = 180", marks: 1, markCode: "M" },
              { reasoning: "Combine like terms and solve for $x$.", working: "8x + 20 = 180 \\implies x = 20", marks: 1, markCode: "A" },
              { reasoning: "Substitute to find the two adjacent angle measures.", working: "5(20) - 4 = 96^\\circ \\qquad 3(20) + 24 = 84^\\circ", marks: 1, markCode: "A" },
              { reasoning: "The opposite angles match by the vertical angles theorem, giving two angles of each measure.", working: "96^\\circ, 84^\\circ, 96^\\circ, 84^\\circ", marks: 1, markCode: "R" },
            ],
            finalAnswer: "$x=20$. The four angles alternate around the intersection as $96^\\circ, 84^\\circ, 96^\\circ, 84^\\circ$; opposite pairs are equal.",
            commonErrors: ["Using equality for adjacent angles instead of the supplementary equation.", "Reporting only the two given angles and not using vertical angles to identify the other pair."],
            examinerNote: "Accept either clockwise or counterclockwise ordering, provided equal measures are assigned to opposite angles.",
          },
        },
        {
          id: "geo-u1-int-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Lines $\\overleftrightarrow{AB}$ and $\\overleftrightarrow{CD}$ intersect at point $O$. Going around $O$, the four rays appear in the order $OA, OC, OB, OD$, so $A$ and $B$ are opposite rays and $C$ and $D$ are opposite rays. The diagram shows $m\\angle AOC=(3x+10)^\\circ$ and $m\\angle COB=(2x+20)^\\circ$. Ray $OE$ is drawn inside $\\angle AOC$ and bisects it.",
          parts: [
            { label: "a", prompt: "Find the value of $x$.", marks: 2 },
            { label: "b", prompt: "Find the measures of all four angles $\\angle AOC$, $\\angle COB$, $\\angle BOD$, and $\\angle DOA$.", marks: 2 },
            { label: "c", prompt: "Find $m\\angle EOD$.", marks: 2 },
            { label: "d", prompt: "Prove that $\\angle AOC\\cong\\angle BOD$ using linear pairs, without quoting the vertical angles theorem.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Linear pair", statement: "Adjacent angles whose noncommon sides are opposite rays are supplementary: their measures sum to $180^\\circ$." },
              { kind: "theorem", name: "Vertical angles theorem", statement: "Vertical angles are congruent." },
              { kind: "definition", name: "Angle bisector", statement: "A ray inside an angle that splits it into two angles of equal measure." },
            ],
            steps: [
              { part: "a", reasoning: "$\\angle AOC$ and $\\angle COB$ form a linear pair, so their measures sum to $180^\\circ$.", working: "(3x+10)+(2x+20)=180", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Combine like terms and solve.", working: "5x+30=180 \\implies x=30", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Substitute $x=30$ into each expression.", working: "m\\angle AOC=3(30)+10=100^\\circ,\\quad m\\angle COB=2(30)+20=80^\\circ", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Vertical angles are congruent, so the opposite angles repeat these measures.", working: "m\\angle BOD=100^\\circ,\\quad m\\angle DOA=80^\\circ", marks: 1, markCode: "R" },
              { part: "c", reasoning: "$OE$ bisects $\\angle AOC$, so $\\angle COE$ is half of $100^\\circ$.", working: "m\\angle COE=\\frac{100^\\circ}{2}=50^\\circ", marks: 1, markCode: "M" },
              { part: "c", reasoning: "$C$, $O$, $D$ are collinear, so $\\angle COE$ and $\\angle EOD$ form a linear pair.", working: "m\\angle EOD=180^\\circ-50^\\circ=130^\\circ", marks: 1, markCode: "A" },
              { part: "d", reasoning: "$\\angle AOC$ and $\\angle COB$ are a linear pair, so they are supplementary.", working: "m\\angle AOC+m\\angle COB=180^\\circ", marks: 1, markCode: "R" },
              { part: "d", reasoning: "$\\angle COB$ and $\\angle BOD$ are also a linear pair. Both angles are supplementary to $\\angle COB$, so subtracting $m\\angle COB$ shows they are equal.", working: "m\\angle COB+m\\angle BOD=180^\\circ \\implies m\\angle AOC=m\\angle BOD", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $x=30$. (b) $100^\\circ, 80^\\circ, 100^\\circ, 80^\\circ$. (c) $m\\angle EOD=130^\\circ$. (d) Both $\\angle AOC$ and $\\angle BOD$ are supplementary to $\\angle COB$, so they are congruent.",
            commonErrors: ["Setting $3x+10=2x+20$, treating the adjacent angles as equal.", "In (c), answering $50^\\circ$ (the bisected half) instead of its supplement $\\angle EOD$.", "In (d), simply citing the vertical angles theorem; the question asks for the linear-pair argument that proves it."],
          },
        },
      ],
    },
    {
      id: "geo-u1-parallel-transversal",
      title: "Parallel lines cut by a transversal",
      skill: "Identify corresponding, alternate interior, and same-side interior angles, then use their relationships to solve equations.",
      lesson: {
        sections: [
          {
            heading: "Recognize the angle positions",
            body: "When a transversal crosses two lines, compare the locations of angles at the two intersections. **Corresponding** angles occupy matching corners. **Alternate interior** angles lie between the two lines on opposite sides of the transversal. **Same-side interior** angles lie between the lines on the same side. When the two lines are parallel, corresponding and alternate interior angles are congruent; same-side interior angles are supplementary.",
          },
          {
            heading: "Use the converse to justify parallel lines",
            body: "The relationships also work in reverse: if a pair of corresponding angles or alternate interior angles is congruent, the two lines are parallel. If same-side interior angles are supplementary, the two lines are parallel. Always identify the angle pair and state the relevant theorem or converse; a matching-looking position alone is not enough unless parallelism is given or established.",
          },
          {
            heading: "Solve angle expressions",
            body: "First decide whether the expressions represent equal angles or supplementary angles. Set equal-angle expressions equal; set same-side interior expressions to a sum of $180^\\circ$. Solve for the variable and substitute into the expression for the requested angle. A final check should respect the geometry: corresponding and alternate interior angles have equal measures, while same-side interior angles total $180^\\circ$.",
          },
        ],
        keyFormulas: [
          { name: "Corresponding or alternate interior angles", statement: "$\\text{If lines are parallel, } m\\angle a = m\\angle b$" },
          { name: "Same-side interior angles", statement: "$\\text{If lines are parallel, } m\\angle a + m\\angle b = 180^\\circ$" },
        ],
        workedExample: {
          problem: "Parallel lines are cut by a transversal. A pair of corresponding angles measures $(3x + 12)^\\circ$ and $(5x - 28)^\\circ$. Find $x$ and the angle measure.",
          solution: "Corresponding angles are congruent, so $3x + 12 = 5x - 28$. This gives $40 = 2x$, so $x=20$. The angle measure is $3(20)+12=72^\\circ$; the other expression also gives $72^\\circ$.",
        },
      },
      questions: [
        {
          id: "geo-u1-par-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Two parallel horizontal lines are crossed by a diagonal transversal slanting upward to the right. At the upper intersection, angle $A$ is below the upper line and left of the transversal. At the lower intersection, angle $B$ is above the lower line and right of the transversal. What relationship holds between $A$ and $B$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They are same-side interior angles, so they are supplementary." },
              { id: "b", text: "They are corresponding angles, so they are congruent." },
              { id: "c", text: "They are alternate interior angles, so they are congruent." },
              { id: "d", text: "They are vertical angles at the same intersection." },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Alternate interior angles", statement: "Alternate interior angles lie between the two lines and on opposite sides of the transversal." },
              { kind: "theorem", name: "Alternate interior angles theorem", statement: "If two parallel lines are cut by a transversal, alternate interior angles are congruent." },
            ],
            steps: [
              { reasoning: "Both angles lie between the parallel lines, and they are on opposite sides of the transversal, so they are alternate interior angles.", marks: 1, markCode: "R" },
              { reasoning: "Apply the alternate interior angles theorem.", working: "m\\angle A = m\\angle B", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** They are alternate interior angles and are congruent.",
            commonErrors: ["Choosing same-side interior because both angles are inside; the sides of the transversal must also be compared."],
          },
        },
        {
          id: "geo-u1-par-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Two parallel lines are cut by a transversal. A pair of corresponding angles measures $(6x - 14)^\\circ$ and $(3x + 25)^\\circ$. Find $x$ and the measure of each angle.",
          response: { type: "numeric", parts: [{ label: "$x$", answer: 13 }, { label: "Angle measure", answer: 64, unit: "degrees" }] },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Corresponding angles theorem", statement: "Corresponding angles formed by a transversal of parallel lines are congruent." },
              { kind: "property", name: "Equality of measures", statement: "Congruent angles have equal measures." },
            ],
            steps: [
              { reasoning: "Set the expressions equal because the angles are corresponding and the lines are parallel.", working: "6x - 14 = 3x + 25", marks: 1, markCode: "M" },
              { reasoning: "Solve the equation.", working: "3x = 39 \\implies x = 13", marks: 1, markCode: "A" },
              { reasoning: "Substitute into either expression to get the common measure.", working: "6(13) - 14 = 64^\\circ", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x=13$; each corresponding angle measures $64^\\circ$.",
            commonErrors: ["Setting the measures to sum to $180^\\circ$; corresponding angles are equal, not supplementary."],
          },
        },
        {
          id: "geo-u1-par-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Two parallel lines are cut by a transversal. Same-side interior angles measure $(4x + 8)^\\circ$ and $(2x + 4)^\\circ$. Find $x$, then state the measures of both angles. Explain how their measures confirm the angle relationship.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Same-side interior angles", statement: "These angles lie between the two lines on the same side of the transversal." },
              { kind: "theorem", name: "Same-side interior angles theorem", statement: "If two parallel lines are cut by a transversal, same-side interior angles are supplementary." },
            ],
            steps: [
              { reasoning: "Use the fact that same-side interior angles are supplementary.", working: "(4x + 8) + (2x + 4) = 180", marks: 1, markCode: "M" },
              { reasoning: "Combine like terms and solve.", working: "6x + 12 = 180 \\implies x = 28", marks: 1, markCode: "A" },
              { reasoning: "Substitute $x=28$ into each angle expression.", working: "4(28) + 8 = 120^\\circ \\qquad 2(28) + 4 = 60^\\circ", marks: 1, markCode: "A" },
              { reasoning: "Verify the sum and state the relationship.", working: "120^\\circ + 60^\\circ = 180^\\circ", marks: 1, markCode: "R" },
            ],
            finalAnswer: "$x=28$; the angles measure $120^\\circ$ and $60^\\circ$. Their sum is $180^\\circ$, so they are supplementary.",
            commonErrors: ["Treating same-side interior angles as congruent.", "Not checking the values in both expressions."],
          },
        },
        {
          id: "geo-u1-par-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Horizontal lines $\\ell$ (upper) and $m$ (lower) are parallel. A transversal $t$ rises from lower left to upper right, meeting $\\ell$ at $P$ and $m$ at $Q$. In the diagram, $\\angle 1$ is the angle above $\\ell$ and to the right of $t$ at $P$; $\\angle 2$ is the angle above $m$ and to the right of $t$ at $Q$; $\\angle 3$ is the angle below $\\ell$ and to the right of $t$ at $P$. Given $m\\angle 1=(4x+6)^\\circ$ and $m\\angle 2=(6x-24)^\\circ$.",
          parts: [
            { label: "a", prompt: "Find $x$ and $m\\angle 1$, naming the angle relationship used.", marks: 2 },
            { label: "b", prompt: "Find $m\\angle 3$ and state how $\\angle 3$ and $\\angle 2$ are related.", marks: 2 },
            { label: "c", prompt: "Find the measure of the angle below $\\ell$ and to the left of $t$ at $P$, and name the relationship it has with $\\angle 2$.", marks: 2 },
            { label: "d", prompt: "Line $m$ is rotated about $Q$ until $m\\angle 2=70^\\circ$, with $\\ell$ and $t$ unchanged. Is $m$ still parallel to $\\ell$? Justify using a converse theorem.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Corresponding angles theorem", statement: "If parallel lines are cut by a transversal, corresponding angles are congruent." },
              { kind: "theorem", name: "Same-side interior angles theorem", statement: "If parallel lines are cut by a transversal, same-side interior angles are supplementary." },
              { kind: "theorem", name: "Alternate interior angles theorem", statement: "If parallel lines are cut by a transversal, alternate interior angles are congruent." },
              { kind: "theorem", name: "Converse of the corresponding angles theorem", statement: "If two lines are cut by a transversal so that corresponding angles are congruent, the lines are parallel." },
            ],
            steps: [
              { part: "a", reasoning: "$\\angle 1$ and $\\angle 2$ are corresponding angles and $\\ell\\parallel m$, so they are equal.", working: "4x+6=6x-24 \\implies 30=2x \\implies x=15", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Substitute $x=15$ (check in both expressions).", working: "m\\angle 1=4(15)+6=66^\\circ=6(15)-24", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$\\angle 1$ and $\\angle 3$ form a linear pair at $P$.", working: "m\\angle 3=180^\\circ-66^\\circ=114^\\circ", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$\\angle 3$ and $\\angle 2$ lie between the parallel lines on the same side of $t$: same-side interior angles, which are supplementary.", working: "114^\\circ+66^\\circ=180^\\circ", marks: 1, markCode: "R" },
              { part: "c", reasoning: "This angle is vertical to $\\angle 1$ at $P$ (equivalently, alternate interior to $\\angle 2$), so it equals $66^\\circ$.", working: "66^\\circ", marks: 1, markCode: "A" },
              { part: "c", reasoning: "It lies between the lines on the opposite side of $t$ from $\\angle 2$: alternate interior angles, congruent since $\\ell\\parallel m$.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "$\\angle 1$ and the new $\\angle 2$ are still corresponding angles, but now $66^\\circ\\ne70^\\circ$.", working: "m\\angle 1\\ne m\\angle 2", marks: 1, markCode: "M" },
              { part: "d", reasoning: "By the converse of the corresponding angles theorem, congruent corresponding angles are needed for parallel lines, so $m$ is no longer parallel to $\\ell$.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $x=15$, $m\\angle 1=66^\\circ$ (corresponding angles). (b) $m\\angle 3=114^\\circ$; same-side interior, supplementary. (c) $66^\\circ$; alternate interior angles with $\\angle 2$. (d) No: the corresponding angles are $66^\\circ$ and $70^\\circ$, not congruent, so by the converse the lines are not parallel.",
            commonErrors: ["Setting $4x+6+6x-24=180$, treating corresponding angles as supplementary.", "Using the converse theorem in the wrong direction in (d) (assuming parallelism and then concluding the angles are equal)."],
          },
        },
      ],
    },
  ],
};
