import type { Lesson } from "../../../types.ts";

export const lesson62: Lesson = {
  id: "ciem-u6-lesson-6-2",
  code: "6-2",
  title: "Sine and Cosine Rules",
  goal: "I CAN use the sine rule and cosine rule to find missing sides and angles in non-right-angled triangles, and use $\\frac12ab\\sin C$ for area.",
  standards: ["0580 6.3", "0580 6.4"],
  vocabulary: [
    { term: "Sine rule", definition: "$\\frac{a}{\\sin A}=\\frac{b}{\\sin B}=\\frac{c}{\\sin C}$ — relates sides to opposite angles." },
    { term: "Cosine rule", definition: "$a^2=b^2+c^2-2bc\\cos A$ — relates three sides and the included angle." },
    { term: "Included angle", definition: "The angle between two given sides." },
    { term: "Ambiguous case", definition: "When sine rule gives two possible angles for a side–angle–side setup." },
    { term: "Area of a triangle", definition: "$\\frac12ab\\sin C$ where $C$ is the included angle between sides $a$ and $b$." },
  ],
  concepts: [
    {
      id: "ciem-u6-sine-cosine-rules",
      title: "Sine rule and cosine rule",
      skill: "Choose and apply the correct rule for non-right-angled triangles.",
      lesson: {
        sections: [
          {
            heading: "Choosing the rule",
            body: "- **Sine rule**: use when you have a side and its **opposite angle** pair plus one more piece of information (another side-angle pair, or two angles).\n- **Cosine rule**: use when you have **two sides and the included angle** (find third side), or **three sides** (find an angle).\n- **Area** $\\frac12ab\\sin C$: use when you have two sides and the included angle.",
          },
          {
            heading: "Sine rule",
            body: "$$\\frac{a}{\\sin A}=\\frac{b}{\\sin B}=\\frac{c}{\\sin C}$$\n\nRearrange for what you need: $a=\\frac{b\\sin A}{\\sin B}$ or $\\sin A=\\frac{a\\sin B}{b}$.",
          },
          {
            heading: "Cosine rule",
            body: "$$a^2=b^2+c^2-2bc\\cos A$$\n\nFor an angle: $\\cos A=\\frac{b^2+c^2-a^2}{2bc}$. Watch the sign — the $-2bc\\cos A$ term is **minus**.",
          },
        ],
        keyFormulas: [
          { name: "Sine rule", statement: "$\\frac{a}{\\sin A}=\\frac{b}{\\sin B}$" },
          { name: "Cosine rule (side)", statement: "$a^2=b^2+c^2-2bc\\cos A$" },
          { name: "Cosine rule (angle)", statement: "$\\cos A=\\frac{b^2+c^2-a^2}{2bc}$" },
          { name: "Area", statement: "$\\frac12ab\\sin C$" },
        ],
        workedExample: {
          problem: "Triangle $ABC$ has $a=7$, $b=10$ and angle $A=30^\\circ$. Find angle $B$.",
          solution: "Sine rule: $\\frac{7}{\\sin30^\\circ}=\\frac{10}{\\sin B}$, so $\\sin B=\\frac{10\\sin30^\\circ}{7}=\\frac{5}{7}\\approx0.714$, giving $B\\approx45.6^\\circ$.",
        },
      },
      questions: [
        {
          id: "ciem-u6-sine-cosine-rules-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A triangle has two sides and the included angle. Which rule finds the third side?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Pythagoras" },
              { id: "b", text: "Cosine rule" },
              { id: "c", text: "Sine rule" },
              { id: "d", text: "Area formula" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Rule selection", statement: "Two sides + included angle → cosine rule." },
            ],
            steps: [
              { reasoning: "Match the given information to the rule.", working: "\\text{cosine rule}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Cosine rule",
            commonErrors: ["Choosing sine rule without a side–angle opposite pair."],
          },
        },
        {
          id: "ciem-u6-sine-cosine-rules-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "In triangle $ABC$, $a=8$ cm, $b=5$ cm and angle $C=60^\\circ$. Find the area of the triangle.",
          response: { type: "numeric", parts: [{ label: "Area", answer: 17.3, tolerance: 0.1, unit: "cm²" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Area of triangle", statement: "$A=\\frac12ab\\sin C$ where $C$ is the included angle." },
            ],
            steps: [
              { reasoning: "Apply the area formula — $C$ is the included angle between $a$ and $b$.", working: "A=\\frac12\\times8\\times5\\times\\sin60^\\circ", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "=20\\times\\frac{\\sqrt3}{2}=10\\sqrt3", marks: 1, markCode: "M" },
              { reasoning: "Compute decimal.", working: "\\approx17.32", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$10\\sqrt3 \\approx 17.3$ cm$^2$",
            commonErrors: ["Using the wrong angle — must be the included angle."],
          },
        },
        {
          id: "ciem-u6-sine-cosine-rules-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "In triangle $ABC$, $a=10$ cm, $c=6$ cm and angle $B=50^\\circ$. Find side $b$.",
          response: { type: "numeric", parts: [{ label: "Side b", answer: 7.7, tolerance: 0.05, unit: "cm" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Cosine rule", statement: "$b^2=a^2+c^2-2ac\\cos B$" },
            ],
            steps: [
              { reasoning: "Apply the cosine rule with the included angle $B$.", working: "b^2=10^2+6^2-2\\times10\\times6\\times\\cos50^\\circ", marks: 1, markCode: "M" },
              { reasoning: "Evaluate the right side.", working: "=136-120\\times0.6428\\approx58.86", marks: 1, markCode: "M" },
              { reasoning: "Square root.", working: "b\\approx7.67", marks: 1, markCode: "M" },
              { reasoning: "State the side.", working: "b\\approx7.7\\text{ cm}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$b \\approx 7.7$ cm",
            commonErrors: ["Using sine rule (no opposite side–angle pair).", "Sign error: adding $2ac\\cos B$ instead of subtracting."],
          },
        },
        {
          id: "ciem-u6-sine-cosine-rules-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "In triangle $ABC$, $a=7$ cm, $b=6$ cm and angle $A=40^\\circ$.",
          parts: [
            { label: "a", prompt: "Find angle $B$.", marks: 4 },
            { label: "b", prompt: "Find side $c$.", marks: 3 },
            { label: "c", prompt: "Find the area of the triangle.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Sine rule", statement: "$\\frac{a}{\\sin A}=\\frac{b}{\\sin B}$" },
              { kind: "formula", name: "Cosine rule", statement: "$c^2=a^2+b^2-2ab\\cos C$" },
            ],
            steps: [
              { part: "a", reasoning: "Sine rule with known $a$, $A$ and $b$.", working: "\\frac{7}{\\sin40^\\circ}=\\frac{6}{\\sin B}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Rearrange for $\\sin B$.", working: "\\sin B=\\frac{6\\sin40^\\circ}{7}\\approx0.5510", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Apply inverse sine. The second solution $180^\\circ-33.4^\\circ=146.6^\\circ$ is rejected since $40^\\circ+146.6^\\circ>180^\\circ$.", working: "B\\approx33.4^\\circ", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the angle.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Angle $C=180^\\circ-40^\\circ-33.4^\\circ=106.6^\\circ$.", working: "C\\approx106.6^\\circ", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Cosine rule for $c$.", working: "c^2=49+36-2\\times7\\times6\\times\\cos106.6^\\circ\\approx85+23.9", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Compute and state.", working: "c\\approx10.4\\text{ cm}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Area $=\\frac12ab\\sin C$.", working: "\\frac12\\times7\\times6\\times\\sin106.6^\\circ", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate.", working: "\\approx20.1\\text{ cm}^2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $B\\approx33.4^\\circ$ (b) $c\\approx10.4$ cm (c) $\\approx20.1$ cm$^2$",
            commonErrors: ["In (a) accepting the ambiguous second angle $146.6^\\circ$ without checking $A+B<180^\\circ$.", "In (b) using the wrong included angle for $c$."],
            examinerNote: "Values depend on rounding of $B$; accept $B=33.3^\\circ$–$33.5^\\circ$ with consistent follow-through.",
          },
        },
        {
          id: "ciem-u6-sine-cosine-rules-q5", difficulty: "foundation", totalMarks: 1,
          stem: "A triangle has two sides and the included angle. Which rule finds the third side?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Sine rule" },
            { id: "b", text: "Area formula" },
            { id: "c", text: "Pythagoras" },
            { id: "d", text: "Cosine rule" }
 ],
            correctChoiceId: "d" },
          markscheme: { principles: [ { kind: "convention", name: "Rule selection", statement: "Two sides + included angle $\\to$ cosine rule." } ],
            steps: [ { reasoning: "Match the information to the rule.", working: "\\text{cosine rule}", marks: 1, markCode: "B" } ],
            finalAnswer: "**(d)** Cosine rule", commonErrors: ["Choosing sine rule without a side–angle opposite pair."] },
        },
        {
          id: "ciem-u6-sine-cosine-rules-q6", difficulty: "core", totalMarks: 1,
          stem: "A triangle has sides $5$ cm and $7$ cm with included angle $60^\\circ$. What is its area?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$30.3$ cm$^2$" },
            { id: "b", text: "$12.1$ cm$^2$" },
            { id: "c", text: "$61.2$ cm$^2$" },
            { id: "d", text: "$17.5$ cm$^2$" }
 ],
            correctChoiceId: "a" },
          markscheme: { principles: [ { kind: "formula", name: "Area of triangle", statement: "$A=\\frac12ab\\sin C$" } ],
            steps: [ { reasoning: "Use the included angle in the area formula.", working: "\\frac12\\times5\\times7\\times\\sin60^\\circ\\approx30.3", marks: 1, markCode: "M" } ],
            finalAnswer: "**(a)** $30.3$ cm$^2$", commonErrors: ["Using $35$ as the area and forgetting sine."] },
        },
        {
          id: "ciem-u6-sine-cosine-rules-q7", difficulty: "core", totalMarks: 3,
          stem: "In triangle $ABC$, $a=10$, angle $A=30^\\circ$ and angle $B=60^\\circ$. Find side $c$.",
          response: { type: "numeric", parts: [ { label: "Side c", answer: 20 }] },
          markscheme: { principles: [ { kind: "formula", name: "Sine rule", statement: "$\\frac{a}{\\sin A}=\\frac{c}{\\sin C}$" } ],
            steps: [
              { reasoning: "Find angle $C$ first.", working: "C=180^\\circ-30^\\circ-60^\\circ=90^\\circ", marks: 1, markCode: "M" },
              { reasoning: "Apply the sine rule.", working: "\\frac{10}{\\sin30^\\circ}=\\frac{c}{\\sin90^\\circ}", marks: 1, markCode: "M" },
              { reasoning: "Solve and state side $c$.", marks: 1, markCode: "A" } ],
            finalAnswer: "$c=20$", commonErrors: ["Using $\\sin30^\\circ=1$."] },
        },
        {
          id: "ciem-u6-sine-cosine-rules-q8", difficulty: "challenge", totalMarks: 1,
          stem: "A triangle has sides $7$, $8$ and $9$, with the side of length $9$ opposite angle $C$. What is angle $C$ to $1$ decimal place?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$61.9^\\circ$" },
            { id: "b", text: "$90.0^\\circ$" },
            { id: "c", text: "$73.4^\\circ$" },
            { id: "d", text: "$45.6^\\circ$" }
 ],
            correctChoiceId: "c" },
          markscheme: { principles: [ { kind: "formula", name: "Cosine rule for angle", statement: "$\\cos C=\\frac{b^2+c^2-a^2}{2bc}$" } ],
            steps: [ { reasoning: "Use the rearranged cosine rule and inverse cosine.", working: "\\cos C=\\frac{7^2+8^2-9^2}{2\\times7\\times8}=\\frac{32}{112}\\Rightarrow C\\approx73.4^\\circ", marks: 1, markCode: "M" } ],
            finalAnswer: "**(c)** $73.4^\\circ$", commonErrors: ["Using sine rule with no opposite side–angle pair."] },
        },
        {
          id: "ciem-u6-sine-cosine-rules-q9", difficulty: "core", totalMarks: 3,
          stem: "Two sides of a triangle are $7$ cm and $9$ cm and the included angle is $50^\\circ$. Find the third side.",
          response: { type: "numeric", parts: [ { label: "Third side", answer: 7, tolerance: 0.05, unit: "cm" } ] },
          markscheme: { principles: [ { kind: "formula", name: "Cosine rule", statement: "$c^2=a^2+b^2-2ab\\cos C$" } ],
            steps: [
              { reasoning: "Apply the cosine rule with the included angle.", working: "c^2=7^2+9^2-2\\times7\\times9\\times\\cos50^\\circ", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "\\approx49", marks: 1, markCode: "M" },
              { reasoning: "Square root and state the side.", marks: 1, markCode: "A" } ],
            finalAnswer: "$c\\approx7.0$ cm", commonErrors: ["Adding $2ab\\cos C$ instead of subtracting."] },
        },
        {
          id: "ciem-u6-sine-cosine-rules-q10", difficulty: "foundation", totalMarks: 2,
          stem: "Find the area of a triangle with sides $8$ cm and $10$ cm and included angle $30^\\circ$.",
          response: { type: "numeric", parts: [ { label: "Area", answer: 20, unit: "cm²" } ] },
          markscheme: { principles: [ { kind: "formula", name: "Area of triangle", statement: "$A=\\frac12ab\\sin C$" } ],
            steps: [
              { reasoning: "Apply the area formula.", working: "A=\\frac12\\times8\\times10\\times\\sin30^\\circ=20", marks: 1, markCode: "M" },
              { reasoning: "State the area.", marks: 1, markCode: "A" } ],
            finalAnswer: "$20$ cm$^2$", commonErrors: ["Using the wrong angle."] },
        },
        {
          id: "ciem-u6-sine-cosine-rules-q11", difficulty: "challenge", totalMarks: 1,
          stem: "A triangle is given by two sides and a non-included angle (SSA). Which rule should be used first?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Sine rule" },
            { id: "b", text: "Cosine rule" },
            { id: "c", text: "Area formula" },
            { id: "d", text: "Pythagoras" }
 ],
            correctChoiceId: "a" },
          markscheme: { principles: [ { kind: "convention", name: "Rule selection", statement: "SSA gives a side–angle pair, so start with the sine rule and check for ambiguity." } ],
            steps: [ { reasoning: "Choose the rule matching the given information.", working: "\\text{sine rule}", marks: 1, markCode: "B" } ],
            finalAnswer: "**(a)** Sine rule", commonErrors: ["Ignoring the possible second solution."] },
        },
        {
          id: "ciem-u6-sine-cosine-rules-q12", difficulty: "core", totalMarks: 4,
          stem: "In triangle $ABC$, $a=15$, angle $A=50^\\circ$ and $b=12$. Find angle $B$.",
          response: { type: "open" },
          markscheme: { principles: [ { kind: "formula", name: "Sine rule", statement: "$\\frac{a}{\\sin A}=\\frac{b}{\\sin B}$" } ],
            steps: [
              { reasoning: "Rearrange the sine rule for $\\sin B$.", working: "\\sin B=\\frac{12\\sin50^\\circ}{15}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "\\approx0.6128", marks: 1, markCode: "M" },
              { reasoning: "Apply inverse sine; reject $142.2^\\circ$ since $50^\\circ+142.2^\\circ>180^\\circ$.", working: "B\\approx37.8^\\circ", marks: 1, markCode: "M" },
              { reasoning: "State the angle.", marks: 1, markCode: "A" } ],
            finalAnswer: "$B\\approx37.8^\\circ$", commonErrors: ["Accepting the ambiguous second angle."] },
        },
        {
          id: "ciem-u6-sine-cosine-rules-q13", difficulty: "challenge", totalMarks: 3,
          stem: "In a triangle, two sides are $5$ cm and $6$ cm and the included angle is $120^\\circ$. Find the third side.",
          response: { type: "numeric", parts: [ { label: "Third side", answer: 9.5, tolerance: 0.05, unit: "cm" } ] },
          markscheme: { principles: [ { kind: "formula", name: "Cosine rule", statement: "$a^2=b^2+c^2-2bc\\cos A$" } ],
            steps: [
              { reasoning: "Apply the cosine rule.", working: "a^2=25+36-60\\cos120^\\circ", marks: 1, markCode: "M" },
              { reasoning: "Evaluate using $\\cos120^\\circ=-\\frac12$.", working: "=61+30=91", marks: 1, markCode: "M" },
              { reasoning: "Square root and state the side.", marks: 1, markCode: "A" } ],
            finalAnswer: "$a=\\sqrt{91}\\approx9.5$ cm", commonErrors: ["Using $\\cos120^\\circ=\\frac12$."] },
        },
        {
          id: "ciem-u6-sine-cosine-rules-q14", difficulty: "foundation", totalMarks: 3,
          stem: "Find the exact area of a triangle with sides $10$ cm and $12$ cm and included angle $60^\\circ$.",
          response: { type: "open" },
          markscheme: { principles: [ { kind: "formula", name: "Area of triangle", statement: "$A=\\frac12ab\\sin C$" }, { kind: "property", name: "Exact value", statement: "$\\sin60^\\circ=\\frac{\\sqrt3}{2}$." } ],
            steps: [
              { reasoning: "Apply the area formula.", working: "A=\\frac12\\times10\\times12\\times\\frac{\\sqrt3}{2}", marks: 1, markCode: "M" },
              { reasoning: "Simplify.", working: "=30\\sqrt3", marks: 1, markCode: "M" },
              { reasoning: "State the area.", marks: 1, markCode: "A" } ],
            finalAnswer: "$30\\sqrt3 \\approx 52.0$ cm$^2$", commonErrors: ["Using $\\sin30^\\circ$ instead of $\\sin60^\\circ$."] },
        },
        {
          id: "ciem-u6-sine-cosine-rules-q15", difficulty: "core", totalMarks: 1,
          stem: "Which rearrangement of the cosine rule gives angle $A$?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\cos A=\\frac{2bc}{b^2+c^2-a^2}$" },
            { id: "b", text: "$\\cos A=\\frac{b^2+c^2-a^2}{2bc}$" },
            { id: "c", text: "$\\cos A=\\frac{b^2+c^2-a^2}{bc}$" },
            { id: "d", text: "$\\cos A=\\frac{a^2+b^2-c^2}{2bc}$" }
 ],
            correctChoiceId: "b" },
          markscheme: { principles: [ { kind: "formula", name: "Cosine rule for angle", statement: "$\\cos A=\\frac{b^2+c^2-a^2}{2bc}$" } ],
            steps: [ { reasoning: "Rearrange $a^2=b^2+c^2-2bc\\cos A$.", working: "\\cos A=\\frac{b^2+c^2-a^2}{2bc}", marks: 1, markCode: "B" } ],
            finalAnswer: "**(b)** $\\frac{b^2+c^2-a^2}{2bc}$", commonErrors: ["Putting $a^2$ in the numerator."] },
        },
        {
          id: "ciem-u6-sine-cosine-rules-q16", difficulty: "challenge", totalMarks: 8,
          stem: "A triangle has two sides $6$ cm and $9$ cm with included angle $60^\\circ$.",
          parts: [
            { label: "a", prompt: "Find the area of the triangle.", marks: 3 },
            { label: "b", prompt: "Find the length of the third side.", marks: 3 },
            { label: "c", prompt: "Find the perimeter of the triangle.", marks: 2 } ],
          response: { type: "open" },
          markscheme: { principles: [ { kind: "formula", name: "Area of triangle", statement: "$A=\\frac12ab\\sin C$" }, { kind: "formula", name: "Cosine rule", statement: "$c^2=a^2+b^2-2ab\\cos C$" } ],
            steps: [
              { part: "a", reasoning: "Apply the area formula with the included angle.", working: "A=\\frac12\\times6\\times9\\times\\sin60^\\circ=27\\times\\frac{\\sqrt3}{2}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Simplify.", working: "=\\frac{27\\sqrt3}{2}\\approx23.4", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the area.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Apply the cosine rule.", working: "c^2=36+81-2\\times6\\times9\\times\\frac12=63", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Simplify and state.", working: "c=\\sqrt{63}=3\\sqrt7\\approx7.9\\text{ cm}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Give the final length.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Add the three sides.", working: "6+9+3\\sqrt7", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State the perimeter.", marks: 1, markCode: "A" } ],
            finalAnswer: "(a) $\\frac{27\\sqrt3}{2}\\approx23.4$ cm$^2$ (b) $3\\sqrt7\\approx7.9$ cm (c) $15+3\\sqrt7\\approx22.9$ cm",
            commonErrors: ["In (b) using $\\cos60^\\circ=1$ instead of $\\frac12$."] },
        },
      ],
    },
    {
      id: "ciem-u6-trig-applications",
      title: "Applications of trigonometry",
      skill: "Solve bearing, angle of elevation/depression and multi-step trigonometry problems.",
      lesson: {
        sections: [
          {
            heading: "Bearings",
            body: "A bearing is measured **clockwise from north**: three figures like $060^\\circ$, $135^\\circ$, $270^\\circ$. To find an angle inside a triangle from two bearings, subtract them. E.g. bearings $060^\\circ$ and $150^\\circ$ from the same point give an angle of $90^\\circ$ between the paths.",
          },
          {
            heading: "Angle of elevation and depression",
            body: "**Elevation**: angle above the horizontal looking up. **Depression**: angle below the horizontal looking down (equal to the angle of elevation from the lower point, by alternate angles). Draw a horizontal line to convert depression problems into elevation problems.",
          },
          {
            heading: "Multi-step problems",
            body: "Split complex figures into right-angled or general triangles. Find one triangle completely, then use its sides/angles in the next. Label every angle and side before calculating.",
          },
        ],
        keyFormulas: [
          { name: "Bearing angle", statement: "Angle between two bearings $=|\\text{bearing}_1-\\text{bearing}_2|$ (if $<180^\\circ$)" },
          { name: "Depression = elevation", statement: "Angle of depression equals angle of elevation (alternate angles)" },
        ],
        workedExample: {
          problem: "From point $A$, the bearing of $B$ is $060^\\circ$ and the bearing of $C$ is $150^\\circ$. Find angle $BAC$.",
          solution: "Angle between bearings $=150^\\circ-60^\\circ=90^\\circ$.",
        },
      },
      questions: [
        {
          id: "ciem-u6-trig-applications-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A bearing is always measured clockwise from which direction?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "North" },
              { id: "b", text: "South" },
              { id: "c", text: "West" },
              { id: "d", text: "East" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Bearings", statement: "Bearings are measured clockwise from north, written as three figures." },
            ],
            steps: [
              { reasoning: "Recall the definition.", working: "\\text{north}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** North",
            commonErrors: ["Measuring from east or south."],
          },
        },
        {
          id: "ciem-u6-trig-applications-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "From a point $P$ on horizontal ground, the angle of elevation of the top of a tree is $35^\\circ$. The tree is $12$ m tall. Find the distance from $P$ to the base of the tree.",
          response: { type: "numeric", parts: [{ label: "Distance", answer: 17.1, tolerance: 0.1, unit: "m" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Tangent", statement: "$\\tan\\theta=\\frac{\\text{opposite}}{\\text{adjacent}}$" },
            ],
            steps: [
              { reasoning: "Opposite = tree height $12$ m, adjacent = distance $d$.", working: "\\tan35^\\circ=\\frac{12}{d}", marks: 1, markCode: "M" },
              { reasoning: "Rearrange.", working: "d=\\frac{12}{\\tan35^\\circ}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "d\\approx17.14", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$d \\approx 17.1$ m",
            commonErrors: ["Multiplying by tan instead of dividing."],
          },
        },
        {
          id: "ciem-u6-trig-applications-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A ship sails $15$ km on a bearing of $060^\\circ$ from port $A$ to point $B$, then $20$ km on a bearing of $150^\\circ$ to point $C$. Find the distance $AC$.",
          response: { type: "numeric", parts: [{ label: "AC", answer: 25, unit: "km" }] },
          markscheme: {
            principles: [
              { kind: "convention", name: "Bearings", statement: "Angle between paths $=150^\\circ-60^\\circ=90^\\circ$." },
              { kind: "formula", name: "Pythagoras", statement: "Right-angled triangle with legs $15$ and $20$." },
            ],
            steps: [
              { reasoning: "Find the angle between the two legs.", working: "150^\\circ-60^\\circ=90^\\circ", marks: 1, markCode: "M" },
              { reasoning: "Recognise a right-angled triangle (3-4-5 scaled by 5).", working: "15=3\\times5,\\ 20=4\\times5", marks: 1, markCode: "M" },
              { reasoning: "Apply Pythagoras.", working: "AC=\\sqrt{15^2+20^2}=\\sqrt{625}", marks: 1, markCode: "M" },
              { reasoning: "Compute.", working: "=25", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$25$ km",
            commonErrors: ["Adding the distances ($35$ km) or subtracting."],
          },
        },
        {
          id: "ciem-u6-trig-applications-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "From point $A$, the bearing of point $B$ is $050^\\circ$ and $AB=12$ km. From $B$, the bearing of point $C$ is $140^\\circ$ and $BC=9$ km.",
          parts: [
            { label: "a", prompt: "Find angle $ABC$.", marks: 3 },
            { label: "b", prompt: "Find $AC$.", marks: 3 },
            { label: "c", prompt: "Find the bearing of $C$ from $A$.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Bearings", statement: "Bearings measured clockwise from north." },
              { kind: "formula", name: "Cosine rule", statement: "$AC^2=AB^2+BC^2-2\\times AB\\times BC\\cos(\\angle ABC)$" },
            ],
            steps: [
              { part: "a", reasoning: "The reverse bearing of $A$ from $B$ is $050^\\circ+180^\\circ=230^\\circ$; angle $ABC$ is between bearings $230^\\circ$ and $140^\\circ$.", working: "230^\\circ-140^\\circ", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Compute the angle.", working: "=90^\\circ", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the angle.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Right-angled triangle — Pythagoras.", working: "AC=\\sqrt{12^2+9^2}=\\sqrt{225}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Compute.", working: "=15", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the distance.", working: "15\\text{ km}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "In right triangle $ABC$, $\\tan(\\angle BAC)=\\frac{BC}{AB}=\\frac{9}{12}=0.75$.", working: "\\tan\\angle BAC=0.75", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Find the angle.", working: "\\angle BAC=\\tan^{-1}(0.75)\\approx36.87^\\circ", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Bearing of $C$ from $A$ = bearing of $B$ $+\\angle BAC$.", working: "050^\\circ+36.87^\\circ\\approx086.9^\\circ", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $90^\\circ$ (b) $15$ km (c) $\\approx087^\\circ$",
            commonErrors: ["In (a) using $140^\\circ-50^\\circ=90^\\circ$ without reversing the bearing — same answer here by coincidence of the numbers.", "In (c) subtracting the angle instead of adding."],
            examinerNote: "Angle $ABC=90^\\circ$ arises because reverse bearing $230^\\circ$ vs $140^\\circ$ differ by $90^\\circ$.",
          },
        },
        {
          id: "ciem-u6-trig-applications-q5", difficulty: "foundation", totalMarks: 1,
          stem: "From point $A$, the bearing of $B$ is $060^\\circ$ and the bearing of $C$ is $150^\\circ$. What is angle $BAC$?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$150^\\circ$" },
            { id: "b", text: "$210^\\circ$" },
            { id: "c", text: "$90^\\circ$" },
            { id: "d", text: "$60^\\circ$" }
 ],
            correctChoiceId: "c" },
          markscheme: { principles: [ { kind: "formula", name: "Bearing angle", statement: "Angle between bearings $=|\\text{bearing}_1-\\text{bearing}_2|$." } ],
            steps: [ { reasoning: "Subtract the bearings.", working: "150^\\circ-60^\\circ=90^\\circ", marks: 1, markCode: "M" } ],
            finalAnswer: "**(c)** $90^\\circ$", commonErrors: ["Adding the bearings."] },
        },
        {
          id: "ciem-u6-trig-applications-q6", difficulty: "core", totalMarks: 1,
          stem: "How is the angle of depression related to the angle of elevation for the same two points?",
          response: { type: "mcq", choices: [
            { id: "a", text: "It is equal to the angle of elevation" },
            { id: "b", text: "It is twice the angle of elevation" },
            { id: "c", text: "It is $90^\\circ$ minus the angle of elevation" },
            { id: "d", text: "It has no fixed relationship" }
 ],
            correctChoiceId: "a" },
          markscheme: { principles: [ { kind: "property", name: "Alternate angles", statement: "Depression equals elevation by alternate angles." } ],
            steps: [ { reasoning: "Use alternate angles with the horizontal.", working: "\\text{equal}", marks: 1, markCode: "B" } ],
            finalAnswer: "**(a)** It is equal to the angle of elevation", commonErrors: ["Subtracting from $90^\\circ$."] },
        },
        {
          id: "ciem-u6-trig-applications-q7", difficulty: "core", totalMarks: 3,
          stem: "From point $P$ on horizontal ground, the angle of elevation of the top of a $20$ m tower is $\\theta$. The distance from $P$ to the base is $15$ m. Find $\\theta$.",
          response: { type: "numeric", parts: [ { label: "Angle", answer: 53.1, tolerance: 0.1, unit: "degrees" } ] },
          markscheme: { principles: [ { kind: "formula", name: "Tangent", statement: "$\\tan\\theta=\\frac{\\text{opposite}}{\\text{adjacent}}$" } ],
            steps: [
              { reasoning: "Form the tangent ratio.", working: "\\tan\\theta=\\frac{20}{15}", marks: 1, markCode: "M" },
              { reasoning: "Apply inverse tangent.", working: "\\theta=\\tan^{-1}\\left(\\frac43\\right)", marks: 1, markCode: "M" },
              { reasoning: "Evaluate and state the angle.", marks: 1, markCode: "A" } ],
            finalAnswer: "$\\theta\\approx53.1^\\circ$", commonErrors: ["Inverting the ratio."] },
        },
        {
          id: "ciem-u6-trig-applications-q8", difficulty: "challenge", totalMarks: 1,
          stem: "From point $X$, the bearing of $Y$ is $040^\\circ$ and the bearing of $Z$ is $130^\\circ$. What is the smaller angle $YXZ$?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$130^\\circ$" },
            { id: "b", text: "$170^\\circ$" },
            { id: "c", text: "$90^\\circ$" },
            { id: "d", text: "$40^\\circ$" }
 ],
            correctChoiceId: "c" },
          markscheme: { principles: [ { kind: "formula", name: "Bearing angle", statement: "Smaller angle $=|130^\\circ-40^\\circ|=90^\\circ$." } ],
            steps: [ { reasoning: "Subtract the bearings.", working: "130^\\circ-40^\\circ=90^\\circ", marks: 1, markCode: "M" } ],
            finalAnswer: "**(c)** $90^\\circ$", commonErrors: ["Taking the reflex angle."] },
        },
        {
          id: "ciem-u6-trig-applications-q9", difficulty: "core", totalMarks: 3,
          stem: "From the top of a $30$ m cliff, the angle of depression of a boat is $25^\\circ$. Find the horizontal distance from the base of the cliff to the boat.",
          response: { type: "numeric", parts: [ { label: "Distance", answer: 64.3, tolerance: 0.1, unit: "m" } ] },
          markscheme: { principles: [ { kind: "formula", name: "Tangent", statement: "$\\tan\\theta=\\frac{\\text{opposite}}{\\text{adjacent}}$" }, { kind: "property", name: "Depression", statement: "Angle of depression equals the elevation angle in the right triangle." } ],
            steps: [
              { reasoning: "Opposite $=30$ m, adjacent $=d$.", working: "\\tan25^\\circ=\\frac{30}{d}", marks: 1, markCode: "M" },
              { reasoning: "Rearrange for $d$.", working: "d=\\frac{30}{\\tan25^\\circ}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate and state the distance.", marks: 1, markCode: "A" } ],
            finalAnswer: "$d\\approx64.3$ m", commonErrors: ["Multiplying by $\\tan25^\\circ$ instead of dividing."] },
        },
        {
          id: "ciem-u6-trig-applications-q10", difficulty: "foundation", totalMarks: 2,
          stem: "The bearing of $P$ from $O$ is $200^\\circ$ and the bearing of $Q$ from $O$ is $260^\\circ$. Find the smaller angle $POQ$.",
          response: { type: "numeric", parts: [ { label: "Angle", answer: 60, unit: "degrees" } ] },
          markscheme: { principles: [ { kind: "formula", name: "Bearing angle", statement: "Angle between bearings $=|260^\\circ-200^\\circ|=60^\\circ$." } ],
            steps: [
              { reasoning: "Subtract the bearings.", working: "260^\\circ-200^\\circ=60^\\circ", marks: 1, markCode: "M" },
              { reasoning: "State the angle.", marks: 1, markCode: "A" } ],
            finalAnswer: "$60^\\circ$", commonErrors: ["Giving the reflex angle $300^\\circ$."] },
        },
        {
          id: "ciem-u6-trig-applications-q11", difficulty: "challenge", totalMarks: 1,
          stem: "The bearing of $B$ from $A$ is $045^\\circ$. What is the bearing of $A$ from $B$?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$225^\\circ$" },
            { id: "b", text: "$315^\\circ$" },
            { id: "c", text: "$045^\\circ$" },
            { id: "d", text: "$135^\\circ$" }
 ],
            correctChoiceId: "a" },
          markscheme: { principles: [ { kind: "convention", name: "Back bearing", statement: "Reverse bearing $=\\text{original}+180^\\circ$ (mod $360^\\circ$)." } ],
            steps: [ { reasoning: "Add $180^\\circ$.", working: "45^\\circ+180^\\circ=225^\\circ", marks: 1, markCode: "M" } ],
            finalAnswer: "**(a)** $225^\\circ$", commonErrors: ["Subtracting $180^\\circ$ instead of adding."] },
        },
        {
          id: "ciem-u6-trig-applications-q12", difficulty: "core", totalMarks: 3,
          stem: "A tower is $25$ m tall. From point $P$, $40$ m from the base on horizontal ground, find the angle of elevation of the top of the tower.",
          response: { type: "open" },
          markscheme: { principles: [ { kind: "formula", name: "Tangent", statement: "$\\tan\\theta=\\frac{\\text{opposite}}{\\text{adjacent}}$" } ],
            steps: [
              { reasoning: "Form the tangent ratio.", working: "\\tan\\theta=\\frac{25}{40}=0.625", marks: 1, markCode: "M" },
              { reasoning: "Apply inverse tangent.", working: "\\theta=\\tan^{-1}(0.625)", marks: 1, markCode: "M" },
              { reasoning: "State the angle.", marks: 1, markCode: "A" } ],
            finalAnswer: "$\\theta\\approx32.0^\\circ$", commonErrors: ["Using $\\sin$ or $\\cos$ with two non-hypotenuse sides."] },
        },
        {
          id: "ciem-u6-trig-applications-q13", difficulty: "challenge", totalMarks: 3,
          stem: "From the top of a $20$ m cliff, the angle of depression of a boat is $35^\\circ$. Find the horizontal distance from the base of the cliff to the boat.",
          response: { type: "numeric", parts: [ { label: "Distance", answer: 28.6, tolerance: 0.1, unit: "m" } ] },
          markscheme: { principles: [ { kind: "formula", name: "Tangent", statement: "$\\tan\\theta=\\frac{\\text{opposite}}{\\text{adjacent}}$" } ],
            steps: [
              { reasoning: "Opposite $=20$ m, adjacent $=d$.", working: "\\tan35^\\circ=\\frac{20}{d}", marks: 1, markCode: "M" },
              { reasoning: "Rearrange for $d$.", working: "d=\\frac{20}{\\tan35^\\circ}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate and state the distance.", marks: 1, markCode: "A" } ],
            finalAnswer: "$d\\approx28.6$ m", commonErrors: ["Using $20\\tan35^\\circ$."] },
        },
        {
          id: "ciem-u6-trig-applications-q14", difficulty: "foundation", totalMarks: 2,
          stem: "From point $A$, the bearing of $B$ is $120^\\circ$ and the bearing of $C$ is $200^\\circ$. Show that angle $BAC$ is $80^\\circ$.",
          response: { type: "open" },
          markscheme: { principles: [ { kind: "formula", name: "Bearing angle", statement: "Angle between bearings $=|200^\\circ-120^\\circ|$." } ],
            steps: [
              { reasoning: "Subtract the bearings.", working: "200^\\circ-120^\\circ=80^\\circ", marks: 1, markCode: "M" },
              { reasoning: "State the angle.", marks: 1, markCode: "A" } ],
            finalAnswer: "$80^\\circ$", commonErrors: ["Choosing the reflex angle $280^\\circ$."] },
        },
        {
          id: "ciem-u6-trig-applications-q15", difficulty: "core", totalMarks: 1,
          stem: "Which is the correct way to write a bearing of $45^\\circ$?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$045^\\circ$" },
            { id: "b", text: "$S45E$" },
            { id: "c", text: "$45^\\circ$" },
            { id: "d", text: "$45.0^\\circ$" }
 ],
            correctChoiceId: "a" },
          markscheme: { principles: [ { kind: "convention", name: "Bearings", statement: "Bearings are written as three figures, e.g. $045^\\circ$." } ],
            steps: [ { reasoning: "Recall the three-figure convention.", working: "045^\\circ", marks: 1, markCode: "B" } ],
            finalAnswer: "**(a)** $045^\\circ$", commonErrors: ["Writing two figures."] },
        },
        {
          id: "ciem-u6-trig-applications-q16", difficulty: "challenge", totalMarks: 8,
          stem: "From observation post $O$, the bearing of $A$ is $060^\\circ$ and the bearing of $B$ is $150^\\circ$. Also $OA=12$ km and $OB=16$ km.",
          parts: [
            { label: "a", prompt: "Find angle $AOB$.", marks: 2 },
            { label: "b", prompt: "Find the distance $AB$.", marks: 3 },
            { label: "c", prompt: "Find the area of triangle $AOB$.", marks: 3 } ],
          response: { type: "open" },
          markscheme: { principles: [ { kind: "formula", name: "Bearing angle", statement: "Angle between bearings $=|150^\\circ-60^\\circ|=90^\\circ$." }, { kind: "formula", name: "Pythagoras", statement: "$AB^2=OA^2+OB^2$ when the included angle is $90^\\circ$." } ],
            steps: [
              { part: "a", reasoning: "Subtract the bearings.", working: "150^\\circ-60^\\circ=90^\\circ", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the angle.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Use Pythagoras because angle $AOB=90^\\circ$.", working: "AB=\\sqrt{12^2+16^2}=\\sqrt{400}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate.", working: "=20", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the distance.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Area $=\\frac12\\times12\\times16\\times\\sin90^\\circ$.", working: "=96", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State the area.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Give units.", marks: 1, markCode: "A" } ],
            finalAnswer: "(a) $90^\\circ$ (b) $20$ km (c) $96$ km$^2$",
            commonErrors: ["Using the wrong included angle for the area.", "Not recognising the right angle from the bearings."] },
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciem-u6-rules-applications-notes",
      title: "Sine and cosine rules — revision notes",
      summary: "Choosing between sine rule, cosine rule and area formula; bearings and angle of elevation problems.",
      sections: [
        {
          heading: "Choosing the rule",
          body: "- Side–angle **opposite** pair known → sine rule\n- Two sides + **included** angle → cosine rule (or area $\\frac12ab\\sin C$)\n- Three sides → cosine rule for an angle\n\n**Worked example.** $a=8$, $b=5$, $C=60^\\circ$: area $=\\frac12(8)(5)\\sin60^\\circ=10\\sqrt3\\approx17.3$ cm$^2$.",
        },
        {
          heading: "Bearings",
          body: "Measured clockwise from north, three figures. Angle between two bearings from the same point = difference. Reverse bearing = bearing $\\pm180^\\circ$.",
        },
        {
          heading: "Elevation and depression",
          body: "Draw a horizontal line; depression angle = elevation angle on the other side (alternate angles). Then use tan/sin/cos in the right triangle.",
        },
        {
          heading: "Exam technique",
          body: "- Write the formula before substituting.\n- For bearings, always convert to the interior angle of the triangle first.\n- Check the ambiguous case for sine rule (two possible angles).",
        },
      ],
    },
  ],
};
