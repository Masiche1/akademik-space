import type { Lesson } from "../../../types.ts";

export const lesson33: Lesson = {
  id: "pc-u3-lesson-3-3",
  code: "3-3",
  title: "Law of Sines and Law of Cosines",
  goal: "I CAN use the Law of Sines and Law of Cosines to solve any triangle, find its area, and solve bearing problems.",
  standards: ["HSG-SRT.D.9", "HSG-SRT.D.10", "HSG-SRT.D.11"],
  vocabulary: [
    { term: "Law of Sines", definition: "In any triangle, $\\dfrac{\\sin A}{a}=\\dfrac{\\sin B}{b}=\\dfrac{\\sin C}{c}$, where each side is opposite the angle with the matching letter." },
    { term: "Law of Cosines", definition: "In any triangle, $c^2=a^2+b^2-2ab\\cos C$; it generalizes the Pythagorean theorem." },
    { term: "Ambiguous case (SSA)", definition: "The situation of knowing two sides and a non-included angle, where zero, one, or two triangles may fit the data." },
    { term: "Included angle", definition: "The angle formed between two given sides of a triangle." },
    { term: "Bearing", definition: "A direction measured clockwise from north, written with three digits, such as $045^\\circ$ for northeast." },
    { term: "Area formula with sine", definition: "The area of a triangle with sides $a$, $b$ and included angle $C$ is $\\tfrac12ab\\sin C$." },
  ],
  concepts: [
    {
      id: "pc-u3-law-of-sines",
      title: "Law of Sines and the ambiguous case",
      skill: "Apply the Law of Sines to solve triangles given AAS, ASA, or SSA, and decide how many triangles exist in the SSA case.",
      lesson: {
        sections: [
          {
            heading: "The Law of Sines",
            body: "In triangle $ABC$ with sides $a,b,c$ opposite angles $A,B,C$, the ratio of a side to the sine of its opposite angle is constant: $\\frac{a}{\\sin A}=\\frac{b}{\\sin B}=\\frac{c}{\\sin C}$. It is the tool of choice when you know an angle and its opposite side (a matching pair) plus one more piece: AAS, ASA, or SSA. For AAS or ASA, first find the third angle using the angle sum of $180^\\circ$.",
          },
          {
            heading: "The ambiguous case (SSA)",
            body: "Given angle $A$ (acute), side $a$ opposite it, and side $b$, compute the height $h=b\\sin A$. If $a<h$, no triangle exists. If $a=h$, there is one right triangle. If $h<a<b$, there are two triangles (an acute and an obtuse choice for $B$). If $a\\ge b$, there is one triangle. If $A$ is obtuse, there is a triangle only when $a>b$, and then exactly one.",
          },
          {
            heading: "Finding both solutions",
            body: "When $\\sin B=k$ with $0<k<1$, the two candidates are $B_1=\\arcsin k$ and $B_2=180^\\circ-B_1$. Keep $B_2$ only if $A+B_2<180^\\circ$. Each valid angle yields a different third angle $C$ and side $c=\\dfrac{a\\sin C}{\\sin A}$. A calculator returns only $B_1$, so always test the supplementary angle.",
          },
        ],
        keyFormulas: [
          { name: "Law of Sines", statement: "$\\dfrac{a}{\\sin A}=\\dfrac{b}{\\sin B}=\\dfrac{c}{\\sin C}$" },
          { name: "Height for SSA", statement: "$h=b\\sin A$, compared with $a$ to count triangles" },
          { name: "Supplementary solution", statement: "$B_2=180^\\circ-B_1$" },
        ],
        workedExample: {
          problem: "In triangle $ABC$, $A=40^\\circ$, $a=5$, and $b=10$. How many triangles are possible?",
          solution: "Compute $h=b\\sin A=10\\sin40^\\circ\\approx6.43$. Since $a=5<h$, side $a$ is too short to reach the base line, so no triangle exists. Equivalently, $\\sin B=\\frac{10\\sin40^\\circ}{5}\\approx1.29>1$, which is impossible.",
        },
      },
      questions: [
        {
          id: "pc-u3-law-of-sines-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "In triangle $ABC$, $A=30^\\circ$, $B=45^\\circ$, and $a=10$. Which expression gives $b$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$b=\\dfrac{10\\sin105^\\circ}{\\sin30^\\circ}\\approx19.32$" },
              { id: "b", text: "$b=\\dfrac{10\\sin45^\\circ}{\\sin30^\\circ}\\approx14.14$" },
              { id: "c", text: "$b=\\dfrac{10\\sin30^\\circ}{\\sin45^\\circ}\\approx7.07$" },
              { id: "d", text: "$b=10\\sin45^\\circ\\sin30^\\circ\\approx3.54$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Law of Sines", statement: "$\\frac{a}{\\sin A}=\\frac{b}{\\sin B}$." },
            ],
            steps: [
              { reasoning: "Set up the proportion using the matching pairs $(a,A)$ and $(b,B)$.", working: "\\frac{b}{\\sin45^\\circ}=\\frac{10}{\\sin30^\\circ}", marks: 1, markCode: "M" },
              { reasoning: "Multiply both sides by $\\sin45^\\circ$.", working: "b=\\frac{10\\sin45^\\circ}{\\sin30^\\circ}=\\frac{10(0.7071)}{0.5}\\approx14.14", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $b\\approx14.14$",
            commonErrors: ["Inverting the proportion, giving $7.07$.", "Using the third angle $105^\\circ$, which is opposite side $c$, not $b$."],
          },
        },
        {
          id: "pc-u3-law-of-sines-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "In triangle $ABC$, $A=40^\\circ$, $B=65^\\circ$, and $a=12$. Find angle $C$ and side $b$ (2 d.p.).",
          response: {
            type: "numeric",
            parts: [
              { label: "Angle $C$ (degrees)", answer: 75 },
              { label: "Side $b$", answer: 16.92, tolerance: 0.02 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Angle sum", statement: "The angles of a triangle add to $180^\\circ$." },
              { kind: "law", name: "Law of Sines", statement: "$\\frac{a}{\\sin A}=\\frac{b}{\\sin B}$." },
            ],
            steps: [
              { reasoning: "Subtract the known angles from $180^\\circ$.", working: "C=180^\\circ-40^\\circ-65^\\circ=75^\\circ", marks: 1, markCode: "A" },
              { reasoning: "Apply the Law of Sines with the matched pair $(a,A)$.", working: "b=\\frac{12\\sin65^\\circ}{\\sin40^\\circ}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate in degree mode.", working: "b=\\frac{12(0.9063)}{0.6428}\\approx16.92", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$C=75^\\circ$, $b\\approx16.92$.",
            commonErrors: ["Calculator in radian mode.", "Dividing by $\\sin65^\\circ$ instead of multiplying by it."],
          },
        },
        {
          id: "pc-u3-law-of-sines-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "In triangle $ABC$, $A=30^\\circ$, $a=10$, and $b=14$. There are two possible triangles. Find the two possible values of angle $B$ in degrees (2 d.p.), smaller first.",
          response: {
            type: "numeric",
            parts: [
              { label: "Acute $B$", answer: 44.43, tolerance: 0.02 },
              { label: "Obtuse $B$", answer: 135.57, tolerance: 0.02 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Law of Sines", statement: "$\\frac{\\sin B}{b}=\\frac{\\sin A}{a}$." },
              { kind: "property", name: "Supplementary angles", statement: "$\\sin\\theta=\\sin(180^\\circ-\\theta)$, so two angles in $(0^\\circ,180^\\circ)$ can have the same sine." },
            ],
            steps: [
              { reasoning: "Solve for $\\sin B$ with the Law of Sines.", working: "\\sin B=\\frac{14\\sin30^\\circ}{10}=0.7", marks: 1, markCode: "M" },
              { reasoning: "Take the inverse sine for the acute angle.", working: "B_1=\\arcsin0.7\\approx44.43^\\circ", marks: 1, markCode: "A" },
              { reasoning: "Sine is also $0.7$ at the supplementary angle.", working: "B_2=180^\\circ-44.43^\\circ=135.57^\\circ", marks: 1, markCode: "M" },
              { reasoning: "Check that $B_2$ is valid: $A+B_2=165.57^\\circ<180^\\circ$, so both triangles exist.", working: "30^\\circ+135.57^\\circ<180^\\circ", marks: 1, markCode: "R" },
            ],
            finalAnswer: "$B\\approx44.43^\\circ$ or $B\\approx135.57^\\circ$.",
            commonErrors: ["Reporting only the calculator value $44.43^\\circ$.", "Accepting $B_2$ without checking that the angle sum is below $180^\\circ$."],
          },
        },
        {
          id: "pc-u3-law-of-sines-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "In triangle $ABC$, $A=35^\\circ$, $a=8$, and $b=12$. Use degree mode and round to 2 decimal places.",
          parts: [
            { label: "a", prompt: "Compute the height $h=b\\sin A$ and decide how many triangles exist. Enter the number of triangles.", marks: 2 },
            { label: "b", prompt: "Find both possible values of angle $B$, acute first.", marks: 3 },
            { label: "c", prompt: "For each triangle, find side $c$ (acute-$B$ triangle first).", marks: 3 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Number of triangles", answer: 2 },
              { label: "(b) Acute $B$", answer: 59.36, tolerance: 0.03 },
              { label: "(b) Obtuse $B$", answer: 120.64, tolerance: 0.03 },
              { label: "(c) $c$ for acute $B$", answer: 13.91, tolerance: 0.05 },
              { label: "(c) $c$ for obtuse $B$", answer: 5.75, tolerance: 0.05 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Law of Sines", statement: "$\\frac{a}{\\sin A}=\\frac{b}{\\sin B}=\\frac{c}{\\sin C}$." },
              { kind: "principle", name: "SSA classification", statement: "For acute $A$: if $h<a<b$ there are two triangles." },
            ],
            steps: [
              { part: "a", reasoning: "Compute the height from vertex $C$ to the base line.", working: "h=12\\sin35^\\circ\\approx6.88", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Because $h<a<b$ ($6.88<8<12$), side $a$ can swing to two positions.", working: "2\\ \\text{triangles}", marks: 1, markCode: "R" },
              { part: "b", reasoning: "Use the Law of Sines to find $\\sin B$.", working: "\\sin B=\\frac{12\\sin35^\\circ}{8}\\approx0.8604", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Acute solution from the inverse sine.", working: "B_1\\approx59.36^\\circ", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Supplementary solution; $35^\\circ+120.64^\\circ<180^\\circ$, so it is valid.", working: "B_2=180^\\circ-59.36^\\circ=120.64^\\circ", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Find the third angles from the angle sum.", working: "C_1=180^\\circ-35^\\circ-59.36^\\circ=85.64^\\circ,\\quad C_2=24.36^\\circ", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Apply the Law of Sines to the first triangle.", working: "c_1=\\frac{8\\sin85.64^\\circ}{\\sin35^\\circ}\\approx13.91", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Apply it to the second triangle.", working: "c_2=\\frac{8\\sin24.36^\\circ}{\\sin35^\\circ}\\approx5.75", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 2 triangles. (b) $B\\approx59.36^\\circ$ or $120.64^\\circ$. (c) $c\\approx13.91$ or $c\\approx5.75$.",
            commonErrors: ["Rounding $B$ early and compounding error in $c$.", "Using $B$ in place of $C$ when computing $c$."],
          },
        },
      ],
    },
    {
      id: "pc-u3-law-of-cosines",
      title: "Law of Cosines, area, and bearings",
      skill: "Use the Law of Cosines for SAS and SSS, find area with (1/2)ab sin C, and solve bearing problems.",
      lesson: {
        sections: [
          {
            heading: "The Law of Cosines",
            body: "When you know two sides and the included angle (SAS), or all three sides (SSS), there is no matching side-angle pair, so use $c^2=a^2+b^2-2ab\\cos C$. For SSS, rearrange to $\\cos C=\\frac{a^2+b^2-c^2}{2ab}$. Find the largest angle first (opposite the longest side) so the remaining angles are acute and can be found safely with the Law of Sines. If $C=90^\\circ$ the formula reduces to the Pythagorean theorem.",
          },
          {
            heading: "Area of a triangle",
            body: "Area $=\\frac12 ab\\sin C$, where $C$ is the angle between sides $a$ and $b$. It follows from area $=\\frac12\\times\\text{base}\\times\\text{height}$ with height $b\\sin C$. When all three sides are known, find one angle with the Law of Cosines first.",
          },
          {
            heading: "Bearings",
            body: "A bearing is measured clockwise from north using three digits. To get the angle between two paths from the same starting point, subtract their bearings. To reverse a direction, add or subtract $180^\\circ$ (the back bearing of $050^\\circ$ is $230^\\circ$). Sketch a diagram, mark north at each point, then apply the Law of Cosines or Law of Sines to the triangle.",
          },
        ],
        keyFormulas: [
          { name: "Law of Cosines", statement: "$c^2=a^2+b^2-2ab\\cos C$" },
          { name: "Angle from three sides", statement: "$\\cos C=\\dfrac{a^2+b^2-c^2}{2ab}$" },
          { name: "Triangle area", statement: "$\\text{Area}=\\tfrac12ab\\sin C$" },
        ],
        workedExample: {
          problem: "Two sides of a triangle are $6$ and $10$ with an included angle of $120^\\circ$. Find the third side and the area.",
          solution: "$c^2=6^2+10^2-2(6)(10)\\cos120^\\circ=36+100+60=196$, so $c=14$. The area is $\\frac12(6)(10)\\sin120^\\circ=30\\cdot\\frac{\\sqrt3}{2}=15\\sqrt3\\approx25.98$.",
        },
      },
      questions: [
        {
          id: "pc-u3-law-of-cosines-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "In triangle $ABC$, $a=6$, $b=8$, and the included angle is $C=50^\\circ$. Which expression gives $c^2$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$6^2+8^2-(6)(8)\\cos50^\\circ$" },
              { id: "b", text: "$6^2+8^2-2(6)(8)\\cos50^\\circ$" },
              { id: "c", text: "$6^2+8^2+2(6)(8)\\cos50^\\circ$" },
              { id: "d", text: "$6^2+8^2-2(6)(8)\\sin50^\\circ$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Law of Cosines", statement: "$c^2=a^2+b^2-2ab\\cos C$." },
            ],
            steps: [
              { reasoning: "The angle $C$ is opposite side $c$ and between sides $a$ and $b$, so the Law of Cosines applies directly.", working: "c^2=a^2+b^2-2ab\\cos C", marks: 1, markCode: "M" },
              { reasoning: "Substitute the values.", working: "c^2=6^2+8^2-2(6)(8)\\cos50^\\circ", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $6^2+8^2-2(6)(8)\\cos50^\\circ$",
            commonErrors: ["Adding the cosine term.", "Dropping the factor 2.", "Using sine instead of cosine."],
          },
        },
        {
          id: "pc-u3-law-of-cosines-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "In triangle $ABC$, $a=7$, $b=9$, and the included angle is $C=60^\\circ$. Find side $c$ to 2 decimal places.",
          response: { type: "numeric", parts: [{ label: "Side $c$", answer: 8.19, tolerance: 0.02 }] },
          markscheme: {
            principles: [
              { kind: "law", name: "Law of Cosines", statement: "$c^2=a^2+b^2-2ab\\cos C$." },
            ],
            steps: [
              { reasoning: "Substitute the two sides and the included angle.", working: "c^2=7^2+9^2-2(7)(9)\\cos60^\\circ", marks: 1, markCode: "M" },
              { reasoning: "Use $\\cos60^\\circ=\\frac12$.", working: "c^2=49+81-63=67", marks: 1, markCode: "A" },
              { reasoning: "Take the positive square root.", working: "c=\\sqrt{67}\\approx8.19", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$c=\\sqrt{67}\\approx8.19$",
            commonErrors: ["Forgetting to take the square root.", "Computing $(a+b)^2$ or $(a-b)^2$ instead of using the cosine term."],
          },
        },
        {
          id: "pc-u3-law-of-cosines-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A triangle has sides $5$, $7$, and $8$. Find the angle opposite the side of length $7$ (in degrees) and then the area of the triangle (2 d.p.).",
          response: {
            type: "numeric",
            parts: [
              { label: "Angle opposite 7 (degrees)", answer: 60 },
              { label: "Area", answer: 17.32, tolerance: 0.02 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Law of Cosines", statement: "$\\cos C=\\frac{a^2+b^2-c^2}{2ab}$ for the angle opposite $c$." },
              { kind: "formula", name: "Area formula", statement: "$\\text{Area}=\\frac12ab\\sin C$ with $C$ the included angle." },
            ],
            steps: [
              { reasoning: "Take the angle $\\theta$ opposite 7 with adjacent sides 5 and 8.", working: "\\cos\\theta=\\frac{5^2+8^2-7^2}{2(5)(8)}", marks: 1, markCode: "M" },
              { reasoning: "Simplify.", working: "\\cos\\theta=\\frac{40}{80}=\\frac12\\Rightarrow\\theta=60^\\circ", marks: 1, markCode: "A" },
              { reasoning: "$\\theta$ is the included angle between sides 5 and 8, so use the area formula.", working: "\\text{Area}=\\frac12(5)(8)\\sin60^\\circ", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "=20\\cdot\\frac{\\sqrt3}{2}=10\\sqrt3\\approx17.32", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$60^\\circ$; area $10\\sqrt3\\approx17.32$.",
            commonErrors: ["Using 7 as one of the adjacent sides.", "Using an angle that is not between the two sides in the area formula."],
          },
        },
        {
          id: "pc-u3-law-of-cosines-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Two ships leave port $P$ at the same time. Ship $A$ sails $12$ km on a bearing of $050^\\circ$. Ship $B$ sails $15$ km on a bearing of $130^\\circ$. Round to 2 decimal places unless stated.",
          parts: [
            { label: "a", prompt: "Find angle $APB$ in degrees.", marks: 1 },
            { label: "b", prompt: "Find the distance $AB$ between the ships.", marks: 3 },
            { label: "c", prompt: "Find the area of triangle $APB$ in square kilometers.", marks: 2 },
            { label: "d", prompt: "Find the bearing of ship $B$ from ship $A$, to the nearest tenth of a degree.", marks: 3 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Angle $APB$ (degrees)", answer: 80 },
              { label: "(b) $AB$ (km)", answer: 17.51, tolerance: 0.02 },
              { label: "(c) Area (km$^2$)", answer: 88.63, tolerance: 0.05 },
              { label: "(d) Bearing (degrees)", answer: 172.5, tolerance: 0.2 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Law of Cosines", statement: "$c^2=a^2+b^2-2ab\\cos C$." },
              { kind: "law", name: "Law of Sines", statement: "$\\frac{\\sin A}{a}=\\frac{\\sin P}{p}$." },
              { kind: "definition", name: "Bearing", statement: "A bearing is measured clockwise from north; the back bearing differs by $180^\\circ$." },
            ],
            steps: [
              { part: "a", reasoning: "Both paths start at $P$, so the angle between them is the difference of the bearings.", working: "130^\\circ-50^\\circ=80^\\circ", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Two sides and the included angle are known, so use the Law of Cosines.", working: "AB^2=12^2+15^2-2(12)(15)\\cos80^\\circ", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate with $\\cos80^\\circ\\approx0.17365$.", working: "AB^2=369-62.51\\approx306.49", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Square root.", working: "AB\\approx17.51\\ \\text{km}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Use the area formula with the included angle $80^\\circ$.", working: "\\text{Area}=\\frac12(12)(15)\\sin80^\\circ", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate.", working: "=90(0.98481)\\approx88.63\\ \\text{km}^2", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Find angle $PAB$ with the Law of Sines (it is the angle opposite $PB=15$; it is acute because it must be less than $100^\\circ$).", working: "\\sin A=\\frac{15\\sin80^\\circ}{17.51}\\approx0.8438\\Rightarrow A\\approx57.55^\\circ", marks: 1, markCode: "M" },
              { part: "d", reasoning: "From $A$, the direction back to $P$ is the back bearing $050^\\circ+180^\\circ=230^\\circ$.", working: "230^\\circ", marks: 1, markCode: "M" },
              { part: "d", reasoning: "$B$ lies $57.55^\\circ$ anticlockwise from the direction to $P$.", working: "230^\\circ-57.55^\\circ\\approx172.5^\\circ", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $80^\\circ$. (b) $AB\\approx17.51$ km. (c) $\\approx88.63$ km$^2$. (d) $\\approx172.5^\\circ$.",
            commonErrors: ["Using $50^\\circ+130^\\circ=180^\\circ$ for the angle at the port.", "Giving the bearing of $A$ from $B$ rather than $B$ from $A$.", "Forgetting the back bearing in part (d)."],
            examinerNote: "Coordinates confirm the result: $A=(9.19,7.71)$, $B=(11.49,-9.64)$, so $AB$ points just east of due south.",
          },
        },
      ],
    },
  ],
};
