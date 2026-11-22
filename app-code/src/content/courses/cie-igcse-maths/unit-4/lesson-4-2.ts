import type { Lesson } from "../../../types.ts";

export const lesson42: Lesson = {
  id: "ciem-u4-lesson-4-2",
  code: "4-2",
  title: "Congruence and Similarity",
  goal: "I CAN prove triangles congruent using SSS, SAS, ASA, AAS and RHS, and use similarity to find missing lengths and scale factors for area and volume.",
  standards: ["0580 4.4", "0580 4.5", "0580 4.6"],
  vocabulary: [
    { term: "Congruent", definition: "Identical in shape and size; all corresponding sides and angles are equal." },
    { term: "Similar", definition: "Same shape but not necessarily the same size; corresponding angles equal and sides in the same ratio." },
    { term: "Corresponding sides", definition: "Sides in the same position in two similar (or congruent) figures." },
    { term: "Scale factor", definition: "The ratio of a length in an image to the corresponding length in the original." },
    { term: "RHS condition", definition: "Right angle, Hypotenuse and one Side — sufficient for congruence of right-angled triangles." },
  ],
  concepts: [
    {
      id: "ciem-u4-congruence",
      title: "Congruent triangles",
      skill: "Identify and use the conditions for triangle congruence: SSS, SAS, ASA, AAS and RHS.",
      lesson: {
        sections: [
          {
            heading: "What congruence requires",
            body: "Two triangles are congruent if a combination of three matching measurements forces them to be identical. The sufficient conditions are:\n\n- **SSS** — three pairs of equal sides\n- **SAS** — two pairs of equal sides with the **included** angle equal\n- **ASA** — two pairs of equal angles with the **included** side equal\n- **AAS** — two pairs of equal angles and a pair of equal corresponding sides\n- **RHS** — right angle, equal hypotenuse, one equal side (right-angled triangles only)",
          },
          {
            heading: "Why the angle must be included",
            body: "For SAS the equal angle must be **between** the two equal sides. Two sides and a non-included angle can produce two different triangles (the ambiguous case), so SSA is not a valid congruence condition at IGCSE.",
          },
          {
            heading: "Using congruence",
            body: "Once congruence is established, **corresponding parts are equal**: matching sides give lengths and matching angles give angle values. In proofs, state the condition (e.g. 'SSS') before concluding the triangles are congruent.",
          },
        ],
        keyFormulas: [
          { name: "SSS", statement: "Three equal corresponding sides" },
          { name: "SAS", statement: "Two equal sides + included angle" },
          { name: "ASA", statement: "Two equal angles + included side" },
          { name: "AAS", statement: "Two equal angles + one equal side" },
          { name: "RHS", statement: "Right angle + hypotenuse + one side" },
        ],
        workedExample: {
          problem: "In triangles $ABC$ and $DEF$, $AB=DE$, $BC=EF$ and angle $B=$ angle $E$. Are the triangles congruent?",
          solution: "Two sides equal with the included angle equal — this is the SAS condition, so yes, the triangles are congruent.",
        },
      },
      questions: [
        {
          id: "ciem-u4-congruence-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Two triangles have three pairs of equal sides. Which congruence condition applies?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "RHS" },
              { id: "b", text: "SSS" },
              { id: "c", text: "ASA" },
              { id: "d", text: "SAS" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "SSS", statement: "Three pairs of equal corresponding sides prove congruence." },
            ],
            steps: [
              { reasoning: "Match the given information to the condition.", working: "SSS", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** SSS",
            commonErrors: ["Confusing SSS with SAS."],
          },
        },
        {
          id: "ciem-u4-congruence-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "In right-angled triangles $PQR$ and $XYZ$, angle $P$ = angle $X$ = $90^\\circ$, hypotenuse $QR=YZ$ and $PR=XZ$. State the congruence condition and explain why it applies.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "RHS", statement: "Right angle, equal Hypotenuse, one equal Side — sufficient for right-angled triangles." },
            ],
            steps: [
              { reasoning: "Identify the right angles, hypotenuses and equal side.", working: "RHS\\text{ information present}", marks: 1, markCode: "M" },
              { reasoning: "Name the condition.", working: "RHS", marks: 1, markCode: "A" },
            ],
            finalAnswer: "RHS — right angle, equal hypotenuse $QR=YZ$, equal side $PR=XZ$",
            commonErrors: ["Writing 'SSA' or omitting the hypotenuse."],
          },
        },
        {
          id: "ciem-u4-congruence-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Triangles $ABC$ and $DEF$ have $AB=DE$, $BC=EF$ and angle $A=$ angle $D$, but angle $A$ is **not** included between the equal sides. Can you conclude the triangles are congruent? Explain.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "law", name: "SAS requires included angle", statement: "Two sides and a non-included angle (SSA) do not guarantee congruence." },
            ],
            steps: [
              { reasoning: "Identify that the equal angle is not between the two equal sides.", working: "\\angle A\\text{ is not included}", marks: 1, markCode: "M" },
              { reasoning: "State that SSA is not a valid congruence condition.", working: "SSA\\text{ ambiguous}", marks: 1, markCode: "M" },
              { reasoning: "Conclude the triangles cannot be proven congruent from this information alone.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "No — SSA is not a valid congruence condition; two different triangles can satisfy the given information.",
            commonErrors: ["Answering 'yes' without checking whether the angle is included."],
          },
        },
        {
          id: "ciem-u4-congruence-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "In triangle $ABC$, $D$ is the midpoint of $BC$ and $AD$ is perpendicular to $BC$.",
          parts: [
            { label: "a", prompt: "Prove that triangles $ABD$ and $ACD$ are congruent.", marks: 4 },
            { label: "b", prompt: "Hence explain why $AB=AC$.", marks: 2 },
            { label: "c", prompt: "If angle $BAD=38^\\circ$, find angle $CAD$.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "RHS", statement: "Right angle, equal Hypotenuse, one equal Side." },
              { kind: "property", name: "Corresponding parts", statement: "Congruent triangles have equal corresponding sides and angles." },
            ],
            steps: [
              { part: "a", reasoning: "Both triangles are right-angled at $D$ since $AD\\perp BC$.", working: "\\angle ADB=\\angle ADC=90^\\circ", marks: 1, markCode: "M" },
              { part: "a", reasoning: "$BD=DC$ because $D$ is the midpoint.", working: "BD=DC", marks: 1, markCode: "M" },
              { part: "a", reasoning: "$AD$ is common to both triangles.", working: "AD=AD", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Conclude congruence by RHS.", working: "\\triangle ABD \\cong \\triangle ACD\\ (RHS)", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Corresponding sides of congruent triangles are equal; $AB$ corresponds to $AC$.", working: "AB=AC", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the conclusion.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Corresponding angles are equal; angle $BAD$ corresponds to angle $CAD$.", working: "\\angle CAD=\\angle BAD", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Substitute.", working: "=38^\\circ", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State the answer.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) congruent by RHS (b) $AB=AC$ (c) $38^\\circ$",
            commonErrors: ["Using SAS instead of RHS — SAS needs the included angle between the two sides, but here the right angle is between $AD$ and $BD/DC$.", "In (c) doubling the angle instead of using corresponding angles."],
            examinerNote: "Accept SAS with justification? No — the two equal sides $BD=DC$ and $AD=AD$ have included angle $\\angle ADB=\\angle ADC=90^\\circ$, so SAS also works. Either RHS or SAS with correct reasoning earns full marks.",
          },
        },
        {
          id: "ciem-u4-congruence-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Two triangles have two equal sides and the included angle equal. Which congruence condition applies?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "SAS" },
              { id: "b", text: "ASA" },
              { id: "c", text: "RHS" },
              { id: "d", text: "SSS" },
            ],
            aorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "SAS", statement: "Two sides and the included angle equal is sufficient for congruence." },
            ],
            steps: [
              { reasoning: "Two sides plus the included angle is SAS.", working: "SAS", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(c)** SAS",
            commonErrors: ["Answering ASA — that requires two angles and a side."],
          },
        },
        {
          id: "ciem-u4-congruence-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "Two right-angled triangles have equal hypotenuses and one pair of equal corresponding legs. Which congruence condition applies?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "ASA" },
              { id: "b", text: "RHS" },
              { id: "c", text: "SSS" },
              { id: "d", text: "SSA" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "RHS", statement: "Right angle + equal Hypotenuse + equal Side is valid only for right-angled triangles." },
            ],
            steps: [
              { reasoning: "Right angle, hypotenuse and one side equal is RHS.", working: "RHS", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(a)** RHS",
            commonErrors: ["Answering SSA — SSA is not a valid congruence condition."],
          },
        },
        {
          id: "ciem-u4-congruence-q7",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Two triangles have two pairs of equal angles and one pair of equal sides that is NOT included between the equal angles. Which condition can still prove congruence?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "SSA" },
              { id: "b", text: "AAS" },
              { id: "c", text: "ASA" },
              { id: "d", text: "None — it cannot be proven" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "AAS", statement: "Two angles and any corresponding side (not necessarily included) prove congruence, since the third angle is then fixed." },
            ],
            steps: [
              { reasoning: "With two angles equal, the third is determined, so a non-included side still gives congruence — AAS.", working: "AAS", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(b)** AAS",
            commonErrors: ["Answering ASA which requires the side to be included."],
          },
        },
        {
          id: "ciem-u4-congruence-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Triangles $ABC$ and $DEF$ have $AB=DE=5$ cm, $BC=EF=7$ cm and $AC=DF=9$ cm. State the congruence condition and complete the statement.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "SSS", statement: "Three pairs of equal corresponding sides prove congruence." },
            ],
            steps: [
              { reasoning: "All three corresponding sides are equal.", working: "SSS", marks: 1, markCode: "M" },
              { reasoning: "Therefore $\\triangle ABC \\cong \\triangle DEF$ with correspondence $A\\leftrightarrow D$, $B\\leftrightarrow E$, $C\\leftrightarrow F$.", working: "ABC\\cong DEF", marks: 1, markCode: "A" },
            ],
            finalAnswer: "SSS — $\\triangle ABC \\cong \\triangle DEF$",
            commonErrors: ["Writing the correspondence in the wrong order — side lengths must match vertex order."],
          },
        },
        {
          id: "ciem-u4-congruence-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "In the diagram-free setup, triangles $PQR$ and $STU$ have $PQ=ST=4$, $\\angle Q=\\angle T=60^\\circ$ and $QR=TU=6$. State whether the triangles are congruent and give the condition.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "SAS", statement: "Two equal sides and the included angle prove congruence." },
            ],
            steps: [
              { reasoning: "Check whether the equal angle is included between the equal sides.", working: "\\angle Q \\text{ is between } PQ \\text{ and } QR", marks: 1, markCode: "M" },
              { reasoning: "$PQ=ST$, $QR=TU$ and included $\\angle Q=\\angle T$.", working: "SAS", marks: 1, markCode: "M" },
              { reasoning: "Conclude congruence.", working: "\\triangle PQR\\cong\\triangle STU", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Congruent by SAS",
            commonErrors: ["Assuming congruence without checking the angle is included between the equal sides."],
          },
        },
        {
          id: "ciem-u4-congruence-q10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Triangles $ABC$ and $DEF$ have $\\angle A=\\angle D=50^\\circ$, $\\angle C=\\angle F=70^\\circ$ and $AC=DF=8$ cm, where $AC$ and $DF$ are corresponding sides opposite the equal $50^\\circ$ angles. State the congruence condition and explain.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "AAS", statement: "Two equal angles and a corresponding equal side (not necessarily included) prove congruence." },
            ],
            steps: [
              { reasoning: "Two pairs of angles are equal: $\\angle A=\\angle D$ and $\\angle C=\\angle F$.", working: "\\angle A=\\angle D,\\ \\angle C=\\angle F", marks: 1, markCode: "M" },
              { reasoning: "A corresponding side $AC=DF$ is equal; it is not between the equal angles, so ASA does not apply but AAS does.", working: "AAS", marks: 1, markCode: "M" },
              { reasoning: "Conclude congruence.", working: "\\triangle ABC\\cong\\triangle DEF", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Congruent by AAS",
            commonErrors: ["Claiming ASA — the side is not included between the two given equal angles."],
          },
        },
        {
          id: "ciem-u4-congruence-q11",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "In triangle $ABC$, the line segment $AD$ is drawn from $A$ to the midpoint $D$ of $BC$, and $AD$ is perpendicular to $BC$.",
          parts: [
            { label: "a", prompt: "State what you know about $BD$ and $DC$.", marks: 1 },
            { label: "b", prompt: "Prove that triangles $ABD$ and $ACD$ are congruent, stating the condition used.", marks: 4 },
            { label: "c", prompt: "Explain why $AB=AC$.", marks: 2 },
            { label: "d", prompt: "State what this shows about triangle $ABC$.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "RHS / SAS", statement: "Right angle at $D$, equal hypotenuse $AB=AC$? No — use $BD=DC$, $AD=AD$, included right angle: SAS. Alternatively RHS once $AB=AC$ is shown — order matters." },
            ],
            steps: [
              { part: "a", reasoning: "$D$ is the midpoint of $BC$.", working: "BD=DC", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Both triangles are right-angled at $D$ (given $AD\\perp BC$).", working: "\\angle ADB=\\angle ADC=90^\\circ", marks: 1, markCode: "M" },
              { part: "b", reasoning: "$AD$ is common to both triangles.", working: "AD=AD", marks: 1, markCode: "M" },
              { part: "b", reasoning: "$BD=DC$ (midpoint).", working: "BD=DC", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Two sides $BD=DC$, $AD=AD$ with included angle $90^\\circ$ — SAS.", working: "\\triangle ABD\\cong\\triangle ACD\\ (SAS)", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Corresponding sides of congruent triangles are equal: $AB$ corresponds to $AC$.", working: "AB=AC", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State the equality.", working: "AB=AC", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Two sides equal means the triangle is isosceles with apex $A$.", working: "\\text{isosceles}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Conclude.", working: "ABC\\text{ is isosceles}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $BD=DC$ (b) SAS — $\\triangle ABD\\cong\\triangle ACD$ (c) corresponding sides $AB=AC$ (d) $ABC$ is isosceles",
            commonErrors: ["Using RHS before proving $AB=AC$ — RHS requires the hypotenuses to be known equal first.", "Asserting $\\triangle ABD\\cong\\triangle ACD$ without stating a valid condition."],
            examinerNote: "SAS works immediately; RHS only works after (c) is established — accept either with correct ordering.",
          },
        },
        {
          id: "ciem-u4-congruence-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why SSA is not a valid congruence condition for triangles, using an example or a clear argument.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Congruence conditions", statement: "Valid conditions: SSS, SAS, ASA, AAS, RHS. SSA is ambiguous — the non-included angle can produce two different triangles." },
            ],
            steps: [
              { reasoning: "With SSA, the side opposite the given angle can swing to two positions, producing two non-congruent triangles.", marks: 1, markCode: "M" },
              { reasoning: "A concrete example: sides 4 and 5 with a non-included $30^\\circ$ angle can give two different third sides.", marks: 1, markCode: "M" },
              { reasoning: "Hence SSA alone does not determine a unique triangle.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "SSA is ambiguous — two different triangles can share the same two sides and non-included angle.",
            commonErrors: ["Claiming SSA always fails — it sometimes works, but it is not a guaranteed condition."],
          },
        },
        {
          id: "ciem-u4-congruence-q13",
          difficulty: "core",
          totalMarks: 4,
          stem: "In quadrilateral $ABCD$, diagonal $AC$ divides it into triangles $ABC$ and $ADC$. Given $AB=AD$, $CB=CD$ and $AC=AC$, prove that $\\triangle ABC \\cong \\triangle ADC$ and state a property of the diagonal $AC$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "SSS", statement: "Three pairs of equal corresponding sides prove congruence." },
            ],
            steps: [
              { reasoning: "$AB=AD$ (given), $CB=CD$ (given), and $AC$ is common so $AC=AC$.", working: "AB=AD,\\ CB=CD,\\ AC=AC", marks: 1, markCode: "M" },
              { reasoning: "All three corresponding sides are equal — SSS.", working: "SSS", marks: 1, markCode: "M" },
              { reasoning: "Conclude $\\triangle ABC\\cong\\triangle ADC$.", working: "ABC\\cong ADC", marks: 1, markCode: "A" },
              { reasoning: "Corresponding angles $\\angle BCA=\\angle DCA$ and $\\angle BAC=\\angle DAC$, so $AC$ bisects both angles — $AC$ is an axis of symmetry.", working: "AC\\text{ bisects }\\angle BCD\\text{ and }\\angle BAD", marks: 1, markCode: "A" },
            ],
            finalAnswer: "SSS — $\\triangle ABC\\cong\\triangle ADC$; $AC$ bisects $\\angle BAD$ and $\\angle BCD$",
            commonErrors: ["Mismatching vertices in the congruence statement ($B\\leftrightarrow D$, not $B\\leftrightarrow C$)."],
          },
        },
        {
          id: "ciem-u4-congruence-q14",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "In the figure, $ABCD$ is a parallelogram and the diagonal $BD$ is drawn. Given that $AB=CD$ and $AD=BC$ (opposite sides of a parallelogram are equal), prove that $\\triangle ABD \\cong \\triangle CDB$.",
          parts: [
            { label: "a", prompt: "List the three pairs of equal sides.", marks: 2 },
            { label: "b", prompt: "State the congruence condition and conclude.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "SSS", statement: "Three pairs of equal corresponding sides prove congruence." },
            ],
            steps: [
              { part: "a", reasoning: "$AB=CD$ and $AD=BC$ (opposite sides of parallelogram); $BD$ is common so $BD=BD$.", working: "AB=CD,\\ AD=BC,\\ BD=BD", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State all three pairs.", working: "3\\text{ pairs}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "All three corresponding sides equal — SSS.", working: "SSS", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Conclude with correct vertex correspondence.", working: "\\triangle ABD\\cong\\triangle CDB", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the conclusion.", working: "congruent", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $AB=CD$, $AD=BC$, $BD=BD$ (b) SSS — $\\triangle ABD\\cong\\triangle CDB$",
            commonErrors: ["Writing $\\triangle ABD\\cong\\triangle BDC$ — the vertex order must match corresponding sides."],
          },
        },
        {
          id: "ciem-u4-congruence-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "Two right-angled triangles have equal hypotenuses and one pair of equal corresponding acute angles. Which congruence condition applies?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "RHS" },
              { id: "b", text: "AAS" },
              { id: "c", text: "SSS" },
              { id: "d", text: "ASA" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "AAS", statement: "Two equal angles (right angle + acute angle) and a corresponding equal side (the hypotenuse) prove congruence." },
            ],
            steps: [
              { reasoning: "Right angle + acute angle gives two equal angles; the hypotenuse is a corresponding equal side — AAS. RHS would need a leg, not an angle.", working: "AAS", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(b)** AAS",
            commonErrors: ["Answering RHS — RHS needs hypotenuse plus a leg, not an angle."],
          },
        },
        {
          id: "ciem-u4-congruence-q16",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Triangles $ABC$ and $PQR$ have $AB=PQ$, $BC=QR$ and $\\angle B=\\angle Q$. Is the angle included between the equal sides?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "No — the angle is opposite $AC/PR$" },
              { id: "b", text: "Yes — SAS applies" },
              { id: "c", text: "It depends on the triangle type" },
              { id: "d", text: "Cannot tell without a diagram" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Included angle", statement: "In triangle $ABC$, $\\angle B$ is included between sides $AB$ and $BC$." },
            ],
            steps: [
              { reasoning: "$\\angle B$ lies between sides $AB$ and $BC$; similarly $\\angle Q$ between $PQ$ and $QR$. So the equal angle is included — SAS.", working: "SAS", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(a)** Yes — $\\angle B$ is included between $AB$ and $BC$, so SAS applies",
            commonErrors: ["Thinking the angle must be opposite the equal sides — it must be between them."],
          },
        },
      ],
    },
    {
      id: "ciem-u4-similarity",
      title: "Similar shapes and scale factors",
      skill: "Use similarity to find missing lengths and calculate area and volume scale factors.",
      lesson: {
        sections: [
          {
            heading: "Similar triangles",
            body: "Two triangles are **similar** when their corresponding angles are equal. Their corresponding sides are in the same ratio — the **scale factor** $k$. To find a missing side, set up a proportion using corresponding sides, e.g. $\\frac{AB}{DE}=\\frac{BC}{EF}$.",
          },
          {
            heading: "Area and volume scale factors",
            body: "If lengths scale by factor $k$:\n\n- **areas** scale by $k^2$\n- **volumes** scale by $k^3$\n\nFor example, doubling every length multiplies area by $4$ and volume by $8$.",
          },
          {
            heading: "Surface area",
            body: "Surface area is a two-dimensional measure, so it scales by $k^2$, same as area — not $k^3$.",
          },
        ],
        keyFormulas: [
          { name: "Corresponding sides", statement: "$\\frac{s_1}{s_2}=k$ (constant for all pairs)" },
          { name: "Area scale factor", statement: "$k^2$" },
          { name: "Volume scale factor", statement: "$k^3$" },
          { name: "Surface area scale factor", statement: "$k^2$" },
        ],
        workedExample: {
          problem: "Two similar triangles have corresponding sides $4$ cm and $10$ cm. The area of the smaller is $6$ cm$^2$. Find the area of the larger.",
          solution: "Scale factor $k=\\frac{10}{4}=2.5$; area scale factor $=2.5^2=6.25$; larger area $=6\\times6.25=37.5$ cm$^2$.",
        },
      },
      questions: [
        {
          id: "ciem-u4-similarity-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Two similar shapes have corresponding lengths in the ratio $2:5$. What is the ratio of their areas?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$2:5$" },
              { id: "b", text: "$4:10$" },
              { id: "c", text: "$4:25$" },
              { id: "d", text: "$8:125$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Area scale factor", statement: "Area scales by $k^2$." },
            ],
            steps: [
              { reasoning: "Square the length ratio.", working: "2^2:5^2=4:25", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(a)** $4:25$",
            commonErrors: ["Using $k$ instead of $k^2$ (answer $2:5$)."],
          },
        },
        {
          id: "ciem-u4-similarity-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Two similar triangles have corresponding sides $6$ cm and $15$ cm. The smaller triangle has area $24$ cm$^2$. Find the area of the larger triangle.",
          response: { type: "numeric", parts: [{ label: "Area", answer: 150, unit: "cm²" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Area scale factor", statement: "Area scales by $k^2$ where $k$ is the length scale factor." },
            ],
            steps: [
              { reasoning: "Find the length scale factor.", working: "k=\\frac{15}{6}=2.5", marks: 1, markCode: "M" },
              { reasoning: "Square for area.", working: "k^2=6.25", marks: 1, markCode: "M" },
              { reasoning: "Multiply by the smaller area.", working: "24\\times6.25=150", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$150$ cm$^2$",
            commonErrors: ["Multiplying by $k$ instead of $k^2$ (gives $60$)."],
          },
        },
        {
          id: "ciem-u4-similarity-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Two similar solids have volumes in the ratio $8:27$. Find the ratio of their surface areas.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Volume scale factor", statement: "Volume scales by $k^3$." },
              { kind: "formula", name: "Surface area scale factor", statement: "Surface area scales by $k^2$." },
            ],
            steps: [
              { reasoning: "Find the length scale factor from the volume ratio.", working: "k^3=\\frac{8}{27}\\Rightarrow k=\\frac{2}{3}", marks: 1, markCode: "M" },
              { reasoning: "Square for surface area.", working: "k^2=\\frac{4}{9}", marks: 1, markCode: "M" },
              { reasoning: "State the ratio.", working: "4:9", marks: 2, markCode: "A" },
            ],
            finalAnswer: "$4:9$",
            commonErrors: ["Using $k$ directly on the volume ratio (gives $8:27$ for surface area)."],
          },
        },
        {
          id: "ciem-u4-similarity-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Triangle $ABC$ has $AB=8$ cm, $BC=10$ cm and $AC=6$ cm. Triangle $PQR$ is similar to $ABC$ with $PQ=12$ cm corresponding to $AB$.",
          parts: [
            { label: "a", prompt: "Find the scale factor from $ABC$ to $PQR$.", marks: 2 },
            { label: "b", prompt: "Find $QR$ and $PR$.", marks: 3 },
            { label: "c", prompt: "If the area of $ABC$ is $24$ cm$^2$, find the area of $PQR$.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Similar triangles", statement: "Corresponding sides are in the same ratio." },
              { kind: "formula", name: "Area scale factor", statement: "Area scales by $k^2$." },
            ],
            steps: [
              { part: "a", reasoning: "Divide corresponding sides.", working: "k=\\frac{PQ}{AB}=\\frac{12}{8}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Simplify.", working: "k=1.5", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Apply $k$ to $BC$.", working: "QR=10\\times1.5=15", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Apply $k$ to $AC$.", working: "PR=6\\times1.5=9", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State both lengths.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Square the scale factor.", working: "k^2=2.25", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Multiply by the area of $ABC$.", working: "24\\times2.25", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Compute.", working: "=54", marks: 1, markCode: "A" },
              { part: "c", reasoning: "State with units.", working: "54\\text{ cm}^2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $k=1.5$ (b) $QR=15$ cm, $PR=9$ cm (c) $54$ cm$^2$",
            commonErrors: ["Applying $k$ to the area directly (gives $36$)."],
          },
        },
        {
          id: "ciem-u4-similarity-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Two similar shapes have corresponding lengths in the ratio $3:4$. What is the ratio of their areas?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$9:16$" },
              { id: "b", text: "$6:8$" },
              { id: "c", text: "$3:4$" },
              { id: "d", text: "$27:64$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Area scale factor", statement: "Areas scale by $k^2$ where $k$ is the length scale factor." },
            ],
            steps: [
              { reasoning: "$k=\\frac{3}{4}$; area ratio $=k^2=\\frac{9}{16}$, i.e. $9:16$.", working: "9:16", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(b)** $9:16$",
            commonErrors: ["Squaring each term incorrectly to get $6:8$ — ratios must be squared as $3^2:4^2$."],
          },
        },
        {
          id: "ciem-u4-similarity-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "Two similar solids have corresponding lengths in the ratio $2:3$. What is the ratio of their volumes?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$4:9$" },
              { id: "b", text: "$8:27$" },
              { id: "c", text: "$6:9$" },
              { id: "d", text: "$2:3$" },
            ],
            borrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Volume scale factor", statement: "Volumes scale by $k^3$." },
            ],
            steps: [
              { reasoning: "$k=\\frac{2}{3}$; volume ratio $=k^3=\\frac{8}{27}$.", working: "8:27", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(c)** $8:27$",
            commonErrors: ["Using $k^2=\\frac{4}{9}$ — that is the area scale factor."],
          },
        },
        {
          id: "ciem-u4-similarity-q7",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Two similar cylinders have heights in the ratio $1:2$. What is the ratio of their curved surface areas?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$1:4$" },
              { id: "b", text: "$1:8$" },
              { id: "c", text: "$1:2$" },
              { id: "d", text: "$2:1$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Surface area scale factor", statement: "Surface area is two-dimensional, so it scales by $k^2$." },
            ],
            steps: [
              { reasoning: "$k=\\frac{1}{2}$; surface area ratio $=k^2=\\frac{1}{4}$, i.e. $1:4$.", working: "1:4", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(b)** $1:4$",
            commonErrors: ["Using $k^3=\\frac{1}{8}$ — that is the volume scale factor."],
          },
        },
        {
          id: "ciem-u4-similarity-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Two similar triangles have corresponding sides $5$ cm and $8$ cm. The smaller triangle has perimeter $20$ cm. Find the perimeter of the larger triangle.",
          response: { type: "numeric", parts: [{ label: "Perimeter", answer: 32, unit: "cm" }] },
          markscheme: {
            principles: [
              { kind: "law", name: "Linear scale factor", statement: "All linear measures (lengths, perimeters) scale by $k$." },
            ],
            steps: [
              { reasoning: "$k=\\frac{8}{5}=1.6$.", working: "k=1.6", marks: 1, markCode: "M" },
              { reasoning: "Perimeter scales linearly: $20\\times1.6=32$ cm.", working: "P=32\\text{ cm}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$32$ cm",
            commonErrors: ["Squaring the scale factor to get $20\\times2.56=51.2$ — perimeter is linear."],
          },
        },
        {
          id: "ciem-u4-similarity-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Two similar triangles have corresponding sides $4$ cm and $10$ cm. The area of the smaller triangle is $8$ cm$^2$. Find the area of the larger triangle.",
          response: { type: "numeric", parts: [{ label: "Area", answer: 50, unit: "cm²" }] },
          markscheme: {
            principles: [
              { kind: "law", name: "Area scale factor", statement: "Areas scale by $k^2$." },
            ],
            steps: [
              { reasoning: "$k=\\frac{10}{4}=2.5$.", working: "k=2.5", marks: 1, markCode: "M" },
              { reasoning: "Area scale factor $=k^2=6.25$.", working: "k^2=6.25", marks: 1, markCode: "M" },
              { reasoning: "Larger area $=8\\times6.25=50$ cm$^2$.", working: "A=50\\text{ cm}^2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$50$ cm$^2$",
            commonErrors: ["Multiplying $8\\times2.5=20$ — forgot to square $k$."],
          },
        },
        {
          id: "ciem-u4-similarity-q10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Two similar solids have volumes $64$ cm$^3$ and $216$ cm$^3$. Find the ratio of their corresponding lengths.",
          response: { type: "numeric", parts: [{ label: "Ratio", answer: 4 }] },
          markscheme: {
            principles: [
              { kind: "law", name: "Volume scale factor", statement: "Volumes scale by $k^3$; take the cube root to recover $k$." },
            ],
            steps: [
              { reasoning: "Volume ratio $=\\frac{64}{216}=\\frac{8}{27}$.", working: "V_1:V_2=8:27", marks: 1, markCode: "M" },
              { reasoning: "$k^3=\\frac{8}{27}$ so $k=\\sqrt[3]{\\frac{8}{27}}=\\frac{2}{3}$.", working: "k=\\frac{2}{3}", marks: 1, markCode: "M" },
              { reasoning: "The length ratio is $2:3$.", working: "2:3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2:3$",
            commonErrors: ["Taking the square root instead of the cube root."],
          },
        },
        {
          id: "ciem-u4-similarity-q11",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Triangle $ABC$ has $AB=6$ cm, $BC=8$ cm and $AC=10$ cm. Triangle $DEF$ is similar to $ABC$, with $DE$ corresponding to $AB$, and $EF=12$ cm.",
          parts: [
            { label: "a", prompt: "Find the scale factor from $ABC$ to $DEF$.", marks: 2 },
            { label: "b", prompt: "Find $DF$.", marks: 3 },
            { label: "c", prompt: "Find the area of $ABC$ given that the area of $DEF$ is $72$ cm$^2$.", marks: 4 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(b) DF", answer: 15, unit: "cm" },
              { label: "(c) area ABC", answer: 32, unit: "cm²" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Corresponding sides", statement: "Corresponding sides are in the same ratio $k$." },
              { kind: "law", name: "Area scale factor", statement: "Areas scale by $k^2$." },
            ],
            steps: [
              { part: "a", reasoning: "$EF$ corresponds to $BC$: $k=\\frac{12}{8}=1.5$.", working: "k=1.5", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the scale factor.", working: "k=1.5", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$DF$ corresponds to $AC$: $DF=10\\times1.5$.", working: "DF=15\\text{ cm}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Verify via proportion $\\frac{DF}{10}=\\frac{12}{8}$.", working: "DF=15", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the length.", working: "15\\text{ cm}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Area scale factor $=k^2=2.25$.", working: "k^2=2.25", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Area of $ABC=\\frac{72}{2.25}$.", working: "A=\\frac{72}{2.25}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Divide.", working: "=32", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State with units.", working: "32\\text{ cm}^2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $k=1.5$ (b) $DF=15$ cm (c) $32$ cm$^2$",
            commonErrors: ["In (c) multiplying $72\\times2.25$ instead of dividing — $DEF$ is the larger triangle.", "In (b) pairing $DF$ with $BC$ instead of $AC$."],
          },
        },
        {
          id: "ciem-u4-similarity-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the difference between the linear, area and volume scale factors for similar shapes.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "law", name: "Scale factors", statement: "Linear $\\times k$, area $\\times k^2$, volume $\\times k^3$." },
            ],
            steps: [
              { reasoning: "Lengths, perimeters and radii scale by $k$ directly.", marks: 1, markCode: "M" },
              { reasoning: "Areas and surface areas involve two dimensions, so scale by $k^2$.", marks: 1, markCode: "M" },
              { reasoning: "Volumes involve three dimensions, so scale by $k^3$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Linear measures $\\times k$; areas $\\times k^2$; volumes $\\times k^3$.",
            commonErrors: ["Applying $k^3$ to surface area — surface area is two-dimensional."],
          },
        },
        {
          id: "ciem-u4-similarity-q13",
          difficulty: "core",
          totalMarks: 4,
          stem: "A photo is enlarged so that a length of $4$ cm becomes $10$ cm. The original photo has area $30$ cm$^2$. Find the area of the enlarged photo.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "law", name: "Area scale factor", statement: "Areas scale by $k^2$." },
            ],
            steps: [
              { reasoning: "Scale factor $k=\\frac{10}{4}=2.5$.", working: "k=2.5", marks: 1, markCode: "M" },
              { reasoning: "Area scale factor $=k^2=6.25$.", working: "k^2=6.25", marks: 1, markCode: "M" },
              { reasoning: "New area $=30\\times6.25$.", working: "A=30\\times6.25", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "=187.5\\text{ cm}^2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$187.5$ cm$^2$",
            commonErrors: ["Multiplying by $k=2.5$ to get $75$ — area needs $k^2$."],
          },
        },
        {
          id: "ciem-u4-similarity-q14",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Two similar triangles $ABC$ and $DEF$ have area ratio $9:25$. The perimeter of $ABC$ is $36$ cm.",
          parts: [
            { label: "a", prompt: "Find the length scale factor from $ABC$ to $DEF$.", marks: 2 },
            { label: "b", prompt: "Find the perimeter of $DEF$.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "law", name: "Area scale factor", statement: "Area ratio $=k^2$, so $k=\\sqrt{\\text{area ratio}}$." },
            ],
            steps: [
              { part: "a", reasoning: "Area ratio $=\\frac{9}{25}$; $k=\\sqrt{\\frac{9}{25}}=\\frac{3}{5}$.", working: "k=\\frac{3}{5}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the scale factor.", working: "k=0.6", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Perimeter scales linearly: $36\\times\\frac{3}{5}$.", working: "P=36\\times0.6", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate.", working: "=21.6\\text{ cm}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State with units.", working: "21.6\\text{ cm}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $k=\\frac{3}{5}$ (b) $21.6$ cm",
            commonErrors: ["Using $k=\\frac{9}{25}$ directly — must take the square root of the area ratio."],
          },
        },
        {
          id: "ciem-u4-similarity-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "Two similar shapes have areas in the ratio $16:25$. What is the ratio of their corresponding lengths?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$8:25$" },
              { id: "b", text: "$2:5$" },
              { id: "c", text: "$4:5$" },
              { id: "d", text: "$16:25$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Area scale factor", statement: "Area ratio $=k^2$; length ratio $=k=\\sqrt{\\text{area ratio}}$." },
            ],
            steps: [
              { reasoning: "$k=\\sqrt{\\frac{16}{25}}=\\frac{4}{5}$, so lengths are in ratio $4:5$.", working: "4:5", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(b)** $4:5$",
            commonErrors: ["Leaving the answer as $16:25$ — that is the area ratio, not the length ratio."],
          },
        },
        {
          id: "ciem-u4-similarity-q16",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A model car is built at scale $1:24$. The real car has length $4.8$ m. What is the length of the model car in cm?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "200 cm" },
              { id: "b", text: "20 cm" },
              { id: "c", text: "24 cm" },
              { id: "d", text: "2 cm" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Scale factor", statement: "Model length $=\\frac{\\text{real length}}{24}$; convert metres to centimetres." },
            ],
            steps: [
              { reasoning: "Real length $=4.8\\text{ m}=480\\text{ cm}$; model $=\\frac{480}{24}=20$ cm.", working: "20\\text{ cm}", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(a)** $20$ cm",
            commonErrors: ["Forgetting the metre-to-centimetre conversion to get $0.2$ or $2$."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciem-u4-congruence-similarity-notes",
      title: "Congruence and similarity — revision notes",
      summary: "Triangle congruence conditions (SSS, SAS, ASA, AAS, RHS) and similarity with linear, area and volume scale factors.",
      sections: [
        {
          heading: "Congruence conditions",
          body: "- **SSS**: three equal sides\n- **SAS**: two equal sides + included angle\n- **ASA**: two equal angles + included side\n- **AAS**: two equal angles + one equal side\n- **RHS**: right angle + hypotenuse + one side (right-angled only)\n\nSSA is **not** valid — the angle must be included. Once congruent, corresponding parts are equal.",
        },
        {
          heading: "Similarity",
          body: "Similar triangles have equal corresponding angles and sides in a constant ratio $k$. Find $k$ from one pair of corresponding sides, then apply to all others.\n\n**Worked example.** $AB=8$, $PQ=12$: $k=1.5$; $BC=10 \\Rightarrow QR=15$; $AC=6 \\Rightarrow PR=9$.",
        },
        {
          heading: "Scale factors",
          body: "- Lengths: $\\times k$\n- Areas and surface areas: $\\times k^2$\n- Volumes: $\\times k^3$\n\n**Worked example.** $k=2.5$: area factor $6.25$, so area $24 \\Rightarrow 150$ cm$^2$.",
        },
        {
          heading: "Exam technique",
          body: "- Always state the congruence/similarity condition before using it.\n- For scale-factor questions, find $k$ first, then decide whether to square or cube.\n- Surface area uses $k^2$ (it's 2D), volume uses $k^3$ (it's 3D).",
        },
      ],
    },
  ],
};
