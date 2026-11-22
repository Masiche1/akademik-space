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
            { id: "a", text: "$\\sin A=\\cos B$" },
            { id: "b", text: "$a=b+c$" },
            { id: "c", text: "$a^2=b^2+c^2$" },
            { id: "d", text: "$\\frac{a}{\\sin A}=\\frac{b}{\\sin B}$" },
          ], correctChoiceId: "d" },
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
        {
          id: "olm-u6-s3-si-q5", difficulty: "foundation", totalMarks: 1,
          stem: "The sine rule is most useful when you know…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Only one side" },
            { id: "b", text: "Two angles and one side" },
            { id: "c", text: "The area" },
            { id: "d", text: "Three sides only" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "technique", name: "Sine rule", statement: "AAS/ASA or SSA." }], steps: [{ reasoning: "Needs angle–side correspondence.", marks: 1, markCode: "A" }], finalAnswer: "Two angles and one side" },
        },
        {
          id: "olm-u6-s3-si-q6", difficulty: "foundation", totalMarks: 2,
          stem: "A triangle has angles $40°$ and $80°$. The side opposite $40°$ is 10 cm. Find the side opposite $80°$, correct to 2 decimal places.",
          response: { type: "numeric", parts: [{ label: "a", answer: 15.33, tolerance: 0.01, unit: "cm" }] },
          markscheme: { principles: [{ kind: "formula", name: "Sine rule", statement: "$\\frac{a}{\\sin A}=\\frac{b}{\\sin B}$." }], steps: [
            { reasoning: "$x=\\frac{10\\sin80°}{\\sin40°}=\\frac{10\\times0.9848}{0.6428}=15.33$ cm.", marks: 1, markCode: "M" },
            { reasoning: "Answer: ≈15.33 cm.", marks: 1, markCode: "A" },
          ], finalAnswer: "≈15.33 cm" },
        },
        {
          id: "olm-u6-s3-si-q7", difficulty: "foundation", totalMarks: 2,
          stem: "In a triangle, $a=12$, $A=50°$ and $B=70°$. Find side $b$, correct to 2 decimal places.",
          response: { type: "numeric", parts: [{ label: "a", answer: 14.69, tolerance: 0.01 }] },
          markscheme: { principles: [{ kind: "formula", name: "Sine rule", statement: "Proportion." }], steps: [
            { reasoning: "$b=\\frac{12\\sin70°}{\\sin50°}=\\frac{12\\times0.9397}{0.766}=14.69$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: ≈14.69.", marks: 1, markCode: "A" },
          ], finalAnswer: "≈14.69" },
        },
        {
          id: "olm-u6-s3-si-q8", difficulty: "core", totalMarks: 2,
          stem: "Which set of information is ideal for the sine rule?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Two angles and a side" },
            { id: "b", text: "One side and one angle" },
            { id: "c", text: "Two sides and included angle" },
            { id: "d", text: "Three sides only" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "technique", name: "Rule choice", statement: "AAS → sine." }], steps: [
            { reasoning: "SAS/SSS favour cosine rule.", marks: 1, markCode: "M" },
            { reasoning: "Correct choice.", marks: 1, markCode: "A" },
          ], finalAnswer: "Two angles and a side" },
        },
        {
          id: "olm-u6-s3-si-q9", difficulty: "core", totalMarks: 3,
          stem: "Triangle ABC has $a=14$, $b=10$, $A=35°$. Find angle B (acute).",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Sine rule", statement: "Rearrange for sin B." }], steps: [
            { reasoning: "$\\sin B=\\frac{10\\sin35°}{14}=\\frac{10\\times0.5736}{14}=0.410$.", marks: 1, markCode: "M" },
            { reasoning: "$B=\\sin^{-1}(0.410)\\approx24.2°$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: ≈24.2°.", marks: 1, markCode: "A" },
          ], finalAnswer: "≈24.2°" },
        },
        {
          id: "olm-u6-s3-si-q10", difficulty: "core", totalMarks: 3,
          stem: "Triangle ABC has $A=65°$, $B=45°$, $a=12$. Find side c.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "formula", name: "Sine rule", statement: "Find C first." }], steps: [
            { reasoning: "$C=180-65-45=70°$.", marks: 1, markCode: "M" },
            { reasoning: "$c=\\frac{12\\sin70°}{\\sin65°}=\\frac{12\\times0.9397}{0.9063}=12.44$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: ≈12.44.", marks: 1, markCode: "A" },
          ], finalAnswer: "≈12.44" },
        },
        {
          id: "olm-u6-s3-si-q11", difficulty: "core", totalMarks: 3,
          stem: "Triangle ABC has $a=9$, $b=7$, $A=40°$. Find angle B (acute), correct to 2 decimal places.",
          response: { type: "numeric", parts: [{ label: "a", answer: 30.0, tolerance: 0.01, unit: "°" }] },
          markscheme: { principles: [{ kind: "technique", name: "Sine rule", statement: "SSA — check ambiguity." }], steps: [
            { reasoning: "$\\sin B=\\frac{7\\sin40°}{9}=\\frac{7\\times0.6428}{9}=0.500$.", marks: 1, markCode: "M" },
            { reasoning: "$B=\\sin^{-1}(0.500)\\approx30.0°$ (obtuse option $150°$ gives $A+B>180°$ → invalid).", marks: 1, markCode: "M" },
            { reasoning: "Answer: ≈30.0°.", marks: 1, markCode: "A" },
          ], finalAnswer: "≈30.0°" },
        },
        {
          id: "olm-u6-s3-si-q12", difficulty: "challenge", totalMarks: 2,
          stem: "The 'ambiguous case' of the sine rule occurs with which information?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Two angles and a side" },
            { id: "b", text: "Two sides and a non-included angle" },
            { id: "c", text: "Three sides" },
            { id: "d", text: "Two sides and included angle" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "SSA", statement: "Can give two triangles." }], steps: [
            { reasoning: "SSA is the ambiguous configuration.", marks: 1, markCode: "M" },
            { reasoning: "Correct choice.", marks: 1, markCode: "A" },
          ], finalAnswer: "Two sides and a non-included angle" },
        },
        {
          id: "olm-u6-s3-si-q13", difficulty: "challenge", totalMarks: 4,
          stem: "Triangle ABC has $a=10$, $b=8$, $A=50°$. Find all possible values of angle B.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Ambiguous case", statement: "Check both solutions." }], steps: [
            { reasoning: "$\\sin B=\\frac{8\\sin50°}{10}=\\frac{8\\times0.766}{10}=0.613$.", marks: 1, markCode: "M" },
            { reasoning: "$B=\\sin^{-1}(0.613)=37.8°$ or $180-37.8=142.2°$.", marks: 1, markCode: "M" },
            { reasoning: "Check: $142.2+50=192.2>180$ → obtuse option invalid; only one triangle.", marks: 1, markCode: "M" },
            { reasoning: "Answer: only $B\\approx37.8°$ (one triangle).", marks: 1, markCode: "A" },
          ], finalAnswer: "$B\\approx37.8°$ only" },
        },
        {
          id: "olm-u6-s3-si-q14", difficulty: "challenge", totalMarks: 4,
          stem: "Triangle ABC has $a=15$, $b=12$, $A=40°$. Show whether there is one or two triangles and find B.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Ambiguous case", statement: "SSA check." }], steps: [
            { reasoning: "$\\sin B=\\frac{12\\sin40°}{15}=\\frac{12\\times0.6428}{15}=0.514$.", marks: 1, markCode: "M" },
            { reasoning: "$B=30.9°$ or $149.1°$; check $149.1+40=189.1>180$ → invalid.", marks: 1, markCode: "M" },
            { reasoning: "One triangle only.", marks: 1, markCode: "M" },
            { reasoning: "Answer: one triangle, $B\\approx30.9°$.", marks: 1, markCode: "A" },
          ], finalAnswer: "One triangle; $B\\approx30.9°$" },
        },
        {
          id: "olm-u6-s3-si-q15", difficulty: "challenge", totalMarks: 2,
          stem: "Triangle ABC has $A=30°$, $B=60°$, $a=8$. Side c is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "12" },
            { id: "b", text: "16" },
            { id: "c", text: "8" },
            { id: "d", text: "4" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "formula", name: "Sine rule", statement: "$C=90°$." }], steps: [
            { reasoning: "$C=90°$; $c=\\frac{8\\sin90°}{\\sin30°}=\\frac{8}{0.5}=16$.", marks: 1, markCode: "M" },
            { reasoning: "Correct choice: 16.", marks: 1, markCode: "A" },
          ], finalAnswer: "16" },
        },
        {
          id: "olm-u6-s3-si-q16", difficulty: "challenge", totalMarks: 3,
          stem: "Triangle ABC has $A=40°$, $B=60°$, $a=7$. Find its perimeter, correct to 2 decimal places.",
          response: { type: "numeric", parts: [{ label: "a", answer: 27.16, tolerance: 0.01 }] },
          markscheme: { principles: [{ kind: "technique", name: "Sine rule", statement: "Find b and c." }], steps: [
            { reasoning: "$C=80°$; $b=\\frac{7\\sin60°}{\\sin40°}=9.43$, $c=\\frac{7\\sin80°}{\\sin40°}=10.73$.", marks: 1, markCode: "M" },
            { reasoning: "Perimeter $=7+9.43+10.73=27.16$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: ≈27.16.", marks: 1, markCode: "A" },
          ], finalAnswer: "≈27.16" },
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
            { id: "a", text: "$a^2=b^2+c^2+2bc\\cos A$" },
            { id: "b", text: "$a=b+c$" },
            { id: "c", text: "$a^2=b^2-c^2$" },
            { id: "d", text: "$a^2=b^2+c^2-2bc\\cos A$" },
          ], correctChoiceId: "d" },
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
        {
          id: "olm-u6-s3-co-q5", difficulty: "foundation", totalMarks: 1,
          stem: "The cosine rule for side $a$ is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$a^2=b^2+c^2-2bc\\cos A$" },
            { id: "b", text: "$a^2=b^2-c^2$" },
            { id: "c", text: "$\\frac{a}{\\sin A}=\\frac{b}{\\sin B}$" },
            { id: "d", text: "$a^2=b^2+c^2+2bc\\cos A$" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "formula", name: "Cosine rule", statement: "Minus sign." }], steps: [{ reasoning: "Standard formula.", marks: 1, markCode: "A" }], finalAnswer: "$a^2=b^2+c^2-2bc\\cos A$" },
        },
        {
          id: "olm-u6-s3-co-q6", difficulty: "foundation", totalMarks: 2,
          stem: "Triangle has $b=5$, $c=5$, $A=60°$. Find side $a$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 5 }] },
          markscheme: { principles: [{ kind: "formula", name: "Cosine rule", statement: "Substitute." }], steps: [
            { reasoning: "$a^2=25+25-50\\times0.5=25$ → $a=5$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 5.", marks: 1, markCode: "A" },
          ], finalAnswer: "5" },
        },
        {
          id: "olm-u6-s3-co-q7", difficulty: "foundation", totalMarks: 2,
          stem: "Triangle has sides 6, 8 and 10. Find the largest angle.",
          response: { type: "numeric", parts: [{ label: "a", answer: 90, unit: "°" }] },
          markscheme: { principles: [{ kind: "technique", name: "Cosine rule", statement: "Largest angle opp largest side." }], steps: [
            { reasoning: "$\\cos A=\\frac{36+64-100}{96}=0$ → $A=90°$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $90°$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$90°$" },
        },
        {
          id: "olm-u6-s3-co-q8", difficulty: "core", totalMarks: 2,
          stem: "The cosine rule is the best choice when you know…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Two sides and the included angle, or three sides" },
            { id: "b", text: "One side and one angle" },
            { id: "c", text: "Two angles and a side" },
            { id: "d", text: "Only angles" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "technique", name: "Rule choice", statement: "SAS or SSS." }], steps: [
            { reasoning: "Cosine rule handles SAS→side and SSS→angle.", marks: 1, markCode: "M" },
            { reasoning: "Correct choice.", marks: 1, markCode: "A" },
          ], finalAnswer: "SAS or SSS" },
        },
        {
          id: "olm-u6-s3-co-q9", difficulty: "core", totalMarks: 3,
          stem: "Triangle has $b=9$, $c=12$, $A=40°$. Find side $a$, correct to 2 decimal places.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Cosine rule", statement: "Substitute carefully." }], steps: [
            { reasoning: "$a^2=81+144-216\\cos40°=225-165.5=59.5$.", marks: 1, markCode: "M" },
            { reasoning: "$a=\\sqrt{59.5}\\approx7.72$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: ≈7.72.", marks: 1, markCode: "A" },
          ], finalAnswer: "≈7.72" },
        },
        {
          id: "olm-u6-s3-co-q10", difficulty: "core", totalMarks: 3,
          stem: "Triangle has sides 7, 8 and 9. Find the angle opposite the side of length 9, correct to 1 decimal place.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Cosine rule", statement: "Rearranged form." }], steps: [
            { reasoning: "$\\cos A=\\frac{49+64-81}{2\\times7\\times8}=\\frac{32}{112}=0.286$.", marks: 1, markCode: "M" },
            { reasoning: "$A=\\cos^{-1}(0.286)\\approx73.4°$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: ≈73.4°.", marks: 1, markCode: "A" },
          ], finalAnswer: "≈73.4°" },
        },
        {
          id: "olm-u6-s3-co-q11", difficulty: "core", totalMarks: 3,
          stem: "Triangle has $b=10$, $c=15$, $A=120°$. Find side $a$, correct to 2 decimal places.",
          response: { type: "numeric", parts: [{ label: "a", answer: 21.79, tolerance: 0.01 }] },
          markscheme: { principles: [{ kind: "technique", name: "Cosine rule", statement: "Obtuse angle — cos negative." }], steps: [
            { reasoning: "$a^2=100+225-300\\cos120°=325+150=475$.", marks: 1, markCode: "M" },
            { reasoning: "$a=\\sqrt{475}\\approx21.79$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: ≈21.79.", marks: 1, markCode: "A" },
          ], finalAnswer: "≈21.79" },
        },
        {
          id: "olm-u6-s3-co-q12", difficulty: "challenge", totalMarks: 2,
          stem: "When angle $A=90°$, the cosine rule $a^2=b^2+c^2-2bc\\cos A$ reduces to…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$a=b+c$" },
            { id: "b", text: "The sine rule" },
            { id: "c", text: "Pythagoras' theorem" },
            { id: "d", text: "$a=bc$" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "property", name: "Special case", statement: "$\\cos90°=0$." }], steps: [
            { reasoning: "$\\cos90°=0$ removes the last term.", marks: 1, markCode: "M" },
            { reasoning: "Correct choice: Pythagoras.", marks: 1, markCode: "A" },
          ], finalAnswer: "Pythagoras' theorem" },
        },
        {
          id: "olm-u6-s3-co-q13", difficulty: "challenge", totalMarks: 4,
          stem: "Triangle has sides 5, 6 and 8. Find the smallest angle, correct to 1 decimal place.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Cosine rule", statement: "Smallest angle opp smallest side." }], steps: [
            { reasoning: "$\\cos A=\\frac{36+64-25}{2\\times6\\times8}=\\frac{75}{96}=0.781$.", marks: 1, markCode: "M" },
            { reasoning: "$A=\\cos^{-1}(0.781)\\approx38.6°$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: ≈38.6°.", marks: 1, markCode: "M" },
            { reasoning: "Check: 5 is smallest side → smallest angle ✓.", marks: 1, markCode: "A" },
          ], finalAnswer: "≈38.6°" },
        },
        {
          id: "olm-u6-s3-co-q14", difficulty: "challenge", totalMarks: 4,
          stem: "Triangle has two sides 11 and 13 with included angle $70°$. Find the third side, correct to 2 decimal places.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Cosine rule", statement: "SAS case." }], steps: [
            { reasoning: "$a^2=121+169-286\\cos70°=290-97.8=192.2$.", marks: 1, markCode: "M" },
            { reasoning: "$a=\\sqrt{192.2}\\approx13.86$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: ≈13.86.", marks: 1, markCode: "M" },
            { reasoning: "Check: positive result, plausible triangle.", marks: 1, markCode: "A" },
          ], finalAnswer: "≈13.86" },
        },
        {
          id: "olm-u6-s3-co-q15", difficulty: "challenge", totalMarks: 3,
          stem: "Triangle has sides 4, 5 and 6. Find the largest angle, correct to 2 decimal places.",
          response: { type: "numeric", parts: [{ label: "a", answer: 82.82, tolerance: 0.01, unit: "°" }] },
          markscheme: { principles: [{ kind: "technique", name: "Cosine rule", statement: "Largest angle opp side 6." }], steps: [
            { reasoning: "$\\cos A=\\frac{16+25-36}{40}=\\frac{5}{40}=0.125$ → $A=\\cos^{-1}(0.125)=82.82°$.", marks: 1, markCode: "M" },
            { reasoning: "$\\approx82.82°$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: ≈82.82°.", marks: 1, markCode: "A" },
          ], finalAnswer: "≈82.82°" },
        },
        {
          id: "olm-u6-s3-co-q16", difficulty: "challenge", totalMarks: 2,
          stem: "Triangle has $b=6$, $c=9$, $A=110°$ (obtuse). Side $a$ is approximately…",
          response: { type: "mcq", choices: [
            { id: "a", text: "14.4" },
            { id: "b", text: "10.4" },
            { id: "c", text: "12.4" },
            { id: "d", text: "9.4" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "technique", name: "Cosine rule", statement: "cos110° is negative." }], steps: [
            { reasoning: "$a^2=36+81-108\\cos110°=117+36.9=153.9$ → $a\\approx12.4$.", marks: 1, markCode: "M" },
            { reasoning: "Correct choice: 12.4.", marks: 1, markCode: "A" },
          ], finalAnswer: "12.4" },
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
