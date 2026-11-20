import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "geo-u1-lesson-1-3",
  code: "1-3",
  title: "Triangle Properties",
  goal: "I CAN apply triangle angle, exterior angle, isosceles triangle, inequality, and midsegment theorems to find unknown measures and justify conclusions.",
  standards: ["HSG-CO.C.10"],
  vocabulary: [
    { term: "Interior angles", definition: "The three angles inside a triangle, one at each vertex." },
    { term: "Exterior angle", definition: "An angle formed by one side of a triangle and the extension of an adjacent side." },
    { term: "Isosceles triangle", definition: "A triangle with at least two congruent sides; the angles opposite those sides are congruent." },
    { term: "Triangle inequality", definition: "For any triangle, the sum of the lengths of any two sides must be greater than the length of the third side." },
    { term: "Midpoint", definition: "The point on a segment that divides it into two congruent segments." },
    { term: "Midsegment", definition: "The segment joining the midpoints of two sides of a triangle; it is parallel to the third side and half its length." },
  ],
  concepts: [
    {
      id: "geo-u1-triangle-angles",
      title: "Triangle angle relationships",
      skill: "Find missing interior or exterior angles using triangle angle, exterior angle, and isosceles triangle theorems.",
      lesson: {
        sections: [
          {
            heading: "The interior angle sum",
            body: "The three interior angles of every triangle sum to $180^\\circ$. Given two angle measures, subtract their sum from $180^\\circ$ to find the third. If angle measures are expressions, first write an equation whose total is $180^\\circ$, solve for the variable, and substitute to calculate each requested angle.",
          },
          {
            heading: "An exterior angle relates to two remote angles",
            body: "An exterior angle forms a linear pair with the adjacent interior angle, so these two angles sum to $180^\\circ$. The **Exterior Angle Theorem** gives a second relationship: the exterior angle equals the sum of the two nonadjacent, or remote, interior angles. Do not include the adjacent interior angle among the two remote angles.",
          },
          {
            heading: "Isosceles triangles connect sides and angles",
            body: "In an isosceles triangle, congruent sides are opposite congruent angles. Conversely, if two angles of a triangle are congruent, their opposite sides are congruent. Identify the opposite side or angle carefully: if $AB\\cong AC$, the equal base angles are $\\angle B$ and $\\angle C$, not the vertex angle $A$. Use the triangle angle sum to find the measures of equal base angles.",
          },
        ],
        keyFormulas: [
          { name: "Triangle Angle Sum", statement: "$m\\angle A + m\\angle B + m\\angle C = 180^\\circ$" },
          { name: "Exterior Angle Theorem", statement: "$m\\angle exterior = m\\angle remote\\,1 + m\\angle remote\\,2$" },
          { name: "Isosceles Triangle Theorem", statement: "$\\text{Congruent sides }\\implies\\text{ their opposite angles are congruent}$" },
        ],
        workedExample: {
          problem: "In isosceles $\\triangle ABC$, $AB=AC$ and $m\\angle A=40^\\circ$. Find the base angles. Then find the exterior angle adjacent to $\\angle C$.",
          solution: "Because $AB=AC$, the opposite base angles $B$ and $C$ are congruent. Their sum is $180^\\circ-40^\\circ=140^\\circ$, so each is $70^\\circ$. The exterior angle adjacent to $\\angle C$ forms a linear pair with it, so it measures $180^\\circ-70^\\circ=110^\\circ$. By the Exterior Angle Theorem, it also equals $40^\\circ+70^\\circ=110^\\circ$.",
        },
      },
      questions: [
        {
          id: "geo-u1-angle-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A triangle has two interior angles measuring $47^\\circ$ and $68^\\circ$. Find the third interior angle.",
          response: { type: "numeric", parts: [{ label: "Third angle", answer: 65, unit: "degrees" }] },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Triangle Angle Sum Theorem", statement: "The interior angles of a triangle sum to $180^\\circ$." },
            ],
            steps: [
              { reasoning: "Subtract the sum of the known angles from $180^\\circ$.", working: "180^\\circ - (47^\\circ + 68^\\circ)", marks: 1, markCode: "M" },
              { reasoning: "Calculate the remaining angle.", working: "180^\\circ - 115^\\circ = 65^\\circ", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$65^\\circ$.",
            commonErrors: ["Subtracting just one given angle from $180^\\circ$."],
          },
        },
        {
          id: "geo-u1-angle-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "In isosceles $\\triangle ABC$, $AB\\cong AC$. The vertex angle $A$ measures $(2x+10)^\\circ$, and each base angle measures $(x+5)^\\circ$. Find $x$ and all three angle measures.",
          response: { type: "numeric", parts: [{ label: "$x$", answer: 40 }, { label: "Vertex angle", answer: 90, unit: "degrees" }, { label: "Each base angle", answer: 45, unit: "degrees" }] },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Isosceles Triangle Theorem", statement: "The angles opposite congruent sides are congruent, so the two base angles have equal measures." },
              { kind: "theorem", name: "Triangle Angle Sum Theorem", statement: "The three interior angle measures sum to $180^\\circ$." },
            ],
            steps: [
              { reasoning: "Use the equal base angles and set their measures and the vertex angle equal to $180^\\circ$.", working: "(2x+10)+(x+5)+(x+5)=180", marks: 1, markCode: "M" },
              { reasoning: "Combine like terms and solve for $x$.", working: "4x+20=180 \\implies x=40", marks: 1, markCode: "A" },
              { reasoning: "Substitute $x=40$: the vertex is $90^\\circ$ and each base angle is $45^\\circ$.", working: "2(40)+10=90^\\circ \\qquad 40+5=45^\\circ", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x=40$; the vertex angle is $90^\\circ$ and each base angle is $45^\\circ$.",
            commonErrors: ["Combining the two equal base angles as only one copy of $(x+5)^\\circ$.", "Treating the vertex angle as one of the equal base angles."],
          },
        },
        {
          id: "geo-u1-angle-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "In a triangle, two remote interior angles to an exterior angle measure $(2x+5)^\\circ$ and $(3x-10)^\\circ$. The exterior angle measures $120^\\circ$. Find $x$ and both remote interior angle measures. State the theorem used.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Exterior Angle Theorem", statement: "The measure of a triangle's exterior angle equals the sum of the measures of the two remote interior angles." },
              { kind: "property", name: "Substitution", statement: "Replace angle measures with their given expressions and solve the resulting equation." },
            ],
            steps: [
              { reasoning: "Apply the Exterior Angle Theorem to the two remote interior angles.", working: "(2x+5)+(3x-10)=120", marks: 1, markCode: "M" },
              { reasoning: "Combine terms and solve for $x$.", working: "5x-5=120 \\implies 5x=125 \\implies x=25", marks: 1, markCode: "A" },
              { reasoning: "Substitute $x=25$ into the first remote angle expression.", working: "2(25)+5=55^\\circ", marks: 1, markCode: "A" },
              { reasoning: "Substitute into the second and verify that the remote angles sum to the exterior angle.", working: "3(25)-10=65^\\circ \\qquad 55^\\circ+65^\\circ=120^\\circ", marks: 1, markCode: "R" },
            ],
            finalAnswer: "$x=25$; the remote interior angles are $55^\\circ$ and $65^\\circ$. By the Exterior Angle Theorem, their sum is $120^\\circ$.",
            commonErrors: ["Setting the remote angle sum to $180^\\circ$ instead of the exterior angle measure.", "Including the adjacent interior angle as one of the remote angles."],
          },
        },
        {
          id: "geo-u1-angle-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "In $\\triangle ABC$, $m\\angle A=(2x+10)^\\circ$ and $m\\angle B=(3x-5)^\\circ$. Side $BC$ is extended beyond $C$ to a point $E$, and the exterior angle $\\angle ACE$ measures $(6x-15)^\\circ$. Point $D$ lies on side $BC$ between $B$ and $C$ so that $AD=AC$; segment $AD$ is drawn inside the triangle.",
          parts: [
            { label: "a", prompt: "Find $x$.", marks: 2 },
            { label: "b", prompt: "Find $m\\angle A$, $m\\angle B$ and $m\\angle ACB$.", marks: 2 },
            { label: "c", prompt: "Find $m\\angle ADC$ and $m\\angle CAD$, justifying each.", marks: 3 },
            { label: "d", prompt: "Find $m\\angle BAD$ and $m\\angle ADB$, and verify the angle sum in $\\triangle ABD$.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Exterior Angle Theorem", statement: "An exterior angle of a triangle equals the sum of the two remote interior angles." },
              { kind: "theorem", name: "Triangle Angle Sum Theorem", statement: "The interior angles of a triangle sum to $180^\\circ$." },
              { kind: "theorem", name: "Isosceles Triangle Theorem", statement: "Angles opposite congruent sides of a triangle are congruent." },
            ],
            steps: [
              { part: "a", reasoning: "The remote interior angles to $\\angle ACE$ are $\\angle A$ and $\\angle B$.", working: "6x-15=(2x+10)+(3x-5)", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Simplify and solve.", working: "6x-15=5x+5 \\implies x=20", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Substitute $x=20$.", working: "m\\angle A=50^\\circ,\\quad m\\angle B=55^\\circ,\\ m\\angle ACE=105^\\circ", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$\\angle ACB$ and $\\angle ACE$ are a linear pair (check: $50+55+75=180$).", working: "m\\angle ACB=180^\\circ-105^\\circ=75^\\circ", marks: 1, markCode: "A" },
              { part: "c", reasoning: "In $\\triangle ACD$, $AD=AC$, so the base angles opposite these sides are congruent (and $\\angle ACD=\\angle ACB$ since $D$ lies on $BC$).", working: "m\\angle ADC=m\\angle ACD=75^\\circ", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Apply the angle sum in $\\triangle ACD$.", working: "m\\angle CAD=180^\\circ-75^\\circ-75^\\circ", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate.", working: "m\\angle CAD=30^\\circ", marks: 1, markCode: "A" },
              { part: "d", reasoning: "$\\angle BAD$ is the part of $\\angle A$ not used by $\\angle CAD$; $\\angle ADB$ forms a linear pair with $\\angle ADC$.", working: "m\\angle BAD=50^\\circ-30^\\circ=20^\\circ,\\quad m\\angle ADB=180^\\circ-75^\\circ=105^\\circ", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Check the Triangle Angle Sum in $\\triangle ABD$.", working: "20^\\circ+55^\\circ+105^\\circ=180^\\circ", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $x=20$. (b) $50^\\circ$, $55^\\circ$, $75^\\circ$. (c) $m\\angle ADC=75^\\circ$, $m\\angle CAD=30^\\circ$. (d) $m\\angle BAD=20^\\circ$, $m\\angle ADB=105^\\circ$, and $20+55+105=180$.",
            commonErrors: ["Setting the exterior angle plus the remote angles equal to $180^\\circ$.", "Treating $\\angle CAD$ as a base angle of $\\triangle ACD$; the equal sides $AD$ and $AC$ meet at $A$, so the base angles are at $D$ and $C$.", "Using $\\angle A=50^\\circ$ as $\\angle CAD$ instead of subtracting."],
          },
        },
      ],
    },
    {
      id: "geo-u1-triangle-sides-midsegments",
      title: "Triangle inequality and midsegments",
      skill: "Determine whether side lengths can form a triangle and use the midsegment theorem to relate side lengths and parallel sides.",
      lesson: {
        sections: [
          {
            heading: "Test side lengths with the triangle inequality",
            body: "For three lengths to form a triangle, the sum of **each pair** must be greater than the remaining length. It is sufficient to check that the sum of the two shorter lengths is greater than the longest length. Equality gives a straight segment, not a triangle. When a side is unknown, write all three inequalities and take their intersection; do not check only that the side is positive.",
          },
          {
            heading: "Identify the midsegment",
            body: "A midsegment joins the midpoints of two sides of a triangle. If $D$ is the midpoint of $AB$, then $AD=DB$; if $E$ is the midpoint of $AC$, then $AE=EC$. The segment $DE$ is the midsegment corresponding to the third side $BC$. A midsegment is different from a median, which connects a vertex to the midpoint of the opposite side.",
          },
          {
            heading: "Use the midsegment theorem",
            body: "The Triangle Midsegment Theorem states that the segment joining the midpoints of two sides is parallel to the third side and has half its length. Thus $DE\\parallel BC$ and $DE=\\frac12 BC$. Equivalently, $BC=2DE$. Check which segment is the midsegment so you do not double the wrong quantity.",
          },
        ],
        keyFormulas: [
          { name: "Triangle inequality", statement: "$a+b>c,\\quad a+c>b,\\quad b+c>a$" },
          { name: "Triangle Midsegment Theorem", statement: "$DE\\parallel BC \\qquad DE=\\frac{1}{2}BC$" },
          { name: "Third-side length", statement: "$BC=2(DE)$" },
        ],
        workedExample: {
          problem: "Two sides of a triangle have lengths $7$ and $12$. The third side is a positive integer $n$. Find the possible values of $n$. If the side of length $12$ is the third side of a triangle midsegment, find the midsegment length.",
          solution: "The triangle inequalities give $7+n>12$, so $n>5$, and $7+12>n$, so $n<19$. The remaining inequality $12+n>7$ is automatic since $n$ is positive. Therefore $n$ can be any integer from $6$ through $18$. A midsegment parallel to a side of length $12$ has length $12/2=6$.",
        },
      },
      questions: [
        {
          id: "geo-u1-side-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Two sides of a triangle have lengths $4$ and $9$. A third side has positive integer length $n$. What is the smallest possible value of $n$?",
          response: { type: "numeric", parts: [{ label: "Smallest possible $n$", answer: 6 }] },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Triangle Inequality Theorem", statement: "The sum of any two side lengths of a triangle must be greater than the third side." },
              { kind: "property", name: "Positive integer", statement: "The smallest positive integer strictly greater than $5$ is $6$." },
            ],
            steps: [
              { reasoning: "The sum of the shorter side and the unknown side must exceed the other side.", working: "4+n>9 \\implies n>5", marks: 1, markCode: "M" },
              { reasoning: "The least positive integer satisfying this strict inequality is 6; the other inequality $4+9>n$ allows $n=6$.", working: "n=6", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$n=6$.",
            commonErrors: ["Using $n=5$, which makes the two shorter side lengths sum to exactly the longest side."],
          },
        },
        {
          id: "geo-u1-side-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "In $\\triangle RST$, $U$ and $V$ are the midpoints of $RS$ and $RT$. The midsegment $UV$ measures $3x+2$, while $ST$ measures $8x-4$. Find $x$, $ST$, and the relationship between $UV$ and $ST$.",
          response: { type: "numeric", parts: [{ label: "$x$", answer: 4 }, { label: "$ST$", answer: 28 }, { label: "$UV$", answer: 14 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Midsegment", statement: "A segment joining the midpoints of two sides is a triangle midsegment." },
              { kind: "theorem", name: "Triangle Midsegment Theorem", statement: "The midsegment is parallel to, and half the length of, the third side." },
            ],
            steps: [
              { reasoning: "Relate the midsegment to the third side using its half-length property.", working: "3x+2=\\frac{1}{2}(8x-4)", marks: 1, markCode: "M" },
              { reasoning: "Solve the equation for $x$.", working: "3x+2=4x-2 \\implies x=4", marks: 1, markCode: "A" },
              { reasoning: "Substitute to find the side lengths; the theorem also gives parallelism.", working: "ST=8(4)-4=28 \\qquad UV=3(4)+2=14 \\qquad UV\\parallel ST", marks: 1, markCode: "R" },
            ],
            finalAnswer: "$x=4$, $ST=28$, $UV=14$, and $UV\\parallel ST$.",
            commonErrors: ["Forgetting the factor of one-half in the midsegment relationship.", "Reporting the third-side length as the midsegment length."],
          },
        },
        {
          id: "geo-u1-side-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A triangle has side lengths $7$, $12$, and $n$, where $n$ is a positive integer. A segment joining the midpoints of the sides adjacent to the side of length $12$ is drawn. Find the smallest and largest possible values of $n$, the number of possible integer values, and the length of the midsegment parallel to the side of length $12$. Explain the strict bounds.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Triangle Inequality Theorem", statement: "The sum of any two side lengths must be strictly greater than the third side." },
              { kind: "theorem", name: "Triangle Midsegment Theorem", statement: "A segment joining two side midpoints is parallel to the third side and half its length." },
              { kind: "property", name: "Positive integer", statement: "The possible side length $n$ must be a positive integer." },
            ],
            steps: [
              { reasoning: "Apply the triangle inequalities that bound $n$.", working: "7+n>12 \\implies n>5 \\qquad 7+12>n \\implies n<19", marks: 1, markCode: "M" },
              { reasoning: "Apply the positive-integer condition; neither strict endpoint is included.", working: "n\\in\\{6,7,\\ldots,18\\}", marks: 1, markCode: "A" },
              { reasoning: "Count the integers in the interval and identify the extreme values.", working: "n_{\\min}=6,\\quad n_{\\max}=18,\\quad 18-6+1=13", marks: 1, markCode: "A" },
              { reasoning: "The midsegment has half the length of the side of length 12.", working: "\\frac{1}{2}(12)=6", marks: 1, markCode: "R" },
            ],
            finalAnswer: "$n$ ranges from $6$ to $18$, inclusive, giving $13$ integer possibilities. The midsegment length is $6$.",
            commonErrors: ["Including $n=5$ or $n=19$ despite the strict triangle inequalities.", "Doubling 12 instead of finding half the parallel third side."],
            examinerNote: "The third inequality $12+n>7$ is automatic for positive $n$. Accept any clearly stated equivalent interval or list of integer values.",
          },
        },
        {
          id: "geo-u1-side-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "In $\\triangle ABC$, $AB=20$ and $AC=30$. Point $D$ is the midpoint of $\\overline{AB}$ and point $E$ is the midpoint of $\\overline{AC}$. The diagram shows the midsegment $\\overline{DE}$ drawn across the triangle, with $DE=(2x+3)$ and $BC=(6x-4)$. It is also given that $m\\angle ADE=68^\\circ$.",
          parts: [
            { label: "a", prompt: "Find $x$, $DE$ and $BC$.", marks: 2 },
            { label: "b", prompt: "Find the perimeter of $\\triangle ADE$.", marks: 2 },
            { label: "c", prompt: "Find $m\\angle ABC$ and justify your answer.", marks: 2 },
            { label: "d", prompt: "Using only $AD$ and $AE$ and the Triangle Inequality, find the possible lengths of $DE$, and confirm that your value from (a) is in that range.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Triangle Midsegment Theorem", statement: "A segment joining the midpoints of two sides of a triangle is parallel to the third side and half its length." },
              { kind: "theorem", name: "Corresponding angles theorem", statement: "Parallel lines cut by a transversal form congruent corresponding angles." },
              { kind: "theorem", name: "Triangle Inequality", statement: "The sum of any two side lengths of a triangle exceeds the third." },
            ],
            steps: [
              { part: "a", reasoning: "The midsegment is half the third side, so $BC=2DE$.", working: "6x-4=2(2x+3)=4x+6 \\implies 2x=10 \\implies x=5", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Substitute $x=5$.", working: "DE=2(5)+3=13,\\quad BC=6(5)-4=26", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$D$ and $E$ are midpoints, so $AD$ and $AE$ are half of $AB$ and $AC$.", working: "AD=10,\\quad AE=15", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Add the three sides.", working: "10+15+13=38", marks: 1, markCode: "A" },
              { part: "c", reasoning: "By the Midsegment Theorem, $\\overline{DE}\\parallel\\overline{BC}$, so $\\angle ADE$ and $\\angle ABC$ are corresponding angles for transversal $AB$.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Corresponding angles are congruent.", working: "m\\angle ABC=68^\\circ", marks: 1, markCode: "A" },
              { part: "d", reasoning: "In $\\triangle ADE$, $DE$ must exceed the difference and be less than the sum of the other sides.", working: "15-10<DE<15+10 \\implies 5<DE<25", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Compare with part (a).", working: "5<13<25", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $x=5$, $DE=13$, $BC=26$. (b) $38$. (c) $m\\angle ABC=68^\\circ$ (corresponding angles, $DE\\parallel BC$). (d) $5<DE<25$; $13$ lies in this range.",
            commonErrors: ["Setting $DE=2BC$ instead of $BC=2DE$.", "Taking $AD=20$ and $AE=30$ rather than half of each side.", "In (c), using same-side interior angles and answering $112^\\circ$."],
          },
        },
      ],
    },
  ],
};
