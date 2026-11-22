import type { Lesson } from "../../../types.ts";

export const lesson53: Lesson = {
  id: "cilm-u5-lesson-5-3",
  code: "5-3",
  title: "Circles and symmetry",
  goal: "I CAN identify parts of a circle, apply circle theorems at this level, and recognise lines of symmetry.",
  standards: ["0862 Geometry: circles and symmetry"],
  vocabulary: [
    { term: "Radius", definition: "Distance from centre to edge — all radii of a circle are equal." },
    { term: "Diameter", definition: "A line through the centre touching two points on the circle — $d = 2r$." },
    { term: "Chord", definition: "A line joining two points on the circle (may not pass through centre)." },
    { term: "Tangent", definition: "A line touching the circle at exactly one point." },
    { term: "Arc", definition: "A curved section of the circle's circumference." },
    { term: "Line of symmetry", definition: "A line dividing a shape into two mirror-image halves." },
  ],
  concepts: [
    {
      id: "cilm-u5-circles",
      title: "Parts of a circle",
      skill: "Identify radius, diameter, chord, tangent, arc and sector; apply basic circle facts.",
      lesson: {
        sections: [
          {
            heading: "Circle vocabulary",
            body: "- **Radius** ($r$): centre to circumference\n- **Diameter** ($d$): through centre, $d = 2r$\n- **Chord**: any line joining two points on circumference\n- **Tangent**: touches at ONE point only\n- **Arc**: curved part of circumference\n- **Sector**: pie-slice region bounded by two radii and an arc\n- **Segment**: region cut off by a chord",
          },
          {
            heading: "Basic facts",
            body: "- All radii equal: $r = \\frac{d}{2}$\n- Circumference $= 2\\pi r = \\pi d$\n- A tangent is perpendicular to the radius at the point of contact\n- The angle in a semicircle is $90°$ (preview of circle theorems)",
          },
          {
            heading: "Identifying features",
            body: "Practice distinguishing: a line through the centre = diameter; a line touching once = tangent; a line joining two circumference points = chord.",
          },
        ],
        keyFormulas: [
          { name: "Diameter", statement: "$d = 2r$ and $r = \\frac{d}{2}$." },
          { name: "Circumference", statement: "$C = 2\\pi r = \\pi d$." },
        ],
        workedExample: {
          problem: "A circle has diameter $14$ cm. Find its radius and circumference (use $\\pi \\approx 3.14$).",
          solution: "$r = 7$ cm. $C = \\pi d = 3.14 \\times 14 = 43.96$ cm.",
        },
      },
      questions: [
        {
          id: "cilm-u5-circ-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A circle has diameter $10$ cm. What is its radius?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$20$ cm" },
              { id: "b", text: "$5$ cm" },
              { id: "c", text: "$2.5$ cm" },
              { id: "d", text: "$10$ cm" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Radius", statement: "$r = d/2 = 10/2 = 5$ cm." },
            ],
            steps: [
              { reasoning: "$r = \\frac{d}{2} = \\frac{10}{2} = 5$ cm.", working: "r=5", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $5$ cm",
            commonErrors: ["Choosing (b) — radius is HALF the diameter."],
          },
        },
        {
          id: "cilm-u5-circ-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the difference between a chord and a diameter?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Chord vs diameter", statement: "Diameter is the longest chord — passes through centre; chord is any line joining two circumference points." },
            ],
            steps: [
              { reasoning: "Chord joins any two points on circumference.", working: "\\text{any two points}", marks: 1, markCode: "M" },
              { reasoning: "Diameter is special: longest chord, passes through centre.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "A chord joins any two points on the circle; a diameter is the longest chord, passing through the centre.",
            commonErrors: ["Saying they're identical — diameter is a special case of chord."],
          },
        },
        {
          id: "cilm-u5-circ-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A circle has radius $7$ cm. Find its circumference using $\\pi \\approx \\frac{22}{7}$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Circumference", statement: "$C = 2\\pi r = 2 \\times \\frac{22}{7} \\times 7 = 44$ cm." },
            ],
            steps: [
              { reasoning: "$C = 2 \\times \\frac{22}{7} \\times 7$.", working: "2\\times\\frac{22}{7}\\times7", marks: 1, markCode: "M" },
              { reasoning: "The $7$ cancels: $C = 2 \\times 22 = 44$ cm.", working: "C=44", marks: 1, markCode: "M" },
              { reasoning: "$C = 44$ cm.", marks: 1, markCode: "M" },
              { reasoning: "Using $\\frac{22}{7}$ makes calculation exact here.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$44$ cm",
            commonErrors: ["Using diameter instead of radius — formula is $2\\pi r$ or $\\pi d$."],
          },
        },
        {
          id: "cilm-u5-circ-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A circular garden has radius $5$ m. A path runs around its edge.",
          parts: [
            { label: "a", prompt: "Find the circumference using $\\pi \\approx 3.14$.", marks: 2 },
            { label: "b", prompt: "A straight path cuts across the garden through the centre. How long is it?", marks: 2 },
            { label: "c", prompt: "Explain why this path is a diameter, not just a chord.", marks: 2 },
            { label: "d", prompt: "Find the area of the garden using $A = \\pi r^2$.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Circle applications", statement: "Circumference for edge, diameter for through-centre, area formula for region." },
            ],
            steps: [
              { part: "a", reasoning: "$C = 2 \\times 3.14 \\times 5 = 31.4$ m.", working: "31.4\\text{ m}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Through centre = diameter $= 2 \\times 5 = 10$ m.", working: "10\\text{ m}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Diameter is defined as passing through centre; any line through centre touching two circumference points is the diameter.", working: "\\text{through centre}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Clear explanation.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "$A = 3.14 \\times 5^2 = 3.14 \\times 25 = 78.5$ m².", working: "3.14\\times25=78.5", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Squared radius applied.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $31.4$ m (b) $10$ m (c) passes through centre = diameter (d) $78.5$ m²",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Circumference correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Diameter correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Explained.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Area correct.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "d" },
            ],
            commonErrors: ["In (d) using $r$ not $r^2$ — area needs squared radius."],
          },
        },
        {
          id: "cilm-u5-circ-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A circle has diameter $16$ cm. What is its radius?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$16$ cm" },
              { id: "b", text: "$8$ cm" },
              { id: "c", text: "$4$ cm" },
              { id: "d", text: "$32$ cm" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Radius", statement: "$r = d/2 = 16/2 = 8$ cm." },
            ],
            steps: [
              { reasoning: "$r = \\frac{16}{2} = 8$ cm.", working: "r=8", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $8$ cm",
            commonErrors: ["Choosing (c) — that's doubling, not halving."],
          },
        },
        {
          id: "cilm-u5-circ-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "A circle has radius $5$ cm. Find its circumference using $\\pi \\approx 3.14$.",
          response: { type: "numeric", parts: [{ label: "circumference (cm)", answer: 31.4, tolerance: 0.01 }] },
          markscheme: {
            principles: [
              { kind: "convention", name: "Circumference", statement: "$C = 2\\pi r = 2\\times3.14\\times5 = 31.4$ cm." },
            ],
            steps: [
              { reasoning: "$C = 2 \\times 3.14 \\times 5 = 31.4$ cm.", working: "2\\times3.14\\times5=31.4", marks: 1, markCode: "M" },
            ],
            finalAnswer: "$31.4$ cm",
            commonErrors: ["Using $\\pi r$ instead of $2\\pi r$ — missing the factor of 2."],
          },
        },
        {
          id: "cilm-u5-circ-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "A circle has diameter $24$ cm. Find its radius and its circumference using $\\pi \\approx 3.14$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Circle parts", statement: "$r = d/2$; $C = \\pi d$." },
            ],
            steps: [
              { reasoning: "$r = 24\\div2 = 12$ cm; $C = 3.14\\times24 = 75.36$ cm.", working: "r=12,C=75.36", marks: 1, markCode: "M" },
              { reasoning: "Both values correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$r = 12$ cm, $C = 75.36$ cm",
            commonErrors: ["Using $r=24$ in $C=2\\pi r$ — radius is half the diameter."],
          },
        },
        {
          id: "cilm-u5-circ-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "A straight line that touches a circle at exactly one point is called a...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Radius" },
              { id: "b", text: "Diameter" },
              { id: "c", text: "Chord" },
              { id: "d", text: "Tangent" },
            ],
            dorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Tangent", statement: "A tangent touches the circle at exactly one point." },
            ],
            steps: [
              { reasoning: "One point of contact → tangent.", working: "tangent", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Tangent",
            commonErrors: ["Choosing (a) — a chord joins TWO points on the circle."],
          },
        },
        {
          id: "cilm-u5-circ-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A circle has radius $9$ cm. What is its diameter?",
          response: { type: "numeric", parts: [{ label: "diameter (cm)", answer: 18 }] },
          markscheme: {
            principles: [
              { kind: "convention", name: "Diameter", statement: "$d = 2r = 2\\times9 = 18$ cm." },
            ],
            steps: [
              { reasoning: "$d = 2 \\times 9 = 18$ cm.", working: "d=18", marks: 1, markCode: "M" },
            ],
            finalAnswer: "$18$ cm",
            commonErrors: ["Halving instead of doubling."],
          },
        },
        {
          id: "cilm-u5-circ-q10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A circle has radius $6$ cm. Find its circumference and its area using $\\pi \\approx 3.14$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Circle measures", statement: "$C = 2\\pi r$; $A = \\pi r^2$." },
            ],
            steps: [
              { reasoning: "$C = 2\\times3.14\\times6 = 37.68$ cm.", working: "37.68", marks: 1, markCode: "M" },
              { reasoning: "$A = 3.14\\times6^2 = 3.14\\times36 = 113.04$ cm².", working: "113.04", marks: 1, markCode: "M" },
              { reasoning: "Both answers correct with units.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$C = 37.68$ cm, $A = 113.04$ cm²",
            commonErrors: ["Area $=\\pi r$ instead of $\\pi r^2$ — square the radius."],
          },
        },
        {
          id: "cilm-u5-circ-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "All the radii of a given circle are...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Twice the diameter" },
              { id: "b", text: "Equal" },
              { id: "c", text: "Different lengths" },
              { id: "d", text: "Half the chords" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Radius", statement: "Every radius of a circle is equal — centre to circumference." },
            ],
            steps: [
              { reasoning: "All radii of a circle are equal.", working: "equal", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Equal",
            commonErrors: ["Thinking radii can differ — that would not be a circle."],
          },
        },
        {
          id: "cilm-u5-circ-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "A circle has circumference $31.4$ cm ($\\pi \\approx 3.14$). Find its diameter.",
          response: { type: "numeric", parts: [{ label: "diameter (cm)", answer: 10 }] },
          markscheme: {
            principles: [
              { kind: "skill", name: "Reverse circumference", statement: "$C = \\pi d$ → $d = 31.4\\div3.14 = 10$." },
            ],
            steps: [
              { reasoning: "$d = C\\div\\pi = 31.4\\div3.14 = 10$ cm.", working: "31.4\\div3.14=10", marks: 1, markCode: "M" },
              { reasoning: "$d = 10$ cm.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$10$ cm",
            commonErrors: ["Dividing by $2\\pi$ — $C=\\pi d$ directly gives diameter."],
          },
        },
        {
          id: "cilm-u5-circ-q13",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A tangent touches a circle at point $P$, and $O$ is the centre. What is the angle between the tangent and the radius $OP$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$45°$" },
              { id: "b", text: "$90°$" },
              { id: "c", text: "$180°$" },
              { id: "d", text: "$60°$" },
            ],
            borrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Tangent property", statement: "A tangent is perpendicular to the radius at the point of contact." },
            ],
            steps: [
              { reasoning: "Tangent ⊥ radius: $90°$.", working: "90°", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** $90°$",
            commonErrors: ["Choosing (a) — the tangent is perpendicular, not at $45°$."],
          },
        },
        {
          id: "cilm-u5-circ-q14",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A circle has radius $10$ cm.",
          parts: [
            { label: "a", prompt: "Find its circumference using $\\pi \\approx 3.14$.", marks: 2 },
            { label: "b", prompt: "Find its area using $\\pi \\approx 3.14$.", marks: 2 },
            { label: "c", prompt: "If the radius doubles, find the new circumference.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Circle measures", statement: "$C = 2\\pi r$; $A = \\pi r^2$; doubling $r$ doubles $C$." },
            ],
            steps: [
              { part: "a", reasoning: "$C = 2\\times3.14\\times10 = 62.8$ cm.", working: "62.8\\text{ cm}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$A = 3.14\\times10^2 = 314$ cm².", working: "314\\text{ cm}^2", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "New $r = 20$; $C = 2\\times3.14\\times20 = 125.6$ cm.", working: "125.6\\text{ cm}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $62.8$ cm (b) $314$ cm² (c) $125.6$ cm",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "c" },
            ],
            commonErrors: ["In (c) using the original circumference — radius doubled so circumference doubles."],
          },
        },
        {
          id: "cilm-u5-circ-q15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A circle has circumference $44$ cm ($\\pi \\approx \\frac{22}{7}$). What is its radius?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$14$ cm" },
              { id: "b", text: "$7$ cm" },
              { id: "c", text: "$22$ cm" },
              { id: "d", text: "$3.5$ cm" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Reverse circumference", statement: "$44 = 2\\times\\frac{22}{7}\\times r$ → $r = 7$." },
            ],
            steps: [
              { reasoning: "$r = 44\\div(2\\times\\frac{22}{7}) = 44\\div\\frac{44}{7} = 7$ cm.", working: "r=7", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $7$ cm",
            commonErrors: ["Choosing (b) — that's the diameter, not the radius."],
          },
        },
        {
          id: "cilm-u5-circ-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A circular running track has radius $30$ m. An athlete runs $3$ complete laps ($\\pi \\approx 3.14$). Find the total distance run.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Circumference application", statement: "Distance $= 3 \\times 2\\pi r = 3\\times188.4 = 565.2$ m." },
            ],
            steps: [
              { reasoning: "One lap $= C = 2\\times3.14\\times30 = 188.4$ m.", working: "188.4", marks: 1, markCode: "M" },
              { reasoning: "$3$ laps: $3\\times188.4 = 565.2$ m.", working: "565.2", marks: 1, markCode: "M" },
              { reasoning: "Total distance $=565.2$ m.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$565.2$ m",
            commonErrors: ["Forgetting to multiply by $3$ laps."],
          },
        },
      ],
    },
    {
      id: "cilm-u5-symmetry",
      title: "Lines of symmetry",
      skill: "Identify and count lines of symmetry in 2D shapes.",
      lesson: {
        sections: [
          {
            heading: "What is symmetry?",
            body: "A **line of symmetry** divides a shape into two mirror-image halves. Fold the shape along the line — both halves match exactly.",
          },
          {
            heading: "Common shapes",
            body: "- Equilateral triangle: 3 lines\n- Square: 4 lines\n- Rectangle: 2 lines\n- Regular pentagon: 5 lines\n- Circle: infinite lines (any diameter)\n- Isosceles triangle: 1 line (through apex to base midpoint)",
          },
          {
            heading: "Counting carefully",
            body: "Check both directions — some shapes have horizontal AND vertical symmetry (rectangle). Irregular shapes may have none. Letters like 'A' have 1, 'H' has 2, 'O' has infinite.",
          },
        ],
        keyFormulas: [
          { name: "Symmetry count", statement: "Regular polygons have $n$ lines of symmetry ($n$ = sides)." },
        ],
        workedExample: {
          problem: "How many lines of symmetry does a regular hexagon have?",
          solution: "Regular hexagon has 6 sides → 6 lines of symmetry (through opposite vertices and midpoints of opposite sides).",
        },
      },
      questions: [
        {
          id: "cilm-u5-sym-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many lines of symmetry does a square have?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "2" },
              { id: "b", text: "1" },
              { id: "c", text: "4" },
              { id: "d", text: "8" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Symmetry", statement: "Square: 2 diagonals + 2 midlines = 4 lines." },
            ],
            steps: [
              { reasoning: "Square has 4 lines: vertical, horizontal, both diagonals.", working: "4", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** 4",
            commonErrors: ["Choosing (a) — counting only horizontal and vertical, missing diagonals."],
          },
        },
        {
          id: "cilm-u5-sym-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Does a rectangle have the same number of lines of symmetry as a square? Explain.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Symmetry comparison", statement: "Rectangle: 2 (midlines only); square: 4 (includes diagonals)." },
            ],
            steps: [
              { reasoning: "Rectangle has 2 lines (vertical and horizontal midlines).", working: "2", marks: 1, markCode: "M" },
              { reasoning: "Square has 4 — the diagonals are also symmetry lines because all sides equal.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "No — rectangle has 2, square has 4. Square's equal sides make diagonals symmetry lines.",
            commonErrors: ["Saying yes — only regular shapes get diagonal symmetry."],
          },
        },
        {
          id: "cilm-u5-sym-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A regular pentagon is drawn. How many lines of symmetry does it have and where are they?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Regular polygon symmetry", statement: "$n$ sides → $n$ lines of symmetry through vertices and edge midpoints." },
            ],
            steps: [
              { reasoning: "Regular pentagon: 5 lines of symmetry.", working: "5", marks: 1, markCode: "M" },
              { reasoning: "Each line goes from a vertex to the midpoint of the opposite side.", working: "\\text{vertex to midpoint}", marks: 1, markCode: "M" },
              { reasoning: "5 such lines, one per vertex.", marks: 1, markCode: "M" },
              { reasoning: "Clear description.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$5$ lines — each from a vertex to the midpoint of the opposite side",
            commonErrors: ["Counting edge-to-edge lines — symmetry lines go vertex to opposite edge midpoint."],
          },
        },
        {
          id: "cilm-u5-sym-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Various shapes and letters are tested for symmetry.",
          parts: [
            { label: "a", prompt: "State the number of lines of symmetry for: equilateral triangle, rectangle, circle.", marks: 3 },
            { label: "b", prompt: "The letter 'H' is drawn. How many lines of symmetry does it have?", marks: 1 },
            { label: "c", prompt: "The letter 'S' is drawn. How many lines of symmetry does it have?", marks: 1 },
            { label: "d", prompt: "Explain why a scalene triangle has no lines of symmetry.", marks: 2 },
            { label: "e", prompt: "A shape has exactly 1 line of symmetry. Give two examples.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Symmetry identification", statement: "Count mirror-image divisions; irregular shapes may have none." },
            ],
            steps: [
              { part: "a", reasoning: "Equilateral: 3; rectangle: 2; circle: infinite.", working: "3, 2, \\infty", marks: 1, markCode: "M" },
              { part: "a", reasoning: "All three correct.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Accurate.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "'H' has 2 lines: vertical and horizontal.", working: "2", marks: 1, markCode: "M" },
              { part: "c", reasoning: "'S' has 0 lines — no mirror-image division.", working: "0", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Scalene has all different sides/angles — no line divides it into mirror halves.", working: "\\text{no mirror}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Clear explanation.", marks: 1, markCode: "A" },
              { part: "e", reasoning: "Examples: isosceles triangle, letter 'A', capital 'T'.", working: "isosceles, A", marks: 1, markCode: "M" },
              { part: "e", reasoning: "Two valid examples.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 3, 2, infinite (b) 2 (c) 0 (d) no equal sides → no mirror halves (e) isosceles triangle, letter 'A'",
            levels: [
              { level: "Level 2", marks: "2-3", descriptor: "All correct.", part: "a" },
              { level: "Level 1", marks: "0-1", descriptor: "Errors.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Examples valid.", part: "e" },
              { level: "Level 1", marks: "0", descriptor: "Invalid.", part: "e" },
            ],
            commonErrors: ["In (c) saying 'S' has 1 line — rotational symmetry is not line symmetry."],
          },
        },
        {
          id: "cilm-u5-sym-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many lines of symmetry does an equilateral triangle have?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "1" },
              { id: "b", text: "3" },
              { id: "c", text: "2" },
              { id: "d", text: "6" },
            ],
            borrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Symmetry", statement: "Regular polygon with $n$ sides has $n$ lines — equilateral triangle: 3." },
            ],
            steps: [
              { reasoning: "Equilateral triangle: 3 lines (each vertex to opposite side midpoint).", working: "3", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** 3",
            commonErrors: ["Choosing (b) — isosceles has only 1."],
          },
        },
        {
          id: "cilm-u5-sym-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "How many lines of symmetry does a regular octagon have?",
          response: { type: "numeric", parts: [{ label: "lines of symmetry", answer: 8 }] },
          markscheme: {
            principles: [
              { kind: "skill", name: "Regular polygon symmetry", statement: "$n$ sides → $n$ lines: octagon has $8$." },
            ],
            steps: [
              { reasoning: "Regular octagon: $8$ lines of symmetry.", working: "8", marks: 1, markCode: "M" },
            ],
            finalAnswer: "$8$",
            commonErrors: ["Counting only vertical/horizontal lines — regular polygons have $n$ lines total."],
          },
        },
        {
          id: "cilm-u5-sym-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "An isosceles triangle (not equilateral) is drawn. How many lines of symmetry does it have, and where is the line?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Symmetry", statement: "Isosceles triangle: 1 line — from the apex (vertex between equal sides) to the midpoint of the base." },
            ],
            steps: [
              { reasoning: "Isosceles triangle has $1$ line of symmetry.", working: "1", marks: 1, markCode: "M" },
              { reasoning: "It runs from the apex to the midpoint of the base.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$1$ line — apex to midpoint of the base",
            commonErrors: ["Saying 3 lines like equilateral — only TWO equal sides here."],
          },
        },
        {
          id: "cilm-u5-sym-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "How many lines of symmetry does a circle have?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "4" },
              { id: "b", text: "1" },
              { id: "c", text: "Infinite" },
              { id: "d", text: "2" },
            ],
            correctChoiceIc: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Circle symmetry", statement: "Every diameter is a line of symmetry — infinitely many." },
            ],
            steps: [
              { reasoning: "Any diameter divides a circle into mirror halves — infinite lines.", working: "\\infty", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Infinite",
            commonErrors: ["Choosing (c) — that's a square's count."],
          },
        },
        {
          id: "cilm-u5-sym-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A rectangle that is NOT a square has how many lines of symmetry?",
          response: { type: "numeric", parts: [{ label: "lines of symmetry", answer: 2 }] },
          markscheme: {
            principles: [
              { kind: "skill", name: "Rectangle symmetry", statement: "Rectangle: vertical and horizontal midlines only — $2$ lines." },
            ],
            steps: [
              { reasoning: "Rectangle has $2$ lines: vertical and horizontal midlines.", working: "2", marks: 1, markCode: "M" },
            ],
            finalAnswer: "$2$",
            commonErrors: ["Answering $4$ — diagonals are NOT symmetry lines for a non-square rectangle."],
          },
        },
        {
          id: "cilm-u5-sym-q10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "The capital letters 'A', 'H' and 'S' are tested for line symmetry. State how many lines of symmetry each has.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Letter symmetry", statement: "'A' has 1 (vertical); 'H' has 2 (vertical + horizontal); 'S' has 0." },
            ],
            steps: [
              { reasoning: "'A': $1$ vertical line; 'H': $2$ lines; 'S': $0$ lines.", working: "1,2,0", marks: 1, markCode: "M" },
              { reasoning: "'S' has rotational but not line symmetry.", working: "rotational \\ne line", marks: 1, markCode: "M" },
              { reasoning: "All three counts correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "'A': $1$; 'H': $2$; 'S': $0$",
            commonErrors: ["Giving 'S' a line of symmetry — it has none."],
          },
        },
        {
          id: "cilm-u5-sym-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many lines of symmetry does a scalene triangle have?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "3" },
              { id: "b", text: "1" },
              { id: "c", text: "Infinite" },
              { id: "d", text: "0" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Symmetry", statement: "Scalene triangle: all sides different — no mirror-image line." },
            ],
            steps: [
              { reasoning: "No line divides a scalene triangle into mirror halves: $0$ lines.", working: "0", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** 0",
            commonErrors: ["Choosing (b) — that's isosceles."],
          },
        },
        {
          id: "cilm-u5-sym-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "A regular polygon has $11$ sides. How many lines of symmetry does it have?",
          response: { type: "numeric", parts: [{ label: "lines of symmetry", answer: 11 }] },
          markscheme: {
            principles: [
              { kind: "skill", name: "Regular polygon symmetry", statement: "$n$ sides → $n$ lines of symmetry." },
            ],
            steps: [
              { reasoning: "Regular $11$-gon has $11$ lines of symmetry.", working: "11", marks: 1, markCode: "M" },
              { reasoning: "Answer: $11$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$11$",
            commonErrors: ["Halving $11$ — every vertex gives one line."],
          },
        },
        {
          id: "cilm-u5-sym-q13",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which shape has MORE lines of symmetry: a square or a regular pentagon?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Square ($4$)" },
              { id: "b", text: "They are equal" },
              { id: "c", text: "Regular pentagon ($5$)" },
              { id: "d", text: "Cannot be determined" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Compare symmetry", statement: "Square $=4$ lines; regular pentagon $=5$ lines." },
            ],
            steps: [
              { reasoning: "Pentagon has $5>4$ lines.", working: "5>4", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Regular pentagon ($5$)",
            commonErrors: ["Choosing (a) — square has 4, pentagon has 5."],
          },
        },
        {
          id: "cilm-u5-sym-q14",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Four shapes are tested: equilateral triangle, square, rectangle (not square), isosceles triangle (not equilateral).",
          parts: [
            { label: "a", prompt: "Find the total number of lines of symmetry for the equilateral triangle and square together.", marks: 2 },
            { label: "b", prompt: "Find the total for the rectangle and isosceles triangle together.", marks: 2 },
            { label: "c", prompt: "Which single shape has the most lines of symmetry, and why?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Symmetry counting", statement: "Counts: equilateral 3, square 4, rectangle 2, isosceles 1." },
            ],
            steps: [
              { part: "a", reasoning: "$3+4 = 7$ lines.", working: "7", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$2+1 = 3$ lines.", working: "3", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Square has most ($4$) because its equal sides make the diagonals symmetry lines too.", working: "4", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Reason given.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $7$ (b) $3$ (c) square — $4$ lines including diagonals",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Identified with reason.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "c" },
            ],
            commonErrors: ["Counting rectangle diagonals as symmetry lines."],
          },
        },
        {
          id: "cilm-u5-sym-q15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which of these shapes has exactly $2$ lines of symmetry?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Equilateral triangle" },
              { id: "b", text: "Scalene triangle" },
              { id: "c", text: "Rectangle (not square)" },
              { id: "d", text: "Regular pentagon" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Symmetry counts", statement: "Rectangle: 2; equilateral 3; pentagon 5; scalene 0." },
            ],
            steps: [
              { reasoning: "Only the rectangle has exactly $2$ lines.", working: "2", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Rectangle (not square)",
            commonErrors: ["Choosing (a) — equilateral has 3."],
          },
        },
        {
          id: "cilm-u5-sym-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain why a regular polygon with $n$ sides has exactly $n$ lines of symmetry.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Regular polygon symmetry", statement: "Each vertex pairs with the midpoint of the opposite side — one line per vertex." },
            ],
            steps: [
              { reasoning: "In a regular polygon every vertex is identical (equal sides and angles).", working: "identical vertices", marks: 1, markCode: "M" },
              { reasoning: "A line through each vertex and the midpoint of the opposite side gives a mirror-image split.", working: "vertex-midpoint", marks: 1, markCode: "M" },
              { reasoning: "$n$ vertices → $n$ lines of symmetry.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$n$ identical vertices each give one symmetry line through it.",
            commonErrors: ["Claiming lines connect midpoints of adjacent sides — they go vertex to opposite side midpoint."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cilm-u5-circles-symmetry-notes",
      title: "Circles and symmetry — revision notes",
      summary: "Circle parts, circumference, lines of symmetry.",
      sections: [
        {
          heading: "Circles",
          body: "$d=2r$; $C=2\\pi r=\\pi d$; $A=\\pi r^2$. Chord joins two points; diameter through centre; tangent touches once.",
        },
        {
          heading: "Symmetry",
          body: "Regular $n$-gon has $n$ lines. Square 4, rectangle 2, circle infinite, scalene 0. Line = mirror-image halves.",
        },
      ],
    },
  ],
};
