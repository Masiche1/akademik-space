import type { Lesson } from "../../../types.ts";

export const lesson43: Lesson = {
  id: "olm-u4-lesson-4-3",
  code: "4-3",
  title: "Congruence and Similarity",
  goal: "I CAN use congruence and similarity to find missing lengths and angles.",
  standards: ["4024: geometry"],
  vocabulary: [
    { term: "Congruent", definition: "Identical in shape and size." },
    { term: "Similar", definition: "Same shape, sizes in proportion." },
    { term: "Scale factor", definition: "Ratio of corresponding lengths in similar shapes." },
    { term: "Corresponding sides", definition: "Sides in the same relative position." },
  ],
  concepts: [
    {
      id: "olm-u4-s3-congruence",
      title: "Congruent shapes",
      skill: "Identify and use congruent shapes at O Level.",
      lesson: {
        sections: [
          { heading: "Congruence tests", body: "Two shapes are congruent if one fits exactly on the other. For triangles, congruence is proved by: SSS (three equal sides), SAS (two sides and included angle), ASA (two angles and included side), RHS (right angle, hypotenuse, one side). Corresponding parts of congruent triangles are equal (CPCTC) — once congruence is proved, all matching sides and angles can be used." },
          { heading: "Using congruence", body: "In problems, look for shared sides, vertical opposite angles, or angles on a straight line to establish the conditions for a congruence test. Once two triangles are proven congruent, transfer measurements between them. This is the foundation for many geometric proofs and is heavily used in circle geometry problems." },
        ],
        keyFormulas: [
          { name: "Tests", statement: "SSS, SAS, ASA, RHS" },
        ],
        workedExample: { problem: "Triangles ABC and DEF have AB=DE, BC=EF, AC=DF. Are they congruent?", solution: "All three sides equal → SSS → congruent. All corresponding angles equal too." },
      },
      questions: [
        {
          id: "olm-u4-s3-co-q1", difficulty: "foundation", totalMarks: 1,
          stem: "Two triangles are congruent if…",
          response: { type: "mcq", choices: [
            { id: "a", text: "They have equal perimeters only" },
            { id: "b", text: "They have the same area" },
            { id: "c", text: "They look similar" },
            { id: "d", text: "All corresponding sides and angles are equal" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "Congruent", statement: "Same shape and size." }], steps: [{ reasoning: "Congruence = identical.", marks: 1, markCode: "A" }], finalAnswer: "All corresponding parts equal" },
        },
        {
          id: "olm-u4-s3-co-q2", difficulty: "foundation", totalMarks: 2,
          stem: "Triangles have two equal sides and the included angle equal. Which test applies?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "theorem", name: "SAS", statement: "Two sides + included angle." }], steps: [
            { reasoning: "SAS (side-angle-side).", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "SAS" },
        },
        {
          id: "olm-u4-s3-co-q3", difficulty: "core", totalMarks: 3,
          stem: "In right triangles, hypotenuse and one side are equal. Which congruence test applies?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "theorem", name: "RHS", statement: "Right angle + hypotenuse + side." }], steps: [
            { reasoning: "RHS test — valid for right-angled triangles.", marks: 1, markCode: "M" },
            { reasoning: "Answer: RHS.", marks: 1, markCode: "M" },
            { reasoning: "Other side follows by Pythagoras.", marks: 1, markCode: "A" },
          ], finalAnswer: "RHS" },
        },
        {
          id: "olm-u4-s3-co-q4", difficulty: "core", totalMarks: 4,
          stem: "Prove that the diagonals of a rectangle bisect each other, using congruent triangles.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Proof via congruence", statement: "Find congruent triangles." }], steps: [
            { reasoning: "Rectangles ABCD: triangles ABC and CDA share AC; AB=CD, BC=DA, angles right → RHS congruent.", marks: 1, markCode: "M" },
            { reasoning: "Alternatively triangles AOB and COD: AB=CD, vertical angles equal, angles OAB=OCD (alternate) → ASA.", marks: 1, markCode: "M" },
            { reasoning: "Congruence gives AO=OC and BO=OD → diagonals bisect each other.", marks: 1, markCode: "M" },
            { reasoning: "Proof complete.", marks: 1, markCode: "A" },
          ], finalAnswer: "Diagonals bisect each other" },
        },
        {
          id: "olm-u4-s3-co-q5", difficulty: "foundation", totalMarks: 1,
          stem: "Which of the following is NOT a valid congruence test for triangles?",
          response: { type: "mcq", choices: [
            { id: "a", text: "ASA" },
            { id: "b", text: "SSA" },
            { id: "c", text: "SSS" },
            { id: "d", text: "SAS" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "theorem", name: "Congruence tests", statement: "SSA is ambiguous." }], steps: [{ reasoning: "SSA does not guarantee congruence.", marks: 1, markCode: "A" }], finalAnswer: "SSA" },
        },
        {
          id: "olm-u4-s3-co-q6", difficulty: "foundation", totalMarks: 1,
          stem: "Two triangles have all three pairs of corresponding sides equal. The congruence test that applies is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "SSS" },
            { id: "b", text: "RHS" },
            { id: "c", text: "ASA" },
            { id: "d", text: "SAS" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "theorem", name: "SSS", statement: "Three equal sides." }], steps: [{ reasoning: "All sides equal → SSS.", marks: 1, markCode: "A" }], finalAnswer: "SSS" },
        },
        {
          id: "olm-u4-s3-co-q7", difficulty: "foundation", totalMarks: 1,
          stem: "CPCTC stands for…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Corresponding angles of similar triangles are equal" },
            { id: "b", text: "Common parts of congruent triangles are equal" },
            { id: "c", text: "Corresponding sides of congruent triangles are similar" },
            { id: "d", text: "Corresponding parts of congruent triangles are equal" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "CPCTC", statement: "Corresponding parts equal." }], steps: [{ reasoning: "Standard abbreviation.", marks: 1, markCode: "A" }], finalAnswer: "Corresponding parts of congruent triangles are equal" },
        },
        {
          id: "olm-u4-s3-co-q8", difficulty: "core", totalMarks: 2,
          stem: "Triangle ABC is congruent to triangle DEF. AB = 3 cm, BC = 4 cm, CA = 5 cm and DE = 3 cm, EF = 4 cm. Find DF.",
          response: { type: "numeric", parts: [{ label: "a", answer: 5 }] },
          markscheme: { principles: [{ kind: "theorem", name: "CPCTC", statement: "Corresponding sides equal." }], steps: [
            { reasoning: "Congruent → corresponding sides equal: $DF=CA=5$ cm.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 5 cm.", marks: 1, markCode: "A" },
          ], finalAnswer: "5 cm" },
        },
        {
          id: "olm-u4-s3-co-q9", difficulty: "core", totalMarks: 3,
          stem: "In triangles PQR and STU, PQ = ST, QR = TU and PR = SU. State the congruence test and one conclusion that follows.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "theorem", name: "SSS", statement: "Three sides equal." }], steps: [
            { reasoning: "All three corresponding sides are equal → SSS.", marks: 1, markCode: "M" },
            { reasoning: "By CPCTC, e.g. angle P = angle S (or all corresponding angles equal).", marks: 1, markCode: "M" },
            { reasoning: "Answer stated.", marks: 1, markCode: "A" },
          ], finalAnswer: "SSS; corresponding angles equal" },
        },
        {
          id: "olm-u4-s3-co-q10", difficulty: "core", totalMarks: 2,
          stem: "Triangle ABC is congruent to triangle DEF. Angle A = 40° and angle B = 60°. Find angle C.",
          response: { type: "numeric", parts: [{ label: "a", answer: 80 }] },
          markscheme: { principles: [{ kind: "property", name: "Angle sum", statement: "180° in a triangle." }], steps: [
            { reasoning: "$C=180-40-60=80°$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $80°$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$80°$" },
        },
        {
          id: "olm-u4-s3-co-q11", difficulty: "challenge", totalMarks: 1,
          stem: "The RHS congruence test can be used only for…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Right-angled triangles" },
            { id: "b", text: "Any triangle" },
            { id: "c", text: "Equilateral triangles" },
            { id: "d", text: "Isosceles triangles" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "theorem", name: "RHS", statement: "Requires right angle." }], steps: [{ reasoning: "RHS applies only to right-angled triangles.", marks: 1, markCode: "A" }], finalAnswer: "Right-angled triangles" },
        },
        {
          id: "olm-u4-s3-co-q12", difficulty: "challenge", totalMarks: 4,
          stem: "Prove that the diagonals of a rectangle are equal in length, using congruent triangles.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Proof via congruence", statement: "RHS on two triangles." }], steps: [
            { reasoning: "In rectangle ABCD, consider triangles ABC and DCB: AB = DC (opposite sides), BC is common, angles ABC and DCB are both $90°$.", marks: 1, markCode: "M" },
            { reasoning: "So the triangles are congruent by RHS.", marks: 1, markCode: "M" },
            { reasoning: "By CPCTC, AC = DB.", marks: 1, markCode: "M" },
            { reasoning: "Proof complete: the diagonals are equal.", marks: 1, markCode: "A" },
          ], finalAnswer: "Diagonals are equal" },
        },
        {
          id: "olm-u4-s3-co-q13", difficulty: "core", totalMarks: 2,
          stem: "Triangle ABC is congruent to triangle DEF. The sides of ABC are 3 cm, 4 cm and 5 cm. Find the perimeter of DEF.",
          response: { type: "numeric", parts: [{ label: "a", answer: 12 }] },
          markscheme: { principles: [{ kind: "theorem", name: "CPCTC", statement: "Corresponding sides equal." }], steps: [
            { reasoning: "DEF has sides 3, 4, 5 → perimeter $=12$ cm.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 12 cm.", marks: 1, markCode: "A" },
          ], finalAnswer: "12 cm" },
        },
        {
          id: "olm-u4-s3-co-q14", difficulty: "core", totalMarks: 3,
          stem: "Two triangles have two sides equal and a non-included angle equal. Can you conclude the triangles are congruent? Explain.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "theorem", name: "SSA", statement: "Not a valid test." }], steps: [
            { reasoning: "No — this is the SSA case, which is ambiguous.", marks: 1, markCode: "M" },
            { reasoning: "Two different triangles can share two sides and a non-included angle.", marks: 1, markCode: "M" },
            { reasoning: "Answer: cannot conclude congruence.", marks: 1, markCode: "A" },
          ], finalAnswer: "No, SSA is ambiguous" },
        },
        {
          id: "olm-u4-s3-co-q15", difficulty: "challenge", totalMarks: 4,
          stem: "In quadrilateral ABCD, AB = AD and CB = CD. Prove that AC bisects angle BAD and angle BCD.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Proof via SSS", statement: "Shared diagonal AC." }], steps: [
            { reasoning: "Triangles ABC and ADC: AB = AD, BC = DC, AC common → congruent by SSS.", marks: 1, markCode: "M" },
            { reasoning: "By CPCTC, angle BAC = angle DAC and angle BCA = angle DCA.", marks: 1, markCode: "M" },
            { reasoning: "Equal angles on either side of AC → AC bisects angle BAD and angle BCD.", marks: 1, markCode: "M" },
            { reasoning: "Proof complete.", marks: 1, markCode: "A" },
          ], finalAnswer: "AC bisects both angles" },
        },
        {
          id: "olm-u4-s3-co-q16", difficulty: "core", totalMarks: 1,
          stem: "Two congruent triangles always have…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Only equal corresponding angles" },
            { id: "b", text: "Equal areas and perimeters" },
            { id: "c", text: "Only equal perimeters" },
            { id: "d", text: "The same orientation" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "Congruent", statement: "Identical shape and size." }], steps: [{ reasoning: "All corresponding parts equal → equal area and perimeter.", marks: 1, markCode: "A" }], finalAnswer: "Equal areas and perimeters" },
        },
      ],
    },
    {
      id: "olm-u4-s3-similar",
      title: "Similar shapes and scale factor",
      skill: "Apply similarity and scale factors at O Level.",
      lesson: {
        sections: [
          { heading: "Similarity", body: "Similar shapes have equal corresponding angles and proportional sides. The scale factor $k$ relates them: $\\text{new}=k\\times\\text{old}$. Lengths scale by $k$, areas by $k^2$, volumes by $k^3$. For triangles, similarity is proved by AA (two equal angles) or SSS/SAS with proportional sides." },
          { heading: "Using scale factor", body: "To find a missing length: identify corresponding sides, compute the scale factor, multiply. For areas: if lengths scale by $k$, area scales by $k^2$ — e.g. a map scale of 1:50,000 means areas are $50{,}000^2$ times smaller. Shadow problems are classic applications: similar triangles formed by object, shadow and sun's rays." },
        ],
        keyFormulas: [
          { name: "Scale factor", statement: "Length $\\times k$; area $\\times k^2$; volume $\\times k^3$" },
          { name: "AA test", statement: "Two equal angles → similar" },
        ],
        workedExample: { problem: "Two similar triangles have sides 3,4,5 and 6,8,10. Find the scale factor and ratio of areas.", solution: "$k=\\frac{6}{3}=2$; area ratio $=k^2=4$ → areas in ratio 1:4." },
      },
      questions: [
        {
          id: "olm-u4-s3-si-q1", difficulty: "foundation", totalMarks: 1,
          stem: "Similar shapes have…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Equal perimeters" },
            { id: "b", text: "Equal angles and proportional sides" },
            { id: "c", text: "Equal sides only" },
            { id: "d", text: "Same area" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "Similar", statement: "Same shape, proportional." }], steps: [{ reasoning: "Standard definition.", marks: 1, markCode: "A" }], finalAnswer: "Equal angles, proportional sides" },
        },
        {
          id: "olm-u4-s3-si-q2", difficulty: "foundation", totalMarks: 2,
          stem: "Similar triangles have scale factor 3. What is the ratio of their areas?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "formula", name: "Area scaling", statement: "$k^2$." }], steps: [
            { reasoning: "$3^2=9$ → ratio 1:9.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 1:9.", marks: 1, markCode: "A" },
          ], finalAnswer: "1:9" },
        },
        {
          id: "olm-u4-s3-si-q3", difficulty: "core", totalMarks: 3,
          stem: "A triangle has sides 4, 5, 6. A similar triangle has shortest side 10. Find its longest side.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Scale factor", statement: "Corresponding sides." }], steps: [
            { reasoning: "$k=\\frac{10}{4}=2.5$; longest $=6\\times2.5=15$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 15.", marks: 1, markCode: "M" },
            { reasoning: "Check sides: 10, 12.5, 15 — proportional ✓.", marks: 1, markCode: "A" },
          ], finalAnswer: "15" },
        },
        {
          id: "olm-u4-s3-si-q4", difficulty: "core", totalMarks: 4,
          stem: "A model car is built at scale 1:24. The real car's surface area is 36 m². Find the model's surface area.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Area scale", statement: "$k^2$ with $k=1/24$." }], steps: [
            { reasoning: "$k=\\frac1{24}$; area factor $=\\frac1{576}$.", marks: 1, markCode: "M" },
            { reasoning: "Model area $=\\frac{36}{576}=0.0625$ m² $=625$ cm².", marks: 1, markCode: "M" },
            { reasoning: "Answer: 625 cm² (or $0.0625$ m²).", marks: 1, markCode: "M" },
            { reasoning: "Units converted correctly.", marks: 1, markCode: "A" },
          ], finalAnswer: "625 cm²" },
        },
        {
          id: "olm-u4-s3-si-q5", difficulty: "foundation", totalMarks: 1,
          stem: "If two shapes are similar, their corresponding angles are…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Complementary" },
            { id: "b", text: "Supplementary" },
            { id: "c", text: "Proportional" },
            { id: "d", text: "Equal" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "Similar", statement: "Equal angles." }], steps: [{ reasoning: "Corresponding angles are equal.", marks: 1, markCode: "A" }], finalAnswer: "Equal" },
        },
        {
          id: "olm-u4-s3-si-q6", difficulty: "foundation", totalMarks: 1,
          stem: "Two similar triangles have sides 5, 7, 9 and 10, 14, 18. The scale factor is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "3" },
            { id: "b", text: "1" },
            { id: "c", text: "4" },
            { id: "d", text: "2" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "Scale factor", statement: "Ratio of corresponding sides." }], steps: [{ reasoning: "$\\frac{10}{5}=2$.", marks: 1, markCode: "A" }], finalAnswer: "2" },
        },
        {
          id: "olm-u4-s3-si-q7", difficulty: "foundation", totalMarks: 2,
          stem: "A shape is enlarged with scale factor 4. A side of length 3.5 cm becomes…",
          response: { type: "numeric", parts: [{ label: "a", answer: 14 }] },
          markscheme: { principles: [{ kind: "formula", name: "Scale factor", statement: "New = k × old." }], steps: [
            { reasoning: "$4\\times3.5=14$ cm.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 14 cm.", marks: 1, markCode: "A" },
          ], finalAnswer: "14 cm" },
        },
        {
          id: "olm-u4-s3-si-q8", difficulty: "core", totalMarks: 1,
          stem: "The volumes of two similar solids are in the ratio 8 : 1. The ratio of their corresponding lengths is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "3 : 1" },
            { id: "b", text: "2 : 1" },
            { id: "c", text: "4 : 1" },
            { id: "d", text: "8 : 1" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "formula", name: "Volume scaling", statement: "$k^3$." }], steps: [{ reasoning: "$k^3=8$ → $k=2$.", marks: 1, markCode: "A" }], finalAnswer: "2 : 1" },
        },
        {
          id: "olm-u4-s3-si-q9", difficulty: "core", totalMarks: 3,
          stem: "The areas of two similar shapes are in the ratio 9 : 4. Find the scale factor from the smaller to the larger shape.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "formula", name: "Area scaling", statement: "$k^2$." }], steps: [
            { reasoning: "$k^2=\\frac{9}{4}$.", marks: 1, markCode: "M" },
            { reasoning: "$k=\\frac32=1.5$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $1.5$ (or $\\frac32$).", marks: 1, markCode: "A" },
          ], finalAnswer: "$\\frac32$" },
        },
        {
          id: "olm-u4-s3-si-q10", difficulty: "core", totalMarks: 3,
          stem: "A model is made at a scale of 1 : 50. A real length of 25 m is represented on the model by…",
          response: { type: "numeric", parts: [{ label: "a", answer: 0.5 }] },
          markscheme: { principles: [{ kind: "technique", name: "Map scale", statement: "Divide by scale." }], steps: [
            { reasoning: "Model length $=\\frac{25}{50}=0.5$ m.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 0.5 m (50 cm).", marks: 1, markCode: "M" },
            { reasoning: "Answer stated.", marks: 1, markCode: "A" },
          ], finalAnswer: "0.5 m" },
        },
        {
          id: "olm-u4-s3-si-q11", difficulty: "challenge", totalMarks: 1,
          stem: "When lengths are scaled by a factor of $k$, surface areas scale by…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$k^3$" },
            { id: "b", text: "$k$" },
            { id: "c", text: "$k^2$" },
            { id: "d", text: "$2k$" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "formula", name: "Area scaling", statement: "$k^2$." }], steps: [{ reasoning: "Area scales by $k^2$.", marks: 1, markCode: "A" }], finalAnswer: "$k^2$" },
        },
        {
          id: "olm-u4-s3-si-q12", difficulty: "challenge", totalMarks: 4,
          stem: "At the same time of day, a vertical stick 1.5 m tall casts a shadow 0.75 m long. A nearby flagpole casts a shadow 6 m long. Find the height of the flagpole.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Shadow similarity", statement: "Similar right triangles." }], steps: [
            { reasoning: "Triangles are similar (same sun angle): $\\frac{\\text{height}}{\\text{shadow}}$ is constant.", marks: 1, markCode: "M" },
            { reasoning: "Ratio $=\\frac{1.5}{0.75}=2$.", marks: 1, markCode: "M" },
            { reasoning: "Flagpole height $=2\\times6=12$ m.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 12 m.", marks: 1, markCode: "A" },
          ], finalAnswer: "12 m" },
        },
        {
          id: "olm-u4-s3-si-q13", difficulty: "foundation", totalMarks: 2,
          stem: "Two similar shapes have scale factor 3. What is the ratio of their volumes?",
          response: { type: "numeric", parts: [{ label: "a", answer: 27 }] },
          markscheme: { principles: [{ kind: "formula", name: "Volume scaling", statement: "$k^3$." }], steps: [
            { reasoning: "$3^3=27$ → ratio 1 : 27.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 1 : 27.", marks: 1, markCode: "A" },
          ], finalAnswer: "1 : 27" },
        },
        {
          id: "olm-u4-s3-si-q14", difficulty: "core", totalMarks: 3,
          stem: "Two similar triangles have areas 16 cm² and 36 cm². Find the ratio of a pair of corresponding sides.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "formula", name: "Area scaling", statement: "$k^2$ then sides." }], steps: [
            { reasoning: "$k^2=\\frac{36}{16}=\\frac94$ → $k=\\frac32$.", marks: 1, markCode: "M" },
            { reasoning: "Sides in ratio $16{:}36$ square-root → $4{:}6=2{:}3$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 2 : 3.", marks: 1, markCode: "A" },
          ], finalAnswer: "2 : 3" },
        },
        {
          id: "olm-u4-s3-si-q15", difficulty: "challenge", totalMarks: 4,
          stem: "On a map with scale 1 : 25 000, two towns are 8 cm apart. Find the real distance between them in kilometres.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Map scale", statement: "Multiply then convert." }], steps: [
            { reasoning: "Real distance $=8\\times25\\,000=200\\,000$ cm.", marks: 1, markCode: "M" },
            { reasoning: "$200\\,000$ cm $=2000$ m $=2$ km.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown in km.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 2 km.", marks: 1, markCode: "A" },
          ], finalAnswer: "2 km" },
        },
        {
          id: "olm-u4-s3-si-q16", difficulty: "core", totalMarks: 2,
          stem: "Two similar shapes have scale factor 2.5. The perimeter of the smaller is 12 cm. Find the perimeter of the larger.",
          response: { type: "numeric", parts: [{ label: "a", answer: 30 }] },
          markscheme: { principles: [{ kind: "formula", name: "Perimeter scaling", statement: "Scales by $k$." }], steps: [
            { reasoning: "$2.5\\times12=30$ cm.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 30 cm.", marks: 1, markCode: "A" },
          ], finalAnswer: "30 cm" },
        },
      ],
    },
  ],
  notes: [
    { id: "olm-u4-s3-sim-notes", title: "Congruence & similarity — notes", summary: "Tests and scale factors.",
      sections: [
        { heading: "Congruence", body: "SSS, SAS, ASA, RHS; CPCTC gives equal parts." },
        { heading: "Similarity", body: "Equal angles + proportional sides; length $\\times k$, area $\\times k^2$, volume $\\times k^3$." },
      ] },
  ],
};
