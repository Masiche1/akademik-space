import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "geo-u2-lesson-2-2",
  code: "2-2",
  title: "Special Right Triangles",
  goal: "I CAN use the side ratios of $45^\\circ$-$45^\\circ$-$90^\\circ$ and $30^\\circ$-$60^\\circ$-$90^\\circ$ triangles to find exact side lengths.",
  standards: ["HSG-SRT.C.6"],
  vocabulary: [
    { term: "Isosceles right triangle", definition: "A right triangle whose two legs are congruent; its acute angles are each $45^\\circ$." },
    { term: "Special right triangle", definition: "A right triangle with fixed angle measures that gives a predictable ratio among its side lengths." },
    { term: "Exact value", definition: "A value written without rounding, often using a radical such as $\\sqrt{2}$ or $\\sqrt{3}$." },
    { term: "Short leg", definition: "The side opposite the $30^\\circ$ angle in a $30^\\circ$-$60^\\circ$-$90^\\circ$ triangle." },
    { term: "Long leg", definition: "The side opposite the $60^\\circ$ angle in a $30^\\circ$-$60^\\circ$-$90^\\circ$ triangle." },
    { term: "Radical", definition: "An expression containing a root symbol, such as $\\sqrt{2}$ or $\\sqrt{3}$." },
  ],
  concepts: [
    {
      id: "geo-u2-45-45-90",
      title: "$45^\\circ$-$45^\\circ$-$90^\\circ$ triangles",
      skill: "Find exact side lengths in an isosceles right triangle using its fixed side ratio.",
      lesson: {
        sections: [
          {
            heading: "Build the ratio from the Pythagorean Theorem",
            body: "A $45^\\circ$-$45^\\circ$-$90^\\circ$ triangle is an isosceles right triangle, so both legs have the same length. If each leg is $x$, the hypotenuse satisfies $c^2=x^2+x^2=2x^2$, hence $c=x\\sqrt{2}$. The side ratio, in the order leg : leg : hypotenuse, is $1:1:\\sqrt{2}$.\n\nIf the leg is given, multiply by $\\sqrt{2}$ to find the hypotenuse. If the hypotenuse is given, divide by $\\sqrt{2}$; rationalizing gives $c/\\sqrt{2}=c\\sqrt{2}/2$. Keep these answers exact unless rounding is requested.",
          },
          {
            heading: "Use the equal legs",
            body: "Because the acute angles are equal, their opposite sides are equal. Thus either leg can be used as the scale factor for the ratio. A common error is to multiply a known hypotenuse by $\\sqrt{2}$; the hypotenuse is already the longer side. Instead, divide it by $\\sqrt{2}$ to get a leg.",
          },
        ],
        keyFormulas: [
          { name: "Side ratio", statement: "$1:1:\\sqrt{2}$ (leg : leg : hypotenuse)." },
          { name: "Hypotenuse from leg", statement: "$c=x\\sqrt{2}$" },
          { name: "Leg from hypotenuse", statement: "$x=\\dfrac{c\\sqrt{2}}{2}$" },
        ],
        workedExample: {
          problem: "A $45^\\circ$-$45^\\circ$-$90^\\circ$ triangle has a hypotenuse of $14$. Find the exact length of each leg.",
          solution: "For this triangle, $c=x\\sqrt{2}$.\n\n$x=\\dfrac{14}{\\sqrt{2}}=\\dfrac{14\\sqrt{2}}{2}=7\\sqrt{2}$\n\nEach leg is **$7\\sqrt{2}$ units**.",
        },
      },
      questions: [
        {
          id: "geo-u2-22-45-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A $45^\\circ$-$45^\\circ$-$90^\\circ$ triangle has a leg of length $6$. What is the hypotenuse?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$12$" },
              { id: "b", text: "$3\\sqrt{2}$" },
              { id: "c", text: "$6\\sqrt{2}$" },
              { id: "d", text: "$6$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "theorem", name: "45-45-90 side ratio", statement: "In a $45^\\circ$-$45^\\circ$-$90^\\circ$ triangle, leg : leg : hypotenuse is $1:1:\\sqrt{2}$." },
              { kind: "theorem", name: "Pythagorean Theorem", statement: "Equal legs of length $x$ give $c^2=2x^2$, so $c=x\\sqrt{2}$." },
            ],
            steps: [
              { reasoning: "Identify the known side as a leg and use the ratio multiplier for the hypotenuse.", working: "c=x\\sqrt{2}", marks: 1, markCode: "M" },
              { reasoning: "Substitute the leg length and retain the exact radical.", working: "c=6\\sqrt{2}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $6\\sqrt{2}$",
            commonErrors: ["Choosing $3\\sqrt{2}$ by dividing instead of multiplying.", "Using $12$ by doubling the leg."],
          },
        },
        {
          id: "geo-u2-22-45-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A square has side length $9$ cm. Find the exact length of its diagonal.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Pythagorean Theorem", statement: "For perpendicular sides of length $s$, a square's diagonal $d$ satisfies $d^2=s^2+s^2$." },
              { kind: "property", name: "45-45-90 ratio", statement: "A square diagonal divides the square into $45^\\circ$-$45^\\circ$-$90^\\circ$ triangles with diagonal $s\\sqrt{2}$." },
            ],
            steps: [
              { reasoning: "Represent the square's diagonal as the hypotenuse of a right triangle with legs $9$ and $9$.", working: "d^2=9^2+9^2", marks: 1, markCode: "M" },
              { reasoning: "Add the squares and take the positive root.", working: "d=\\sqrt{81+81}=\\sqrt{162}", marks: 1, markCode: "M" },
              { reasoning: "Simplify the radical and include the unit.", working: "d=9\\sqrt{2}\\text{ cm}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$9\\sqrt{2}$ cm",
            commonErrors: ["Giving the perimeter, $36$ cm, instead of the diagonal.", "Leaving $\\sqrt{162}$ without simplifying, or rounding despite the exact-answer request."],
          },
        },
        {
          id: "geo-u2-22-45-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "An isosceles right triangle has perimeter $16+8\\sqrt{2}$ cm. Find the exact length of each leg and the hypotenuse.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "theorem", name: "45-45-90 side ratio", statement: "If each leg is $x$, the hypotenuse is $x\\sqrt{2}$." },
              { kind: "definition", name: "Perimeter", statement: "The perimeter is the sum of all side lengths." },
            ],
            steps: [
              { reasoning: "Express the perimeter in terms of the equal leg $x$.", working: "P=2x+x\\sqrt{2}=x(2+\\sqrt{2})", marks: 1, markCode: "M" },
              { reasoning: "Set the expression equal to the given perimeter and factor it to isolate $x$.", working: "x(2+\\sqrt{2})=16+8\\sqrt{2}=8(2+\\sqrt{2})", marks: 1, markCode: "M" },
              { reasoning: "Divide by the common nonzero factor.", working: "x=8", marks: 1, markCode: "A" },
              { reasoning: "Use the side ratio to find the hypotenuse.", working: "c=8\\sqrt{2}\\text{ cm}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Each leg is $8$ cm and the hypotenuse is $8\\sqrt{2}$ cm.",
            commonErrors: ["Treating the perimeter as $3x$ and ignoring the $\\sqrt{2}$ factor on the hypotenuse.", "Reporting the hypotenuse as $8$ cm."],
            examinerNote: "For numeric entry, the exact coefficient of $\\sqrt{2}$ is $8$; the question requires students to state both exact lengths.",
          },
        },
        {
          id: "geo-u2-22-45-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Square $PQRS$ has side length $8$. Its vertices run $P$ (bottom left), $Q$ (bottom right), $R$ (top right), $S$ (top left). Diagonal $\\overline{PR}$ is drawn, and the two diagonals $\\overline{PR}$ and $\\overline{QS}$ cross at $O$, which divides each diagonal into two equal halves.",
          parts: [
            { label: "a", prompt: "Prove that $m\\angle QPR=45^\\circ$ in $\\triangle PQR$.", marks: 2 },
            { label: "b", prompt: "Find the exact length of diagonal $PR$.", marks: 2 },
            { label: "c", prompt: "$\\triangle POQ$ is a right isosceles triangle with hypotenuse $PQ$. Find the exact length $PO$.", marks: 2 },
            { label: "d", prompt: "Find the area of $\\triangle POQ$ and show it is exactly one quarter of the area of the square.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Isosceles Triangle Theorem and angle sum", statement: "Base angles of an isosceles triangle are congruent and the angles of a triangle sum to $180^\\circ$." },
              { kind: "theorem", name: "45-45-90 side ratio", statement: "If each leg is $x$ the hypotenuse is $x\\sqrt{2}$; equivalently the legs are the hypotenuse divided by $\\sqrt{2}$." },
              { kind: "formula", name: "Triangle area", statement: "Area $=\\frac12\\times\\text{base}\\times\\text{height}$." },
            ],
            steps: [
              { part: "a", reasoning: "$PQ=QR=8$ (sides of a square) and $m\\angle PQR=90^\\circ$, so $\\triangle PQR$ is isosceles with base angles at $P$ and $R$ equal.", working: "m\\angle QPR=m\\angle QRP", marks: 1, markCode: "R" },
              { part: "a", reasoning: "The base angles share the remaining $90^\\circ$ by the angle sum.", working: "2m\\angle QPR=180^\\circ-90^\\circ \\implies m\\angle QPR=45^\\circ", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$\\triangle PQR$ is 45-45-90 with legs $8$, so the hypotenuse is leg times $\\sqrt{2}$ (equivalently by Pythagoras).", working: "PR=8\\sqrt{2}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Check: $8^2+8^2=128=(8\\sqrt{2})^2$.", working: "PR=8\\sqrt{2}\\approx11.3", marks: 1, markCode: "A" },
              { part: "c", reasoning: "In the right isosceles $\\triangle POQ$ the hypotenuse is $PQ=8$, so each leg is $8/\\sqrt{2}$.", working: "PO=\\frac{8}{\\sqrt{2}}=4\\sqrt{2}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "This agrees with $O$ being the midpoint of $PR$: half of $8\\sqrt{2}$.", working: "PO=\\tfrac12(8\\sqrt{2})=4\\sqrt{2}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Use the two legs $PO=OQ=4\\sqrt{2}$ as base and height.", working: "\\tfrac12(4\\sqrt{2})(4\\sqrt{2})=\\tfrac12(32)=16", marks: 1, markCode: "M" },
              { part: "d", reasoning: "The square has area $64$, and $16/64=1/4$.", working: "\\frac{16}{64}=\\frac14", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) Isosceles right triangle, base angles $45^\\circ$. (b) $PR=8\\sqrt{2}$. (c) $PO=4\\sqrt{2}$. (d) Area $16=\\frac14\\times64$.",
            commonErrors: ["Using $PO=4$ (half of the side) instead of half of the diagonal.", "Giving the diagonal as $8$ or $16$, missing the $\\sqrt{2}$ factor.", "Citing the 45-45-90 ratio in (a) without proving the angle."],
          },
        },
      ],
    },
    {
      id: "geo-u2-30-60-90",
      title: "$30^\\circ$-$60^\\circ$-$90^\\circ$ triangles",
      skill: "Use the short-leg, long-leg, and hypotenuse ratio to solve for exact lengths.",
      lesson: {
        sections: [
          {
            heading: "Derive the three side lengths",
            body: "Cut an equilateral triangle in half along an altitude. The resulting right triangle has angles $30^\\circ$, $60^\\circ$, and $90^\\circ$. If the original equilateral side is $2x$, the short leg is $x$, the hypotenuse is $2x$, and the long leg follows from the Pythagorean Theorem: $\\sqrt{(2x)^2-x^2}=x\\sqrt{3}$.\n\nIn the order short leg : long leg : hypotenuse, the fixed ratio is $1:\\sqrt{3}:2$. The short leg is opposite $30^\\circ$, the long leg is opposite $60^\\circ$, and the hypotenuse is opposite $90^\\circ$.",
          },
          {
            heading: "Scale the ratio and preserve exact form",
            body: "If the short leg is $s$, the long leg is $s\\sqrt{3}$ and the hypotenuse is $2s$. If the long leg is known, divide by $\\sqrt{3}$ to find $s$; if the hypotenuse is known, halve it to find $s$. Use the angle opposite each side to prevent swapping the short and long legs.\n\nExact answers such as $5\\sqrt{3}$ are preferred to decimal approximations when a problem asks for an exact value. Rationalize denominators when needed, for example $\\dfrac{10}{\\sqrt{3}}=\\dfrac{10\\sqrt{3}}{3}$.",
          },
        ],
        keyFormulas: [
          { name: "Side ratio", statement: "$1:\\sqrt{3}:2$ (short leg : long leg : hypotenuse)." },
          { name: "Long leg", statement: "$\\ell=s\\sqrt{3}$, where $s$ is the short leg." },
          { name: "Hypotenuse", statement: "$c=2s$" },
        ],
        workedExample: {
          problem: "In a $30^\\circ$-$60^\\circ$-$90^\\circ$ triangle, the short leg is $7$. Find the long leg and hypotenuse.",
          solution: "Use the ratio $1:\\sqrt{3}:2$ with scale factor $7$.\n\nLong leg: $7\\sqrt{3}$\nHypotenuse: $2(7)=14$\n\nThe exact lengths are **$7\\sqrt{3}$** and **$14$**.",
        },
      },
      questions: [
        {
          id: "geo-u2-22-30-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "In a $30^\\circ$-$60^\\circ$-$90^\\circ$ triangle, the short leg is $4$. What is the hypotenuse?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$8$" },
              { id: "b", text: "$4\\sqrt{3}$" },
              { id: "c", text: "$2$" },
              { id: "d", text: "$4$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "theorem", name: "30-60-90 side ratio", statement: "Short leg : long leg : hypotenuse is $1:\\sqrt{3}:2$." },
              { kind: "definition", name: "Short leg", statement: "The short leg is opposite the $30^\\circ$ angle; the hypotenuse is twice its length." },
            ],
            steps: [
              { reasoning: "The given side is the short leg, so apply the hypotenuse multiplier of $2$.", working: "c=2s", marks: 1, markCode: "M" },
              { reasoning: "Substitute $s=4$.", working: "c=2(4)=8", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** $8$",
            commonErrors: ["Choosing $4\\sqrt{3}$, which is the long leg.", "Choosing $2$, the scale factor rather than the side length."],
          },
        },
        {
          id: "geo-u2-22-30-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "The long leg of a $30^\\circ$-$60^\\circ$-$90^\\circ$ triangle is $9\\sqrt{3}$ cm. Find the exact length of the hypotenuse.",
          response: { type: "numeric", parts: [{ label: "Hypotenuse", answer: 18, unit: "cm" }] },
          markscheme: {
            principles: [
              { kind: "theorem", name: "30-60-90 side ratio", statement: "The side lengths are $s$, $s\\sqrt{3}$, and $2s$, where $s$ is the short leg." },
              { kind: "property", name: "Radical simplification", statement: "$\\dfrac{a\\sqrt{3}}{\\sqrt{3}}=a$ for positive $a$." },
            ],
            steps: [
              { reasoning: "Set the given long leg equal to $s\\sqrt{3}$ and solve for the short leg.", working: "s\\sqrt{3}=9\\sqrt{3}\\implies s=9", marks: 1, markCode: "M" },
              { reasoning: "The hypotenuse is twice the short leg.", working: "c=2s", marks: 1, markCode: "M" },
              { reasoning: "Substitute the short leg to obtain the exact length.", working: "c=2(9)=18\\text{ cm}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$18$ cm",
            commonErrors: ["Calling $9\\sqrt{3}$ the short leg and doubling it.", "Multiplying the long leg by $\\sqrt{3}$ again."],
          },
        },
        {
          id: "geo-u2-22-30-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A $30^\\circ$-$60^\\circ$-$90^\\circ$ triangle has a perimeter of $12+6\\sqrt{3}$ units. Find the exact length of each of its three sides.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "theorem", name: "30-60-90 side ratio", statement: "For short leg $s$, long leg is $s\\sqrt{3}$ and hypotenuse is $2s$." },
              { kind: "definition", name: "Perimeter", statement: "The perimeter equals the sum of the three side lengths." },
            ],
            steps: [
              { reasoning: "Write the perimeter using the short-leg scale factor $s$.", working: "P=s+s\\sqrt{3}+2s=s(3+\\sqrt{3})", marks: 1, markCode: "M" },
              { reasoning: "Set equal to the given perimeter and factor the right side.", working: "s(3+\\sqrt{3})=12+6\\sqrt{3}=6(2+\\sqrt{3})", marks: 1, markCode: "M" },
              { reasoning: "Solve for the short leg by comparing or dividing the expressions. Since $12+6\\sqrt{3}=6(2+\\sqrt{3})$ but the ratio factor is $3+\\sqrt{3}$, simplify the quotient.", working: "s=\\dfrac{12+6\\sqrt{3}}{3+\\sqrt{3}}=3+\\sqrt{3}", marks: 1, markCode: "A" },
              { reasoning: "Use the side ratio to state the long leg and hypotenuse.", working: "\\ell=(3+\\sqrt{3})\\sqrt{3}=3+3\\sqrt{3},\\quad c=2(3+\\sqrt{3})=6+2\\sqrt{3}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Short leg $3+\\sqrt{3}$, long leg $3+3\\sqrt{3}$, hypotenuse $6+2\\sqrt{3}$ units.",
            commonErrors: ["Assuming the short leg equals $6$ by extracting a coefficient from the perimeter without solving.", "Using the ratio in the wrong order or assigning the hypotenuse as the long leg."],
            examinerNote: "The exact side lengths are not integer multiples of a single scale factor; students must solve the perimeter equation before scaling the ratio.",
          },
        },
        {
          id: "geo-u2-22-30-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Equilateral triangle $ABC$ has side length $12$, with $\\overline{BC}$ as the horizontal base and $A$ at the top. The altitude $\\overline{AD}$ is drawn from $A$ to the midpoint $D$ of $\\overline{BC}$. The circle inscribed in the triangle touches $\\overline{BC}$ at $D$ and has center $I$ on $\\overline{AD}$, and $\\overline{BI}$ bisects $\\angle ABC$.",
          parts: [
            { label: "a", prompt: "Show that $\\triangle ABD$ is a $30^\\circ$-$60^\\circ$-$90^\\circ$ triangle, giving the three angles.", marks: 2 },
            { label: "b", prompt: "Find the exact length of the altitude $AD$.", marks: 2 },
            { label: "c", prompt: "Find the exact area of $\\triangle ABC$.", marks: 2 },
            { label: "d", prompt: "Use $\\triangle BDI$ to find the exact radius $ID$ of the inscribed circle.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "theorem", name: "30-60-90 side ratio", statement: "Short leg : long leg : hypotenuse is $1:\\sqrt{3}:2$; the short leg is opposite $30^\\circ$." },
              { kind: "property", name: "Equilateral triangle", statement: "All sides are equal and all angles measure $60^\\circ$; the altitude to a side bisects it and the opposite angle." },
              { kind: "formula", name: "Triangle area", statement: "Area $=\\frac12\\times\\text{base}\\times\\text{height}$." },
            ],
            steps: [
              { part: "a", reasoning: "In an equilateral triangle every angle is $60^\\circ$, and $AD\\perp BC$.", working: "m\\angle B=60^\\circ,\\quad m\\angle ADB=90^\\circ", marks: 1, markCode: "B" },
              { part: "a", reasoning: "Angle sum in $\\triangle ABD$ gives the third angle.", working: "m\\angle BAD=180^\\circ-60^\\circ-90^\\circ=30^\\circ", marks: 1, markCode: "R" },
              { part: "b", reasoning: "$D$ is the midpoint of $BC$, so the short leg (opposite $30^\\circ$) is half the side.", working: "BD=\\tfrac12(12)=6", marks: 1, markCode: "M" },
              { part: "b", reasoning: "$AD$ is the long leg, equal to the short leg times $\\sqrt{3}$ (check: $6^2+(6\\sqrt3)^2=144=12^2$).", working: "AD=6\\sqrt{3}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Use base $BC=12$ and height $AD$.", working: "\\text{Area}=\\tfrac12(12)(6\\sqrt{3})", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Simplify.", working: "\\text{Area}=36\\sqrt{3}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "$BI$ bisects the $60^\\circ$ angle at $B$, so $m\\angle IBD=30^\\circ$ and $\\triangle BDI$ is 30-60-90 with long leg $BD=6$ opposite $60^\\circ$ and short leg $ID$.", working: "ID\\sqrt{3}=6", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Solve and rationalize.", working: "ID=\\frac{6}{\\sqrt{3}}=2\\sqrt{3}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Angles $30^\\circ, 60^\\circ, 90^\\circ$. (b) $AD=6\\sqrt{3}$. (c) Area $=36\\sqrt{3}$. (d) $ID=2\\sqrt{3}$.",
            commonErrors: ["Taking $BD=12$ or $AD=12$ rather than halving the base.", "Treating $ID$ as the long leg and writing $6\\sqrt{3}$.", "Forgetting that $BI$ bisects the angle at $B$ in (d)."],
          },
        },
      ],
    },
  ],
};
