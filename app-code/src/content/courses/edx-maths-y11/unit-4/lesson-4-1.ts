import type { Lesson } from "../../../types.ts";

export const lesson41: Lesson = {
  id: "edm11-u4-lesson-4-1",
  code: "4-1",
  title: "Three-Dimensional Problems",
  goal: "I CAN use Pythagoras' theorem and trigonometry in three dimensions, including finding the angle between a line and a plane.",
  standards: ["4MA1 3.7H", "4MA1 3.8H"],
  vocabulary: [
    { term: "Space diagonal", definition: "A line joining two opposite corners of a cuboid, passing through the inside of the solid. Its length is $\\sqrt{l^2 + w^2 + h^2}$." },
    { term: "Face diagonal", definition: "A diagonal drawn across one face of a solid, for example the diagonal of the rectangular base." },
    { term: "Plane", definition: "A flat surface that extends in all directions, such as the horizontal base of a cuboid." },
    { term: "Perpendicular height", definition: "The height of a solid measured at right angles to its base." },
    { term: "Angle between a line and a plane", definition: "The angle between the line and its projection (its shadow) on the plane. It is the smallest angle between the line and any line in the plane." },
    { term: "Projection", definition: "The foot of a point on a plane is the point on the plane directly below (or beside) it, reached by a line perpendicular to the plane." },
  ],
  concepts: [
    {
      id: "edm11-u4-three-d-pythagoras",
      title: "Pythagoras and trigonometry in 3D",
      skill: "Break a 3D problem into right-angled triangles and use Pythagoras' theorem and trigonometry to find lengths and angles.",
      lesson: {
        sections: [
          {
            heading: "Find the right-angled triangles",
            body: "Every 3D problem is solved by picking out flat right-angled triangles. Redraw each one separately and label the sides. Often you need two steps: first a diagonal across the base, then a triangle that stands on this diagonal.",
          },
          {
            heading: "The space diagonal",
            body: "In a cuboid with length $l$, width $w$ and height $h$, the base diagonal is $\\sqrt{l^2 + w^2}$ and the space diagonal is $\\sqrt{l^2 + w^2 + h^2}$. For a pyramid with a rectangular base and its vertex directly above the centre, the distance from the centre to a corner is half the base diagonal.",
          },
          {
            heading: "Accuracy",
            body: "Keep full calculator values between steps (use the memory or leave surds such as $\\sqrt{50}$) and round only at the end, to 3 significant figures for lengths and 1 decimal place for angles.",
          },
        ],
        keyFormulas: [
          { name: "Space diagonal of a cuboid", statement: "$d = \\sqrt{l^2 + w^2 + h^2}$" },
          { name: "Pythagoras", statement: "$a^2 + b^2 = c^2$" },
        ],
        workedExample: {
          problem: "A cuboid is 4 cm long, 3 cm wide and 12 cm high. Work out the length of a space diagonal.",
          solution: "$d^2 = 4^2 + 3^2 + 12^2 = 16 + 9 + 144 = 169$, so $d = 13$ cm.",
        },
      },
      questions: [
        {
          id: "edm11-u4-three-d-pythagoras-q1",
          difficulty: "foundation",
          tier: "higher",
          totalMarks: 2,
          stem: "A cuboid has length $6$ cm, width $3$ cm and height $2$ cm.\n\nWhat is the length of the longest straight line that can be drawn inside the cuboid, from one corner to the opposite corner?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$11$ cm" },
              { id: "b", text: "$\\sqrt{45}$ cm" },
              { id: "c", text: "$7$ cm" },
              { id: "d", text: "$49$ cm" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Space diagonal", statement: "$d^2 = l^2 + w^2 + h^2$" },
            ],
            steps: [
              { reasoning: "Add the squares of the three dimensions.", working: "d^2 = 6^2 + 3^2 + 2^2 = 36 + 9 + 4 = 49", marks: 1, markCode: "M" },
              { reasoning: "Take the square root.", working: "d = 7", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** $7$ cm",
            commonErrors: ["Adding the dimensions: $6+3+2 = 11$.", "Leaving out the height: $\\sqrt{36+9} = \\sqrt{45}$.", "Forgetting to square root and giving $49$."],
          },
        },
        {
          id: "edm11-u4-three-d-pythagoras-q2",
          difficulty: "core",
          tier: "higher",
          totalMarks: 3,
          stem: "$ABCDEFGH$ is a cuboid. The base $ABCD$ is a horizontal rectangle with $AB = 12$ cm and $BC = 5$ cm. The vertical edges $AE$, $BF$, $CG$ and $DH$ each have length $9$ cm, so that $E$ is directly above $A$ and $G$ is directly above $C$.\n\nCalculate the length of $AG$. Give your answer correct to $3$ significant figures.",
          response: { type: "numeric", parts: [{ label: "$AG$ (cm)", answer: 15.8, tolerance: 0.05, unit: "cm" }] },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Pythagoras in 3D", statement: "$AG^2 = AB^2 + BC^2 + CG^2$" },
            ],
            steps: [
              { reasoning: "Use the space diagonal formula, or find $AC$ first and then use triangle $ACG$.", working: "AG^2 = 12^2 + 5^2 + 9^2", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "AG^2 = 144 + 25 + 81 = 250", marks: 1, markCode: "A" },
              { reasoning: "Square root and round.", working: "AG = \\sqrt{250} = 15.8 \\text{ cm}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$AG = 15.8$ cm",
            commonErrors: ["Using only two of the three dimensions.", "Rounding $AC$ early and losing accuracy."],
          },
        },
        {
          id: "edm11-u4-three-d-pythagoras-q3",
          difficulty: "challenge",
          tier: "higher",
          totalMarks: 4,
          stem: "$VABCD$ is a pyramid. The base $ABCD$ is a horizontal square of side $10$ cm. The vertex $V$ is vertically above the centre $O$ of the square, and $VO = 12$ cm.\n\nCalculate the length of the sloping edge $VA$. Give your answer correct to $3$ significant figures.",
          response: { type: "numeric", parts: [{ label: "$VA$ (cm)", answer: 13.9, tolerance: 0.05, unit: "cm" }] },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Pythagoras' theorem", statement: "In a right-angled triangle, $c^2 = a^2 + b^2$." },
              { kind: "property", name: "Square", statement: "The diagonals of a square bisect each other, so $AO = \\frac12 AC$." },
            ],
            steps: [
              { reasoning: "Find the diagonal of the base.", working: "AC^2 = 10^2 + 10^2 = 200", marks: 1, markCode: "M" },
              { reasoning: "$O$ is the midpoint of $AC$, so halve it.", working: "AO^2 = \\left(\\frac{\\sqrt{200}}{2}\\right)^2 = 50", marks: 1, markCode: "A" },
              { reasoning: "Triangle $VOA$ has a right angle at $O$.", working: "VA^2 = 12^2 + 50 = 194", marks: 1, markCode: "M" },
              { reasoning: "Square root and round.", working: "VA = 13.9 \\text{ cm}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$VA = 13.9$ cm",
            commonErrors: ["Using $AC$ instead of $AO$ (half the diagonal).", "Using $AO = 5$ (half the side)."],
          },
        },
        {
          id: "edm11-u4-three-d-pythagoras-q4",
          difficulty: "challenge",
          tier: "higher",
          totalMarks: 10,
          stem: "$ABCDEFGH$ is a cuboid. The base $ABCD$ is a horizontal rectangle with $AB = 8$ cm and $BC = 6$ cm. The vertical edges $AE$, $BF$, $CG$ and $DH$ each have length $5$ cm. The point $M$ is the midpoint of $CG$.",
          parts: [
            { label: "a", prompt: "Work out the length of $AC$.", marks: 2 },
            { label: "b", prompt: "Calculate the length of $AG$. Give your answer correct to $3$ significant figures.", marks: 2 },
            { label: "c", prompt: "Calculate the size of angle $GAC$. Give your answer correct to $1$ decimal place.", marks: 3 },
            { label: "d", prompt: "Calculate the length of $AM$. Give your answer correct to $3$ significant figures.", marks: 3 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) $AC$ (cm)", answer: 10, unit: "cm" },
              { label: "(b) $AG$ (cm)", answer: 11.2, tolerance: 0.05, unit: "cm" },
              { label: "(c) angle $GAC$ (degrees)", answer: 26.6, tolerance: 0.05 },
              { label: "(d) $AM$ (cm)", answer: 10.3, tolerance: 0.05, unit: "cm" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Pythagoras' theorem", statement: "$c^2 = a^2 + b^2$ in a right-angled triangle." },
              { kind: "formula", name: "Tangent ratio", statement: "$\\tan\\theta = \\frac{\\text{opposite}}{\\text{adjacent}}$" },
            ],
            steps: [
              { part: "a", reasoning: "Triangle $ABC$ has a right angle at $B$.", working: "AC^2 = 8^2 + 6^2 = 100", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Square root.", working: "AC = 10", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Triangle $ACG$ has a right angle at $C$ because $CG$ is vertical.", working: "AG^2 = 10^2 + 5^2 = 125", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Square root and round.", working: "AG = 11.2 \\text{ cm}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "In triangle $ACG$, $CG$ is opposite angle $GAC$ and $AC$ is adjacent.", working: "\\tan GAC = \\frac{5}{10}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Use the inverse tangent.", working: "GAC = \\tan^{-1}(0.5)", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate to 1 d.p.", working: "GAC = 26.6^\\circ", marks: 1, markCode: "A" },
              { part: "d", reasoning: "$CM = \\frac12 \\times 5 = 2.5$, and triangle $ACM$ is right-angled at $C$.", working: "AM^2 = 10^2 + 2.5^2", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Evaluate.", working: "AM^2 = 106.25", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Square root and round.", working: "AM = 10.3 \\text{ cm}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $10$ cm. (b) $11.2$ cm. (c) $26.6^\\circ$. (d) $10.3$ cm.",
            commonErrors: ["Using $CM = 5$ rather than $2.5$.", "Using $\\sin$ with $AC$ in place of $AG$."],
            examinerNote: "In (c), accept $\\sin^{-1}(5/\\sqrt{125})$ or equivalent for the method marks.",
          },
        },
      ],
    },
    {
      id: "edm11-u4-line-plane-angle",
      title: "The angle between a line and a plane",
      skill: "Identify the projection of a line on a plane and calculate the angle between the line and the plane.",
      lesson: {
        sections: [
          {
            heading: "What the angle means",
            body: "The angle between a line and a plane is the angle between the line and its shadow on the plane. To find it, drop a perpendicular from the end of the line onto the plane; the angle is at the other end, between the line and the line joining the two feet.",
          },
          {
            heading: "Example in a cuboid",
            body: "In cuboid $ABCDEFGH$ with base $ABCD$, the point below $G$ on the base is $C$. So the angle between $AG$ and the base is angle $GAC$. The triangle $GCA$ has a right angle at $C$.",
          },
          {
            heading: "Choose the best ratio",
            body: "Use the original given lengths where possible, not rounded values. If you know the opposite and adjacent, use $\\tan$; if you know the opposite and hypotenuse, use $\\sin$.",
          },
        ],
        keyFormulas: [
          { name: "Trigonometric ratios", statement: "$\\sin\\theta = \\frac{O}{H},\\ \\cos\\theta = \\frac{A}{H},\\ \\tan\\theta = \\frac{O}{A}$" },
        ],
        workedExample: {
          problem: "In a cuboid with base $ABCD$ where $AC = 15$ cm and the height $CG = 10$ cm, find the angle between $AG$ and the base.",
          solution: "The angle is $GAC$. $\\tan GAC = \\frac{10}{15}$, so $GAC = 33.7^\\circ$ to 1 d.p.",
        },
      },
      questions: [
        {
          id: "edm11-u4-line-plane-angle-q1",
          difficulty: "foundation",
          tier: "higher",
          totalMarks: 2,
          stem: "$ABCDEFGH$ is a cuboid. The base $ABCD$ is horizontal, and $E$, $F$, $G$, $H$ are directly above $A$, $B$, $C$, $D$ respectively.\n\nWhich angle is the angle between the line $AG$ and the base $ABCD$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Angle $GAE$" },
              { id: "b", text: "Angle $GAC$" },
              { id: "c", text: "Angle $AGC$" },
              { id: "d", text: "Angle $GAB$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Angle between a line and a plane", statement: "The angle between the line and its projection onto the plane." },
            ],
            steps: [
              { reasoning: "The point on the base directly below $G$ is $C$, so the projection of $AG$ on the base is $AC$.", marks: 1, markCode: "M" },
              { reasoning: "The angle between $AG$ and $AC$ is angle $GAC$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Angle $GAC$",
            commonErrors: ["Choosing angle $GAB$, which is not in a plane perpendicular to the base.", "Choosing angle $AGC$, which is at $G$ and so is the complement of the angle needed."],
          },
        },
        {
          id: "edm11-u4-line-plane-angle-q2",
          difficulty: "core",
          tier: "higher",
          totalMarks: 3,
          stem: "$ABCDEFGH$ is a cuboid with horizontal base $ABCD$, where $AB = 9$ cm and $BC = 12$ cm. The vertical edges, including $CG$, have length $10$ cm.\n\nCalculate the size of the angle between $AG$ and the base $ABCD$. Give your answer correct to $1$ decimal place.",
          response: { type: "numeric", parts: [{ label: "Angle (degrees)", answer: 33.7, tolerance: 0.05 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Angle between a line and a plane", statement: "The angle between the line and its projection onto the plane, here angle $GAC$." },
            ],
            steps: [
              { reasoning: "Find the base diagonal $AC$ with Pythagoras.", working: "AC = \\sqrt{9^2 + 12^2} = 15", marks: 1, markCode: "M" },
              { reasoning: "Use tangent in the right-angled triangle $ACG$.", working: "\\tan GAC = \\frac{10}{15}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "GAC = 33.7^\\circ", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$33.7^\\circ$",
            commonErrors: ["Using $AB$ or $BC$ instead of $AC$ as the adjacent side.", "Having the calculator in radians."],
          },
        },
        {
          id: "edm11-u4-line-plane-angle-q3",
          difficulty: "challenge",
          tier: "higher",
          totalMarks: 4,
          stem: "$VABCD$ is a pyramid. The base $ABCD$ is a horizontal square of side $10$ cm. The vertex $V$ is vertically above the centre $O$ of the base, and $VO = 12$ cm.\n\nCalculate the size of the angle between the edge $VA$ and the base $ABCD$. Give your answer correct to $1$ decimal place.",
          response: { type: "numeric", parts: [{ label: "Angle (degrees)", answer: 59.5, tolerance: 0.05 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Angle between a line and a plane", statement: "The angle between $VA$ and its projection $OA$ on the base, angle $VAO$." },
            ],
            steps: [
              { reasoning: "$AO$ is half the base diagonal.", working: "AO = \\tfrac12 \\sqrt{10^2 + 10^2} = \\sqrt{50}", marks: 1, markCode: "M" },
              { reasoning: "In right-angled triangle $VOA$, $VO$ is opposite and $AO$ adjacent.", working: "\\tan VAO = \\frac{12}{\\sqrt{50}}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate the ratio.", working: "\\tan VAO = 1.697\\ldots", marks: 1, markCode: "A" },
              { reasoning: "Inverse tangent.", working: "VAO = 59.5^\\circ", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$59.5^\\circ$",
            commonErrors: ["Using $AO = 5$, giving $67.4^\\circ$.", "Using $AC$ in place of $AO$, giving $40.3^\\circ$."],
          },
        },
        {
          id: "edm11-u4-line-plane-angle-q4",
          difficulty: "challenge",
          tier: "higher",
          totalMarks: 10,
          stem: "$ABCDEFGH$ is a cuboid. The base $ABCD$ is a horizontal rectangle with $AB = 12$ cm and $BC = 9$ cm. The vertical edges $AE$, $BF$, $CG$ and $DH$ each have length $8$ cm. The face $ABFE$ is a vertical rectangle.",
          parts: [
            { label: "a", prompt: "Work out the length of $AC$.", marks: 2 },
            { label: "b", prompt: "Work out the length of $AG$.", marks: 2 },
            { label: "c", prompt: "Calculate the angle between $AG$ and the base $ABCD$. Give your answer correct to $1$ decimal place.", marks: 3 },
            { label: "d", prompt: "Calculate the angle between $AG$ and the plane $ABFE$. Give your answer correct to $1$ decimal place.", marks: 3 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) $AC$ (cm)", answer: 15, unit: "cm" },
              { label: "(b) $AG$ (cm)", answer: 17, unit: "cm" },
              { label: "(c) angle with base (degrees)", answer: 28.1, tolerance: 0.1 },
              { label: "(d) angle with plane $ABFE$ (degrees)", answer: 32.0, tolerance: 0.1 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Angle between a line and a plane", statement: "The angle between the line and its projection on the plane." },
              { kind: "theorem", name: "Pythagoras' theorem", statement: "$c^2 = a^2 + b^2$" },
            ],
            steps: [
              { part: "a", reasoning: "Triangle $ABC$ is right-angled at $B$.", working: "AC^2 = 12^2 + 9^2 = 225", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Square root.", working: "AC = 15", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Triangle $ACG$ is right-angled at $C$.", working: "AG^2 = 15^2 + 8^2 = 289", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Square root.", working: "AG = 17", marks: 1, markCode: "A" },
              { part: "c", reasoning: "The angle is $GAC$; $CG$ is opposite and $AC$ adjacent.", working: "\\tan GAC = \\frac{8}{15}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Inverse tangent.", working: "GAC = \\tan^{-1}\\left(\\frac{8}{15}\\right)", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate.", working: "GAC = 28.1^\\circ", marks: 1, markCode: "A" },
              { part: "d", reasoning: "$GF$ is perpendicular to the plane $ABFE$, so the projection of $AG$ on this plane is $AF$ and the required angle is $GAF$. $GF = BC = 9$.", working: "\\sin GAF = \\frac{GF}{AG} = \\frac{9}{17}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Inverse sine.", working: "GAF = \\sin^{-1}\\left(\\frac{9}{17}\\right)", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Evaluate.", working: "GAF = 32.0^\\circ", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $15$ cm. (b) $17$ cm. (c) $28.1^\\circ$. (d) $32.0^\\circ$.",
            commonErrors: ["In (d), using the angle $GAB$ or $GAC$ instead of $GAF$.", "Using $\\tan$ with $GF$ and $AB$."],
            examinerNote: "In (d) accept $\\tan^{-1}(9/\\sqrt{208})$. Award the first mark only if the correct triangle $GAF$ is identified.",
          },
        },
      ],
    },
  ],
};
