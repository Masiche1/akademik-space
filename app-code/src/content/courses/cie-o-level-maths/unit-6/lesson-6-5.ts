import type { Lesson } from "../../../types.ts";

export const lesson65: Lesson = {
  id: "olm-u6-lesson-6-5",
  code: "6-5",
  title: "Perpendicular Distance and 3D Trigonometry",
  goal: "I CAN find perpendicular distances and solve trigonometry problems in three dimensions.",
  standards: ["4024: trigonometry"],
  vocabulary: [
    { term: "Perpendicular distance", definition: "Shortest distance from point to line." },
    { term: "3D trigonometry", definition: "Trig applied to problems involving height/depth." },
    { term: "Angle between line and plane", definition: "Angle between line and its projection." },
    { term: "Vertical plane", definition: "Plane perpendicular to horizontal." },
  ],
  concepts: [
    {
      id: "olm-u6-s5-distance",
      title: "Perpendicular distance from point to line",
      skill: "Find perpendicular distances at O Level.",
      lesson: {
        sections: [
          { heading: "Concept", body: "The perpendicular distance from point P to line L is the shortest distance — measured along the perpendicular from P to L. For a horizontal line $y=c$, the distance from $(x_0,y_0)$ is $|y_0-c|$. For a slanted line $ax+by+c=0$, the distance is $\\frac{|ax_0+by_0+c|}{\\sqrt{a^2+b^2}}$." },
          { heading: "Finding via geometry", body: "Alternatively, find the foot of perpendicular: line through P perpendicular to L, find intersection, then distance = length of that segment. For right-triangle problems, the perpendicular distance is often the height — use area $=\\frac12bh$ to relate it to other measurements." },
        ],
        keyFormulas: [
          { name: "Point-line", statement: "$d=\\frac{|ax_0+by_0+c|}{\\sqrt{a^2+b^2}}$" },
          { name: "Horizontal line", statement: "$d=|y_0-c|$" },
        ],
        workedExample: { problem: "Find perpendicular distance from (3,4) to line $y=2$.", solution: "$d=|4-2|=2$ units." },
      },
      questions: [
        {
          id: "olm-u6-s5-di-q1", difficulty: "foundation", totalMarks: 1,
          stem: "The perpendicular distance from a point to a line is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "The shortest distance" }, { id: "b", text: "The horizontal distance" }, { id: "c", text: "The vertical distance" }, { id: "d", text: "The diagonal distance" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Perpendicular distance", statement: "Shortest." }], steps: [{ reasoning: "Measured along perpendicular.", marks: 1, markCode: "A" }], finalAnswer: "Shortest distance" },
        },
        {
          id: "olm-u6-s5-di-q2", difficulty: "foundation", totalMarks: 2,
          stem: "Find the perpendicular distance from (5,7) to the line $y=3$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "formula", name: "Distance", statement: "$|y_0-c|$." }], steps: [
            { reasoning: "$d=|7-3|=4$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 4 units.", marks: 1, markCode: "A" },
          ], finalAnswer: "4" },
        },
        {
          id: "olm-u6-s5-di-q3", difficulty: "core", totalMarks: 3,
          stem: "Find the perpendicular distance from (1,2) to the line $x=5$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "formula", name: "Vertical line", statement: "$|x_0-h|$." }], steps: [
            { reasoning: "$d=|1-5|=4$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 4 units.", marks: 1, markCode: "M" },
            { reasoning: "Perpendicular to vertical line is horizontal.", marks: 1, markCode: "A" },
          ], finalAnswer: "4" },
        },
        {
          id: "olm-u6-s5-di-q4", difficulty: "core", totalMarks: 4,
          stem: "Find the perpendicular distance from (0,0) to the line $3x+4y=12$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "formula", name: "Point-line", statement: "Standard formula." }], steps: [
            { reasoning: "$d=\\frac{|0+0-12|}{\\sqrt{9+16}}=\\frac{12}{5}=2.4$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 2.4 units.", marks: 1, markCode: "M" },
            { reasoning: "Verify: foot of perpendicular lies on line ✓.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "2.4" },
        },
      ],
    },
    {
      id: "olm-u6-s5-3d",
      title: "Trigonometry in three dimensions",
      skill: "Solve 3D trigonometry problems at O Level.",
      lesson: {
        sections: [
          { heading: "3D problems", body: "3D trig problems involve heights, depths and slant distances. Strategy: identify the vertical plane containing the relevant points — work entirely within that 2D plane using right-triangle trig or sine/cosine rules. For angles between a line and a plane, find the projection of the line onto the plane first." },
          { heading: "Common setups", body: "Pole + ground distance + angle of elevation → right triangle. Two points at different heights → vertical plane through both. Ladder against wall in 3D → decompose into horizontal and vertical components. Always draw a clear diagram showing the vertical plane." },
        ],
        keyFormulas: [
          { name: "Approach", statement: "Isolate vertical plane → 2D trig" },
        ],
        workedExample: { problem: "A flagpole 10 m tall has a wire from top to ground 8 m from base. Find angle wire makes with ground.", solution: "$\\tan\\theta=\\frac{10}{8}$ → $\\theta=\\tan^{-1}(1.25)\\approx51.3°$." },
      },
      questions: [
        {
          id: "olm-u6-s5-3-q1", difficulty: "foundation", totalMarks: 1,
          stem: "For 3D trig problems, the first step is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Identify the vertical plane" }, { id: "b", text: "Use 3D formulas" }, { id: "c", text: "Guess the answer" }, { id: "d", text: "Measure directly" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "technique", name: "3D approach", statement: "Reduce to 2D." }], steps: [{ reasoning: "Work in vertical plane.", marks: 1, markCode: "A" }], finalAnswer: "Identify vertical plane" },
        },
        {
          id: "olm-u6-s5-3-q2", difficulty: "foundation", totalMarks: 2,
          stem: "A pole 12 m tall casts a shadow 9 m long. Find angle of elevation of sun.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Elevation", statement: "$\\tan=O/A$." }], steps: [
            { reasoning: "$\\tan\\theta=\\frac{12}{9}=1.333$ → $\\theta=53.1°$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: ≈53.1°.", marks: 1, markCode: "A" },
          ], finalAnswer: "≈53.1°" },
        },
        {
          id: "olm-u6-s5-3-q3", difficulty: "core", totalMarks: 3,
          stem: "A ladder 5 m long leans against a wall, base 3 m from wall. How high does it reach?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Right triangle", statement: "Pythagoras." }], steps: [
            { reasoning: "$h=\\sqrt{25-9}=\\sqrt{16}=4$ m.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 4 m.", marks: 1, markCode: "M" },
            { reasoning: "3-4-5 triangle ✓.", marks: 1, markCode: "A" },
          ], finalAnswer: "4 m" },
        },
        {
          id: "olm-u6-s5-3-q4", difficulty: "core", totalMarks: 4,
          stem: "From point A on ground, a building's top has angle of elevation 40°. From point B 50 m closer, angle is 55°. Find building height.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Two-position", statement: "Two triangles." }], steps: [
            { reasoning: "Let far distance $d$: $h=d\\tan40°=0.839d$; near: $h=(d-50)\\tan55°=1.428(d-50)$.", marks: 1, markCode: "M" },
            { reasoning: "$0.839d=1.428d-71.4$ → $0.589d=71.4$ → $d=121.2$ m.", marks: 1, markCode: "M" },
            { reasoning: "$h=0.839\\times121.2=101.7$ m.", marks: 1, markCode: "M" },
            { reasoning: "Answer: ≈102 m.", marks: 1, markCode: "A" },
          ], finalAnswer: "≈102 m" },
        },
      ],
    },
  ],
  notes: [
    { id: "olm-u6-s5-3dnotes", title: "3D trig & distance — notes", summary: "Perpendicular distance and vertical planes.",
      sections: [
        { heading: "Distance", body: "$d=|y_0-c|$ horizontal; $|x_0-h|$ vertical; formula for slanted lines." },
        { heading: "3D", body: "Isolate vertical plane → 2D trig; angle with plane via projection." },
      ] },
  ],
};
