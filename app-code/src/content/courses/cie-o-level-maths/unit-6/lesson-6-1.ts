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
            { id: "a", text: "Opposite/hypotenuse" },
            { id: "b", text: "Adjacent/hypotenuse" },
            { id: "c", text: "Hypotenuse/opposite" },
            { id: "d", text: "Opposite/adjacent" },
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
        {
          id: "olm-u6-s1-ra-q5", difficulty: "foundation", totalMarks: 1,
          stem: "$\\cos\\theta$ equals…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Hypotenuse/adjacent" },
            { id: "b", text: "Adjacent/hypotenuse" },
            { id: "c", text: "Opposite/adjacent" },
            { id: "d", text: "Opposite/hypotenuse" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "formula", name: "CAH", statement: "Adjacent over hypotenuse." }], steps: [{ reasoning: "SOH CAH TOA.", marks: 1, markCode: "A" }], finalAnswer: "Adjacent/hypotenuse" },
        },
        {
          id: "olm-u6-s1-ra-q6", difficulty: "foundation", totalMarks: 2,
          stem: "In a right triangle, angle $\\theta$ has opposite 4 and hypotenuse 5. Find $\\sin\\theta$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 0.8 }] },
          markscheme: { principles: [{ kind: "formula", name: "Sin", statement: "O/H." }], steps: [
            { reasoning: "$\\sin\\theta=\\frac45=0.8$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 0.8.", marks: 1, markCode: "A" },
          ], finalAnswer: "0.8" },
        },
        {
          id: "olm-u6-s1-ra-q7", difficulty: "foundation", totalMarks: 2,
          stem: "In a right triangle, angle $\\theta$ has adjacent 8 and hypotenuse 10. Find $\\cos\\theta$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 0.8 }] },
          markscheme: { principles: [{ kind: "formula", name: "Cos", statement: "A/H." }], steps: [
            { reasoning: "$\\cos\\theta=\\frac{8}{10}=0.8$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 0.8.", marks: 1, markCode: "A" },
          ], finalAnswer: "0.8" },
        },
        {
          id: "olm-u6-s1-ra-q8", difficulty: "core", totalMarks: 2,
          stem: "An angle of $60°$ has hypotenuse 12 cm in a right triangle. The opposite side is approximately…",
          response: { type: "mcq", choices: [
            { id: "a", text: "8 cm" },
            { id: "b", text: "12 cm" },
            { id: "c", text: "10.4 cm" },
            { id: "d", text: "6 cm" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "technique", name: "Sin ratio", statement: "Opp = sin × hyp." }], steps: [
            { reasoning: "$O=12\\sin60°=12\\times0.866=10.4$ cm.", marks: 1, markCode: "M" },
            { reasoning: "Correct choice: 10.4 cm.", marks: 1, markCode: "A" },
          ], finalAnswer: "10.4 cm" },
        },
        {
          id: "olm-u6-s1-ra-q9", difficulty: "core", totalMarks: 3,
          stem: "In a right triangle, angle $35°$ has adjacent side 10 cm. Find the opposite side.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Tan ratio", statement: "$\\tan=O/A$." }], steps: [
            { reasoning: "$O=10\\tan35°=10\\times0.700=7.00$ cm.", marks: 1, markCode: "M" },
            { reasoning: "Answer: ≈7.0 cm.", marks: 1, markCode: "M" },
            { reasoning: "Degree mode used.", marks: 1, markCode: "A" },
          ], finalAnswer: "≈7.0 cm" },
        },
        {
          id: "olm-u6-s1-ra-q10", difficulty: "core", totalMarks: 3,
          stem: "In a right triangle, angle $50°$ has hypotenuse 15 cm. Find the adjacent side, correct to 2 decimal places.",
          response: { type: "numeric", parts: [{ label: "a", answer: 9.64, tolerance: 0.01, unit: "cm" }] },
          markscheme: { principles: [{ kind: "technique", name: "Cos ratio", statement: "Adj = cos × hyp." }], steps: [
            { reasoning: "$A=15\\cos50°=15\\times0.643=9.64$ cm.", marks: 1, markCode: "M" },
            { reasoning: "$\\approx9.64$ cm.", marks: 1, markCode: "M" },
            { reasoning: "Answer: ≈9.64 cm.", marks: 1, markCode: "A" },
          ], finalAnswer: "≈9.64 cm" },
        },
        {
          id: "olm-u6-s1-ra-q11", difficulty: "core", totalMarks: 3,
          stem: "In a right triangle, angle $28°$ has opposite side 7 cm. Find the hypotenuse.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Sin inverse", statement: "Divide by sin." }], steps: [
            { reasoning: "$\\sin28°=\\frac{7}{H}$ → $H=\\frac{7}{0.469}=14.9$ cm.", marks: 1, markCode: "M" },
            { reasoning: "Answer: ≈14.9 cm.", marks: 1, markCode: "M" },
            { reasoning: "Hypotenuse is longest side ✓.", marks: 1, markCode: "A" },
          ], finalAnswer: "≈14.9 cm" },
        },
        {
          id: "olm-u6-s1-ra-q12", difficulty: "challenge", totalMarks: 2,
          stem: "Which trig ratio connects the opposite and adjacent sides?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\cos\\theta$" },
            { id: "b", text: "$\\tan\\theta$" },
            { id: "c", text: "$\\theta$ itself" },
            { id: "d", text: "$\\sin\\theta$" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "formula", name: "TOA", statement: "$\\tan=O/A$." }], steps: [
            { reasoning: "TOA: tangent = opposite/adjacent.", marks: 1, markCode: "M" },
            { reasoning: "Correct choice: $\\tan\\theta$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$\\tan\\theta$" },
        },
        {
          id: "olm-u6-s1-ra-q13", difficulty: "challenge", totalMarks: 4,
          stem: "A ladder 8 m long leans against a wall making angle $65°$ with the ground. Find how far the base is from the wall and how high the ladder reaches.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Two sides", statement: "Cos for adjacent, sin for opposite." }], steps: [
            { reasoning: "Distance $=8\\cos65°=8\\times0.423=3.38$ m.", marks: 1, markCode: "M" },
            { reasoning: "Height $=8\\sin65°=8\\times0.906=7.25$ m.", marks: 1, markCode: "M" },
            { reasoning: "Check: $3.38^2+7.25^2\\approx64=8^2$ ✓.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 3.38 m and 7.25 m.", marks: 1, markCode: "A" },
          ], finalAnswer: "3.38 m and 7.25 m" },
        },
        {
          id: "olm-u6-s1-ra-q14", difficulty: "challenge", totalMarks: 4,
          stem: "A kite string is 60 m long and makes angle $50°$ with the horizontal. Find the kite's height above the hand and its horizontal distance from the holder.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Real-world trig", statement: "String is hypotenuse." }], steps: [
            { reasoning: "Height $=60\\sin50°=60\\times0.766=45.96$ m.", marks: 1, markCode: "M" },
            { reasoning: "Distance $=60\\cos50°=60\\times0.643=38.57$ m.", marks: 1, markCode: "M" },
            { reasoning: "Check: $45.96^2+38.57^2\\approx3600=60^2$ ✓.", marks: 1, markCode: "M" },
            { reasoning: "Answer: ≈46.0 m high, ≈38.6 m away.", marks: 1, markCode: "A" },
          ], finalAnswer: "≈46.0 m, ≈38.6 m" },
        },
        {
          id: "olm-u6-s1-ra-q15", difficulty: "challenge", totalMarks: 3,
          stem: "A right triangle has adjacent side 9 and opposite side 7 (relative to angle $\\theta$). Find the hypotenuse, correct to 2 decimal places.",
          response: { type: "numeric", parts: [{ label: "a", answer: 11.4, tolerance: 0.01 }] },
          markscheme: { principles: [{ kind: "technique", name: "Pythagoras", statement: "$\\sqrt{a^2+b^2}$." }], steps: [
            { reasoning: "$H=\\sqrt{9^2+7^2}=\\sqrt{130}\\approx11.40$.", marks: 1, markCode: "M" },
            { reasoning: "Check: $\\tan\\theta=\\frac79$ consistent with the sides.", marks: 1, markCode: "M" },
            { reasoning: "Answer: ≈11.40.", marks: 1, markCode: "A" },
          ], finalAnswer: "≈11.40" },
        },
        {
          id: "olm-u6-s1-ra-q16", difficulty: "challenge", totalMarks: 3,
          stem: "A ramp is 5 m long and rises 2 m. Find the angle it makes with the horizontal, correct to 2 decimal places.",
          response: { type: "numeric", parts: [{ label: "a", answer: 23.58, tolerance: 0.01, unit: "°" }] },
          markscheme: { principles: [{ kind: "technique", name: "Inverse sin", statement: "$\\sin^{-1}(2/5)$." }], steps: [
            { reasoning: "$\\sin\\theta=\\frac25=0.4$ → $\\theta=\\sin^{-1}(0.4)=23.58°$.", marks: 1, markCode: "M" },
            { reasoning: "$\\approx23.58°$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: ≈23.58°.", marks: 1, markCode: "A" },
          ], finalAnswer: "≈23.58°" },
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
            { id: "a", text: "$\\sqrt{}$" },
            { id: "b", text: "$\\tan^{-1}$" },
            { id: "c", text: "$\\cos^{-1}$" },
            { id: "d", text: "$\\sin^{-1}$" },
          ], correctChoiceId: "d" },
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
        {
          id: "olm-u6-s1-fa-q5", difficulty: "foundation", totalMarks: 1,
          stem: "To find an angle when you know the adjacent side and hypotenuse, use…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\tan^{-1}$" },
            { id: "b", text: "$\\cos^{-1}$" },
            { id: "c", text: "$\\sin^{-1}$" },
            { id: "d", text: "Division" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "property", name: "Inverse trig", statement: "Cos for A/H." }], steps: [{ reasoning: "$\\cos=A/H$ so $\\cos^{-1}$ gives the angle.", marks: 1, markCode: "A" }], finalAnswer: "$\\cos^{-1}$" },
        },
        {
          id: "olm-u6-s1-fa-q6", difficulty: "foundation", totalMarks: 2,
          stem: "Find angle $\\theta$ if $\\cos\\theta=0.5$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 60, unit: "°" }] },
          markscheme: { principles: [{ kind: "formula", name: "Inverse cos", statement: "$\\cos^{-1}$." }], steps: [
            { reasoning: "$\\theta=\\cos^{-1}(0.5)=60°$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $60°$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$60°$" },
        },
        {
          id: "olm-u6-s1-fa-q7", difficulty: "foundation", totalMarks: 1,
          stem: "If $\\tan\\theta=1$, then $\\theta=$…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$45°$" },
            { id: "b", text: "$30°$" },
            { id: "c", text: "$90°$" },
            { id: "d", text: "$60°$" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "formula", name: "Inverse tan", statement: "$\\tan^{-1}(1)=45°$." }], steps: [{ reasoning: "Standard value.", marks: 1, markCode: "A" }], finalAnswer: "$45°$" },
        },
        {
          id: "olm-u6-s1-fa-q8", difficulty: "core", totalMarks: 2,
          stem: "In a right triangle, opposite = 7 and adjacent = 7. The angle is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$60°$" },
            { id: "b", text: "$35°$" },
            { id: "c", text: "$30°$" },
            { id: "d", text: "$45°$" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "technique", name: "Tan inverse", statement: "O = A → 45°." }], steps: [
            { reasoning: "$\\tan\\theta=1$ → $\\theta=45°$.", marks: 1, markCode: "M" },
            { reasoning: "Correct choice: $45°$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$45°$" },
        },
        {
          id: "olm-u6-s1-fa-q9", difficulty: "core", totalMarks: 3,
          stem: "A right triangle has opposite 9 and adjacent 12. Find angle $\\theta$, correct to 1 decimal place.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Tan inverse", statement: "O and A known." }], steps: [
            { reasoning: "$\\tan\\theta=\\frac{9}{12}=0.75$ → $\\theta=\\tan^{-1}(0.75)\\approx36.9°$.", marks: 1, markCode: "M" },
            { reasoning: "$\\approx36.9°$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: ≈36.9°.", marks: 1, markCode: "A" },
          ], finalAnswer: "≈36.9°" },
        },
        {
          id: "olm-u6-s1-fa-q10", difficulty: "core", totalMarks: 3,
          stem: "In a right triangle, $\\cos\\theta=\\frac{5}{13}$. Find $\\theta$, correct to 2 decimal places.",
          response: { type: "numeric", parts: [{ label: "a", answer: 67.38, tolerance: 0.01, unit: "°" }] },
          markscheme: { principles: [{ kind: "technique", name: "Cos inverse", statement: "$\\cos^{-1}(5/13)$." }], steps: [
            { reasoning: "$\\theta=\\cos^{-1}(0.3846)\\approx67.38°$.", marks: 1, markCode: "M" },
            { reasoning: "Or 5-12-13 triangle: angle opp 12 → $\\tan^{-1}(12/5)=67.38°$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: ≈67.38°.", marks: 1, markCode: "A" },
          ], finalAnswer: "≈67.38°" },
        },
        {
          id: "olm-u6-s1-fa-q11", difficulty: "core", totalMarks: 3,
          stem: "In a right triangle, the hypotenuse is 14 and the opposite side is 10. Find angle $\\theta$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Sin inverse", statement: "O and H known." }], steps: [
            { reasoning: "$\\sin\\theta=\\frac{10}{14}=0.714$ → $\\theta=\\sin^{-1}(0.714)\\approx45.6°$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: ≈45.6°.", marks: 1, markCode: "M" },
            { reasoning: "Degree mode; acute angle valid.", marks: 1, markCode: "A" },
          ], finalAnswer: "≈45.6°" },
        },
        {
          id: "olm-u6-s1-fa-q12", difficulty: "challenge", totalMarks: 2,
          stem: "An angle has $\\tan\\theta=\\sqrt{3}$. The angle is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$63.4°$" },
            { id: "b", text: "$45°$" },
            { id: "c", text: "$30°$" },
            { id: "d", text: "$60°$" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "formula", name: "Standard value", statement: "$\\tan60°=\\sqrt3$." }], steps: [
            { reasoning: "$\\tan60°=\\sqrt3$.", marks: 1, markCode: "M" },
            { reasoning: "Correct choice: $60°$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$60°$" },
        },
        {
          id: "olm-u6-s1-fa-q13", difficulty: "challenge", totalMarks: 4,
          stem: "In a right triangle, the opposite side is 6 and the adjacent side is 8 (relative to angle $\\theta$). Find $\\theta$ and the hypotenuse.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Inverse + Pythagoras", statement: "Two-step solution." }], steps: [
            { reasoning: "$\\tan\\theta=\\frac68=0.75$ → $\\theta=\\tan^{-1}(0.75)\\approx36.9°$.", marks: 1, markCode: "M" },
            { reasoning: "$H=\\sqrt{36+64}=\\sqrt{100}=10$.", marks: 1, markCode: "M" },
            { reasoning: "Check: 6-8-10 is 3-4-5 scaled ✓.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $\\theta\\approx36.9°$, hypotenuse 10.", marks: 1, markCode: "A" },
          ], finalAnswer: "$\\theta\\approx36.9°$, $H=10$" },
        },
        {
          id: "olm-u6-s1-fa-q14", difficulty: "challenge", totalMarks: 4,
          stem: "From a point 24 m from the base of a tower, the angle of elevation to the top is $36.9°$ (with $\\tan36.9°\\approx0.75$). Find the tower's height.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Elevation", statement: "$h=d\\tan\\theta$." }], steps: [
            { reasoning: "$h=24\\times0.75=18$ m.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 18 m.", marks: 1, markCode: "M" },
            { reasoning: "Check: $\\tan^{-1}(18/24)=36.9°$ ✓.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "18 m" },
        },
        {
          id: "olm-u6-s1-fa-q15", difficulty: "challenge", totalMarks: 3,
          stem: "Find angle $\\theta$ if $\\sin\\theta=0.35$, correct to 2 decimal places.",
          response: { type: "numeric", parts: [{ label: "a", answer: 20.49, tolerance: 0.01, unit: "°" }] },
          markscheme: { principles: [{ kind: "technique", name: "Sin inverse", statement: "$\\sin^{-1}(0.35)$." }], steps: [
            { reasoning: "$\\theta=\\sin^{-1}(0.35)\\approx20.49°$.", marks: 1, markCode: "M" },
            { reasoning: "$\\approx20.49°$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: ≈20.49°.", marks: 1, markCode: "A" },
          ], finalAnswer: "≈20.49°" },
        },
        {
          id: "olm-u6-s1-fa-q16", difficulty: "challenge", totalMarks: 3,
          stem: "A 3-4-5 right triangle has hypotenuse 5, with the side of length 4 adjacent to angle $\\theta$. Find $\\theta$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 36.87, tolerance: 0.01, unit: "°" }] },
          markscheme: { principles: [{ kind: "technique", name: "Inverse cos", statement: "$\\cos^{-1}(4/5)$." }], steps: [
            { reasoning: "$\\cos\\theta=\\frac45=0.8$ → $\\theta=\\cos^{-1}(0.8)\\approx36.87°$.", marks: 1, markCode: "M" },
            { reasoning: "Or $\\tan^{-1}(3/4)=36.87°$ (opposite is 3).", marks: 1, markCode: "M" },
            { reasoning: "Answer: ≈36.87°.", marks: 1, markCode: "A" },
          ], finalAnswer: "≈36.87°" },
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
