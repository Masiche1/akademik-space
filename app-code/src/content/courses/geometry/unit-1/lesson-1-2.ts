import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "geo-u1-lesson-1-2",
  code: "1-2",
  title: "Triangle Congruence",
  goal: "I CAN determine whether triangles are congruent using valid criteria, explain why SSA is insufficient, and use CPCTC in a proof.",
  standards: ["HSG-CO.B.8", "HSG-CO.C.10"],
  vocabulary: [
    { term: "Congruent triangles", definition: "Triangles whose corresponding sides and corresponding angles are congruent; their vertices must be listed in matching order." },
    { term: "SSS", definition: "The Side-Side-Side congruence criterion: if three sides of one triangle are congruent to the corresponding three sides of another, the triangles are congruent." },
    { term: "SAS", definition: "The Side-Angle-Side congruence criterion: two corresponding sides and the included angle between them are congruent." },
    { term: "ASA", definition: "The Angle-Side-Angle congruence criterion: two corresponding angles and the included side between them are congruent." },
    { term: "AAS", definition: "The Angle-Angle-Side congruence criterion: two corresponding angles and a corresponding non-included side are congruent." },
    { term: "HL", definition: "The Hypotenuse-Leg criterion for right triangles: congruent hypotenuses and one pair of congruent corresponding legs guarantee congruence." },
    { term: "CPCTC", definition: "Corresponding Parts of Congruent Triangles are Congruent; after proving triangles congruent, corresponding sides and angles may be concluded congruent." },
  ],
  concepts: [
    {
      id: "geo-u1-congruence-criteria",
      title: "Congruence criteria and correspondence",
      skill: "Match corresponding vertices and select a valid triangle congruence criterion from given information.",
      lesson: {
        sections: [
          {
            heading: "What congruence means",
            body: "Congruent triangles have the same size and shape. The notation $\\triangle ABC \\cong \\triangle DEF$ fixes the correspondence: $A \\leftrightarrow D$, $B \\leftrightarrow E$, and $C \\leftrightarrow F$. Consequently, $AB \\cong DE$, $BC \\cong EF$, and $AC \\cong DF$, with the same matching for angles. Correspondence order matters; matching vertices in a different order gives incorrect side pairs.",
          },
          {
            heading: "Five valid criteria",
            body: "For any triangles, **SSS**, **SAS**, **ASA**, and **AAS** each provide enough information to prove congruence. In SAS, the known angle must be **included** between the two known sides; in ASA, the known side is included between the known angles. In AAS, the known side is not between the known angles; the two angle measures determine the third angle by the triangle angle sum. For right triangles, **HL** applies when the hypotenuses and one pair of corresponding legs are congruent. The right angle is already guaranteed in both triangles, so the hypotenuse-and-leg information is sufficient.",
          },
          {
            heading: "Why SSA is not a criterion",
            body: "Two sides and a non-included angle (SSA) do not always determine a unique triangle. For some acute-angle SSA measurements, the endpoint of the other known side can lie at either of two intersections, creating two different triangles with the same given side lengths and angle. In other cases SSA may determine one triangle or no triangle, but it does not guarantee congruence in general. The right-triangle HL case is a valid special theorem, not a general SSA criterion.",
          },
        ],
        keyFormulas: [
          { name: "Congruence correspondence", statement: "$\\triangle ABC \\cong \\triangle DEF \\implies A\\leftrightarrow D,\\;B\\leftrightarrow E,\\;C\\leftrightarrow F$" },
          { name: "Valid criteria", statement: "$\\text{SSS, SAS, ASA, AAS; HL for right triangles}$" },
        ],
        workedExample: {
          problem: "In $\\triangle PQR$ and $\\triangle XYZ$, $PQ \\cong XY$, $QR \\cong YZ$, and $\\angle Q \\cong \\angle Y$. Are the triangles congruent? State the criterion and correspondence.",
          solution: "The known angle is between the two known sides in each triangle: $\\angle Q$ is between $PQ$ and $QR$, and $\\angle Y$ is between $XY$ and $YZ$. Therefore SAS applies. The correspondence is $P\\leftrightarrow X$, $Q\\leftrightarrow Y$, and $R\\leftrightarrow Z$, so $\\triangle PQR \\cong \\triangle XYZ$ by SAS.",
        },
      },
      questions: [
        {
          id: "geo-u1-crit-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "In $\\triangle ABC$ and $\\triangle DEF$, $AB \\cong DE$, $BC \\cong EF$, and $AC \\cong DF$. Which congruence criterion proves the triangles congruent?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "SSA" },
              { id: "b", text: "SAS" },
              { id: "c", text: "AAA" },
              { id: "d", text: "SSS" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "theorem", name: "SSS congruence", statement: "Three pairs of corresponding congruent sides prove two triangles congruent." },
              { kind: "definition", name: "Corresponding sides", statement: "In $\\triangle ABC$ and $\\triangle DEF$, the stated pairs match the vertex order $A\\leftrightarrow D$, $B\\leftrightarrow E$, $C\\leftrightarrow F$." },
            ],
            steps: [
              { reasoning: "Identify the three given corresponding side pairs.", working: "AB\\cong DE,\\quad BC\\cong EF,\\quad AC\\cong DF", marks: 1, markCode: "B" },
              { reasoning: "Apply the criterion requiring three pairs of sides.", working: "\\triangle ABC\\cong\\triangle DEF \\text{ by SSS}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** SSS.",
            commonErrors: ["Choosing AAA: equal angles give similarity, not necessarily equal side lengths.", "Choosing SSA, which is not a general congruence criterion."],
          },
        },
        {
          id: "geo-u1-crit-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "In $\\triangle MNO$ and $\\triangle RST$, $MN \\cong RS$, $MO \\cong RT$, and $\\angle M \\cong \\angle R$. State whether the information proves the triangles congruent. If it does, name the criterion and write the congruence statement in corresponding order.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "theorem", name: "SAS congruence", statement: "Two pairs of corresponding sides and their included angle congruent prove two triangles congruent." },
              { kind: "definition", name: "Included angle", statement: "The included angle lies between the two named sides." },
            ],
            steps: [
              { reasoning: "Recognize that $\\angle M$ is between $MN$ and $MO$, and $\\angle R$ is between $RS$ and $RT$.", marks: 1, markCode: "R" },
              { reasoning: "The two corresponding sides and included angle are congruent, so SAS applies.", working: "MN\\cong RS,\\quad \\angle M\\cong\\angle R,\\quad MO\\cong RT", marks: 1, markCode: "M" },
              { reasoning: "Match vertices from the given pairs: $M\\leftrightarrow R$, $N\\leftrightarrow S$, $O\\leftrightarrow T$.", working: "\\triangle MNO\\cong\\triangle RST \\text{ by SAS}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Yes. $\\triangle MNO\\cong\\triangle RST$ by SAS.",
            commonErrors: ["Using SSA because the angle is not between the sides; here it is explicitly the included angle between $MN,MO$ and $RS,RT$."],
          },
        },
        {
          id: "geo-u1-crit-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A student claims that two triangles must be congruent whenever two corresponding sides and a corresponding **non-included** angle are congruent. Explain why this SSA claim is not valid in general. Your explanation must describe how the same given measurements can allow two different triangles.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Congruence criterion requirement", statement: "A valid congruence criterion must guarantee a unique triangle up to rigid motion from the given measurements." },
              { kind: "property", name: "Ambiguous SSA case", statement: "Two sides and a non-included angle can allow two distinct triangles, so SSA does not guarantee congruence." },
            ],
            steps: [
              { reasoning: "Identify the given information as SSA: two sides and an angle not between them.", marks: 1, markCode: "B" },
              { reasoning: "Explain that the side opposite the fixed angle can have two possible positions while retaining the given side lengths and angle.", marks: 1, markCode: "R" },
              { reasoning: "Conclude that two different triangles can satisfy the same SSA data; therefore the data do not guarantee congruence. Distinguish this from HL, which applies only to right triangles.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "SSA is not a general congruence criterion: for the same two side lengths and a non-included angle, the remaining side can sometimes be placed in two positions, producing two noncongruent triangles. HL is a separate valid criterion restricted to right triangles.",
            commonErrors: ["Claiming SSA always fails to produce a triangle; the issue is that it can produce more than one.", "Treating HL as evidence that all SSA configurations prove congruence."],
            examinerNote: "Award the ambiguity mark for a clear description of two possible positions/configurations; a statement that 'SSA does not work' alone is insufficient.",
          },
        },
        {
          id: "geo-u1-crit-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "In $\\triangle ABC$, $m\\angle B=90^\\circ$, $AB=5$ and the hypotenuse $AC=13$. In $\\triangle DEF$, $m\\angle E=90^\\circ$, $DE=5$ and the hypotenuse $DF=13$. The diagram shows the two right triangles side by side, with the right angles at $B$ and $E$ and the longest sides $AC$ and $DF$ drawn along their slanted edges.",
          parts: [
            { label: "a", prompt: "Find $BC$.", marks: 2 },
            { label: "b", prompt: "Find $EF$ and prove $\\triangle ABC\\cong\\triangle DEF$, naming the congruence criterion and writing the vertices in corresponding order.", marks: 2 },
            { label: "c", prompt: "Find $m\\angle A$ to the nearest tenth of a degree, and state $m\\angle D$ with a reason.", marks: 2 },
            { label: "d", prompt: "In $\\triangle PQR$, $m\\angle P=30^\\circ$, $PR=8$ and $QR=5$ (the side opposite $\\angle P$). Use the Law of Sines to find the two possible measures of $\\angle Q$ to the nearest tenth, and explain what this shows about SSA as a congruence criterion.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Pythagorean theorem", statement: "In a right triangle with legs $a,b$ and hypotenuse $c$, $a^2+b^2=c^2$." },
              { kind: "theorem", name: "HL congruence", statement: "Two right triangles with congruent hypotenuses and a pair of congruent corresponding legs are congruent." },
              { kind: "theorem", name: "CPCTC", statement: "Corresponding parts of congruent triangles are congruent." },
              { kind: "law", name: "Law of Sines", statement: "$\\frac{\\sin P}{QR}=\\frac{\\sin Q}{PR}$ in $\\triangle PQR$." },
            ],
            steps: [
              { part: "a", reasoning: "Apply the Pythagorean theorem to $\\triangle ABC$.", working: "BC^2=13^2-5^2=169-25=144", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Take the positive root.", working: "BC=12", marks: 1, markCode: "A" },
              { part: "b", reasoning: "The same calculation in $\\triangle DEF$ gives the same leg: $EF=\\sqrt{169-25}=12$.", working: "EF=12", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Both triangles are right, with $AC\\cong DF$ (hypotenuses) and $AB\\cong DE$ (legs): HL applies (SSS also works using $BC\\cong EF$).", working: "\\triangle ABC\\cong\\triangle DEF \\text{ by HL}", marks: 1, markCode: "R" },
              { part: "c", reasoning: "In $\\triangle ABC$, $\\tan A=\\frac{BC}{AB}$.", working: "m\\angle A=\\tan^{-1}\\left(\\frac{12}{5}\\right)\\approx 67.4^\\circ", marks: 1, markCode: "M" },
              { part: "c", reasoning: "$\\angle D$ corresponds to $\\angle A$ in $\\triangle ABC\\cong\\triangle DEF$, so CPCTC gives the same measure.", working: "m\\angle D\\approx 67.4^\\circ", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Apply the Law of Sines to find $\\sin Q$.", working: "\\sin Q=\\frac{PR\\sin P}{QR}=\\frac{8\\sin 30^\\circ}{5}=0.8", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Both an acute angle and its supplement have sine $0.8$, and each fits in a triangle with the $30^\\circ$ angle ($30+126.9<180$).", working: "Q\\approx 53.1^\\circ \\text{ or } Q\\approx 180^\\circ-53.1^\\circ=126.9^\\circ", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Two triangles with different angles satisfy the same SSA data, so they are not congruent: SSA does not guarantee congruence (unlike HL, which needs a right angle).", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $BC=12$. (b) $EF=12$; $\\triangle ABC\\cong\\triangle DEF$ by HL. (c) $m\\angle A\\approx67.4^\\circ$ and $m\\angle D\\approx67.4^\\circ$ by CPCTC. (d) $\\angle Q\\approx53.1^\\circ$ or $126.9^\\circ$; two noncongruent triangles fit the SSA data, so SSA is not a criterion.",
            commonErrors: ["Using SSA reasoning in (b) without noting the right angle that makes HL valid.", "Giving only $53.1^\\circ$ in (d) and missing the supplementary solution.", "Computing $\\tan^{-1}(5/12)$ in (c), which gives $\\angle C$."],
            examinerNote: "Accept an equivalent compass/swing description of the two positions of $Q$ in (d) if the numeric angles are also given.",
          },
        },
      ],
    },
    {
      id: "geo-u1-proof-cpctc",
      title: "Triangle proofs and CPCTC",
      skill: "Organize a two-column proof: establish triangle congruence from justified facts, then use CPCTC for corresponding parts.",
      lesson: {
        sections: [
          {
            heading: "Build the proof in a useful order",
            body: "A two-column proof pairs each statement with a reason. Start with the given information, then establish any shared sides or angles using definitions and properties. Next use a valid congruence criterion to prove the triangles congruent. The triangle congruence statement must list corresponding vertices in matching order.",
          },
          {
            heading: "Use CPCTC only after congruence",
            body: "**CPCTC** means Corresponding Parts of Congruent Triangles are Congruent. It lets you conclude that matching sides or angles are congruent **after** the triangles have been proved congruent. It cannot replace the congruence proof or be used to justify the congruence statement itself. If the target is a segment length, first state the matching segments are congruent, then use the definition of congruent segments to equate their lengths.",
          },
        ],
        keyFormulas: [
          { name: "CPCTC", statement: "$\\triangle ABC\\cong\\triangle DEF \\implies AB\\cong DE,\\;BC\\cong EF,\\;AC\\cong DF$" },
          { name: "Congruent segments", statement: "$\\overline{AB}\\cong\\overline{CD} \\implies AB=CD$" },
        ],
        workedExample: {
          problem: "Given $AB\\cong AD$ and $BC\\cong DC$, prove $\\angle ABC\\cong\\angle ADC$. The triangles share $AC$.",
          solution: "Two-column reasoning: $AB\\cong AD$ (Given); $BC\\cong DC$ (Given); $AC\\cong AC$ (Reflexive Property). Thus $\\triangle ABC\\cong\\triangle ADC$ by SSS. Therefore $\\angle ABC\\cong\\angle ADC$ by CPCTC. The vertex order pairs $B$ with $D$, so the target angles correspond.",
        },
      },
      questions: [
        {
          id: "geo-u1-proof-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "If $\\triangle JKL \\cong \\triangle MNP$ in the order written, which angle corresponds to $\\angle K$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\angle N$" },
              { id: "b", text: "$\\angle P$" },
              { id: "c", text: "$\\angle J$" },
              { id: "d", text: "$\\angle M$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Congruence correspondence", statement: "Vertices listed in corresponding positions in a congruence statement correspond to one another." },
              { kind: "property", name: "CPCTC", statement: "Corresponding angles of congruent triangles are congruent." },
            ],
            steps: [
              { reasoning: "Match the second vertex in each triangle.", working: "J\\leftrightarrow M,\\quad K\\leftrightarrow N,\\quad L\\leftrightarrow P", marks: 1, markCode: "M" },
              { reasoning: "Use the correspondence to identify the matching angle.", working: "\\angle K\\leftrightarrow\\angle N", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $\\angle N$.",
            commonErrors: ["Matching vertices by the angle's visual or alphabetical order instead of the written triangle correspondence."],
          },
        },
        {
          id: "geo-u1-proof-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "In $\\triangle ABC$ and $\\triangle DBC$, $AB\\cong DB$, $AC\\cong DC$, and $BC$ is shared. Which statement justifies that $\\angle ABC\\cong\\angle DBC$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The triangles are congruent by SSS, then use CPCTC." },
              { id: "b", text: "The triangles are similar by AAA, so the angles are congruent." },
              { id: "c", text: "The triangles are congruent by SSA, then use CPCTC." },
              { id: "d", text: "The angles are congruent by the vertical angles theorem." },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "theorem", name: "SSS congruence", statement: "Three corresponding side pairs congruent imply triangle congruence." },
              { kind: "theorem", name: "CPCTC", statement: "Corresponding parts of congruent triangles are congruent." },
            ],
            steps: [
              { reasoning: "Use the two given pairs and the shared side by the reflexive property.", working: "AB\\cong DB,\\quad AC\\cong DC,\\quad BC\\cong BC", marks: 1, markCode: "M" },
              { reasoning: "The three pairs prove $\\triangle ABC\\cong\\triangle DBC$ by SSS; the correspondence is $A\\leftrightarrow D$, $B\\leftrightarrow B$, $C\\leftrightarrow C$.", marks: 1, markCode: "A" },
              { reasoning: "The angles at $B$ correspond, so CPCTC proves them congruent.", working: "\\angle ABC\\cong\\angle DBC", marks: 1, markCode: "R" },
            ],
            finalAnswer: "**(a)** Prove $\\triangle ABC\\cong\\triangle DBC$ by SSS, then conclude $\\angle ABC\\cong\\angle DBC$ by CPCTC.",
            commonErrors: ["Using CPCTC before proving the triangles congruent.", "Calling the triangles SSA instead of counting all three side pairs."],
          },
        },
        {
          id: "geo-u1-proof-q3",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Given $AB\\cong AD$ and $BC\\cong DC$, prove $\\angle ABC\\cong\\angle ADC$ using a two-column proof. The triangles $ABC$ and $ADC$ share side $AC$. Write each statement with a valid reason, including the triangle congruence criterion and the final reason.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Given information", statement: "A stated hypothesis may be used directly as a proof statement with reason Given." },
              { kind: "property", name: "Reflexive property of congruence", statement: "A segment is congruent to itself: $AC\\cong AC$." },
              { kind: "theorem", name: "SSS congruence", statement: "Three pairs of corresponding congruent sides prove two triangles congruent." },
              { kind: "theorem", name: "CPCTC", statement: "Corresponding parts of congruent triangles are congruent." },
            ],
            steps: [
              { reasoning: "State the first given pair with its reason.", working: "AB\\cong AD \\qquad \\text{Given}", marks: 1, markCode: "B" },
              { reasoning: "State the second given pair with its reason.", working: "BC\\cong DC \\qquad \\text{Given}", marks: 1, markCode: "B" },
              { reasoning: "Use the reflexive property for the shared side.", working: "AC\\cong AC \\qquad \\text{Reflexive Property}", marks: 1, markCode: "M" },
              { reasoning: "The three side pairs establish congruence in correspondence order $A\\leftrightarrow A$, $B\\leftrightarrow D$, $C\\leftrightarrow C$.", working: "\\triangle ABC\\cong\\triangle ADC \\qquad \\text{SSS}", marks: 1, markCode: "A" },
              { reasoning: "The target angles correspond in the congruent triangles, so apply CPCTC.", working: "\\angle ABC\\cong\\angle ADC \\qquad \\text{CPCTC}", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Two-column proof: $AB\\cong AD$ (Given); $BC\\cong DC$ (Given); $AC\\cong AC$ (Reflexive Property); $\\triangle ABC\\cong\\triangle ADC$ (SSS); therefore $\\angle ABC\\cong\\angle ADC$ (CPCTC).",
            commonErrors: ["Writing CPCTC as the reason for triangle congruence.", "Using the wrong triangle order, which makes the target angles appear not to correspond.", "Leaving out the shared side or its reflexive justification."],
            examinerNote: "Award one mark for each listed statement-reason pair. Equivalent two-column layouts and accepted wording such as 'Reflexive Property of Congruence' earn credit.",
          },
        },
        {
          id: "geo-u1-proof-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Quadrilateral $ABCD$ is drawn like a kite: $A$ at the top, $C$ at the bottom, $B$ on the left and $D$ on the right. Diagonal $AC$ is vertical and bisects both $\\angle BAD$ and $\\angle BCD$. The other diagonal $BD$ is horizontal and crosses $AC$ at point $E$.",
          parts: [
            { label: "a", prompt: "List three statements, each with a reason, that you can use to prove $\\triangle ABC\\cong\\triangle ADC$.", marks: 3 },
            { label: "b", prompt: "State the congruence criterion and write the congruence statement.", marks: 1 },
            { label: "c", prompt: "Deduce that $AB\\cong AD$ and $BC\\cong DC$, giving the reason.", marks: 1 },
            { label: "d", prompt: "Given also $AB=(3x+2)$ and $AD=(5x-6)$, find $x$ and $AB$.", marks: 2 },
            { label: "e", prompt: "Prove that $E$ is the midpoint of $BD$, i.e. $BE\\cong DE$.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Angle bisector", statement: "A ray that divides an angle into two congruent angles." },
              { kind: "theorem", name: "ASA congruence", statement: "Two angles and the included side congruent to those of another triangle prove the triangles congruent." },
              { kind: "theorem", name: "SAS congruence", statement: "Two sides and the included angle congruent to those of another triangle prove the triangles congruent." },
              { kind: "theorem", name: "CPCTC", statement: "Corresponding parts of congruent triangles are congruent." },
            ],
            steps: [
              { part: "a", reasoning: "$AC$ bisects $\\angle BAD$.", working: "\\angle BAC\\cong\\angle DAC \\qquad \\text{Definition of angle bisector}", marks: 1, markCode: "B" },
              { part: "a", reasoning: "$AC$ bisects $\\angle BCD$.", working: "\\angle BCA\\cong\\angle DCA \\qquad \\text{Definition of angle bisector}", marks: 1, markCode: "B" },
              { part: "a", reasoning: "The shared side lies between the two congruent angles.", working: "AC\\cong AC \\qquad \\text{Reflexive Property}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Two angles and the included side $AC$ are congruent, in the order $A\\leftrightarrow A$, $B\\leftrightarrow D$, $C\\leftrightarrow C$.", working: "\\triangle ABC\\cong\\triangle ADC \\text{ by ASA}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Corresponding sides of the congruent triangles are congruent.", working: "AB\\cong AD,\\quad BC\\cong DC \\qquad \\text{CPCTC}", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Congruent segments have equal lengths.", working: "3x+2=5x-6 \\implies 8=2x \\implies x=4", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Substitute (check: $AD=5(4)-6=14$).", working: "AB=3(4)+2=14", marks: 1, markCode: "A" },
              { part: "e", reasoning: "In $\\triangle ABE$ and $\\triangle ADE$: $AB\\cong AD$ from (c) and $\\angle BAE\\cong\\angle DAE$ because $E$ lies on bisector $AC$.", working: "AB\\cong AD,\\quad \\angle BAE\\cong\\angle DAE", marks: 1, markCode: "B" },
              { part: "e", reasoning: "$AE$ is shared (Reflexive Property), and the angle lies between the two sides, so SAS applies.", working: "\\triangle ABE\\cong\\triangle ADE \\text{ by SAS}", marks: 1, markCode: "M" },
              { part: "e", reasoning: "$BE$ and $DE$ are corresponding sides, so CPCTC finishes the proof.", working: "BE\\cong DE \\qquad \\text{CPCTC}", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $\\angle BAC\\cong\\angle DAC$, $\\angle BCA\\cong\\angle DCA$ (angle bisector), $AC\\cong AC$ (reflexive). (b) $\\triangle ABC\\cong\\triangle ADC$ by ASA. (c) $AB\\cong AD$ and $BC\\cong DC$ by CPCTC. (d) $x=4$, $AB=14$. (e) $\\triangle ABE\\cong\\triangle ADE$ by SAS, so $BE\\cong DE$ by CPCTC.",
            commonErrors: ["Using CPCTC to justify the triangle congruence itself.", "Claiming SSA or AAA in (b); the shared side must lie between the two angles for ASA.", "Using $\\triangle ABC\\cong\\triangle ADC$ in the wrong vertex order, so that (c) pairs the wrong sides."],
          },
        },
      ],
    },
  ],
};
