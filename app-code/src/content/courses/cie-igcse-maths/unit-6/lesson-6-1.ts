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
              { id: "a", text: "$\\frac{\\text{hypotenuse}}{\\text{adjacent}}$" },
              { id: "b", text: "$\\frac{\\text{adjacent}}{\\text{hypotenuse}}$" },
              { id: "c", text: "$\\frac{\\text{opposite}}{\\text{hypotenuse}}$" },
              { id: "d", text: "$\\frac{\\text{opposite}}{\\text{adjacent}}$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Tangent", statement: "$\\tan\\theta=\\frac{\\text{opposite}}{\\text{adjacent}}$" },
            ],
            steps: [
              { reasoning: "Recall SOH CAH TOA.", working: "\\tan=\\frac{opp}{adj}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** $\\frac{\\text{opposite}}{\\text{adjacent}}$",
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
        {
          id: "ciem-u6-right-trig-q5", difficulty: "foundation", totalMarks: 1,
          stem: "In a right-angled triangle, which ratio defines $\\sin\\theta$?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\frac{\\text{opposite}}{\\text{hypotenuse}}$" },
            { id: "b", text: "$\\frac{\\text{hypotenuse}}{\\text{opposite}}$" },
            { id: "c", text: "$\\frac{\\text{adjacent}}{\\text{hypotenuse}}$" },
            { id: "d", text: "$\\frac{\\text{opposite}}{\\text{adjacent}}$" }
 ],
            correctChoiceId: "a" },
          markscheme: { principles: [ { kind: "formula", name: "Sine", statement: "$\\sin\\theta=\\frac{\\text{opposite}}{\\text{hypotenuse}}$" } ],
            steps: [ { reasoning: "Recall SOH CAH TOA.", working: "\\sin=\\frac{opp}{hyp}", marks: 1, markCode: "B" } ],
            finalAnswer: "**(a)** $\\frac{\\text{opposite}}{\\text{hypotenuse}}$", commonErrors: ["Confusing sine with cosine."] },
        },
        {
          id: "ciem-u6-right-trig-q6", difficulty: "core", totalMarks: 1,
          stem: "In a right-angled triangle, the adjacent side to $\\theta$ is $12$ and the hypotenuse is $13$. What is $\\cos\\theta$?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\frac{13}{12}$" },
            { id: "b", text: "$\\frac{12}{13}$" },
            { id: "c", text: "$\\frac{5}{12}$" },
            { id: "d", text: "$\\frac{12}{5}$" }
 ],
            correctChoiceId: "b" },
          markscheme: { principles: [ { kind: "formula", name: "Cosine", statement: "$\\cos\\theta=\\frac{\\text{adjacent}}{\\text{hypotenuse}}$" } ],
            steps: [ { reasoning: "Use adjacent over hypotenuse.", working: "\\cos\\theta=\\frac{12}{13}", marks: 1, markCode: "M" } ],
            finalAnswer: "**(b)** $\\frac{12}{13}$", commonErrors: ["Using opposite instead of adjacent."] },
        },
        {
          id: "ciem-u6-right-trig-q7", difficulty: "core", totalMarks: 3,
          stem: "In a right-angled triangle, $\\cos\\theta=\\frac45$ and the hypotenuse is $15$ cm. Find the adjacent side.",
          response: { type: "numeric", parts: [ { label: "Adjacent", answer: 12, unit: "cm" } ] },
          markscheme: { principles: [ { kind: "formula", name: "Cosine", statement: "$\\cos\\theta=\\frac{\\text{adjacent}}{\\text{hypotenuse}}$" } ],
            steps: [
              { reasoning: "Rearrange for the adjacent side.", working: "\\text{adj}=\\text{hyp}\\times\\cos\\theta", marks: 1, markCode: "M" },
              { reasoning: "Substitute.", working: "=15\\times\\frac45", marks: 1, markCode: "M" },
              { reasoning: "Compute and state the side.", marks: 1, markCode: "A" } ],
            finalAnswer: "$12$ cm", commonErrors: ["Dividing $15$ by $\\frac45$."] },
        },
        {
          id: "ciem-u6-right-trig-q8", difficulty: "challenge", totalMarks: 1,
          stem: "In a right-angled triangle, the side opposite $\\theta$ is $7$ and the adjacent side is $24$. What is $\\theta$ to $1$ decimal place?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$22.6^\\circ$" },
            { id: "b", text: "$73.7^\\circ$" },
            { id: "c", text: "$14.0^\\circ$" },
            { id: "d", text: "$16.3^\\circ$" }
 ],
            correctChoiceId: "d" },
          markscheme: { principles: [ { kind: "formula", name: "Tangent", statement: "$\\tan\\theta=\\frac{\\text{opposite}}{\\text{adjacent}}$" } ],
            steps: [ { reasoning: "Use inverse tangent.", working: "\\theta=\\tan^{-1}\\left(\\frac7{24}\\right)\\approx16.3^\\circ", marks: 1, markCode: "M" } ],
            finalAnswer: "**(d)** $16.3^\\circ$", commonErrors: ["Using sine or cosine instead of tangent."] },
        },
        {
          id: "ciem-u6-right-trig-q9", difficulty: "core", totalMarks: 3,
          stem: "In a right-angled triangle, $\\sin\\theta=\\frac5{13}$ and the hypotenuse is $26$ cm. Find the opposite side.",
          response: { type: "numeric", parts: [ { label: "Opposite", answer: 10, unit: "cm" } ] },
          markscheme: { principles: [ { kind: "formula", name: "Sine", statement: "$\\sin\\theta=\\frac{\\text{opposite}}{\\text{hypotenuse}}$" } ],
            steps: [
              { reasoning: "Rearrange for the opposite side.", working: "\\text{opp}=\\text{hyp}\\times\\sin\\theta", marks: 1, markCode: "M" },
              { reasoning: "Substitute.", working: "=26\\times\\frac5{13}", marks: 1, markCode: "M" },
              { reasoning: "Compute and state the side.", marks: 1, markCode: "A" } ],
            finalAnswer: "$10$ cm", commonErrors: ["Dividing instead of multiplying."] },
        },
        {
          id: "ciem-u6-right-trig-q10", difficulty: "foundation", totalMarks: 2,
          stem: "A right-angled triangle has legs $6$ and $8$ and hypotenuse $10$. Find $\\sin\\theta$ where $\\theta$ is opposite the side of length $6$.",
          response: { type: "numeric", parts: [ { label: "sin θ", answer: 0.6 }] },
          markscheme: { principles: [ { kind: "formula", name: "Sine", statement: "$\\sin\\theta=\\frac{\\text{opposite}}{\\text{hypotenuse}}$" } ],
            steps: [
              { reasoning: "Opposite is $6$, hypotenuse is $10$.", working: "\\sin\\theta=\\frac6{10}", marks: 1, markCode: "M" },
              { reasoning: "State the value.", marks: 1, markCode: "A" } ],
            finalAnswer: "$0.6$", commonErrors: ["Using $6$ as the hypotenuse."] },
        },
        {
          id: "ciem-u6-right-trig-q11", difficulty: "challenge", totalMarks: 1,
          stem: "In a right-angled triangle, $\\tan\\theta=\\frac5{12}$. What is $\\theta$ to $1$ decimal place?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$42.5^\\circ$" },
            { id: "b", text: "$67.4^\\circ$" },
            { id: "c", text: "$12.0^\\circ$" },
            { id: "d", text: "$22.6^\\circ$" }
 ],
            correctChoiceId: "d" },
          markscheme: { principles: [ { kind: "formula", name: "Inverse tangent", statement: "$\\theta=\\tan^{-1}\\left(\\frac{\\text{opposite}}{\\text{adjacent}}\\right)$" } ],
            steps: [ { reasoning: "Apply inverse tangent.", working: "\\theta=\\tan^{-1}\\left(\\frac5{12}\\right)\\approx22.6^\\circ", marks: 1, markCode: "M" } ],
            finalAnswer: "**(d)** $22.6^\\circ$", commonErrors: ["Giving $\\tan^{-1}(12/5)$."] },
        },
        {
          id: "ciem-u6-right-trig-q12", difficulty: "core", totalMarks: 3,
          stem: "A ramp rises $1.2$ m over a horizontal distance of $3.5$ m. Find the angle the ramp makes with the horizontal.",
          response: { type: "open" },
          markscheme: { principles: [ { kind: "formula", name: "Tangent", statement: "$\\tan\\theta=\\frac{\\text{rise}}{\\text{run}}$" } ],
            steps: [
              { reasoning: "Form the tangent ratio.", working: "\\tan\\theta=\\frac{1.2}{3.5}", marks: 1, markCode: "M" },
              { reasoning: "Apply inverse tangent.", working: "\\theta=\\tan^{-1}(0.3429)", marks: 1, markCode: "M" },
              { reasoning: "State the angle.", marks: 1, markCode: "A" } ],
            finalAnswer: "$\\theta\\approx18.9^\\circ$", commonErrors: ["Inverting the ratio."] },
        },
        {
          id: "ciem-u6-right-trig-q13", difficulty: "challenge", totalMarks: 3,
          stem: "In a right-angled triangle, the hypotenuse is $20$ cm and one acute angle is $30^\\circ$. Find the exact length of the side opposite the $30^\\circ$ angle.",
          response: { type: "numeric", parts: [ { label: "Opposite", answer: 10, unit: "cm" } ] },
          markscheme: { principles: [ { kind: "formula", name: "Sine", statement: "$\\sin\\theta=\\frac{\\text{opposite}}{\\text{hypotenuse}}$" }, { kind: "property", name: "Exact value", statement: "$\\sin30^\\circ=\\frac12$." } ],
            steps: [
              { reasoning: "Use sine with the exact value.", working: "\\frac12=\\frac{\\text{opp}}{20}", marks: 1, markCode: "M" },
              { reasoning: "Solve for the opposite side.", working: "\\text{opp}=10", marks: 1, markCode: "M" },
              { reasoning: "State the side.", marks: 1, markCode: "A" } ],
            finalAnswer: "$10$ cm", commonErrors: ["Using $\\cos30^\\circ$ instead of $\\sin30^\\circ$."] },
        },
        {
          id: "ciem-u6-right-trig-q14", difficulty: "foundation", totalMarks: 3,
          stem: "A right-angled triangle has hypotenuse $13$ cm and the side opposite angle $\\theta$ is $5$ cm. Find $\\theta$.",
          response: { type: "open" },
          markscheme: { principles: [ { kind: "formula", name: "Sine", statement: "$\\sin\\theta=\\frac{\\text{opposite}}{\\text{hypotenuse}}$" } ],
            steps: [
              { reasoning: "Form the sine ratio.", working: "\\sin\\theta=\\frac5{13}", marks: 1, markCode: "M" },
              { reasoning: "Apply inverse sine.", working: "\\theta=\\sin^{-1}\\left(\\frac5{13}\\right)", marks: 1, markCode: "M" },
              { reasoning: "State the angle.", marks: 1, markCode: "A" } ],
            finalAnswer: "$\\theta\\approx22.6^\\circ$", commonErrors: ["Using $\\cos^{-1}$ with the same ratio."] },
        },
        {
          id: "ciem-u6-right-trig-q15", difficulty: "core", totalMarks: 1,
          stem: "Which expression gives $\\tan\\theta$ in a right-angled triangle?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\frac{\\text{hypotenuse}}{\\text{opposite}}$" },
            { id: "b", text: "$\\frac{\\text{adjacent}}{\\text{hypotenuse}}$" },
            { id: "c", text: "$\\frac{\\text{opposite}}{\\text{adjacent}}$" },
            { id: "d", text: "$\\frac{\\text{opposite}}{\\text{hypotenuse}}$" }
 ],
            correctChoiceId: "c" },
          markscheme: { principles: [ { kind: "formula", name: "Tangent", statement: "$\\tan\\theta=\\frac{\\text{opposite}}{\\text{adjacent}}$" } ],
            steps: [ { reasoning: "Recall SOH CAH TOA.", working: "\\tan=\\frac{opp}{adj}", marks: 1, markCode: "B" } ],
            finalAnswer: "**(c)** $\\frac{\\text{opposite}}{\\text{adjacent}}$", commonErrors: ["Confusing tan with sin."] },
        },
        {
          id: "ciem-u6-right-trig-q16", difficulty: "challenge", totalMarks: 8,
          stem: "A right-angled triangle has hypotenuse $17$ cm and one leg of length $8$ cm.",
          parts: [
            { label: "a", prompt: "Find the length of the other leg.", marks: 2 },
            { label: "b", prompt: "Find the angle opposite the $8$ cm leg.", marks: 3 },
            { label: "c", prompt: "Find the angle opposite the other leg.", marks: 3 } ],
          response: { type: "open" },
          markscheme: { principles: [ { kind: "formula", name: "Pythagoras", statement: "$a^2+b^2=c^2$" }, { kind: "formula", name: "Sine", statement: "$\\sin\\theta=\\frac{\\text{opposite}}{\\text{hypotenuse}}$" } ],
            steps: [
              { part: "a", reasoning: "Apply Pythagoras.", working: "b=\\sqrt{17^2-8^2}=\\sqrt{225}=15", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the leg.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Use sine with opposite $8$.", working: "\\sin\\theta=\\frac8{17}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Apply inverse sine.", working: "\\theta=\\sin^{-1}\\left(\\frac8{17}\\right)\\approx28.1^\\circ", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the angle.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Use sine with opposite $15$.", working: "\\sin\\theta=\\frac{15}{17}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Apply inverse sine or subtract from $90^\\circ$.", working: "\\theta\\approx61.9^\\circ", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State the angle.", marks: 1, markCode: "A" } ],
            finalAnswer: "(a) $15$ cm (b) $\\approx28.1^\\circ$ (c) $\\approx61.9^\\circ$",
            commonErrors: ["In (c) giving the same angle as (b).", "In (a) subtracting instead of using Pythagoras."] },
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
              { id: "a", text: "$\\frac{\\sqrt2}{2}$" },
              { id: "b", text: "$\\frac{\\sqrt3}{2}$" },
              { id: "c", text: "$\\frac12$" },
              { id: "d", text: "$1$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Exact values", statement: "$\\cos 60^\\circ=\\frac12$" },
            ],
            steps: [
              { reasoning: "Recall the standard table.", working: "\\cos 60^\\circ=\\frac12", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** $\\frac12$",
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
        {
          id: "ciem-u6-exact-values-q5", difficulty: "foundation", totalMarks: 1,
          stem: "What is the exact value of $\\sin30^\\circ$?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$1$" },
            { id: "b", text: "$\\frac{\\sqrt2}{2}$" },
            { id: "c", text: "$\\frac{\\sqrt3}{2}$" },
            { id: "d", text: "$\\frac12$" }
 ],
            correctChoiceId: "d" },
          markscheme: { principles: [ { kind: "property", name: "Exact values", statement: "$\\sin30^\\circ=\\frac12$." } ],
            steps: [ { reasoning: "Recall the standard table.", working: "\\sin30^\\circ=\\frac12", marks: 1, markCode: "B" } ],
            finalAnswer: "**(d)** $\\frac12$", commonErrors: ["Confusing $\\sin30^\\circ$ with $\\cos30^\\circ$."] },
        },
        {
          id: "ciem-u6-exact-values-q6", difficulty: "core", totalMarks: 1,
          stem: "What is the exact value of $\\cos45^\\circ$?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\frac{\\sqrt3}{2}$" },
            { id: "b", text: "$\\frac{\\sqrt2}{2}$" },
            { id: "c", text: "$\\frac12$" },
            { id: "d", text: "$1$" }
 ],
            correctChoiceId: "b" },
          markscheme: { principles: [ { kind: "property", name: "Exact values", statement: "$\\cos45^\\circ=\\frac{\\sqrt2}{2}$." } ],
            steps: [ { reasoning: "Recall the standard table.", working: "\\cos45^\\circ=\\frac{\\sqrt2}{2}", marks: 1, markCode: "B" } ],
            finalAnswer: "**(b)** $\\frac{\\sqrt2}{2}$", commonErrors: ["Using $\\frac12$ or $\\frac{\\sqrt3}{2}$."] },
        },
        {
          id: "ciem-u6-exact-values-q7", difficulty: "core", totalMarks: 2,
          stem: "Find the value of $2\\sin30^\\circ+\\cos60^\\circ$.",
          response: { type: "numeric", parts: [ { label: "Value", answer: 1.5 }] },
          markscheme: { principles: [ { kind: "property", name: "Exact values", statement: "$\\sin30^\\circ=\\frac12$, $\\cos60^\\circ=\\frac12$." } ],
            steps: [
              { reasoning: "Substitute exact values.", working: "2\\times\\frac12+\\frac12=1.5", marks: 1, markCode: "M" },
              { reasoning: "State the value.", marks: 1, markCode: "A" } ],
            finalAnswer: "$1.5$", commonErrors: ["Using decimal approximations for special angles."] },
        },
        {
          id: "ciem-u6-exact-values-q8", difficulty: "challenge", totalMarks: 1,
          stem: "What is the exact value of $\\sin60^\\circ+\\cos30^\\circ$?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$1$" },
            { id: "b", text: "$\\sqrt6$" },
            { id: "c", text: "$\\frac{\\sqrt3}{2}$" },
            { id: "d", text: "$\\sqrt3$" }
 ],
            correctChoiceId: "d" },
          markscheme: { principles: [ { kind: "property", name: "Exact values", statement: "$\\sin60^\\circ=\\cos30^\\circ=\\frac{\\sqrt3}{2}$." } ],
            steps: [ { reasoning: "Add the two equal values.", working: "\\frac{\\sqrt3}{2}+\\frac{\\sqrt3}{2}=\\sqrt3", marks: 1, markCode: "M" } ],
            finalAnswer: "**(d)** $\\sqrt3$", commonErrors: ["Doubling incorrectly to $\\frac{\\sqrt3}{2}$."] },
        },
        {
          id: "ciem-u6-exact-values-q9", difficulty: "core", totalMarks: 3,
          stem: "In a right-angled triangle, the hypotenuse is $8$ cm and one acute angle is $30^\\circ$. Find the exact length of the side opposite the $30^\\circ$ angle.",
          response: { type: "numeric", parts: [ { label: "Opposite", answer: 4, unit: "cm" } ] },
          markscheme: { principles: [ { kind: "formula", name: "Sine", statement: "$\\sin\\theta=\\frac{\\text{opposite}}{\\text{hypotenuse}}$" }, { kind: "property", name: "Exact value", statement: "$\\sin30^\\circ=\\frac12$." } ],
            steps: [
              { reasoning: "Use sine with the exact value.", working: "\\frac12=\\frac{\\text{opp}}{8}", marks: 1, markCode: "M" },
              { reasoning: "Solve for the opposite side.", working: "\\text{opp}=4", marks: 1, markCode: "M" },
              { reasoning: "State the side.", marks: 1, markCode: "A" } ],
            finalAnswer: "$4$ cm", commonErrors: ["Using the adjacent side formula."] },
        },
        {
          id: "ciem-u6-exact-values-q10", difficulty: "foundation", totalMarks: 2,
          stem: "Find the value of $\\cos60^\\circ+\\sin30^\\circ$.",
          response: { type: "numeric", parts: [ { label: "Value", answer: 1 }] },
          markscheme: { principles: [ { kind: "property", name: "Exact values", statement: "$\\cos60^\\circ=\\frac12$, $\\sin30^\\circ=\\frac12$." } ],
            steps: [
              { reasoning: "Add the exact values.", working: "\\frac12+\\frac12=1", marks: 1, markCode: "M" },
              { reasoning: "State the value.", marks: 1, markCode: "A" } ],
            finalAnswer: "$1$", commonErrors: ["Giving $\\frac12$ instead of $1$."] },
        },
        {
          id: "ciem-u6-exact-values-q11", difficulty: "challenge", totalMarks: 1,
          stem: "What is the exact value of $\\tan45^\\circ+\\sin60^\\circ$?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$1+\\frac{\\sqrt3}{2}$" },
            { id: "b", text: "$\\frac{\\sqrt3}{2}$" },
            { id: "c", text: "$1$" },
            { id: "d", text: "$\\sqrt3$" }
 ],
            correctChoiceId: "a" },
          markscheme: { principles: [ { kind: "property", name: "Exact values", statement: "$\\tan45^\\circ=1$, $\\sin60^\\circ=\\frac{\\sqrt3}{2}$." } ],
            steps: [ { reasoning: "Add the exact values.", working: "1+\\frac{\\sqrt3}{2}", marks: 1, markCode: "M" } ],
            finalAnswer: "**(a)** $1+\\frac{\\sqrt3}{2}$", commonErrors: ["Treating $\\tan45^\\circ$ as $0$."] },
        },
        {
          id: "ciem-u6-exact-values-q12", difficulty: "core", totalMarks: 3,
          stem: "In a $30^\\circ$-$60^\\circ$-$90^\\circ$ triangle with hypotenuse $2$, show that $\\sin60^\\circ=\\frac{\\sqrt3}{2}$.",
          response: { type: "open" },
          markscheme: { principles: [ { kind: "property", name: "Special triangle", statement: "Sides are in ratio $1:\\sqrt3:2$ opposite $30^\\circ$, $60^\\circ$, $90^\\circ$." } ],
            steps: [
              { reasoning: "The side opposite $60^\\circ$ is $\\sqrt3$ and the hypotenuse is $2$.", working: "\\frac{\\sqrt3}{2}", marks: 1, markCode: "M" },
              { reasoning: "Use opposite over hypotenuse for sine.", working: "\\sin60^\\circ=\\frac{\\sqrt3}{2}", marks: 1, markCode: "M" },
              { reasoning: "State the exact value.", marks: 1, markCode: "A" } ],
            finalAnswer: "$\\sin60^\\circ=\\frac{\\sqrt3}{2}$", commonErrors: ["Using $1$ as the side opposite $60^\\circ$."] },
        },
        {
          id: "ciem-u6-exact-values-q13", difficulty: "challenge", totalMarks: 3,
          stem: "In a right-angled triangle, the hypotenuse is $10$ cm and one acute angle is $60^\\circ$. Find the exact length of the side adjacent to the $60^\\circ$ angle.",
          response: { type: "numeric", parts: [ { label: "Adjacent", answer: 5, unit: "cm" } ] },
          markscheme: { principles: [ { kind: "formula", name: "Cosine", statement: "$\\cos\\theta=\\frac{\\text{adjacent}}{\\text{hypotenuse}}$" }, { kind: "property", name: "Exact value", statement: "$\\cos60^\\circ=\\frac12$." } ],
            steps: [
              { reasoning: "Use cosine with the exact value.", working: "\\frac12=\\frac{\\text{adj}}{10}", marks: 1, markCode: "M" },
              { reasoning: "Solve for the adjacent side.", working: "\\text{adj}=5", marks: 1, markCode: "M" },
              { reasoning: "State the side.", marks: 1, markCode: "A" } ],
            finalAnswer: "$5$ cm", commonErrors: ["Using sine instead of cosine."] },
        },
        {
          id: "ciem-u6-exact-values-q14", difficulty: "foundation", totalMarks: 3,
          stem: "Find the exact value of $\\sin45^\\circ\\cos45^\\circ$.",
          response: { type: "open" },
          markscheme: { principles: [ { kind: "property", name: "Exact values", statement: "$\\sin45^\\circ=\\cos45^\\circ=\\frac{\\sqrt2}{2}$." } ],
            steps: [
              { reasoning: "Substitute the exact values.", working: "\\frac{\\sqrt2}{2}\\times\\frac{\\sqrt2}{2}", marks: 1, markCode: "M" },
              { reasoning: "Multiply.", working: "=\\frac{2}{4}", marks: 1, markCode: "M" },
              { reasoning: "State the value.", marks: 1, markCode: "A" } ],
            finalAnswer: "$\\frac12$", commonErrors: ["Adding instead of multiplying."] },
        },
        {
          id: "ciem-u6-exact-values-q15", difficulty: "core", totalMarks: 1,
          stem: "What is the exact value of $\\tan30^\\circ$?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\frac{1}{\\sqrt3}$" },
            { id: "b", text: "$\\sqrt3$" },
            { id: "c", text: "$\\frac12$" },
            { id: "d", text: "$\\frac{\\sqrt3}{2}$" }
 ],
            correctChoiceId: "a" },
          markscheme: { principles: [ { kind: "property", name: "Exact values", statement: "$\\tan30^\\circ=\\frac{1}{\\sqrt3}$." } ],
            steps: [ { reasoning: "Recall the standard table.", working: "\\tan30^\\circ=\\frac{1}{\\sqrt3}", marks: 1, markCode: "B" } ],
            finalAnswer: "**(a)** $\\frac{1}{\\sqrt3}$", commonErrors: ["Confusing with $\\tan60^\\circ=\\sqrt3$."] },
        },
        {
          id: "ciem-u6-exact-values-q16", difficulty: "challenge", totalMarks: 8,
          stem: "A right-angled triangle has hypotenuse $12$ cm and one acute angle $45^\\circ$.",
          parts: [
            { label: "a", prompt: "Find the exact length of the side opposite the $45^\\circ$ angle.", marks: 3 },
            { label: "b", prompt: "Find the exact length of the side adjacent to the $45^\\circ$ angle.", marks: 2 },
            { label: "c", prompt: "Find the exact area of the triangle.", marks: 3 } ],
          response: { type: "open" },
          markscheme: { principles: [ { kind: "property", name: "Exact values", statement: "$\\sin45^\\circ=\\cos45^\\circ=\\frac{\\sqrt2}{2}$." }, { kind: "formula", name: "Triangle area", statement: "$A=\\frac12bh$." } ],
            steps: [
              { part: "a", reasoning: "Use sine: opposite $=12\\times\\frac{\\sqrt2}{2}$.", working: "=6\\sqrt2", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the side.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Give units.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "At $45^\\circ$ the adjacent side equals the opposite side.", working: "6\\sqrt2", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the side.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Area $=\\frac12\\times6\\sqrt2\\times6\\sqrt2$.", working: "=\\frac12\\times72", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Simplify.", working: "=36", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State the area.", marks: 1, markCode: "A" } ],
            finalAnswer: "(a) $6\\sqrt2$ cm (b) $6\\sqrt2$ cm (c) $36$ cm$^2$",
            commonErrors: ["Using $\\frac{\\sqrt3}{2}$ for the $45^\\circ$ values."] },
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
