import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "edm10-u3-lesson-3-2",
  code: "3-2",
  title: "Trigonometry",
  goal: "I CAN use trigonometry to find lengths, angles and areas in right-angled and non-right-angled triangles.",
  standards: ["4MA1 4.6", "4MA1 4.8", "4MA1 4.9H", "4MA1 4.10H"],
  vocabulary: [
    { term: "Hypotenuse", definition: "The longest side of a right-angled triangle, opposite the right angle." },
    { term: "Angle of elevation", definition: "The angle measured upwards from the horizontal to the line of sight to an object." },
    { term: "Bearing", definition: "A direction given as an angle measured clockwise from north, written with three figures, for example $040^\\circ$." },
    { term: "Sine rule", definition: "$\\frac{a}{\\sin A}=\\frac{b}{\\sin B}=\\frac{c}{\\sin C}$, linking sides to the sines of their opposite angles." },
    { term: "Cosine rule", definition: "$a^2=b^2+c^2-2bc\\cos A$, linking three sides and one angle." },
    { term: "Included angle", definition: "The angle between two given sides of a triangle." },
  ],
  concepts: [
    {
      id: "edm10-u3-right-angled-trig",
      title: "Right-angled trigonometry, elevation and bearings",
      skill: "Use sine, cosine and tangent to find sides and angles, including problems with angles of elevation and bearings.",
      lesson: {
        sections: [
          {
            heading: "SOHCAHTOA",
            body: "In a right-angled triangle label the sides hypotenuse, opposite and adjacent relative to the angle $\\theta$. Then $\\sin\\theta=\\frac{O}{H}$, $\\cos\\theta=\\frac{A}{H}$ and $\\tan\\theta=\\frac{O}{A}$. To find a side, choose the ratio that involves the known side and the wanted side. To find an angle, use the inverse function, such as $\\theta=\\tan^{-1}\\left(\\frac{O}{A}\\right)$. Check your calculator is in degrees.",
          },
          {
            heading: "Angles of elevation",
            body: "The angle of elevation is measured from the horizontal upwards. Draw a right-angled triangle with the horizontal ground distance as one side and the vertical height as another. Add any eye height of the observer to the height found.",
          },
          {
            heading: "Bearings",
            body: "Bearings are measured clockwise from north using three figures. Draw a north line at each point. A journey on bearing $\\theta$ for a distance $d$ goes $d\\cos\\theta$ north and $d\\sin\\theta$ east (for $0^\\circ\\le\\theta\\le90^\\circ$). The back bearing differs by $180^\\circ$.",
          },
        ],
        keyFormulas: [
          { name: "Sine", statement: "$\\sin\\theta=\\frac{\\text{opposite}}{\\text{hypotenuse}}$" },
          { name: "Cosine", statement: "$\\cos\\theta=\\frac{\\text{adjacent}}{\\text{hypotenuse}}$" },
          { name: "Tangent", statement: "$\\tan\\theta=\\frac{\\text{opposite}}{\\text{adjacent}}$" },
        ],
        workedExample: {
          problem: "A boat is 150 m from the base of a cliff. The angle of elevation of the top of the cliff from the boat is $32^\\circ$. Work out the height of the cliff to 3 significant figures.",
          solution: "Opposite is the height $h$ and adjacent is $150$. $\\tan32^\\circ=\\frac{h}{150}$, so $h=150\\tan32^\\circ=150\\times0.62487=93.7$ m.",
        },
      },
      questions: [
        {
          id: "edm10-u3-right-angled-trig-q1",
          difficulty: "foundation",
          tier: "foundation",
          totalMarks: 2,
          stem: "In a right-angled triangle, the hypotenuse is 10 cm and one of the other angles is $30^\\circ$. Work out the length of the side opposite the $30^\\circ$ angle.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$5$ cm" },
              { id: "b", text: "$8.66$ cm" },
              { id: "c", text: "$17.3$ cm" },
              { id: "d", text: "$20$ cm" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "formula", name: "Sine ratio", statement: "$\\sin\\theta=\\frac{\\text{opposite}}{\\text{hypotenuse}}$" }],
            steps: [
              { reasoning: "Opposite and hypotenuse are involved, so use sine.", working: "\\text{opposite}=10\\sin30^\\circ", marks: 1, markCode: "M" },
              { reasoning: "Evaluate, using $\\sin30^\\circ=0.5$.", working: "5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $5$ cm",
            commonErrors: ["Using cosine and getting $8.66$ cm.", "Dividing by $\\sin30^\\circ$ and getting $20$ cm."],
          },
        },
        {
          id: "edm10-u3-right-angled-trig-q2",
          difficulty: "core",
          tier: "foundation",
          totalMarks: 3,
          stem: "A ladder of length 5 m leans against a vertical wall. The ladder makes an angle of $70^\\circ$ with the horizontal ground. Calculate how far up the wall the ladder reaches. Give your answer correct to 3 significant figures.",
          response: { type: "numeric", parts: [{ label: "Height up the wall", answer: 4.7, tolerance: 0.01, unit: "m" }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Sine ratio", statement: "$\\sin\\theta=\\frac{\\text{opposite}}{\\text{hypotenuse}}$" }],
            steps: [
              { reasoning: "The height is opposite the $70^\\circ$ angle and the ladder is the hypotenuse.", working: "\\sin70^\\circ=\\frac{h}{5}", marks: 1, markCode: "M" },
              { reasoning: "Rearrange.", working: "h=5\\sin70^\\circ", marks: 1, markCode: "M" },
              { reasoning: "Evaluate: $5\\times0.9397=4.698$.", working: "h=4.70", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$4.70$ m",
            commonErrors: ["Using cosine instead of sine.", "Calculator in radians mode."],
            examinerNote: "Accept 4.7 or 4.70. Award A1 for answers in the range 4.69 to 4.71.",
          },
        },
        {
          id: "edm10-u3-right-angled-trig-q3",
          difficulty: "challenge",
          tier: "higher",
          totalMarks: 4,
          stem: "A ship sails from a port $P$ 15 km due east to a point $R$. It then sails 8 km due north to a point $Q$.\n\nCalculate the bearing of $Q$ from $P$. Give your answer in degrees correct to 1 decimal place.",
          response: { type: "numeric", parts: [{ label: "Bearing (degrees)", answer: 61.9, tolerance: 0.1, unit: "°" }] },
          markscheme: {
            principles: [
              { kind: "property", name: "Bearings", statement: "Bearings are measured clockwise from north." },
              { kind: "formula", name: "Tangent ratio", statement: "$\\tan\\theta=\\frac{\\text{opposite}}{\\text{adjacent}}$" },
            ],
            steps: [
              { reasoning: "$PRQ$ is a right-angled triangle. Relative to the angle at $P$ measured from north, the side east ($15$) is opposite and the side north ($8$) is adjacent to the angle between $PQ$ and north.", working: "\\tan\\theta=\\frac{15}{8}", marks: 2, markCode: "M" },
              { reasoning: "Use the inverse tangent.", working: "\\theta=\\tan^{-1}(1.875)", marks: 1, markCode: "M" },
              { reasoning: "Evaluate and write as a three-figure bearing.", working: "\\theta=061.9^\\circ", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$061.9^\\circ$",
            commonErrors: ["Using $\\tan^{-1}(8/15)=28.1^\\circ$ which is the angle from east.", "Not giving a bearing measured from north."],
            examinerNote: "Accept 62 with working. The angle from the east line is 28.1, so the bearing is 90 - 28.1 = 61.9.",
          },
        },
        {
          id: "edm10-u3-right-angled-trig-q4",
          difficulty: "challenge",
          tier: "higher",
          totalMarks: 8,
          stem: "A boat sails from a harbour $A$ for 9 km on a bearing of $040^\\circ$ to a point $B$. The point $C$ is due east of $A$ and due south of $B$.\n\nA helicopter flies directly above $C$ at a height of 3 km.\n\nGive each answer correct to 3 significant figures unless stated otherwise.",
          parts: [
            { label: "a", prompt: "Calculate the distance $BC$.", marks: 2 },
            { label: "b", prompt: "Calculate the distance $AC$.", marks: 2 },
            { label: "c", prompt: "Write down the bearing of $A$ from $B$.", marks: 1 },
            { label: "d", prompt: "Calculate the angle of elevation of the helicopter from $A$. Give your answer to 1 decimal place.", marks: 3 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) BC (km)", answer: 6.89, tolerance: 0.01 },
              { label: "(b) AC (km)", answer: 5.79, tolerance: 0.01 },
              { label: "(c) Bearing of A from B (degrees)", answer: 220 },
              { label: "(d) Angle of elevation (degrees)", answer: 27.4, tolerance: 0.1 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "SOHCAHTOA", statement: "$\\sin\\theta=\\frac{O}{H}$, $\\cos\\theta=\\frac{A}{H}$, $\\tan\\theta=\\frac{O}{A}$." },
              { kind: "property", name: "Back bearings", statement: "The bearing of $A$ from $B$ is the bearing of $B$ from $A$ plus $180^\\circ$ (when the result is less than $360^\\circ$)." },
            ],
            steps: [
              { part: "a", reasoning: "In right-angled triangle $ABC$ the angle at $A$ between $AB$ and the north line is $40^\\circ$, and $BC$ is the northward side, adjacent to this angle.", working: "BC=9\\cos40^\\circ", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate.", working: "BC=6.89", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$AC$ is opposite the $40^\\circ$ angle.", working: "AC=9\\sin40^\\circ", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate.", working: "AC=5.79", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Add $180^\\circ$ to $040^\\circ$.", working: "220^\\circ", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Use the right-angled triangle with the horizontal side $AC$ and the vertical side $3$ km.", working: "\\tan\\theta=\\frac{3}{5.785}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Use the inverse tangent.", working: "\\theta=\\tan^{-1}(0.5186)", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Evaluate.", working: "\\theta=27.4^\\circ", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $6.89$ km (b) $5.79$ km (c) $220^\\circ$ (d) $27.4^\\circ$",
            commonErrors: ["Swapping sine and cosine for a bearing from north.", "Giving the back bearing as $140^\\circ$."],
            examinerNote: "Accept ft from (b) in (d). Accept 5.78 to 5.79 for AC.",
          },
        },
      ],
    },
    {
      id: "edm10-u3-sine-cosine-rule",
      title: "Sine rule, cosine rule and area of a triangle",
      skill: "Use the sine rule, the cosine rule and area $=\\frac12ab\\sin C$ in triangles that are not right-angled.",
      lesson: {
        sections: [
          {
            heading: "Choosing the rule",
            body: "Use the **sine rule** when you know a side and its opposite angle (a matching pair) plus one more piece of information. Use the **cosine rule** when you know two sides and the included angle, or all three sides. Always label the sides $a$, $b$, $c$ opposite angles $A$, $B$, $C$.",
          },
          {
            heading: "The formulas",
            body: "Sine rule: $\\frac{a}{\\sin A}=\\frac{b}{\\sin B}$ (to find an angle, use $\\frac{\\sin A}{a}=\\frac{\\sin B}{b}$). Cosine rule: $a^2=b^2+c^2-2bc\\cos A$, or $\\cos A=\\frac{b^2+c^2-a^2}{2bc}$. Use brackets and the order of operations carefully: calculate $2bc\\cos A$ first, then subtract.",
          },
          {
            heading: "Area of a triangle",
            body: "Area $=\\frac12ab\\sin C$, where $C$ is the angle between sides $a$ and $b$. The perpendicular distance from a vertex to the opposite side can be found from the area, since area $=\\frac12\\times\\text{base}\\times\\text{height}$.",
          },
        ],
        keyFormulas: [
          { name: "Sine rule", statement: "$\\frac{a}{\\sin A}=\\frac{b}{\\sin B}=\\frac{c}{\\sin C}$" },
          { name: "Cosine rule", statement: "$a^2=b^2+c^2-2bc\\cos A$" },
          { name: "Area", statement: "$\\text{Area}=\\frac12ab\\sin C$" },
        ],
        workedExample: {
          problem: "In triangle $ABC$, $AB=6$ cm, $AC=9$ cm and angle $A=60^\\circ$. Work out $BC$.",
          solution: "$BC^2=6^2+9^2-2\\times6\\times9\\cos60^\\circ=36+81-54=63$. $BC=\\sqrt{63}=7.94$ cm to 3 significant figures.",
        },
      },
      questions: [
        {
          id: "edm10-u3-sine-cosine-rule-q1",
          difficulty: "foundation",
          tier: "higher",
          totalMarks: 2,
          stem: "Two sides of a triangle are 6 cm and 8 cm, and the angle between them is $30^\\circ$. What is the area of the triangle?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$12\\text{ cm}^2$" },
              { id: "b", text: "$24\\text{ cm}^2$" },
              { id: "c", text: "$20.8\\text{ cm}^2$" },
              { id: "d", text: "$48\\text{ cm}^2$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "formula", name: "Area of a triangle", statement: "$\\text{Area}=\\frac12ab\\sin C$" }],
            steps: [
              { reasoning: "Substitute into the area formula.", working: "\\frac12\\times6\\times8\\times\\sin30^\\circ", marks: 1, markCode: "M" },
              { reasoning: "Evaluate with $\\sin30^\\circ=0.5$.", working: "24\\times0.5=12", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $12\\text{ cm}^2$",
            commonErrors: ["Omitting the $\\frac12$, giving $24$.", "Using $\\sin60^\\circ$, giving $20.8$."],
          },
        },
        {
          id: "edm10-u3-sine-cosine-rule-q2",
          difficulty: "core",
          tier: "higher",
          totalMarks: 3,
          stem: "In triangle $ABC$, angle $A=40^\\circ$, angle $B=65^\\circ$ and $BC=7$ cm.\n\nCalculate the length of $AC$. Give your answer correct to 3 significant figures.",
          response: { type: "numeric", parts: [{ label: "AC", answer: 9.87, tolerance: 0.01, unit: "cm" }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Sine rule", statement: "$\\frac{a}{\\sin A}=\\frac{b}{\\sin B}$" }],
            steps: [
              { reasoning: "$BC$ is opposite $A$ and $AC$ is opposite $B$.", working: "\\frac{AC}{\\sin65^\\circ}=\\frac{7}{\\sin40^\\circ}", marks: 1, markCode: "M" },
              { reasoning: "Rearrange.", working: "AC=\\frac{7\\sin65^\\circ}{\\sin40^\\circ}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate: $\\frac{6.344}{0.6428}$.", working: "AC=9.87", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$9.87$ cm",
            commonErrors: ["Pairing a side with the wrong opposite angle.", "Swapping the sine terms when rearranging."],
          },
        },
        {
          id: "edm10-u3-sine-cosine-rule-q3",
          difficulty: "challenge",
          tier: "higher",
          totalMarks: 4,
          stem: "In triangle $PQR$, $PQ=8$ cm, $PR=11$ cm and angle $QPR=50^\\circ$.\n\nCalculate the length of $QR$. Give your answer correct to 3 significant figures.",
          response: { type: "numeric", parts: [{ label: "QR", answer: 8.48, tolerance: 0.01, unit: "cm" }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Cosine rule", statement: "$a^2=b^2+c^2-2bc\\cos A$" }],
            steps: [
              { reasoning: "Substitute the two sides and the included angle.", working: "QR^2=8^2+11^2-2\\times8\\times11\\times\\cos50^\\circ", marks: 2, markCode: "M" },
              { reasoning: "Evaluate $QR^2$: $185-176\\times0.6428=71.87$.", working: "QR^2=71.87", marks: 1, markCode: "A" },
              { reasoning: "Square root.", working: "QR=8.48", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$8.48$ cm",
            commonErrors: ["Evaluating $(64+121-176)\\cos50^\\circ$ by subtracting before multiplying.", "Forgetting to square-root at the end."],
          },
        },
        {
          id: "edm10-u3-sine-cosine-rule-q4",
          difficulty: "challenge",
          tier: "higher",
          totalMarks: 9,
          stem: "In triangle $ABC$, $AB=7$ cm, $BC=10$ cm and $AC=13$ cm.\n\nGive angles to 1 decimal place and areas and lengths to 3 significant figures.",
          parts: [
            { label: "a", prompt: "Calculate the size of angle $ABC$.", marks: 3 },
            { label: "b", prompt: "Calculate the size of angle $BAC$.", marks: 2 },
            { label: "c", prompt: "Calculate the area of triangle $ABC$.", marks: 2 },
            { label: "d", prompt: "Calculate the shortest distance from $A$ to the line $BC$.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Angle ABC (degrees)", answer: 98.2, tolerance: 0.1, unit: "°" },
              { label: "(b) Angle BAC (degrees)", answer: 49.6, tolerance: 0.1, unit: "°" },
              { label: "(c) Area (cm squared)", answer: 34.6, tolerance: 0.1 },
              { label: "(d) Distance (cm)", answer: 6.93, tolerance: 0.02 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Cosine rule", statement: "$\\cos B=\\frac{a^2+c^2-b^2}{2ac}$" },
              { kind: "formula", name: "Sine rule", statement: "$\\frac{\\sin A}{a}=\\frac{\\sin B}{b}$" },
              { kind: "formula", name: "Area of a triangle", statement: "$\\text{Area}=\\frac12ab\\sin C$ and $\\text{Area}=\\frac12\\times\\text{base}\\times\\text{height}$" },
            ],
            steps: [
              { part: "a", reasoning: "All three sides are known and angle $B$ is opposite the longest side $AC=13$.", working: "\\cos B=\\frac{7^2+10^2-13^2}{2\\times7\\times10}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Simplify.", working: "\\cos B=\\frac{-20}{140}=-0.1429", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Inverse cosine (obtuse angle).", working: "B=98.2^\\circ", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Use the sine rule with $BC=10$ opposite $A$ and $AC=13$ opposite $B$.", working: "\\sin A=\\frac{10\\sin98.2^\\circ}{13}=0.7613", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Inverse sine. Angle $A$ must be acute as $B$ is obtuse.", working: "A=49.6^\\circ", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Use area with the sides $AB$, $BC$ and the included angle $B$.", working: "\\frac12\\times7\\times10\\times\\sin98.2^\\circ", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate.", working: "34.6", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Area equals half base $BC$ times the perpendicular height $h$ from $A$.", working: "\\frac12\\times10\\times h=34.64", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Solve.", working: "h=6.93", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $98.2^\\circ$ (b) $49.6^\\circ$ (c) $34.6\\text{ cm}^2$ (d) $6.93$ cm",
            commonErrors: ["Using the sine rule for angle $B$, which cannot show an obtuse angle.", "Using the wrong side as the opposite side."],
            examinerNote: "Accept ft from (a) for (c) and (d). Accept alternative methods using angle $A$.",
          },
        },
      ],
    },
  ],
};
