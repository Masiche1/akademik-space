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
              { id: "a", text: "SSS" },
              { id: "b", text: "SAS" },
              { id: "c", text: "ASA" },
              { id: "d", text: "RHS" },
            ],
            correctChoiceId: "a",
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
              { id: "a", text: "$4:25$" },
              { id: "b", text: "$2:5$" },
              { id: "c", text: "$8:125$" },
              { id: "d", text: "$4:10$" },
            ],
            correctChoiceId: "a",
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
