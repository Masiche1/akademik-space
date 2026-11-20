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
            { id: "a", text: "All corresponding sides and angles are equal" }, { id: "b", text: "They have the same area" }, { id: "c", text: "They look similar" }, { id: "d", text: "They have equal perimeters only" },
          ], correctChoiceId: "a" },
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
            { id: "a", text: "Equal angles and proportional sides" }, { id: "b", text: "Equal sides only" }, { id: "c", text: "Same area" }, { id: "d", text: "Equal perimeters" },
          ], correctChoiceId: "a" },
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
