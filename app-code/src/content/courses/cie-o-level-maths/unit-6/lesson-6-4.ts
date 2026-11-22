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
            { id: "a", text: "$ab\\sin C$" },
            { id: "b", text: "$\\frac12ab\\sin C$" },
            { id: "c", text: "$\\frac12ab\\cos C$" },
            { id: "d", text: "$\\frac12ab$" },
          ], correctChoiceId: "b" },
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
        {
          id: "olm-u6-s4-ar-q5", difficulty: "foundation", totalMarks: 1,
          stem: "The formula $A=\\frac12ab\\sin C$ requires that angle $C$ is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Any angle in the triangle" },
            { id: "b", text: "The included angle between sides $a$ and $b$" },
            { id: "c", text: "A right angle" },
            { id: "d", text: "The largest angle" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "formula", name: "Area", statement: "Included angle only." }], steps: [{ reasoning: "$C$ must be between the two sides used.", marks: 1, markCode: "A" }], finalAnswer: "The included angle" },
        },
        {
          id: "olm-u6-s4-ar-q6", difficulty: "foundation", totalMarks: 2,
          stem: "A triangle has sides 4 and 5 with included angle $30°$. Find its area.",
          response: { type: "numeric", parts: [{ label: "a", answer: 5, unit: "units²" }] },
          markscheme: { principles: [{ kind: "formula", name: "Area", statement: "$\\frac12ab\\sin C$." }], steps: [
            { reasoning: "$A=\\frac12\\times4\\times5\\times\\sin30°=10\\times0.5=5$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 5 units².", marks: 1, markCode: "A" },
          ], finalAnswer: "5 units²" },
        },
        {
          id: "olm-u6-s4-ar-q7", difficulty: "foundation", totalMarks: 1,
          stem: "A right triangle with legs 6 and 8 has area…",
          response: { type: "mcq", choices: [
            { id: "a", text: "14 square units" },
            { id: "b", text: "48 square units" },
            { id: "c", text: "20 square units" },
            { id: "d", text: "24 square units" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "formula", name: "Area", statement: "$\\frac12bh$ since $\\sin90°=1$." }], steps: [
            { reasoning: "$A=\\frac12\\times6\\times8=24$.", marks: 1, markCode: "A" },
          ], finalAnswer: "24" },
        },
        {
          id: "olm-u6-s4-ar-q8", difficulty: "core", totalMarks: 2,
          stem: "In $A=\\frac12ab\\sin C$, using a non-included angle would…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Give the wrong area" },
            { id: "b", text: "Still work correctly" },
            { id: "c", text: "Give the perimeter" },
            { id: "d", text: "Give double the area" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "formula", name: "Area", statement: "Angle must be included." }], steps: [
            { reasoning: "Formula only valid for the included angle.", marks: 1, markCode: "M" },
            { reasoning: "Correct choice.", marks: 1, markCode: "A" },
          ], finalAnswer: "Give the wrong area" },
        },
        {
          id: "olm-u6-s4-ar-q9", difficulty: "core", totalMarks: 3,
          stem: "A triangle has sides 8 and 11 with included angle $65°$. Find its area, correct to 1 decimal place.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "formula", name: "Area", statement: "$\\frac12ab\\sin C$." }], steps: [
            { reasoning: "$A=\\frac12\\times8\\times11\\times\\sin65°=44\\times0.906=39.9$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: ≈39.9 units².", marks: 1, markCode: "M" },
            { reasoning: "Degree mode; included angle used.", marks: 1, markCode: "A" },
          ], finalAnswer: "≈39.9 units²" },
        },
        {
          id: "olm-u6-s4-ar-q10", difficulty: "core", totalMarks: 3,
          stem: "A triangle has sides 9 and 12 with included angle $70°$. Find the perpendicular height from the vertex of the included angle to the third side, correct to 1 decimal place.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Height from area", statement: "$h=2A/c$." }], steps: [
            { reasoning: "Area $=\\frac12\\times9\\times12\\times\\sin70°=54\\times0.940=50.7$.", marks: 1, markCode: "M" },
            { reasoning: "Third side $c=\\sqrt{81+144-216\\cos70°}=\\sqrt{151.1}\\approx12.29$.", marks: 1, markCode: "M" },
            { reasoning: "$h=\\frac{2\\times50.7}{12.29}\\approx8.3$ units.", marks: 1, markCode: "A" },
          ], finalAnswer: "≈8.3 units" },
        },
        {
          id: "olm-u6-s4-ar-q11", difficulty: "core", totalMarks: 3,
          stem: "A triangle has sides 10 and 14 with included angle $40°$. Find its area, correct to 2 decimal places.",
          response: { type: "numeric", parts: [{ label: "a", answer: 45.0, tolerance: 0.01, unit: "units²" }] },
          markscheme: { principles: [{ kind: "formula", name: "Area", statement: "$\\frac12ab\\sin C$." }], steps: [
            { reasoning: "$A=70\\sin40°=70\\times0.6428=45.0$.", marks: 1, markCode: "M" },
            { reasoning: "$\\approx45.00$ units².", marks: 1, markCode: "M" },
            { reasoning: "Answer: ≈45.00 units².", marks: 1, markCode: "A" },
          ], finalAnswer: "≈45.00 units²" },
        },
        {
          id: "olm-u6-s4-ar-q12", difficulty: "challenge", totalMarks: 2,
          stem: "Two sides of length 6 and 10 are fixed. Which included angle gives the largest area?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$45°$" },
            { id: "b", text: "$90°$" },
            { id: "c", text: "$60°$" },
            { id: "d", text: "$30°$" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "property", name: "Max area", statement: "$\\sin C$ max at $90°$." }], steps: [
            { reasoning: "$\\sin90°=1$ is the maximum of sine.", marks: 1, markCode: "M" },
            { reasoning: "Correct choice: $90°$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$90°$" },
        },
        {
          id: "olm-u6-s4-ar-q13", difficulty: "challenge", totalMarks: 4,
          stem: "A triangle has sides 5 and 7 with included angle $100°$. Find its area, correct to 2 decimal places.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "formula", name: "Area", statement: "$\\frac12ab\\sin C$." }], steps: [
            { reasoning: "$A=\\frac12\\times5\\times7\\times\\sin100°=17.5\\times0.985=17.24$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: ≈17.24 units².", marks: 1, markCode: "M" },
            { reasoning: "$\\sin100°=\\sin80°$ — obtuse handled correctly.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "≈17.24 units²" },
        },
        {
          id: "olm-u6-s4-ar-q14", difficulty: "challenge", totalMarks: 4,
          stem: "A triangle has area 40 units², side $a=10$ and included angle $C=50°$. Find the other side $b$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Rearrange area", statement: "Solve for $b$." }], steps: [
            { reasoning: "$40=\\frac12\\times10\\times b\\times\\sin50°=3.83b$.", marks: 1, markCode: "M" },
            { reasoning: "$b=\\frac{40}{3.83}\\approx10.4$.", marks: 1, markCode: "M" },
            { reasoning: "Check: $\\frac12\\times10\\times10.4\\times0.766=39.8\\approx40$ ✓.", marks: 1, markCode: "M" },
            { reasoning: "Answer: ≈10.4 units.", marks: 1, markCode: "A" },
          ], finalAnswer: "≈10.4 units" },
        },
        {
          id: "olm-u6-s4-ar-q15", difficulty: "challenge", totalMarks: 3,
          stem: "A triangle has sides 20 and 25 with included angle $65°$. Find its area, correct to 2 decimal places.",
          response: { type: "numeric", parts: [{ label: "a", answer: 226.58, tolerance: 0.01, unit: "units²" }] },
          markscheme: { principles: [{ kind: "formula", name: "Area", statement: "$\\frac12ab\\sin C$." }], steps: [
            { reasoning: "$A=\\frac12\\times20\\times25\\times\\sin65°=250\\times0.906=226.58$.", marks: 1, markCode: "M" },
            { reasoning: "$\\approx226.58$ units².", marks: 1, markCode: "M" },
            { reasoning: "Answer: ≈226.58 units².", marks: 1, markCode: "A" },
          ], finalAnswer: "≈226.58 units²" },
        },
        {
          id: "olm-u6-s4-ar-q16", difficulty: "challenge", totalMarks: 3,
          stem: "A triangular field has two sides 60 m and 80 m with included angle $70°$. Find its area in hectares (1 ha = 10000 m²), correct to 4 decimal places.",
          response: { type: "numeric", parts: [{ label: "a", answer: 0.2255, tolerance: 0.0001, unit: "ha" }] },
          markscheme: { principles: [{ kind: "technique", name: "Area + units", statement: "m² → ha." }], steps: [
            { reasoning: "$A=\\frac12\\times60\\times80\\times\\sin70°=2400\\times0.940=2255.3$ m².", marks: 1, markCode: "M" },
            { reasoning: "$\\frac{2255.3}{10000}=0.2255$ ha.", marks: 1, markCode: "M" },
            { reasoning: "Answer: ≈0.2255 ha.", marks: 1, markCode: "A" },
          ], finalAnswer: "≈0.2255 ha" },
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
            { id: "a", text: "Calculate immediately" },
            { id: "b", text: "Check the answer" },
            { id: "c", text: "Guess the formula" },
            { id: "d", text: "Draw a labelled diagram" },
          ], correctChoiceId: "d" },
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
        {
          id: "olm-u6-s4-co-q5", difficulty: "foundation", totalMarks: 1,
          stem: "In a two-observer angle-of-elevation problem, the key shared feature is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "The observers are the same height" },
            { id: "b", text: "Both triangles share the same height" },
            { id: "c", text: "Both angles are equal" },
            { id: "d", text: "The distances are equal" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "technique", name: "Two-angle problem", statement: "Shared height." }], steps: [{ reasoning: "Same object → same vertical height.", marks: 1, markCode: "A" }], finalAnswer: "Both triangles share the same height" },
        },
        {
          id: "olm-u6-s4-co-q6", difficulty: "foundation", totalMarks: 2,
          stem: "A pole 8 m tall casts a shadow 6 m long. Find the angle of elevation of the sun, correct to 2 decimal places.",
          response: { type: "numeric", parts: [{ label: "a", answer: 53.13, tolerance: 0.01, unit: "°" }] },
          markscheme: { principles: [{ kind: "technique", name: "Elevation", statement: "$\\tan^{-1}(8/6)$." }], steps: [
            { reasoning: "$\\tan\\theta=\\frac86=1.333$ → $\\theta=53.13°$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: ≈53.13°.", marks: 1, markCode: "A" },
          ], finalAnswer: "≈53.13°" },
        },
        {
          id: "olm-u6-s4-co-q7", difficulty: "foundation", totalMarks: 2,
          stem: "A ladder 10 m long has its base 6 m from a wall. How high does it reach?",
          response: { type: "numeric", parts: [{ label: "a", answer: 8, unit: "m" }] },
          markscheme: { principles: [{ kind: "technique", name: "Pythagoras", statement: "3-4-5 scaled." }], steps: [
            { reasoning: "$h=\\sqrt{100-36}=\\sqrt{64}=8$ m.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 8 m.", marks: 1, markCode: "A" },
          ], finalAnswer: "8 m" },
        },
        {
          id: "olm-u6-s4-co-q8", difficulty: "core", totalMarks: 2,
          stem: "A non-right triangle is known by two sides and the included angle. The appropriate rule is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Area of circle" },
            { id: "b", text: "Pythagoras" },
            { id: "c", text: "Cosine rule" },
            { id: "d", text: "Sine rule" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "technique", name: "Rule choice", statement: "SAS → cosine." }], steps: [
            { reasoning: "Included angle → cosine rule.", marks: 1, markCode: "M" },
            { reasoning: "Correct choice.", marks: 1, markCode: "A" },
          ], finalAnswer: "Cosine rule" },
        },
        {
          id: "olm-u6-s4-co-q9", difficulty: "core", totalMarks: 3,
          stem: "Triangle has sides 6, 9 and 13. Find the largest angle, correct to 1 decimal place.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Cosine rule", statement: "Obtuse angle possible." }], steps: [
            { reasoning: "$\\cos C=\\frac{36+81-169}{2\\times6\\times9}=\\frac{-52}{108}=-0.481$.", marks: 1, markCode: "M" },
            { reasoning: "$C=\\cos^{-1}(-0.481)\\approx118.8°$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: ≈118.8° (obtuse ✓).", marks: 1, markCode: "A" },
          ], finalAnswer: "≈118.8°" },
        },
        {
          id: "olm-u6-s4-co-q10", difficulty: "core", totalMarks: 2,
          stem: "A walker goes 9 km on bearing $050°$, then 12 km on bearing $140°$. The angle at the turning point is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$140°$" },
            { id: "b", text: "$90°$" },
            { id: "c", text: "$50°$" },
            { id: "d", text: "$45°$" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "technique", name: "Turn angle", statement: "Back bearing vs new bearing." }], steps: [
            { reasoning: "Back bearing $=050+180=230$; angle $=230-140=90°$.", marks: 1, markCode: "M" },
            { reasoning: "Correct choice: $90°$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$90°$" },
        },
        {
          id: "olm-u6-s4-co-q11", difficulty: "core", totalMarks: 3,
          stem: "A ship sails 8 km due north, then 8 km due east. Find the distance from start to finish, correct to 2 decimal places.",
          response: { type: "numeric", parts: [{ label: "a", answer: 11.31, tolerance: 0.01, unit: "km" }] },
          markscheme: { principles: [{ kind: "technique", name: "Right triangle", statement: "Pythagoras." }], steps: [
            { reasoning: "$d=\\sqrt{64+64}=\\sqrt{128}=11.31$ km.", marks: 1, markCode: "M" },
            { reasoning: "$\\approx11.31$ km.", marks: 1, markCode: "M" },
            { reasoning: "Answer: ≈11.31 km.", marks: 1, markCode: "A" },
          ], finalAnswer: "≈11.31 km" },
        },
        {
          id: "olm-u6-s4-co-q12", difficulty: "challenge", totalMarks: 2,
          stem: "The sine rule can produce two possible triangles when given…",
          response: { type: "mcq", choices: [
            { id: "a", text: "AAS" },
            { id: "b", text: "SSA (two sides and a non-included angle)" },
            { id: "c", text: "SSS" },
            { id: "d", text: "SAS" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "Ambiguous case", statement: "SSA only." }], steps: [
            { reasoning: "SSA is the ambiguous configuration.", marks: 1, markCode: "M" },
            { reasoning: "Correct choice.", marks: 1, markCode: "A" },
          ], finalAnswer: "SSA" },
        },
        {
          id: "olm-u6-s4-co-q13", difficulty: "challenge", totalMarks: 4,
          stem: "Triangle has $a=10$, $b=12$, $A=60°$. Find side c and hence the perimeter.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Cosine rule", statement: "Chain two steps." }], steps: [
            { reasoning: "$c^2=100+144-240\\cos60°=244-120=124$ → $c=11.14$.", marks: 1, markCode: "M" },
            { reasoning: "Perimeter $=10+12+11.14=33.14$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: c ≈ 11.14, perimeter ≈ 33.14.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "c ≈ 11.14, perimeter ≈ 33.14" },
        },
        {
          id: "olm-u6-s4-co-q14", difficulty: "challenge", totalMarks: 4,
          stem: "From a point 25 m from a flagpole the angle of elevation is $40°$. From a point 45 m away the angle of elevation is $25°$. Use both measurements to estimate the flagpole's height.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Cross-check", statement: "Two estimates should agree." }], steps: [
            { reasoning: "From 25 m: $h=25\\tan40°=25\\times0.839=20.98$ m.", marks: 1, markCode: "M" },
            { reasoning: "From 45 m: $h=45\\tan25°=45\\times0.466=20.99$ m.", marks: 1, markCode: "M" },
            { reasoning: "Both give ≈21 m — consistent ✓.", marks: 1, markCode: "M" },
            { reasoning: "Answer: ≈21 m.", marks: 1, markCode: "A" },
          ], finalAnswer: "≈21 m" },
        },
        {
          id: "olm-u6-s4-co-q15", difficulty: "challenge", totalMarks: 3,
          stem: "A triangle has sides 20 and 25 with included angle $65°$. Find its area, correct to 2 decimal places.",
          response: { type: "numeric", parts: [{ label: "a", answer: 226.58, tolerance: 0.01, unit: "units²" }] },
          markscheme: { principles: [{ kind: "formula", name: "Area", statement: "$\\frac12ab\\sin C$." }], steps: [
            { reasoning: "$A=250\\sin65°=250\\times0.906=226.58$ units².", marks: 1, markCode: "M" },
            { reasoning: "$\\approx226.58$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: ≈226.58 units².", marks: 1, markCode: "A" },
          ], finalAnswer: "≈226.58 units²" },
        },
        {
          id: "olm-u6-s4-co-q16", difficulty: "challenge", totalMarks: 2,
          stem: "A ship sails 15 km on bearing $040°$, then 20 km on bearing $130°$. The distance from start to finish is…",
          response: { type: "numeric", parts: [{ label: "a", answer: 25, unit: "km" }] },
          markscheme: { principles: [{ kind: "technique", name: "Navigation", statement: "Turn angle $90°$ → Pythagoras." }], steps: [
            { reasoning: "Turn angle $=130-40=90°$; $d=\\sqrt{225+400}=\\sqrt{625}=25$ km.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 25 km.", marks: 1, markCode: "A" },
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
