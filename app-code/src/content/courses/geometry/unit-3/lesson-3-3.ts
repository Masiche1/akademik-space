import type { Lesson } from "../../../types.ts";

export const lesson33: Lesson = {
  id: "geo-u3-3-3",
  code: "3-3",
  title: "Similar Triangles",
  goal: "I CAN prove triangles similar using AA, SAS, or SSS and apply triangle proportionality, angle bisector, and right-triangle geometric mean theorems.",
  standards: ["HSG-SRT.A.3", "HSG-SRT.B.4", "HSG-SRT.B.5"],
  vocabulary: [
    { term: "AA similarity", definition: "A criterion stating that two pairs of corresponding angles congruent guarantee two triangles are similar." },
    { term: "SAS similarity", definition: "A criterion stating that two pairs of corresponding sides are proportional and their included angles are congruent guarantee similarity." },
    { term: "SSS similarity", definition: "A criterion stating that all three pairs of corresponding sides are proportional guarantee similarity." },
    { term: "Triangle proportionality theorem", definition: "A line parallel to one side of a triangle that intersects the other two sides divides those sides proportionally." },
    { term: "Angle bisector theorem", definition: "An angle bisector of a triangle divides the opposite side into segments proportional to the adjacent sides." },
    { term: "Geometric mean", definition: "For positive numbers $a,b$, the geometric mean is $\\sqrt{ab}$; in a right triangle it relates a leg to the hypotenuse and its projection." },
    { term: "Corresponding parts", definition: "Sides or angles that occupy matching positions in two triangles under a stated correspondence." },
  ],
  concepts: [
    {
      id: "geo-u3-triangle-similarity-criteria",
      title: "AA, SAS, and SSS similarity",
      skill: "Select and apply a valid triangle similarity criterion, then use the correspondence to prove proportional side relationships.",
      lesson: {
        sections: [
          {
            heading: "Three similarity criteria",
            body: "**AA**: if two angles of one triangle are congruent to two angles of another, the third angles are also congruent by the triangle sum, so the triangles are similar. **SAS**: if two pairs of corresponding sides have the same ratio and the included angles are congruent, the triangles are similar. **SSS**: if all three pairs of corresponding sides have the same ratio, the triangles are similar.\n\nThe order in a similarity statement tells the correspondence. In $\\triangle ABC\\sim\\triangle DEF$, $A\\leftrightarrow D$, $B\\leftrightarrow E$, and $C\\leftrightarrow F$. Corresponding sides are $AB$ with $DE$, $BC$ with $EF$, and $AC$ with $DF$.",
          },
          {
            heading: "Build a valid proof",
            body: "State the correspondence before writing proportions. For AA, name the two equal angle pairs and explain the third pair follows from the triangle angle sum. For SAS, compare the sides around the included angle; do not use a non-included angle as the SAS condition. For SSS, show the same ratio for all three corresponding side pairs.\\n\\nOnce similarity is established, use one consistent order in every proportion. For example, if $\\triangle ABC\\sim\\triangle DEF$, then $\\frac{AB}{DE}=\\frac{BC}{EF}=\\frac{AC}{DF}$.",
          },
        ],
        keyFormulas: [
          { name: "AA criterion", statement: "Two corresponding angle pairs congruent $\\implies$ triangles similar." },
          { name: "SAS criterion", statement: "Two corresponding side ratios equal and included angles congruent $\\implies$ triangles similar." },
          { name: "SSS criterion", statement: "All three corresponding side ratios equal $\\implies$ triangles similar." },
        ],
        workedExample: {
          problem: "In $\\triangle ABC$, $AB=6$, $AC=9$, and $\\angle A=40^\\circ$. In $\\triangle DEF$, $DE=8$, $DF=12$, and $\\angle D=40^\\circ$. Determine whether the triangles are similar and state the correspondence.",
          solution: "The sides surrounding the included angles have ratios $\\frac{AB}{DE}=\\frac68=\\frac34$ and $\\frac{AC}{DF}=\\frac9{12}=\\frac34$. Also $\\angle A=\\angle D$. By SAS similarity, $\\triangle ABC\\sim\\triangle DEF$, with correspondence $A\\leftrightarrow D$, $B\\leftrightarrow E$, and $C\\leftrightarrow F$.",
        },
      },
      questions: [
        {
          id: "geo-u3-triangle-similarity-criteria-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "In $\\triangle ABC$ and $\\triangle DEF$, $\\angle A=\\angle D$ and $\\angle B=\\angle E$. Which similarity criterion proves $\\triangle ABC\\sim\\triangle DEF$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "AA" },
              { id: "b", text: "SAS, because two angles are equal" },
              { id: "c", text: "SSS, because two angle pairs are equal" },
              { id: "d", text: "No similarity criterion applies" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "theorem", name: "AA similarity", statement: "If two corresponding angle pairs are congruent, the triangles are similar." },
            ],
            steps: [
              { reasoning: "Two corresponding angle pairs are given congruent.", working: "\\angle A\\cong\\angle D,\\quad\\angle B\\cong\\angle E", marks: 1, markCode: "B" },
              { reasoning: "The third angle pair must also be congruent because each triangle has angle sum $180^\\circ$; AA proves similarity.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "**(a)** AA similarity.",
            commonErrors: ["Calling the angle condition SAS; SAS requires two side ratios and the included angle."],
          },
        },
        {
          id: "geo-u3-triangle-similarity-criteria-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "In triangles $PQR$ and $XYZ$, $PQ=6$, $PR=9$, $XY=10$, $XZ=15$, and $\\angle P=\\angle X$. Determine whether the triangles are similar by SAS. If so, state the scale factor from $\\triangle PQR$ to $\\triangle XYZ$.",
          response: { type: "numeric", parts: [{ label: "Scale factor", answer: 5 / 3, tolerance: 0.001 }] },
          markscheme: {
            principles: [
              { kind: "theorem", name: "SAS similarity", statement: "Two pairs of corresponding sides in the same ratio and their included angles congruent imply triangle similarity." },
            ],
            steps: [
              { reasoning: "Compare the sides around the given included angles in the stated direction.", working: "\\frac{XY}{PQ}=\\frac{10}{6}=\\frac53,\\quad\\frac{XZ}{PR}=\\frac{15}{9}=\\frac53", marks: 1, markCode: "M" },
              { reasoning: "The included angles at $P$ and $X$ are given congruent, so SAS applies.", working: "\\triangle PQR\\sim\\triangle XYZ", marks: 1, markCode: "R" },
              { reasoning: "The image-to-original factor from $PQR$ to $XYZ$ is either corresponding side ratio.", working: "k=\\frac53", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Yes. $\\triangle PQR\\sim\\triangle XYZ$ by SAS, with scale factor $\\frac53$ from $PQR$ to $XYZ$.",
            commonErrors: ["Using $6/10$ and reporting the inverse factor for the stated direction."],
          },
        },
        {
          id: "geo-u3-triangle-similarity-criteria-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Triangle $ABC$ has side lengths $AB=7$, $BC=9$, and $AC=12$. Triangle $DEF$ has side lengths $DE=14$, $EF=18$, and $DF=24$. Prove the triangles similar and give the correspondence and scale factor from $ABC$ to $DEF$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "theorem", name: "SSS similarity", statement: "If all three pairs of corresponding sides are proportional, the triangles are similar." },
            ],
            steps: [
              { reasoning: "Compare the side lengths in the order $AB\\leftrightarrow DE$, $BC\\leftrightarrow EF$, and $AC\\leftrightarrow DF$.", working: "\\frac{DE}{AB}=\\frac{14}{7}=2,\\quad\\frac{EF}{BC}=\\frac{18}{9}=2,\\quad\\frac{DF}{AC}=\\frac{24}{12}=2", marks: 2, markCode: "M" },
              { reasoning: "All three side ratios are equal, so the triangles are similar by SSS.", working: "\\triangle ABC\\sim\\triangle DEF", marks: 1, markCode: "R" },
              { reasoning: "The written similarity statement gives the vertex correspondence; the common ratio is the requested scale factor.", working: "A\\leftrightarrow D,\\;B\\leftrightarrow E,\\;C\\leftrightarrow F,\\quad k=2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\triangle ABC\\sim\\triangle DEF$ by SSS; $A\\leftrightarrow D$, $B\\leftrightarrow E$, $C\\leftrightarrow F$, and the scale factor from $ABC$ to $DEF$ is $2$.",
            commonErrors: ["Checking only two side ratios; SSS requires all three."],
          },
        },
        {
          id: "geo-u3-triangle-similarity-criteria-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "In a word-described diagram, segment $DE$ is parallel to side $BC$ of $\\triangle ABC$, with $D$ on $AB$ and $E$ on $AC$. The full triangle has $A(0,0)$, $B(12,0)$, and $C(0,9)$; the inner points are $D(8,0)$ and $E(0,6)$. Segments $BC$ and $DE$ are drawn, and both right angles at $A$ are visible from the coordinates. Use triangle similarity to determine the unknown side and perimeter information.",
          parts: [
            { label: "a", prompt: "Show that $\\triangle ADE$ is similar to $\\triangle ABC$ and name the criterion.", marks: 2 },
            { label: "b", prompt: "Find the scale factor from $\\triangle ADE$ to $\\triangle ABC$.", marks: 2 },
            { label: "c", prompt: "Find the length $BC$.", marks: 2 },
            { label: "d", prompt: "Find the perimeter of $\\triangle ADE$ and explain how it relates to the perimeter of $\\triangle ABC$.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "theorem", name: "AA similarity", statement: "Two corresponding angle pairs congruent imply triangles similar." },
              { kind: "formula", name: "Distance formula", statement: "For points $(x_1,y_1)$ and $(x_2,y_2)$, distance is $\\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}$." },
              { kind: "property", name: "Similar perimeters", statement: "The ratio of perimeters of similar triangles equals the ratio of corresponding side lengths." },
            ],
            steps: [
              { part: "a", reasoning: "The angles at $A$ are common, and $DE\\parallel BC$ gives a pair of corresponding alternate interior angles equal.", working: "\\angle DAE=\\angle BAC,\\quad\\angle ADE=\\angle ABC", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Two angle pairs establish similarity by AA, in matching order.", working: "\\triangle ADE\\sim\\triangle ABC", marks: 1, markCode: "R" },
              { part: "b", reasoning: "Compare corresponding inner-to-outer horizontal side lengths.", working: "k=\\frac{AD}{AB}=\\frac{8}{12}=\\frac23", marks: 1, markCode: "M" },
              { part: "b", reasoning: "The same ratio is confirmed by the vertical legs.", working: "\\frac{AE}{AC}=\\frac69=\\frac23", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Use the right triangle with legs 12 and 9 to find the hypotenuse.", working: "BC=\\sqrt{12^2+9^2}=\\sqrt{225}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate the positive length.", working: "BC=15", marks: 1, markCode: "A" },
              { part: "d", reasoning: "The inner triangle has legs 8 and 6 and hypotenuse $DE=\\frac23(15)=10$.", working: "P_{ADE}=8+6+10=24", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Its perimeter is $\\frac23$ of the outer perimeter $12+9+15=36$, consistent with the side scale factor.", working: "24=\\frac23(36)", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $\\triangle ADE\\sim\\triangle ABC$ by AA. (b) Scale factor inner to outer is $\\frac32$. (c) $BC=15$. (d) $P_{ADE}=24$, which is $\\frac23$ of $P_{ABC}=36$.",
            commonErrors: ["Using the inverse factor for part (b) despite the requested direction.", "Assuming $DE$ is the hypotenuse of the large triangle; it belongs to the smaller triangle."],
          },
        },
      ],
    },
    {
      id: "geo-u3-triangle-proportionality-theorems",
      title: "Triangle proportionality and geometric means",
      skill: "Use side-splitter, angle bisector, and right-triangle geometric mean relationships to solve for unknown lengths.",
      lesson: {
        sections: [
          {
            heading: "Side-splitter and angle bisector theorems",
            body: `In $\\triangle ABC$, if $D$ lies on $AB$, $E$ lies on $AC$, and $DE\\parallel BC$, then the side-splitter theorem gives $\\frac{AD}{DB}=\\frac{AE}{EC}$; the smaller triangle $ADE$ is also similar to $ABC$.\n\nIf $AD$ is the bisector of $\\angle A$ and $D$ lies on $BC$, the angle bisector theorem gives $\\frac{BD}{DC}=\\frac{AB}{AC}$. Keep each segment paired with its adjacent side: the segment near $B$ corresponds to side $AB$.`,
          },
          {
            heading: "Geometric means in a right triangle",
            body: "When an altitude from the right angle meets the hypotenuse and divides it into segments $p$ and $q$, with hypotenuse $c=p+q$, three geometric mean relationships follow. If the legs are $a$ and $b$ and altitude is $h$, then $a^2=cp$, $b^2=cq$, and $h^2=pq$.\\n\\nThus each leg is the geometric mean of the hypotenuse and its adjacent projection; the altitude is the geometric mean of the two hypotenuse segments. Use positive square roots for lengths and check that the segment lengths add to the full hypotenuse.",
          },
        ],
        keyFormulas: [
          { name: "Triangle proportionality theorem", statement: "$DE\\parallel BC\\implies\\dfrac{AD}{DB}=\\dfrac{AE}{EC}$ for $D$ on $AB$ and $E$ on $AC$." },
          { name: "Angle bisector theorem", statement: "$\\dfrac{BD}{DC}=\\dfrac{AB}{AC}$ when $AD$ bisects $\\angle A$." },
          { name: "Right-triangle geometric mean", statement: "$a^2=cp$, $b^2=cq$, $h^2=pq$, where $c=p+q$." },
        ],
        workedExample: {
          problem: "A right triangle has an altitude to its hypotenuse, dividing the hypotenuse into segments $4$ and $9$. Find the altitude and the leg adjacent to the segment of length 4.",
          solution: "The full hypotenuse is $c=4+9=13$. By the geometric mean relationships, $h^2=4(9)=36$, so $h=6$. For the leg adjacent to the 4-unit projection, $a^2=13(4)=52$, so $a=\\sqrt{52}=2\\sqrt{13}$ units.",
        },
      },
      questions: [
        {
          id: "geo-u3-triangle-proportionality-theorems-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "In $\\triangle ABC$, $D$ lies on $AB$, $E$ lies on $AC$, and $DE\\parallel BC$. If $AD=4$, $DB=6$, and $AE=5$, find $EC$.",
          response: { type: "numeric", parts: [{ label: "$EC$", answer: 7.5 }] },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Triangle proportionality theorem", statement: "A parallel line dividing two sides of a triangle creates proportional side segments: $\\frac{AD}{DB}=\\frac{AE}{EC}$." },
            ],
            steps: [
              { reasoning: "Set the corresponding side-segment ratios equal.", working: "\\frac{4}{6}=\\frac{5}{EC}", marks: 1, markCode: "M" },
              { reasoning: "Cross-multiply and solve for the positive length.", working: "4EC=30\\implies EC=7.5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$EC=7.5$ units.",
            commonErrors: ["Pairing $AD$ with $AE$ and $DB$ with $EC$ in an incorrect proportion."],
          },
        },
        {
          id: "geo-u3-triangle-proportionality-theorems-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "In $\\triangle PQR$, $PS$ bisects $\\angle P$ and meets $QR$ at $S$. Given $PQ=9$, $PR=12$, and $QS=6$, find $SR$.",
          response: { type: "numeric", parts: [{ label: "$SR$", answer: 8 }] },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Angle bisector theorem", statement: "An angle bisector divides the opposite side in the ratio of the adjacent sides: $\\frac{QS}{SR}=\\frac{PQ}{PR}$." },
            ],
            steps: [
              { reasoning: "Relate the side segments to their adjacent sides using the angle bisector theorem.", working: "\\frac{6}{SR}=\\frac{9}{12}", marks: 1, markCode: "M" },
              { reasoning: "Simplify the adjacent-side ratio and solve.", working: "\\frac{6}{SR}=\\frac34\\implies 24=3SR", marks: 1, markCode: "M" },
              { reasoning: "Divide to obtain the segment length.", working: "SR=8", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$SR=8$ units.",
            commonErrors: ["Using $PQ/PR=4/3$ instead of $3/4$ for $QS/SR$."],
          },
        },
        {
          id: "geo-u3-triangle-proportionality-theorems-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "In a right triangle, an altitude to the hypotenuse divides the hypotenuse into segments of lengths $4$ cm and $12$ cm. Find the altitude length and the length of the leg adjacent to the 4 cm segment. Give exact answers.",
          response: { type: "numeric", parts: [{ label: "Altitude", answer: Math.sqrt(48), tolerance: 0.001, unit: "cm" }, { label: "Leg adjacent to 4 cm segment", answer: 8, unit: "cm" }] },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Altitude geometric mean theorem", statement: "For hypotenuse segments $p,q$, the altitude satisfies $h^2=pq$." },
              { kind: "theorem", name: "Leg geometric mean theorem", statement: "A leg squared equals the full hypotenuse times its adjacent projection on the hypotenuse." },
            ],
            steps: [
              { reasoning: "The two segments sum to the full hypotenuse.", working: "c=4+12=16", marks: 1, markCode: "B" },
              { reasoning: "Use the product of the two segments for the altitude squared.", working: "h^2=4(12)=48\\implies h=\\sqrt{48}=4\\sqrt3", marks: 1, markCode: "M" },
              { reasoning: "For the leg next to the 4 cm segment, multiply that projection by the full hypotenuse.", working: "a^2=16(4)=64", marks: 1, markCode: "M" },
              { reasoning: "Lengths are positive, so take the positive square root.", working: "a=8\\text{ cm}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Altitude $h=4\\sqrt3$ cm (approximately $6.93$ cm); adjacent leg $=8$ cm.",
            commonErrors: ["Using 12 rather than the full hypotenuse 16 in the leg relationship.", "Taking a negative square root for a length."],
          },
        },
        {
          id: "geo-u3-triangle-proportionality-theorems-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "In $\\triangle ABC$, $D$ lies on $AB$ and $E$ lies on $AC$, with $DE\\parallel BC$. A word-described diagram shows $A$ at the top, $B$ and $C$ at the base, $D$ between $A$ and $B$, and $E$ between $A$ and $C$; segment $DE$ is parallel to base $BC$. The lengths are $AD=6$, $DB=3$, $AE=8$, and $BC=15$ units.",
          parts: [
            { label: "a", prompt: "Find $EC$ using the triangle proportionality theorem.", marks: 2 },
            { label: "b", prompt: "Find $AC$ and the ratio of corresponding sides of $\\triangle ADE$ to $\\triangle ABC$.", marks: 2 },
            { label: "c", prompt: "Find $DE$.", marks: 2 },
            { label: "d", prompt: "Find the ratio of the area of $\\triangle ADE$ to the area of $\\triangle ABC$. Justify using the scale factor.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Triangle proportionality theorem", statement: "$\\frac{AD}{DB}=\\frac{AE}{EC}$ when $DE\\parallel BC$." },
              { kind: "theorem", name: "AA similarity", statement: "The parallel line creates equal corresponding angles, so $\\triangle ADE\\sim\\triangle ABC$." },
              { kind: "property", name: "Similar area ratio", statement: "The ratio of areas of similar figures is the square of their linear scale factor." },
            ],
            steps: [
              { part: "a", reasoning: "Use the proportional side segments created by the line parallel to $BC$.", working: "\\frac{6}{3}=\\frac{8}{EC}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Solve for the missing segment.", working: "6EC=24\\implies EC=4", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Add the two segments on $AC$ to obtain the full side.", working: "AC=AE+EC=8+4=12", marks: 1, markCode: "M" },
              { part: "b", reasoning: "The inner-to-outer side ratio is $AD/AB$ (or $AE/AC$).", working: "k=\\frac{6}{6+3}=\\frac23", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Corresponding sides of the similar triangles have the same ratio.", working: "\\frac{DE}{BC}=\\frac23", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Solve for the inner parallel segment.", working: "DE=\\frac23(15)=10", marks: 1, markCode: "A" },
              { part: "d", reasoning: "The triangles are similar by AA because the parallel lines create corresponding angle pairs.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Square the inner-to-outer linear factor to obtain the area ratio.", working: "\\frac{[ADE]}{[ABC]}=(\\frac23)^2", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Simplify the area ratio.", working: "\\frac{[ADE]}{[ABC]}=\\frac49", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $EC=4$. (b) $AC=12$ and inner-to-outer scale factor $\\frac23$. (c) $DE=10$. (d) Area ratio $[ADE]:[ABC]=4:9$.",
            commonErrors: ["Using $AD/DB$ as the scale factor; the scale factor compares corresponding whole sides, such as $AD/AB$.", "Using the linear scale factor instead of its square for the area ratio."],
          },
        },
      ],
    },
  ],
};
