import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "ciam-u3-lesson-3-1",
  code: "3-1",
  title: "Radians and Arc Length",
  goal: "I CAN convert between degrees and radians and use arc length/sector area formulae.",
  standards: ["0606: circular measure"],
  vocabulary: [
    { term: "Radian", definition: "Angle where arc length equals radius; $2\\pi$ rad = $360°$." },
    { term: "Arc length", definition: "Length of curve $s=r\\theta$ ($\\theta$ in radians)." },
    { term: "Sector area", definition: "Area $A=\\frac12 r^2\\theta$ ($\\theta$ in radians)." },
    { term: "Subtended angle", definition: "Angle at centre formed by an arc." },
  ],
  concepts: [
    {
      id: "ciam-u3-s1-radians",
      title: "Radians and conversion",
      skill: "Convert degrees ↔ radians at IGCSE level.",
      lesson: {
        sections: [
          { heading: "Why radians exist", body: "Degrees are arbitrary — 360 was chosen by Babylonian astronomers. A radian is defined geometrically: one radian is the angle subtended at the centre of a circle by an arc equal in length to the radius. Since the full circumference is $2\\pi r$, a complete turn is $2\\pi$ radians. This makes radians the natural unit for calculus and for the arc length and sector area formulae, which take their simplest form only in radians." },
          { heading: "Converting", body: "Since $360°=2\\pi$ rad, one degree is $\\frac{2\\pi}{360}=\\frac{\\pi}{180}$ radians. So multiply degrees by $\\frac{\\pi}{180}$ to get radians, and multiply radians by $\\frac{180}{\\pi}$ to get degrees. Memorise the standard angles: $30°=\\frac{\\pi}{6}$, $45°=\\frac{\\pi}{4}$, $60°=\\frac{\\pi}{3}$, $90°=\\frac{\\pi}{2}$, $120°=\\frac{2\\pi}{3}$, $135°=\\frac{3\\pi}{4}$, $150°=\\frac{5\\pi}{6}$, $180°=\\pi$." },
        ],
        keyFormulas: [
          { name: "Conversion", statement: "$\\theta_{rad}=\\theta_{deg}\\times\\frac{\\pi}{180}$" },
        ],
        workedExample: { problem: "Convert $135°$ to radians.", solution: "$135\\times\\frac{\\pi}{180}=\\frac{135\\pi}{180}=\\frac{3\\pi}{4}$ rad (cancel 45 from top and bottom). Check: $135°$ is three-quarters of a half-turn... actually $\\frac{135}{180}=\\frac34$ of $180°$, and $\\frac34\\pi=\\frac{3\\pi}{4}$ ✓." },
      },
      questions: [
        {
          id: "ciam-u3-s1-ra-q1", difficulty: "foundation", totalMarks: 1,
          stem: "$60°$ in radians is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\frac{\\pi}{3}$" }, { id: "b", text: "$\\frac{\\pi}{6}$" }, { id: "c", text: "$\\frac{\\pi}{2}$" }, { id: "d", text: "$\\frac{2\\pi}{3}$" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "technique", name: "Conversion", statement: "Multiply by $\\pi/180$." }], steps: [{ reasoning: "$60\\times\\frac{\\pi}{180}=\\frac{\\pi}{3}$.", marks: 1, markCode: "A" }], finalAnswer: "$\\frac{\\pi}{3}$" },
        },
        {
          id: "ciam-u3-s1-ra-q2", difficulty: "foundation", totalMarks: 2,
          stem: "Convert $\\frac{5\\pi}{6}$ radians to degrees.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Conversion", statement: "Multiply by $180/\\pi$." }], steps: [
            { reasoning: "$\\frac{5\\pi}{6}\\times\\frac{180}{\\pi}=\\frac{5\\times180}{6}=150°$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $150°$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$150°$" },
        },
        {
          id: "ciam-u3-s1-ra-q3", difficulty: "core", totalMarks: 3,
          stem: "Convert $240°$ to radians, leaving in terms of $\\pi$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Conversion", statement: "Simplify." }], steps: [
            { reasoning: "$240\\times\\frac{\\pi}{180}=\\frac{240\\pi}{180}=\\frac{4\\pi}{3}$.", marks: 1, markCode: "M" },
            { reasoning: "Simplified: $\\frac{4\\pi}{3}$ rad.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$\\frac{4\\pi}{3}$ rad" },
        },
        {
          id: "ciam-u3-s1-ra-q4", difficulty: "core", totalMarks: 4,
          stem: "An arc subtends $120°$ at the centre of a circle of radius 9 cm. Find the arc length.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Arc length", statement: "$s=r\\theta$, $\\theta$ in rad." }], steps: [
            { reasoning: "$\\theta=120\\times\\frac{\\pi}{180}=\\frac{2\\pi}{3}$ rad.", marks: 1, markCode: "M" },
            { reasoning: "$s=9\\times\\frac{2\\pi}{3}=6\\pi$ cm.", marks: 1, markCode: "M" },
            { reasoning: "Approx: $18.85$ cm.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $6\\pi$ cm (≈18.8 cm).", marks: 1, markCode: "A" },
          ], finalAnswer: "$6\\pi$ cm" },
        },
      ],
    },
    {
      id: "ciam-u3-s1-sector",
      title: "Sector area and combined problems",
      skill: "Calculate sector areas and solve circular measure problems.",
      lesson: {
        sections: [
          { heading: "The two formulae", body: "Arc length and sector area are the circular analogues of length and area for straight lines. The arc length is $s=r\\theta$ — think of it as 'radius times angle', which works only because $\\theta$ is in radians (in degrees there would be an extra factor). The sector area is $A=\\frac12 r^2\\theta$ — exactly one-half of the circle's area $\\pi r^2$ scaled by the fraction $\\frac{\\theta}{2\\pi}$ of a full turn. Both formulae need $\\theta$ in radians, so always convert first." },
          { heading: "Combining with geometry", body: "Many problems combine circular measure with other shapes: a sector attached to a triangle, a running track made of two straights and two semicircles, or a shaded region inside a circle. Break the shape into sectors, triangles and rectangles, compute each part separately, then add or subtract. The perimeter of a sector is $2r+s$ — include both radii unless the sector is part of a larger boundary." },
        ],
        keyFormulas: [
          { name: "Sector area", statement: "$A=\\frac12 r^2\\theta$ ($\\theta$ in rad)" },
          { name: "Arc length", statement: "$s=r\\theta$ ($\\theta$ in rad)" },
        ],
        workedExample: { problem: "Find the perimeter of a sector with $r=4$ and $\\theta=\\frac{\\pi}{3}$.", solution: "Arc length $s=4\\times\\frac{\\pi}{3}=\\frac{4\\pi}{3}$. Perimeter = two radii + arc $=2(4)+\\frac{4\\pi}{3}=8+\\frac{4\\pi}{3}\\approx12.19$ units. The two straight sides are the radii meeting at the centre." },
      },
      questions: [
        {
          id: "ciam-u3-s1-se-q1", difficulty: "foundation", totalMarks: 1,
          stem: "The area of a sector with $r=3$ and $\\theta=\\frac{\\pi}{2}$ is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\frac{9\\pi}{4}$" }, { id: "b", text: "$9\\pi$" }, { id: "c", text: "$\\frac{9\\pi}{2}$" }, { id: "d", text: "$\\frac{3\\pi}{4}$" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "formula", name: "Sector area", statement: "$\\frac12 r^2\\theta$." }], steps: [{ reasoning: "$\\frac12\\times9\\times\\frac{\\pi}{2}=\\frac{9\\pi}{4}$.", marks: 1, markCode: "A" }], finalAnswer: "$\\frac{9\\pi}{4}$" },
        },
        {
          id: "ciam-u3-s1-se-q2", difficulty: "foundation", totalMarks: 2,
          stem: "Find the arc length of a circle radius 5 cm subtending $0.8$ rad.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "formula", name: "Arc length", statement: "$s=r\\theta$." }], steps: [
            { reasoning: "$s=5\\times0.8=4$ cm.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "4 cm" },
        },
        {
          id: "ciam-u3-s1-se-q3", difficulty: "core", totalMarks: 3,
          stem: "A sector has area $12\\pi$ cm² and radius 6 cm. Find the angle in radians.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Rearrange sector formula", statement: "Solve for $\\theta$." }], steps: [
            { reasoning: "$12\\pi=\\frac12\\times36\\times\\theta=18\\theta$.", marks: 1, markCode: "M" },
            { reasoning: "$\\theta=\\frac{12\\pi}{18}=\\frac{2\\pi}{3}$ rad.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$\\frac{2\\pi}{3}$ rad" },
        },
        {
          id: "ciam-u3-s1-se-q4", difficulty: "core", totalMarks: 4,
          stem: "A sector has perimeter 20 cm and radius 6 cm. Find its area.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Sector problem", statement: "Use perimeter first." }], steps: [
            { reasoning: "$2r+s=20$ → $12+s=20$ → $s=8$ cm.", marks: 1, markCode: "M" },
            { reasoning: "$s=r\\theta$ → $8=6\\theta$ → $\\theta=\\frac43$ rad.", marks: 1, markCode: "M" },
            { reasoning: "$A=\\frac12\\times36\\times\\frac43=24$ cm².", marks: 1, markCode: "M" },
            { reasoning: "Answer: 24 cm².", marks: 1, markCode: "A" },
          ], finalAnswer: "24 cm²" },
        },
      ],
    },
  ],
  notes: [
    { id: "ciam-u3-s1-rad-notes", title: "Radians and circular measure — notes", summary: "Conversion, arc length, sector area.",
      sections: [
        { heading: "Conversion", body: "deg × π/180 = rad; rad × 180/π = deg." },
        { heading: "Formulae", body: "$s=r\\theta$, $A=\\frac12 r^2\\theta$, sector perimeter $=2r+s$." },
      ] },
  ],
};
