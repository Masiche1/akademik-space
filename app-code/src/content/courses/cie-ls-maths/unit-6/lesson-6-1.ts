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
              { id: "a", text: "$13$ cm" },
              { id: "b", text: "$36$ cm" },
              { id: "c", text: "$26$ cm" },
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
        {
          id: "cilm-u6-pa-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the perimeter of a rectangle $7$ cm by $3$ cm?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$10$ cm" },
              { id: "b", text: "$20$ cm" },
              { id: "c", text: "$21$ cm" },
              { id: "d", text: "$40$ cm" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Perimeter", statement: "$P = 2(7+3) = 20$ cm." },
            ],
            steps: [
              { reasoning: "$P = 7+3+7+3 = 20$ cm.", working: "2\\times10=20", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $20$ cm",
            commonErrors: ["Choosing (b) — that's $7\\times3$, the area."],
          },
        },
        {
          id: "cilm-u6-pa-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "Find the area of a triangle with base $8$ cm and perpendicular height $5$ cm.",
          response: { type: "numeric", parts: [{ label: "area (cm²)", answer: 20 }] },
          markscheme: {
            principles: [
              { kind: "convention", name: "Triangle area", statement: "$A = \\frac{1}{2}bh = \\frac{1}{2}\\times8\\times5 = 20$ cm²." },
            ],
            steps: [
              { reasoning: "$A = \\frac{1}{2}\\times8\\times5 = 20$ cm².", working: "\\frac{1}{2}\\times40=20", marks: 1, markCode: "M" },
            ],
            finalAnswer: "$20$ cm²",
            commonErrors: ["$40$ cm² — forgetting the $\\frac{1}{2}$ factor."],
          },
        },
        {
          id: "cilm-u6-pa-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "A parallelogram has base $12$ cm and perpendicular height $7$ cm. Find its area.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Parallelogram area", statement: "$A = bh = 12\\times7 = 84$ cm²." },
            ],
            steps: [
              { reasoning: "$A = bh = 12\\times7 = 84$ cm².", working: "12\\times7=84", marks: 1, markCode: "M" },
              { reasoning: "$84$ cm² — no $\\frac{1}{2}$ for parallelograms.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$84$ cm²",
            commonErrors: ["$42$ cm² — halving is only for triangles."],
          },
        },
        {
          id: "cilm-u6-pa-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is the perimeter of a square with side $5$ cm?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$25$ cm" },
              { id: "b", text: "$10$ cm" },
              { id: "c", text: "$15$ cm" },
              { id: "d", text: "$20$ cm" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Square perimeter", statement: "$P = 4s = 4\\times5 = 20$ cm." },
            ],
            steps: [
              { reasoning: "$P = 4\\times5 = 20$ cm.", working: "4\\times5=20", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $20$ cm",
            commonErrors: ["Choosing (c) $25$ — that's $5^2$, the area."],
          },
        },
        {
          id: "cilm-u6-pa-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A rectangle is $10$ cm by $4$ cm. Find its perimeter.",
          response: { type: "numeric", parts: [{ label: "perimeter (cm)", answer: 28 }] },
          markscheme: {
            principles: [
              { kind: "convention", name: "Perimeter", statement: "$P = 2(10+4) = 28$ cm." },
            ],
            steps: [
              { reasoning: "$P = 10+4+10+4 = 28$ cm.", working: "28", marks: 1, markCode: "M" },
            ],
            finalAnswer: "$28$ cm",
            commonErrors: ["$14$ cm — that's $10+4$, only two sides."],
          },
        },
        {
          id: "cilm-u6-pa-q10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A triangle has base $14$ cm and perpendicular height $9$ cm. Find its area.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Triangle area", statement: "$A = \\frac{1}{2}bh = \\frac{1}{2}\\times14\\times9 = 63$ cm²." },
            ],
            steps: [
              { reasoning: "$A = \\frac{1}{2}\\times14\\times9$.", working: "\\frac{1}{2}\\times126", marks: 1, markCode: "M" },
              { reasoning: "$A = 63$ cm².", working: "63", marks: 1, markCode: "M" },
              { reasoning: "$63$ cm² with correct units.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$63$ cm²",
            commonErrors: ["$126$ cm² — forgetting $\\frac{1}{2}$."],
          },
        },
        {
          id: "cilm-u6-pa-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The area of a shape measured in centimetres is written in units of...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "cm" },
              { id: "b", text: "cm³" },
              { id: "c", text: "cm²" },
              { id: "d", text: "cm⁴" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Units", statement: "Area uses square units: cm², m²." },
            ],
            steps: [
              { reasoning: "Area is measured in square units: cm².", working: "cm^2", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** cm²",
            commonErrors: ["Choosing (a) — that's a length/perimeter unit."],
          },
        },
        {
          id: "cilm-u6-pa-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "A rectangle is $12$ cm by $7$ cm. Find its area.",
          response: { type: "numeric", parts: [{ label: "area (cm²)", answer: 84 }] },
          markscheme: {
            principles: [
              { kind: "convention", name: "Rectangle area", statement: "$A = lw = 12\\times7 = 84$ cm²." },
            ],
            steps: [
              { reasoning: "$A = 12\\times7 = 84$ cm².", working: "12\\times7=84", marks: 1, markCode: "M" },
              { reasoning: "$84$ cm² — correct units.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$84$ cm²",
            commonErrors: ["$38$ cm² — that's the semi-perimeter, not area."],
          },
        },
        {
          id: "cilm-u6-pa-q13",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A parallelogram has base $10$ cm, perpendicular height $6$ cm and slant side $9$ cm. What is its area?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$30$ cm²" },
              { id: "b", text: "$54$ cm²" },
              { id: "c", text: "$60$ cm²" },
              { id: "d", text: "$90$ cm²" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Perpendicular height", statement: "$A = bh = 10\\times6 = 60$ cm²; slant side is a distractor." },
            ],
            steps: [
              { reasoning: "$A = 10\\times6 = 60$ cm² (perpendicular height only).", working: "10\\times6=60", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $60$ cm²",
            commonErrors: ["Choosing (a) $90$ — used slant side $9$ instead of height $6$."],
          },
        },
        {
          id: "cilm-u6-pa-q14",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A rectangular garden measures $20$ m by $15$ m. A path of width $1$ m runs around the inside edge.",
          parts: [
            { label: "a", prompt: "Find the area of the whole garden.", marks: 2 },
            { label: "b", prompt: "Find the area of the inner rectangle inside the path.", marks: 2 },
            { label: "c", prompt: "Find the area of the path.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Composite areas", statement: "Inner dims reduce by $2\\times$ width: $18\\times13$; path = outer − inner." },
            ],
            steps: [
              { part: "a", reasoning: "$A = 20\\times15 = 300$ m².", working: "300\\text{ m}^2", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Inner dims $20-2=18$ and $15-2=13$: $A = 18\\times13 = 234$ m².", working: "234\\text{ m}^2", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Path $= 300-234 = 66$ m².", working: "66\\text{ m}^2", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $300$ m² (b) $234$ m² (c) $66$ m²",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "c" },
            ],
            commonErrors: ["In (b) subtracting $1$ once per side instead of $2$ total."],
          },
        },
        {
          id: "cilm-u6-pa-q15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A rectangle has perimeter $30$ cm and length $9$ cm. What is its width?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$3$ cm" },
              { id: "b", text: "$21$ cm" },
              { id: "c", text: "$12$ cm" },
              { id: "d", text: "$6$ cm" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Reverse perimeter", statement: "$2(9+w)=30$ → $9+w=15$ → $w=6$." },
            ],
            steps: [
              { reasoning: "$30\\div2 = 15$; $w = 15-9 = 6$ cm.", working: "w=6", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $6$ cm",
            commonErrors: ["Choosing (d) — forgot to halve the perimeter first."],
          },
        },
        {
          id: "cilm-u6-pa-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A triangle has base $18$ cm and area $72$ cm². Find its perpendicular height.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Reverse triangle area", statement: "$72 = \\frac{1}{2}\\times18\\times h$ → $h = 8$." },
            ],
            steps: [
              { reasoning: "$72 = 9h$ → $h = 72\\div9 = 8$ cm.", working: "h=8", marks: 1, markCode: "M" },
              { reasoning: "$h = 8$ cm.", marks: 1, markCode: "M" },
              { reasoning: "Check: $\\frac{1}{2}\\times18\\times8 = 72$ ✓.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$h = 8$ cm",
            commonErrors: ["$h = 4$ — dividing by $18$ instead of $9$ ($\\frac{1}{2}\\times18$)."],
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
              { id: "c", text: "$32$ cm³" },
              { id: "d", text: "$12$ cm³" },
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
        {
          id: "cilm-u6-vol-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the volume of a cuboid $2$ cm × $3$ cm × $4$ cm?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$9$ cm³" },
              { id: "b", text: "$12$ cm³" },
              { id: "c", text: "$24$ cm³" },
              { id: "d", text: "$48$ cm³" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Cuboid volume", statement: "$V = lwh = 2\\times3\\times4 = 24$ cm³." },
            ],
            steps: [
              { reasoning: "$V = 2\\times3\\times4 = 24$ cm³.", working: "24", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $24$ cm³",
            commonErrors: ["Choosing (b) — that's $2+3+4$, adding instead of multiplying."],
          },
        },
        {
          id: "cilm-u6-vol-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "Find the surface area of a cube with side $3$ cm.",
          response: { type: "numeric", parts: [{ label: "surface area (cm²)", answer: 54 }] },
          markscheme: {
            principles: [
              { kind: "convention", name: "Cube SA", statement: "$SA = 6s^2 = 6\\times9 = 54$ cm²." },
            ],
            steps: [
              { reasoning: "$SA = 6\\times3^2 = 6\\times9 = 54$ cm².", working: "6\\times9=54", marks: 1, markCode: "M" },
            ],
            finalAnswer: "$54$ cm²",
            commonErrors: ["$27$ cm² — that's $3s^2$, only three faces."],
          },
        },
        {
          id: "cilm-u6-vol-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "A cylinder has radius $2$ cm and height $5$ cm. Find its volume using $\\pi \\approx 3.14$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Cylinder volume", statement: "$V = \\pi r^2 h = 3.14\\times4\\times5 = 62.8$ cm³." },
            ],
            steps: [
              { reasoning: "$V = 3.14\\times2^2\\times5 = 3.14\\times20 = 62.8$ cm³.", working: "3.14\\times4\\times5=62.8", marks: 1, markCode: "M" },
              { reasoning: "$62.8$ cm³.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$62.8$ cm³",
            commonErrors: ["Using $r$ not $r^2$ — volume needs the squared radius."],
          },
        },
        {
          id: "cilm-u6-vol-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "The volume of a 3D shape is measured in units of...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "cm" },
              { id: "b", text: "litres only" },
              { id: "c", text: "cm²" },
              { id: "d", text: "cm³" },
            ],
            dorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Units", statement: "Volume uses cubic units: cm³, m³." },
            ],
            steps: [
              { reasoning: "Volume is measured in cubic units: cm³.", working: "cm^3", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** cm³",
            commonErrors: ["Choosing (b) — cm² is for area."],
          },
        },
        {
          id: "cilm-u6-vol-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A cuboid is $5$ cm × $4$ cm × $3$ cm. Find its volume.",
          response: { type: "numeric", parts: [{ label: "volume (cm³)", answer: 60 }] },
          markscheme: {
            principles: [
              { kind: "convention", name: "Cuboid volume", statement: "$V = lwh = 5\\times4\\times3 = 60$ cm³." },
            ],
            steps: [
              { reasoning: "$V = 5\\times4\\times3 = 60$ cm³.", working: "60", marks: 1, markCode: "M" },
            ],
            finalAnswer: "$60$ cm³",
            commonErrors: ["$47$ cm³ — that's the surface-area bracket sum, not volume."],
          },
        },
        {
          id: "cilm-u6-vol-q10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A cylinder has radius $5$ cm and height $8$ cm. Find its volume using $\\pi \\approx 3.14$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Cylinder volume", statement: "$V = \\pi r^2 h = 3.14\\times25\\times8 = 628$ cm³." },
            ],
            steps: [
              { reasoning: "$V = 3.14\\times5^2\\times8$.", working: "3.14\\times25\\times8", marks: 1, markCode: "M" },
              { reasoning: "$V = 628$ cm³.", working: "628", marks: 1, markCode: "M" },
              { reasoning: "$628$ cm³ with correct units.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$628$ cm³",
            commonErrors: ["$125.6$ cm³ — used $r$ not $r^2$ (that's $\\pi r h$ roughly)."],
          },
        },
        {
          id: "cilm-u6-vol-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The volume of any prism equals...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Area of cross-section × length" },
              { id: "b", text: "Perimeter of cross-section × length" },
              { id: "c", text: "Area of cross-section ÷ length" },
              { id: "d", text: "Surface area × height" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Prism volume", statement: "$V = \\text{cross-sectional area} \\times \\text{length}$." },
            ],
            steps: [
              { reasoning: "Prism volume = cross-section area × length.", working: "A_{cs}\\times L", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Area of cross-section × length",
            commonErrors: ["Choosing (a) — perimeter gives no volume."],
          },
        },
        {
          id: "cilm-u6-vol-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "A cube has side $5$ cm. Find its volume.",
          response: { type: "numeric", parts: [{ label: "volume (cm³)", answer: 125 }] },
          markscheme: {
            principles: [
              { kind: "convention", name: "Cube volume", statement: "$V = s^3 = 125$ cm³." },
            ],
            steps: [
              { reasoning: "$V = 5\\times5\\times5 = 125$ cm³.", working: "5^3=125", marks: 1, markCode: "M" },
              { reasoning: "$125$ cm³.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$125$ cm³",
            commonErrors: ["$25$ cm³ — that's $5^2$, surface-area-like."],
          },
        },
        {
          id: "cilm-u6-vol-q13",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A cuboid measures $3$ cm × $3$ cm × $3$ cm. What is its surface area?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$54$ cm²" },
              { id: "b", text: "$9$ cm²" },
              { id: "c", text: "$108$ cm²" },
              { id: "d", text: "$27$ cm²" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Cube SA", statement: "It's a cube: $SA = 6s^2 = 6\\times9 = 54$ cm²." },
            ],
            steps: [
              { reasoning: "$SA = 6\\times3^2 = 54$ cm².", working: "54", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $54$ cm²",
            commonErrors: ["Choosing (a) $27$ — that's the volume $3^3$."],
          },
        },
        {
          id: "cilm-u6-vol-q14",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A closed box is a cuboid $10$ cm × $6$ cm × $4$ cm.",
          parts: [
            { label: "a", prompt: "Find its volume.", marks: 2 },
            { label: "b", prompt: "Find its surface area.", marks: 2 },
            { label: "c", prompt: "If every dimension doubles, find the new volume.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Cuboid calculations", statement: "$V=lwh$; $SA=2(lw+lh+wh)$; scaling dims by $k$ scales volume by $k^3$." },
            ],
            steps: [
              { part: "a", reasoning: "$V = 10\\times6\\times4 = 240$ cm³.", working: "240\\text{ cm}^3", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$SA = 2(60+40+24) = 2\\times124 = 248$ cm².", working: "248\\text{ cm}^2", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "New dims $20\\times12\\times8$: $V = 1920$ cm³ (or $240\\times8$).", working: "1920\\text{ cm}^3", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $240$ cm³ (b) $248$ cm² (c) $1920$ cm³",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "c" },
            ],
            commonErrors: ["In (b) forgetting to double the sum of face areas."],
          },
        },
        {
          id: "cilm-u6-vol-q15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A cylinder has radius $7$ cm and height $10$ cm. Find its volume using $\\pi \\approx \\frac{22}{7}$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$70$ cm³" },
              { id: "b", text: "$1540$ cm³" },
              { id: "c", text: "$220$ cm³" },
              { id: "d", text: "$440$ cm³" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Cylinder volume", statement: "$V = \\frac{22}{7}\\times49\\times10 = 1540$ cm³." },
            ],
            steps: [
              { reasoning: "$V = \\frac{22}{7}\\times7^2\\times10 = \\frac{22}{7}\\times490 = 1540$ cm³.", working: "1540", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $1540$ cm³",
            commonErrors: ["Choosing (b) — used $r$ not $r^2$."],
          },
        },
        {
          id: "cilm-u6-vol-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A cube has volume $216$ cm³. Find its side length and its surface area.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Reverse cube", statement: "$s = \\sqrt[3]{216} = 6$; $SA = 6s^2 = 216$ cm²." },
            ],
            steps: [
              { reasoning: "$s^3 = 216$ → $s = 6$ cm.", working: "s=6", marks: 1, markCode: "M" },
              { reasoning: "$SA = 6\\times6^2 = 6\\times36 = 216$ cm².", working: "216", marks: 1, markCode: "M" },
              { reasoning: "Side $=6$ cm; surface area $=216$ cm².", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$s = 6$ cm, $SA = 216$ cm²",
            commonErrors: ["$s = 36$ — took square root instead of cube root."],
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
