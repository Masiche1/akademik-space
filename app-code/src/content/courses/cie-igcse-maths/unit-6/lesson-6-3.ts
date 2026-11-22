import type { Lesson } from "../../../types.ts";

export const lesson63: Lesson = {
  id: "ciem-u6-lesson-6-3",
  code: "6-3",
  title: "Trigonometry in Three Dimensions",
  goal: "I CAN find angles and lengths in 3D solids by identifying right-angled triangles in vertical and horizontal planes.",
  standards: ["0580 6.5"],
  vocabulary: [
    { term: "Angle with the horizontal", definition: "The angle a line makes with a horizontal plane, found using a vertical right-angled triangle." },
    { term: "Angle between two lines", definition: "Found by projecting one line onto a plane or using a triangle containing both directions." },
    { term: "Vertical plane", definition: "A plane perpendicular to the horizontal, containing a vertical height." },
    { term: "Horizontal projection", definition: "The shadow or footprint of a sloping line on a horizontal plane." },
    { term: "Pyramid apex", definition: "The top vertex of a pyramid; joined to the centre of the base by the perpendicular height." },
  ],
  concepts: [
    {
      id: "ciem-u6-trig-3d",
      title: "Trigonometry in 3D",
      skill: "Break 3D problems into 2D right-angled triangles using vertical heights and horizontal distances.",
      lesson: {
        sections: [
          {
            heading: "The strategy",
            body: "3D trigonometry always reduces to 2D right-angled triangles. The standard approach:\n\n1. Find the **vertical height** $h$ (often via Pythagoras in the solid's cross-section).\n2. Find the **horizontal distance** $d$ on the base.\n3. Combine $h$ and $d$ in a vertical right-angled triangle for the required angle or length.",
          },
          {
            heading: "Angle with the horizontal",
            body: "If a line goes from a base point up to a height $h$ with horizontal displacement $d$, the angle $\\theta$ with the horizontal satisfies $\\tan\\theta=\\frac{h}{d}$.",
          },
          {
            heading: "Pyramids and cones",
            body: "The perpendicular height from the apex to the centre of the base forms a right-angled triangle with the **slant edge** (apex to a base vertex) as hypotenuse. For a square-based pyramid, first find half the base diagonal for the horizontal distance.",
          },
        ],
        keyFormulas: [
          { name: "Angle with horizontal", statement: "$\\tan\\theta=\\frac{h}{d}$" },
          { name: "Slant edge", statement: "$l=\\sqrt{h^2+d^2}$" },
          { name: "Half diagonal of square", statement: "$\\frac{\\text{side}\\sqrt2}{2}$" },
        ],
        workedExample: {
          problem: "A square-based pyramid has base side $10$ m and perpendicular height $12$ m. Find the angle between a slant edge and the base.",
          solution: "Half the base diagonal $=\\frac{10\\sqrt2}{2}=5\\sqrt2\\approx7.07$ m. Then $\\tan\\theta=\\frac{12}{7.07}$, so $\\theta\\approx59.5^\\circ$.",
        },
      },
      questions: [
        {
          id: "ciem-u6-trig-3d-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In 3D trigonometry problems, what is the first step?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Use the area formula" },
              { id: "b", text: "Guess the angle" },
              { id: "c", text: "Identify the right-angled triangles in vertical and horizontal planes" },
              { id: "d", text: "Apply the cosine rule immediately" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "3D strategy", statement: "Reduce 3D problems to 2D right-angled triangles." },
            ],
            steps: [
              { reasoning: "Recall the standard method.", working: "\\text{find right triangles}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Identify the right-angled triangles",
            commonErrors: ["Trying to apply 2D formulas directly to the 3D figure."],
          },
        },
        {
          id: "ciem-u6-trig-3d-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A vertical pole of height $8$ m stands on horizontal ground. From a point $6$ m from the base, find the angle of elevation of the top of the pole.",
          response: { type: "numeric", parts: [{ label: "Angle", answer: 53.1, tolerance: 0.1, unit: "degrees" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Tangent", statement: "$\\tan\\theta=\\frac{\\text{opposite}}{\\text{adjacent}}=\\frac{h}{d}$" },
            ],
            steps: [
              { reasoning: "Opposite = $8$ m, adjacent = $6$ m.", working: "\\tan\\theta=\\frac{8}{6}", marks: 1, markCode: "M" },
              { reasoning: "Apply inverse tangent.", working: "\\theta=\\tan^{-1}(1.333)", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "\\approx53.1^\\circ", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$53.1^\\circ$",
            commonErrors: ["Inverting the ratio ($\\frac63$)."],
          },
        },
        {
          id: "ciem-u6-trig-3d-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A cuboid has dimensions $8$ cm $\\times$ $6$ cm $\\times$ $10$ cm. Find the angle between the longest diagonal (space diagonal) and the $8 \\times 6$ face.",
          response: { type: "numeric", parts: [{ label: "Angle", answer: 45, unit: "degrees" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Space diagonal", statement: "$d=\\sqrt{l^2+w^2+h^2}$" },
              { kind: "formula", name: "Angle with face", statement: "$\\tan\\theta=\\frac{\\text{height}}{\\text{diagonal of base}}$" },
            ],
            steps: [
              { reasoning: "The angle with the $8\\times6$ face uses the vertical height $10$ and the face diagonal $\\sqrt{8^2+6^2}=10$.", working: "\\text{face diagonal}=10", marks: 1, markCode: "M" },
              { reasoning: "Form the tangent ratio.", working: "\\tan\\theta=\\frac{10}{10}=1", marks: 1, markCode: "M" },
              { reasoning: "Apply inverse tangent.", working: "\\theta=\\tan^{-1}(1)", marks: 1, markCode: "M" },
              { reasoning: "State the angle.", working: "=45^\\circ", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$45^\\circ$",
            commonErrors: ["Using the wrong face or the full space diagonal in the wrong triangle."],
            examinerNote: "The space diagonal is $\\sqrt{64+36+100}=\\sqrt{200}=10\\sqrt2$; the angle with the face is found in the triangle with legs $10$ (face diagonal) and $10$ (height).",
          },
        },
        {
          id: "ciem-u6-trig-3d-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A square-based pyramid $ABCDV$ has base $ABCD$ with side $12$ cm and perpendicular height $VO=9$ cm, where $O$ is the centre of the base.",
          parts: [
            { label: "a", prompt: "Find the length of $OA$ (half the base diagonal).", marks: 2 },
            { label: "b", prompt: "Find the slant height of the pyramid (perpendicular distance from $V$ to side $AB$).", marks: 4 },
            { label: "c", prompt: "Find the angle between a slant edge $VA$ and the base.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Half diagonal", statement: "Diagonal of square $=$ side$\\times\\sqrt2$; half $=$ side$\\times\\frac{\\sqrt2}{2}$." },
              { kind: "formula", name: "Pythagoras", statement: "Slant height$^2=h^2+(\\text{half side})^2$; slant edge$^2=h^2+OA^2$." },
            ],
            steps: [
              { part: "a", reasoning: "Diagonal of square base $=12\\sqrt2$; half of it.", working: "OA=\\frac{12\\sqrt2}{2}=6\\sqrt2", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the length.", working: "OA=6\\sqrt2\\approx8.49\\text{ cm}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "The perpendicular distance from $V$ to $AB$ uses half the side $=6$ cm and height $9$ cm.", working: "\\text{slant height}=\\sqrt{9^2+6^2}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate.", working: "=\\sqrt{81+36}=\\sqrt{117}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Simplify.", working: "=3\\sqrt{13}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the slant height.", working: "\\approx10.8\\text{ cm}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "In right triangle $VOA$, $\\tan\\theta=\\frac{VO}{OA}=\\frac{9}{6\\sqrt2}$.", working: "\\tan\\theta=\\frac{9}{6\\sqrt2}\\approx1.0607", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Apply inverse tangent.", working: "\\theta=\\tan^{-1}(1.0607)", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State the angle.", working: "\\approx46.7^\\circ", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $6\\sqrt2$ cm (b) $3\\sqrt{13}\\approx10.8$ cm (c) $\\approx46.7^\\circ$",
            commonErrors: ["In (b) using $OA$ instead of half the side — the slant height meets the base at the midpoint of a side, not at $O$.", "In (c) using the slant height instead of height $VO$ and $OA$."],
            examinerNote: "Slant edge $VA=\\sqrt{VO^2+OA^2}=\\sqrt{81+72}=\\sqrt{153}\\approx12.4$ cm.",
          },
        },
        {
          id: "ciem-u6-trig-3d-q5", difficulty: "foundation", totalMarks: 1,
          stem: "What is the first step in a 3D trigonometry problem?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Apply the cosine rule to the whole solid" },
            { id: "b", text: "Estimate the answer" },
            { id: "c", text: "Use the area formula" },
            { id: "d", text: "Identify the right-angled triangles in vertical and horizontal planes" }
 ],
            correctChoiceId: "d" },
          markscheme: { principles: [ { kind: "technique", name: "3D strategy", statement: "Reduce 3D problems to 2D right-angled triangles." } ],
            steps: [ { reasoning: "Recall the standard method.", working: "\\text{find right triangles}", marks: 1, markCode: "B" } ],
            finalAnswer: "**(a)** Identify the right-angled triangles", commonErrors: ["Applying 2D formulas directly."] },
        },
        {
          id: "ciem-u6-trig-3d-q6", difficulty: "core", totalMarks: 1,
          stem: "A vertical pole of height $9$ m stands on horizontal ground. From a point $12$ m from the base, what is the angle of elevation of the top?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$28.1^\\circ$" },
            { id: "b", text: "$61.9^\\circ$" },
            { id: "c", text: "$36.9^\\circ$" },
            { id: "d", text: "$53.1^\\circ$" }
 ],
            correctChoiceId: "c" },
          markscheme: { principles: [ { kind: "formula", name: "Tangent", statement: "$\\tan\\theta=\\frac{h}{d}$" } ],
            steps: [ { reasoning: "Use opposite over adjacent.", working: "\\theta=\\tan^{-1}\\left(\\frac9{12}\\right)\\approx36.9^\\circ", marks: 1, markCode: "M" } ],
            finalAnswer: "**(a)** $36.9^\\circ$", commonErrors: ["Using $\\frac{12}{9}$."] },
        },
        {
          id: "ciem-u6-trig-3d-q7", difficulty: "core", totalMarks: 3,
          stem: "An observer stands $8$ m from the base of a vertical mast $15$ m high. Find the angle of elevation of the top of the mast.",
          response: { type: "numeric", parts: [ { label: "Angle", answer: 61.9, tolerance: 0.1, unit: "degrees" } ] },
          markscheme: { principles: [ { kind: "formula", name: "Tangent", statement: "$\\tan\\theta=\\frac{\\text{opposite}}{\\text{adjacent}}$" } ],
            steps: [
              { reasoning: "Opposite $=15$ m, adjacent $=8$ m.", working: "\\tan\\theta=\\frac{15}{8}", marks: 1, markCode: "M" },
              { reasoning: "Apply inverse tangent.", working: "\\theta=\\tan^{-1}(1.875)", marks: 1, markCode: "M" },
              { reasoning: "Evaluate and state the angle.", marks: 1, markCode: "A" } ],
            finalAnswer: "$\\theta\\approx61.9^\\circ$", commonErrors: ["Inverting the ratio."] },
        },
        {
          id: "ciem-u6-trig-3d-q8", difficulty: "challenge", totalMarks: 1,
          stem: "A square-based pyramid has base side $14$ m and perpendicular height $10$ m. What is the angle between a slant edge and the base, to $1$ decimal place?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$59.5^\\circ$" },
            { id: "b", text: "$46.7^\\circ$" },
            { id: "c", text: "$43.1^\\circ$" },
            { id: "d", text: "$45.3^\\circ$" }
 ],
            correctChoiceId: "d" },
          markscheme: { principles: [ { kind: "formula", name: "Angle with base", statement: "$\\tan\\theta=\\frac{h}{\\text{half base diagonal}}$" } ],
            steps: [ { reasoning: "Half diagonal $=7\\sqrt2\\approx9.90$; $\\tan\\theta=\\frac{10}{9.90}$.", working: "\\theta\\approx45.3^\\circ", marks: 1, markCode: "M" } ],
            finalAnswer: "**(b)** $45.3^\\circ$", commonErrors: ["Using the full diagonal or half the side."] },
        },
        {
          id: "ciem-u6-trig-3d-q9", difficulty: "core", totalMarks: 3,
          stem: "A cone has radius $6$ cm and height $8$ cm. Find the angle between a slant edge and the circular base.",
          response: { type: "numeric", parts: [ { label: "Angle", answer: 53.1, tolerance: 0.1, unit: "degrees" } ] },
          markscheme: { principles: [ { kind: "formula", name: "Tangent", statement: "$\\tan\\theta=\\frac{h}{r}$" } ],
            steps: [
              { reasoning: "Opposite $=8$, adjacent $=6$.", working: "\\tan\\theta=\\frac86", marks: 1, markCode: "M" },
              { reasoning: "Apply inverse tangent.", working: "\\theta=\\tan^{-1}\\left(\\frac43\\right)", marks: 1, markCode: "M" },
              { reasoning: "Evaluate and state the angle.", marks: 1, markCode: "A" } ],
            finalAnswer: "$\\theta\\approx53.1^\\circ$", commonErrors: ["Using the slant height as the opposite."] },
        },
        {
          id: "ciem-u6-trig-3d-q10", difficulty: "foundation", totalMarks: 2,
          stem: "Find the length of the space diagonal of a cuboid with dimensions $3$ cm, $4$ cm and $12$ cm.",
          response: { type: "numeric", parts: [ { label: "Diagonal", answer: 13, unit: "cm" } ] },
          markscheme: { principles: [ { kind: "formula", name: "Space diagonal", statement: "$d=\\sqrt{l^2+w^2+h^2}$" } ],
            steps: [
              { reasoning: "Square and add the dimensions.", working: "d=\\sqrt{9+16+144}=\\sqrt{169}", marks: 1, markCode: "M" },
              { reasoning: "State the diagonal.", marks: 1, markCode: "A" } ],
            finalAnswer: "$13$ cm", commonErrors: ["Using only two dimensions."] },
        },
        {
          id: "ciem-u6-trig-3d-q11", difficulty: "challenge", totalMarks: 1,
          stem: "For a square-based pyramid, the perpendicular height, half the base diagonal and the slant edge form which triangle?",
          response: { type: "mcq", choices: [
            { id: "a", text: "An equilateral triangle" },
            { id: "b", text: "A right-angled triangle" },
            { id: "c", text: "An isosceles triangle only" },
            { id: "d", text: "No fixed triangle" }
 ],
            correctChoiceId: "b" },
          markscheme: { principles: [ { kind: "property", name: "Pyramid geometry", statement: "The height is perpendicular to the base, so the triangle is right-angled." } ],
            steps: [ { reasoning: "Identify the right angle at the base centre.", working: "\\text{right-angled}", marks: 1, markCode: "B" } ],
            finalAnswer: "**(a)** A right-angled triangle", commonErrors: ["Using the slant height instead of the perpendicular height."] },
        },
        {
          id: "ciem-u6-trig-3d-q12", difficulty: "core", totalMarks: 4,
          stem: "A square-based pyramid has base side $10$ m and perpendicular height $12$ m. Find the length of a slant edge.",
          response: { type: "open" },
          markscheme: { principles: [ { kind: "formula", name: "Half diagonal", statement: "Half diagonal $=\\frac{s\\sqrt2}{2}$" }, { kind: "formula", name: "Pythagoras", statement: "$l^2=h^2+d^2$." } ],
            steps: [
              { reasoning: "Find half the base diagonal.", working: "OA=\\frac{10\\sqrt2}{2}=5\\sqrt2", marks: 1, markCode: "M" },
              { reasoning: "Apply Pythagoras in the vertical triangle.", working: "l=\\sqrt{12^2+(5\\sqrt2)^2}=\\sqrt{144+50}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "l=\\sqrt{194}\\approx13.9", marks: 1, markCode: "M" },
              { reasoning: "State the slant edge.", marks: 1, markCode: "A" } ],
            finalAnswer: "$l=\\sqrt{194}\\approx13.9$ m", commonErrors: ["Using half the side instead of half the diagonal."] },
        },
        {
          id: "ciem-u6-trig-3d-q13", difficulty: "challenge", totalMarks: 3,
          stem: "A cuboid has a rectangular base $6$ cm by $8$ cm and a space diagonal of length $26$ cm. Find the height of the cuboid.",
          response: { type: "numeric", parts: [ { label: "Height", answer: 24, unit: "cm" } ] },
          markscheme: { principles: [ { kind: "formula", name: "Space diagonal", statement: "$d^2=l^2+w^2+h^2$" } ],
            steps: [
              { reasoning: "Base diagonal squared is $6^2+8^2=100$.", working: "100", marks: 1, markCode: "M" },
              { reasoning: "Use $26^2=100+h^2$.", working: "h^2=676-100=576", marks: 1, markCode: "M" },
              { reasoning: "Take the square root and state the height.", marks: 1, markCode: "A" } ],
            finalAnswer: "$24$ cm", commonErrors: ["Using $26$ as the base diagonal."] },
        },
        {
          id: "ciem-u6-trig-3d-q14", difficulty: "foundation", totalMarks: 3,
          stem: "A vertical post is $9$ m tall and an observer is $12$ m from its base. Show that the angle of elevation is approximately $36.9^\\circ$.",
          response: { type: "open" },
          markscheme: { principles: [ { kind: "formula", name: "Tangent", statement: "$\\tan\\theta=\\frac{\\text{opposite}}{\\text{adjacent}}$" } ],
            steps: [
              { reasoning: "Form the ratio.", working: "\\tan\\theta=\\frac9{12}=0.75", marks: 1, markCode: "M" },
              { reasoning: "Apply inverse tangent.", working: "\\theta=\\tan^{-1}(0.75)", marks: 1, markCode: "M" },
              { reasoning: "State the angle.", marks: 1, markCode: "A" } ],
            finalAnswer: "$\\theta\\approx36.9^\\circ$", commonErrors: ["Using $\\frac{12}{9}$."] },
        },
        {
          id: "ciem-u6-trig-3d-q15", difficulty: "core", totalMarks: 1,
          stem: "In a square-based pyramid, which length is the hypotenuse of the right-angled triangle containing the perpendicular height and half the base diagonal?",
          response: { type: "mcq", choices: [
            { id: "a", text: "The base side" },
            { id: "b", text: "The perpendicular height" },
            { id: "c", text: "The slant edge" },
            { id: "d", text: "The slant height" }
 ],
            correctChoiceId: "c" },
          markscheme: { principles: [ { kind: "property", name: "Pyramid geometry", statement: "Slant edge $=\\sqrt{h^2+OA^2}$ is opposite the right angle." } ],
            steps: [ { reasoning: "Identify the hypotenuse.", working: "\\text{slant edge}", marks: 1, markCode: "B" } ],
            finalAnswer: "**(b)** The slant edge", commonErrors: ["Confusing slant height with slant edge."] },
        },
        {
          id: "ciem-u6-trig-3d-q16", difficulty: "challenge", totalMarks: 8,
          stem: "A square-based pyramid has base side $20$ m and perpendicular height $30$ m.",
          parts: [
            { label: "a", prompt: "Find half the length of the base diagonal.", marks: 2 },
            { label: "b", prompt: "Find the length of a slant edge.", marks: 3 },
            { label: "c", prompt: "Find the angle between a slant edge and the base.", marks: 3 } ],
          response: { type: "open" },
          markscheme: { principles: [ { kind: "formula", name: "Half diagonal", statement: "Half diagonal $=\\frac{s\\sqrt2}{2}=10\\sqrt2$" }, { kind: "formula", name: "Pythagoras", statement: "$l=\\sqrt{h^2+OA^2}$" }, { kind: "formula", name: "Tangent", statement: "$\\tan\\theta=\\frac{h}{OA}$" } ],
            steps: [
              { part: "a", reasoning: "Half the diagonal of a square with side $20$.", working: "OA=\\frac{20\\sqrt2}{2}=10\\sqrt2", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the length.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Apply Pythagoras with height $30$.", working: "l=\\sqrt{30^2+(10\\sqrt2)^2}=\\sqrt{900+200}=\\sqrt{1100}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Simplify.", working: "=10\\sqrt{11}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the slant edge.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Use tangent in the vertical triangle.", working: "\\tan\\theta=\\frac{30}{10\\sqrt2}=\\frac{3}{\\sqrt2}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Apply inverse tangent.", working: "\\theta=\\tan^{-1}\\left(\\frac{3}{\\sqrt2}\\right)", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State the angle.", marks: 1, markCode: "A" } ],
            finalAnswer: "(a) $10\\sqrt2$ m (b) $10\\sqrt{11}\\approx33.2$ m (c) $\\approx64.8^\\circ$",
            commonErrors: ["In (c) using the slant height instead of the perpendicular height."] },
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciem-u6-trig-3d-notes",
      title: "Trigonometry in 3D — revision notes",
      summary: "Reducing 3D problems to right-angled triangles using vertical heights and horizontal distances.",
      sections: [
        {
          heading: "The method",
          body: "1. Find the vertical height $h$ (Pythagoras in cross-section).\n2. Find the horizontal distance $d$ on the base.\n3. Use $\\tan\\theta=\\frac{h}{d}$ or $l=\\sqrt{h^2+d^2}$ in the vertical triangle.",
        },
        {
          heading: "Pyramids",
          body: "Height $VO$ to base centre $O$. Slant edge $VA$ is the hypotenuse of triangle $VOA$ with $OA=$ half the base diagonal. Slant height (face) uses half the **side**, not the diagonal.\n\n**Worked example.** Base side $12$, height $9$: $OA=6\\sqrt2\\approx8.49$; slant height $=\\sqrt{81+36}=3\\sqrt{13}\\approx10.8$ cm; angle with base $\\approx46.7^\\circ$.",
        },
        {
          heading: "Cuboids",
          body: "Space diagonal $=\\sqrt{l^2+w^2+h^2}$. Angle with a face: use that face's diagonal and the perpendicular dimension.",
        },
        {
          heading: "Exam technique",
          body: "- Always draw the 2D triangle you are using and label it.\n- Half diagonal of a square $=\\frac{\\text{side}\\sqrt2}{2}$; half side $=\\frac{\\text{side}}{2}$.\n- Don't confuse slant height (on the face) with slant edge (apex to vertex).",
        },
      ],
    },
  ],
};
