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
            { id: "a", text: "Opposite ÷ adjacent" },
            { id: "b", text: "Hypotenuse ÷ opposite" },
            { id: "c", text: "Adjacent ÷ hypotenuse" },
            { id: "d", text: "Opposite ÷ hypotenuse" },
          ], correctChoiceId: "d" },
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
        {
          id: "cimg-u6-s1-ra-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "$\\cos \\theta$ equals…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Opposite ÷ adjacent" },
            { id: "b", text: "Adjacent ÷ hypotenuse" },
            { id: "c", text: "Opposite ÷ hypotenuse" },
            { id: "d", text: "Hypotenuse ÷ adjacent" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "formula", name: "Cosine", statement: "CAH." }],
            steps: [{ reasoning: "$\\cos = adj/hyp$.", marks: 1, markCode: "A" }],
            finalAnswer: "Adjacent ÷ hypotenuse",
          },
        },
        {
          id: "cimg-u6-s1-ra-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Opposite = 3, hypotenuse = 5. Find $\\sin \\theta$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 0.6 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Sine ratio", statement: "opp/hyp." }],
            steps: [
              { reasoning: "$\\sin \\theta = 3/5 = 0.6$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 0.6.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "0.6",
          },
        },
        {
          id: "cimg-u6-s1-ra-q7",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Adjacent = 4, hypotenuse = 5. Find $\\cos \\theta$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 0.8 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Cosine ratio", statement: "adj/hyp." }],
            steps: [
              { reasoning: "$\\cos \\theta = 4/5 = 0.8$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 0.8.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "0.8",
          },
        },
        {
          id: "cimg-u6-s1-ra-q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "$\\tan \\theta = 0.75$ in a right triangle with adjacent side 8. Find the opposite side.",
          response: { type: "numeric", parts: [{ label: "a", answer: 6 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Rearranging trig", statement: "opp = tan × adj." }],
            steps: [
              { reasoning: "$\\tan \\theta = opp/adj$ → $opp = 0.75 \\times 8$.", marks: 1, markCode: "M" },
              { reasoning: "$opp = 6$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 6.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "6",
          },
        },
        {
          id: "cimg-u6-s1-ra-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "The letters TOA in SOH CAH TOA stand for…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Total = Opposite + Adjacent" },
            { id: "b", text: "Tangent = Opposite ÷ Adjacent" },
            { id: "c", text: "Tangent = Opposite ÷ Hypotenuse" },
            { id: "d", text: "Tangent = Adjacent ÷ Opposite" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "formula", name: "Tangent", statement: "TOA." }],
            steps: [{ reasoning: "$\\tan = opp/adj$.", marks: 1, markCode: "A" }],
            finalAnswer: "Tangent = Opposite ÷ Adjacent",
          },
        },
        {
          id: "cimg-u6-s1-ra-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "$\\sin \\theta = 0.5$ in a right triangle with hypotenuse 14. Find the opposite side.",
          response: { type: "numeric", parts: [{ label: "a", answer: 7 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Rearranging trig", statement: "opp = sin × hyp." }],
            steps: [
              { reasoning: "$opp = 0.5 \\times 14$.", marks: 1, markCode: "M" },
              { reasoning: "$opp = 7$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 7.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "7",
          },
        },
        {
          id: "cimg-u6-s1-ra-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "In a right-angled triangle, $\\tan \\theta = 1$ for the acute angle $\\theta$. Find $\\theta$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Inverse trig", statement: "$\\theta = \\tan^{-1}(1)$." }],
            steps: [
              { reasoning: "$\\tan 45° = 1$.", marks: 1, markCode: "M" },
              { reasoning: "$\\theta = \\tan^{-1}(1) = 45°$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $\\theta = 45°$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "45°",
          },
        },
        {
          id: "cimg-u6-s1-ra-q12",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "In a right-angled triangle, angle $\\theta$ has opposite side 9 and adjacent side 12. Find the hypotenuse and hence $\\sin \\theta$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Pythagoras + trig", statement: "Combine both tools." }],
            steps: [
              { reasoning: "Hypotenuse $= \\sqrt{9^2 + 12^2} = \\sqrt{81 + 144} = \\sqrt{225}$.", marks: 1, markCode: "M" },
              { reasoning: "$hyp = 15$.", marks: 1, markCode: "M" },
              { reasoning: "$\\sin \\theta = opp/hyp = 9/15$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: hypotenuse 15, $\\sin \\theta = 0.6$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "15, 0.6",
          },
        },
        {
          id: "cimg-u6-s1-ra-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which trigonometric ratio uses the opposite and adjacent sides?",
          response: { type: "mcq", choices: [
            { id: "a", text: "None of them" },
            { id: "b", text: "Cosine" },
            { id: "c", text: "Sine" },
            { id: "d", text: "Tangent" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "formula", name: "Tangent", statement: "TOA." }],
            steps: [{ reasoning: "$\\tan = opp/adj$.", marks: 1, markCode: "A" }],
            finalAnswer: "Tangent",
          },
        },
        {
          id: "cimg-u6-s1-ra-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "To find the opposite side when you know the angle and the hypotenuse, you use…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Pythagoras" },
            { id: "b", text: "Cosine" },
            { id: "c", text: "Sine" },
            { id: "d", text: "Tangent" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "technique", name: "Choosing a ratio", statement: "Match known and unknown sides." }],
            steps: [{ reasoning: "$\\sin = opp/hyp$ involves opposite and hypotenuse.", marks: 1, markCode: "A" }],
            finalAnswer: "Sine",
          },
        },
        {
          id: "cimg-u6-s1-ra-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "$\\cos \\theta = 0.8$ in a right triangle with hypotenuse 25. Find the adjacent side.",
          response: { type: "numeric", parts: [{ label: "a", answer: 20 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Rearranging trig", statement: "adj = cos × hyp." }],
            steps: [
              { reasoning: "$adj = 0.8 \\times 25$.", marks: 1, markCode: "M" },
              { reasoning: "$adj = 20$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 20.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "20",
          },
        },
        {
          id: "cimg-u6-s1-ra-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "In a right-angled triangle, angle $\\theta = 35°$ and the hypotenuse is 10 cm. Find the adjacent side ($\\cos 35° \\approx 0.819$).",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Rearranging trig", statement: "adj = cos × hyp." }],
            steps: [
              { reasoning: "$adj = \\cos 35° \\times 10 = 0.819 \\times 10$.", marks: 1, markCode: "M" },
              { reasoning: "$adj \\approx 8.19$ cm.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $\\approx 8.19$ cm.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "8.19 cm",
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
            { id: "a", text: "Pythagoras" },
            { id: "b", text: "Inverse trig function" },
            { id: "c", text: "Area formula" },
            { id: "d", text: "Gradient" },
          ], correctChoiceId: "b" },
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
        {
          id: "cimg-u6-s1-fi-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "To solve a right-angled triangle problem with trigonometry, you first need…",
          response: { type: "mcq", choices: [
            { id: "a", text: "The area" },
            { id: "b", text: "Two angles" },
            { id: "c", text: "One angle and one side" },
            { id: "d", text: "All three sides" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "technique", name: "Solving triangles", statement: "Need angle + side." }],
            steps: [{ reasoning: "Trig ratios need one acute angle and one known side.", marks: 1, markCode: "A" }],
            finalAnswer: "One angle and one side",
          },
        },
        {
          id: "cimg-u6-s1-fi-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Hypotenuse = 12, angle = 30°. Find the opposite side ($\\sin 30° = 0.5$).",
          response: { type: "numeric", parts: [{ label: "a", answer: 6 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Find side", statement: "opp = sin × hyp." }],
            steps: [
              { reasoning: "$opp = 0.5 \\times 12 = 6$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 6.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "6",
          },
        },
        {
          id: "cimg-u6-s1-fi-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Angle = 45°, adjacent = 5. Using $\\tan 45° = 1$, the opposite side is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "3.5" },
            { id: "b", text: "7" },
            { id: "c", text: "10" },
            { id: "d", text: "5" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "technique", name: "Find side", statement: "opp = tan × adj." }],
            steps: [{ reasoning: "$opp = 1 \\times 5 = 5$.", marks: 1, markCode: "A" }],
            finalAnswer: "5",
          },
        },
        {
          id: "cimg-u6-s1-fi-q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Adjacent = 12, hypotenuse = 13. Find angle $\\theta$ ($\\cos^{-1}(\\tfrac{12}{13}) \\approx 22.6°$).",
          response: { type: "numeric", parts: [{ label: "a", answer: 22.6, tolerance: 0.1 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Find angle", statement: "Inverse cos." }],
            steps: [
              { reasoning: "$\\cos \\theta = 12/13 \\approx 0.923$.", marks: 1, markCode: "M" },
              { reasoning: "$\\theta = \\cos^{-1}(0.923) \\approx 22.6°$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $22.6°$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "22.6°",
          },
        },
        {
          id: "cimg-u6-s1-fi-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "The angle of elevation is always measured from…",
          response: { type: "mcq", choices: [
            { id: "a", text: "The ground at 45°" },
            { id: "b", text: "The vertical" },
            { id: "c", text: "The horizontal" },
            { id: "d", text: "The line of sight downwards" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Angle of elevation", statement: "Up from horizontal." }],
            steps: [{ reasoning: "Elevation is measured above the horizontal.", marks: 1, markCode: "A" }],
            finalAnswer: "The horizontal",
          },
        },
        {
          id: "cimg-u6-s1-fi-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "From a point 30 m from the base of a building, the angle of elevation to the top is 40°. Find the height of the building ($\\tan 40° \\approx 0.839$).",
          response: { type: "numeric", parts: [{ label: "a", answer: 25.17, tolerance: 0.1, unit: "m" }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Elevation trig", statement: "$h = d \\tan \\theta$." }],
            steps: [
              { reasoning: "$h = 30 \\times 0.839$.", marks: 1, markCode: "M" },
              { reasoning: "$h \\approx 25.17$ m.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 25.17 m.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "25.17 m",
          },
        },
        {
          id: "cimg-u6-s1-fi-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "A flagpole casts a shadow 8 m long. The angle of elevation of the sun is 50° ($\\tan 50° \\approx 1.19$). Find the height of the flagpole.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Elevation trig", statement: "$h = d \\tan \\theta$." }],
            steps: [
              { reasoning: "Height is opposite, shadow is adjacent: $h = 8 \\times 1.19$.", marks: 1, markCode: "M" },
              { reasoning: "$h \\approx 9.52$ m.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $\\approx 9.52$ m.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "9.52 m",
          },
        },
        {
          id: "cimg-u6-s1-fi-q12",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "From the top of a 20 m vertical cliff, the angle of depression to a boat is 25° ($\\tan 25° \\approx 0.466$). Find the horizontal distance of the boat from the base of the cliff.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Depression = elevation", statement: "Alternate angles equal." }],
            steps: [
              { reasoning: "Angle of depression 25° equals the angle of elevation from the boat (alternate angles).", marks: 1, markCode: "M" },
              { reasoning: "$\\tan 25° = 20/d$ → $d = 20 \\div 0.466$.", marks: 1, markCode: "M" },
              { reasoning: "$d \\approx 42.9$ m.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $\\approx 42.9$ m.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "42.9 m",
          },
        },
        {
          id: "cimg-u6-s1-fi-q13",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "In right-angled triangle ABC, the right angle is at C, angle A = 28° and side a = 5 cm (the side opposite A). Find the hypotenuse ($\\sin 28° \\approx 0.469$).",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Find hypotenuse", statement: "hyp = opp ÷ sin." }],
            steps: [
              { reasoning: "$\\sin 28° = a/c$ → $c = 5 \\div 0.469$.", marks: 1, markCode: "M" },
              { reasoning: "$c \\approx 10.66$ cm.", marks: 1, markCode: "M" },
              { reasoning: "Check: $0.469 \\times 10.66 \\approx 5$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: hypotenuse $\\approx 10.7$ cm.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "10.7 cm",
          },
        },
        {
          id: "cimg-u6-s1-fi-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "$\\tan \\theta$ equals…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Adjacent ÷ opposite" },
            { id: "b", text: "Opposite ÷ hypotenuse" },
            { id: "c", text: "Opposite ÷ adjacent" },
            { id: "d", text: "Adjacent ÷ hypotenuse" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "formula", name: "Tangent", statement: "TOA." }],
            steps: [{ reasoning: "$\\tan = opp/adj$.", marks: 1, markCode: "A" }],
            finalAnswer: "Opposite ÷ adjacent",
          },
        },
        {
          id: "cimg-u6-s1-fi-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A ramp is 8 m long and inclined at 15° to the horizontal ($\\sin 15° \\approx 0.259$). Find its vertical rise.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Trig in context", statement: "opp = hyp × sin." }],
            steps: [
              { reasoning: "Rise is opposite: $h = 8 \\times 0.259$.", marks: 1, markCode: "M" },
              { reasoning: "$h \\approx 2.07$ m.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $\\approx 2.07$ m.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2.07 m",
          },
        },
        {
          id: "cimg-u6-s1-fi-q16",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Hypotenuse = 20, angle = 60°. Using $\\cos 60° = 0.5$, find the adjacent side.",
          response: { type: "numeric", parts: [{ label: "a", answer: 10 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Find side", statement: "adj = cos × hyp." }],
            steps: [
              { reasoning: "$adj = 0.5 \\times 20 = 10$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 10.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "10",
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
