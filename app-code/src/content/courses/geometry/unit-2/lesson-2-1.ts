import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "geo-u2-lesson-2-1",
  code: "2-1",
  title: "The Pythagorean Theorem and Its Converse",
  goal: "I CAN use the Pythagorean Theorem and its converse to find unknown lengths, classify triangles, and calculate distance.",
  standards: ["HSG-SRT.B.4", "HSG-SRT.C.8"],
  vocabulary: [
    { term: "Right triangle", definition: "A triangle with exactly one $90^\\circ$ angle." },
    { term: "Legs", definition: "The two sides that form the right angle in a right triangle." },
    { term: "Hypotenuse", definition: "The side opposite the right angle; it is the longest side of a right triangle." },
    { term: "Pythagorean Theorem", definition: "For a right triangle with legs $a$ and $b$ and hypotenuse $c$, $a^2+b^2=c^2$." },
    { term: "Converse of the Pythagorean Theorem", definition: "If the squares of the two shorter sides of a triangle sum to the square of the longest side, the triangle is right." },
    { term: "Distance formula", definition: "The distance between $(x_1,y_1)$ and $(x_2,y_2)$ is $\\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}$." },
  ],
  concepts: [
    {
      id: "geo-u2-pythagorean-theorem-converse",
      title: "The Pythagorean Theorem and its converse",
      skill: "Find a missing side in a right triangle and use side lengths to test whether a triangle is right.",
      lesson: {
        sections: [
          {
            heading: "Use the relationship between the sides",
            body: "In a right triangle, the two legs meet at the right angle, and the hypotenuse lies opposite it. The Pythagorean Theorem relates their lengths: $a^2+b^2=c^2$, where $c$ is always the hypotenuse. Identify that side before substituting; the equation is not a rule for adding the squares of any two sides indiscriminately.\n\nTo find a leg, rearrange the equation: $a=\\sqrt{c^2-b^2}$. Use the positive root because a side length is positive. Keep an exact radical when it is simplest, and round only if the question requests an approximation.",
          },
          {
            heading: "Test a triangle with the converse",
            body: "For three given side lengths, first order them from shortest to longest. Let the longest be $c$. Compare $a^2+b^2$ with $c^2$: equality means the triangle is right; a smaller sum means it is obtuse; a greater sum means it is acute. This comparison classifies the angle opposite the longest side.\n\nThe converse is useful only after confirming the lengths can form a triangle. For example, $5, 12, 13$ satisfy $5^2+12^2=13^2$, so they form a right triangle.",
          },
        ],
        keyFormulas: [
          { name: "Pythagorean Theorem", statement: "$a^2+b^2=c^2$, where $c$ is the hypotenuse." },
          { name: "Converse classification", statement: "For $a\\le b<c$: compare $a^2+b^2$ with $c^2$; $=$ right, $<$ obtuse, $>$ acute." },
        ],
        workedExample: {
          problem: "A right triangle has hypotenuse $17$ cm and one leg $8$ cm. Find the other leg.",
          solution: "Let the unknown leg be $x$.\n\n$x^2+8^2=17^2$\n$x^2=289-64=225$\n$x=\\sqrt{225}=15$\n\nThe other leg is **$15$ cm**. The negative square root is not a possible side length.",
        },
      },
      questions: [
        {
          id: "geo-u2-21-pyth-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A right triangle has side lengths $6$, $8$, and $10$. Which equation correctly uses the Pythagorean Theorem?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$6^2+10^2=8^2$" },
              { id: "b", text: "$6^2+8^2=10^2$" },
              { id: "c", text: "$6+8=10$" },
              { id: "d", text: "$6^2+8^2+10^2=0$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Pythagorean Theorem", statement: "For legs $a,b$ and hypotenuse $c$, $a^2+b^2=c^2$." },
              { kind: "definition", name: "Hypotenuse", statement: "The hypotenuse is opposite the right angle and is the longest side." },
            ],
            steps: [
              { reasoning: "The longest side, $10$, is the hypotenuse, so it must be the side represented by $c$.", working: "c=10", marks: 1, markCode: "B" },
              { reasoning: "The remaining sides are legs, so their squares add to the square of the hypotenuse.", working: "6^2+8^2=10^2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** $6^2+8^2=10^2$",
            commonErrors: ["Using the middle side as the hypotenuse.", "Adding the side lengths without squaring them."],
          },
        },
        {
          id: "geo-u2-21-pyth-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A right triangle has hypotenuse $13$ inches and one leg $5$ inches. Find the length of the other leg, in inches.",
          response: { type: "numeric", parts: [{ label: "Other leg", answer: 12, unit: "in" }] },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Pythagorean Theorem", statement: "For a right triangle, the sum of the squares of the legs equals the square of the hypotenuse: $a^2+b^2=c^2$." },
              { kind: "property", name: "Positive side length", statement: "A side length is positive, so use the nonnegative square root." },
            ],
            steps: [
              { reasoning: "Let $x$ be the missing leg and substitute the known leg and hypotenuse.", working: "x^2+5^2=13^2", marks: 1, markCode: "M" },
              { reasoning: "Isolate the squared unknown.", working: "x^2=169-25=144", marks: 1, markCode: "A" },
              { reasoning: "Take the positive square root to obtain the side length.", working: "x=\\sqrt{144}=12", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$12$ inches",
            commonErrors: ["Subtracting $13$ from $5$ instead of subtracting their squares.", "Reporting $-12$ as a side length."],
          },
        },
        {
          id: "geo-u2-21-pyth-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A triangle has side lengths $9$, $12$, and $16$. Use the converse of the Pythagorean Theorem to determine whether the triangle is acute, right, or obtuse. Show the comparison that supports your answer.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Converse of the Pythagorean Theorem", statement: "For side lengths $a\\le b<c$, if $a^2+b^2=c^2$ the triangle is right." },
              { kind: "principle", name: "Angle classification by side squares", statement: "For $a\\le b<c$, $a^2+b^2<c^2$ means obtuse and $a^2+b^2>c^2$ means acute." },
            ],
            steps: [
              { reasoning: "Identify the longest side as $c$ before making the comparison.", working: "a=9,\\quad b=12,\\quad c=16", marks: 1, markCode: "M" },
              { reasoning: "Square and add the two shorter sides.", working: "9^2+12^2=81+144=225", marks: 1, markCode: "A" },
              { reasoning: "Square the longest side and compare the results.", working: "16^2=256,\\quad 225<256", marks: 1, markCode: "A" },
              { reasoning: "Because the sum of the shorter-side squares is less than the longest-side square, the angle opposite the longest side is obtuse.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "The triangle is **obtuse** because $9^2+12^2=225<256=16^2$.",
            commonErrors: ["Calling the triangle right because the side lengths are close to a familiar triple.", "Comparing against a side other than the longest side."],
            examinerNote: "Award the classification reasoning mark only when the student states the correct inequality and connects it to obtuse classification.",
          },
        },
        {
          id: "geo-u2-21-pyth-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Triangle $ABC$ has a right angle at $B$, with $AB=9$ and $BC=12$. Point $D$ lies on the hypotenuse $\\overline{AC}$ so that $\\overline{BD}$ is perpendicular to $\\overline{AC}$ (the altitude from $B$). A second triangle $ACE$ is attached on the other side of $\\overline{AC}$, with $CE=20$ and $AE=25$.",
          parts: [
            { label: "a", prompt: "Find $AC$.", marks: 2 },
            { label: "b", prompt: "Find the area of $\\triangle ABC$ and use it to find the altitude $BD$.", marks: 2 },
            { label: "c", prompt: "Find $AD$ using the Pythagorean Theorem in $\\triangle ABD$.", marks: 2 },
            { label: "d", prompt: "Show that $\\triangle ACE$ is a right triangle and state where the right angle is.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Pythagorean Theorem", statement: "In a right triangle with legs $a,b$ and hypotenuse $c$, $a^2+b^2=c^2$." },
              { kind: "theorem", name: "Converse of the Pythagorean Theorem", statement: "If $a^2+b^2=c^2$ for the side lengths of a triangle, with $c$ the longest, the angle opposite $c$ is a right angle." },
              { kind: "formula", name: "Triangle area", statement: "Area $=\\frac12\\times\\text{base}\\times\\text{height}$, which can be computed with either leg pair or hypotenuse and altitude." },
            ],
            steps: [
              { part: "a", reasoning: "Apply the Pythagorean Theorem; $AC$ is the hypotenuse.", working: "AC^2=9^2+12^2=81+144=225", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Take the positive root.", working: "AC=15", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Use the legs as base and height, then equate to the area computed with base $AC$ and height $BD$.", working: "\\tfrac12(9)(12)=54=\\tfrac12(15)(BD)", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Solve for $BD$.", working: "BD=\\frac{108}{15}=7.2", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$\\triangle ABD$ is right-angled at $D$ with hypotenuse $AB$.", working: "AD^2=9^2-7.2^2=81-51.84", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate (check: $5.4^2=29.16$).", working: "AD^2=29.16 \\implies AD=5.4", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Order the sides of $\\triangle ACE$: the longest is $AE=25$. Compare squares.", working: "AC^2+CE^2=15^2+20^2=225+400=625", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Since $625=25^2=AE^2$, the converse of the Pythagorean Theorem gives a right angle opposite $AE$, which is at $C$.", working: "m\\angle ACE=90^\\circ", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $AC=15$. (b) Area $54$, $BD=7.2$. (c) $AD=5.4$. (d) $15^2+20^2=25^2$, so $\\triangle ACE$ is right with the right angle at $C$.",
            commonErrors: ["Using $AB$ as a leg and $BC$ as the hypotenuse in (a).", "Taking the altitude $BD$ to equal a leg or to be half of $AC$.", "Placing the right angle at $A$ or $E$ in (d) rather than opposite the longest side."],
          },
        },
      ],
    },
    {
      id: "geo-u2-distance-and-triangle-classification",
      title: "Distance and classifying triangle angles",
      skill: "Apply right-triangle side relationships to coordinate distance and classify triangles by their largest angle.",
      lesson: {
        sections: [
          {
            heading: "Distance on a coordinate plane",
            body: "The horizontal and vertical changes between two points form the legs of a right triangle; the segment joining the points is its hypotenuse. If the points are $(x_1,y_1)$ and $(x_2,y_2)$, the leg lengths are $|x_2-x_1|$ and $|y_2-y_1|$. Applying the Pythagorean Theorem gives the distance formula.\n\nSubtract coordinates in the same order within each difference, then square. Squaring makes the sign of each difference irrelevant. Keep the exact square-root form unless a decimal is requested.",
          },
          {
            heading: "Use the longest side to classify a triangle",
            body: "For side lengths $a\\le b<c$, the angle opposite $c$ is the largest angle. Compare $a^2+b^2$ and $c^2$: if they are equal, that angle is right; if the sum is greater, it is acute; if the sum is less, it is obtuse. The acute case means all three angles are acute, since the largest one is acute.\n\nThis comparison is also a practical way to check a proposed right-triangle side set. First verify that the lengths can form a triangle, then test the squares. The converse does not require drawing the triangle.",
          },
        ],
        keyFormulas: [
          { name: "Distance formula", statement: "$d=\\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}$" },
          { name: "Triangle classification", statement: "For $a\\le b<c$: $a^2+b^2>c^2$ acute; $=c^2$ right; $<c^2$ obtuse." },
        ],
        workedExample: {
          problem: "Find the distance between $(-2, 1)$ and $(4, 9)$.",
          solution: "The horizontal change is $4-(-2)=6$ and the vertical change is $9-1=8$.\n\n$d=\\sqrt{6^2+8^2}=\\sqrt{36+64}=\\sqrt{100}=10$\n\nThe points are **$10$ units apart**.",
        },
      },
      questions: [
        {
          id: "geo-u2-21-dist-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the distance between the points $(1, 2)$ and $(4, 6)$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$5$ units" },
              { id: "b", text: "$7$ units" },
              { id: "c", text: "$\\sqrt{7}$ units" },
              { id: "d", text: "$25$ units" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Distance formula", statement: "The distance between $(x_1,y_1)$ and $(x_2,y_2)$ is $\\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}$." },
              { kind: "theorem", name: "Pythagorean Theorem", statement: "The distance is the hypotenuse of a right triangle whose legs are the horizontal and vertical changes." },
            ],
            steps: [
              { reasoning: "Calculate the horizontal and vertical changes between the coordinates.", working: "\\Delta x=4-1=3,\\quad \\Delta y=6-2=4", marks: 1, markCode: "M" },
              { reasoning: "Use these perpendicular changes as the legs and calculate the hypotenuse.", working: "d=\\sqrt{3^2+4^2}=\\sqrt{25}=5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $5$ units",
            commonErrors: ["Adding the horizontal and vertical changes to get $7$.", "Giving the squared distance, $25$, instead of the distance."],
          },
        },
        {
          id: "geo-u2-21-dist-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Find the exact distance between $(-3, 2)$ and $(5, 8)$.",
          response: { type: "numeric", parts: [{ label: "Distance", answer: 10, unit: "units" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Distance formula", statement: "$d=\\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}$." },
              { kind: "theorem", name: "Pythagorean Theorem", statement: "The coordinate changes are the legs of a right triangle and the distance is the hypotenuse." },
            ],
            steps: [
              { reasoning: "Determine the horizontal and vertical changes.", working: "\\Delta x=5-(-3)=8,\\quad \\Delta y=8-2=6", marks: 1, markCode: "M" },
              { reasoning: "Square and add the changes under a square root.", working: "d=\\sqrt{8^2+6^2}=\\sqrt{64+36}", marks: 1, markCode: "M" },
              { reasoning: "Simplify to find the distance in units.", working: "d=\\sqrt{100}=10", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$10$ units",
            commonErrors: ["Using $5-3$ instead of $5-(-3)$ for the horizontal change.", "Reporting $100$ rather than its square root."],
          },
        },
        {
          id: "geo-u2-21-dist-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A triangle has side lengths $7$, $10$, and $12$. Determine whether it is acute, right, or obtuse. Explain why testing only whether the sides are whole numbers would not establish that the triangle is right.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Triangle inequality", statement: "Three positive side lengths form a triangle when the sum of any two sides is greater than the third." },
              { kind: "theorem", name: "Converse of the Pythagorean Theorem", statement: "For $a\\le b<c$, compare $a^2+b^2$ with $c^2$ to classify the angle opposite $c$." },
            ],
            steps: [
              { reasoning: "Confirm the longest side and that the lengths satisfy the triangle inequality.", working: "7+10>12", marks: 1, markCode: "M" },
              { reasoning: "Calculate the sum of the squares of the shorter sides.", working: "7^2+10^2=49+100=149", marks: 1, markCode: "A" },
              { reasoning: "Compare this with the square of the longest side.", working: "12^2=144,\\quad 149>144", marks: 1, markCode: "A" },
              { reasoning: "The comparison proves the largest angle is acute. Whole-number side lengths alone do not imply the equality required for a right triangle.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "The triangle is **acute** because $7^2+10^2=149>144=12^2$. Whole-number lengths alone do not prove the Pythagorean equality.",
            commonErrors: ["Assuming any triangle with integer sides is right.", "Classifying from side lengths without squaring and comparing."],
            examinerNote: "A complete response both classifies the triangle and addresses why integer side lengths are insufficient evidence of a right angle.",
          },
        },
        {
          id: "geo-u2-21-dist-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "On a coordinate grid, triangle $ABC$ has vertices $A(1,2)$, $B(9,2)$ and $C(3,8)$. The diagram shows $\\overline{AB}$ lying along the horizontal line $y=2$, with $C$ above and left of the midpoint of $\\overline{AB}$.",
          parts: [
            { label: "a", prompt: "Find $AB$, $AC^2$ and $BC^2$.", marks: 2 },
            { label: "b", prompt: "Classify $\\triangle ABC$ as acute, right or obtuse, showing the comparison with the longest side.", marks: 2 },
            { label: "c", prompt: "Find the perimeter of $\\triangle ABC$ to the nearest tenth.", marks: 2 },
            { label: "d", prompt: "Point $C'(1,8)$ replaces $C$. Show that $\\triangle ABC'$ is a right triangle and identify the right angle.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Distance formula", statement: "$d=\\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}$, from the Pythagorean Theorem." },
              { kind: "theorem", name: "Converse classification", statement: "For $a\\le b<c$: $a^2+b^2>c^2$ means acute, $=$ right, $<$ obtuse." },
            ],
            steps: [
              { part: "a", reasoning: "$AB$ is horizontal, so subtract $x$-coordinates.", working: "AB=9-1=8", marks: 1, markCode: "B" },
              { part: "a", reasoning: "Use the distance formula (squared) for the other two sides.", working: "AC^2=(3-1)^2+(8-2)^2=4+36=40,\\quad BC^2=(3-9)^2+(8-2)^2=36+36=72", marks: 1, markCode: "A" },
              { part: "b", reasoning: "The longest side is $BC$ since $72>64>40$. Compare the sum of the other two squares with $72$.", working: "AB^2+AC^2=64+40=104", marks: 1, markCode: "M" },
              { part: "b", reasoning: "$104>72$, so the angle opposite the longest side is acute and the triangle is acute.", working: "104>72 \\implies \\text{acute}", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Take square roots of the squared lengths.", working: "AC=\\sqrt{40}\\approx6.325,\\quad BC=\\sqrt{72}\\approx8.485", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Add the three sides.", working: "8+6.325+8.485\\approx22.8", marks: 1, markCode: "A" },
              { part: "d", reasoning: "$AB=8$, $AC'=8-2$ is vertical so $AC'=6$, and $BC'^2=(9-1)^2+(2-8)^2=64+36=100$.", working: "AB=8,\\quad AC'=6,\\quad BC'=10", marks: 1, markCode: "M" },
              { part: "d", reasoning: "$8^2+6^2=100=10^2$, so by the converse of the Pythagorean Theorem the right angle is opposite $BC'$, at $A$.", working: "m\\angle BAC'=90^\\circ", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $AB=8$, $AC^2=40$, $BC^2=72$. (b) Acute, since $64+40=104>72$. (c) $\\approx22.8$. (d) $AB^2+AC'^2=BC'^2$ ($64+36=100$), so the right angle is at $A$.",
            commonErrors: ["Comparing against $AB^2$ even though $BC$ is the longest side.", "Forgetting to square-root before summing for the perimeter (adding $8+40+72$).", "Placing the right angle at $B$ or $C'$ in (d)."],
          },
        },
      ],
    },
  ],
};
