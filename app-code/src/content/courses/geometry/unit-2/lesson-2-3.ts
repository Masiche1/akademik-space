import type { Lesson } from "../../../types.ts";

export const lesson23: Lesson = {
  id: "geo-u2-lesson-2-3",
  code: "2-3",
  title: "Right Triangle Trigonometry",
  goal: "I CAN use sine, cosine, and tangent and their inverses to solve right triangles and model angles of elevation and depression.",
  standards: ["HSG-SRT.C.6", "HSG-SRT.C.7", "HSG-SRT.C.8"],
  vocabulary: [
    { term: "Sine", definition: "For an acute angle in a right triangle, the ratio of opposite leg to hypotenuse: $\\sin\\theta=\\dfrac{\\text{opposite}}{\\text{hypotenuse}}$." },
    { term: "Cosine", definition: "For an acute angle in a right triangle, the ratio of adjacent leg to hypotenuse: $\\cos\\theta=\\dfrac{\\text{adjacent}}{\\text{hypotenuse}}$." },
    { term: "Tangent", definition: "For an acute angle in a right triangle, the ratio of opposite leg to adjacent leg: $\\tan\\theta=\\dfrac{\\text{opposite}}{\\text{adjacent}}$." },
    { term: "Inverse trigonometric function", definition: "An operation such as $\\sin^{-1}$, $\\cos^{-1}$, or $\\tan^{-1}$ that finds an angle from a side ratio." },
    { term: "Angle of elevation", definition: "The angle measured upward from a horizontal line of sight to an object above the observer." },
    { term: "Angle of depression", definition: "The angle measured downward from a horizontal line of sight to an object below the observer." },
    { term: "Cofunction identity", definition: "For an acute angle $x$, $\\sin x=\\cos(90^\\circ-x)$; sine of an angle equals cosine of its complement." },
  ],
  concepts: [
    {
      id: "geo-u2-trig-ratios-inverse",
      title: "Trigonometric ratios and inverse trigonometry",
      skill: "Choose sine, cosine, or tangent to find a side or use an inverse ratio to find an acute angle.",
      lesson: {
        sections: [
          {
            heading: "Name sides relative to the angle",
            body: "Choose one of the acute angles as the reference angle. The **opposite** side is across from it, the **adjacent** leg touches it, and the hypotenuse is across from the right angle. These labels depend on the chosen acute angle; the hypotenuse never changes.\n\nUse SOH-CAH-TOA: $\\sin\\theta=\\frac{\\text{opposite}}{\\text{hypotenuse}}$, $\\cos\\theta=\\frac{\\text{adjacent}}{\\text{hypotenuse}}$, and $\\tan\\theta=\\frac{\\text{opposite}}{\\text{adjacent}}$. Select the ratio containing the known side, the unknown side, and the reference angle.",
          },
          {
            heading: "Solve for a side or an angle",
            body: "Write an equation before calculating. For example, if the opposite side is unknown and the adjacent side is known, use tangent and multiply the adjacent side by $\\tan\\theta$. Use a calculator in degree mode when angles are given in degrees. Round only at the final step.\n\nTo find an angle, use the inverse of the chosen ratio: $\\theta=\\sin^{-1}(o/h)$, $\\theta=\\cos^{-1}(a/h)$, or $\\theta=\\tan^{-1}(o/a)$. The notation $\\sin^{-1}$ means inverse sine here, not the reciprocal $1/\\sin$.",
          },
        ],
        keyFormulas: [
          { name: "SOH", statement: "$\\sin\\theta=\\dfrac{\\text{opposite}}{\\text{hypotenuse}}$" },
          { name: "CAH", statement: "$\\cos\\theta=\\dfrac{\\text{adjacent}}{\\text{hypotenuse}}$" },
          { name: "TOA", statement: "$\\tan\\theta=\\dfrac{\\text{opposite}}{\\text{adjacent}}$" },
          { name: "Inverse ratios", statement: "$\\theta=\\sin^{-1}(o/h)$, $\\theta=\\cos^{-1}(a/h)$, or $\\theta=\\tan^{-1}(o/a)$" },
        ],
        workedExample: {
          problem: "A right triangle has an acute angle of $35^\\circ$ and an adjacent leg of $12$ cm. Find the hypotenuse to the nearest tenth of a centimeter.",
          solution: "The adjacent side and hypotenuse use cosine.\n\n$\\cos 35^\\circ=\\dfrac{12}{h}$\n$h=\\dfrac{12}{\\cos 35^\\circ}\\approx 14.6$\n\nThe hypotenuse is **$14.6$ cm** to the nearest tenth.",
        },
      },
      questions: [
        {
          id: "geo-u2-23-ratios-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "In a right triangle, relative to angle $\\theta$, the opposite side is $5$ and the hypotenuse is $13$. Which equation gives $\\sin\\theta$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\dfrac{13}{5}$" },
              { id: "b", text: "$\\dfrac{5}{13}$" },
              { id: "c", text: "$\\dfrac{12}{5}$" },
              { id: "d", text: "$\\dfrac{12}{13}$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Sine ratio", statement: "$\\sin\\theta=\\dfrac{\\text{opposite}}{\\text{hypotenuse}}$." },
              { kind: "principle", name: "Reference-angle labeling", statement: "Opposite and adjacent are named relative to the selected acute angle; the hypotenuse is opposite the right angle." },
            ],
            steps: [
              { reasoning: "Select the sine ratio because the question asks for sine.", working: "\\sin\\theta=\\dfrac{\\text{opposite}}{\\text{hypotenuse}}", marks: 1, markCode: "M" },
              { reasoning: "Substitute the given opposite side and hypotenuse.", working: "\\sin\\theta=\\dfrac{5}{13}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** $\\dfrac{5}{13}$",
            commonErrors: ["Using the adjacent side instead of the opposite side.", "Inverting the ratio to hypotenuse over opposite."],
          },
        },
        {
          id: "geo-u2-23-ratios-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A right triangle has an acute angle of $28^\\circ$ and an adjacent leg of $15$ cm. Find the opposite leg to the nearest tenth of a centimeter.",
          response: { type: "numeric", parts: [{ label: "Opposite leg", answer: 8, tolerance: 0.05, unit: "cm" }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Tangent ratio", statement: "$\\tan\\theta=\\dfrac{\\text{opposite}}{\\text{adjacent}}$." },
              { kind: "principle", name: "Degree-mode calculation", statement: "When the angle is measured in degrees, evaluate the trigonometric ratio in degree mode." },
            ],
            steps: [
              { reasoning: "The unknown is opposite and the known leg is adjacent, so choose tangent.", working: "\\tan 28^\\circ=\\dfrac{o}{15}", marks: 1, markCode: "M" },
              { reasoning: "Isolate the opposite side by multiplying by the adjacent length.", working: "o=15\\tan 28^\\circ", marks: 1, markCode: "M" },
              { reasoning: "Evaluate and round to the nearest tenth.", working: "o\\approx 7.98\\approx 8.0\\text{ cm}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$8.0$ cm",
            commonErrors: ["Using cosine, which relates adjacent to hypotenuse.", "Dividing by $\\tan 28^\\circ$ instead of multiplying."],
          },
        },
        {
          id: "geo-u2-23-ratios-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A right triangle has an opposite leg of $11$ cm and an adjacent leg of $17$ cm relative to angle $\\theta$. Find $\\theta$ to the nearest tenth of a degree.",
          response: { type: "numeric", parts: [{ label: "Angle", answer: 32.9, tolerance: 0.05, unit: "degrees" }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Tangent ratio", statement: "$\\tan\\theta=\\dfrac{\\text{opposite}}{\\text{adjacent}}$." },
              { kind: "principle", name: "Inverse tangent", statement: "If $\\tan\\theta=r$, then the acute angle is $\\theta=\\tan^{-1}(r)$." },
            ],
            steps: [
              { reasoning: "Use tangent because both legs are known and they are opposite and adjacent to $\\theta$.", working: "\\tan\\theta=\\dfrac{11}{17}", marks: 1, markCode: "M" },
              { reasoning: "Apply inverse tangent to solve for the angle.", working: "\\theta=\\tan^{-1}\\left(\\dfrac{11}{17}\\right)", marks: 1, markCode: "M" },
              { reasoning: "Evaluate in degree mode.", working: "\\theta\\approx 32.9^\\circ", marks: 1, markCode: "A" },
              { reasoning: "Round the angle to the nearest tenth of a degree and include its unit.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$32.9^\\circ$",
            commonErrors: ["Using $\\sin^{-1}(11/17)$ although the hypotenuse is not given.", "Entering $17/11$ for tangent, reversing opposite and adjacent."],
          },
        },
        {
          id: "geo-u2-23-ratios-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Right triangle $ABC$ has its right angle at $C$, $m\\angle A=38^\\circ$ and hypotenuse $AB=25$. The diagram shows $\\overline{AC}$ as the horizontal base and $\\overline{BC}$ vertical. Point $D$ lies on $\\overline{AC}$ with $CD=9$, and $\\overline{BD}$ is drawn. Round lengths and angles to the nearest tenth, using unrounded values in later steps.",
          parts: [
            { label: "a", prompt: "Find $BC$.", marks: 2 },
            { label: "b", prompt: "Find $AC$ and verify it with the Pythagorean Theorem.", marks: 2 },
            { label: "c", prompt: "Find $m\\angle B$ in $\\triangle ABC$ and show that $\\sin 38^\\circ=\\cos B$ for this triangle.", marks: 2 },
            { label: "d", prompt: "Find $m\\angle CBD$.", marks: 2 },
          ],
          response: { type: "numeric", parts: [{ label: "(a) $BC$", answer: 15.4, tolerance: 0.1 }, { label: "(b) $AC$", answer: 19.7, tolerance: 0.1 }, { label: "(c) $m\\angle B$", answer: 52, tolerance: 0.1 }, { label: "(d) $m\\angle CBD$", answer: 30.3, tolerance: 0.15 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "SOH-CAH-TOA", statement: "$\\sin\\theta=\\frac{o}{h}$, $\\cos\\theta=\\frac{a}{h}$, $\\tan\\theta=\\frac{o}{a}$." },
              { kind: "theorem", name: "Triangle angle sum and cofunctions", statement: "Acute angles of a right triangle are complementary, and $\\sin\\theta=\\cos(90^\\circ-\\theta)$." },
              { kind: "theorem", name: "Pythagorean Theorem", statement: "$a^2+b^2=c^2$ for legs $a,b$ and hypotenuse $c$." },
            ],
            steps: [
              { part: "a", reasoning: "$BC$ is opposite $38^\\circ$ and $AB$ is the hypotenuse, so use sine.", working: "\\sin38^\\circ=\\frac{BC}{25}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Solve with the calculator in degree mode.", working: "BC=25\\sin38^\\circ\\approx15.4", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$AC$ is adjacent to $38^\\circ$, so use cosine.", working: "AC=25\\cos38^\\circ\\approx19.7", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Verify with the Pythagorean Theorem.", working: "15.39^2+19.70^2\\approx236.9+388.1=625=25^2", marks: 1, markCode: "R" },
              { part: "c", reasoning: "The acute angles are complementary.", working: "m\\angle B=90^\\circ-38^\\circ=52^\\circ", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Side $BC$ is opposite $A$ and adjacent to $B$, so both ratios equal $BC/AB$.", working: "\\sin38^\\circ=\\frac{BC}{AB}=\\cos52^\\circ", marks: 1, markCode: "R" },
              { part: "d", reasoning: "In right $\\triangle CBD$, $CD=9$ is opposite $\\angle CBD$ and $BC$ is adjacent, so use tangent.", working: "\\tan(\\angle CBD)=\\frac{9}{25\\sin38^\\circ}\\approx\\frac{9}{15.39}\\approx0.5847", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Apply the inverse tangent.", working: "m\\angle CBD=\\tan^{-1}(0.5847)\\approx30.3^\\circ", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $BC\\approx15.4$. (b) $AC\\approx19.7$. (c) $m\\angle B=52^\\circ$, and $\\sin38^\\circ=\\cos52^\\circ$. (d) $m\\angle CBD\\approx30.3^\\circ$.",
            commonErrors: ["Using cosine for $BC$ (swapping opposite and adjacent).", "Using $\\tan^{-1}(15.4/9)$ in (d), which gives the angle at $D$.", "Calculator in radian mode."],
          },
        },
      ],
    },
    {
      id: "geo-u2-elevation-depression-cofunctions",
      title: "Angles of elevation, depression, and cofunctions",
      skill: "Represent a line-of-sight situation with a right triangle, solve it trigonometrically, and connect complementary sine and cosine ratios.",
      lesson: {
        sections: [
          {
            heading: "Translate a line-of-sight situation",
            body: "An angle of elevation is measured upward from the observer's horizontal line; an angle of depression is measured downward from a horizontal line. Draw a horizontal through each observer or observer-like point, then draw the line of sight. Parallel horizontal lines create alternate interior angles, so the angle of depression from one point equals the corresponding angle of elevation from the other.\n\nMark the vertical height and horizontal distance as the legs of a right triangle. The line of sight is the hypotenuse. Choose sine, cosine, or tangent based on the sides known and requested, then solve with the angle in degrees.",
          },
          {
            heading: "Use complementary angles",
            body: "The two acute angles in a right triangle are complementary: if one is $x$, the other is $90^\\circ-x$. Relative to these two angles, a side that is opposite one is adjacent to the other. Therefore, $\\sin x=\\cos(90^\\circ-x)$, a cofunction identity.\n\nFor instance, $\\sin 32^\\circ=\\cos 58^\\circ$. This identity can verify a ratio or replace a sine with the cosine of the complementary angle; it does not mean $\\sin x=\\cos x$ for every angle.",
          },
        ],
        keyFormulas: [
          { name: "Angle of depression and elevation", statement: "With parallel horizontal lines, the angle of depression equals the corresponding angle of elevation." },
          { name: "Cofunction identity", statement: "$\\sin x=\\cos(90^\\circ-x)$ for acute $x$." },
          { name: "Tangent for height and horizontal distance", statement: "$\\tan\\theta=\\dfrac{\\text{vertical height}}{\\text{horizontal distance}}$" },
        ],
        workedExample: {
          problem: "A person stands $24$ m from the base of a tower. The angle of elevation to the top is $38^\\circ$. Find the tower's height to the nearest tenth of a meter.",
          solution: "The height is opposite the angle, and the horizontal distance is adjacent.\n\n$\\tan 38^\\circ=\\dfrac{h}{24}$\n$h=24\\tan 38^\\circ\\approx 18.8$\n\nThe tower is **$18.8$ m** tall to the nearest tenth.",
        },
      },
      questions: [
        {
          id: "geo-u2-23-elev-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A student on level ground looks upward at the top of a tree. The angle between the student's horizontal line of sight and the line of sight to the top is called what?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Angle of elevation" },
              { id: "b", text: "Angle of incidence" },
              { id: "c", text: "Angle of depression" },
              { id: "d", text: "Right angle" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Angle of elevation", statement: "The angle measured upward from a horizontal line of sight to an object above the observer." },
              { kind: "definition", name: "Angle of depression", statement: "The angle measured downward from a horizontal line of sight to an object below the observer." },
            ],
            steps: [
              { reasoning: "The tree is above the student, and the line of sight tilts upward from the horizontal.", marks: 1, markCode: "R" },
              { reasoning: "An upward line-of-sight angle from the horizontal is an angle of elevation.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Angle of elevation",
            commonErrors: ["Confusing the observer's upward view with an angle of depression, which is measured downward."],
          },
        },
        {
          id: "geo-u2-23-elev-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "From the top of a $30$ m observation platform, the angle of depression to a point on level ground is $25^\\circ$. How far is the point horizontally from the base of the platform? Give your answer to the nearest tenth of a meter.",
          response: { type: "numeric", parts: [{ label: "Horizontal distance", answer: 64.3, tolerance: 0.05, unit: "m" }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Equal angles with parallel horizontals", statement: "The angle of depression equals the corresponding angle of elevation because the horizontal lines are parallel." },
              { kind: "definition", name: "Tangent ratio", statement: "$\\tan\\theta=\\dfrac{\\text{opposite}}{\\text{adjacent}}$." },
            ],
            steps: [
              { reasoning: "Use the equal angle of elevation at the ground point; the platform height is opposite and the horizontal distance $d$ is adjacent.", working: "\\tan 25^\\circ=\\dfrac{30}{d}", marks: 1, markCode: "M" },
              { reasoning: "Rearrange to isolate the horizontal distance.", working: "d=\\dfrac{30}{\\tan 25^\\circ}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate and round to the nearest tenth of a meter.", working: "d\\approx 64.3\\text{ m}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$64.3$ m",
            commonErrors: ["Multiplying $30$ by $\\tan 25^\\circ$ instead of dividing.", "Treating the angle of depression as measured from the vertical."],
          },
        },
        {
          id: "geo-u2-23-elev-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A right triangle has acute angles $x$ and $90^\\circ-x$. Explain why $\\sin x=\\cos(90^\\circ-x)$. Then use the identity to rewrite $\\sin 37^\\circ$ as a cosine, and state the measure of the angle of depression corresponding to an angle of elevation of $37^\\circ$ when the horizontal lines are parallel.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Complementary acute angles", statement: "The two acute angles of a right triangle sum to $90^\\circ$." },
              { kind: "definition", name: "Sine and cosine", statement: "Sine is opposite over hypotenuse; cosine is adjacent over hypotenuse." },
              { kind: "principle", name: "Cofunction identity and parallel lines", statement: "$\\sin x=\\cos(90^\\circ-x)$, and corresponding alternate interior angles made by parallel horizontal lines are equal." },
            ],
            steps: [
              { reasoning: "The second acute angle is complementary to $x$.", working: "x+(90^\\circ-x)=90^\\circ", marks: 1, markCode: "R" },
              { reasoning: "The side opposite $x$ is adjacent to the complementary angle, and both ratios share the hypotenuse.", working: "\\sin x=\\dfrac{\\text{opposite }x}{h}=\\dfrac{\\text{adjacent }(90^\\circ-x)}{h}=\\cos(90^\\circ-x)", marks: 1, markCode: "R" },
              { reasoning: "Substitute $x=37^\\circ$ to write the cofunction form.", working: "\\sin 37^\\circ=\\cos 53^\\circ", marks: 1, markCode: "A" },
              { reasoning: "The corresponding depression and elevation angles are equal when the horizontal lines are parallel.", working: "\\text{angle of depression}=37^\\circ", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\sin x=\\cos(90^\\circ-x)$ because the opposite side for one acute angle is adjacent for its complement. Thus $\\sin 37^\\circ=\\cos 53^\\circ$, and the corresponding angle of depression is $37^\\circ$.",
            commonErrors: ["Writing $\\cos 37^\\circ$ as the cofunction instead of using the complement $53^\\circ$.", "Claiming the angle of depression is $53^\\circ$ rather than the corresponding elevation angle."],
            examinerNote: "A complete explanation must connect the side definitions to the cofunction identity, not merely quote the identity.",
          },
        },
        {
          id: "geo-u2-23-elev-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "An observer stands at the top $T$ of a vertical cliff that is $40$ m above sea level; the base of the cliff is $F$. A boat $B$ is on the sea in the same vertical plane, and the observer sees it at an angle of depression of $25^\\circ$ from the horizontal. The diagram shows right triangle $TFB$ with the right angle at $F$, the horizontal line through $T$ above $\\overline{FB}$, and the line of sight $\\overline{TB}$. Round to the nearest tenth, using unrounded values in later steps.",
          parts: [
            { label: "a", prompt: "State the angle of elevation of $T$ as seen from the boat, and justify it.", marks: 2 },
            { label: "b", prompt: "Find the horizontal distance $FB$.", marks: 2 },
            { label: "c", prompt: "Find the line-of-sight distance $TB$ using sine, and show how a cofunction gives the same ratio using the angle at $T$.", marks: 2 },
            { label: "d", prompt: "The boat sails $30$ m straight toward the cliff. Find the new angle of depression.", marks: 2 },
          ],
          response: { type: "numeric", parts: [{ label: "(a) angle of elevation", answer: 25, tolerance: 0.1 }, { label: "(b) $FB$", answer: 85.8, tolerance: 0.1 }, { label: "(c) $TB$", answer: 94.6, tolerance: 0.1 }, { label: "(d) new angle of depression", answer: 35.6, tolerance: 0.15 }] },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Alternate interior angles", statement: "The horizontal line through $T$ is parallel to the sea level $\\overline{FB}$, so the angle of depression equals the angle of elevation." },
              { kind: "definition", name: "SOH-CAH-TOA", statement: "$\\sin\\theta=\\frac{o}{h}$, $\\cos\\theta=\\frac{a}{h}$, $\\tan\\theta=\\frac{o}{a}$." },
              { kind: "theorem", name: "Cofunction identity", statement: "$\\sin\\theta=\\cos(90^\\circ-\\theta)$." },
            ],
            steps: [
              { part: "a", reasoning: "The horizontal through $T$ and the sea level are parallel, and $TB$ is a transversal, so the depression angle and the angle $\\angle TBF$ are alternate interior angles.", marks: 1, markCode: "R" },
              { part: "a", reasoning: "Therefore the angle of elevation equals the angle of depression.", working: "m\\angle TBF=25^\\circ", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$TF=40$ is opposite and $FB$ is adjacent to $25^\\circ$, so use tangent.", working: "\\tan25^\\circ=\\frac{40}{FB}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Solve for $FB$.", working: "FB=\\frac{40}{\\tan25^\\circ}\\approx85.8\\text{ m}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$TF$ is opposite $25^\\circ$ and $TB$ is the hypotenuse, so use sine.", working: "TB=\\frac{40}{\\sin25^\\circ}\\approx94.6\\text{ m}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "The angle at $T$ is $90^\\circ-25^\\circ=65^\\circ$, and $TF$ is adjacent to it, so cosine gives the same value because $\\cos65^\\circ=\\sin25^\\circ$.", working: "TB=\\frac{40}{\\cos65^\\circ}\\approx94.6", marks: 1, markCode: "R" },
              { part: "d", reasoning: "The new horizontal distance is the old one minus $30$ (unrounded $85.78$).", working: "FB'=85.78-30=55.78", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Use inverse tangent for the new angle (equal to the angle of depression by alternate interior angles).", working: "\\theta=\\tan^{-1}\\left(\\frac{40}{55.78}\\right)\\approx35.6^\\circ", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $25^\\circ$ (alternate interior angles). (b) $FB\\approx85.8$ m. (c) $TB\\approx94.6$ m, $\\sin25^\\circ=\\cos65^\\circ$. (d) $\\approx35.6^\\circ$.",
            commonErrors: ["Inverting the ratio inside $\\tan^{-1}$ in (d), or reporting the angle at $T$ instead of the depression angle.", "Treating the angle of depression as measured from the vertical.", "Using sine for $FB$ instead of tangent."],
          },
        },
      ],
    },
  ],
};
