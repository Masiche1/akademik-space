import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "aisl-u3-lesson-3-2",
  code: "3-2",
  title: "Trigonometry in Context",
  goal: "I CAN solve triangles with right-angled trigonometry and the sine and cosine rules, find areas, and solve bearing, elevation and depression problems.",
  standards: ["SL 3.2", "SL 3.3"],
  vocabulary: [
    { term: "Sine rule", definition: "In any triangle, $\\dfrac{a}{\\sin A} = \\dfrac{b}{\\sin B} = \\dfrac{c}{\\sin C}$." },
    { term: "Cosine rule", definition: "$c^2 = a^2 + b^2 - 2ab\\cos C$, or $\\cos C = \\dfrac{a^2 + b^2 - c^2}{2ab}$." },
    { term: "Area of a triangle", definition: "$A = \\frac{1}{2}ab\\sin C$, where $C$ is the angle between sides $a$ and $b$." },
    { term: "Bearing", definition: "A direction measured clockwise from north, written with three digits, for example $045^\\circ$." },
    { term: "Angle of elevation", definition: "The angle above the horizontal from the observer up to an object." },
    { term: "Angle of depression", definition: "The angle below the horizontal from the observer down to an object." },
  ],
  concepts: [
    {
      id: "aisl-u3-triangle-trig",
      title: "Sine rule, cosine rule and area",
      skill: "Choose and apply right-angled trigonometry, the sine rule, the cosine rule and the area formula to solve triangle problems.",
      lesson: {
        sections: [
          {
            heading: "Choosing the right tool",
            body: "For a right-angled triangle use $\\sin$, $\\cos$, $\\tan$ and Pythagoras. For other triangles: use the **cosine rule** when you know two sides and the included angle (SAS) or all three sides (SSS); use the **sine rule** when you know two angles and a side (AAS) or two sides and a non-included angle (SSA).",
          },
          {
            heading: "The ambiguous case",
            body: "With two sides and a non-included angle, the sine rule can give two possible angles $\\theta$ and $180^\\circ - \\theta$. Check whether the second angle gives a valid triangle (the angles must sum to less than $180^\\circ$) and whether the context allows both.",
          },
          {
            heading: "Area of a triangle",
            body: "When two sides $a$ and $b$ and the included angle $C$ are known, area $= \\frac{1}{2}ab\\sin C$. Make sure your GDC is in degree mode, and round only at the end to 3 significant figures.",
          },
        ],
        keyFormulas: [
          { name: "Sine rule", statement: "$\\dfrac{a}{\\sin A} = \\dfrac{b}{\\sin B} = \\dfrac{c}{\\sin C}$" },
          { name: "Cosine rule", statement: "$c^2 = a^2 + b^2 - 2ab\\cos C$" },
          { name: "Area", statement: "$A = \\frac{1}{2}ab\\sin C$" },
        ],
        workedExample: {
          problem: "In triangle $ABC$, $a = 7$, $b = 9$ and $C = 50^\\circ$. Find the area.",
          solution: "$A = \\frac{1}{2}(7)(9)\\sin 50^\\circ = 31.5 \\times 0.76604 = 24.1$ square units.",
        },
      },
      questions: [
        {
          id: "aisl-u3-triangle-trig-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "In a right-angled triangle, the hypotenuse is $10$ cm and one angle is $30^\\circ$. Find the length of the side opposite the $30^\\circ$ angle.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$5$ cm" },
              { id: "b", text: "$8.66$ cm" },
              { id: "c", text: "$20$ cm" },
              { id: "d", text: "$17.3$ cm" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Sine ratio", statement: "$\\sin\\theta = \\dfrac{\\text{opposite}}{\\text{hypotenuse}}$" },
            ],
            steps: [
              { reasoning: "Use the sine ratio.", working: "x = 10\\sin 30^\\circ", marks: 1, markCode: "M" },
              { reasoning: "Evaluate with $\\sin 30^\\circ = 0.5$.", working: "x = 5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $5$ cm",
            commonErrors: ["Using cosine, giving the adjacent side $8.66$.", "Dividing by $\\sin 30^\\circ$, giving $20$."],
          },
        },
        {
          id: "aisl-u3-triangle-trig-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "In triangle $ABC$, $BC = 7$ cm, $AC = 9$ cm and angle $ACB = 50^\\circ$. Find the area of the triangle, in cm$^2$, to 3 significant figures.",
          response: { type: "numeric", parts: [{ label: "Area (cm$^2$)", answer: 24.1, tolerance: 0.05 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Area of a triangle", statement: "$A = \\frac{1}{2}ab\\sin C$" },
            ],
            steps: [
              { reasoning: "The angle $50^\\circ$ lies between the sides $7$ and $9$.", working: "A = \\frac{1}{2}(7)(9)\\sin 50^\\circ", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "31.5 \\times 0.76604", marks: 1, markCode: "A" },
              { reasoning: "Round to 3 significant figures.", working: "24.1", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$24.1$ cm$^2$",
            commonErrors: ["Omitting the factor $\\frac{1}{2}$, giving $48.3$.", "Using a calculator in radian mode."],
          },
        },
        {
          id: "aisl-u3-triangle-trig-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "In triangle $PQR$, $PQ = 8$ cm, $QR = 11$ cm and angle $PQR = 65^\\circ$. Find the length of $PR$, in cm, to 3 significant figures.",
          response: { type: "numeric", parts: [{ label: "$PR$ (cm)", answer: 10.5, tolerance: 0.05 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Cosine rule", statement: "$c^2 = a^2 + b^2 - 2ab\\cos C$" },
            ],
            steps: [
              { reasoning: "Two sides and the included angle are known, so use the cosine rule.", working: "PR^2 = 8^2 + 11^2 - 2(8)(11)\\cos 65^\\circ", marks: 1, markCode: "M" },
              { reasoning: "Evaluate the terms.", working: "PR^2 = 185 - 176(0.42262)", marks: 1, markCode: "A" },
              { reasoning: "Simplify.", working: "PR^2 = 110.62", marks: 1, markCode: "A" },
              { reasoning: "Take the square root and round.", working: "PR = 10.5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$PR = 10.5$ cm",
            commonErrors: ["Computing $(8^2 + 11^2 - 2\\times 8\\times 11)\\cos 65^\\circ$.", "Forgetting to take the square root."],
          },
        },
        {
          id: "aisl-u3-triangle-trig-q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 10,
          stem: "A farmer has a triangular field $PQR$ with $PQ = 120$ m, $QR = 150$ m and angle $PQR = 70^\\circ$.",
          parts: [
            { label: "a", prompt: "Find the length of $PR$. Give your answer to 3 significant figures.", marks: 3 },
            { label: "b", prompt: "Find the size of angle $QPR$. Give your answer in degrees to 3 significant figures.", marks: 3 },
            { label: "c", prompt: "Find the area of the field, in m$^2$, to 3 significant figures.", marks: 2 },
            { label: "d", prompt: "The farmer fences the whole boundary of the field at a cost of $\\$12.50$ per metre. Find the total cost, to the nearest dollar.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Cosine rule", statement: "$c^2 = a^2 + b^2 - 2ab\\cos C$" },
              { kind: "formula", name: "Sine rule", statement: "$\\frac{a}{\\sin A} = \\frac{b}{\\sin B}$" },
              { kind: "formula", name: "Area of a triangle", statement: "$A = \\frac{1}{2}ab\\sin C$" },
            ],
            steps: [
              { part: "a", reasoning: "Two sides and the included angle: use the cosine rule.", working: "PR^2 = 120^2 + 150^2 - 2(120)(150)\\cos 70^\\circ", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate.", working: "PR^2 = 36\\,900 - 12\\,312.7 = 24\\,587.3", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Take the square root and round.", working: "PR = 157 \\text{ m}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Use the sine rule with the known angle $Q$ opposite $PR$.", working: "\\frac{\\sin P}{150} = \\frac{\\sin 70^\\circ}{156.80}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Rearrange.", working: "\\sin P = \\frac{150\\sin 70^\\circ}{156.80} = 0.8989", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$PR$ is the longest side, so $P$ is acute.", working: "P = 64.0^\\circ", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Use the area formula with the included angle at $Q$.", working: "A = \\frac{1}{2}(120)(150)\\sin 70^\\circ", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate and round.", working: "8457 \\approx 8460 \\text{ m}^2", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Find the perimeter using the unrounded $PR$.", working: "120 + 150 + 156.80 = 426.80", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Multiply by the cost per metre.", working: "426.80 \\times 12.5 = 5335", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $157$ m. (b) $64.0^\\circ$. (c) $8460$ m$^2$. (d) $\\$5335$.",
            commonErrors: ["Using the rounded value $157$ in later calculations.", "Using the sine rule in (a) when the unknown side is opposite the known angle with insufficient data."],
          },
        },
        {
          id: "aisl-u3-triangle-trig-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "In a right-angled triangle, the hypotenuse is $20$ cm and one acute angle is $25^\\circ$. Find the length of the side adjacent to the $25^\\circ$ angle.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$18.1$ cm" },
              { id: "b", text: "$8.45$ cm" },
              { id: "c", text: "$21.4$ cm" },
              { id: "d", text: "$11.9$ cm" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Cosine ratio", statement: "$\\cos\\theta = \\dfrac{\\text{adjacent}}{\\text{hypotenuse}}$" },
            ],
            steps: [
              { reasoning: "Adjacent side is hypotenuse times cosine.", working: "x = 20\\cos 25^\\circ", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "x = 18.1 \\text{ cm}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $18.1$ cm",
            commonErrors: ["Using sine, giving the opposite side $8.45$.", "Dividing by cosine instead of multiplying."],
          },
        },
        {
          id: "aisl-u3-triangle-trig-q6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "In triangle $ABC$, angle $A = 30^\\circ$, side $a = 5$ cm and side $b = 8$ cm. One possible value of angle $B$ is",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$53.1^\\circ$" },
              { id: "b", text: "$36.9^\\circ$" },
              { id: "c", text: "$126.9^\\circ$" },
              { id: "d", text: "$23.6^\\circ$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Sine rule", statement: "$\\dfrac{a}{\\sin A} = \\dfrac{b}{\\sin B}$" },
            ],
            steps: [
              { reasoning: "Apply the sine rule.", working: "\\sin B = \\frac{8 \\sin 30^\\circ}{5} = 0.8", marks: 1, markCode: "M" },
              { reasoning: "Take the inverse sine (the acute solution).", working: "B = 53.1^\\circ", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $53.1^\\circ$",
            commonErrors: ["Computing $180^\\circ - 53.1^\\circ = 126.9^\\circ$, which is the second possible solution of the ambiguous case.", "Using $\\cos$ instead of $\\sin$."],
            examinerNote: "The ambiguous case also allows $B = 126.9^\\circ$ since $30^\\circ + 126.9^\\circ < 180^\\circ$.",
          },
        },
        {
          id: "aisl-u3-triangle-trig-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A triangle has sides $5$ cm, $7$ cm and $9$ cm. Find the size of the largest angle, in degrees to 3 significant figures.",
          response: { type: "numeric", parts: [{ label: "Angle ($^\\circ$)", answer: 95.7, tolerance: 0.05 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Cosine rule", statement: "$\\cos C = \\dfrac{a^2 + b^2 - c^2}{2ab}$" },
            ],
            steps: [
              { reasoning: "The largest angle is opposite the longest side $9$.", working: "\\cos C = \\frac{5^2 + 7^2 - 9^2}{2 \\times 5 \\times 7}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate the cosine.", working: "\\cos C = \\frac{-7}{70} = -0.1", marks: 1, markCode: "A" },
              { reasoning: "Take the inverse cosine; the angle is obtuse.", working: "C = 95.7^\\circ", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$95.7^\\circ$",
            commonErrors: ["Taking $\\cos^{-1}$ of a positive value by misplacing the longest side.", "Forgetting that a negative cosine gives an obtuse angle."],
          },
        },
        {
          id: "aisl-u3-triangle-trig-q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Two sides of a triangle are $12$ cm and $15$ cm, and the angle between them is $110^\\circ$. Find the area of the triangle, in cm$^2$, to 3 significant figures.",
          response: { type: "numeric", parts: [{ label: "Area (cm$^2$)", answer: 84.6, tolerance: 0.05 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Area of a triangle", statement: "$A = \\frac{1}{2}ab\\sin C$" },
            ],
            steps: [
              { reasoning: "Substitute the two sides and the included angle.", working: "A = \\frac{1}{2}(12)(15)\\sin 110^\\circ", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "90 \\times 0.93969", marks: 1, markCode: "A" },
              { reasoning: "Round to 3 significant figures.", working: "84.6", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$84.6$ cm$^2$",
            commonErrors: ["Omitting the factor $\\frac{1}{2}$, giving $169$.", "Using $\\cos 110^\\circ$ instead of $\\sin 110^\\circ$."],
          },
        },
        {
          id: "aisl-u3-triangle-trig-q9",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "In the ambiguous case of the sine rule (two sides and a non-included angle), the second possible value of the unknown angle $\\theta$ is",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$180^\\circ - \\theta$" },
              { id: "b", text: "$90^\\circ - \\theta$" },
              { id: "c", text: "$\\theta / 2$" },
              { id: "d", text: "$360^\\circ - \\theta$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Sine of supplementary angles", statement: "$\\sin\\theta = \\sin(180^\\circ - \\theta)$, so the sine rule can give two angles." },
            ],
            steps: [
              { reasoning: "Recall that sine is equal for supplementary angles.", working: "\\sin\\theta = \\sin(180^\\circ - \\theta)", marks: 1, markCode: "M" },
              { reasoning: "Select the matching option.", working: "180^\\circ - \\theta", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $180^\\circ - \\theta$",
            commonErrors: ["Forgetting to check whether the second angle gives a valid triangle."],
          },
        },
        {
          id: "aisl-u3-triangle-trig-q10",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A triangle has sides $6$ cm, $9$ cm and $13$ cm. To find the size of the largest angle, the appropriate method is",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "the cosine rule rearranged as $\\cos C = \\dfrac{a^2 + b^2 - c^2}{2ab}$" },
              { id: "b", text: "the sine rule $\\dfrac{a}{\\sin A} = \\dfrac{b}{\\sin B}$" },
              { id: "c", text: "the area formula $A = \\frac{1}{2}ab\\sin C$" },
              { id: "d", text: "Pythagoras' theorem" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Choosing the rule", statement: "With three sides known (SSS), use the cosine rule to find an angle." },
            ],
            steps: [
              { reasoning: "All three sides are known, so the cosine rule is needed.", working: "\\cos C = \\frac{a^2 + b^2 - c^2}{2ab}", marks: 1, markCode: "M" },
              { reasoning: "Select the matching option.", working: "\\text{Option (a)}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** the cosine rule rearranged",
            commonErrors: ["Using the sine rule, which needs an angle as well as a side."],
          },
        },
        {
          id: "aisl-u3-triangle-trig-q11",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 5,
          stem: "In triangle $ABC$, $AB = 10$ cm, $AC = 14$ cm and angle $BAC = 75^\\circ$. Find (i) the length of $BC$ and (ii) the area of the triangle, in cm$^2$, each to 3 significant figures.",
          response: {
            type: "numeric",
            parts: [
              { label: "$BC$ (cm)", answer: 14.9, tolerance: 0.05 },
              { label: "Area (cm$^2$)", answer: 67.6, tolerance: 0.05 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Cosine rule", statement: "$c^2 = a^2 + b^2 - 2ab\\cos C$" },
              { kind: "formula", name: "Area of a triangle", statement: "$A = \\frac{1}{2}ab\\sin C$" },
            ],
            steps: [
              { reasoning: "Two sides and the included angle are known; use the cosine rule for $BC$.", working: "BC^2 = 10^2 + 14^2 - 2(10)(14)\\cos 75^\\circ", marks: 1, markCode: "M" },
              { reasoning: "Evaluate and take the square root.", working: "BC^2 = 223.5 \\Rightarrow BC = 14.9 \\text{ cm}", marks: 1, markCode: "A" },
              { reasoning: "Apply the area formula with the included angle at $A$.", working: "A = \\frac{1}{2}(10)(14)\\sin 75^\\circ", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "70 \\times 0.96593 = 67.6", marks: 1, markCode: "A" },
              { reasoning: "State both answers to 3 significant figures.", working: "BC = 14.9 \\text{ cm},\\; A = 67.6 \\text{ cm}^2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$BC = 14.9$ cm; area $= 67.6$ cm$^2$",
            commonErrors: ["Using the cosine rule for the area.", "Using $\\cos 75^\\circ$ instead of $\\sin 75^\\circ$ in the area."],
          },
        },
        {
          id: "aisl-u3-triangle-trig-q12",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "In triangle $DEF$, angle $D = 40^\\circ$, side $d = 12$ cm (opposite $D$) and side $e = 10$ cm. Find the size of angle $E$, in degrees to 3 significant figures.",
          response: { type: "numeric", parts: [{ label: "Angle $E$ ($^\\circ$)", answer: 32.4, tolerance: 0.05 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Sine rule", statement: "$\\dfrac{d}{\\sin D} = \\dfrac{e}{\\sin E}$" },
            ],
            steps: [
              { reasoning: "Two sides and a non-included angle are known; use the sine rule.", working: "\\sin E = \\frac{10 \\sin 40^\\circ}{12}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate the sine; the obtuse candidate $147.6^\\circ$ is rejected since $40^\\circ + 147.6^\\circ > 180^\\circ$.", working: "\\sin E = 0.5357 \\Rightarrow E = 32.4^\\circ", marks: 1, markCode: "A" },
              { reasoning: "State the angle to 3 significant figures.", working: "E = 32.4^\\circ", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$E = 32.4^\\circ$",
            commonErrors: ["Accepting $147.6^\\circ$ without checking the angle sum."],
            examinerNote: "Only the acute solution is valid here because $D + 180^\\circ - E_{\\text{acute}} > 180^\\circ$.",
          },
        },
        {
          id: "aisl-u3-triangle-trig-q13",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "A farmer has a triangular field $PQR$ with $PQ = 25$ m, $QR = 40$ m and angle $PQR = 110^\\circ$.",
          parts: [
            { label: "a", prompt: "Find the length of $PR$. Give your answer to 3 significant figures.", marks: 3 },
            { label: "b", prompt: "Find the size of angle $QPR$. Give your answer in degrees to 3 significant figures.", marks: 3 },
            { label: "c", prompt: "Find the area of the field, in m$^2$, to 3 significant figures.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Cosine rule", statement: "$c^2 = a^2 + b^2 - 2ab\\cos C$" },
              { kind: "formula", name: "Sine rule", statement: "$\\frac{a}{\\sin A} = \\frac{b}{\\sin B}$" },
              { kind: "formula", name: "Area of a triangle", statement: "$A = \\frac{1}{2}ab\\sin C$" },
            ],
            steps: [
              { part: "a", reasoning: "Two sides and the included angle are known; use the cosine rule.", working: "PR^2 = 25^2 + 40^2 - 2(25)(40)\\cos 110^\\circ", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate, noting $\\cos 110^\\circ < 0$.", working: "PR^2 = 2225 + 684.0 = 2909", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Take the square root and round.", working: "PR = 53.9 \\text{ m}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Use the sine rule with side $QR = 40$ opposite angle $P$.", working: "\\sin P = \\frac{40 \\sin 110^\\circ}{53.935}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate; the obtuse candidate is rejected since $110^\\circ$ is already used at $Q$.", working: "\\sin P = 0.6966 \\Rightarrow P = 44.2^\\circ", marks: 1, markCode: "A" },
              { part: "b", reasoning: "State the angle to 3 significant figures.", working: "P = 44.2^\\circ", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Use the area formula with the included angle at $Q$.", working: "A = \\frac{1}{2}(25)(40)\\sin 110^\\circ", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate and round.", working: "469.8 \\approx 470 \\text{ m}^2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $53.9$ m. (b) $44.2^\\circ$. (c) $470$ m$^2$.",
            commonErrors: ["Using the rounded $53.9$ in part (b) is acceptable, but using a wrong side in the sine rule is not.", "Forgetting that $\\cos 110^\\circ$ is negative."],
          },
        },
        {
          id: "aisl-u3-triangle-trig-q14",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 2,
          stem: "A triangle has sides $7$ cm, $8$ cm and $13$ cm. The size of the largest angle is",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$120^\\circ$" },
              { id: "b", text: "$60^\\circ$" },
              { id: "c", text: "$90^\\circ$" },
              { id: "d", text: "$109^\\circ$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Cosine rule", statement: "$\\cos C = \\dfrac{a^2 + b^2 - c^2}{2ab}$" },
            ],
            steps: [
              { reasoning: "The largest angle is opposite the side $13$.", working: "\\cos C = \\frac{7^2 + 8^2 - 13^2}{2 \\times 7 \\times 8} = \\frac{-56}{112} = -0.5", marks: 1, markCode: "M" },
              { reasoning: "Take the inverse cosine.", working: "C = 120^\\circ", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $120^\\circ$",
            commonErrors: ["Computing $\\cos^{-1}(0.5) = 60^\\circ$ by dropping the sign."],
          },
        },
        {
          id: "aisl-u3-triangle-trig-q15",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The value of $\\frac{1}{2} \\times 9 \\times 11 \\times \\sin 60^\\circ$ is approximately",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$42.9$" },
              { id: "b", text: "$85.7$" },
              { id: "c", text: "$49.5$" },
              { id: "d", text: "$21.4$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Area of a triangle", statement: "$A = \\frac{1}{2}ab\\sin C$" },
            ],
            steps: [
              { reasoning: "This is the area formula with $a = 9$, $b = 11$, $C = 60^\\circ$.", working: "A = \\frac{1}{2}(9)(11)\\sin 60^\\circ = 49.5 \\times 0.8660", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "A = 42.9", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $42.9$",
            commonErrors: ["Omitting the factor $\\frac{1}{2}$, giving $85.7$.", "Using $\\cos 60^\\circ = 0.5$ instead of $\\sin 60^\\circ$."],
          },
        },
        {
          id: "aisl-u3-triangle-trig-q16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "In triangle $ABC$, $AB = 14$ cm, $AC = 9$ cm and angle $BAC = 50^\\circ$.",
          parts: [
            { label: "a", prompt: "Find the length of $BC$. Give your answer to 3 significant figures.", marks: 3 },
            { label: "b", prompt: "Find the area of the triangle, in cm$^2$, to 3 significant figures.", marks: 2 },
            { label: "c", prompt: "Find the size of angle $ABC$. Give your answer in degrees to 3 significant figures.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Cosine rule", statement: "$c^2 = a^2 + b^2 - 2ab\\cos C$" },
              { kind: "formula", name: "Sine rule", statement: "$\\frac{a}{\\sin A} = \\frac{b}{\\sin B}$" },
              { kind: "formula", name: "Area of a triangle", statement: "$A = \\frac{1}{2}ab\\sin C$" },
            ],
            steps: [
              { part: "a", reasoning: "Two sides and the included angle are known; use the cosine rule.", working: "BC^2 = 14^2 + 9^2 - 2(14)(9)\\cos 50^\\circ", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate.", working: "BC^2 = 277 - 162.0 = 115.0", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Take the square root and round.", working: "BC = 10.7 \\text{ cm}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Use the area formula with the included angle at $A$.", working: "A = \\frac{1}{2}(14)(9)\\sin 50^\\circ", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate and round.", working: "63 \\times 0.7660 = 48.3 \\text{ cm}^2", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Use the sine rule with side $AC = 9$ opposite angle $B$.", working: "\\sin B = \\frac{9 \\sin 50^\\circ}{10.72}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate; the obtuse candidate $140^\\circ$ is rejected since $50^\\circ + 140^\\circ > 180^\\circ$.", working: "\\sin B = 0.6430 \\Rightarrow B = 40.0^\\circ", marks: 1, markCode: "A" },
              { part: "c", reasoning: "State the angle to 3 significant figures.", working: "B = 40.0^\\circ", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $10.7$ cm. (b) $48.3$ cm$^2$. (c) $40.0^\\circ$.",
            commonErrors: ["Using $AB = 14$ as the side opposite angle $B$.", "Accepting the obtuse candidate without checking the angle sum."],
          },
        },
      ],
    },
    {
      id: "aisl-u3-bearings-elevation",
      title: "Bearings, elevation and depression",
      skill: "Model navigation and observation problems using bearings, angles of elevation and depression, and the triangle rules.",
      lesson: {
        sections: [
          {
            heading: "Bearings",
            body: "A bearing is measured clockwise from north using three digits. The bearing of $B$ from $A$ and the bearing of $A$ from $B$ differ by $180^\\circ$ (add $180^\\circ$ if the first is less than $180^\\circ$, otherwise subtract). Draw a north line at every point where a direction is given, and use alternate angles between parallel north lines.",
          },
          {
            heading: "Elevation and depression",
            body: "An angle of elevation is measured upward from the horizontal; an angle of depression is measured downward from the horizontal. The angle of depression from $A$ to $B$ equals the angle of elevation from $B$ to $A$ (alternate angles). Draw a right-angled triangle with a horizontal and a vertical side.",
          },
          {
            heading: "Combining with triangle rules",
            body: "Most bearing problems produce a non-right-angled triangle with a known included angle. Find that angle from the bearings, then use the cosine rule for a missing side and the sine rule for a missing angle. To state a final bearing, relate the triangle angle back to the north line.",
          },
        ],
        keyFormulas: [
          { name: "Reverse bearing", statement: "$\\text{back bearing} = \\text{bearing} \\pm 180^\\circ$" },
          { name: "Height from elevation", statement: "$h = d\\tan\\theta$" },
        ],
        workedExample: {
          problem: "From a point $50$ m from the base of a tower, the angle of elevation to the top is $35^\\circ$. Find the height of the tower.",
          solution: "$h = 50\\tan 35^\\circ = 50 \\times 0.7002 = 35.0$ m.",
        },
      },
      questions: [
        {
          id: "aisl-u3-bearings-elevation-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 1,
          stem: "The bearing of a lighthouse $B$ from a ship $A$ is $070^\\circ$. Find the bearing of the ship $A$ from the lighthouse $B$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$250^\\circ$" },
              { id: "b", text: "$110^\\circ$" },
              { id: "c", text: "$290^\\circ$" },
              { id: "d", text: "$070^\\circ$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Back bearing", statement: "The reverse bearing differs by $180^\\circ$." },
            ],
            steps: [
              { reasoning: "Add $180^\\circ$ since $70^\\circ < 180^\\circ$.", working: "70 + 180 = 250", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $250^\\circ$",
            commonErrors: ["Subtracting from $180^\\circ$, giving $110^\\circ$."],
          },
        },
        {
          id: "aisl-u3-bearings-elevation-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "From a point on level ground $50$ m from the base of a tower, the angle of elevation of the top of the tower is $35^\\circ$. Find the height of the tower, in metres, to 3 significant figures.",
          response: { type: "numeric", parts: [{ label: "Height (m)", answer: 35, tolerance: 0.05 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Tangent ratio", statement: "$\\tan\\theta = \\frac{\\text{opposite}}{\\text{adjacent}}$" },
            ],
            steps: [
              { reasoning: "Height is opposite the angle, distance is adjacent.", working: "\\tan 35^\\circ = \\frac{h}{50}", marks: 1, markCode: "M" },
              { reasoning: "Rearrange.", working: "h = 50\\tan 35^\\circ", marks: 1, markCode: "A" },
              { reasoning: "Evaluate.", working: "h = 35.0", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$35.0$ m",
            commonErrors: ["Dividing: $h = 50 / \\tan 35^\\circ = 71.4$.", "Using sine instead of tangent."],
          },
        },
        {
          id: "aisl-u3-bearings-elevation-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "A ship leaves port $P$ and sails $12$ km on a bearing of $060^\\circ$ to point $Q$. It then sails $9$ km on a bearing of $130^\\circ$ to point $R$. Find the distance $PR$, in km, to 3 significant figures.",
          response: { type: "numeric", parts: [{ label: "$PR$ (km)", answer: 17.3, tolerance: 0.05 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Cosine rule", statement: "$c^2 = a^2 + b^2 - 2ab\\cos C$" },
              { kind: "property", name: "Co-interior angles", statement: "North lines are parallel, so angles between them and the path add to $180^\\circ$." },
            ],
            steps: [
              { reasoning: "The back bearing of $P$ from $Q$ is $240^\\circ$. The angle between $QP$ and $QR$ is $240 - 130$.", working: "\\angle PQR = 110^\\circ", marks: 1, markCode: "M" },
              { reasoning: "Apply the cosine rule.", working: "PR^2 = 12^2 + 9^2 - 2(12)(9)\\cos 110^\\circ", marks: 1, markCode: "M" },
              { reasoning: "Evaluate, noting $\\cos 110^\\circ$ is negative.", working: "PR^2 = 225 + 73.88 = 298.88", marks: 1, markCode: "A" },
              { reasoning: "Take the square root.", working: "PR = 17.3 \\text{ km}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$17.3$ km",
            commonErrors: ["Using $70^\\circ$ as the included angle.", "Using $130 - 60 = 70^\\circ$ without finding the interior angle."],
          },
        },
        {
          id: "aisl-u3-bearings-elevation-q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 10,
          stem: "Two ships $B$ and $C$ are observed from a harbour $A$. Ship $B$ is $18$ km from $A$ on a bearing of $040^\\circ$. Ship $C$ is $25$ km from $A$ on a bearing of $115^\\circ$.",
          parts: [
            { label: "a", prompt: "Write down the size of angle $BAC$.", marks: 1 },
            { label: "b", prompt: "Find the distance $BC$. Give your answer to 3 significant figures.", marks: 3 },
            { label: "c", prompt: "Find the bearing of $C$ from $B$, to the nearest degree.", marks: 4 },
            { label: "d", prompt: "Find the area of triangle $ABC$, in km$^2$, to 3 significant figures.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Cosine rule", statement: "$c^2 = a^2 + b^2 - 2ab\\cos C$" },
              { kind: "formula", name: "Sine rule", statement: "$\\frac{\\sin A}{a} = \\frac{\\sin B}{b}$" },
              { kind: "formula", name: "Area of a triangle", statement: "$A = \\frac{1}{2}ab\\sin C$" },
            ],
            steps: [
              { part: "a", reasoning: "Subtract the two bearings.", working: "115 - 40 = 75^\\circ", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Two sides and the included angle: cosine rule.", working: "BC^2 = 18^2 + 25^2 - 2(18)(25)\\cos 75^\\circ", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate.", working: "BC^2 = 949 - 232.94 = 716.06", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Square root.", working: "BC = 26.8 \\text{ km}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Sine rule to find angle $ABC$, opposite side $AC = 25$.", working: "\\frac{\\sin \\angle ABC}{25} = \\frac{\\sin 75^\\circ}{26.76}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate; $AC$ is not the longest side, so the angle is acute.", working: "\\angle ABC = 64.5^\\circ", marks: 1, markCode: "A" },
              { part: "c", reasoning: "The bearing of $A$ from $B$ is $040 + 180 = 220^\\circ$. $C$ lies anticlockwise of $A$ as seen from $B$, so subtract.", working: "220 - 64.5", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State the bearing to the nearest degree.", working: "156^\\circ", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Use the area formula with the included angle at $A$.", working: "\\frac{1}{2}(18)(25)\\sin 75^\\circ", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Evaluate.", working: "217 \\text{ km}^2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $75^\\circ$. (b) $26.8$ km. (c) $156^\\circ$. (d) $217$ km$^2$.",
            commonErrors: ["Adding $64.5^\\circ$ to $220^\\circ$ to get $285^\\circ$.", "Stating the bearing of $B$ from $C$ instead."],
            examinerNote: "Accept $155^\\circ$ or $156^\\circ$ depending on intermediate rounding.",
          },
        },
        {
          id: "aisl-u3-bearings-elevation-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The bearing of a mountain $M$ from a hiker $H$ is $200^\\circ$. Find the bearing of the hiker $H$ from the mountain $M$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$020^\\circ$" },
              { id: "b", text: "$340^\\circ$" },
              { id: "c", text: "$160^\\circ$" },
              { id: "d", text: "$200^\\circ$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Back bearing", statement: "The reverse bearing differs by $180^\\circ$." },
            ],
            steps: [
              { reasoning: "$200^\\circ > 180^\\circ$, so subtract $180^\\circ$.", working: "200 - 180 = 20", marks: 1, markCode: "M" },
              { reasoning: "Write the bearing with three digits.", working: "020^\\circ", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $020^\\circ$",
            commonErrors: ["Adding $180^\\circ$ to get $380^\\circ$, which is invalid.", "Subtracting from $360^\\circ$ instead of $180^\\circ$."],
          },
        },
        {
          id: "aisl-u3-bearings-elevation-q6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The bearing of point $B$ from point $A$ is $305^\\circ$. Find the bearing of point $A$ from point $B$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$125^\\circ$" },
              { id: "b", text: "$235^\\circ$" },
              { id: "c", text: "$55^\\circ$" },
              { id: "d", text: "$305^\\circ$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Back bearing", statement: "The reverse bearing differs by $180^\\circ$." },
            ],
            steps: [
              { reasoning: "$305^\\circ > 180^\\circ$, so subtract $180^\\circ$.", working: "305 - 180 = 125", marks: 1, markCode: "M" },
              { reasoning: "State the bearing.", working: "125^\\circ", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $125^\\circ$",
            commonErrors: ["Adding $180^\\circ$ to get $485^\\circ$ instead of reducing modulo $360^\\circ$."],
          },
        },
        {
          id: "aisl-u3-bearings-elevation-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "From the top of a vertical cliff $45$ m high, the angle of depression of a boat is $18^\\circ$. Find the horizontal distance of the boat from the base of the cliff, in metres, to 3 significant figures.",
          response: { type: "numeric", parts: [{ label: "Distance (m)", answer: 138, tolerance: 0.5 }] },
          markscheme: {
            principles: [
              { kind: "property", name: "Angle of depression", statement: "The angle of depression equals the angle of elevation from the boat to the top of the cliff." },
              { kind: "formula", name: "Tangent ratio", statement: "$\\tan\\theta = \\dfrac{\\text{opposite}}{\\text{adjacent}}$" },
            ],
            steps: [
              { reasoning: "In the right-angled triangle, the height $45$ m is opposite the angle and the distance $d$ is adjacent.", working: "\\tan 18^\\circ = \\frac{45}{d}", marks: 1, markCode: "M" },
              { reasoning: "Rearrange.", working: "d = \\frac{45}{\\tan 18^\\circ}", marks: 1, markCode: "A" },
              { reasoning: "Evaluate.", working: "d = 138 \\text{ m}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$138$ m",
            commonErrors: ["Multiplying: $d = 45 \\tan 18^\\circ = 14.6$.", "Using sine instead of tangent."],
          },
        },
        {
          id: "aisl-u3-bearings-elevation-q8",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "A ship sails $10$ km from port $A$ on a bearing of $090^\\circ$ to point $B$, then sails $10$ km on a bearing of $000^\\circ$ to point $C$.",
          response: {
            type: "numeric",
            parts: [
              { label: "Distance $AC$ (km)", answer: 14.1, tolerance: 0.05 },
              { label: "Bearing of $C$ from $A$ (degrees)", answer: 45, tolerance: 0.5 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Co-interior angles", statement: "North lines are parallel, so the interior angle between the two legs is $90^\\circ$." },
              { kind: "theorem", name: "Pythagoras", statement: "$a^2 + b^2 = c^2$" },
            ],
            steps: [
              { reasoning: "The back bearing of $A$ from $B$ is $270^\\circ$, so the angle between $BA$ and $BC$ is $|270^\\circ - 0^\\circ|$ reduced to the acute angle, which is $90^\\circ$.", working: "\\angle ABC = 90^\\circ", marks: 1, markCode: "M" },
              { reasoning: "Triangle $ABC$ is right-angled at $B$ with legs $10$ and $10$; apply Pythagoras.", working: "AC = \\sqrt{10^2 + 10^2} = \\sqrt{200}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate the distance.", working: "AC = 14.1 \\text{ km}", marks: 1, markCode: "A" },
              { reasoning: "The legs are equal, so $C$ lies on the bisector of the turn; the bearing of $C$ from $A$ is $090^\\circ - 45^\\circ$.", working: "090 - 45 = 045^\\circ \\Rightarrow 45^\\circ", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$AC = 14.1$ km; bearing $045^\\circ$",
            commonErrors: ["Adding the bearings instead of finding the interior angle.", "Giving the bearing of $A$ from $C$ instead."],
          },
        },
        {
          id: "aisl-u3-bearings-elevation-q9",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A ship sails from $P$ to $Q$ on a bearing of $050^\\circ$, then from $Q$ to $R$ on a bearing of $140^\\circ$. Find the size of angle $PQR$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$90^\\circ$" },
              { id: "b", text: "$50^\\circ$" },
              { id: "c", text: "$140^\\circ$" },
              { id: "d", text: "$40^\\circ$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Back bearing and parallel north lines", statement: "The back bearing of $P$ from $Q$ is $230^\\circ$; subtract the bearing of $R$ from $Q$." },
            ],
            steps: [
              { reasoning: "The back bearing of $QP$ is $050 + 180 = 230^\\circ$.", working: "230 - 140 = 90", marks: 1, markCode: "M" },
              { reasoning: "State the angle.", working: "\\angle PQR = 90^\\circ", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $90^\\circ$",
            commonErrors: ["Subtracting $140 - 50 = 90$ by luck or $140 - 230$ without the back bearing."],
          },
        },
        {
          id: "aisl-u3-bearings-elevation-q10",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "From a point on level ground $25$ m from the base of a vertical building, the angle of elevation of the top is $60^\\circ$. Find the height of the building, in metres.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$43.3$" },
              { id: "b", text: "$14.4$" },
              { id: "c", text: "$50.0$" },
              { id: "d", text: "$21.7$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Tangent ratio", statement: "$h = d\\tan\\theta$" },
            ],
            steps: [
              { reasoning: "Height is opposite the angle, distance is adjacent.", working: "h = 25\\tan 60^\\circ", marks: 1, markCode: "M" },
              { reasoning: "Evaluate with $\\tan 60^\\circ = \\sqrt{3}$.", working: "h = 43.3 \\text{ m}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $43.3$ m",
            commonErrors: ["Dividing by $\\tan 60^\\circ$, giving $14.4$."],
          },
        },
        {
          id: "aisl-u3-bearings-elevation-q11",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "From point $A$, point $B$ is $18$ km away on a bearing of $040^\\circ$. From point $B$, point $C$ is $24$ km away on a bearing of $130^\\circ$. Find the distance $AC$, in km.",
          response: { type: "numeric", parts: [{ label: "$AC$ (km)", answer: 30, tolerance: 0.01 }] },
          markscheme: {
            principles: [
              { kind: "property", name: "Back bearing", statement: "The bearing of $A$ from $B$ is $040 + 180 = 220^\\circ$." },
              { kind: "theorem", name: "Pythagoras", statement: "$a^2 + b^2 = c^2$" },
            ],
            steps: [
              { reasoning: "Find the interior angle at $B$ using the back bearing.", working: "\\angle ABC = 220 - 130 = 90^\\circ", marks: 1, markCode: "M" },
              { reasoning: "Triangle $ABC$ is right-angled at $B$ with legs $18$ and $24$; apply Pythagoras.", working: "AC^2 = 18^2 + 24^2 = 900", marks: 1, markCode: "M" },
              { reasoning: "Take the square root.", working: "AC = 30 \\text{ km}", marks: 1, markCode: "A" },
              { reasoning: "State the distance.", working: "AC = 30 \\text{ km}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$AC = 30$ km",
            commonErrors: ["Using $130 - 40 = 90$ directly without the back bearing (same answer here by luck, but the method must be shown).", "Adding the legs instead of using Pythagoras."],
          },
        },
        {
          id: "aisl-u3-bearings-elevation-q12",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 11,
          stem: "Two ships are observed from a port $P$. Ship $S_1$ is $20$ km from $P$ on a bearing of $020^\\circ$. Ship $S_2$ is $40$ km from $P$ on a bearing of $065^\\circ$.",
          parts: [
            { label: "a", prompt: "Write down the size of angle $S_1PS_2$.", marks: 2 },
            { label: "b", prompt: "Find the distance $S_1S_2$. Give your answer to 3 significant figures.", marks: 3 },
            { label: "c", prompt: "Find the bearing of $S_1$ from $S_2$, to the nearest degree.", marks: 4 },
            { label: "d", prompt: "Find the area of triangle $PS_1S_2$, in km$^2$, to 3 significant figures.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Cosine rule", statement: "$c^2 = a^2 + b^2 - 2ab\\cos C$" },
              { kind: "formula", name: "Sine rule", statement: "$\\frac{a}{\\sin A} = \\frac{b}{\\sin B}$" },
              { kind: "formula", name: "Area of a triangle", statement: "$A = \\frac{1}{2}ab\\sin C$" },
            ],
            steps: [
              { part: "a", reasoning: "Subtract the two bearings.", working: "065 - 020 = 45^\\circ", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the angle.", working: "\\angle S_1PS_2 = 45^\\circ", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Two sides and the included angle are known; use the cosine rule.", working: "S_1S_2^2 = 20^2 + 40^2 - 2(20)(40)\\cos 45^\\circ", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate.", working: "S_1S_2^2 = 2000 - 1131.4 = 868.6", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Take the square root and round.", working: "S_1S_2 = 29.5 \\text{ km}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Use the sine rule to find angle $PS_2S_1$, opposite side $PS_1 = 20$.", working: "\\sin \\angle PS_2S_1 = \\frac{20 \\sin 45^\\circ}{29.47}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate; the obtuse candidate is rejected since $45^\\circ + 151.3^\\circ > 180^\\circ$ is impossible.", working: "\\angle PS_2S_1 = 28.7^\\circ", marks: 1, markCode: "A" },
              { part: "c", reasoning: "The bearing of $P$ from $S_2$ is the back bearing $065 + 180 = 245^\\circ$; $S_1$ is clockwise of $P$ as seen from $S_2$.", working: "245 + 28.7", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State the bearing to the nearest degree.", working: "274^\\circ", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Use the area formula with the included angle at $P$.", working: "A = \\frac{1}{2}(20)(40)\\sin 45^\\circ", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Evaluate.", working: "400 \\times 0.7071 = 283 \\text{ km}^2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $45^\\circ$. (b) $29.5$ km. (c) $274^\\circ$. (d) $283$ km$^2$.",
            commonErrors: ["Using $151.3^\\circ$ for the angle at $S_2$ without checking validity.", "Subtracting $28.7^\\circ$ from $245^\\circ$ instead of adding."],
          },
        },
        {
          id: "aisl-u3-bearings-elevation-q13",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 10,
          stem: "A hiker walks $8$ km from camp $C$ to point $D$ on a bearing of $030^\\circ$, then walks $6$ km from $D$ to point $E$ on a bearing of $120^\\circ$.",
          parts: [
            { label: "a", prompt: "Find the size of angle $CDE$.", marks: 2 },
            { label: "b", prompt: "Find the distance $CE$. Give your answer to 3 significant figures.", marks: 3 },
            { label: "c", prompt: "Find the bearing of $E$ from $C$, to the nearest degree.", marks: 3 },
            { label: "d", prompt: "Find the area of triangle $CDE$, in km$^2$.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Back bearing", statement: "The back bearing of $C$ from $D$ is $030 + 180 = 210^\\circ$." },
              { kind: "theorem", name: "Pythagoras", statement: "$a^2 + b^2 = c^2$" },
              { kind: "formula", name: "Tangent ratio", statement: "$\\tan\\theta = \\dfrac{\\text{opposite}}{\\text{adjacent}}$" },
            ],
            steps: [
              { part: "a", reasoning: "The back bearing of $DC$ is $210^\\circ$; subtract the bearing of $DE$.", working: "210 - 120 = 90", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the angle.", working: "\\angle CDE = 90^\\circ", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Triangle $CDE$ is right-angled at $D$ with legs $8$ and $6$; apply Pythagoras.", working: "CE^2 = 8^2 + 6^2 = 100", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Take the square root.", working: "CE = 10 \\text{ km}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "State the distance to 3 significant figures.", working: "CE = 10.0 \\text{ km}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "At $C$, the angle between $CD$ and $CE$ satisfies $\\tan\\alpha = \\frac{6}{8}$.", working: "\\alpha = \\tan^{-1}(0.75) = 36.9^\\circ", marks: 1, markCode: "M" },
              { part: "c", reasoning: "$E$ lies clockwise of $D$ as seen from $C$, so add to the bearing of $CD$.", working: "030 + 36.9", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State the bearing to the nearest degree.", working: "067^\\circ", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Use half the product of the perpendicular legs.", working: "A = \\frac{1}{2}(8)(6)", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Evaluate.", working: "A = 24 \\text{ km}^2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $90^\\circ$. (b) $10.0$ km. (c) $067^\\circ$. (d) $24$ km$^2$.",
            commonErrors: ["Subtracting $36.9^\\circ$ from $030^\\circ$ instead of adding.", "Using $CE = 10$ rounded in a way that loses accuracy (acceptable here as it is exact)."],
          },
        },
        {
          id: "aisl-u3-bearings-elevation-q14",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Two ships leave port $P$ at the same time. Ship $S_1$ sails $12$ km on a bearing of $040^\\circ$ and ship $S_2$ sails $12$ km on a bearing of $140^\\circ$. The angle $S_1PS_2$ is",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$100^\\circ$" },
              { id: "b", text: "$80^\\circ$" },
              { id: "c", text: "$40^\\circ$" },
              { id: "d", text: "$140^\\circ$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Angle between bearings", statement: "The angle between two bearings from the same point is the difference of the bearings." },
            ],
            steps: [
              { reasoning: "Subtract the smaller bearing from the larger.", working: "140 - 40 = 100", marks: 1, markCode: "M" },
              { reasoning: "State the angle.", working: "\\angle S_1PS_2 = 100^\\circ", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $100^\\circ$",
            commonErrors: ["Subtracting from $360^\\circ$, giving $220^\\circ$, which is the reflex angle."],
          },
        },
        {
          id: "aisl-u3-bearings-elevation-q15",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "From a point $A$ on level ground, the angle of elevation of the top of a vertical tower is $40^\\circ$. An observer then walks $30$ m directly towards the tower to point $B$, where the angle of elevation is $55^\\circ$. Find the height of the tower, in metres, to 3 significant figures.",
          response: { type: "numeric", parts: [{ label: "Height (m)", answer: 61.0, tolerance: 0.05 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Tangent ratio", statement: "$h = d\\tan\\theta$" },
            ],
            steps: [
              { reasoning: "Let $d$ be the initial distance; the height satisfies two equations.", working: "h = d\\tan 40^\\circ,\\quad h = (d - 30)\\tan 55^\\circ", marks: 1, markCode: "M" },
              { reasoning: "Equate and solve for $d$.", working: "d = \\frac{30\\tan 55^\\circ}{\\tan 55^\\circ - \\tan 40^\\circ} = 72.7 \\text{ m}", marks: 1, markCode: "A" },
              { reasoning: "Substitute back to find $h$.", working: "h = 72.7 \\times \\tan 40^\\circ", marks: 1, markCode: "M" },
              { reasoning: "Evaluate to 3 significant figures.", working: "h = 61.0 \\text{ m}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$61.0$ m",
            commonErrors: ["Using $d + 30$ instead of $d - 30$ for the second distance.", "Assuming the two angles are in the same triangle without setting up two equations."],
          },
        },
        {
          id: "aisl-u3-bearings-elevation-q16",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "From a point on level ground $60$ m from the base of a vertical pole, the angle of elevation of the top of the pole is $30^\\circ$. Find the height of the pole, in metres.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$34.6$" },
              { id: "b", text: "$103.9$" },
              { id: "c", text: "$30.0$" },
              { id: "d", text: "$60.0$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Tangent ratio", statement: "$h = d\\tan\\theta$" },
            ],
            steps: [
              { reasoning: "Height is opposite the angle, distance is adjacent.", working: "h = 60\\tan 30^\\circ", marks: 1, markCode: "M" },
              { reasoning: "Evaluate with $\\tan 30^\\circ = \\frac{1}{\\sqrt{3}}$.", working: "h = 34.6 \\text{ m}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $34.6$ m",
            commonErrors: ["Dividing by $\\tan 30^\\circ$, giving $103.9$."],
          },
        },
      ],
    },
  ],
};
