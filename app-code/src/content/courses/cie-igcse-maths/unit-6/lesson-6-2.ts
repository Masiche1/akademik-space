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
              { id: "a", text: "Cosine rule" },
              { id: "b", text: "Sine rule" },
              { id: "c", text: "Pythagoras" },
              { id: "d", text: "Area formula" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Rule selection", statement: "Two sides + included angle → cosine rule." },
            ],
            steps: [
              { reasoning: "Match the given information to the rule.", working: "\\text{cosine rule}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Cosine rule",
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
              { id: "b", text: "East" },
              { id: "c", text: "South" },
              { id: "d", text: "West" },
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
              { reasoning: "Recognise a right-angled triangle (3-4-5 scaled by 5).", working: "15-20-?", marks: 1, markCode: "M" },
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
