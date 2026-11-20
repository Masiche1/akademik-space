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
            { id: "a", text: "North" }, { id: "b", text: "South" }, { id: "c", text: "East" }, { id: "d", text: "West" },
          ], correctChoiceId: "a" },
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
            { id: "a", text: "The horizontal" }, { id: "b", text: "The vertical" }, { id: "c", text: "The ground" }, { id: "d", text: "North" },
          ], correctChoiceId: "a" },
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
