import type { Lesson } from "../../../types.ts";

export const lesson61: Lesson = {
  id: "olm-u6-lesson-6-1",
  code: "6-1",
  title: "Trigonometric Ratios",
  goal: "I CAN use sine, cosine and tangent ratios in right-angled triangles.",
  standards: ["4024: trigonometry"],
  vocabulary: [
    { term: "SOH CAH TOA", definition: "Mnemonic for sin, cos, tan ratios." },
    { term: "Opposite", definition: "Side opposite the angle." },
    { term: "Adjacent", definition: "Side next to the angle (not hypotenuse)." },
    { term: "Hypotenuse", definition: "Longest side, opposite right angle." },
  ],
  concepts: [
    {
      id: "olm-u6-s1-ratios",
      title: "SOH CAH TOA",
      skill: "Apply trig ratios to find sides at O Level.",
      lesson: {
        sections: [
          { heading: "The ratios", body: "For a right-angled triangle with angle $\\theta$: $\\sin\\theta=\\frac{\\text{opposite}}{\\text{hypotenuse}}$, $\\cos\\theta=\\frac{\\text{adjacent}}{\\text{hypotenuse}}$, $\\tan\\theta=\\frac{\\text{opposite}}{\\text{adjacent}}$. Label the triangle relative to the angle you're using — 'opposite' and 'adjacent' change if you pick a different angle." },
          { heading: "Finding sides", body: "To find a missing side: identify which ratio connects the known side and unknown side, then rearrange. E.g. to find opposite given hypotenuse: $\\text{opp}=\\sin\\theta\\times\\text{hyp}$. Your calculator must be in degree mode for O Level. Always draw and label the triangle first — most errors come from mislabeling opposite vs adjacent." },
        ],
        keyFormulas: [
          { name: "SOH CAH TOA", statement: "$\\sin=\\frac{O}{H}$, $\\cos=\\frac{A}{H}$, $\\tan=\\frac{O}{A}$" },
        ],
        workedExample: { problem: "A right triangle has angle $30°$, hypotenuse 10 cm. Find the opposite side.", solution: "$\\sin30°=\\frac{O}{10}$ → $O=10\\sin30°=10\\times0.5=5$ cm." },
      },
      questions: [
        {
          id: "olm-u6-s1-ra-q1", difficulty: "foundation", totalMarks: 1,
          stem: "$\\sin\\theta$ equals…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Opposite/hypotenuse" }, { id: "b", text: "Adjacent/hypotenuse" }, { id: "c", text: "Opposite/adjacent" }, { id: "d", text: "Hypotenuse/opposite" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "formula", name: "SOH", statement: "Opposite over hypotenuse." }], steps: [{ reasoning: "SOH CAH TOA.", marks: 1, markCode: "A" }], finalAnswer: "Opposite/hypotenuse" },
        },
        {
          id: "olm-u6-s1-ra-q2", difficulty: "foundation", totalMarks: 2,
          stem: "In a right triangle, angle $\\theta$ has opposite 3, hypotenuse 5. Find $\\sin\\theta$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "formula", name: "Sin", statement: "O/H." }], steps: [
            { reasoning: "$\\sin\\theta=\\frac35=0.6$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 0.6.", marks: 1, markCode: "A" },
          ], finalAnswer: "0.6" },
        },
        {
          id: "olm-u6-s1-ra-q3", difficulty: "core", totalMarks: 3,
          stem: "Find the missing side: angle $40°$, adjacent 8 cm, find opposite.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Tan ratio", statement: "$\\tan=O/A$." }], steps: [
            { reasoning: "$\\tan40°=\\frac{O}{8}$ → $O=8\\tan40°=8\\times0.839=6.71$ cm.", marks: 1, markCode: "M" },
            { reasoning: "Answer: ≈6.7 cm.", marks: 1, markCode: "M" },
            { reasoning: "Degree mode; correct ratio used.", marks: 1, markCode: "A" },
          ], finalAnswer: "≈6.7 cm" },
        },
        {
          id: "olm-u6-s1-ra-q4", difficulty: "core", totalMarks: 4,
          stem: "A ramp makes angle $25°$ with ground. Its length is 12 m. How high does it rise?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Real-world trig", statement: "Draw triangle first." }], steps: [
            { reasoning: "Height is opposite $25°$; hypotenuse is ramp length 12 m.", marks: 1, markCode: "M" },
            { reasoning: "$h=12\\sin25°=12\\times0.423=5.07$ m.", marks: 1, markCode: "M" },
            { reasoning: "Answer: ≈5.1 m.", marks: 1, markCode: "M" },
            { reasoning: "Correct ratio and angle used.", marks: 1, markCode: "A" },
          ], finalAnswer: "≈5.1 m" },
        },
      ],
    },
    {
      id: "olm-u6-s1-findangle",
      title: "Finding angles and inverse trig",
      skill: "Find angles using inverse trig at O Level.",
      lesson: {
        sections: [
          { heading: "Inverse functions", body: "When you know two sides but not the angle, use inverse trig: $\\theta=\\sin^{-1}(\\frac{O}{H})$, $\\cos^{-1}(\\frac{A}{H})$, or $\\tan^{-1}(\\frac{O}{A})$. On your calculator use $\\sin^{-1}$, $\\cos^{-1}$, $\\tan^{-1}$ (often SHIFT + ratio key). The answer is in degrees for O Level." },
          { heading: "Choosing the ratio", body: "Pick the ratio that uses the two sides you know. If you know opposite and adjacent → tan. Opposite and hypotenuse → sin. Adjacent and hypotenuse → cos. If all three sides are known, any ratio works — tan is often easiest since it doesn't involve the hypotenuse. For non-right triangles at O Level, split them into right triangles first." },
        ],
        keyFormulas: [
          { name: "Inverse", statement: "$\\theta=\\sin^{-1},\\cos^{-1},\\tan^{-1}$ of ratio" },
        ],
        workedExample: { problem: "A right triangle has opposite 4, adjacent 7. Find angle $\\theta$.", solution: "$\\tan\\theta=\\frac47$ → $\\theta=\\tan^{-1}(0.571)\\approx29.7°$." },
      },
      questions: [
        {
          id: "olm-u6-s1-fa-q1", difficulty: "foundation", totalMarks: 1,
          stem: "To find an angle when you know opposite and hypotenuse, use…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\sin^{-1}$" }, { id: "b", text: "$\\cos^{-1}$" }, { id: "c", text: "$\\tan^{-1}$" }, { id: "d", text: "$\\sqrt{}$" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "property", name: "Inverse trig", statement: "Sin for O/H." }], steps: [{ reasoning: "$\\sin=O/H$ so inverse gives angle.", marks: 1, markCode: "A" }], finalAnswer: "$\\sin^{-1}$" },
        },
        {
          id: "olm-u6-s1-fa-q2", difficulty: "foundation", totalMarks: 2,
          stem: "Find $\\theta$ if $\\sin\\theta=0.5$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "formula", name: "Inverse sin", statement: "$\\sin^{-1}$." }], steps: [
            { reasoning: "$\\theta=\\sin^{-1}(0.5)=30°$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $30°$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$30°$" },
        },
        {
          id: "olm-u6-s1-fa-q3", difficulty: "core", totalMarks: 3,
          stem: "Opposite = 5, adjacent = 12. Find angle $\\theta$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Tan inverse", statement: "O and A → tan." }], steps: [
            { reasoning: "$\\tan\\theta=\\frac{5}{12}=0.4167$ → $\\theta=\\tan^{-1}(0.4167)\\approx22.6°$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: ≈22.6°.", marks: 1, markCode: "M" },
            { reasoning: "Check: $5^2+12^2=169=13^2$ — 5-12-13 triangle; angle ≈22.6° ✓.", marks: 1, markCode: "A" },
          ], finalAnswer: "≈22.6°" },
        },
        {
          id: "olm-u6-s1-fa-q4", difficulty: "core", totalMarks: 4,
          stem: "A ladder 10 m long reaches 8 m up a wall. Find the angle the ladder makes with the ground.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Real-world inverse", statement: "Identify O and H." }], steps: [
            { reasoning: "Height 8 = opposite; ladder 10 = hypotenuse → use sin.", marks: 1, markCode: "M" },
            { reasoning: "$\\sin\\theta=\\frac{8}{10}=0.8$ → $\\theta=\\sin^{-1}(0.8)\\approx53.1°$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: ≈53.1°.", marks: 1, markCode: "M" },
            { reasoning: "Correct sides identified.", marks: 1, markCode: "A" },
          ], finalAnswer: "≈53.1°" },
        },
      ],
    },
  ],
  notes: [
    { id: "olm-u6-s1-trig-notes", title: "Trig ratios — notes", summary: "SOH CAH TOA and inverse trig.",
      sections: [
        { heading: "Ratios", body: "$\\sin=O/H$, $\\cos=A/H$, $\\tan=O/A$; label relative to chosen angle." },
        { heading: "Inverse", body: "$\\theta=\\sin^{-1}(O/H)$ etc.; pick ratio matching known sides." },
      ] },
  ],
};
