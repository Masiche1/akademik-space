import type { Lesson } from "../../../types.ts";

export const lesson61: Lesson = {
  id: "cilm-u6-lesson-6-1",
  code: "6-1",
  title: "Perimeter and area of 2D shapes",
  goal: "I CAN calculate perimeter and area of rectangles, triangles, parallelograms and composite shapes.",
  standards: ["0862 Measure: perimeter and area"],
  vocabulary: [
    { term: "Perimeter", definition: "Total distance around the outside of a shape — measured in units (cm, m)." },
    { term: "Area", definition: "Space inside a shape — measured in square units (cm², m²)." },
    { term: "Base", definition: "The side a shape 'sits on' — used with perpendicular height for area." },
    { term: "Height", definition: "Perpendicular distance from base to top — NOT the slanted side." },
    { term: "Composite shape", definition: "A shape made by joining two or more simpler shapes." },
    { term: "Unit square", definition: "A square of side 1 unit — area counted in these." },
  ],
  concepts: [
    {
      id: "cilm-u6-perimeter-area",
      title: "Perimeter and area formulas",
      skill: "Apply formulas for rectangles, triangles and parallelograms; distinguish perimeter from area.",
      lesson: {
        sections: [
          {
            heading: "Perimeter vs area",
            body: "- **Perimeter**: add all side lengths (units: cm, m)\n- **Area**: space inside (units: cm², m²)\n\nRectangle $8\\times5$: perimeter $=2(8+5)=26$ cm; area $=8\\times5=40$ cm².",
          },
          {
            heading: "Key formulas",
            body: "- Rectangle: $P=2(l+w)$, $A=lw$\n- Triangle: $A=\\frac{1}{2}bh$\n- Parallelogram: $A=bh$ (base × perpendicular height)\n- Square: $A=s^2$, $P=4s$",
          },
          {
            heading: "Height is perpendicular",
            body: "For triangles and parallelograms, height must be PERPENDICULAR to the base — not the slant height. A parallelogram with base 10 and slant side 8 but perpendicular height 6 has area $10\\times6=60$, not $80$.",
          },
        ],
        keyFormulas: [
          { name: "Rectangle", statement: "$P=2(l+w)$; $A=lw$" },
          { name: "Triangle", statement: "$A=\\frac{1}{2}bh$" },
          { name: "Parallelogram", statement: "$A=bh$ ($h$ perpendicular)" },
        ],
        workedExample: {
          problem: "A triangle has base $12$ cm and perpendicular height $7$ cm. Find its area.",
          solution: "$A = \\frac{1}{2} \\times 12 \\times 7 = 42$ cm².",
        },
      },
      questions: [
        {
          id: "cilm-u6-pa-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the perimeter of a rectangle $9$ cm by $4$ cm?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$26$ cm" },
              { id: "b", text: "$36$ cm" },
              { id: "c", text: "$13$ cm" },
              { id: "d", text: "$18$ cm" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Perimeter", statement: "$P = 9+4+9+4 = 26$ cm." },
            ],
            steps: [
              { reasoning: "$P = 9+4+9+4 = 26$ cm.", working: "9+4+9+4=26", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $26$ cm",
            commonErrors: ["Choosing (b) $36$ — that's $4 \\times 9$, area-related confusion."],
          },
        },
        {
          id: "cilm-u6-pa-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the area of a triangle with base $10$ cm and height $6$ cm.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Triangle area", statement: "$A = \\frac{1}{2} \\times 10 \\times 6 = 30$ cm²." },
            ],
            steps: [
              { reasoning: "$A = \\frac{1}{2}bh = \\frac{1}{2} \\times 10 \\times 6 = 30$ cm².", working: "\\frac{1}{2}\\times10\\times6=30", marks: 1, markCode: "M" },
              { reasoning: "$30$ cm².", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$30$ cm²",
            commonErrors: ["$60$ cm² — forgetting the $\\frac{1}{2}$ factor for triangles."],
          },
        },
        {
          id: "cilm-u6-pa-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A parallelogram has base $14$ cm and perpendicular height $5$ cm, but slant side $8$ cm. Find its area.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Perpendicular height", statement: "$A = bh = 14 \\times 5 = 70$ cm²; slant side is a distractor." },
            ],
            steps: [
              { reasoning: "Use base × PERPENDICULAR height, not slant side.", working: "h=5", marks: 1, markCode: "M" },
              { reasoning: "$A = 14 \\times 5 = 70$ cm².", working: "14\\times5=70", marks: 1, markCode: "M" },
              { reasoning: "$70$ cm².", marks: 1, markCode: "M" },
              { reasoning: "Slant side $8$ is irrelevant for area.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$70$ cm²",
            commonErrors: ["$14 \\times 8 = 112$ — used slant side instead of perpendicular height."],
          },
        },
        {
          id: "cilm-u6-pa-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A rectangular field is $45$ m by $30$ m with a $2$ m wide path around the inside edge.",
          parts: [
            { label: "a", prompt: "Find the perimeter of the field.", marks: 2 },
            { label: "b", prompt: "Find the area of the field.", marks: 2 },
            { label: "c", prompt: "Find the area of the inner rectangle (excluding the path).", marks: 3 },
            { label: "d", prompt: "Find the area of the path.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Composite areas", statement: "Path reduces inner dimensions by $2 \\times$ width on each side." },
            ],
            steps: [
              { part: "a", reasoning: "$P = 2(45+30) = 150$ m.", working: "150\\text{ m}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$A = 45 \\times 30 = 1350$ m².", working: "1350\\text{ m}^2", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Inner dims: $45-4=41$ m and $30-4=26$ m (path is $2$ m on EACH side).", working: "41 \\times 26", marks: 1, markCode: "M" },
              { part: "c", reasoning: "$A_{inner} = 41 \\times 26 = 1066$ m².", working: "1066\\text{ m}^2", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "$A_{path} = 1350 - 1066 = 284$ m².", working: "284\\text{ m}^2", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Correct subtraction.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $150$ m (b) $1350$ m² (c) $1066$ m² (d) $284$ m²",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "b" },
              { level: "Level 3", marks: "2-3", descriptor: "Inner area correct.", part: "c" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Path area correct.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "d" },
            ],
            commonErrors: ["In (c) subtracting $2$ once instead of $4$ total — path on both sides."],
          },
        },
      ],
    },
    {
      id: "cilm-u6-volume",
      title: "Volume and surface area",
      skill: "Calculate volume and surface area of cuboids, prisms and cylinders.",
      lesson: {
        sections: [
          {
            heading: "Volume formulas",
            body: "- Cuboid: $V = lwh$\n- Cube: $V = s^3$\n- Cylinder: $V = \\pi r^2 h$\n- Prism: $V = \\text{area of cross-section} \\times \\text{length}$",
          },
          {
            heading: "Surface area",
            body: "- Cuboid: $SA = 2(lw + lh + wh)$ — six faces, three pairs\n- Cube: $SA = 6s^2$\n- Cylinder: $SA = 2\\pi r^2 + 2\\pi rh$ (two circles + curved surface)",
          },
          {
            heading: "Units matter",
            body: "Volume: cm³, m³. Surface area: cm², m². Don't mix — a box $3\\times4\\times5$ cm has volume $60$ cm³ but surface area $94$ cm².",
          },
        ],
        keyFormulas: [
          { name: "Cuboid volume", statement: "$V = lwh$" },
          { name: "Cuboid SA", statement: "$SA = 2(lw + lh + wh)$" },
          { name: "Cylinder volume", statement: "$V = \\pi r^2 h$" },
        ],
        workedExample: {
          problem: "A cuboid is $5$ cm × $4$ cm × $3$ cm. Find volume and surface area.",
          solution: "$V = 5\\times4\\times3 = 60$ cm³. $SA = 2(20+15+12) = 2(47) = 94$ cm².",
        },
      },
      questions: [
        {
          id: "cilm-u6-vol-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the volume of a cube with side $4$ cm?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$64$ cm³" },
              { id: "b", text: "$16$ cm³" },
              { id: "c", text: "$12$ cm³" },
              { id: "d", text: "$32$ cm³" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Cube volume", statement: "$V = s^3 = 4^3 = 64$ cm³." },
            ],
            steps: [
              { reasoning: "$V = 4 \\times 4 \\times 4 = 64$ cm³.", working: "4^3=64", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $64$ cm³",
            commonErrors: ["Choosing (b) $16$ — that's $4^2$, area not volume."],
          },
        },
        {
          id: "cilm-u6-vol-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A cylinder has radius $3$ cm and height $10$ cm. Find its volume using $\\pi \\approx 3.14$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Cylinder volume", statement: "$V = \\pi r^2 h = 3.14 \\times 9 \\times 10 = 282.6$ cm³." },
            ],
            steps: [
              { reasoning: "$V = 3.14 \\times 3^2 \\times 10 = 3.14 \\times 90 = 282.6$ cm³.", working: "3.14\\times9\\times10=282.6", marks: 1, markCode: "M" },
              { reasoning: "$282.6$ cm³.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$282.6$ cm³",
            commonErrors: ["Using $r$ not $r^2$ — cylinder volume needs squared radius."],
          },
        },
        {
          id: "cilm-u6-vol-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A cuboid is $8$ cm × $6$ cm × $4$ cm. Find its surface area.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Surface area", statement: "$SA = 2(lw+lh+wh) = 2(48+32+24) = 2(104) = 208$ cm²." },
            ],
            steps: [
              { reasoning: "Three face pairs: $8\\times6=48$, $8\\times4=32$, $6\\times4=24$.", working: "48+32+24=104", marks: 1, markCode: "M" },
              { reasoning: "$SA = 2 \\times 104 = 208$ cm².", working: "2\\times104=208", marks: 1, markCode: "M" },
              { reasoning: "$208$ cm².", marks: 1, markCode: "M" },
              { reasoning: "Doubling accounts for both faces of each pair.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$208$ cm²",
            commonErrors: ["Forgetting to double — only counted three faces."],
          },
        },
        {
          id: "cilm-u6-vol-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A fish tank is a cuboid $60$ cm × $40$ cm × $30$ cm.",
          parts: [
            { label: "a", prompt: "Find its volume in cm³.", marks: 2 },
            { label: "b", prompt: "Convert the volume to litres ($1$ litre $= 1000$ cm³).", marks: 2 },
            { label: "c", prompt: "Find the surface area of glass needed (all six faces).", marks: 3 },
            { label: "d", prompt: "If filled to $80\\%$ capacity, how much water is in litres?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Volume applications", statement: "Volume → convert units → surface area → percentage capacity." },
            ],
            steps: [
              { part: "a", reasoning: "$V = 60 \\times 40 \\times 30 = 72{,}000$ cm³.", working: "72000\\text{ cm}^3", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$72{,}000 \\div 1000 = 72$ litres.", working: "72\\text{ L}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Correct conversion.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$SA = 2(2400 + 1800 + 1200) = 2(5400) = 10{,}800$ cm².", working: "2\\times5400=10800", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Face areas correct.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Correct total.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "$0.8 \\times 72 = 57.6$ litres.", working: "0.8\\times72=57.6", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $72{,}000$ cm³ (b) $72$ L (c) $10{,}800$ cm² (d) $57.6$ L",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Conversion correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "b" },
              { level: "Level 3", marks: "2-3", descriptor: "SA correct.", part: "c" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Capacity correct.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "d" },
            ],
            commonErrors: ["In (c) forgetting the doubling factor."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cilm-u6-area-volume-notes",
      title: "Perimeter, area, volume — revision notes",
      summary: "2D formulas, 3D volume and surface area, unit conversions.",
      sections: [
        {
          heading: "2D",
          body: "Perimeter = sum of sides. Rectangle $A=lw$; triangle $A=\\frac{1}{2}bh$; parallelogram $A=bh$ (perpendicular height!). Composite = add/subtract parts.",
        },
        {
          heading: "3D",
          body: "Cuboid $V=lwh$, $SA=2(lw+lh+wh)$; cylinder $V=\\pi r^2h$. Volume in units³, area in units². $1$ L $=1000$ cm³.",
        },
      ],
    },
  ],
};
