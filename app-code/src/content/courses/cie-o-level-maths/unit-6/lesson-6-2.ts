import type { Lesson } from "../../../types.ts";

export const lesson62: Lesson = {
  id: "olm-u6-lesson-6-2",
  code: "6-2",
  title: "Bearings and Elevation",
  goal: "I CAN solve problems using bearings, angles of elevation and depression.",
  standards: ["4024: trigonometry"],
  vocabulary: [
    { term: "Bearing", definition: "Angle measured clockwise from north." },
    { term: "Angle of elevation", definition: "Angle above horizontal looking up." },
    { term: "Angle of depression", definition: "Angle below horizontal looking down." },
    { term: "Three-figure bearing", definition: "Bearing written as three digits e.g. $045°$." },
  ],
  concepts: [
    {
      id: "olm-u6-s2-bearing",
      title: "Bearings",
      skill: "Solve bearing problems at O Level.",
      lesson: {
        sections: [
          { heading: "Measuring bearings", body: "A bearing is measured clockwise from north, always three figures: $045°$, $120°$, $270°$. The back bearing (reverse direction) is found by adding or subtracting $180°$ — e.g. bearing of $050°$ has back bearing $230°$. When two bearings are given from different points, the angle between the paths is found using the back bearing relationship." },
          { heading: "Solving problems", body: "Draw a diagram marking north lines at each point — north lines are parallel, so alternate angles apply. To find a distance or angle, identify the triangle formed by the two points and the target, label known bearings/lengths, find interior angles (often via parallel lines and back bearings), then apply sine/cosine rules or right-triangle trig." },
        ],
        keyFormulas: [
          { name: "Back bearing", statement: "$\\text{bearing} \\pm 180°$" },
          { name: "Three figures", statement: "Always write $xxx°$" },
        ],
        workedExample: { problem: "A ship sails on bearing $060°$ for 20 km, then bearing $150°$ for 15 km. Find the bearing from start to finish (approximate).", solution: "Draw north lines; angle at turn = $150-60=90°$. Path forms right triangle: legs 20 and 15, hypotenuse $=\\sqrt{400+225}=25$ km. Bearing from start: $\\tan^{-1}(15/20)=36.9°$ east of... approximately $060°+\\tan^{-1}(15/20)\\approx097°$." },
      },
      questions: [
        {
          id: "olm-u6-s2-be-q1", difficulty: "foundation", totalMarks: 1,
          stem: "Bearings are measured clockwise from…",
          response: { type: "mcq", choices: [
            { id: "a", text: "West" },
            { id: "b", text: "North" },
            { id: "c", text: "South" },
            { id: "d", text: "East" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "Bearing", statement: "From north clockwise." }], steps: [{ reasoning: "Standard definition.", marks: 1, markCode: "A" }], finalAnswer: "North" },
        },
        {
          id: "olm-u6-s2-be-q2", difficulty: "foundation", totalMarks: 2,
          stem: "Find the back bearing of $075°$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "formula", name: "Back bearing", statement: "$\\pm180°$." }], steps: [
            { reasoning: "$075+180=255°$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $255°$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$255°$" },
        },
        {
          id: "olm-u6-s2-be-q3", difficulty: "core", totalMarks: 3,
          stem: "A hiker walks 8 km on bearing $040°$, then 6 km on bearing $130°$. Find the angle between the two legs of the journey.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Angle between paths", statement: "Difference of bearings." }], steps: [
            { reasoning: "Angle at turn $=130-40=90°$ (bearings measured from parallel north lines).", marks: 1, markCode: "M" },
            { reasoning: "The interior angle of the triangle at the turn is $90°$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $90°$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$90°$" },
        },
        {
          id: "olm-u6-s2-be-q4", difficulty: "core", totalMarks: 4,
          stem: "From point A, point B is on bearing $050°$ at distance 12 km. From B, point C is on bearing $140°$ at distance 9 km. Find AC.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Two-leg journey", statement: "Find angle then cosine rule." }], steps: [
            { reasoning: "At B: back bearing of AB is $050+180=230$; bearing BC is $140$ → angle ABC $=230-140=90°$? Direction reversal: angle between BA ($230°$) and BC ($140°$) = $90°$.", marks: 1, markCode: "M" },
            { reasoning: "Right triangle: $AC=\\sqrt{12^2+9^2}=\\sqrt{225}=15$ km.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 15 km.", marks: 1, markCode: "M" },
            { reasoning: "Verify: $144+81=225=15^2$ ✓.", marks: 1, markCode: "A" },
          ], finalAnswer: "15 km" },
        },
        {
          id: "olm-u6-s2-be-q5", difficulty: "foundation", totalMarks: 1,
          stem: "The three-figure bearing of a point due east of you is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$180°$" },
            { id: "b", text: "$045°$" },
            { id: "c", text: "$090°$" },
            { id: "d", text: "$270°$" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "Bearing", statement: "Clockwise from north, 3 figures." }], steps: [{ reasoning: "East is $90°$ clockwise from north → $090°$.", marks: 1, markCode: "A" }], finalAnswer: "$090°$" },
        },
        {
          id: "olm-u6-s2-be-q6", difficulty: "foundation", totalMarks: 2,
          stem: "Find the back bearing of $200°$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 20, unit: "°" }] },
          markscheme: { principles: [{ kind: "formula", name: "Back bearing", statement: "$\\pm180°$." }], steps: [
            { reasoning: "$200-180=20°$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $020°$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$020°$" },
        },
        {
          id: "olm-u6-s2-be-q7", difficulty: "foundation", totalMarks: 1,
          stem: "The bearing of a point due south is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$090°$" },
            { id: "b", text: "$270°$" },
            { id: "c", text: "$000°$" },
            { id: "d", text: "$180°$" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "Bearing", statement: "Clockwise from north." }], steps: [{ reasoning: "South is opposite north → $180°$.", marks: 1, markCode: "A" }], finalAnswer: "$180°$" },
        },
        {
          id: "olm-u6-s2-be-q8", difficulty: "core", totalMarks: 2,
          stem: "A point P has bearing $300°$ from point Q. The bearing of Q from P is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$120°$" },
            { id: "b", text: "$030°$" },
            { id: "c", text: "$060°$" },
            { id: "d", text: "$210°$" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "formula", name: "Back bearing", statement: "$+180°$ then mod 360." }], steps: [
            { reasoning: "$300-180=120°$.", marks: 1, markCode: "M" },
            { reasoning: "Correct choice: $120°$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$120°$" },
        },
        {
          id: "olm-u6-s2-be-q9", difficulty: "core", totalMarks: 3,
          stem: "A walker goes 10 km on bearing $060°$, then 10 km on bearing $150°$. Find the distance between start and finish.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Angle between paths", statement: "Bearing difference gives turn angle." }], steps: [
            { reasoning: "Angle at turn $=150-60=90°$ → right triangle.", marks: 1, markCode: "M" },
            { reasoning: "$d=\\sqrt{10^2+10^2}=\\sqrt{200}=10\\sqrt2\\approx14.1$ km.", marks: 1, markCode: "M" },
            { reasoning: "Answer: ≈14.1 km.", marks: 1, markCode: "A" },
          ], finalAnswer: "≈14.1 km" },
        },
        {
          id: "olm-u6-s2-be-q10", difficulty: "core", totalMarks: 3,
          stem: "From A, B is 8 km away on bearing $110°$. From B, C is 6 km away on bearing $200°$. Find AC.",
          response: { type: "numeric", parts: [{ label: "a", answer: 10, unit: "km" }] },
          markscheme: { principles: [{ kind: "technique", name: "Two-leg journey", statement: "Back bearing gives interior angle." }], steps: [
            { reasoning: "At B: bearing of BA $=110+180=290$; angle ABC $=290-200=90°$.", marks: 1, markCode: "M" },
            { reasoning: "$AC=\\sqrt{64+36}=10$ km.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 10 km.", marks: 1, markCode: "A" },
          ], finalAnswer: "10 km" },
        },
        {
          id: "olm-u6-s2-be-q11", difficulty: "core", totalMarks: 3,
          stem: "A cyclist rides 7 km on bearing $040°$, then 7 km on bearing $130°$. Find the distance from start to finish, correct to 2 decimal places.",
          response: { type: "numeric", parts: [{ label: "a", answer: 9.9, tolerance: 0.01, unit: "km" }] },
          markscheme: { principles: [{ kind: "technique", name: "Two-leg journey", statement: "90° turn → Pythagoras." }], steps: [
            { reasoning: "Angle at turn $=130-40=90°$.", marks: 1, markCode: "M" },
            { reasoning: "$d=\\sqrt{49+49}=\\sqrt{98}=9.90$ km.", marks: 1, markCode: "M" },
            { reasoning: "Answer: ≈9.90 km.", marks: 1, markCode: "A" },
          ], finalAnswer: "≈9.90 km" },
        },
        {
          id: "olm-u6-s2-be-q12", difficulty: "challenge", totalMarks: 2,
          stem: "In a bearings problem with several points, the north lines at each point are…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Perpendicular" },
            { id: "b", text: "Intersecting at 60°" },
            { id: "c", text: "Random" },
            { id: "d", text: "Parallel" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "technique", name: "Parallel lines", statement: "Gives alternate/co-interior angles." }], steps: [
            { reasoning: "All north lines point the same way → parallel.", marks: 1, markCode: "M" },
            { reasoning: "Correct choice: parallel.", marks: 1, markCode: "A" },
          ], finalAnswer: "Parallel" },
        },
        {
          id: "olm-u6-s2-be-q13", difficulty: "challenge", totalMarks: 4,
          stem: "A ship sails 12 km on bearing $030°$, then 16 km on bearing $120°$. Find the distance from start to finish.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Two-leg journey", statement: "Check for right angle first." }], steps: [
            { reasoning: "Turn angle $=120-30=90°$ → right triangle.", marks: 1, markCode: "M" },
            { reasoning: "$d=\\sqrt{144+256}=\\sqrt{400}=20$ km.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 20 km.", marks: 1, markCode: "M" },
            { reasoning: "12-16-20 is 3-4-5 scaled by 4 ✓.", marks: 1, markCode: "A" },
          ], finalAnswer: "20 km" },
        },
        {
          id: "olm-u6-s2-be-q14", difficulty: "challenge", totalMarks: 4,
          stem: "A drone flies 10 km on bearing $080°$, then 10 km on bearing $170°$. Find the distance from start to finish and the bearing of the finish point from the start.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Two-leg journey", statement: "Right triangle then bearing." }], steps: [
            { reasoning: "Turn angle $=170-80=90°$; $d=\\sqrt{200}=10\\sqrt2\\approx14.14$ km.", marks: 1, markCode: "M" },
            { reasoning: "Finish is NE of start; direction $=80°+\\tan^{-1}(1)=80+45=125°$.", marks: 1, markCode: "M" },
            { reasoning: "Check: legs equal → 45° offset from first bearing.", marks: 1, markCode: "M" },
            { reasoning: "Answer: ≈14.14 km on bearing $125°$.", marks: 1, markCode: "A" },
          ], finalAnswer: "≈14.14 km, bearing $125°$" },
        },
        {
          id: "olm-u6-s2-be-q15", difficulty: "challenge", totalMarks: 3,
          stem: "Find the back bearing of $335°$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 155, unit: "°" }] },
          markscheme: { principles: [{ kind: "formula", name: "Back bearing", statement: "$-180°$." }], steps: [
            { reasoning: "$335-180=155°$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $155°$.", marks: 1, markCode: "M" },
            { reasoning: "Check: $155+180=335$ ✓.", marks: 1, markCode: "A" },
          ], finalAnswer: "$155°$" },
        },
        {
          id: "olm-u6-s2-be-q16", difficulty: "challenge", totalMarks: 4,
          stem: "A boat sails 12 km on bearing $030°$, then 10 km on bearing $100°$. Find the distance from start to finish.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Cosine rule", statement: "Non-right turn angle." }], steps: [
            { reasoning: "At turn: bearing of return path $=030+180=210$; angle $=210-100=110°$.", marks: 1, markCode: "M" },
            { reasoning: "$d^2=144+100-2\\times12\\times10\\times\\cos110°=244+82.1=326.1$.", marks: 1, markCode: "M" },
            { reasoning: "$d=\\sqrt{326.1}\\approx18.1$ km.", marks: 1, markCode: "M" },
            { reasoning: "Answer: ≈18.1 km.", marks: 1, markCode: "A" },
          ], finalAnswer: "≈18.1 km" },
        },
      ],
    },
    {
      id: "olm-u6-s2-elevation",
      title: "Angles of elevation and depression",
      skill: "Solve elevation/depression problems at O Level.",
      lesson: {
        sections: [
          { heading: "Definitions", body: "Angle of elevation: looking up from horizontal. Angle of depression: looking down from horizontal. Both are measured from the horizontal line, not vertical. Angles of depression from a height equal the angle of elevation from below (alternate angles with parallel horizontals)." },
          { heading: "Problem solving", body: "Draw the horizontal line first, then the angle. Heights are usually opposite the angle; distances along ground are adjacent; sight lines are hypotenuses. For two-object problems (e.g. two observers), set up two right triangles sharing a height or base and solve simultaneously or via the difference in angles." },
        ],
        keyFormulas: [
          { name: "Elevation/Depression", statement: "Measured from horizontal; equal via alternate angles" },
        ],
        workedExample: { problem: "From the top of a 50 m cliff, the angle of depression to a boat is $20°$. How far is the boat from the base?", solution: "Angle of elevation from boat = $20°$; $\\tan20°=\\frac{50}{d}$ → $d=\\frac{50}{\\tan20°}=\\frac{50}{0.364}\\approx137$ m." },
      },
      questions: [
        {
          id: "olm-u6-s2-el-q1", difficulty: "foundation", totalMarks: 1,
          stem: "Angle of depression is measured from…",
          response: { type: "mcq", choices: [
            { id: "a", text: "North" },
            { id: "b", text: "The horizontal" },
            { id: "c", text: "The vertical" },
            { id: "d", text: "The ground" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "Depression", statement: "From horizontal down." }], steps: [{ reasoning: "Standard definition.", marks: 1, markCode: "A" }], finalAnswer: "The horizontal" },
        },
        {
          id: "olm-u6-s2-el-q2", difficulty: "foundation", totalMarks: 2,
          stem: "From 30 m away, the angle of elevation to a tree top is $35°$. Find the tree height.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Elevation", statement: "$\\tan=O/A$." }], steps: [
            { reasoning: "$h=30\\tan35°=30\\times0.700=21.0$ m.", marks: 1, markCode: "M" },
            { reasoning: "Answer: ≈21 m.", marks: 1, markCode: "A" },
          ], finalAnswer: "≈21 m" },
        },
        {
          id: "olm-u6-s2-el-q3", difficulty: "core", totalMarks: 3,
          stem: "The angle of depression from a 40 m building to a car is $30°$. Find the distance from the building.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Depression", statement: "Height opposite, distance adjacent." }], steps: [
            { reasoning: "$\\tan30°=\\frac{40}{d}$ → $d=\\frac{40}{0.577}=69.3$ m.", marks: 1, markCode: "M" },
            { reasoning: "Answer: ≈69 m.", marks: 1, markCode: "M" },
            { reasoning: "Or $40\\cot30°=40\\sqrt3\\approx69.3$ m.", marks: 1, markCode: "A" },
          ], finalAnswer: "≈69 m" },
        },
        {
          id: "olm-u6-s2-el-q4", difficulty: "core", totalMarks: 4,
          stem: "Two observers 100 m apart on flat ground measure angles of elevation to a tower top as $30°$ and $45°$ from the nearer observer. Find the tower height.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Two-angle problem", statement: "Two triangles sharing height." }], steps: [
            { reasoning: "Let nearer distance be $d$: $h=d\\tan45°=d$; far: $h=(d+100)\\tan30°=(d+100)\\times0.577$.", marks: 1, markCode: "M" },
            { reasoning: "$d=0.577d+57.7$ → $0.423d=57.7$ → $d\\approx136$ m.", marks: 1, markCode: "M" },
            { reasoning: "$h=d\\tan45°=136$ m (or directly $136\\times1$).", marks: 1, markCode: "M" },
            { reasoning: "Answer: ≈136 m.", marks: 1, markCode: "A" },
          ], finalAnswer: "≈136 m" },
        },
        {
          id: "olm-u6-s2-el-q5", difficulty: "foundation", totalMarks: 1,
          stem: "An angle of elevation is measured from…",
          response: { type: "mcq", choices: [
            { id: "a", text: "The object" },
            { id: "b", text: "The horizontal line" },
            { id: "c", text: "The vertical line" },
            { id: "d", text: "The ground" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "Elevation", statement: "From horizontal up." }], steps: [{ reasoning: "Standard definition.", marks: 1, markCode: "A" }], finalAnswer: "The horizontal line" },
        },
        {
          id: "olm-u6-s2-el-q6", difficulty: "foundation", totalMarks: 2,
          stem: "From a point 20 m from a tree, the angle of elevation to the top is $30°$. Find the tree's height, correct to 2 decimal places.",
          response: { type: "numeric", parts: [{ label: "a", answer: 11.55, tolerance: 0.01, unit: "m" }] },
          markscheme: { principles: [{ kind: "technique", name: "Elevation", statement: "$h=d\\tan\\theta$." }], steps: [
            { reasoning: "$h=20\\tan30°=20\\times0.577=11.55$ m.", marks: 1, markCode: "M" },
            { reasoning: "Answer: ≈11.55 m.", marks: 1, markCode: "A" },
          ], finalAnswer: "≈11.55 m" },
        },
        {
          id: "olm-u6-s2-el-q7", difficulty: "foundation", totalMarks: 1,
          stem: "The angle of depression from a 25 m cliff to a boat is $45°$. The boat is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "12.5 m from the base" },
            { id: "b", text: "50 m from the base" },
            { id: "c", text: "43 m from the base" },
            { id: "d", text: "25 m from the base" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "technique", name: "Depression", statement: "$\\tan45°=1$ → distance = height." }], steps: [
            { reasoning: "$d=\\frac{25}{\\tan45°}=25$ m.", marks: 1, markCode: "A" },
          ], finalAnswer: "25 m" },
        },
        {
          id: "olm-u6-s2-el-q8", difficulty: "core", totalMarks: 2,
          stem: "The angle of depression from a cliff top equals the angle of elevation from the boat because…",
          response: { type: "mcq", choices: [
            { id: "a", text: "They sum to 180°" },
            { id: "b", text: "They are alternate angles between parallel horizontals" },
            { id: "c", text: "They are always 45°" },
            { id: "d", text: "The triangle is equilateral" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "technique", name: "Alternate angles", statement: "Parallel horizontal lines." }], steps: [
            { reasoning: "Horizontal lines are parallel → alternate angles equal.", marks: 1, markCode: "M" },
            { reasoning: "Correct choice.", marks: 1, markCode: "A" },
          ], finalAnswer: "Alternate angles between parallel horizontals" },
        },
        {
          id: "olm-u6-s2-el-q9", difficulty: "core", totalMarks: 3,
          stem: "A vertical pole is 30 m tall. From a point on the ground, the angle of elevation to its top is $40°$. Find the distance from the point to the pole.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Elevation", statement: "$d=h/\\tan\\theta$." }], steps: [
            { reasoning: "$\\tan40°=\\frac{30}{d}$ → $d=\\frac{30}{0.839}=35.75$ m.", marks: 1, markCode: "M" },
            { reasoning: "Answer: ≈35.8 m.", marks: 1, markCode: "M" },
            { reasoning: "Or $30\\cot40°$.", marks: 1, markCode: "A" },
          ], finalAnswer: "≈35.8 m" },
        },
        {
          id: "olm-u6-s2-el-q10", difficulty: "core", totalMarks: 3,
          stem: "From a point 60 m from the base of a building, the angle of depression from its roof is $25°$. Find the building's height.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Depression", statement: "Height = distance × tan." }], steps: [
            { reasoning: "$h=60\\tan25°=60\\times0.466=28.0$ m.", marks: 1, markCode: "M" },
            { reasoning: "Answer: ≈28 m.", marks: 1, markCode: "M" },
            { reasoning: "Angle of elevation from ground equals 25° ✓.", marks: 1, markCode: "A" },
          ], finalAnswer: "≈28 m" },
        },
        {
          id: "olm-u6-s2-el-q11", difficulty: "core", totalMarks: 3,
          stem: "The angle of elevation to the top of a 45 m tower is $50°$. Find the distance from the observer to the tower, correct to 2 decimal places.",
          response: { type: "numeric", parts: [{ label: "a", answer: 37.76, tolerance: 0.01, unit: "m" }] },
          markscheme: { principles: [{ kind: "technique", name: "Elevation", statement: "$d=h\\cot\\theta$." }], steps: [
            { reasoning: "$d=\\frac{45}{\\tan50°}=\\frac{45}{1.1918}=37.76$ m.", marks: 1, markCode: "M" },
            { reasoning: "$\\approx37.76$ m.", marks: 1, markCode: "M" },
            { reasoning: "Answer: ≈37.76 m.", marks: 1, markCode: "A" },
          ], finalAnswer: "≈37.76 m" },
        },
        {
          id: "olm-u6-s2-el-q12", difficulty: "challenge", totalMarks: 2,
          stem: "In an angle-of-elevation problem, the line of sight from observer to top of object is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "The adjacent side" },
            { id: "b", text: "The opposite side" },
            { id: "c", text: "The hypotenuse" },
            { id: "d", text: "Parallel to the ground" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "technique", name: "Triangle setup", statement: "Sight line opposes right angle." }], steps: [
            { reasoning: "Sight line is longest side → hypotenuse.", marks: 1, markCode: "M" },
            { reasoning: "Correct choice: hypotenuse.", marks: 1, markCode: "A" },
          ], finalAnswer: "The hypotenuse" },
        },
        {
          id: "olm-u6-s2-el-q13", difficulty: "challenge", totalMarks: 4,
          stem: "Two observers stand 80 m apart on flat ground in line with a tower. The nearer observer measures an angle of elevation of $55°$ and the farther one $35°$. Find the tower's height.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Two-angle problem", statement: "Share the height." }], steps: [
            { reasoning: "Let nearer distance be $d$: $h=d\\tan55°=1.428d$; far: $h=(d+80)\\tan35°=0.700(d+80)$.", marks: 1, markCode: "M" },
            { reasoning: "$1.428d=0.700d+56.0$ → $0.728d=56.0$ → $d\\approx77.0$ m.", marks: 1, markCode: "M" },
            { reasoning: "$h=1.428\\times77.0\\approx110$ m.", marks: 1, markCode: "M" },
            { reasoning: "Answer: ≈110 m.", marks: 1, markCode: "A" },
          ], finalAnswer: "≈110 m" },
        },
        {
          id: "olm-u6-s2-el-q14", difficulty: "challenge", totalMarks: 4,
          stem: "From the top of a 90 m cliff, the angle of depression to a boat is $60°$. Find the distance of the boat from the base of the cliff.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Depression", statement: "$d=h\\cot\\theta$." }], steps: [
            { reasoning: "$\\tan60°=\\frac{90}{d}$ → $d=\\frac{90}{1.732}=51.96$ m.", marks: 1, markCode: "M" },
            { reasoning: "Or $90\\cot60°=90\\times0.577=51.96$ m.", marks: 1, markCode: "M" },
            { reasoning: "Answer: ≈52.0 m.", marks: 1, markCode: "M" },
            { reasoning: "Angle of elevation from boat = $60°$ ✓.", marks: 1, markCode: "A" },
          ], finalAnswer: "≈52.0 m" },
        },
        {
          id: "olm-u6-s2-el-q15", difficulty: "challenge", totalMarks: 3,
          stem: "A slope rises 15 m vertically over a horizontal distance of 20 m. Find the angle of the slope to the horizontal, correct to 2 decimal places.",
          response: { type: "numeric", parts: [{ label: "a", answer: 36.87, tolerance: 0.01, unit: "°" }] },
          markscheme: { principles: [{ kind: "technique", name: "Tan inverse", statement: "$\\tan^{-1}(15/20)$." }], steps: [
            { reasoning: "$\\tan\\theta=\\frac{15}{20}=0.75$ → $\\theta=36.87°$.", marks: 1, markCode: "M" },
            { reasoning: "$\\approx36.87°$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: ≈36.87°.", marks: 1, markCode: "A" },
          ], finalAnswer: "≈36.87°" },
        },
        {
          id: "olm-u6-s2-el-q16", difficulty: "challenge", totalMarks: 3,
          stem: "A kite string of length 100 m makes an angle of $60°$ with the horizontal and is attached 2 m above the ground. Find the kite's height above the ground, correct to 2 decimal places.",
          response: { type: "numeric", parts: [{ label: "a", answer: 88.6, tolerance: 0.01, unit: "m" }] },
          markscheme: { principles: [{ kind: "technique", name: "Elevation", statement: "Add attachment height." }], steps: [
            { reasoning: "Height above hand $=100\\sin60°=86.60$ m.", marks: 1, markCode: "M" },
            { reasoning: "Total $=86.60+2=88.60$ m.", marks: 1, markCode: "M" },
            { reasoning: "Answer: ≈88.60 m.", marks: 1, markCode: "A" },
          ], finalAnswer: "≈88.60 m" },
        },
      ],
    },
  ],
  notes: [
    { id: "olm-u6-s2-trigapp-notes", title: "Bearings & elevation — notes", summary: "Navigation and height problems.",
      sections: [
        { heading: "Bearings", body: "From north clockwise, 3 figures; back bearing $\\pm180°$; parallel north lines give alternate angles." },
        { heading: "Elevation", body: "From horizontal; height opposite, distance adjacent; depression = elevation via alternate angles." },
      ] },
  ],
};
