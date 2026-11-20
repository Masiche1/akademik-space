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
              { id: "a", text: "$5$ cm" },
              { id: "b", text: "$10$ cm" },
              { id: "c", text: "$20$ cm" },
              { id: "d", text: "$2.5$ cm" },
            ],
            correctChoiceId: "a",
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
              { id: "b", text: "4" },
              { id: "c", text: "1" },
              { id: "d", text: "8" },
            ],
            correctChoiceId: "b",
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
