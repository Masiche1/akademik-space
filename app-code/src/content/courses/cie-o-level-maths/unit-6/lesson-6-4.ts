import type { Lesson } from "../../../types.ts";

export const lesson64: Lesson = {
  id: "olm-u6-lesson-6-4",
  code: "6-4",
  title: "Trigonometry Problem Solving",
  goal: "I CAN solve multi-step trigonometry problems including area of triangles and combined problems.",
  standards: ["4024: trigonometry"],
  vocabulary: [
    { term: "Area of triangle", definition: "$A=\\frac12ab\\sin C$ — included angle needed." },
    { term: "Multi-step problem", definition: "Problem requiring several trig techniques chained." },
    { term: "Split triangle", definition: "Dividing non-right triangle into right triangles." },
    { term: "Perpendicular height", definition: "Shortest distance from vertex to opposite side." },
  ],
  concepts: [
    {
      id: "olm-u6-s4-area",
      title: "Area of a triangle",
      skill: "Find triangle areas using $\\frac12ab\\sin C$ at O Level.",
      lesson: {
        sections: [
          { heading: "The formula", body: "Area $=\\frac12ab\\sin C$ where $a$ and $b$ are two sides and $C$ is the included angle. This is essential when you don't know the perpendicular height — e.g. a triangle with sides 5 and 8 and included angle 60° has area $\\frac12\\times5\\times8\\times\\sin60°=20\\times0.866=17.3$ units². The angle MUST be the included angle between the two sides used." },
          { heading: "Finding the height", body: "To find the perpendicular height $h$ from this area: $h=\\frac{2A}{\\text{base}}$. Combined with sine/cosine rules, this solves problems like finding the area of a triangle when only some sides/angles are given — first use sine or cosine rule to get a missing side or angle, then apply the area formula." },
        ],
        keyFormulas: [
          { name: "Area", statement: "$A=\\frac12ab\\sin C$" },
          { name: "Height", statement: "$h=\\frac{2A}{b}$" },
        ],
        workedExample: { problem: "Triangle has sides 7 and 9 with included angle 80°. Find its area.", solution: "$A=\\frac12\\times7\\times9\\times\\sin80°=31.5\\times0.985=31.0$ units²." },
      },
      questions: [
        {
          id: "olm-u6-s4-ar-q1", difficulty: "foundation", totalMarks: 1,
          stem: "The area of a triangle with two sides $a,b$ and included angle $C$ is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\frac12ab\\sin C$" }, { id: "b", text: "$\\frac12ab\\cos C$" }, { id: "c", text: "$ab\\sin C$" }, { id: "d", text: "$\\frac12ab$" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "formula", name: "Area", statement: "½ab sin C." }], steps: [{ reasoning: "Standard formula.", marks: 1, markCode: "A" }], finalAnswer: "$\\frac12ab\\sin C$" },
        },
        {
          id: "olm-u6-s4-ar-q2", difficulty: "foundation", totalMarks: 2,
          stem: "Triangle has sides 6 and 8 with included angle 90°. Find area (compare with ½bh).",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "formula", name: "Area at 90°", statement: "sin90=1." }], steps: [
            { reasoning: "$A=\\frac12\\times6\\times8\\times\\sin90°=24$.", marks: 1, markCode: "M" },
            { reasoning: "Same as $\\frac12bh=\\frac12\\times6\\times8=24$ ✓.", marks: 1, markCode: "A" },
          ], finalAnswer: "24" },
        },
        {
          id: "olm-u6-s4-ar-q3", difficulty: "core", totalMarks: 3,
          stem: "Triangle has sides 10 and 12 with included angle 45°. Find its area.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Area formula", statement: "Identify included angle." }], steps: [
            { reasoning: "$A=\\frac12\\times10\\times12\\times\\sin45°=60\\times0.707=42.4$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: ≈42.4 units².", marks: 1, markCode: "M" },
            { reasoning: "Or $30\\sqrt2\\approx42.4$.", marks: 1, markCode: "A" },
          ], finalAnswer: "≈42.4" },
        },
        {
          id: "olm-u6-s4-ar-q4", difficulty: "core", totalMarks: 4,
          stem: "Triangle ABC has a=8, b=10, C=55°. Find the perpendicular height from C to side c.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Height from area", statement: "Two-step solution." }], steps: [
            { reasoning: "Area $=\\frac12\\times8\\times10\\times\\sin55°=40\\times0.819=32.8$.", marks: 1, markCode: "M" },
            { reasoning: "Find c: $c^2=64+100-160\\cos55°=164-91.8=72.2$ → $c\\approx8.50$.", marks: 1, markCode: "M" },
            { reasoning: "$h=\\frac{2A}{c}=\\frac{65.5}{8.50}\\approx7.71$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: ≈7.7 units.", marks: 1, markCode: "A" },
          ], finalAnswer: "≈7.7" },
        },
      ],
    },
    {
      id: "olm-u6-s4-combined",
      title: "Combined trig problems",
      skill: "Solve multi-step trigonometry problems at O Level.",
      lesson: {
        sections: [
          { heading: "Strategy", body: "Multi-step trig problems usually involve: (1) drawing a clear diagram, (2) identifying what you know vs need, (3) choosing the right tool — right-triangle trig, sine rule, or cosine rule, (4) chaining results. For bearings and elevation problems combined with triangle rules, first find the interior angles of the triangle formed, then apply the appropriate rule." },
          { heading: "Common patterns", body: "Two-triangle problems: split at a common vertex, solve each separately, combine. 'Shadows' and 'flagpoles' problems use similar triangles. Navigation problems use bearings + sine/cosine rules. Always verify answers make sense — distances positive, angles between 0° and 180°, results consistent with diagram." },
        ],
        keyFormulas: [
          { name: "Approach", statement: "Draw → identify → choose rule → chain → verify" },
        ],
        workedExample: { problem: "From point A, B is 10 km on bearing 060°. From B, C is 15 km on bearing 150°. Find AC.", solution: "Angle ABC = 150-60=90°... more precisely the turn angle: back bearing 240 vs 150 → 90°. Right triangle: $AC=\\sqrt{100+225}=\\sqrt{325}=18.0$ km." },
      },
      questions: [
        {
          id: "olm-u6-s4-co-q1", difficulty: "foundation", totalMarks: 1,
          stem: "The first step in any trig problem should be…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Draw a labelled diagram" }, { id: "b", text: "Guess the formula" }, { id: "c", text: "Calculate immediately" }, { id: "d", text: "Check the answer" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "technique", name: "Problem approach", statement: "Diagram first." }], steps: [{ reasoning: "Always draw and label.", marks: 1, markCode: "A" }], finalAnswer: "Draw a labelled diagram" },
        },
        {
          id: "olm-u6-s4-co-q2", difficulty: "foundation", totalMarks: 2,
          stem: "A triangle has sides 5, 12, 13. What type of triangle is it?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Identify triangle", statement: "Check for right angle." }], steps: [
            { reasoning: "$5^2+12^2=25+144=169=13^2$ → right-angled.", marks: 1, markCode: "M" },
            { reasoning: "Answer: right-angled (5-12-13 triple).", marks: 1, markCode: "A" },
          ], finalAnswer: "Right-angled" },
        },
        {
          id: "olm-u6-s4-co-q3", difficulty: "core", totalMarks: 3,
          stem: "From a point 50 m from a tower, the angle of elevation to the top is 35°. From a point 20 m closer, find the new angle of elevation.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Two-position problem", statement: "Find height first." }], steps: [
            { reasoning: "Height $h=50\\tan35°=50\\times0.700=35.0$ m.", marks: 1, markCode: "M" },
            { reasoning: "New distance $=50-20=30$ m; new angle $=\\tan^{-1}(\\frac{35}{30})=\\tan^{-1}(1.167)\\approx49.4°$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: ≈49.4°.", marks: 1, markCode: "A" },
          ], finalAnswer: "≈49.4°" },
        },
        {
          id: "olm-u6-s4-co-q4", difficulty: "core", totalMarks: 4,
          stem: "A ship sails 20 km on bearing 050°, then 15 km on bearing 140°. Find the distance from start to finish.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Navigation", statement: "Find angle then cosine rule." }], steps: [
            { reasoning: "Angle at turn: back bearing $050+180=230$; angle between $230$ and $140$ = $90°$.", marks: 1, markCode: "M" },
            { reasoning: "$d=\\sqrt{20^2+15^2}=\\sqrt{625}=25$ km.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 25 km.", marks: 1, markCode: "M" },
            { reasoning: "Verify: 20-15-25 is a 3-4-5 scaled (×5) right triangle ✓.", marks: 1, markCode: "A" },
          ], finalAnswer: "25 km" },
        },
      ],
    },
  ],
  notes: [
    { id: "olm-u6-s4-prob-notes", title: "Trig problem solving — notes", summary: "Area formula and multi-step problems.",
      sections: [
        { heading: "Area", body: "$A=\\frac12ab\\sin C$ — included angle required; $h=2A/b$." },
        { heading: "Approach", body: "Draw, identify knowns, choose rule (right-trig/sine/cosine), chain, verify." },
      ] },
  ],
};
