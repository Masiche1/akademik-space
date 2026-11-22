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
            { id: "a", text: "$\\frac{\\pi}{6}$" },
            { id: "b", text: "$\\frac{\\pi}{2}$" },
            { id: "c", text: "$\\frac{\\pi}{3}$" },
            { id: "d", text: "$\\frac{2\\pi}{3}$" },
          ], correctChoiceId: "c" },
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
        {
          id: "ciam-u3-s1-ra-q5", difficulty: "foundation", totalMarks: 1,
          stem: "$45°$ in radians is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\frac{\\pi}{2}$" },
            { id: "b", text: "$\\frac{\\pi}{4}$" },
            { id: "c", text: "$\\frac{\\pi}{3}$" },
            { id: "d", text: "$\\frac{\\pi}{6}$" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "technique", name: "Conversion", statement: "Multiply by $\\frac{\\pi}{180}$." }], steps: [{ reasoning: "$45\\times\\frac{\\pi}{180}=\\frac{\\pi}{4}$.", marks: 1, markCode: "A" }], finalAnswer: "$\\frac{\\pi}{4}$" },
        },
        {
          id: "ciam-u3-s1-ra-q6", difficulty: "foundation", totalMarks: 2,
          stem: "Convert $\\frac{11\\pi}{6}$ radians to degrees.",
          response: { type: "numeric", parts: [{ label: "a", answer: 330 }] },
          markscheme: { principles: [{ kind: "technique", name: "Conversion", statement: "Multiply by $\\frac{180}{\\pi}$." }], steps: [
            { reasoning: "$\\frac{11\\pi}{6}\\times\\frac{180}{\\pi}=\\frac{11\\times180}{6}=330°$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 330°.", marks: 1, markCode: "A" },
          ], finalAnswer: "$330°$" },
        },
        {
          id: "ciam-u3-s1-ra-q7", difficulty: "foundation", totalMarks: 2,
          stem: "Convert $210°$ to radians, leaving in terms of $\\pi$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Conversion", statement: "Simplify." }], steps: [
            { reasoning: "$210\\times\\frac{\\pi}{180}=\\frac{210\\pi}{180}=\\frac{7\\pi}{6}$.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$\\frac{7\\pi}{6}$ rad" },
        },
        {
          id: "ciam-u3-s1-ra-q8", difficulty: "core", totalMarks: 1,
          stem: "$\\frac{\\pi}{2}$ radians is equivalent to…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$60°$" },
            { id: "b", text: "$90°$" },
            { id: "c", text: "$45°$" },
            { id: "d", text: "$180°$" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "technique", name: "Conversion", statement: "Multiply by $\\frac{180}{\\pi}$." }], steps: [{ reasoning: "$\\frac{\\pi}{2}\\times\\frac{180}{\\pi}=90°$.", marks: 1, markCode: "A" }], finalAnswer: "$90°$" },
        },
        {
          id: "ciam-u3-s1-ra-q9", difficulty: "core", totalMarks: 2,
          stem: "Convert $\\frac{5\\pi}{4}$ radians to degrees.",
          response: { type: "numeric", parts: [{ label: "a", answer: 225 }] },
          markscheme: { principles: [{ kind: "technique", name: "Conversion", statement: "Multiply by $\\frac{180}{\\pi}$." }], steps: [
            { reasoning: "$\\frac{5\\pi}{4}\\times\\frac{180}{\\pi}=\\frac{5\\times180}{4}=225°$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 225°.", marks: 1, markCode: "A" },
          ], finalAnswer: "$225°$" },
        },
        {
          id: "ciam-u3-s1-ra-q10", difficulty: "core", totalMarks: 3,
          stem: "Convert $72°$ to radians, leaving in terms of $\\pi$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Conversion", statement: "Simplify." }], steps: [
            { reasoning: "$72\\times\\frac{\\pi}{180}=\\frac{72\\pi}{180}$.", marks: 1, markCode: "M" },
            { reasoning: "$=\\frac{2\\pi}{5}$ rad.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$\\frac{2\\pi}{5}$ rad" },
        },
        {
          id: "ciam-u3-s1-ra-q11", difficulty: "challenge", totalMarks: 1,
          stem: "Which angle is the largest: $2$ rad, $100°$, or $\\frac{\\pi}{3}$ rad?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$2$ rad" },
            { id: "b", text: "$\\frac{\\pi}{3}$ rad" },
            { id: "c", text: "They are equal" },
            { id: "d", text: "$100°$" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "technique", name: "Compare angles", statement: "Convert to same unit." }], steps: [{ reasoning: "$2\\text{ rad}\\approx114.6°$, $\\frac{\\pi}{3}=60°$.", marks: 1, markCode: "A" }], finalAnswer: "$2$ rad" },
        },
        {
          id: "ciam-u3-s1-ra-q12", difficulty: "challenge", totalMarks: 2,
          stem: "Find the arc length of a circle of radius 6 cm subtending an angle of $2.5$ rad at the centre.",
          response: { type: "numeric", parts: [{ label: "a", answer: 15, unit: "cm" }] },
          markscheme: { principles: [{ kind: "formula", name: "Arc length", statement: "$s=r\\theta$." }], steps: [
            { reasoning: "$s=6\\times2.5=15$ cm.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 15 cm.", marks: 1, markCode: "A" },
          ], finalAnswer: "15 cm" },
        },
        {
          id: "ciam-u3-s1-ra-q13", difficulty: "core", totalMarks: 3,
          stem: "Convert $250°$ to radians, leaving in terms of $\\pi$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Conversion", statement: "Simplify." }], steps: [
            { reasoning: "$250\\times\\frac{\\pi}{180}=\\frac{250\\pi}{180}=\\frac{25\\pi}{18}$.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "M" },
            { reasoning: "Final: $\\frac{25\\pi}{18}$ rad.", marks: 1, markCode: "A" },
          ], finalAnswer: "$\\frac{25\\pi}{18}$ rad" },
        },
        {
          id: "ciam-u3-s1-ra-q14", difficulty: "challenge", totalMarks: 1,
          stem: "$\\frac{3\\pi}{4}$ radians is equivalent to…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$135°$" },
            { id: "b", text: "$150°$" },
            { id: "c", text: "$120°$" },
            { id: "d", text: "$105°$" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "technique", name: "Conversion", statement: "Multiply by $\\frac{180}{\\pi}$." }], steps: [{ reasoning: "$\\frac{3\\pi}{4}\\times\\frac{180}{\\pi}=135°$.", marks: 1, markCode: "A" }], finalAnswer: "$135°$" },
        },
        {
          id: "ciam-u3-s1-ra-q15", difficulty: "core", totalMarks: 2,
          stem: "Convert $\\frac{\\pi}{10}$ radians to degrees.",
          response: { type: "numeric", parts: [{ label: "a", answer: 18 }] },
          markscheme: { principles: [{ kind: "technique", name: "Conversion", statement: "Multiply by $\\frac{180}{\\pi}$." }], steps: [
            { reasoning: "$\\frac{\\pi}{10}\\times\\frac{180}{\\pi}=18°$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 18°.", marks: 1, markCode: "A" },
          ], finalAnswer: "$18°$" },
        },
        {
          id: "ciam-u3-s1-ra-q16", difficulty: "challenge", totalMarks: 1,
          stem: "$\\frac{7\\pi}{6}$ radians is equivalent to…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$210°$" },
            { id: "b", text: "$300°$" },
            { id: "c", text: "$240°$" },
            { id: "d", text: "$150°$" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "technique", name: "Conversion", statement: "Multiply by $\\frac{180}{\\pi}$." }], steps: [{ reasoning: "$\\frac{7\\pi}{6}\\times\\frac{180}{\\pi}=210°$.", marks: 1, markCode: "A" }], finalAnswer: "$210°$" },
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
            { id: "a", text: "$\\frac{9\\pi}{2}$" },
            { id: "b", text: "$\\frac{3\\pi}{4}$" },
            { id: "c", text: "$9\\pi$" },
            { id: "d", text: "$\\frac{9\\pi}{4}$" },
          ], correctChoiceId: "d" },
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
        {
          id: "ciam-u3-s1-se-q5", difficulty: "foundation", totalMarks: 1,
          stem: "The area of a sector with $r=4$ and $\\theta=\\frac{\\pi}{6}$ is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\frac{8\\pi}{3}$" },
            { id: "b", text: "$\\frac{2\\pi}{3}$" },
            { id: "c", text: "$\\frac{4\\pi}{3}$" },
            { id: "d", text: "$4\\pi$" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "formula", name: "Sector area", statement: "$\\frac12 r^2\\theta$." }], steps: [{ reasoning: "$\\frac12\\times16\\times\\frac{\\pi}{6}=\\frac{8\\pi}{6}=\\frac{4\\pi}{3}$.", marks: 1, markCode: "A" }], finalAnswer: "$\\frac{4\\pi}{3}$" },
        },
        {
          id: "ciam-u3-s1-se-q6", difficulty: "foundation", totalMarks: 2,
          stem: "Find the arc length of a circle of radius 10 cm subtending $0.7$ rad.",
          response: { type: "numeric", parts: [{ label: "a", answer: 7, unit: "cm" }] },
          markscheme: { principles: [{ kind: "formula", name: "Arc length", statement: "$s=r\\theta$." }], steps: [
            { reasoning: "$s=10\\times0.7=7$ cm.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 7 cm.", marks: 1, markCode: "A" },
          ], finalAnswer: "7 cm" },
        },
        {
          id: "ciam-u3-s1-se-q7", difficulty: "foundation", totalMarks: 3,
          stem: "Find the area of a sector with $r=5$ and $\\theta=\\frac{2\\pi}{3}$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "formula", name: "Sector area", statement: "$A=\\frac12 r^2\\theta$." }], steps: [
            { reasoning: "$A=\\frac12\\times25\\times\\frac{2\\pi}{3}=\\frac{25\\pi}{3}$.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "M" },
            { reasoning: "Final: $\\frac{25\\pi}{3}$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$\\frac{25\\pi}{3}$" },
        },
        {
          id: "ciam-u3-s1-se-q8", difficulty: "core", totalMarks: 1,
          stem: "The perimeter of a sector with $r=3$ and $\\theta=\\frac{\\pi}{2}$ is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$6\\pi$" },
            { id: "b", text: "$6+\\frac{3\\pi}{2}$" },
            { id: "c", text: "$\\frac{3\\pi}{2}$" },
            { id: "d", text: "$3+\\frac{3\\pi}{2}$" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "formula", name: "Sector perimeter", statement: "$2r+s$." }], steps: [{ reasoning: "$s=3\\times\\frac{\\pi}{2}=\\frac{3\\pi}{2}$; perimeter $=6+\\frac{3\\pi}{2}$.", marks: 1, markCode: "A" }], finalAnswer: "$6+\\frac{3\\pi}{2}$" },
        },
        {
          id: "ciam-u3-s1-se-q9", difficulty: "core", totalMarks: 2,
          stem: "A sector has arc length 12 cm and radius 8 cm. Find the angle in radians.",
          response: { type: "numeric", parts: [{ label: "a", answer: 1.5 }] },
          markscheme: { principles: [{ kind: "technique", name: "Rearrange arc formula", statement: "Solve for $\\theta$." }], steps: [
            { reasoning: "$\\theta=\\frac{s}{r}=\\frac{12}{8}=1.5$ rad.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 1.5 rad.", marks: 1, markCode: "A" },
          ], finalAnswer: "1.5 rad" },
        },
        {
          id: "ciam-u3-s1-se-q10", difficulty: "core", totalMarks: 4,
          stem: "A sector has radius 6 cm and perimeter $12+4\\pi$ cm. Find its area.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Sector problem", statement: "Use perimeter first." }], steps: [
            { reasoning: "$2r+s=12+s=12+4\\pi$ → $s=4\\pi$ cm.", marks: 1, markCode: "M" },
            { reasoning: "$s=r\\theta$ → $4\\pi=6\\theta$ → $\\theta=\\frac{2\\pi}{3}$ rad.", marks: 1, markCode: "M" },
            { reasoning: "$A=\\frac12\\times36\\times\\frac{2\\pi}{3}=12\\pi$ cm².", marks: 1, markCode: "M" },
            { reasoning: "Answer: $12\\pi$ cm².", marks: 1, markCode: "A" },
          ], finalAnswer: "$12\\pi$ cm²" },
        },
        {
          id: "ciam-u3-s1-se-q11", difficulty: "challenge", totalMarks: 1,
          stem: "A sector has area $18\\pi$ cm² and radius 6 cm. The angle is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$2\\pi$ rad" },
            { id: "b", text: "$\\pi$ rad" },
            { id: "c", text: "$\\frac{2\\pi}{3}$ rad" },
            { id: "d", text: "$\\frac{\\pi}{2}$ rad" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "technique", name: "Rearrange sector formula", statement: "Solve for $\\theta$." }], steps: [{ reasoning: "$18\\pi=\\frac12(36)\\theta=18\\theta$ → $\\theta=\\pi$.", marks: 1, markCode: "A" }], finalAnswer: "$\\pi$ rad" },
        },
        {
          id: "ciam-u3-s1-se-q12", difficulty: "challenge", totalMarks: 2,
          stem: "A sector has area $2\\pi$ cm² and angle $\\frac{\\pi}{4}$ rad. Find its radius.",
          response: { type: "numeric", parts: [{ label: "a", answer: 4, unit: "cm" }] },
          markscheme: { principles: [{ kind: "technique", name: "Rearrange sector formula", statement: "Solve for $r$." }], steps: [
            { reasoning: "$2\\pi=\\frac12 r^2\\frac{\\pi}{4}=\\frac{\\pi r^2}{8}$ → $r^2=16$.", marks: 1, markCode: "M" },
            { reasoning: "$r=4$ cm.", marks: 1, markCode: "A" },
          ], finalAnswer: "4 cm" },
        },
        {
          id: "ciam-u3-s1-se-q13", difficulty: "core", totalMarks: 4,
          stem: "For a sector with $r=9$ and $\\theta=\\frac{2\\pi}{9}$, find the arc length and the area.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "formula", name: "Arc and area", statement: "$s=r\\theta$, $A=\\frac12r^2\\theta$." }], steps: [
            { reasoning: "$s=9\\times\\frac{2\\pi}{9}=2\\pi$.", marks: 1, markCode: "M" },
            { reasoning: "$A=\\frac12\\times81\\times\\frac{2\\pi}{9}=9\\pi$.", marks: 1, markCode: "M" },
            { reasoning: "Arc length $2\\pi$; area $9\\pi$.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "Arc $2\\pi$; area $9\\pi$" },
        },
        {
          id: "ciam-u3-s1-se-q14", difficulty: "challenge", totalMarks: 1,
          stem: "The perimeter of a sector with $r=8$ and $\\theta=\\frac{3\\pi}{4}$ is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$8+6\\pi$" },
            { id: "b", text: "$6\\pi$" },
            { id: "c", text: "$16+6\\pi$" },
            { id: "d", text: "$16+8\\pi$" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "formula", name: "Sector perimeter", statement: "$2r+s$." }], steps: [{ reasoning: "$s=8\\times\\frac{3\\pi}{4}=6\\pi$; perimeter $=16+6\\pi$.", marks: 1, markCode: "A" }], finalAnswer: "$16+6\\pi$" },
        },
        {
          id: "ciam-u3-s1-se-q15", difficulty: "core", totalMarks: 2,
          stem: "Find the area of a sector of radius 12 cm and angle $150°$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 188.5, tolerance: 0.1, unit: "cm²" }] },
          markscheme: { principles: [{ kind: "technique", name: "Sector area", statement: "Convert then use formula." }], steps: [
            { reasoning: "$\\theta=150\\times\\frac{\\pi}{180}=\\frac{5\\pi}{6}$; $A=\\frac12(144)\\frac{5\\pi}{6}=60\\pi\\approx188.5$ cm².", marks: 1, markCode: "M" },
            { reasoning: "Answer: $60\\pi$ cm² (≈188.5).", marks: 1, markCode: "A" },
          ], finalAnswer: "$60\\pi$ cm²" },
        },
        {
          id: "ciam-u3-s1-se-q16", difficulty: "challenge", totalMarks: 1,
          stem: "Which expression gives the area of a sector of radius $r$ and angle $\\theta$ rad?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\frac12 r\\theta$" },
            { id: "b", text: "$r^2\\theta$" },
            { id: "c", text: "$\\frac12 r^2\\theta$" },
            { id: "d", text: "$r\\theta$" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "formula", name: "Sector area", statement: "Standard formula." }], steps: [{ reasoning: "$A=\\frac12 r^2\\theta$.", marks: 1, markCode: "A" }], finalAnswer: "$\\frac12 r^2\\theta$" },
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
