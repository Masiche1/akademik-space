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
            { id: "a", text: "The diagonal distance" },
            { id: "b", text: "The vertical distance" },
            { id: "c", text: "The horizontal distance" },
            { id: "d", text: "The shortest distance" },
          ], correctChoiceId: "d" },
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
        {
          id: "olm-u6-s5-di-q5", difficulty: "foundation", totalMarks: 1,
          stem: "The perpendicular distance from point $(x_0,y_0)$ to the horizontal line $y=c$ is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$x_0+y_0$" },
            { id: "b", text: "$|y_0-c|$" },
            { id: "c", text: "$|x_0-c|$" },
            { id: "d", text: "$\\sqrt{x_0^2+y_0^2}$" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "formula", name: "Distance", statement: "Vertical gap only." }], steps: [{ reasoning: "Horizontal line → only $y$ matters.", marks: 1, markCode: "A" }], finalAnswer: "$|y_0-c|$" },
        },
        {
          id: "olm-u6-s5-di-q6", difficulty: "foundation", totalMarks: 2,
          stem: "Find the perpendicular distance from $(4,1)$ to the line $y=6$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 5 }] },
          markscheme: { principles: [{ kind: "formula", name: "Distance", statement: "$|y_0-c|$." }], steps: [
            { reasoning: "$d=|1-6|=5$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 5 units.", marks: 1, markCode: "A" },
          ], finalAnswer: "5" },
        },
        {
          id: "olm-u6-s5-di-q7", difficulty: "foundation", totalMarks: 1,
          stem: "The perpendicular distance from $(3,8)$ to the vertical line $x=-2$ is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "6 units" },
            { id: "b", text: "11 units" },
            { id: "c", text: "5 units" },
            { id: "d", text: "1 unit" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "formula", name: "Distance", statement: "$|x_0-h|$." }], steps: [
            { reasoning: "$d=|3-(-2)|=5$.", marks: 1, markCode: "A" },
          ], finalAnswer: "5 units" },
        },
        {
          id: "olm-u6-s5-di-q8", difficulty: "core", totalMarks: 2,
          stem: "The perpendicular distance from $(x_0,y_0)$ to the line $ax+by+c=0$ is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$|ax_0+by_0+c|$" },
            { id: "b", text: "$\\frac{|ax_0+by_0+c|}{\\sqrt{a^2+b^2}}$" },
            { id: "c", text: "$\\frac{ax_0+by_0+c}{a+b}$" },
            { id: "d", text: "$\\sqrt{a^2+b^2}$" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "formula", name: "Point-line", statement: "Standard formula." }], steps: [
            { reasoning: "Numerator is the line evaluated at the point.", marks: 1, markCode: "M" },
            { reasoning: "Correct choice.", marks: 1, markCode: "A" },
          ], finalAnswer: "$\\frac{|ax_0+by_0+c|}{\\sqrt{a^2+b^2}}$" },
        },
        {
          id: "olm-u6-s5-di-q9", difficulty: "core", totalMarks: 3,
          stem: "Find the perpendicular distance from $(2,5)$ to the line $3x+4y=12$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "formula", name: "Point-line", statement: "Standard formula." }], steps: [
            { reasoning: "$d=\\frac{|3\\times2+4\\times5-12|}{\\sqrt{9+16}}=\\frac{|6+20-12|}{5}=\\frac{14}{5}=2.8$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 2.8 units.", marks: 1, markCode: "M" },
            { reasoning: "Denominator $\\sqrt{25}=5$ ✓.", marks: 1, markCode: "A" },
          ], finalAnswer: "2.8" },
        },
        {
          id: "olm-u6-s5-di-q10", difficulty: "core", totalMarks: 3,
          stem: "Find the perpendicular distance from $(1,-1)$ to the line $x-y=4$, correct to 2 decimal places.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "formula", name: "Point-line", statement: "$x-y-4=0$." }], steps: [
            { reasoning: "$d=\\frac{|1-(-1)-4|}{\\sqrt{1+1}}=\\frac{2}{\\sqrt2}=\\sqrt2\\approx1.41$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: ≈1.41 units.", marks: 1, markCode: "M" },
            { reasoning: "Absolute value used ✓.", marks: 1, markCode: "A" },
          ], finalAnswer: "≈1.41" },
        },
        {
          id: "olm-u6-s5-di-q11", difficulty: "core", totalMarks: 3,
          stem: "Find the perpendicular distance from $(-1,2)$ to the line $4x-3y+5=0$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 1 }] },
          markscheme: { principles: [{ kind: "formula", name: "Point-line", statement: "Standard formula." }], steps: [
            { reasoning: "$d=\\frac{|4(-1)-3(2)+5|}{\\sqrt{16+9}}=\\frac{|-4-6+5|}{5}=\\frac{5}{5}=1$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 1 unit.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "1" },
        },
        {
          id: "olm-u6-s5-di-q12", difficulty: "challenge", totalMarks: 2,
          stem: "The distance between the parallel lines $y=2$ and $y=7$ is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "5 units" },
            { id: "b", text: "14 units" },
            { id: "c", text: "9 units" },
            { id: "d", text: "3.5 units" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "technique", name: "Parallel lines", statement: "Difference of intercepts." }], steps: [
            { reasoning: "$|7-2|=5$.", marks: 1, markCode: "M" },
            { reasoning: "Correct choice: 5 units.", marks: 1, markCode: "A" },
          ], finalAnswer: "5 units" },
        },
        {
          id: "olm-u6-s5-di-q13", difficulty: "challenge", totalMarks: 4,
          stem: "Find the perpendicular distance from $(4,1)$ to the line $x+2y=8$, correct to 3 decimal places.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "formula", name: "Point-line", statement: "Standard formula." }], steps: [
            { reasoning: "$d=\\frac{|4+2-8|}{\\sqrt{1+4}}=\\frac{2}{\\sqrt5}$.", marks: 1, markCode: "M" },
            { reasoning: "$=\\frac{2}{2.236}=0.894$ units.", marks: 1, markCode: "M" },
            { reasoning: "Answer: ≈0.894 units.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "≈0.894" },
        },
        {
          id: "olm-u6-s5-di-q14", difficulty: "challenge", totalMarks: 4,
          stem: "Find the perpendicular distance from the origin to the line $5x+12y=60$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "formula", name: "Point-line", statement: "Origin simplifies numerator." }], steps: [
            { reasoning: "$d=\\frac{|0+0-60|}{\\sqrt{25+144}}=\\frac{60}{13}$.", marks: 1, markCode: "M" },
            { reasoning: "$\\approx4.62$ units.", marks: 1, markCode: "M" },
            { reasoning: "$\\sqrt{169}=13$ ✓.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $\\frac{60}{13}\\approx4.62$ units.", marks: 1, markCode: "A" },
          ], finalAnswer: "$\\frac{60}{13}$" },
        },
        {
          id: "olm-u6-s5-di-q15", difficulty: "challenge", totalMarks: 3,
          stem: "Find the perpendicular distance from $(3,4)$ to the line $4x+3y=0$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 4.8 }] },
          markscheme: { principles: [{ kind: "formula", name: "Point-line", statement: "Standard formula." }], steps: [
            { reasoning: "$d=\\frac{|12+12-0|}{\\sqrt{16+9}}=\\frac{24}{5}=4.8$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 4.8 units.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "4.8" },
        },
        {
          id: "olm-u6-s5-di-q16", difficulty: "challenge", totalMarks: 3,
          stem: "Find the distance between the parallel lines $3x+4y=10$ and $3x+4y=25$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 3 }] },
          markscheme: { principles: [{ kind: "technique", name: "Parallel lines", statement: "Difference over $\\sqrt{a^2+b^2}$." }], steps: [
            { reasoning: "$d=\\frac{|25-10|}{\\sqrt{9+16}}=\\frac{15}{5}=3$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 3 units.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "3" },
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
            { id: "a", text: "Guess the answer" },
            { id: "b", text: "Measure directly" },
            { id: "c", text: "Identify the vertical plane" },
            { id: "d", text: "Use 3D formulas" },
          ], correctChoiceId: "c" },
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
        {
          id: "olm-u6-s5-3-q5", difficulty: "foundation", totalMarks: 1,
          stem: "An angle of elevation is always measured from…",
          response: { type: "mcq", choices: [
            { id: "a", text: "The vertical" },
            { id: "b", text: "The object" },
            { id: "c", text: "The horizontal" },
            { id: "d", text: "North" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "Elevation", statement: "From horizontal up." }], steps: [{ reasoning: "Standard definition.", marks: 1, markCode: "A" }], finalAnswer: "The horizontal" },
        },
        {
          id: "olm-u6-s5-3-q6", difficulty: "foundation", totalMarks: 2,
          stem: "A pole 9 m tall casts a shadow 12 m long. Find the angle of elevation of the sun, correct to 2 decimal places.",
          response: { type: "numeric", parts: [{ label: "a", answer: 36.87, tolerance: 0.01, unit: "°" }] },
          markscheme: { principles: [{ kind: "technique", name: "Elevation", statement: "$\\tan^{-1}(9/12)$." }], steps: [
            { reasoning: "$\\tan\\theta=\\frac{9}{12}=0.75$ → $\\theta=36.87°$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: ≈36.87°.", marks: 1, markCode: "A" },
          ], finalAnswer: "≈36.87°" },
        },
        {
          id: "olm-u6-s5-3-q7", difficulty: "foundation", totalMarks: 1,
          stem: "A wire runs from the top of a 10 m pole to a point on the ground 10 m from the base. The angle the wire makes with the ground is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$60°$" },
            { id: "b", text: "$30°$" },
            { id: "c", text: "$45°$" },
            { id: "d", text: "$26.6°$" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "technique", name: "Right triangle", statement: "Equal legs → 45°." }], steps: [
            { reasoning: "$\\tan\\theta=\\frac{10}{10}=1$ → $45°$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$45°$" },
        },
        {
          id: "olm-u6-s5-3-q8", difficulty: "core", totalMarks: 2,
          stem: "To find the angle between a line and a plane, you first find…",
          response: { type: "mcq", choices: [
            { id: "a", text: "The length of the line" },
            { id: "b", text: "The projection of the line onto the plane" },
            { id: "c", text: "The area of the plane" },
            { id: "d", text: "The normal to the line" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "technique", name: "Angle with plane", statement: "Via projection." }], steps: [
            { reasoning: "Angle with plane uses line, projection, and perpendicular.", marks: 1, markCode: "M" },
            { reasoning: "Correct choice.", marks: 1, markCode: "A" },
          ], finalAnswer: "The projection of the line onto the plane" },
        },
        {
          id: "olm-u6-s5-3-q9", difficulty: "core", totalMarks: 3,
          stem: "A ladder 13 m long has its base 5 m from a wall. How high does it reach?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Pythagoras", statement: "5-12-13 triple." }], steps: [
            { reasoning: "$h=\\sqrt{169-25}=\\sqrt{144}=12$ m.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 12 m.", marks: 1, markCode: "M" },
            { reasoning: "5-12-13 triangle ✓.", marks: 1, markCode: "A" },
          ], finalAnswer: "12 m" },
        },
        {
          id: "olm-u6-s5-3-q10", difficulty: "core", totalMarks: 3,
          stem: "Two points on a vertical wall are at heights 20 m and 35 m, with 30 m horizontal separation. Find the angle the line joining them makes with the horizontal, correct to 2 decimal places.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Vertical plane", statement: "Rise over run." }], steps: [
            { reasoning: "$\\tan\\theta=\\frac{35-20}{30}=\\frac{15}{30}=0.5$.", marks: 1, markCode: "M" },
            { reasoning: "$\\theta=\\tan^{-1}(0.5)\\approx26.57°$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: ≈26.57°.", marks: 1, markCode: "A" },
          ], finalAnswer: "≈26.57°" },
        },
        {
          id: "olm-u6-s5-3-q11", difficulty: "core", totalMarks: 3,
          stem: "A ramp rises 8 m vertically over a horizontal distance of 6 m. Find its angle to the horizontal, correct to 2 decimal places.",
          response: { type: "numeric", parts: [{ label: "a", answer: 53.13, tolerance: 0.01, unit: "°" }] },
          markscheme: { principles: [{ kind: "technique", name: "Tan inverse", statement: "$\\tan^{-1}(8/6)$." }], steps: [
            { reasoning: "$\\tan\\theta=\\frac86=1.333$ → $\\theta=53.13°$.", marks: 1, markCode: "M" },
            { reasoning: "$\\approx53.13°$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: ≈53.13°.", marks: 1, markCode: "A" },
          ], finalAnswer: "≈53.13°" },
        },
        {
          id: "olm-u6-s5-3-q12", difficulty: "challenge", totalMarks: 2,
          stem: "For a 3D problem, the recommended first step is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Apply a 3D formula immediately" },
            { id: "b", text: "Measure all three dimensions" },
            { id: "c", text: "Draw the vertical plane containing the key points" },
            { id: "d", text: "Guess using 2D intuition" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "technique", name: "3D approach", statement: "Reduce to 2D plane." }], steps: [
            { reasoning: "Isolate the vertical plane first.", marks: 1, markCode: "M" },
            { reasoning: "Correct choice.", marks: 1, markCode: "A" },
          ], finalAnswer: "Draw the vertical plane" },
        },
        {
          id: "olm-u6-s5-3-q13", difficulty: "challenge", totalMarks: 4,
          stem: "A 10 m mast stands on top of a 30 m cliff. An observer stands 40 m from the base of the cliff. Find the angle of elevation to the top of the mast.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Combined heights", statement: "Total height = cliff + mast." }], steps: [
            { reasoning: "Total height $=30+10=40$ m.", marks: 1, markCode: "M" },
            { reasoning: "$\\tan\\theta=\\frac{40}{40}=1$ → $\\theta=45°$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $45°$.", marks: 1, markCode: "M" },
            { reasoning: "Mast height added correctly ✓.", marks: 1, markCode: "A" },
          ], finalAnswer: "$45°$" },
        },
        {
          id: "olm-u6-s5-3-q14", difficulty: "challenge", totalMarks: 4,
          stem: "A cable runs from the top of a 24 m tower to an anchor point 18 m from the base. Find the angle the cable makes with the ground.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Tan inverse", statement: "Height over distance." }], steps: [
            { reasoning: "$\\tan\\theta=\\frac{24}{18}=1.333$.", marks: 1, markCode: "M" },
            { reasoning: "$\\theta=\\tan^{-1}(1.333)\\approx53.1°$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: ≈53.1°.", marks: 1, markCode: "M" },
            { reasoning: "Cable is hypotenuse ✓.", marks: 1, markCode: "A" },
          ], finalAnswer: "≈53.1°" },
        },
        {
          id: "olm-u6-s5-3-q15", difficulty: "challenge", totalMarks: 3,
          stem: "A line has horizontal displacement 9 m and vertical displacement 12 m. Find its length, correct to 2 decimal places.",
          response: { type: "numeric", parts: [{ label: "a", answer: 15, unit: "m" }] },
          markscheme: { principles: [{ kind: "technique", name: "Pythagoras 3D", statement: "3-4-5 scaled." }], steps: [
            { reasoning: "$L=\\sqrt{81+144}=\\sqrt{225}=15$ m.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 15 m.", marks: 1, markCode: "M" },
            { reasoning: "9-12-15 is 3-4-5 ×3 ✓.", marks: 1, markCode: "A" },
          ], finalAnswer: "15 m" },
        },
        {
          id: "olm-u6-s5-3-q16", difficulty: "challenge", totalMarks: 3,
          stem: "A wire of length 25 m runs from the top of a 20 m pole to the ground. Find the angle the wire makes with the pole, correct to 2 decimal places.",
          response: { type: "numeric", parts: [{ label: "a", answer: 36.87, tolerance: 0.01, unit: "°" }] },
          markscheme: { principles: [{ kind: "technique", name: "Tan inverse", statement: "Base distance first." }], steps: [
            { reasoning: "Base distance $=\\sqrt{625-400}=15$ m.", marks: 1, markCode: "M" },
            { reasoning: "$\\tan\\theta=\\frac{15}{20}=0.75$ (angle with pole) → $36.87°$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: ≈36.87°.", marks: 1, markCode: "A" },
          ], finalAnswer: "≈36.87°" },
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
