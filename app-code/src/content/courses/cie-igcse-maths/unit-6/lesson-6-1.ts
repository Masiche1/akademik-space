import type { Lesson } from "../../../types.ts";

export const lesson61: Lesson = {
  id: "ciem-u6-lesson-6-1",
  code: "6-1",
  title: "Right-Angled Trigonometry",
  goal: "I CAN use sine, cosine and tangent ratios to find missing sides and angles in right-angled triangles, and recall exact trigonometric values.",
  standards: ["0580 6.1", "0580 6.2"],
  vocabulary: [
    { term: "Opposite", definition: "The side of a right-angled triangle facing the angle in question." },
    { term: "Adjacent", definition: "The side next to the angle that is not the hypotenuse." },
    { term: "Hypotenuse", definition: "The longest side, opposite the right angle." },
    { term: "SOH CAH TOA", definition: "Mnemonic: sin = opposite/hypotenuse, cos = adjacent/hypotenuse, tan = opposite/adjacent." },
    { term: "Exact value", definition: "A trigonometric value expressed exactly, e.g. $\\sin 30^\\circ=\\frac12$." },
  ],
  concepts: [
    {
      id: "ciem-u6-right-trig",
      title: "Sine, cosine and tangent",
      skill: "Label sides relative to an angle and use trig ratios to find missing lengths and angles.",
      lesson: {
        sections: [
          {
            heading: "The three ratios",
            body: "For a right-angled triangle, relative to a chosen acute angle $\\theta$:\n\n- $\\sin\\theta=\\frac{\\text{opposite}}{\\text{hypotenuse}}$\n- $\\cos\\theta=\\frac{\\text{adjacent}}{\\text{hypotenuse}}$\n- $\\tan\\theta=\\frac{\\text{opposite}}{\\text{adjacent}}$\n\nMnemonic: **SOH CAH TOA**.",
          },
          {
            heading: "Finding a side",
            body: "Identify which ratio links the known side and the unknown side. Rearrange: e.g. if $\\sin\\theta=\\frac{\\text{opp}}{\\text{hyp}}$ and you need the opposite, use $\\text{opp}=\\text{hyp}\\times\\sin\\theta$.",
          },
          {
            heading: "Finding an angle",
            body: "Use the **inverse** functions: $\\theta=\\sin^{-1}\\left(\\frac{\\text{opp}}{\\text{hyp}}\\right)$, $\\cos^{-1}$ or $\\tan^{-1}$ depending on which ratio you can form. Round to a sensible number of significant figures.",
          },
        ],
        keyFormulas: [
          { name: "Sine", statement: "$\\sin\\theta=\\frac{\\text{opposite}}{\\text{hypotenuse}}$" },
          { name: "Cosine", statement: "$\\cos\\theta=\\frac{\\text{adjacent}}{\\text{hypotenuse}}$" },
          { name: "Tangent", statement: "$\\tan\\theta=\\frac{\\text{opposite}}{\\text{adjacent}}$" },
        ],
        workedExample: {
          problem: "In a right-angled triangle, the side opposite angle $\\theta$ is $7$ cm and the hypotenuse is $25$ cm. Find $\\theta$.",
          solution: "$\\sin\\theta=\\frac{7}{25}=0.28$, so $\\theta=\\sin^{-1}(0.28)\\approx16.3^\\circ$.",
        },
      },
      questions: [
        {
          id: "ciem-u6-right-trig-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In a right-angled triangle, which ratio gives $\\tan\\theta$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac{\\text{opposite}}{\\text{adjacent}}$" },
              { id: "b", text: "$\\frac{\\text{opposite}}{\\text{hypotenuse}}$" },
              { id: "c", text: "$\\frac{\\text{adjacent}}{\\text{hypotenuse}}$" },
              { id: "d", text: "$\\frac{\\text{hypotenuse}}{\\text{adjacent}}$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Tangent", statement: "$\\tan\\theta=\\frac{\\text{opposite}}{\\text{adjacent}}$" },
            ],
            steps: [
              { reasoning: "Recall SOH CAH TOA.", working: "\\tan=\\frac{opp}{adj}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $\\frac{\\text{opposite}}{\\text{adjacent}}$",
            commonErrors: ["Confusing tan with sin or cos."],
          },
        },
        {
          id: "ciem-u6-right-trig-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A right-angled triangle has hypotenuse $13$ cm and one acute angle $\\theta$ with $\\cos\\theta=\\frac{5}{13}$. Find the length of the side adjacent to $\\theta$.",
          response: { type: "numeric", parts: [{ label: "Adjacent side", answer: 5, unit: "cm" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Cosine", statement: "$\\cos\\theta=\\frac{\\text{adjacent}}{\\text{hypotenuse}}$" },
            ],
            steps: [
              { reasoning: "Rearrange for the adjacent side.", working: "\\text{adj}=\\text{hyp}\\times\\cos\\theta", marks: 1, markCode: "M" },
              { reasoning: "Substitute.", working: "=13\\times\\frac{5}{13}", marks: 1, markCode: "M" },
              { reasoning: "Compute.", working: "=5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$5$ cm",
            commonErrors: ["Dividing instead of multiplying."],
          },
        },
        {
          id: "ciem-u6-right-trig-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "In a right-angled triangle, the side opposite angle $\\theta$ is $9$ cm and the adjacent side is $12$ cm. Find $\\theta$, giving your answer to $1$ decimal place.",
          response: { type: "numeric", parts: [{ label: "Angle θ", answer: 36.9, tolerance: 0.05, unit: "degrees" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Tangent", statement: "$\\tan\\theta=\\frac{\\text{opposite}}{\\text{adjacent}}$" },
            ],
            steps: [
              { reasoning: "Form the tangent ratio.", working: "\\tan\\theta=\\frac{9}{12}=0.75", marks: 1, markCode: "M" },
              { reasoning: "Apply inverse tangent.", working: "\\theta=\\tan^{-1}(0.75)", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "\\approx36.87^\\circ", marks: 1, markCode: "M" },
              { reasoning: "Round to $1$ d.p.", working: "=36.9^\\circ", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$36.9^\\circ$",
            commonErrors: ["Using sin or cos instead of tan.", "Rounding to $37^\\circ$ when $1$ d.p. is asked."],
          },
        },
        {
          id: "ciem-u6-right-trig-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A ladder of length $5$ m leans against a vertical wall. The foot of the ladder is $1.4$ m from the wall.",
          parts: [
            { label: "a", prompt: "Find the angle the ladder makes with the ground.", marks: 3 },
            { label: "b", prompt: "Find how high up the wall the ladder reaches.", marks: 3 },
            { label: "c", prompt: "Find the angle the ladder makes with the wall.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Tangent", statement: "$\\tan\\theta=\\frac{\\text{opposite}}{\\text{adjacent}}$" },
              { kind: "formula", name: "Sine", statement: "$\\sin\\theta=\\frac{\\text{opposite}}{\\text{hypotenuse}}$" },
            ],
            steps: [
              { part: "a", reasoning: "Relative to the ground angle, opposite = height $h$, adjacent = $1.4$ m, hypotenuse = $5$ m. Use $\\tan\\theta=\\frac{h}{1.4}$ — but $h$ unknown; instead use the angle at ground: $\\cos\\theta=\\frac{1.4}{5}$ or $\\tan\\theta=\\frac{h}{1.4}$. Cleanest: $\\cos\\theta=\\frac{\\text{adj}}{\\text{hyp}}=\\frac{1.4}{5}$.", working: "\\cos\\theta=\\frac{1.4}{5}=0.28", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Apply inverse cosine.", working: "\\theta=\\cos^{-1}(0.28)\\approx73.7^\\circ", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the angle.", working: "73.7^\\circ", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Use sine: $\\sin\\theta=\\frac{h}{5}$, or Pythagoras $h=\\sqrt{25-1.96}$.", working: "h=5\\sin(73.7^\\circ)\\approx4.80", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate.", working: "h\\approx4.8\\text{ m}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the height.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Angles in a right triangle sum to $180^\\circ$, and the wall-ground angle is $90^\\circ$.", working: "180^\\circ-90^\\circ-73.7^\\circ", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Compute.", working: "=16.3^\\circ", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State the angle.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $73.7^\\circ$ (b) $4.8$ m (c) $16.3^\\circ$",
            commonErrors: ["In (a) using tan with two unknowns.", "In (c) giving $73.7^\\circ$ again instead of the complementary angle."],
            examinerNote: "Accept Pythagoras for (b): $h=\\sqrt{5^2-1.4^2}=\\sqrt{23.04}\\approx4.80$ m.",
          },
        },
      ],
    },
    {
      id: "ciem-u6-exact-values",
      title: "Exact trigonometric values",
      skill: "Recall and use exact values of sin, cos and tan for $0^\\circ$, $30^\\circ$, $45^\\circ$ and $60^\\circ$.",
      lesson: {
        sections: [
          {
            heading: "The standard table",
            body: "Memorise these values:\n\n| $\\theta$ | $\\sin\\theta$ | $\\cos\\theta$ | $\\tan\\theta$ |\n|---|---|---|---|\n| $0^\\circ$ | $0$ | $1$ | $0$ |\n| $30^\\circ$ | $\\frac12$ | $\\frac{\\sqrt3}{2}$ | $\\frac{1}{\\sqrt3}$ |\n| $45^\\circ$ | $\\frac{\\sqrt2}{2}$ | $\\frac{\\sqrt2}{2}$ | $1$ |\n| $60^\\circ$ | $\\frac{\\sqrt3}{2}$ | $\\frac12$ | $\\sqrt3$ |\n| $90^\\circ$ | $1$ | $0$ | undefined |",
          },
          {
            heading: "Deriving from special triangles",
            body: "The values come from two triangles: a $45^\\circ$-$45^\\circ$-$90^\\circ$ triangle with sides $1,1,\\sqrt2$, and a $30^\\circ$-$60^\\circ$-$90^\\circ$ triangle with sides $1,\\sqrt3,2$. Dividing opposite/adjacent/hypotenuse gives the table.",
          },
          {
            heading: "When to use exact values",
            body: "If an angle is one of $30^\\circ$, $45^\\circ$ or $60^\\circ$, use exact values — answers like $\\frac{\\sqrt3}{2}$ are expected, not decimals. For other angles use calculator values.",
          },
        ],
        keyFormulas: [
          { name: "sin 30", statement: "$\\frac12$" },
          { name: "sin 45", statement: "$\\frac{\\sqrt2}{2}$" },
          { name: "sin 60", statement: "$\\frac{\\sqrt3}{2}$" },
          { name: "cos 60", statement: "$\\frac12$" },
          { name: "tan 45", statement: "$1$" },
        ],
        workedExample: {
          problem: "Find the exact value of $\\sin 60^\\circ + \\cos 30^\\circ$.",
          solution: "$\\frac{\\sqrt3}{2}+\\frac{\\sqrt3}{2}=\\sqrt3$.",
        },
      },
      questions: [
        {
          id: "ciem-u6-exact-values-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the exact value of $\\cos 60^\\circ$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac12$" },
              { id: "b", text: "$\\frac{\\sqrt3}{2}$" },
              { id: "c", text: "$\\frac{\\sqrt2}{2}$" },
              { id: "d", text: "$1$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Exact values", statement: "$\\cos 60^\\circ=\\frac12$" },
            ],
            steps: [
              { reasoning: "Recall the standard table.", working: "\\cos 60^\\circ=\\frac12", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $\\frac12$",
            commonErrors: ["Confusing sin and cos values."],
          },
        },
        {
          id: "ciem-u6-exact-values-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the exact value of $\\tan 45^\\circ \\times \\sin 30^\\circ$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Exact values", statement: "$\\tan 45^\\circ=1$, $\\sin 30^\\circ=\\frac12$." },
            ],
            steps: [
              { reasoning: "Substitute exact values.", working: "1\\times\\frac12", marks: 1, markCode: "M" },
              { reasoning: "Simplify.", working: "=\\frac12", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\frac12$",
            commonErrors: ["Using decimal approximations instead of exact values."],
          },
        },
        {
          id: "ciem-u6-exact-values-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "In a right-angled triangle, the hypotenuse is $8$ cm and one acute angle is $30^\\circ$. Find the exact length of the side opposite the $30^\\circ$ angle.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Sine", statement: "$\\sin\\theta=\\frac{\\text{opposite}}{\\text{hypotenuse}}$" },
              { kind: "property", name: "Exact value", statement: "$\\sin 30^\\circ=\\frac12$." },
            ],
            steps: [
              { reasoning: "Form the sine ratio.", working: "\\sin 30^\\circ=\\frac{\\text{opp}}{8}", marks: 1, markCode: "M" },
              { reasoning: "Substitute the exact value.", working: "\\frac12=\\frac{\\text{opp}}{8}", marks: 1, markCode: "M" },
              { reasoning: "Solve for the opposite side.", working: "\\text{opp}=4", marks: 1, markCode: "M" },
              { reasoning: "State with units.", working: "4\\text{ cm}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$4$ cm",
            commonErrors: ["Using $\\sin 30^\\circ=0.5$ and giving a decimal when exact is expected — accept $4$ either way."],
          },
        },
        {
          id: "ciem-u6-exact-values-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "An equilateral triangle $ABC$ has side length $6$ cm. $M$ is the midpoint of $BC$.",
          parts: [
            { label: "a", prompt: "Show that $AM=3\\sqrt3$ cm.", marks: 4 },
            { label: "b", prompt: "Find the exact value of $\\sin 60^\\circ$ using triangle $ABM$.", marks: 3 },
            { label: "c", prompt: "Find the area of triangle $ABC$ exactly.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Equilateral triangle", statement: "All angles $60^\\circ$; median from $A$ bisects $BC$ and is perpendicular to it." },
              { kind: "formula", name: "Pythagoras", statement: "$AM^2+BM^2=AB^2$" },
            ],
            steps: [
              { part: "a", reasoning: "$BM=3$ cm (half of $BC$) and angle $AMB=90^\\circ$.", working: "BM=3,\\ \\angle AMB=90^\\circ", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Apply Pythagoras.", working: "AM^2=6^2-3^2=36-9=27", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Square root.", working: "AM=\\sqrt{27}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Simplify to required form.", working: "AM=3\\sqrt3", marks: 1, markCode: "A" },
              { part: "b", reasoning: "In triangle $ABM$, angle $B=60^\\circ$, opposite $=AM=3\\sqrt3$, hypotenuse $=AB=6$.", working: "\\sin 60^\\circ=\\frac{AM}{AB}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Substitute.", working: "=\\frac{3\\sqrt3}{6}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Simplify.", working: "=\\frac{\\sqrt3}{2}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Area $=\\frac12\\times\\text{base}\\times\\text{height}$.", working: "\\frac12\\times6\\times3\\sqrt3", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Simplify.", working: "=9\\sqrt3 \\text{ cm}^2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) shown (b) $\\frac{\\sqrt3}{2}$ (c) $9\\sqrt3$ cm$^2$",
            commonErrors: ["In (b) using $AM$ as hypotenuse.", "In (c) using side $6$ as the height."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciem-u6-right-trig-notes",
      title: "Right-angled trigonometry — revision notes",
      summary: "SOH CAH TOA, finding sides and angles, and exact values for $30^\\circ$, $45^\\circ$ and $60^\\circ$.",
      sections: [
        {
          heading: "The ratios",
          body: "- $\\sin\\theta=\\frac{\\text{opp}}{\\text{hyp}}$, $\\cos\\theta=\\frac{\\text{adj}}{\\text{hyp}}$, $\\tan\\theta=\\frac{\\text{opp}}{\\text{adj}}$\n- Label sides **relative to the angle** first — opposite/adjacent swap if you use the other acute angle.\n- Inverse functions ($\\sin^{-1}$ etc.) find angles.",
        },
        {
          heading: "Exact values",
          body: "| $\\theta$ | $\\sin$ | $\\cos$ | $\\tan$ |\n|---|---|---|---|\n| $30^\\circ$ | $\\frac12$ | $\\frac{\\sqrt3}{2}$ | $\\frac{1}{\\sqrt3}$ |\n| $45^\\circ$ | $\\frac{\\sqrt2}{2}$ | $\\frac{\\sqrt2}{2}$ | $1$ |\n| $60^\\circ$ | $\\frac{\\sqrt3}{2}$ | $\\frac12$ | $\\sqrt3$ |\n\n**Worked example.** Hypotenuse $8$, angle $30^\\circ$: opposite $=8\\times\\frac12=4$ cm.",
        },
        {
          heading: "Exam technique",
          body: "- Draw and label the triangle; mark the right angle.\n- Choose the ratio containing the two sides you know/need.\n- Exact angles ($30,45,60$) → exact answers; other angles → calculator.",
        },
      ],
    },
  ],
};
