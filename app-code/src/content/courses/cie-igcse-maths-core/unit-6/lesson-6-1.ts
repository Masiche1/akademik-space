import type { Lesson } from "../../../types.ts";

export const lesson61: Lesson = {
  id: "cimg-u6-lesson-6-1",
  code: "6-1",
  title: "Trigonometric Ratios",
  goal: "I CAN use sin, cos and tan to find sides and angles.",
  standards: ["Cambridge IGCSE Mathematics 0580 Core: trigonometry"],
  vocabulary: [
    { term: "Sine", definition: "$\\sin = \\frac{\\text{opposite}}{\\text{hypotenuse}}$." },
    { term: "Cosine", definition: "$\\cos = \\frac{\\text{adjacent}}{\\text{hypotenuse}}$." },
    { term: "Tangent", definition: "$\\tan = \\frac{\\text{opposite}}{\\text{adjacent}}$." },
    { term: "SOH CAH TOA", definition: "Mnemonic for the three ratios." },
    { term: "Inverse trig", definition: "Finding an angle from a ratio, e.g. $\\sin^{-1}$." },
  ],
  concepts: [
    {
      id: "cimg-u6-s1-ratios",
      title: "SOH CAH TOA",
      skill: "Use sin, cos, tan in right-angled triangles at IGCSE level.",
      lesson: {
        sections: [
          {
            heading: "The ratios",
            body: "Label sides relative to the angle: opposite (across), adjacent (next to), hypotenuse (longest). $\\sin \\theta = \\frac{opp}{hyp}$, $\\cos \\theta = \\frac{adj}{hyp}$, $\\tan \\theta = \\frac{opp}{adj}$.",
          },
          {
            heading: "Finding angles",
            body: "Use inverse functions: $\\theta = \\sin^{-1}(\\ldots)$, $\\cos^{-1}(\\ldots)$ or $\\tan^{-1}(\\ldots)$.",
          },
        ],
        keyFormulas: [
          { name: "SOH CAH TOA", statement: "$\\sin = opp/hyp$, $\\cos = adj/hyp$, $\\tan = opp/adj$" },
        ],
        workedExample: {
          problem: "In a right triangle, opposite = 3, hypotenuse = 5. Find $\\sin \\theta$.",
          solution: "$\\sin \\theta = \\frac{3}{5} = 0.6$.",
        },
      },
      questions: [
        {
          id: "cimg-u6-s1-ra-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "$\\sin \\theta$ equals…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Opposite ÷ hypotenuse" }, { id: "b", text: "Adjacent ÷ hypotenuse" }, { id: "c", text: "Opposite ÷ adjacent" }, { id: "d", text: "Hypotenuse ÷ opposite" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "formula", name: "Sine", statement: "SOH." }],
            steps: [{ reasoning: "$\\sin = opp/hyp$.", marks: 1, markCode: "A" }],
            finalAnswer: "Opposite ÷ hypotenuse",
          },
        },
        {
          id: "cimg-u6-s1-ra-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Opposite = 4, hypotenuse = 5. Find $\\sin \\theta$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 0.8 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Sine ratio", statement: "opp/hyp." }],
            steps: [
              { reasoning: "$\\sin \\theta = 4/5 = 0.8$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 0.8.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "0.8",
          },
        },
        {
          id: "cimg-u6-s1-ra-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Opposite = 6, adjacent = 8. Find $\\tan \\theta$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 0.75 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Tangent", statement: "opp/adj." }],
            steps: [
              { reasoning: "$\\tan \\theta = 6/8$.", marks: 1, markCode: "M" },
              { reasoning: "$\\tan \\theta = 0.75$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 0.75.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "0.75",
          },
        },
        {
          id: "cimg-u6-s1-ra-q4",
          difficulty: "core",
          totalMarks: 3,
          stem: "$\\cos \\theta = 0.6$ in a right triangle with hypotenuse 10. Find the adjacent side.",
          response: { type: "numeric", parts: [{ label: "a", answer: 6 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Rearranging trig", statement: "adj = cos × hyp." }],
            steps: [
              { reasoning: "$\\cos \\theta = adj/hyp$ → $adj = 0.6 \\times 10$.", marks: 1, markCode: "M" },
              { reasoning: "$adj = 6$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 6.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "6",
          },
        },
      ],
    },
    {
      id: "cimg-u6-s1-find",
      title: "Finding sides and angles",
      skill: "Find missing sides and angles using trig ratios.",
      lesson: {
        sections: [
          {
            heading: "Finding sides",
            body: "Choose the ratio involving the known side and unknown side. Rearrange to solve. E.g. $\\sin \\theta = \\frac{opp}{hyp}$ → $opp = \\sin \\theta \\times hyp$.",
          },
          {
            heading: "Finding angles",
            body: "Use inverse trig on calculator: $\\theta = \\tan^{-1}(\\frac{opp}{adj})$. Round to 1 decimal place unless told otherwise.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "A ladder makes 60° with the ground, base 2 m from wall. Find ladder length.",
          solution: "$\\cos 60° = \\frac{2}{L}$ → $L = \\frac{2}{0.5} = 4$ m.",
        },
      },
      questions: [
        {
          id: "cimg-u6-s1-fi-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "To find an angle from a ratio you use…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Inverse trig function" }, { id: "b", text: "Pythagoras" }, { id: "c", text: "Area formula" }, { id: "d", text: "Gradient" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "property", name: "Inverse trig", statement: "$\\sin^{-1}$ etc." }],
            steps: [{ reasoning: "Use $\\sin^{-1}$, $\\cos^{-1}$ or $\\tan^{-1}$.", marks: 1, markCode: "A" }],
            finalAnswer: "Inverse trig",
          },
        },
        {
          id: "cimg-u6-s1-fi-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Hypotenuse = 10, angle = 30°. Find the opposite side ($\\sin 30° = 0.5$).",
          response: { type: "numeric", parts: [{ label: "a", answer: 5 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Find side", statement: "opp = sin × hyp." }],
            steps: [
              { reasoning: "$opp = 0.5 \\times 10 = 5$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 5.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "5",
          },
        },
        {
          id: "cimg-u6-s1-fi-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Opposite = 7, hypotenuse = 25. Find angle $\\theta$ ($\\sin^{-1}(0.28) \\approx 16.3°$).",
          response: { type: "numeric", parts: [{ label: "a", answer: 16.3, tolerance: 0.1 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Find angle", statement: "Inverse sin." }],
            steps: [
              { reasoning: "$\\sin \\theta = 7/25 = 0.28$.", marks: 1, markCode: "M" },
              { reasoning: "$\\theta = \\sin^{-1}(0.28) \\approx 16.3°$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $16.3°$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "16.3°",
          },
        },
        {
          id: "cimg-u6-s1-fi-q4",
          difficulty: "core",
          totalMarks: 3,
          stem: "A ramp rises at 25° and is 6 m long. Find its vertical height ($\\sin 25° \\approx 0.423$).",
          response: { type: "numeric", parts: [{ label: "a", answer: 2.54, tolerance: 0.01, unit: "m" }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Trig in context", statement: "Model then solve." }],
            steps: [
              { reasoning: "Height is opposite: $h = 6 \\sin 25°$.", marks: 1, markCode: "M" },
              { reasoning: "$h = 6 \\times 0.423 = 2.54$ m.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 2.54 m.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2.54 m",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cimg-u6-s1-trig-notes",
      title: "Trigonometric ratios — revision notes",
      summary: "SOH CAH TOA, finding sides and angles.",
      sections: [
        { heading: "Ratios", body: "Label opp/adj/hyp relative to angle. sin=opp/hyp, cos=adj/hyp, tan=opp/adj." },
        { heading: "Solving", body: "Pick ratio with known+unknown. Use inverse functions for angles." },
      ],
    },
  ],
};
