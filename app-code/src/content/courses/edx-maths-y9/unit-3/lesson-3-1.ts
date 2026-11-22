import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "edm9-u3-lesson-3-1",
  code: "3-1",
  title: "Pythagoras and Trigonometry",
  goal: "I CAN use Pythagoras' theorem and the sine, cosine and tangent ratios to find missing lengths and angles in right-angled triangles.",
  standards: ["Y9 Geometry and Measures", "Y9 Number"],
  vocabulary: [
    { term: "Hypotenuse", definition: "The longest side of a right-angled triangle, opposite the right angle." },
    { term: "Pythagoras' theorem", definition: "In a right-angled triangle, the square of the hypotenuse equals the sum of the squares of the other two sides: $a^2+b^2=c^2$." },
    { term: "Opposite", definition: "The side directly across from the angle you are working with." },
    { term: "Adjacent", definition: "The side next to the angle you are working with that is not the hypotenuse." },
    { term: "Sine, cosine, tangent", definition: "Ratios of sides in a right-angled triangle: $\\sin\\theta=\\frac{O}{H}$, $\\cos\\theta=\\frac{A}{H}$, $\\tan\\theta=\\frac{O}{A}$." },
    { term: "Angle of elevation", definition: "The angle measured upwards from the horizontal to a line of sight." },
    { term: "Inverse trigonometric function", definition: "A function such as $\\sin^{-1}$, $\\cos^{-1}$ or $\\tan^{-1}$ that gives the angle from a ratio of sides." },
  ],
  concepts: [
    {
      id: "edm9-u3-pythagoras",
      title: "Pythagoras' theorem",
      skill: "Use Pythagoras' theorem to find the hypotenuse or a shorter side of a right-angled triangle.",
      lesson: {
        sections: [
          {
            heading: "The theorem",
            body: "In any right-angled triangle, the square on the hypotenuse $c$ equals the sum of the squares on the other two sides: $a^2+b^2=c^2$. It only works when the triangle has a right angle. Always identify the hypotenuse first: it is opposite the right angle and is the longest side.",
          },
          {
            heading: "Finding a side",
            body: "To find the hypotenuse, **add** the squares of the two shorter sides and take the square root. To find a shorter side, **subtract** the square of the known shorter side from the square of the hypotenuse, then take the square root. Check that the hypotenuse is the longest side in your answer.",
          },
          {
            heading: "Using the theorem in context",
            body: "Many problems hide a right-angled triangle: a ladder against a wall, the diagonal of a rectangle, or the distance between two points on a grid. Sketch the right-angled triangle, label the sides, then apply the theorem. The converse also holds: if $a^2+b^2=c^2$ then the triangle is right-angled.",
          },
        ],
        keyFormulas: [
          { name: "Pythagoras' theorem", statement: "$a^2+b^2=c^2$, where $c$ is the hypotenuse" },
          { name: "Shorter side", statement: "$a=\\sqrt{c^2-b^2}$" },
        ],
        workedExample: {
          problem: "A right-angled triangle has hypotenuse 17 cm and one shorter side 8 cm. Work out the other side.",
          solution: "The unknown side is a shorter side, so subtract: $x^2=17^2-8^2=289-64=225$. Therefore $x=\\sqrt{225}=15$ cm.",
        },
      },
      questions: [
        {
          id: "edm9-u3-pythagoras-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A right-angled triangle has two shorter sides of length 6 cm and 8 cm. Work out the length of the hypotenuse.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "14 cm" },
              { id: "b", text: "10 cm" },
              { id: "c", text: "100 cm" },
              { id: "d", text: "7 cm" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Pythagoras' theorem", statement: "$a^2+b^2=c^2$ where $c$ is the hypotenuse." },
            ],
            steps: [
              { reasoning: "Add the squares of the two shorter sides.", working: "6^2+8^2=36+64=100", marks: 1, markCode: "M" },
              { reasoning: "Take the square root to find the hypotenuse.", working: "c=\\sqrt{100}=10", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** 10 cm",
            commonErrors: ["Adding the lengths (6 + 8 = 14) instead of the squares.", "Forgetting to take the square root and giving 100.", "Averaging the two sides."],
            examinerNote: "M1 for 36 + 64 oe; A1 cao.",
          },
        },
        {
          id: "edm9-u3-pythagoras-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A ladder 6.5 m long leans against a vertical wall. The foot of the ladder is on horizontal ground, 2.5 m from the base of the wall. Work out how high up the wall the ladder reaches, in metres.",
          response: { type: "numeric", parts: [{ label: "Height up the wall", answer: 6, unit: "m" }] },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Pythagoras' theorem", statement: "$a^2+b^2=c^2$ where $c$ is the hypotenuse (the ladder)." },
            ],
            steps: [
              { reasoning: "The ladder is the hypotenuse, so subtract the square of the known shorter side.", working: "h^2=6.5^2-2.5^2=42.25-6.25", marks: 1, markCode: "M" },
              { reasoning: "Evaluate the difference.", working: "h^2=36", marks: 1, markCode: "A" },
              { reasoning: "Take the square root.", working: "h=6", marks: 1, markCode: "A" },
            ],
            finalAnswer: "6 m",
            commonErrors: ["Adding the squares as if the ladder were a shorter side, giving about 6.96 m.", "Not squaring 6.5 correctly."],
            examinerNote: "M1 for $6.5^2-2.5^2$ oe.",
          },
        },
        {
          id: "edm9-u3-pythagoras-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "An isosceles triangle has two equal sides of length 13 cm and a base of length 10 cm. Work out the area of the triangle, in cm².",
          response: { type: "numeric", parts: [{ label: "Area", answer: 60, unit: "cm²" }] },
          markscheme: {
            principles: [
              { kind: "property", name: "Isosceles triangle", statement: "The perpendicular from the apex to the base bisects the base." },
              { kind: "theorem", name: "Pythagoras' theorem", statement: "$a^2+b^2=c^2$." },
              { kind: "formula", name: "Area of a triangle", statement: "$\\text{Area}=\\frac12\\times\\text{base}\\times\\text{perpendicular height}$" },
            ],
            steps: [
              { reasoning: "Draw the perpendicular height; it splits the base into two halves of 5 cm, forming a right-angled triangle with hypotenuse 13.", working: "h^2=13^2-5^2=169-25", marks: 1, markCode: "M" },
              { reasoning: "Evaluate and square root.", working: "h^2=144,\\quad h=12", marks: 1, markCode: "A" },
              { reasoning: "Use the area formula with the full base of 10 cm.", working: "\\tfrac12\\times10\\times12", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "60", marks: 1, markCode: "A" },
            ],
            finalAnswer: "60 cm²",
            commonErrors: ["Using 10 cm instead of half the base (5 cm) in the right-angled triangle.", "Using 13 as the perpendicular height."],
            examinerNote: "M1 for $13^2-5^2$ oe; M1 (dep) for $\\frac12\\times10\\times h$; A1 cao.",
          },
        },
        {
          id: "edm9-u3-pythagoras-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Pythagoras' theorem has many uses.\n\nTriangle PQR has a right angle at Q, with PQ = 9 cm and QR = 12 cm.\n\nTriangle XYZ has sides of length 20 cm, 21 cm and 29 cm.\n\nOn a coordinate grid, point A is at $(1, 2)$ and point B is at $(7, 10)$.\n\nA boat sails 15 km due east and then 8 km due north.",
          parts: [
            { label: "a", prompt: "Work out the length of PR, in cm.", marks: 2 },
            { label: "b", prompt: "Show that triangle XYZ is right-angled.", marks: 3 },
            { label: "c", prompt: "Work out the length of the straight line AB.", marks: 3 },
            { label: "d", prompt: "Work out the straight-line distance, in km, of the boat from its starting point.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) PR (cm)", answer: 15 },
              { label: "(c) AB (units)", answer: 10 },
              { label: "(d) distance (km)", answer: 17 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Pythagoras' theorem", statement: "$a^2+b^2=c^2$ where $c$ is the hypotenuse." },
              { kind: "theorem", name: "Converse of Pythagoras", statement: "If $a^2+b^2=c^2$ for the three sides of a triangle, the triangle has a right angle opposite side $c$." },
              { kind: "principle", name: "Distance on a grid", statement: "The horizontal and vertical differences between two points form the shorter sides of a right-angled triangle." },
            ],
            steps: [
              { part: "a", reasoning: "PR is the hypotenuse (opposite the right angle at Q).", working: "PR^2=9^2+12^2=81+144=225", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Take the square root.", working: "PR=15", marks: 1, markCode: "A" },
              { part: "b", reasoning: "The longest side 29 would be the hypotenuse, so test it. Square the two shorter sides.", working: "20^2+21^2=400+441", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate the sum and compare with the square of the longest side.", working: "841=29^2", marks: 1, markCode: "A" },
              { part: "b", reasoning: "State the conclusion using the converse of Pythagoras.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Find the horizontal and vertical differences between A and B.", working: "7-1=6,\\quad 10-2=8", marks: 1, markCode: "B" },
              { part: "c", reasoning: "AB is the hypotenuse of a right-angled triangle with these shorter sides.", working: "AB^2=6^2+8^2=36+64=100", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Take the square root.", working: "AB=10", marks: 1, markCode: "A" },
              { part: "d", reasoning: "East and north are at right angles, so the distance is the hypotenuse.", working: "d^2=15^2+8^2=225+64=289", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Take the square root.", working: "d=17", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 15 cm. (b) $20^2+21^2=841=29^2$, so the triangle is right-angled. (c) 10 units. (d) 17 km.",
            commonErrors: ["In (b), checking only that two sides add to the third.", "In (c), subtracting the coordinates incorrectly or forgetting to square.", "In (d), adding 15 and 8 to give 23 km."],
            examinerNote: "(b) requires a conclusion for the final mark. (c) M1 for $6^2+8^2$ oe.",
          },
        },
      ],
    },
    {
      id: "edm9-u3-trigonometry",
      title: "Right-angled trigonometry",
      skill: "Use sine, cosine and tangent to find missing sides and angles in right-angled triangles.",
      lesson: {
        sections: [
          {
            heading: "Labelling the sides",
            body: "Label the sides relative to the angle $\\theta$ you are using. The **hypotenuse** (H) is opposite the right angle. The **opposite** (O) is across from $\\theta$. The **adjacent** (A) is the remaining side next to $\\theta$. The labels change if you switch to the other acute angle.",
          },
          {
            heading: "SOHCAHTOA",
            body: "$\\sin\\theta=\\frac{O}{H}$, $\\cos\\theta=\\frac{A}{H}$, $\\tan\\theta=\\frac{O}{A}$. Decide which two sides are involved (one known and one unknown, or both known) and choose the matching ratio. Rearrange to find a side; to find an angle use the inverse function such as $\\theta=\\tan^{-1}\\left(\\frac{O}{A}\\right)$.",
          },
          {
            heading: "Angles of elevation",
            body: "An angle of elevation is measured upwards from the horizontal. A vertical object and the horizontal ground form a right angle, so the tower, the ground and the line of sight make a right-angled triangle. Sketch it and label the sides before choosing a ratio.",
          },
        ],
        keyFormulas: [
          { name: "Sine", statement: "$\\sin\\theta=\\dfrac{\\text{opposite}}{\\text{hypotenuse}}$" },
          { name: "Cosine", statement: "$\\cos\\theta=\\dfrac{\\text{adjacent}}{\\text{hypotenuse}}$" },
          { name: "Tangent", statement: "$\\tan\\theta=\\dfrac{\\text{opposite}}{\\text{adjacent}}$" },
        ],
        workedExample: {
          problem: "In a right-angled triangle the side opposite angle $\\theta$ is 5 cm and the hypotenuse is 10 cm. Work out $\\theta$.",
          solution: "Opposite and hypotenuse give sine: $\\sin\\theta=\\frac{5}{10}=0.5$. So $\\theta=\\sin^{-1}(0.5)=30^\\circ$.",
        },
      },
      questions: [
        {
          id: "edm9-u3-trigonometry-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In a right-angled triangle, the side opposite angle $\\theta$ is 6 cm and the hypotenuse is 10 cm. The remaining side is 8 cm. What is $\\sin\\theta$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac{3}{4}$" },
              { id: "b", text: "$\\frac{4}{5}$" },
              { id: "c", text: "$\\frac{5}{3}$" },
              { id: "d", text: "$\\frac{3}{5}$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Sine ratio", statement: "$\\sin\\theta=\\frac{\\text{opposite}}{\\text{hypotenuse}}$" },
            ],
            steps: [
              { reasoning: "Sine is opposite over hypotenuse. Write the fraction and simplify.", working: "\\sin\\theta=\\frac{6}{10}=\\frac{3}{5}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** $\\frac{3}{5}$",
            commonErrors: ["Using adjacent over hypotenuse (cosine), giving $\\frac45$.", "Using opposite over adjacent (tangent), giving $\\frac34$.", "Inverting the fraction."],
          },
        },
        {
          id: "edm9-u3-trigonometry-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "In a right-angled triangle, the hypotenuse is 20 cm and one acute angle is $30^\\circ$. The side $x$ is opposite the $30^\\circ$ angle. Given that $\\sin 30^\\circ=0.5$, work out the length of $x$, in cm.",
          response: { type: "numeric", parts: [{ label: "x", answer: 10, unit: "cm" }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Sine ratio", statement: "$\\sin\\theta=\\frac{\\text{opposite}}{\\text{hypotenuse}}$" },
            ],
            steps: [
              { reasoning: "The sides involved are opposite and hypotenuse, so use sine.", working: "\\sin30^\\circ=\\frac{x}{20}", marks: 1, markCode: "M" },
              { reasoning: "Multiply both sides by 20.", working: "x=20\\times\\sin30^\\circ=20\\times0.5", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "x=10", marks: 1, markCode: "A" },
            ],
            finalAnswer: "10 cm",
            commonErrors: ["Using cosine or tangent for the wrong pair of sides.", "Dividing 20 by 0.5 to get 40."],
            examinerNote: "M1 for correct ratio; M1 for rearrangement; A1 cao.",
          },
        },
        {
          id: "edm9-u3-trigonometry-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A vertical tower is 30 m tall. An observer stands on level ground 40 m from the base of the tower. Work out the angle of elevation of the top of the tower from the observer. Give your answer in degrees to 1 decimal place.",
          response: { type: "numeric", parts: [{ label: "Angle of elevation", answer: 36.9, tolerance: 0.05, unit: "°" }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Tangent ratio", statement: "$\\tan\\theta=\\frac{\\text{opposite}}{\\text{adjacent}}$" },
              { kind: "definition", name: "Angle of elevation", statement: "The angle above the horizontal of the line of sight to an object." },
            ],
            steps: [
              { reasoning: "The tower (30 m) is opposite the angle and the ground distance (40 m) is adjacent, so use tangent.", working: "\\tan\\theta=\\frac{O}{A}", marks: 1, markCode: "M" },
              { reasoning: "Substitute the values.", working: "\\tan\\theta=\\frac{30}{40}=0.75", marks: 1, markCode: "M" },
              { reasoning: "Use the inverse tangent.", working: "\\theta=\\tan^{-1}(0.75)", marks: 1, markCode: "M" },
              { reasoning: "Evaluate and round to 1 decimal place.", working: "\\theta=36.87\\ldots\\approx36.9^\\circ", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$36.9^\\circ$",
            commonErrors: ["Using $\\frac{40}{30}$, giving $53.1^\\circ$.", "Using sine with 30 and 40 as if one were the hypotenuse.", "Calculator in radian mode."],
            examinerNote: "A1 for 36.9 (accept 36.87 to 36.9).",
          },
        },
        {
          id: "edm9-u3-trigonometry-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Triangle ABC has a right angle at B. AB = 8 cm and BC = 15 cm.",
          parts: [
            { label: "a", prompt: "Work out the length of AC, in cm.", marks: 2 },
            { label: "b", prompt: "Work out the size of angle BAC. Give your answer in degrees to 1 decimal place.", marks: 3 },
            { label: "c", prompt: "Work out the size of angle ACB. Give your answer in degrees to 1 decimal place.", marks: 2 },
            { label: "d", prompt: "Write down the exact fraction for $\\sin(\\text{angle ACB})$, then give its value as a decimal to 3 decimal places.", marks: 3 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) AC (cm)", answer: 17 },
              { label: "(b) angle BAC (°)", answer: 61.9, tolerance: 0.05 },
              { label: "(c) angle ACB (°)", answer: 28.1, tolerance: 0.05 },
              { label: "(d) sin(ACB) to 3 d.p.", answer: 0.471, tolerance: 0.001 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Pythagoras' theorem", statement: "$a^2+b^2=c^2$." },
              { kind: "definition", name: "SOHCAHTOA", statement: "$\\sin\\theta=\\frac{O}{H}$, $\\cos\\theta=\\frac{A}{H}$, $\\tan\\theta=\\frac{O}{A}$." },
              { kind: "theorem", name: "Angle sum of a triangle", statement: "The angles in a triangle add up to $180^\\circ$." },
            ],
            steps: [
              { part: "a", reasoning: "AC is the hypotenuse.", working: "AC^2=8^2+15^2=64+225=289", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Take the square root.", working: "AC=17", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Relative to angle A, BC (15) is opposite and AB (8) is adjacent, so use tangent.", working: "\\tan(BAC)=\\frac{15}{8}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Use the inverse tangent.", working: "BAC=\\tan^{-1}(1.875)", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate and round.", working: "BAC=61.93\\ldots\\approx61.9^\\circ", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Angles in a triangle sum to $180^\\circ$ and angle B is $90^\\circ$.", working: "ACB=180-90-61.9", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate.", working: "ACB=28.1^\\circ", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Relative to angle C, AB (8) is opposite and AC (17) is the hypotenuse.", working: "\\sin(ACB)=\\frac{8}{17}", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Divide 8 by 17.", working: "8\\div17=0.4705\\ldots", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Round to 3 decimal places (consistent with $\\sin28.1^\\circ=0.471$).", working: "0.471", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 17 cm. (b) $61.9^\\circ$. (c) $28.1^\\circ$. (d) $\\frac{8}{17}=0.471$.",
            commonErrors: ["Swapping opposite and adjacent in (b), giving $28.1^\\circ$.", "In (c), not using the angle sum and attempting a new ratio incorrectly.", "In (d), using adjacent over hypotenuse (15/17)."],
            examinerNote: "(b) accept 61.9 or 61.93. (c) ft from (b) if the answer to (b) is less than 90.",
          },
        },
      ],
    },
  ],
};
