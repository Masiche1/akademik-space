// Grade 10 Math — Geometry (Common Core). Spec for scripts/gen-us-elementary.cjs.
const P = (kind, name, statement) => [kind, name, statement];
const S = (reasoning, marks, markCode = "A", working) => ({ reasoning, marks, markCode, ...(working ? { working } : {}) });
const mcq = (difficulty, totalMarks, stem, choices, correct, principles, steps, finalAnswer, commonErrors) => ({
  difficulty, totalMarks, stem, choices, correct, principles, steps, finalAnswer, ...(commonErrors ? { commonErrors } : {}),
});
const num = (difficulty, totalMarks, stem, numeric, principles, steps, finalAnswer, commonErrors) => ({
  difficulty, totalMarks, stem, numeric, principles, steps, finalAnswer, ...(commonErrors ? { commonErrors } : {}),
});
const op = (difficulty, totalMarks, stem, principles, steps, finalAnswer, commonErrors) => ({
  difficulty, totalMarks, stem, principles, steps, finalAnswer, ...(commonErrors ? { commonErrors } : {}),
});

const lesson = (slug, title, goal, standards, vocab, concept) => ({ slug, title, goal, standards, vocab, concept });

const mathG10 = {
  id: "us-math-g10",
  exportName: "usMathG10",
  prefix: "m10",
  title: "Grade 10 Math",
  shortTitle: "Math G10",
  grade: "Grade 10",
  framework: "Common Core State Standards for Mathematics",
  description:
    "Prove triangle congruence, apply similarity and right-triangle trigonometry, reason about circles and arcs, and compute area, surface area and volume of two- and three-dimensional figures.",
  us: { subject: "math", grade: 10 },
  units: [
    {
      id: "m10-u1",
      title: "Congruence and Proof",
      description: "Use angle relationships and triangle congruence criteria to build geometric proofs.",
      lessons: [
        lesson("angle-relationships", "Angle Relationships", "I CAN use vertical angles, linear pairs and the triangle angle sum to find missing measures.", ["G-CO.10", "G-CO.11"],
          [["Vertical angles", "Opposite angles formed by two intersecting lines; they are always equal."], ["Linear pair", "Two adjacent angles that form a straight line; their measures sum to $180^\\circ$."], ["Triangle angle sum", "The three interior angles of any triangle add to $180^\\circ$."], ["Exterior angle", "An angle formed by one side of a triangle and the extension of another side; it equals the sum of the two remote interior angles."], ["Complementary / supplementary", "Pairs of angles summing to $90^\\circ$ or $180^\\circ$."]],
          {
            title: "Angle relationships",
            skill: "Chain angle facts to solve for unknown measures.",
            sections: [
              ["Pairs of angles", "When two lines intersect, **vertical angles** are equal and adjacent angles form **linear pairs** summing to $180^\\circ$. Complementary angles sum to $90^\\circ$; supplementary to $180^\\circ$. These facts let you transfer measures around a figure."],
              ["Triangles", "Every triangle's angles sum to $180^\\circ$, so knowing two angles finds the third. An **exterior angle** equals the sum of the two **remote interior angles** — often the fastest route to an unknown angle."],
            ],
            formulas: [
              ["Linear pair", "$a + b = 180^\\circ$"],
              ["Triangle sum", "$A + B + C = 180^\\circ$"],
              ["Exterior angle", "$\\text{ext} = \\text{sum of remote interior angles}$"],
            ],
            worked: {
              problem: "Two angles are supplementary. One is $30^\\circ$ more than twice the other. Find both angles.",
              solution: "Let the smaller be $x$; the larger is $2x + 30$. Then $x + 2x + 30 = 180$, so $3x = 150$ and $x = 50$. The angles are $50^\\circ$ and $130^\\circ$; check: $50 + 130 = 180$. ✓",
            },
            questions: [
              mcq("foundation", 1, "Two angles form a linear pair. One measures $64^\\circ$. What is the other?", [["a", "$26^\\circ$"], ["b", "$64^\\circ$"], ["c", "$116^\\circ$"], ["d", "$90^\\circ$"]], "c",
                [P("definition", "Linear pair", "Adjacent angles on a straight line sum to $180^\\circ$.")],
                [S("$180 - 64 = 116^\\circ$.", 1, "M")], "**(c)** $116^\\circ$", ["Using vertical angles (equal) instead of supplementary."]),
              mcq("core", 2, "In a triangle, two angles measure $47^\\circ$ and $68^\\circ$. What is the third angle?", [["a", "$55^\\circ$"], ["b", "$65^\\circ$"], ["c", "$115^\\circ$"], ["d", "$45^\\circ$"]], "b",
                [P("theorem", "Triangle sum", "Angles sum to $180^\\circ$.")],
                [S("$180 - 47 - 68 = 65^\\circ$.", 1, "M"), S("Correct third angle.", 1, "B")], "**(b)** $65^\\circ$", ["Adding instead of subtracting from $180$."]),
              num("core", 2, "An exterior angle of a triangle measures $110^\\circ$. One remote interior angle is $45^\\circ$. What is the other remote interior angle?", [{ label: "Angle", answer: 65, unit: "degrees" }],
                [P("theorem", "Exterior angle", "Exterior angle = sum of remote interior angles.")],
                [S("Other angle $= 110 - 45 = 65^\\circ$.", 1, "M"), S("Correct value.", 1, "B")], "$65^\\circ$", ["Adding the angles instead of subtracting."]),
              op("challenge", 3, "Lines $AB$ and $CD$ intersect at $E$. Angle $AEC$ measures $(5x + 10)^\\circ$ and angle $BED$ measures $(3x + 30)^\\circ$. Find $x$ and all four angles, explaining which angle facts you used.",
                [P("theorem", "Vertical angles", "$\\angle AEC = \\angle BED$ (vertical)."), P("theorem", "Linear pair", "Adjacent angles sum to $180^\\circ$.")],
                [S("Vertical angles are equal: $5x + 10 = 3x + 30$, so $x = 10$.", 1, "M"), S("Each vertical pair measures $5(10)+10 = 60^\\circ$; adjacent angles measure $180 - 60 = 120^\\circ$.", 1, "M"), S("All four angles: $60^\\circ, 120^\\circ, 60^\\circ, 120^\\circ$ — verified by linear pairs.", 1, "B")], "$x = 10$; angles $60^\\circ, 120^\\circ, 60^\\circ, 120^\\circ$", ["Setting vertical angles supplementary instead of equal."]),
            ],
          }),
        lesson("triangle-congruence", "Triangle Congruence Criteria", "I CAN identify and apply SSS, SAS, ASA, AAS and HL to prove triangles congruent.", ["G-CO.7", "G-CO.8"],
          [["Congruent", "Same size and shape; all corresponding sides and angles equal."], ["SSS", "Three pairs of equal sides prove congruence."], ["SAS", "Two sides and the included angle equal prove congruence."], ["ASA / AAS", "Two angles and a side equal prove congruence (AAS uses a non-included side)."], ["HL", "Right triangles with equal hypotenuse and one leg are congruent."]],
          {
            title: "Congruence criteria",
            skill: "Match given information to the correct congruence postulate.",
            sections: [
              ["The five criteria", "Triangles are congruent if **SSS** (three sides), **SAS** (two sides and the *included* angle), **ASA** (two angles and the included side), **AAS** (two angles and a non-included side), or **HL** (right triangles: hypotenuse and leg) match. SSA is **not** a valid criterion — it can produce two different triangles."],
              ["Included vs non-included", "In SAS the angle must be *between* the two sides; in ASA the side must be *between* the two angles. If the given parts don't match a criterion, the triangles may still be congruent by a two-step proof using vertical angles or a shared side."],
            ],
            formulas: [
              ["Valid criteria", "SSS, SAS, ASA, AAS, HL — never SSA"],
              ["CPCTC", "Congruent triangles have Corresponding Parts Congruent"],
            ],
            worked: {
              problem: "Triangles $ABC$ and $DEF$ have $AB = DE$, $BC = EF$, and $\\angle B = \\angle E$. Are they congruent?",
              solution: "Yes — two sides and the included angle ($\\angle B$ is between $AB$ and $BC$) satisfy SAS.",
            },
            questions: [
              mcq("foundation", 1, "Which criterion requires the angle to be *between* the two sides?", [["a", "SSS"], ["b", "SAS"], ["c", "ASA"], ["d", "HL"]], "b",
                [P("definition", "SAS", "Two sides and the included angle.")],
                [S("SAS requires the angle included between the two given sides.", 1, "A")], "**(b)** SAS", ["Confusing SAS with SSA, which is invalid."]),
              mcq("core", 2, "Right triangles $PQR$ and $STU$ have hypotenuses $PR = SU$ and legs $QR = TU$. Which criterion proves them congruent?", [["a", "SAS"], ["b", "ASA"], ["c", "HL"], ["d", "SSS"]], "c",
                [P("definition", "HL", "Right triangles: hypotenuse and one leg.")],
                [S("Equal hypotenuses and one equal leg in right triangles is exactly HL.", 1, "M"), S("Correct criterion.", 1, "B")], "**(c)** HL", ["Reaching for SSS when only two sides are known."]),
              op("core", 2, "In triangles $ABC$ and $XYZ$: $AB = XY$, $\\angle A = \\angle X$, $\\angle C = \\angle Z$. Name the congruence criterion that applies.",
                [P("definition", "AAS", "Two angles and a non-included side.")],
                [S("Two angles ($A$, $C$) plus side $AB$ — the side is not between them, so AAS.", 1, "M"), S("Correct criterion.", 1, "B")], "AAS", ["Calling it ASA because the side is present — check whether it is included."]),
              op("challenge", 3, "Segments $AC$ and $BD$ bisect each other at $E$. Prove that $\\triangle AEB \\cong \\triangle CED$ and state what CPCTC lets you conclude about $AB$ and $CD$.",
                [P("given", "Bisecting segments", "$AE = CE$ and $BE = DE$ by definition of bisect."), P("theorem", "Vertical angles", "$\\angle AEB = \\angle CED$."), P("method", "SAS + CPCTC", "Two sides and included angle, then corresponding parts.")],
                [S("$AE = CE$ and $BE = DE$ (bisected), and $\\angle AEB = \\angle CED$ (vertical angles).", 1, "M"), S("SAS proves $\\triangle AEB \\cong \\triangle CED$.", 1, "M"), S("CPCTC gives $AB = CD$ and $\\angle EAB = \\angle ECD$.", 1, "B")], "$\\triangle AEB \\cong \\triangle CED$ by SAS; $AB = CD$ by CPCTC", ["Claiming congruence without citing the vertical angles."]),
            ],
          }),
        lesson("geometric-proofs", "Writing Geometric Proofs", "I CAN write a two-column proof using definitions, postulates and theorems.", ["G-CO.9", "G-CO.11", "G-SRT.5"],
          [["Two-column proof", "Statements on the left, reasons on the right, aligned row by row."], ["Postulate", "A rule accepted without proof, such as SAS or the segment addition postulate."], ["Theorem", "A statement proven from postulates and definitions, such as vertical angles are equal."], ["Reflexive property", "$XY = XY$ — a segment or angle equals itself; often the missing piece in proofs."], ["Transitive / substitution", "If $a = b$ and $b = c$ then $a = c$; replace equals with equals."]],
          {
            title: "Proof structure",
            skill: "Chain statements and reasons from givens to the conclusion.",
            sections: [
              ["How proofs work", "A proof starts from the **givens** and ends at the **prove** statement. Each row pairs a **statement** (what is true) with a **reason** (why it is true): a definition, postulate, theorem, or algebraic property. The reflexive property — a shared side equals itself — is the most common hidden given."],
              ["Common proof moves", "Look for vertical angles, linear pairs, a shared side (reflexive), midpoint/bisector definitions, and CPCTC after proving triangles congruent. Flow proofs tell the same story in boxes and arrows; both require every claim to have a legal reason."],
            ],
            formulas: [
              ["Proof row", "Statement + reason (definition, postulate, theorem, property)"],
              ["Reflexive property", "$AB = AB$ — use for shared sides and angles"],
            ],
            worked: {
              problem: "Given $M$ is the midpoint of $AB$ and $N$ is the midpoint of $CD$, with $AB = CD$. Prove $AM = CN$.",
              solution: "1. $AM = \\frac{1}{2}AB$ and $CN = \\frac{1}{2}CD$ (midpoint definition). 2. $AB = CD$ (given). 3. $AM = CN$ (substitution / half of equals).",
            },
            questions: [
              mcq("foundation", 1, "In a two-column proof, each row contains ___.", [["a", "a statement and a reason"], ["b", "two statements"], ["c", "a diagram and a label"], ["d", "only algebra"]], "a",
                [P("definition", "Two-column proof", "Statements paired with justifications.")],
                [S("Every row pairs what is true with why it is true.", 1, "A")], "**(a)** a statement and a reason", ["Thinking proofs are just lists of facts."]),
              mcq("core", 2, "Which reason justifies 'vertical angles are congruent' in a proof?", [["a", "Reflexive property"], ["b", "Vertical angles theorem"], ["c", "SAS postulate"], ["d", "Segment addition"]], "b",
                [P("definition", "Theorem vs property", "Vertical angles equality is a proven theorem.")],
                [S("The vertical angles theorem states opposite angles at an intersection are congruent.", 1, "M"), S("Correct reason.", 1, "B")], "**(b)** Vertical angles theorem", ["Citing a postulate for something that is a theorem."]),
              op("core", 2, "A proof needs to show a shared side $PQ$ equals itself. Name the property that is cited.",
                [P("definition", "Reflexive property", "Any quantity equals itself.")],
                [S("$PQ = PQ$ is the reflexive property of equality.", 1, "M"), S("Correct property.", 1, "B")], "Reflexive property", ["Calling it symmetric or transitive."]),
              op("challenge", 3, "Given: $\\overline{AB} \\cong \\overline{CD}$, $M$ midpoint of $AB$, $N$ midpoint of $CD$. Prove $AM \\cong CN$ in two columns (at least 3 rows).",
                [P("given", "Midpoint", "Midpoint divides a segment into two equal parts."), P("property", "Substitution", "Equal halves of equal wholes are equal.")],
                [S("1. $AM = \\frac{1}{2}AB$, $CN = \\frac{1}{2}CD$ — midpoint definition.", 1, "M"), S("2. $AB = CD$ — given.", 1, "M"), S("3. $AM = CN$ — substitution (halves of equal segments). Conclusion reached.", 1, "B")], "$AM \\cong CN$ via midpoint definition + substitution", ["Using the whole segments' congruence without halving both sides."]),
            ],
          }),
        ],
    },
    {
      id: "m10-u2",
      title: "Similarity and Right Triangles",
      description: "Apply similarity criteria, the Pythagorean theorem and right-triangle trigonometry to solve problems.",
      lessons: [
        lesson("similarity-criteria", "Similarity Criteria", "I CAN prove triangles similar using AA, SAS and SSS similarity.", ["G-SRT.2", "G-SRT.3"],
          [["Similar", "Same shape, possibly different size; corresponding angles equal and sides proportional."], ["AA similarity", "Two pairs of equal angles prove similarity — the third follows automatically."], ["SAS similarity", "Two proportional sides and the included angle equal prove similarity."], ["SSS similarity", "All three pairs of sides proportional prove similarity."], ["Scale factor", "The constant ratio of corresponding sides, $k$."]],
          {
            title: "Proving similarity",
            skill: "Choose the correct similarity criterion from given information.",
            sections: [
              ["AA is the workhorse", "Because a triangle's angles sum to $180^\\circ$, matching **two** angles forces the third to match too — so AA similarity is the most-used criterion. Parallel lines cut by a transversal create equal corresponding angles, making AA the standard tool for shadow and map problems."],
              ["Side-based criteria", "**SAS~** needs two sides in proportion *and* the included angle equal. **SSS~** needs all three side ratios equal to the same scale factor $k$. Congruence is the special case $k = 1$."],
            ],
            formulas: [
              ["AA", "Two pairs of equal angles $\\Rightarrow$ similar"],
              ["Scale factor", "$k = \\frac{\\text{image side}}{\\text{original side}}$"],
            ],
            worked: {
              problem: "Triangle $ABC$ has angles $50^\\circ, 60^\\circ, 70^\\circ$. Triangle $DEF$ has angles $50^\\circ, 60^\\circ, 70^\\circ$ but sides twice as long. Are they similar?",
              solution: "Yes — AA similarity (two equal angles suffice). Scale factor $k = 2$.",
            },
            questions: [
              mcq("foundation", 1, "Two triangles share two pairs of equal angles. They are ___.", [["a", "congruent only if sides match"], ["b", "similar by AA"], ["c", "not necessarily related"], ["d", "equal in area"]], "b",
                [P("theorem", "AA similarity", "Two angle pairs force similarity.")],
                [S("AA similarity applies — the third angles must also match.", 1, "A")], "**(b)** similar by AA", ["Demanding a third angle or side condition that AA doesn't need."]),
              mcq("core", 2, "Triangles have sides $6, 8, 10$ and $9, 12, 15$. They are ___.", [["a", "congruent"], ["b", "similar with $k = \\frac{3}{2}$"], ["c", "similar with $k = 5$"], ["d", "neither similar nor congruent"]], "b",
                [P("method", "Check ratios", "$\\frac{9}{6} = \\frac{12}{8} = \\frac{15}{10} = 1.5$.")],
                [S("All three ratios equal $1.5$, so SSS~ similarity with scale factor $\\frac{3}{2}$.", 1, "M"), S("Correct conclusion.", 1, "B")], "**(b)** similar, $k = \\frac{3}{2}$", ["Comparing $15 - 6 = 9$ (difference) instead of ratios."]),
              num("core", 2, "A triangle's sides are $4, 6, 8$. A similar triangle's shortest side is $10$. What is its longest side?", [{ label: "Longest side", answer: 20 }],
                [P("method", "Scale factor", "$k = \\frac{10}{4} = 2.5$; longest $= 8 \\times 2.5$.")],
                [S("$k = 2.5$; longest side $= 20$.", 1, "M"), S("Correct value.", 1, "B")], "$20$", ["Applying the scale factor to the wrong corresponding side."]),
              op("challenge", 3, "A $2$ m stick casts a $3$ m shadow. At the same time, a tree casts a $21$ m shadow. How tall is the tree? Explain the geometric reason the triangles are similar.",
                [P("model", "Similar triangles", "Sun's rays are parallel, so corresponding angles are equal — AA similarity."), P("method", "Proportion", "Height-to-shadow ratio is constant.")],
                [S("The stick and its shadow form a right triangle; the tree and its shadow form another, with equal angles from parallel sun rays — AA similar.", 1, "M"), S("Set up $\\frac{h}{21} = \\frac{2}{3}$.", 1, "M"), S("$h = 14$ m.", 1, "B")], "$14$ m", ["Adding shadow lengths instead of using a ratio."]),
            ],
          }),
        lesson("pythagorean-theorem", "The Pythagorean Theorem", "I CAN use the Pythagorean theorem to find missing sides and distances.", ["G-SRT.4", "G-SRT.8", "8.G.B.7"],
          [["Pythagorean theorem", "$a^2 + b^2 = c^2$ for right triangles, where $c$ is the hypotenuse."], ["Hypotenuse", "The side opposite the right angle; always the longest side."], ["Leg", "Either of the two sides forming the right angle."], ["Converse", "If $a^2 + b^2 = c^2$ then the triangle is right — used to test for right angles."], ["Distance formula", "$d = \\sqrt{(x_2-x_1)^2 + (y_2-y_1)^2}$ — the Pythagorean theorem on a coordinate grid."]],
          {
            title: "Pythagorean theorem",
            skill: "Find a missing side and apply the theorem in coordinate and real contexts.",
            sections: [
              ["Finding sides", "In a right triangle, $a^2 + b^2 = c^2$. Missing hypotenuse: $c = \\sqrt{a^2 + b^2}$. Missing leg: $a = \\sqrt{c^2 - b^2}$ — note the **minus** sign when solving for a leg. The $3$-$4$-$5$ and $5$-$12$-$13$ triples are worth memorizing."],
              ["Distance on the plane", "The distance between $(x_1, y_1)$ and $(x_2, y_2)$ is the hypotenuse of a right triangle with legs $|x_2 - x_1|$ and $|y_2 - y_1|$ — the distance formula is the Pythagorean theorem in disguise."],
            ],
            formulas: [
              ["Pythagorean theorem", "$a^2 + b^2 = c^2$"],
              ["Leg", "$a = \\sqrt{c^2 - b^2}$"],
              ["Distance", "$d = \\sqrt{(\\Delta x)^2 + (\\Delta y)^2}$"],
            ],
            worked: {
              problem: "A right triangle has legs $9$ and $12$. Find the hypotenuse.",
              solution: "$c = \\sqrt{9^2 + 12^2} = \\sqrt{81 + 144} = \\sqrt{225} = 15$ — a $3$-$4$-$5$ triple scaled by $3$.",
            },
            questions: [
              mcq("foundation", 1, "A right triangle has legs $6$ and $8$. The hypotenuse is ___.", [["a", "$10$"], ["b", "$14$"], ["c", "$48$"], ["d", "$\\sqrt{28}$"]], "a",
                [P("formula", "Pythagorean", "$c = \\sqrt{36 + 64} = \\sqrt{100} = 10$.")],
                [S("$6$-$8$-$10$ is a scaled $3$-$4$-$5$ triple.", 1, "M")], "**(a)** $10$", ["Adding the legs instead of using squares."]),
              mcq("core", 2, "The hypotenuse of a right triangle is $13$ and one leg is $5$. What is the other leg?", [["a", "$8$"], ["b", "$12$"], ["c", "$18$"], ["d", "$\\sqrt{194}$"]], "b",
                [P("formula", "Missing leg", "$a = \\sqrt{169 - 25} = \\sqrt{144} = 12$.")],
                [S("$5$-$12$-$13$ triple: other leg $= 12$.", 1, "M"), S("Correct leg.", 1, "B")], "**(b)** $12$", ["Adding $169 + 25$ instead of subtracting."]),
              num("core", 2, "Find the distance between $(1, 2)$ and $(7, 10)$.", [{ label: "Distance", answer: 10 }],
                [P("formula", "Distance", "$d = \\sqrt{6^2 + 8^2} = \\sqrt{100} = 10$.")],
                [S("$\\Delta x = 6$, $\\Delta y = 8$; $d = \\sqrt{36+64} = 10$.", 1, "M"), S("Correct distance.", 1, "B")], "$10$", ["Forgetting to square the differences."]),
              op("challenge", 3, "A rectangular TV screen is $48$ inches wide and $27$ inches tall (measured corner to corner the diagonal is the advertised size). Find the diagonal length and determine whether a triangle with sides $8, 15, 17$ is a right triangle using the converse.",
                [P("formula", "Pythagorean", "$d = \\sqrt{48^2 + 27^2}$."), P("theorem", "Converse", "Check $a^2 + b^2 = c^2$.")],
                [S("Diagonal: $d = \\sqrt{2304 + 729} = \\sqrt{3033} \\approx 55.1$ inches.", 1, "M"), S("For $8,15,17$: $64 + 225 = 289 = 17^2$ ✓.", 1, "M"), S("Yes — it is a right triangle by the converse.", 1, "B")], "$\\approx 55.1$ in; yes, right triangle", ["Comparing $17$ to $8 + 15$ instead of checking squares."]),
            ],
          }),
        lesson("right-triangle-trig", "Right Triangle Trigonometry", "I CAN use sine, cosine and tangent ratios to solve right triangles.", ["G-SRT.6", "G-SRT.7", "G-SRT.8"],
          [["Sine", "$\\sin \\theta = \\frac{\\text{opposite}}{\\text{hypotenuse}}$."], ["Cosine", "$\\cos \\theta = \\frac{\\text{adjacent}}{\\text{hypotenuse}}$."], ["Tangent", "$\\tan \\theta = \\frac{\\text{opposite}}{\\text{adjacent}}$."], ["SOH-CAH-TOA", "Mnemonic for the three ratios."], ["Inverse trig", "$\\sin^{-1}, \\cos^{-1}, \\tan^{-1}$ find an angle from a ratio."]],
          {
            title: "Trig ratios",
            skill: "Identify opposite/adjacent relative to the reference angle and solve for sides or angles.",
            sections: [
              ["The three ratios", "Relative to a chosen acute angle $\\theta$: **opposite** is across from it, **adjacent** is next to it (not the hypotenuse), and **hypotenuse** is always the longest side. SOH-CAH-TOA gives sine, cosine, tangent respectively. The ratios depend only on the angle, not the triangle's size."],
              ["Solving triangles", "With two sides known, pick the ratio connecting them: opposite+adjacent → tangent; opposite+hypotenuse → sine; adjacent+hypotenuse → cosine. With a side and an angle, use **inverse** trig ($\\tan^{-1}$ etc.) to find missing angles, or multiply by the hypotenuse to find sides."],
            ],
            formulas: [
              ["SOH-CAH-TOA", "$\\sin = \\frac{opp}{hyp}$, $\\cos = \\frac{adj}{hyp}$, $\\tan = \\frac{opp}{adj}$"],
              ["Find angle", "$\\theta = \\tan^{-1}\\left(\\frac{opp}{adj}\\right)$"],
            ],
            worked: {
              problem: "A right triangle has opposite side $5$, adjacent side $12$, hypotenuse $13$ relative to angle $\\theta$. Find $\\sin\\theta$, $\\cos\\theta$ and $\\theta$.",
              solution: "$\\sin\\theta = \\frac{5}{13} \\approx 0.385$, $\\cos\\theta = \\frac{12}{13} \\approx 0.923$, $\\tan\\theta = \\frac{5}{12} \\approx 0.417$. $\\theta = \\tan^{-1}(0.417) \\approx 22.6^\\circ$.",
            },
            questions: [
              mcq("foundation", 1, "In a right triangle, $\\sin\\theta$ equals ___.", [["a", "$\\frac{\\text{adjacent}}{\\text{hypotenuse}}$"], ["b", "$\\frac{\\text{opposite}}{\\text{hypotenuse}}$"], ["c", "$\\frac{\\text{opposite}}{\\text{adjacent}}$"], ["d", "$\\frac{\\text{hypotenuse}}{\\text{opposite}}$"]], "b",
                [P("definition", "Sine", "SOH: opposite over hypotenuse.")],
                [S("Sine = opposite/hypotenuse.", 1, "A")], "**(b)** $\\frac{\\text{opposite}}{\\text{hypotenuse}}$", ["Mixing up sine and cosine."]),
              mcq("core", 2, "A right triangle has angle $\\theta$ with opposite $8$ and hypotenuse $17$. What is $\\sin\\theta$?", [["a", "$\\frac{8}{17}$"], ["b", "$\\frac{15}{17}$"], ["c", "$\\frac{8}{15}$"], ["d", "$\\frac{17}{8}$"]], "a",
                [P("formula", "Sine", "$\\sin\\theta = \\frac{opp}{hyp} = \\frac{8}{17}$.")],
                [S("Opposite $8$, hypotenuse $17$: ratio $\\frac{8}{17}$.", 1, "M"), S("Correct ratio.", 1, "B")], "**(a)** $\\frac{8}{17}$", ["Using the adjacent side $15$ instead of hypotenuse."]),
              num("core", 2, "From a point $20$ m from a building, the angle of elevation to the roof is $35^\\circ$. How tall is the building? Use $\\tan 35^\\circ \\approx 0.700$.", [{ label: "Height", answer: 14, unit: "m" }],
                [P("model", "Tangent", "$\\tan\\theta = \\frac{opp}{adj} = \\frac{h}{20}$.")],
                [S("$h = 20 \\times 0.700 = 14$ m.", 1, "M"), S("Correct height.", 1, "B")], "$14$ m", ["Dividing by $\\tan$ instead of multiplying."]),
              op("challenge", 3, "A ramp rises $1.5$ m over a horizontal run of $8$ m. Find the angle of inclination to the nearest degree and the length of the ramp.",
                [P("model", "Right triangle", "Rise = opposite, run = adjacent, ramp = hypotenuse."), P("method", "Trig + Pythagorean", "$\\tan\\theta = \\frac{1.5}{8}$; $L = \\sqrt{1.5^2 + 8^2}$.")],
                [S("$\\theta = \\tan^{-1}(1.5/8) = \\tan^{-1}(0.1875) \\approx 10.6^\\circ \\approx 11^\\circ$.", 1, "M"), S("$L = \\sqrt{2.25 + 64} = \\sqrt{66.25} \\approx 8.14$ m.", 1, "M"), S("Angle $\\approx 11^\\circ$, ramp $\\approx 8.14$ m.", 1, "B")], "$\\approx 11^\\circ$; $\\approx 8.14$ m", ["Using sine with the run as hypotenuse."]),
            ],
          }),
        ],
    },
    {
      id: "m10-u3",
      title: "Circles, Area and Volume",
      description: "Apply circle theorems, compute arc length and sector area, and find surface area and volume of solids.",
      lessons: [
        lesson("circle-theorems", "Circle Theorems", "I CAN apply central and inscribed angle relationships in circles.", ["G-C.2", "G-C.5"],
          [["Central angle", "An angle whose vertex is the center; its measure equals its intercepted arc."], ["Inscribed angle", "An angle whose vertex is on the circle; it equals half its intercepted arc."], ["Intercepted arc", "The arc 'inside' an angle that the angle opens toward."], ["Inscribed angle theorem", "An inscribed angle is half the measure of its intercepted arc (and half the central angle on the same arc)."], ["Chord", "A segment joining two points on the circle."]],
          {
            title: "Angles in circles",
            skill: "Relate arcs, central angles and inscribed angles.",
            sections: [
              ["Central vs inscribed", "A **central angle** equals its intercepted arc exactly. An **inscribed angle** — vertex on the circle — equals **half** that arc. So an inscribed angle is always half the central angle subtending the same arc. An angle inscribed in a **semicircle** is always $90^\\circ$."],
              ["Using the relationships", "The arc measure equals the central angle; the inscribed angle is half the arc. Given an inscribed angle, double it to get the arc; given the arc, halve it for the inscribed angle. These relations let you chain unknowns around a circle figure."],
            ],
            formulas: [
              ["Central angle", "$\\text{central} = \\text{arc measure}$"],
              ["Inscribed angle", "$\\text{inscribed} = \\frac{1}{2} \\times \\text{arc} = \\frac{1}{2} \\times \\text{central}$"],
              ["Semicircle", "Angle inscribed in a semicircle $= 90^\\circ$"],
            ],
            worked: {
              problem: "A central angle intercepts an arc of $80^\\circ$. What is an inscribed angle on the same arc?",
              solution: "Inscribed angle $= \\frac{1}{2} \\times 80^\\circ = 40^\\circ$.",
            },
            questions: [
              mcq("foundation", 1, "An inscribed angle intercepts an arc of $100^\\circ$. The angle measures ___.", [["a", "$100^\\circ$"], ["b", "$50^\\circ$"], ["c", "$200^\\circ$"], ["d", "$25^\\circ$"]], "b",
                [P("theorem", "Inscribed angle", "Inscribed angle = half the intercepted arc.")],
                [S("$100 / 2 = 50^\\circ$.", 1, "M")], "**(b)** $50^\\circ$", ["Using the full arc instead of half."]),
              mcq("core", 2, "A central angle and an inscribed angle intercept the same arc. If the inscribed angle is $32^\\circ$, the arc measures ___.", [["a", "$16^\\circ$"], ["b", "$32^\\circ$"], ["c", "$64^\\circ$"], ["d", "$128^\\circ$"]], "c",
                [P("theorem", "Arc relationship", "Arc = $2 \\times$ inscribed angle.")],
                [S("Arc $= 2 \\times 32 = 64^\\circ$.", 1, "M"), S("Correct arc.", 1, "B")], "**(c)** $64^\\circ$", ["Halving instead of doubling."]),
              num("core", 2, "An angle is inscribed in a semicircle. What is its measure in degrees?", [{ label: "Angle", answer: 90, unit: "degrees" }],
                [P("theorem", "Thales", "Angle in a semicircle is right.")],
                [S("$90^\\circ$.", 1, "M"), S("Correct value.", 1, "B")], "$90^\\circ$", ["Applying half-arc rule to a $180^\\circ$ arc incorrectly — result is still $90^\\circ$, but the reason is Thales' theorem."]),
              op("challenge", 3, "In a circle, central angle $AOB$ intercepts arc $AB$ of $110^\\circ$. Point $C$ is on the major arc. Find $\\angle ACB$, then find arc $AB$'s measure if $\\angle ACB = 38^\\circ$ instead.",
                [P("theorem", "Inscribed angle", "Inscribed = half the intercepted arc."), P("method", "Invert", "Arc = $2 \\times$ inscribed.")],
                [S("$\\angle ACB = \\frac{1}{2} \\times 110^\\circ = 55^\\circ$.", 1, "M"), S("If $\\angle ACB = 38^\\circ$, then arc $AB = 2 \\times 38 = 76^\\circ$.", 1, "M"), S("Both directions of the relationship applied correctly.", 1, "B")], "$55^\\circ$; arc $= 76^\\circ$", ["Using the major arc instead of the intercepted minor arc."]),
            ],
          }),
        lesson("arc-length-sector-area", "Arc Length and Sector Area", "I CAN compute arc length and sector area using proportions of a circle.", ["G-C.5", "G-GMD.1"],
          [["Arc length", "The distance along a circle's edge: $s = r\\theta$ with $\\theta$ in radians, or $s = 2\\pi r \\cdot \\frac{\\theta}{360}$ in degrees."], ["Sector", "A 'pie slice' of a circle bounded by two radii and an arc."], ["Sector area", "The fraction $\\frac{\\theta}{360}$ of the full circle area $\\pi r^2$."], ["Radian", "Angle measure where the arc length equals the radius; $180^\\circ = \\pi$ radians."], ["Proportion method", "Arc/sector quantities are the same fraction of the whole as the central angle is of $360^\\circ$."]],
          {
            title: "Arc length and sectors",
            skill: "Apply the fraction $\\frac{\\theta}{360}$ to circumference and area.",
            sections: [
              ["Arc length", "The full circumference is $2\\pi r$. An arc spanning $\\theta$ degrees is the fraction $\\frac{\\theta}{360}$ of that: $s = 2\\pi r \\cdot \\frac{\\theta}{360} = \\frac{\\pi r \\theta}{180}$. In radians it simplifies beautifully to $s = r\\theta$."],
              ["Sector area", "The full area is $\\pi r^2$, so a sector's area is $A = \\pi r^2 \\cdot \\frac{\\theta}{360}$. Equivalently $A = \\frac{1}{2}rs$ — half the radius times the arc length, just like a triangle's $\\frac{1}{2}bh$."],
            ],
            formulas: [
              ["Arc length (deg)", "$s = 2\\pi r \\cdot \\frac{\\theta}{360}$"],
              ["Arc length (rad)", "$s = r\\theta$"],
              ["Sector area", "$A = \\pi r^2 \\cdot \\frac{\\theta}{360} = \\frac{1}{2}rs$"],
            ],
            worked: {
              problem: "A circle has radius $6$ cm. Find the arc length and sector area for a $60^\\circ$ central angle.",
              solution: "Arc: $s = 2\\pi(6) \\cdot \\frac{60}{360} = 12\\pi \\cdot \\frac{1}{6} = 2\\pi$ cm. Sector: $A = \\pi(36) \\cdot \\frac{1}{6} = 6\\pi$ cm².",
            },
            questions: [
              mcq("foundation", 1, "A semicircle ($\\theta = 180^\\circ$) of radius $r$ has arc length ___.", [["a", "$\\pi r$"], ["b", "$2\\pi r$"], ["c", "$\\frac{\\pi r}{2}$"], ["d", "$4\\pi r$"]], "a",
                [P("formula", "Arc length", "$s = 2\\pi r \\cdot \\frac{180}{360} = \\pi r$.")],
                [S("Half the circumference $2\\pi r$ is $\\pi r$.", 1, "M")], "**(a)** $\\pi r$", ["Using the full circumference."]),
              mcq("core", 2, "A circle of radius $9$ has a sector with central angle $80^\\circ$. What fraction of the circle's area is the sector?", [["a", "$\\frac{80}{180}$"], ["b", "$\\frac{80}{360}$"], ["c", "$\\frac{1}{80}$"], ["d", "$\\frac{80}{2\\pi}$"]], "b",
                [P("formula", "Sector proportion", "Sector area fraction = $\\frac{\\theta}{360}$.")],
                [S("$\\frac{80}{360} = \\frac{2}{9}$ of the area.", 1, "M"), S("Correct fraction.", 1, "B")], "**(b)** $\\frac{80}{360}$", ["Dividing by $180$ instead of $360$."]),
              op("core", 2, "A circle has radius $4$. What is the arc length of a $90^\\circ$ arc? Give an exact answer in terms of $\\pi$.",
                [P("formula", "Arc length", "$s = 2\\pi(4) \\cdot \\frac{90}{360} = 8\\pi \\cdot \\frac{1}{4} = 2\\pi$.")],
                [S("$s = 2\\pi$.", 1, "M"), S("Correct exact value.", 1, "B")], "$2\\pi$", ["Reporting a decimal approximation instead of exact."]),
              op("challenge", 3, "A pizza has radius $15$ cm. One slice has a central angle of $40^\\circ$. Find the slice's crust length (arc) and area, then find how many such slices make a whole pizza.",
                [P("formula", "Arc + sector", "$s = 2\\pi r \\cdot \\frac{\\theta}{360}$; $A = \\pi r^2 \\cdot \\frac{\\theta}{360}$."), P("method", "Count", "$360 / 40 = 9$ slices.")],
                [S("Arc: $s = 2\\pi(15) \\cdot \\frac{40}{360} = 30\\pi \\cdot \\frac{1}{9} = \\frac{10\\pi}{3} \\approx 10.47$ cm.", 1, "M"), S("Area: $A = \\pi(225) \\cdot \\frac{1}{9} = 25\\pi \\approx 78.5$ cm².", 1, "M"), S("$360/40 = 9$ slices per pizza.", 1, "B")], "Arc $\\approx 10.47$ cm; area $\\approx 78.5$ cm²; $9$ slices", ["Using $\\theta$ in radians without converting."]),
            ],
          }),
        lesson("surface-area-volume", "Surface Area and Volume", "I CAN compute surface area and volume of prisms, pyramids, cylinders, cones and spheres.", ["G-GMD.3", "G-GMD.1", "G-MG.2"],
          [["Volume", "The space inside a solid, in cubic units."], ["Surface area", "The total area of all faces, in square units."], ["Prism / cylinder", "Volume $=$ base area $\\times$ height."], ["Pyramid / cone", "Volume $= \\frac{1}{3} \\times$ base area $\\times$ height."], ["Sphere", "Volume $= \\frac{4}{3}\\pi r^3$; surface area $= 4\\pi r^2$."]],
          {
            title: "Area and volume of solids",
            skill: "Select the right formula and compute surface area or volume.",
            sections: [
              ["Prisms and cylinders", "Both fill at a constant cross-section: $V = Bh$ where $B$ is the base area. A cylinder is a circular prism ($B = \\pi r^2$); a rectangular prism has $B = lw$. Surface area sums all faces — for a cylinder, $2\\pi r^2 + 2\\pi rh$."],
              ["Pyramids, cones, spheres", "Pyramids and cones hold exactly **one third** of the corresponding prism or cylinder: $V = \\frac{1}{3}Bh$. Cones use $B = \\pi r^2$. A sphere has $V = \\frac{4}{3}\\pi r^3$ and surface area $4\\pi r^2$ — memorize these two."],
            ],
            formulas: [
              ["Prism / cylinder", "$V = Bh$"],
              ["Pyramid / cone", "$V = \\frac{1}{3}Bh$"],
              ["Sphere", "$V = \\frac{4}{3}\\pi r^3$; $SA = 4\\pi r^2$"],
            ],
            worked: {
              problem: "Find the volume of a cone with radius $3$ and height $10$.",
              solution: "$V = \\frac{1}{3} \\pi (3^2)(10) = \\frac{1}{3} \\pi \\cdot 90 = 30\\pi \\approx 94.2$ cubic units.",
            },
            questions: [
              mcq("foundation", 1, "The volume of a cylinder is ___.", [["a", "$\\pi r^2 h$"], ["b", "$2\\pi rh$"], ["c", "$\\frac{1}{3}\\pi r^2 h$"], ["d", "$4\\pi r^3$"]], "a",
                [P("formula", "Cylinder", "$V = Bh = \\pi r^2 h$.")],
                [S("Base area times height.", 1, "A")], "**(a)** $\\pi r^2 h$", ["Using the cone formula $\\frac{1}{3}\\pi r^2 h$."]),
              mcq("core", 2, "A sphere has radius $6$. Its volume is ___.", [["a", "$288\\pi$"], ["b", "$144\\pi$"], ["c", "$36\\pi$"], ["d", "$216\\pi$"]], "a",
                [P("formula", "Sphere", "$V = \\frac{4}{3}\\pi r^3 = \\frac{4}{3}\\pi(216) = 288\\pi$.")],
                [S("$r^3 = 216$; $\\frac{4}{3} \\times 216 = 288$.", 1, "M"), S("Correct volume.", 1, "B")], "**(a)** $288\\pi$", ["Using $r^2$ instead of $r^3$."]),
              num("core", 2, "A rectangular prism is $5 \\times 3 \\times 8$. What is its volume?", [{ label: "Volume", answer: 120, unit: "cubic units" }],
                [P("formula", "Prism", "$V = lwh = 5 \\times 3 \\times 8$.")],
                [S("$V = 120$ cubic units.", 1, "M"), S("Correct value.", 1, "B")], "$120$", ["Adding dimensions instead of multiplying."]),
              op("challenge", 3, "An ice-cream cone (cone) has radius $4$ cm and height $12$ cm. A scoop of ice cream is a hemisphere of radius $4$ cm sitting on top. Find the total volume of ice cream + cone, and state whether the cone's volume formula applies to the hemisphere.",
                [P("formula", "Cone + hemisphere", "$V_{cone} = \\frac{1}{3}\\pi r^2 h$; hemisphere $= \\frac{2}{3}\\pi r^3$."), P("concept", "Half sphere", "Hemisphere is half a sphere.")],
                [S("Cone: $V = \\frac{1}{3}\\pi(16)(12) = 64\\pi$ cm³.", 1, "M"), S("Hemisphere: $\\frac{1}{2} \\cdot \\frac{4}{3}\\pi(64) = \\frac{128\\pi}{3}$ cm³.", 1, "M"), S("Total $= 64\\pi + \\frac{128\\pi}{3} = \\frac{320\\pi}{3} \\approx 335$ cm³.", 1, "B")], "$\\frac{320\\pi}{3} \\approx 335$ cm³", ["Using the full sphere formula for the hemisphere."]),
            ],
          }),
        ],
    },
  ],
};

module.exports = { courses: [mathG10] };
