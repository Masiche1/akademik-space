import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "olam-u3-lesson-3-1",
  code: "3-1",
  title: "Radians and Arc Length",
  goal: "I CAN convert between degrees and radians and use arc length/sector area formulae.",
  standards: ["4037: circular measure"],
  vocabulary: [
    { term: "Radian", definition: "Angle where arc length equals radius; $2\\pi$ rad = $360°$." },
    { term: "Arc length", definition: "Length of curve $s=r\\theta$ ($\\theta$ in radians)." },
    { term: "Sector area", definition: "Area $A=\\frac12 r^2\\theta$ ($\\theta$ in radians)." },
    { term: "Subtended angle", definition: "Angle at centre formed by an arc." },
  ],
  concepts: [
    {
      id: "olam-u3-s1-radians",
      title: "Radians and conversion",
      skill: "Convert degrees ↔ radians at O Level.",
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
          id: "olam-u3-s1-ra-q1", difficulty: "foundation", totalMarks: 1,
          stem: "$60°$ in radians is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\frac{2\\pi}{3}$" },
            { id: "b", text: "$\\frac{\\pi}{3}$" },
            { id: "c", text: "$\\frac{\\pi}{2}$" },
            { id: "d", text: "$\\frac{\\pi}{6}$" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "technique", name: "Conversion", statement: "Multiply by $\\pi/180$." }], steps: [{ reasoning: "$60\\times\\frac{\\pi}{180}=\\frac{\\pi}{3}$.", marks: 1, markCode: "A" }], finalAnswer: "$\\frac{\\pi}{3}$" },
        },
        {
          id: "olam-u3-s1-ra-q2", difficulty: "foundation", totalMarks: 2,
          stem: "Convert $\\frac{5\\pi}{6}$ radians to degrees.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Conversion", statement: "Multiply by $180/\\pi$." }], steps: [
            { reasoning: "$\\frac{5\\pi}{6}\\times\\frac{180}{\\pi}=\\frac{5\\times180}{6}=150°$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $150°$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$150°$" },
        },
        {
          id: "olam-u3-s1-ra-q3", difficulty: "core", totalMarks: 3,
          stem: "Convert $240°$ to radians, leaving in terms of $\\pi$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Conversion", statement: "Simplify." }], steps: [
            { reasoning: "$240\\times\\frac{\\pi}{180}=\\frac{240\\pi}{180}=\\frac{4\\pi}{3}$.", marks: 1, markCode: "M" },
            { reasoning: "Simplified: $\\frac{4\\pi}{3}$ rad.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$\\frac{4\\pi}{3}$ rad" },
        },
        {
          id: "olam-u3-s1-ra-q4", difficulty: "core", totalMarks: 4,
          stem: "An arc subtends $120°$ at the centre of a circle of radius 9 cm. Find the arc length.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Arc length", statement: "$s=r\\theta$, $\\theta$ in rad." }], steps: [
            { reasoning: "$\\theta=120\\times\\frac{\\pi}{180}=\\frac{2\\pi}{3}$ rad.", marks: 1, markCode: "M" },
            { reasoning: "$s=9\\times\\frac{2\\pi}{3}=6\\pi$ cm.", marks: 1, markCode: "M" },
            { reasoning: "Approx: $18.85$ cm.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $6\\pi$ cm (≈18.8 cm).", marks: 1, markCode: "A" },
          ], finalAnswer: "$6\\pi$ cm" },
        },
        {
          id: "olam-u3-s1-ra-q5", difficulty: "foundation", totalMarks: 1,
          stem: "$30°$ in radians is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\frac{\\pi}{12}$" },
            { id: "b", text: "$\\frac{\\pi}{3}$" },
            { id: "c", text: "$\\frac{\\pi}{4}$" },
            { id: "d", text: "$\\frac{\\pi}{6}$" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "technique", name: "Conversion", statement: "Multiply by $\\pi/180$." }], steps: [{ reasoning: "$30\\times\\frac{\\pi}{180}=\\frac{\\pi}{6}$.", marks: 1, markCode: "A" }], finalAnswer: "$\\frac{\\pi}{6}$" },
        },
        {
          id: "olam-u3-s1-ra-q6", difficulty: "foundation", totalMarks: 1,
          stem: "$\\frac{\\pi}{4}$ radians in degrees is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "45°" },
            { id: "b", text: "30°" },
            { id: "c", text: "90°" },
            { id: "d", text: "60°" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "technique", name: "Conversion", statement: "Multiply by $180/\\pi$." }], steps: [{ reasoning: "$\\frac{\\pi}{4}\\times\\frac{180}{\\pi}=45°$.", marks: 1, markCode: "A" }], finalAnswer: "45°" },
        },
        {
          id: "olam-u3-s1-ra-q7", difficulty: "foundation", totalMarks: 1,
          stem: "$90°$ in radians is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\frac{\\pi}{2}$" },
            { id: "b", text: "$\\pi$" },
            { id: "c", text: "$2\\pi$" },
            { id: "d", text: "$\\frac{\\pi}{4}$" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "technique", name: "Conversion", statement: "Standard angle." }], steps: [{ reasoning: "$90\\times\\frac{\\pi}{180}=\\frac{\\pi}{2}$.", marks: 1, markCode: "A" }], finalAnswer: "$\\frac{\\pi}{2}$" },
        },
        {
          id: "olam-u3-s1-ra-q8", difficulty: "core", totalMarks: 1,
          stem: "$\\frac{2\\pi}{3}$ radians in degrees is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "120°" },
            { id: "b", text: "135°" },
            { id: "c", text: "240°" },
            { id: "d", text: "60°" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "technique", name: "Conversion", statement: "Multiply by $180/\\pi$." }], steps: [{ reasoning: "$\\frac{2\\pi}{3}\\times\\frac{180}{\\pi}=120°$.", marks: 1, markCode: "A" }], finalAnswer: "120°" },
        },
        {
          id: "olam-u3-s1-ra-q9", difficulty: "core", totalMarks: 1,
          stem: "$270°$ in radians is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\frac{7\\pi}{4}$" },
            { id: "b", text: "$\\frac{5\\pi}{4}$" },
            { id: "c", text: "$\\frac{4\\pi}{3}$" },
            { id: "d", text: "$\\frac{3\\pi}{2}$" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "technique", name: "Conversion", statement: "Simplify fraction." }], steps: [{ reasoning: "$270\\times\\frac{\\pi}{180}=\\frac{3\\pi}{2}$.", marks: 1, markCode: "A" }], finalAnswer: "$\\frac{3\\pi}{2}$" },
        },
        {
          id: "olam-u3-s1-ra-q10", difficulty: "foundation", totalMarks: 2,
          stem: "Convert $45°$ to radians, giving your answer as a decimal.",
          response: { type: "numeric", parts: [{ label: "a", answer: 0.785, tolerance: 0.001 }] },
          markscheme: { principles: [{ kind: "technique", name: "Conversion", statement: "Multiply by $\\pi/180$." }], steps: [
            { reasoning: "$45\\times\\frac{\\pi}{180}=\\frac{\\pi}{4}$.", marks: 1, markCode: "M" },
            { reasoning: "$\\frac{\\pi}{4}\\approx0.785$ rad.", marks: 1, markCode: "A" },
          ], finalAnswer: "$0.785$ rad" },
        },
        {
          id: "olam-u3-s1-ra-q11", difficulty: "core", totalMarks: 3,
          stem: "Convert $300°$ to radians, giving your answer as a decimal.",
          response: { type: "numeric", parts: [{ label: "a", answer: 5.236, tolerance: 0.001 }] },
          markscheme: { principles: [{ kind: "technique", name: "Conversion", statement: "Multiply by $\\pi/180$." }], steps: [
            { reasoning: "$300\\times\\frac{\\pi}{180}=\\frac{5\\pi}{3}$.", marks: 1, markCode: "M" },
            { reasoning: "$\\frac{5\\pi}{3}\\approx5.236$ rad.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$5.236$ rad" },
        },
        {
          id: "olam-u3-s1-ra-q12", difficulty: "core", totalMarks: 3,
          stem: "Convert $1.5$ radians to degrees, to the nearest degree.",
          response: { type: "numeric", parts: [{ label: "a", answer: 86, tolerance: 0.1 }] },
          markscheme: { principles: [{ kind: "technique", name: "Conversion", statement: "Multiply by $180/\\pi$." }], steps: [
            { reasoning: "$1.5\\times\\frac{180}{\\pi}=\\frac{270}{\\pi}$.", marks: 1, markCode: "M" },
            { reasoning: "$\\frac{270}{\\pi}\\approx85.94°$ → $86°$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $86°$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$86°$" },
        },
        {
          id: "olam-u3-s1-ra-q13", difficulty: "challenge", totalMarks: 3,
          stem: "An angle of $2.4$ radians is equivalent to how many degrees? Give your answer to 1 decimal place.",
          response: { type: "numeric", parts: [{ label: "a", answer: 137.5, tolerance: 0.1 }] },
          markscheme: { principles: [{ kind: "technique", name: "Conversion", statement: "Multiply by $180/\\pi$." }], steps: [
            { reasoning: "$2.4\\times\\frac{180}{\\pi}=\\frac{432}{\\pi}$.", marks: 1, markCode: "M" },
            { reasoning: "$\\frac{432}{\\pi}\\approx137.51°$ → $137.5°$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $137.5°$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$137.5°$" },
        },
        {
          id: "olam-u3-s1-ra-q14", difficulty: "core", totalMarks: 2,
          stem: "Convert $210°$ to radians, leaving your answer in terms of $\\pi$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Conversion", statement: "Simplify." }], steps: [
            { reasoning: "$210\\times\\frac{\\pi}{180}=\\frac{7\\pi}{6}$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $\\frac{7\\pi}{6}$ rad.", marks: 1, markCode: "A" },
          ], finalAnswer: "$\\frac{7\\pi}{6}$ rad" },
        },
        {
          id: "olam-u3-s1-ra-q15", difficulty: "core", totalMarks: 2,
          stem: "Convert $\\frac{5\\pi}{4}$ radians to degrees.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Conversion", statement: "Multiply by $180/\\pi$." }], steps: [
            { reasoning: "$\\frac{5\\pi}{4}\\times\\frac{180}{\\pi}=\\frac{5\\times180}{4}=225°$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $225°$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$225°$" },
        },
        {
          id: "olam-u3-s1-ra-q16", difficulty: "challenge", totalMarks: 4,
          stem: "An arc subtends an angle of $100°$ at the centre of a circle of radius 7 cm. Find the length of the arc, giving your answer in terms of $\\pi$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Arc length", statement: "Convert then $s=r\\theta$." }], steps: [
            { reasoning: "$\\theta=100\\times\\frac{\\pi}{180}=\\frac{5\\pi}{9}$ rad.", marks: 1, markCode: "M" },
            { reasoning: "$s=7\\times\\frac{5\\pi}{9}=\\frac{35\\pi}{9}$ cm.", marks: 1, markCode: "M" },
            { reasoning: "Approx: $\\frac{35\\pi}{9}\\approx12.2$ cm.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $\\frac{35\\pi}{9}$ cm ($\\approx12.2$ cm).", marks: 1, markCode: "A" },
          ], finalAnswer: "$\\frac{35\\pi}{9}$ cm" },
        },
      ],
    },
    {
      id: "olam-u3-s1-sector",
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
          id: "olam-u3-s1-se-q1", difficulty: "foundation", totalMarks: 1,
          stem: "The area of a sector with $r=3$ and $\\theta=\\frac{\\pi}{2}$ is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\frac{9\\pi}{2}$" },
            { id: "b", text: "$\\frac{9\\pi}{4}$" },
            { id: "c", text: "$\\frac{3\\pi}{4}$" },
            { id: "d", text: "$9\\pi$" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "formula", name: "Sector area", statement: "$\\frac12 r^2\\theta$." }], steps: [{ reasoning: "$\\frac12\\times9\\times\\frac{\\pi}{2}=\\frac{9\\pi}{4}$.", marks: 1, markCode: "A" }], finalAnswer: "$\\frac{9\\pi}{4}$" },
        },
        {
          id: "olam-u3-s1-se-q2", difficulty: "foundation", totalMarks: 2,
          stem: "Find the arc length of a circle radius 5 cm subtending $0.8$ rad.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "formula", name: "Arc length", statement: "$s=r\\theta$." }], steps: [
            { reasoning: "$s=5\\times0.8=4$ cm.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "4 cm" },
        },
        {
          id: "olam-u3-s1-se-q3", difficulty: "core", totalMarks: 3,
          stem: "A sector has area $12\\pi$ cm² and radius 6 cm. Find the angle in radians.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Rearrange sector formula", statement: "Solve for $\\theta$." }], steps: [
            { reasoning: "$12\\pi=\\frac12\\times36\\times\\theta=18\\theta$.", marks: 1, markCode: "M" },
            { reasoning: "$\\theta=\\frac{12\\pi}{18}=\\frac{2\\pi}{3}$ rad.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$\\frac{2\\pi}{3}$ rad" },
        },
        {
          id: "olam-u3-s1-se-q4", difficulty: "core", totalMarks: 4,
          stem: "A sector has perimeter 20 cm and radius 6 cm. Find its area.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Sector problem", statement: "Use perimeter first." }], steps: [
            { reasoning: "$2r+s=20$ → $12+s=20$ → $s=8$ cm.", marks: 1, markCode: "M" },
            { reasoning: "$s=r\\theta$ → $8=6\\theta$ → $\\theta=\\frac43$ rad.", marks: 1, markCode: "M" },
            { reasoning: "$A=\\frac12\\times36\\times\\frac43=24$ cm².", marks: 1, markCode: "M" },
            { reasoning: "Answer: 24 cm².", marks: 1, markCode: "A" },
          ], finalAnswer: "24 cm²" },
        },
        {
          id: "olam-u3-s1-se-q5", difficulty: "foundation", totalMarks: 1,
          stem: "The area of a sector with $r=2$ and $\\theta=\\pi$ is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$2\\pi$" },
            { id: "b", text: "$8\\pi$" },
            { id: "c", text: "$\\pi$" },
            { id: "d", text: "$4\\pi$" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "formula", name: "Sector area", statement: "$\\frac12 r^2\\theta$." }], steps: [{ reasoning: "$\\frac12\\times4\\times\\pi=2\\pi$.", marks: 1, markCode: "A" }], finalAnswer: "$2\\pi$" },
        },
        {
          id: "olam-u3-s1-se-q6", difficulty: "foundation", totalMarks: 1,
          stem: "The arc length of a circle radius 8 cm subtending $\\frac{\\pi}{4}$ rad is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$8\\pi$ cm" },
            { id: "b", text: "$2\\pi$ cm" },
            { id: "c", text: "$4\\pi$ cm" },
            { id: "d", text: "$\\pi$ cm" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "formula", name: "Arc length", statement: "$s=r\\theta$." }], steps: [{ reasoning: "$s=8\\times\\frac{\\pi}{4}=2\\pi$ cm.", marks: 1, markCode: "A" }], finalAnswer: "$2\\pi$ cm" },
        },
        {
          id: "olam-u3-s1-se-q7", difficulty: "core", totalMarks: 1,
          stem: "The area of a sector is given by…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$r^2\\theta$" },
            { id: "b", text: "$\\pi r^2\\theta$" },
            { id: "c", text: "$r\\theta$" },
            { id: "d", text: "$\\frac12 r^2\\theta$" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "formula", name: "Sector area", statement: "Standard formula." }], steps: [{ reasoning: "$A=\\frac12 r^2\\theta$ with $\\theta$ in radians.", marks: 1, markCode: "A" }], finalAnswer: "$\\frac12 r^2\\theta$" },
        },
        {
          id: "olam-u3-s1-se-q8", difficulty: "core", totalMarks: 1,
          stem: "The area of a sector with $r=6$ and $\\theta=\\frac{\\pi}{3}$ is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$3\\pi$" },
            { id: "b", text: "$\\frac{\\pi}{3}$" },
            { id: "c", text: "$6\\pi$" },
            { id: "d", text: "$12\\pi$" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "formula", name: "Sector area", statement: "$\\frac12 r^2\\theta$." }], steps: [{ reasoning: "$\\frac12\\times36\\times\\frac{\\pi}{3}=6\\pi$.", marks: 1, markCode: "A" }], finalAnswer: "$6\\pi$" },
        },
        {
          id: "olam-u3-s1-se-q9", difficulty: "core", totalMarks: 1,
          stem: "The perimeter of a sector with $r=5$ and $\\theta=\\frac{\\pi}{2}$ is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$10\\pi$" },
            { id: "b", text: "$\\frac{25\\pi}{4}$" },
            { id: "c", text: "$10+\\frac{5\\pi}{2}$" },
            { id: "d", text: "$5+\\frac{5\\pi}{2}$" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "formula", name: "Sector perimeter", statement: "$2r+s$." }], steps: [{ reasoning: "$s=5\\times\\frac{\\pi}{2}=\\frac{5\\pi}{2}$; perimeter $=10+\\frac{5\\pi}{2}$.", marks: 1, markCode: "A" }], finalAnswer: "$10+\\frac{5\\pi}{2}$" },
        },
        {
          id: "olam-u3-s1-se-q10", difficulty: "foundation", totalMarks: 2,
          stem: "Find the arc length of a sector with $r=4$ cm and $\\theta=1.5$ rad.",
          response: { type: "numeric", parts: [{ label: "a", answer: 6, unit: "cm" }] },
          markscheme: { principles: [{ kind: "formula", name: "Arc length", statement: "$s=r\\theta$." }], steps: [
            { reasoning: "$s=4\\times1.5=6$ cm.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 6 cm.", marks: 1, markCode: "A" },
          ], finalAnswer: "6 cm" },
        },
        {
          id: "olam-u3-s1-se-q11", difficulty: "core", totalMarks: 3,
          stem: "Find the area of a sector with $r=10$ cm and $\\theta=\\frac{\\pi}{5}$ rad, giving your answer in terms of $\\pi$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 10 }] },
          markscheme: { principles: [{ kind: "formula", name: "Sector area", statement: "$\\frac12 r^2\\theta$." }], steps: [
            { reasoning: "$A=\\frac12\\times100\\times\\frac{\\pi}{5}=10\\pi$ cm².", marks: 1, markCode: "M" },
            { reasoning: "$10\\pi\\approx31.4$ cm².", marks: 1, markCode: "M" },
            { reasoning: "Coefficient of $\\pi$ is 10.", marks: 1, markCode: "A" },
          ], finalAnswer: "$10\\pi$ cm²" },
        },
        {
          id: "olam-u3-s1-se-q12", difficulty: "core", totalMarks: 3,
          stem: "An arc of length 12 cm subtends an angle at the centre of a circle of radius 6 cm. Find the angle in radians.",
          response: { type: "numeric", parts: [{ label: "a", answer: 2 }] },
          markscheme: { principles: [{ kind: "technique", name: "Rearrange arc formula", statement: "$\\theta=s/r$." }], steps: [
            { reasoning: "$\\theta=\\frac{s}{r}=\\frac{12}{6}=2$ rad.", marks: 1, markCode: "M" },
            { reasoning: "Check: $s=r\\theta=6\\times2=12$ ✓.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 2 rad.", marks: 1, markCode: "A" },
          ], finalAnswer: "2 rad" },
        },
        {
          id: "olam-u3-s1-se-q13", difficulty: "challenge", totalMarks: 3,
          stem: "A sector has area $8\\pi$ cm² and radius 4 cm. Find the angle in radians, giving your answer to 2 decimal places.",
          response: { type: "numeric", parts: [{ label: "a", answer: 3.14, tolerance: 0.01 }] },
          markscheme: { principles: [{ kind: "technique", name: "Rearrange sector formula", statement: "Solve for $\\theta$." }], steps: [
            { reasoning: "$8\\pi=\\frac12\\times16\\times\\theta=8\\theta$.", marks: 1, markCode: "M" },
            { reasoning: "$\\theta=\\pi$ rad.", marks: 1, markCode: "M" },
            { reasoning: "$\\theta\\approx3.14$ rad.", marks: 1, markCode: "A" },
          ], finalAnswer: "$\\pi$ rad ($\\approx3.14$)" },
        },
        {
          id: "olam-u3-s1-se-q14", difficulty: "core", totalMarks: 3,
          stem: "Find the area of a sector with radius 5 cm and angle $\\frac{2\\pi}{3}$ rad.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "formula", name: "Sector area", statement: "$\\frac12 r^2\\theta$." }], steps: [
            { reasoning: "$A=\\frac12\\times25\\times\\frac{2\\pi}{3}=\\frac{25\\pi}{3}$ cm².", marks: 1, markCode: "M" },
            { reasoning: "Simplify: $\\frac{25\\pi}{3}\\approx26.2$ cm².", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$\\frac{25\\pi}{3}$ cm²" },
        },
        {
          id: "olam-u3-s1-se-q15", difficulty: "core", totalMarks: 3,
          stem: "A sector has perimeter 20 cm and radius 5 cm. Find its area.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Sector problem", statement: "Use perimeter first." }], steps: [
            { reasoning: "$2r+s=20$ → $10+s=20$ → $s=10$ cm.", marks: 1, markCode: "M" },
            { reasoning: "$s=r\\theta$ → $10=5\\theta$ → $\\theta=2$ rad; $A=\\frac12\\times25\\times2=25$ cm².", marks: 1, markCode: "M" },
            { reasoning: "Answer: 25 cm².", marks: 1, markCode: "A" },
          ], finalAnswer: "25 cm²" },
        },
        {
          id: "olam-u3-s1-se-q16", difficulty: "challenge", totalMarks: 4,
          stem: "A sector has area 6 cm² and perimeter 14 cm. Find its radius and angle.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Sector problem", statement: "Simultaneous equations." }], steps: [
            { reasoning: "Perimeter: $2r+r\\theta=14$ → $r\\theta=14-2r$; area: $\\frac12 r^2\\theta=6$ → $r(r\\theta)=12$.", marks: 1, markCode: "M" },
            { reasoning: "Substitute: $r(14-2r)=12$ → $14r-2r^2=12$ → $r^2-7r+6=0$ → $(r-1)(r-6)=0$.", marks: 1, markCode: "M" },
            { reasoning: "$r=1$ gives $\\theta=12$ rad $>2\\pi$, invalid; so $r=6$, $\\theta=\\frac{14-12}{6}=\\frac13$ rad.", marks: 1, markCode: "M" },
            { reasoning: "Check area: $\\frac12\\times36\\times\\frac13=6$ ✓. Answer: $r=6$ cm, $\\theta=\\frac13$ rad.", marks: 1, markCode: "A" },
          ], finalAnswer: "$r=6$ cm, $\\theta=\\frac13$ rad" },
        },
      ],
    },
  ],
  notes: [
    { id: "olam-u3-s1-rad-notes", title: "Radians and circular measure — notes", summary: "Conversion, arc length, sector area.",
      sections: [
        { heading: "Conversion", body: "deg × π/180 = rad; rad × 180/π = deg." },
        { heading: "Formulae", body: "$s=r\\theta$, $A=\\frac12 r^2\\theta$, sector perimeter $=2r+s$." },
      ] },
  ],
};
