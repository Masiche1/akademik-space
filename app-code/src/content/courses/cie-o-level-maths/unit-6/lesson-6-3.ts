import type { Lesson } from "../../../types.ts";

export const lesson63: Lesson = {
  id: "olm-u6-lesson-6-3",
  code: "6-3",
  title: "Sine and Cosine Rules",
  goal: "I CAN solve non-right-angled triangles using the sine and cosine rules.",
  standards: ["4024: trigonometry"],
  vocabulary: [
    { term: "Sine rule", definition: "$\\frac{a}{\\sin A}=\\frac{b}{\\sin B}=\\frac{c}{\\sin C}$." },
    { term: "Cosine rule", definition: "$a^2=b^2+c^2-2bc\\cos A$." },
    { term: "Ambiguous case", definition: "SSA can give two possible triangles." },
    { term: "Included angle", definition: "Angle between two known sides." },
  ],
  concepts: [
    {
      id: "olm-u6-s3-sine",
      title: "The sine rule",
      skill: "Apply the sine rule at O Level.",
      lesson: {
        sections: [
          { heading: "When to use it", body: "The sine rule works for any triangle (not just right-angled). Use it when you know: two angles and one side (AAS/ASA), or two sides and a non-included angle (SSA — watch the ambiguous case). Rearrange to find a side: $a=\\frac{b\\sin A}{\\sin B}$; or an angle: $\\sin A=\\frac{a\\sin B}{b}$." },
          { heading: "Ambiguous case", body: "With SSA (two sides and a non-included angle), there can be two valid triangles — the 'ambiguous case'. Check whether the found angle plus the given angle is < 180° and whether the geometry permits a second triangle. For O Level, state both solutions if both exist. Also watch for obtuse angles: if $\\sin A>1$ no triangle exists; if the computed angle is obtuse, use $180°-$ that angle for the acute solution." },
        ],
        keyFormulas: [
          { name: "Sine rule", statement: "$\\frac{a}{\\sin A}=\\frac{b}{\\sin B}=\\frac{c}{\\sin C}$" },
        ],
        workedExample: { problem: "Triangle has A=40°, B=60°, b=8 cm. Find side a.", solution: "$\\frac{a}{\\sin40°}=\\frac{8}{\\sin60°}$ → $a=\\frac{8\\sin40°}{\\sin60°}=\\frac{8\\times0.643}{0.866}\\approx5.94$ cm." },
      },
      questions: [
        {
          id: "olm-u6-s3-si-q1", difficulty: "foundation", totalMarks: 1,
          stem: "The sine rule states that…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\frac{a}{\\sin A}=\\frac{b}{\\sin B}$" }, { id: "b", text: "$a^2=b^2+c^2$" }, { id: "c", text: "$a=b+c$" }, { id: "d", text: "$\\sin A=\\cos B$" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "formula", name: "Sine rule", statement: "Sides proportional to sine of angles." }], steps: [{ reasoning: "Standard statement.", marks: 1, markCode: "A" }], finalAnswer: "$\\frac{a}{\\sin A}=\\frac{b}{\\sin B}$" },
        },
        {
          id: "olm-u6-s3-si-q2", difficulty: "foundation", totalMarks: 2,
          stem: "A triangle has angles 50° and 70° and the side opposite 50° is 6 cm. Find the side opposite 70°.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "formula", name: "Sine rule", statement: "Proportion." }], steps: [
            { reasoning: "$\\frac{x}{\\sin70°}=\\frac{6}{\\sin50°}$ → $x=\\frac{6\\sin70°}{\\sin50°}=\\frac{6\\times0.940}{0.766}\\approx7.36$ cm.", marks: 1, markCode: "M" },
            { reasoning: "Answer: ≈7.4 cm.", marks: 1, markCode: "A" },
          ], finalAnswer: "≈7.4 cm" },
        },
        {
          id: "olm-u6-s3-si-q3", difficulty: "core", totalMarks: 3,
          stem: "Triangle ABC has a=10, b=8, A=45°. Find angle B (acute).",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Sine rule for angle", statement: "Rearrange for sin B." }], steps: [
            { reasoning: "$\\sin B=\\frac{b\\sin A}{a}=\\frac{8\\sin45°}{10}=\\frac{8\\times0.707}{10}=0.566$.", marks: 1, markCode: "M" },
            { reasoning: "$B=\\sin^{-1}(0.566)\\approx34.5°$ (acute).", marks: 1, markCode: "M" },
            { reasoning: "Answer: ≈34.5°.", marks: 1, markCode: "A" },
          ], finalAnswer: "≈34.5°" },
        },
        {
          id: "olm-u6-s3-si-q4", difficulty: "core", totalMarks: 4,
          stem: "In triangle ABC, a=12, b=9, A=80°. Determine whether there are one or two possible triangles and find B.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Ambiguous case", statement: "SSA check." }], steps: [
            { reasoning: "$\\sin B=\\frac{9\\sin80°}{12}=\\frac{9\\times0.985}{12}=0.739$ → $B=47.7°$ or $180-47.7=132.3°$.", marks: 1, markCode: "M" },
            { reasoning: "Check $B=132.3°$: $A+B=80+132.3=212.3>180$ → invalid.", marks: 1, markCode: "M" },
            { reasoning: "Only one triangle: $B\\approx47.7°$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: one triangle, $B\\approx47.7°$.", marks: 1, markCode: "A" },
          ], finalAnswer: "One triangle; $B\\approx47.7°$" },
        },
      ],
    },
    {
      id: "olm-u6-s3-cosine",
      title: "The cosine rule",
      skill: "Apply the cosine rule at O Level.",
      lesson: {
        sections: [
          { heading: "When to use it", body: "The cosine rule works for any triangle. Use it when you know: two sides and the included angle (SAS) — to find the third side; or all three sides (SSS) — to find an angle. Formula: $a^2=b^2+c^2-2bc\\cos A$. It's the generalisation of Pythagoras — when $A=90°$, $\\cos A=0$ and it reduces to $a^2=b^2+c^2$." },
          { heading: "Rearranged for angles", body: "To find an angle: $\\cos A=\\frac{b^2+c^2-a^2}{2bc}$. Always check the angle is valid — cosine must be between -1 and 1. For obtuse angles, cosine is negative, which correctly gives angles > 90°. Use a calculator in degree mode and ensure you take $\\cos^{-1}$ of the ratio, not the ratio itself." },
        ],
        keyFormulas: [
          { name: "Cosine rule", statement: "$a^2=b^2+c^2-2bc\\cos A$" },
          { name: "Angle form", statement: "$\\cos A=\\frac{b^2+c^2-a^2}{2bc}$" },
        ],
        workedExample: { problem: "Triangle has b=5, c=8, A=60°. Find side a.", solution: "$a^2=25+64-2\\times5\\times8\\times\\cos60°=89-40=49$ → $a=7$ cm." },
      },
      questions: [
        {
          id: "olm-u6-s3-co-q1", difficulty: "foundation", totalMarks: 1,
          stem: "The cosine rule is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$a^2=b^2+c^2-2bc\\cos A$" }, { id: "b", text: "$a^2=b^2+c^2+2bc\\cos A$" }, { id: "c", text: "$a=b+c$" }, { id: "d", text: "$a^2=b^2-c^2$" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "formula", name: "Cosine rule", statement: "Minus sign." }], steps: [{ reasoning: "Standard formula.", marks: 1, markCode: "A" }], finalAnswer: "$a^2=b^2+c^2-2bc\\cos A$" },
        },
        {
          id: "olm-u6-s3-co-q2", difficulty: "foundation", totalMarks: 2,
          stem: "Triangle has sides b=3, c=4, included angle A=90°. Find a (verify with Pythagoras).",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "formula", name: "Cosine rule at 90°", statement: "Reduces to Pythagoras." }], steps: [
            { reasoning: "$a^2=9+16-0=25$ → $a=5$.", marks: 1, markCode: "M" },
            { reasoning: "Matches Pythagoras $3^2+4^2=5^2$ ✓.", marks: 1, markCode: "A" },
          ], finalAnswer: "5" },
        },
        {
          id: "olm-u6-s3-co-q3", difficulty: "core", totalMarks: 3,
          stem: "Triangle has b=7, c=10, A=50°. Find side a.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Cosine rule", statement: "Substitute carefully." }], steps: [
            { reasoning: "$a^2=49+100-140\\cos50°=149-140\\times0.643=149-90.0=59.0$.", marks: 1, markCode: "M" },
            { reasoning: "$a=\\sqrt{59.0}\\approx7.68$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: ≈7.7.", marks: 1, markCode: "A" },
          ], finalAnswer: "≈7.7" },
        },
        {
          id: "olm-u6-s3-co-q4", difficulty: "core", totalMarks: 4,
          stem: "Triangle has sides a=8, b=6, c=10. Find angle A.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Cosine rule for angle", statement: "Rearrange." }], steps: [
            { reasoning: "$\\cos A=\\frac{36+100-64}{2\\times6\\times10}=\\frac{72}{120}=0.6$.", marks: 1, markCode: "M" },
            { reasoning: "$A=\\cos^{-1}(0.6)\\approx53.1°$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: ≈53.1°.", marks: 1, markCode: "M" },
            { reasoning: "Check: 6-8-10 is 3-4-5 scaled; angle opposite 8 is ≈53.1° ✓.", marks: 1, markCode: "A" },
          ], finalAnswer: "≈53.1°" },
        },
      ],
    },
  ],
  notes: [
    { id: "olm-u6-s3-rules-notes", title: "Sine & cosine rules — notes", summary: "Non-right-angled triangles.",
      sections: [
        { heading: "Sine rule", body: "$\\frac{a}{\\sin A}=\\frac{b}{\\sin B}$; AAS/ASA or SSA; watch ambiguous case." },
        { heading: "Cosine rule", body: "$a^2=b^2+c^2-2bc\\cos A$; SAS→side, SSS→angle; reduces to Pythagoras at 90°." },
      ] },
  ],
};
